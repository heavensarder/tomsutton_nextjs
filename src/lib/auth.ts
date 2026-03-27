import crypto from 'crypto';

const SESSION_SECRET = process.env.ADMIN_SESSION_SECRET || 'ts-heating-admin-secret-key-2026';

// Hardcoded admin credentials
export const ADMIN_USERNAME = 'admin_tomsutton';
export const ADMIN_EMAIL = 'info@tomsuttonheating.co.uk';
const ADMIN_RAW_PASSWORD = 'TomSutton2026@#!';

export function hashPassword(password: string): string {
  return crypto.createHash('sha256').update(password).digest('hex');
}

export function getAdminPasswordHash(): string {
  return hashPassword(ADMIN_RAW_PASSWORD);
}

export function verifyPassword(password: string, hash: string): boolean {
  return hashPassword(password) === hash;
}

export function createSessionToken(username: string, email: string): string {
  const payload = JSON.stringify({
    username,
    email,
    exp: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
  });
  const encodedPayload = Buffer.from(payload).toString('base64url');
  const signature = crypto
    .createHmac('sha256', SESSION_SECRET)
    .update(encodedPayload)
    .digest('hex');
  return `${encodedPayload}.${signature}`;
}

export function verifySessionToken(token: string): { username: string; email: string } | null {
  try {
    const [encodedPayload, signature] = token.split('.');
    if (!encodedPayload || !signature) return null;

    const expectedSignature = crypto
      .createHmac('sha256', SESSION_SECRET)
      .update(encodedPayload)
      .digest('hex');

    if (signature !== expectedSignature) return null;

    const payload = JSON.parse(Buffer.from(encodedPayload, 'base64url').toString());
    if (payload.exp < Date.now()) return null;

    return { username: payload.username, email: payload.email };
  } catch {
    return null;
  }
}

export const SESSION_COOKIE_NAME = 'admin_session';
