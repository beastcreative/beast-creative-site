"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface LiveFrameProps {
  children: ReactNode;
  id: string;
  className?: string;
}

/**
 * Theater frame wrapper for the /redesign-2 "Screening Room" reel
 * stack. Toggles `.is-live` on when the frame is 35% in view so the
 * yellow stat settles and copy rises; the class is only ever added
 * (never removed), so mobile frames stay painted once revealed.
 * `id` is the citation anchor target for the yellow stats band.
 * Renders an <article> — each frame is a self-contained case study
 * (and avoids unnamed <section>s nested inside the Work section).
 */
export default function LiveFrame({ children, id, className = "" }: LiveFrameProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-live");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) el.classList.add("is-live");
        });
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <article id={id} ref={ref} className={`scr-frame ${className}`}>
      {children}
    </article>
  );
}
