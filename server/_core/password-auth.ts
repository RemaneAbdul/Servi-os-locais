import { createHash, randomBytes, scrypt as scryptCallback, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";
import type { Express, Request, Response } from "express";
import { getUserByEmail, upsertUser } from "../db";
import { COOKIE_NAME, ONE_YEAR_MS } from "../../shared/const.js";
import { getSessionCookieOptions } from "./cookies";
import { sdk } from "./sdk";

const scrypt = promisify(scryptCallback);
const PASSWORD_KEY_LENGTH = 64;
const SALT_LENGTH = 16;

function normalizeEmail(value: unknown): string {
  return typeof value === "string" ? value.trim().toLowerCase() : "";
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function hashPassword(password: string): Promise<string> {
  const salt = randomBytes(SALT_LENGTH).toString("hex");
  const derived = (await scrypt(password, salt, PASSWORD_KEY_LENGTH)) as Buffer;
  return `scrypt:${salt}:${derived.toString("hex")}`;
}

async function verifyPassword(password: string, stored: string): Promise<boolean> {
  const parts = stored.split(":");
  if (parts.length !== 3 || parts[0] !== "scrypt") return false;
  const [, salt, expectedHex] = parts;
  const expected = Buffer.from(expectedHex, "hex");
  const derived = (await scrypt(password, salt, expected.length)) as Buffer;
  return expected.length === derived.length && timingSafeEqual(expected, derived);
}

function publicUser(user: any) {
  return {
    id: user.id,
    openId: user.openId,
    name: user.name,
    email: user.email,
    loginMethod: user.loginMethod,
    userType: user.userType ?? "client",
    role: user.role,
    lastSignedIn: new Date(user.lastSignedIn).toISOString(),
  };
}

async function issueSession(req: Request, res: Response, user: any) {
  const sessionToken = await sdk.createSessionToken(user.openId, {
    name: user.name || user.email || "Utilizador",
    expiresInMs: ONE_YEAR_MS,
  });

  const cookieOptions = getSessionCookieOptions(req);
  res.cookie(COOKIE_NAME, sessionToken, {
    ...cookieOptions,
    maxAge: ONE_YEAR_MS,
  });

  return sessionToken;
}

export function registerPasswordAuthRoutes(app: Express) {
  app.post("/api/auth/login", async (req: Request, res: Response) => {
    try {
      const email = normalizeEmail(req.body?.email);
      const password = typeof req.body?.password === "string" ? req.body.password : "";

      if (!email || !password) {
        res.status(400).json({ error: "Email e palavra-passe são obrigatórios." });
        return;
      }
      if (!isValidEmail(email)) {
        res.status(400).json({ error: "Informe um email válido." });
        return;
      }

      const user = await getUserByEmail(email);
      if (!user || !user.passwordHash) {
        res.status(401).json({ error: "Email ou palavra-passe incorrectos." });
        return;
      }

      const valid = await verifyPassword(password, user.passwordHash);
      if (!valid) {
        res.status(401).json({ error: "Email ou palavra-passe incorrectos." });
        return;
      }

      await upsertUser({
        openId: user.openId,
        lastSignedIn: new Date(),
      });

      const updatedUser = (await getUserByEmail(email)) ?? user;
      const sessionToken = await issueSession(req, res, updatedUser);

      res.json({
        success: true,
        sessionToken,
        user: publicUser(updatedUser),
      });
    } catch (error) {
      console.error("[Auth] Password login failed:", error);
      res.status(500).json({ error: "Não foi possível iniciar a sessão. Tente novamente." });
    }
  });

  app.post("/api/auth/register", async (req: Request, res: Response) => {
    try {
      const email = normalizeEmail(req.body?.email);
      const password = typeof req.body?.password === "string" ? req.body.password : "";
      const confirmPassword = typeof req.body?.confirmPassword === "string" ? req.body.confirmPassword : "";
      const name = typeof req.body?.name === "string" ? req.body.name.trim() : "";
      const requestedUserType = req.body?.userType === "professional" ? "professional" : "client";

      if (!email || !password || !confirmPassword) {
        res.status(400).json({ error: "Preencha todos os campos obrigatórios." });
        return;
      }
      if (!isValidEmail(email)) {
        res.status(400).json({ error: "Informe um email válido." });
        return;
      }
      if (password.length < 6) {
        res.status(400).json({ error: "A palavra-passe deve ter pelo menos 6 caracteres." });
        return;
      }
      if (password !== confirmPassword) {
        res.status(400).json({ error: "As palavras-passe não coincidem." });
        return;
      }

      const existing = await getUserByEmail(email);
      if (existing) {
        res.status(409).json({ error: "Este email já está registado." });
        return;
      }

      const openId = `local:${createHash("sha256").update(`${email}:${randomBytes(16).toString("hex")}`).digest("hex")}`;
      const passwordHash = await hashPassword(password);

      await upsertUser({
        openId,
        name: name || email.split("@")[0],
        email,
        loginMethod: "email",
        userType: requestedUserType,
        passwordHash,
        lastSignedIn: new Date(),
      });

      const user = await getUserByEmail(email);
      if (!user) {
        res.status(500).json({ error: "Não foi possível criar a conta." });
        return;
      }

      const sessionToken = await issueSession(req, res, user);
      res.status(201).json({
        success: true,
        sessionToken,
        user: publicUser(user),
      });
    } catch (error) {
      console.error("[Auth] Registration failed:", error);
      res.status(500).json({ error: "Não foi possível criar a conta. Tente novamente." });
    }
  });
}
