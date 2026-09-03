import "dotenv/config";
import express, { type Express } from "express";
import { createServer } from "http";
import net from "net";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { registerOAuthRoutes } from "./oauth";
import { registerPasswordAuthRoutes } from "./password-auth";
import { appRouter } from "../routers";
import { createContext } from "./context";
import { getDb } from "../db";
import { ENV } from "./env";

function isPortAvailable(port: number): Promise<boolean> {
  return new Promise((resolve) => {
    const server = net.createServer();
    server.listen(port, () => server.close(() => resolve(true)));
    server.on("error", () => resolve(false));
  });
}

async function findAvailablePort(startPort = 3000): Promise<number> {
  for (let port = startPort; port < startPort + 20; port++) {
    if (await isPortAvailable(port)) return port;
  }
  throw new Error(`No available port found starting from ${startPort}`);
}

/** Creates the Express application without opening a listening socket. */
export function createApp(): Express {
  const app = express();
  app.set("trust proxy", 1);

  app.use((req, res, next) => {
    const origin = req.headers.origin;
    if (origin) res.header("Access-Control-Allow-Origin", origin);
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Vary", "Origin");
    if (req.method === "OPTIONS") {
      res.sendStatus(204);
      return;
    }
    next();
  });

  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));

  registerPasswordAuthRoutes(app);
  registerOAuthRoutes(app);

  app.get("/api/health", async (_req, res) => {
    try {
      const db = await getDb();
      if (!db) {
        res.status(503).json({
          ok: false,
          database: false,
          authentication: Boolean(ENV.cookieSecret),
          error: "DATABASE_URL não está configurada.",
          timestamp: Date.now(),
        });
        return;
      }

      res.json({
        ok: true,
        database: true,
        authentication: Boolean(ENV.cookieSecret),
        oauth: Boolean(ENV.oAuthServerUrl && ENV.appId),
        timestamp: Date.now(),
      });
    } catch (error) {
      console.error("[Health] Database check failed:", error);
      res.status(503).json({
        ok: false,
        database: false,
        authentication: Boolean(ENV.cookieSecret),
        error: "Banco de dados indisponível.",
        timestamp: Date.now(),
      });
    }
  });

  app.use("/api/trpc", createExpressMiddleware({ router: appRouter, createContext }));
  return app;
}

/** Local development entry point. Vercel imports createApp() instead. */
async function startServer() {
  const app = createApp();
  const server = createServer(app);
  const preferredPort = parseInt(process.env.PORT || "3000", 10);
  const port = await findAvailablePort(preferredPort);
  if (port !== preferredPort) console.log(`Port ${preferredPort} is busy, using port ${port} instead`);
  server.listen(port, () => console.log(`[api] server listening on port ${port}`));
}

if (process.env.VERCEL !== "1") {
  startServer().catch((error) => {
    console.error("[api] failed to start server:", error);
    process.exitCode = 1;
  });
}
