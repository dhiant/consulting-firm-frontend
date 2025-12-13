import bcrypt from "bcryptjs";
import crypto from "crypto";
import db from "./db";

const DEFAULT_EMAIL = "info@aimterior.com";
const DEFAULT_PASSWORD = "#StrongPassword@123";

// Session configuration
const SESSION_DURATION_HOURS = 24; // 24 hours
const MAX_LOGIN_ATTEMPTS = 5; // Max attempts per hour

// Initialize default admin user if it doesn't exist
export function initAdminUser() {
  const existingAdmin = db
    .prepare("SELECT id FROM admin_users WHERE email = ?")
    .get(DEFAULT_EMAIL);

  if (!existingAdmin) {
    const hashedPassword = bcrypt.hashSync(DEFAULT_PASSWORD, 10);
    db.prepare("INSERT INTO admin_users (email, password) VALUES (?, ?)").run(
      DEFAULT_EMAIL,
      hashedPassword
    );
  }
}

// Verify admin credentials
export function verifyAdmin(email: string, password: string): boolean {
  const admin = db
    .prepare("SELECT password FROM admin_users WHERE email = ?")
    .get(email) as { password: string } | undefined;

  if (!admin) {
    return false;
  }

  return bcrypt.compareSync(password, admin.password);
}

// Check if user is locked out due to too many failed attempts
export function isLockedOut(email: string): boolean {
  const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();
  const failedAttempts = db
    .prepare(
      `SELECT COUNT(*) as count FROM login_attempts 
       WHERE email = ? AND attempted_at > ? AND success = 0`
    )
    .get(email, oneHourAgo) as { count: number } | undefined;

  if (!failedAttempts) return false;

  return failedAttempts.count >= MAX_LOGIN_ATTEMPTS;
}

// Record login attempt
export function recordLoginAttempt(
  email: string,
  success: boolean,
  ipAddress?: string
): void {
  db.prepare(
    `INSERT INTO login_attempts (email, ip_address, success) VALUES (?, ?, ?)`
  ).run(email, ipAddress || null, success ? 1 : 0);
}

// Generate secure session token
export function generateSessionToken(): string {
  return crypto.randomBytes(32).toString("hex");
}

// Create a new session
export function createSession(userId: number): string {
  const token = generateSessionToken();
  const expiresAt = new Date(
    Date.now() + SESSION_DURATION_HOURS * 60 * 60 * 1000
  ).toISOString();

  db.prepare(
    `INSERT INTO admin_sessions (token, user_id, expires_at) VALUES (?, ?, ?)`
  ).run(token, userId, expiresAt);

  return token;
}

// Verify session token
export function verifySession(token: string): {
  valid: boolean;
  userId?: number;
} {
  if (!token || token.length !== 64) {
    return { valid: false };
  }

  const session = db
    .prepare(
      `SELECT user_id, expires_at FROM admin_sessions 
       WHERE token = ? AND expires_at > datetime('now')`
    )
    .get(token) as { user_id: number; expires_at: string } | undefined;

  if (!session) {
    return { valid: false };
  }

  return { valid: true, userId: session.user_id };
}

// Get user ID by email
export function getUserIdByEmail(email: string): number | null {
  const user = db
    .prepare("SELECT id FROM admin_users WHERE email = ?")
    .get(email) as { id: number } | undefined;

  return user?.id || null;
}

// Invalidate session
export function invalidateSession(token: string): void {
  db.prepare("DELETE FROM admin_sessions WHERE token = ?").run(token);
}

// Invalidate all sessions for a user
export function invalidateAllUserSessions(userId: number): void {
  db.prepare("DELETE FROM admin_sessions WHERE user_id = ?").run(userId);
}

// Clean up expired sessions (should be called periodically)
export function cleanupExpiredSessions(): void {
  db.prepare(
    "DELETE FROM admin_sessions WHERE expires_at < datetime('now')"
  ).run();
}

// Initialize on import
initAdminUser();
