// Password gate for the confidential Mega Foods proposal.
// We store only the SHA-256 of the password — never the password itself.
export const MEGA_COOKIE = "mega_gate";

// SHA-256 of the shared proposal password.
// Committed so the gate works on a plain `git push` with no dashboard step.
// To change the password without touching code, set MEGAFOODS_PASSWORD in the
// hosting environment — it takes precedence over this default.
const DEFAULT_HASH =
  "4f35ec74879be51881fd8fb69b6c846838a6fc4d2d3a7a0de330a322a6fd9160"; // "MF2026"

export async function sha256Hex(input: string): Promise<string> {
  const data = new TextEncoder().encode(input);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

// The token the gate cookie must match (and what we set on success).
export async function expectedToken(): Promise<string> {
  const override = process.env.MEGAFOODS_PASSWORD;
  return override ? sha256Hex(override) : DEFAULT_HASH;
}
