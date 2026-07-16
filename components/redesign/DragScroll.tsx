"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Horizontal strip that (a) gently auto-scrolls, (b) can be click-dragged or
 * swiped left/right, and (c) responds to trackpad horizontal scroll — while
 * vertical page scroll passes straight through. Seamless loop assumes children
 * are duplicated (rendered twice). Transform-based so card lift/tilt/shadow are
 * never clipped (viewport uses overflow-x: clip → vertical stays visible).
 */
export default function DragScroll({
  children,
  speed = 0.5,
  gapClass = "gap-4",
  className = "",
  ariaLabel,
}: {
  children: ReactNode;
  speed?: number;
  gapClass?: string;
  className?: string;
  ariaLabel?: string;
}) {
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const vp = viewport.current;
    const tk = track.current;
    if (!vp || !tk) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let offset = 0;
    let half = tk.scrollWidth / 2;
    const measure = () => { half = tk.scrollWidth / 2; };
    measure();

    let paused = reduce;
    let dragging = false;
    let startX = 0;
    let startOffset = 0;
    let moved = 0;
    let raf = 0;

    const wrap = () => {
      if (half > 0) offset = ((offset % half) + half) % half;
    };
    const apply = () => { tk.style.transform = `translate3d(${-offset}px,0,0)`; };

    const tick = () => {
      if (!paused && !dragging) { offset += speed; wrap(); apply(); }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onEnter = () => { paused = true; };
    const onLeave = () => { if (!reduce) paused = false; };

    const onDown = (e: PointerEvent) => {
      dragging = true;
      moved = 0;
      startX = e.clientX;
      startOffset = offset;
      vp.classList.add("is-dragging");
      vp.setPointerCapture?.(e.pointerId);
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging) return;
      const dx = e.clientX - startX;
      moved = Math.max(moved, Math.abs(dx));
      offset = startOffset - dx;
      wrap();
      apply();
    };
    const onUp = (e: PointerEvent) => {
      dragging = false;
      vp.classList.remove("is-dragging");
      vp.releasePointerCapture?.(e.pointerId);
    };
    // Only hijack clearly-horizontal trackpad scroll; let vertical scroll the page.
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
      offset += e.deltaX;
      wrap();
      apply();
    };
    // Swallow the click that ends a real drag so it doesn't navigate.
    const onClick = (e: MouseEvent) => {
      if (moved > 6) { e.preventDefault(); e.stopPropagation(); moved = 0; }
    };

    vp.addEventListener("pointerenter", onEnter);
    vp.addEventListener("pointerleave", onLeave);
    vp.addEventListener("pointerdown", onDown);
    vp.addEventListener("pointermove", onMove);
    vp.addEventListener("pointerup", onUp);
    vp.addEventListener("pointercancel", onUp);
    vp.addEventListener("wheel", onWheel, { passive: true });
    vp.addEventListener("click", onClick, true);
    window.addEventListener("resize", measure);

    return () => {
      cancelAnimationFrame(raf);
      vp.removeEventListener("pointerenter", onEnter);
      vp.removeEventListener("pointerleave", onLeave);
      vp.removeEventListener("pointerdown", onDown);
      vp.removeEventListener("pointermove", onMove);
      vp.removeEventListener("pointerup", onUp);
      vp.removeEventListener("pointercancel", onUp);
      vp.removeEventListener("wheel", onWheel);
      vp.removeEventListener("click", onClick, true);
      window.removeEventListener("resize", measure);
    };
  }, [speed]);

  return (
    <div ref={viewport} className={`led-dragscroll ${className}`} role="region" aria-label={ariaLabel}>
      <div ref={track} className={`flex w-max ${gapClass}`}>
        {children}
      </div>
    </div>
  );
}
