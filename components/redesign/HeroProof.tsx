"use client";

import { useEffect, useRef } from "react";

/**
 * Hero proof-card stack with pointer-driven 3D parallax tilt. The two cards sit
 * at different depths (translateZ) so tilting the stage parallaxes them apart,
 * giving the signature visual real depth. Idle float is pure CSS; reduced-motion
 * users get a flat, static stack (see globals.css).
 */
export default function HeroProof() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const stage = el.querySelector<HTMLElement>(".led-parallax-stage");
    if (!stage) return;

    let raf = 0;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5; // -0.5 … 0.5
      const py = (e.clientY - r.top) / r.height - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        stage.style.setProperty("--px", px.toFixed(3));
        stage.style.setProperty("--py", py.toFixed(3));
      });
    };
    const reset = () => {
      cancelAnimationFrame(raf);
      stage.style.setProperty("--px", "0");
      stage.style.setProperty("--py", "0");
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", reset);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", reset);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className="led-parallax relative mx-auto aspect-square w-full max-w-md">
      <div className="led-parallax-stage">
        <span className="led-cross text-black/25" style={{ top: 0, right: 0 }} aria-hidden="true" />
        <span className="led-cross text-black/25" style={{ bottom: 0, left: 0 }} aria-hidden="true" />

        {/* big ghost number */}
        <div className="led-ghost absolute -right-2 top-2 text-[9rem] text-black/[0.05]">7x</div>

        {/* dark receipt card */}
        <div className="led-depth-1 absolute left-2 top-10 w-60">
          <div className="led-float-a rounded-2xl border border-white/10 bg-beast-black p-6 shadow-[0_24px_60px_rgba(0,0,0,0.28)]">
            <p className="led-label text-white/45">Receipt · Sun-Bird</p>
            <p className="mt-4 font-display text-6xl font-black leading-none text-beast-yellow">7.03%</p>
            <p className="mt-2 text-xs text-white/55">CTR vs 0.89% industry avg</p>
            <div className="mt-4 h-px w-full bg-white/10" />
            <p className="led-label mt-3 text-beast-green">● verified client</p>
          </div>
        </div>

        {/* pink accent card */}
        <div className="led-depth-2 absolute bottom-8 right-0 w-52">
          <div className="led-float-b rounded-2xl bg-beast-pink p-6 shadow-[0_24px_60px_rgba(255,17,152,0.30)]">
            <p className="led-label text-white/70">Emails collected</p>
            <p className="mt-3 font-display text-5xl font-black leading-none text-white">36,581</p>
            <p className="mt-2 text-xs font-medium text-white/85">on a $6,000 budget</p>
          </div>
        </div>
      </div>
    </div>
  );
}
