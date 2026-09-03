import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users } from "../drizzle/schema";
import { ENV } from "./_core/env";

let _db: ReturnType<typeof drizzle> | null = null;
let _authColumnsReady = false;

export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }

  // Keep existing installations compatible with the new authentication fields.
  // This is intentionally additive: no users or existing data are removed.
  if (_db && !_authColumnsReady) {
    try {
      await _db.execute("ALTER TABLE users ADD COLUMN IF NOT EXISTS userType ENUM('client','professional') NOT NULL DEFAULT 'client'");
      await _db.execute("ALTER TABLE users ADD COLUMN IF NOT EXISTS passwordHash TEXT NULL");
      _authColumnsReady = true;
    } catch (error) {
      console.error("[Database] Failed to prepare authentication columns:", error);
      throw error;
    }
  }

  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) throw new Error("User openId is required for upsert");

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = { openId: user.openId };
    const updateSet: Record<string, unknown> = {};

    const nullableFields = ["name", "email", "loginMethod", "passwordHash"] as const;
    type NullableField = (typeof nullableFields)[number];

    for (const field of nullableFields) {
      if (user[field] !== undefined) {
        const value = user[field] ?? null;
        values[field] = value;
        updateSet[field] = value;
      }
    }

    if (user.userType !== undefined) {
      values.userType = user.userType;
      updateSet.userType = user.userType;
    }
    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = "admin";
      updateSet.role = "admin";
    }

    if (!values.lastSignedIn) values.lastSignedIn = new Date();
    if (Object.keys(updateSet).length === 0) updateSet.lastSignedIn = new Date();

    await db.insert(users).values(values).onDuplicateKeyUpdate({ set: updateSet });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function getUserByEmail(email: string) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(users).where(eq(users.email, email)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}
