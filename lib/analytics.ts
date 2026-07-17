/**
 * Lightweight analytics layer. Pushes named events to the GTM dataLayer (GTM is
 * already loaded sitewide in app/layout.tsx as GTM-TJD75QG3). Building GA4 tags /
 * conversions that LISTEN for these events is a manual step in the GTM dashboard
 * (see docs/beast-2.0/analytics-spec.md) — the pushes here do nothing until those
 * tags exist.
 *
 * Also captures paid-search attribution (UTMs + gclid) on landing and persists it
 * so it rides along on every event and can be attached to the lead form.
 */

type Params = Record<string, string | number | boolean | undefined>;

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_id",
  "utm_term",
  "utm_content",
  "utm_source_platform",
  "gclid",
] as const;

const STORE_KEY = "beast_attr";

/** Read stored attribution (UTMs, gclid, landing_path). Safe on server. */
export function getAttribution(): Record<string, string> {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(window.sessionStorage.getItem(STORE_KEY) || "{}");
  } catch {
    return {};
  }
}

/** Capture UTMs/gclid from the URL on first landing; keep them for the session. */
export function captureAttribution(): void {
  if (typeof window === "undefined") return;
  try {
    const url = new URL(window.location.href);
    const found: Record<string, string> = {};
    UTM_KEYS.forEach((k) => {
      const v = url.searchParams.get(k);
      if (v) found[k] = v;
    });
    const existing = getAttribution();
    if (Object.keys(found).length > 0) {
      window.sessionStorage.setItem(
        STORE_KEY,
        JSON.stringify({ landing_path: url.pathname, ...existing, ...found }),
      );
    } else if (!existing.landing_path) {
      window.sessionStorage.setItem(STORE_KEY, JSON.stringify({ landing_path: url.pathname }));
    }
  } catch {
    /* no-op */
  }
}

/** Push an event to the GTM dataLayer, merged with stored attribution. */
export function pushEvent(event: string, params: Params = {}): void {
  if (typeof window === "undefined") return;
  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...params, ...getAttribution() });
}
