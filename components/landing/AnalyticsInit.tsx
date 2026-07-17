"use client";

import { useEffect } from "react";
import { captureAttribution } from "@/lib/analytics";

/** Captures paid-search attribution (UTMs/gclid) once when a landing page mounts. */
export default function AnalyticsInit() {
  useEffect(() => {
    captureAttribution();
  }, []);
  return null;
}
