import crypto from "crypto";

/**
 * Auth for the internal /review control page. The login password is either a
 * dedicated REVIEW_PASSWORD (nicer, set in Vercel when convenient) or the
 * existing GROWTH_SHARED_SECRET (works immediately, no new env var needed).
 * The auth cookie stores a derived token, never the raw secret.
 */
export function reviewToken(): string {
  const secret = process.env.GROWTH_SHARED_SECRET || "unset-secret";
  return crypto.createHash("sha256").update(secret + "::beast-review").digest("hex").slice(0, 40);
}

export function checkReviewPassword(pw: string): boolean {
  const rp = process.env.REVIEW_PASSWORD;
  const secret = process.env.GROWTH_SHARED_SECRET;
  const p = String(pw || "");
  if (rp && p === rp) return true;
  if (secret && p === secret) return true;
  return false;
}

export const REVIEW_COOKIE = "review_auth";
