"use client";

import { useEffect } from "react";
import { captureAttribution, pushEvent } from "@/lib/analytics";

/**
 * Site-wide funnel instrumentation. Mounted once in the root layout, it:
 *  1. captures UTM/gclid attribution on every entry, and
 *  2. fires a `start_assessment_click` dataLayer event whenever any link to
 *     /growth-assessment is clicked (nav, footer, hero, service/work/blog CTAs),
 *     tagged with where it was clicked + the hidden ?type=. This measures which
 *     pages and CTAs actually drive assessments — no need to wire 90+ buttons.
 */
export default function AssessmentClickTracker() {
  useEffect(() => {
    captureAttribution();

    function onClick(e: MouseEvent) {
      const el = e.target as HTMLElement | null;
      const link = el?.closest?.("a[href*='/growth-assessment']") as HTMLAnchorElement | null;
      if (!link) return;
      const href = link.getAttribute("href") || "";
      const typeMatch = href.match(/[?&]type=([a-z]+)/);
      const location = link.closest("nav") ? "nav" : link.closest("footer") ? "footer" : "page";
      pushEvent("start_assessment_click", {
        cta_location: location,
        cta_text: (link.textContent || "").trim().slice(0, 60),
        assessment_type: typeMatch ? typeMatch[1] : "general",
        page_path: window.location.pathname,
      });
    }

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
