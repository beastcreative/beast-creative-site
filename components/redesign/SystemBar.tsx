"use client";

import { useEffect, useState } from "react";

/**
 * Mono "system readout" strip — makes the "marketing that shows its work" ethos
 * literal. Live San Antonio (Central) time + fixed coordinates + availability dot.
 * Renders a stable placeholder on the server to avoid hydration mismatch.
 */
export default function SystemBar({ dark = false }: { dark?: boolean }) {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const fmt = () =>
      new Intl.DateTimeFormat("en-US", {
        timeZone: "America/Chicago",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(new Date());
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 1000);
    return () => clearInterval(id);
  }, []);

  const line = dark ? "led-rule-dark" : "led-rule";
  const muted = dark ? "text-white/50" : "text-black/45";
  const strong = dark ? "text-white/80" : "text-black/70";

  return (
    <div
      className={`led-label ${muted} flex flex-wrap items-center gap-x-5 gap-y-2 border-y ${line} py-3`}
    >
      <span className={`flex items-center gap-2 ${strong}`}>
        <span className="led-dot" aria-hidden="true" />
        Available for new work
      </span>
      <span className="hidden sm:inline">San Antonio, TX</span>
      <span className="hidden md:inline">29.42°N&nbsp;98.49°W</span>
      <span className="ml-auto tabular-nums" suppressHydrationWarning>
        {time ? `CST ${time}` : "CST ——:——:——"}
      </span>
    </div>
  );
}
