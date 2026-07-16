"use client";

const CHROMA_RED = "#ff003c";
const CHROMA_CYAN = "#00f3ff";
const COINLINE_DARK = "#030303";

import { useEffect, useRef } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const WORDS = ["INSERT COIN", "BARCADE", "PRESS START"];
const WORD_BASE_Z = [-1500, -3000, -4500];
const LOGO_BASE_Z = -6000;
const CAM_SPEED = 2.5;
const PROXY_PX = 3200;
const STAR_LOOP = 8000;

const COINLINE_SVG_PATH = "M71.6,78.5v171.9H14.3V78.5l57.3-57.3h171.9l-57.3,57.3h-114.6ZM243.5,307.8v-57.3H71.6v57.3h171.9ZM644.7,21.2v57.3l57.3-57.3h-57.3ZM530.1,21.2h-171.9v57.3h171.9V21.2ZM358.1,307.8h171.9v-57.3h-171.9v57.3ZM300.8,78.5v171.9h57.3V78.5h-57.3ZM530.1,250.5h57.3V78.5h-57.3v171.9ZM1848.3,78.5V21.2h-114.6l-57.3,57.3v171.9l57.3,57.3h114.6l-57.3-57.3h-57.3V78.5h114.6ZM702,307.8V78.5h-57.3v229.2h57.3ZM1275.1,307.8h57.3V78.5h-57.3v229.2ZM1332.4,78.5V21.2h-57.3l57.3,57.3ZM759.3,21.2v286.6h57.3V21.2h-57.3ZM873.9,21.2l-57.3,57.3h114.6v229.2h57.3V78.5l-57.3-57.3h-57.3ZM1389.8,21.2v286.6h57.3V21.2h-57.3ZM1504.4,21.2l-57.3,57.3h114.6v229.2h57.3V78.5l-57.3-57.3h-57.3ZM1103.2,21.2h-57.3v229.2l57.3,57.3h114.6v-57.3h-114.6V21.2ZM1848.3,78.5v57.3h-114.6l57.3,57.3h57.3l57.3-57.3v-57.3h-57.3ZM415.4,193.1h57.3v-57.3h-57.3v57.3Z";

const CARD_DATA = [
  { id: "CAB-001", name: "GALAGA",        stat1: "TOKENS: 847",   stat2: "PLAYS: 1,204", num: "01" },
  { id: "CAB-002", name: "PAC-MAN",       stat1: "TOKENS: 1,033", stat2: "PLAYS: 892",   num: "02" },
  { id: "CAB-003", name: "STR. FIGHTER",  stat1: "TOKENS: 2,441", stat2: "PLAYS: 3,100", num: "03" },
  { id: "CAB-004", name: "MK II",         stat1: "TOKENS: 990",   stat2: "PLAYS: 1,871", num: "04" },
  { id: "CAB-005", name: "DONKEY KONG",   stat1: "TOKENS: 612",   stat2: "PLAYS: 444",   num: "05" },
  { id: "CAB-006", name: "TEKKEN 3",      stat1: "TOKENS: 1,788", stat2: "PLAYS: 2,290", num: "06" },
];

// Z positions for cards — interspersed before/between/after each word
const CARD_Z    = [-700, -1200, -2200, -2700, -3700, -4800];
// Spread angles so cards appear to the sides, not dead center
const CARD_ANG  = [0.8,   2.1,   3.7,   5.2,   1.5,   4.3];
const CARD_ROT  = [-8,    12,    -5,    10,    -14,    7];

export default function CoinlineHero() {
  const containerRef  = useRef<HTMLDivElement>(null);
  const heroRef       = useRef<HTMLDivElement>(null);
  const worldRef      = useRef<HTMLDivElement>(null);
  const viewportRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const hero      = heroRef.current;
    const world     = worldRef.current;
    const vp        = viewportRef.current;
    if (!container || !hero || !world || !vp) return;

    // Typed aliases — TypeScript doesn't narrow refs across closures
    const heroEl: HTMLDivElement  = hero;
    const worldEl: HTMLDivElement = world;
    const vpEl: HTMLDivElement    = vp;

    // Fixed → absolute pin swap (works around overflow-x:hidden breaking position:sticky)
    function updatePin() {
      const y = window.scrollY;
      if (y < PROXY_PX) {
        heroEl.style.position = "fixed";
        heroEl.style.top = "0";
      } else {
        heroEl.style.position = "absolute";
        heroEl.style.top = `${PROXY_PX}px`;
      }
    }
    updatePin();
    window.addEventListener("scroll", updatePin, { passive: true });

    // ── Scene items ─────────────────────────────────────────────────────────
    type Item = {
      el: HTMLElement;
      x: number;
      y: number;
      baseZ: number;
      type: "text" | "star" | "card" | "logo";
      rot: number;
    };
    const items: Item[] = [];
    const W = window.innerWidth;
    const H = window.innerHeight;

    // Text words
    WORDS.forEach((word, i) => {
      const wrapper = document.createElement("div");
      wrapper.className = "hs-item";
      const txt = document.createElement("div");
      txt.className = "hs-big-text";
      txt.innerText = word;
      wrapper.appendChild(txt);
      worldEl.appendChild(wrapper);
      items.push({ el: wrapper, x: 0, y: 0, baseZ: WORD_BASE_Z[i], type: "text", rot: 0 });
    });

    // Logo item — flies in after the 3 text words
    const logoWrapper = document.createElement("div");
    logoWrapper.className = "hs-item";
    const logoInner = document.createElement("div");
    logoInner.className = "hs-logo";
    logoInner.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 329.5" class="hs-logo-svg"><path fill="none" stroke="rgba(255,255,255,0.55)" stroke-width="5" stroke-linejoin="miter" d="${COINLINE_SVG_PATH}"/></svg>`;
    logoWrapper.appendChild(logoInner);
    worldEl.appendChild(logoWrapper);
    items.push({ el: logoWrapper, x: 0, y: 0, baseZ: LOGO_BASE_Z, type: "logo", rot: 0 });

    // Cards
    CARD_DATA.forEach((data, i) => {
      const wrapper = document.createElement("div");
      wrapper.className = "hs-item";

      const card = document.createElement("div");
      card.className = "hs-card";
      card.innerHTML = `
        <div class="hs-card-header">
          <span class="hs-card-id">${data.id}</span>
          <div class="hs-card-dot"></div>
        </div>
        <div class="hs-card-name">${data.name}</div>
        <div class="hs-card-footer">
          <span>${data.stat1}</span>
          <span>${data.stat2}</span>
        </div>
        <div class="hs-card-num">${data.num}</div>
      `;
      wrapper.appendChild(card);
      worldEl.appendChild(wrapper);

      const x = Math.cos(CARD_ANG[i]) * W * 0.32;
      const y = Math.sin(CARD_ANG[i]) * H * 0.26;
      items.push({ el: wrapper, x, y, baseZ: CARD_Z[i], type: "card", rot: CARD_ROT[i] });
    });

    // Stars
    for (let i = 0; i < 260; i++) {
      const el = document.createElement("div");
      el.className = "hs-star";
      worldEl.appendChild(el);
      items.push({
        el,
        x: (Math.random() - 0.5) * 3200,
        y: (Math.random() - 0.5) * 1600,
        baseZ: -Math.random() * STAR_LOOP,
        type: "star",
        rot: 0,
      });
    }

    let mouseX = 0, mouseY = 0, lastScrollY = 0, smoothVel = 0, rafId: number;
    const velEl   = document.getElementById("hs-vel");
    const coordEl = document.getElementById("hs-coord");

    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth  - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove);

    function tick(time: number) {
      const scrollY = window.scrollY;
      const rawVel  = scrollY - lastScrollY;
      lastScrollY   = scrollY;
      smoothVel    += (rawVel - smoothVel) * 0.12;

      const cameraZ = scrollY * CAM_SPEED;
      const fov = 1000 - Math.min(Math.abs(smoothVel) * 10, 600);
      vpEl.style.perspective = `${fov}px`;

      worldEl.style.transform = `
        rotateX(${mouseY * 5 - smoothVel * 0.5}deg)
        rotateY(${mouseX * 5}deg)
      `;

      if (velEl)   velEl.innerText   = Math.abs(smoothVel).toFixed(2);
      if (coordEl) coordEl.innerText = String(scrollY).padStart(7, "0");

      const t = time * 0.001;

      items.forEach((item) => {
        let vizZ: number;

        if (item.type === "star") {
          const relZ = item.baseZ + cameraZ;
          vizZ = ((relZ % STAR_LOOP) + STAR_LOOP) % STAR_LOOP;
          if (vizZ > 500) vizZ -= STAR_LOOP;
        } else {
          vizZ = item.baseZ + cameraZ;
        }

        // Opacity: fade in from far, fade out when close
        let alpha = 1;
        if (vizZ < -4000) alpha = 0;
        else if (vizZ < -2500) alpha = (vizZ + 4000) / 1500;
        if (item.type !== "star" && vizZ > 80) alpha = 1 - (vizZ - 80) / 400;
        alpha = Math.max(0, Math.min(1, alpha));
        item.el.style.opacity = String(alpha);

        if (item.type === "star") {
          const stretch = Math.max(1, Math.min(1 + Math.abs(smoothVel) * 0.12, 8));
          item.el.style.transform = `translate3d(${item.x}px,${item.y}px,${vizZ}px) scale3d(1,1,${stretch})`;
        } else if (item.type === "text") {
          const txtEl = item.el.firstChild as HTMLElement;
          if (txtEl && Math.abs(smoothVel) > 2) {
            const o = smoothVel * 2;
            txtEl.style.textShadow = `${o}px 0 ${CHROMA_RED}, ${-o}px 0 ${CHROMA_CYAN}`;
          } else if (txtEl) {
            txtEl.style.textShadow = "none";
          }
          item.el.style.transform = `translate3d(${item.x}px,${item.y}px,${vizZ}px)`;
        } else if (item.type === "logo") {
          const svgEl = item.el.querySelector("svg") as SVGElement | null;
          if (svgEl) {
            if (Math.abs(smoothVel) > 2) {
              const o = smoothVel * 2;
              svgEl.style.filter = `drop-shadow(${o}px 0 0 ${CHROMA_RED}) drop-shadow(${-o}px 0 0 ${CHROMA_CYAN})`;
            } else {
              svgEl.style.filter = "none";
            }
          }
          item.el.style.transform = `translate3d(${item.x}px,${item.y}px,${vizZ}px)`;
        } else {
          // Cards: gentle float rotation
          const floatY = Math.sin(t + item.x * 0.001) * 8;
          item.el.style.transform = `translate3d(${item.x}px,${item.y}px,${vizZ}px) rotateZ(${item.rot}deg) rotateY(${floatY}deg)`;
        }
      });

      rafId = requestAnimationFrame(tick);
    }

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", updatePin);
      window.removeEventListener("mousemove", onMouseMove);
      while (worldEl.firstChild) worldEl.removeChild(worldEl.firstChild);
    };
  }, []);

  return (
    <>
      <style>{`
        .hs-item {
          position: absolute;
          left: 0; top: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          backface-visibility: hidden;
          transform-origin: center center;
        }
        .hs-big-text {
          font-size: clamp(56px, 14vw, 210px);
          font-weight: 800;
          color: transparent;
          -webkit-text-stroke: 2px rgba(255,255,255,0.55);
          text-transform: uppercase;
          white-space: nowrap;
          transform: translate(-50%, -50%);
          pointer-events: none;
          letter-spacing: -0.04em;
          font-family: sans-serif;
        }
        .hs-star {
          position: absolute;
          width: 2px; height: 2px;
          background: white;
          transform: translate(-50%, -50%);
        }
        .hs-card {
          width: 300px;
          height: 400px;
          background: rgba(8, 8, 8, 0.7);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          transform: translate(-50%, -50%);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          box-shadow: 0 0 0 1px rgba(0,0,0,0.5), 0 20px 50px rgba(0,0,0,0.5);
        }
        .hs-card::before {
          content: '';
          position: absolute;
          top: -1px; left: -1px;
          width: 12px; height: 12px;
          border-top: 1px solid rgba(255,255,255,0.5);
          border-left: 1px solid rgba(255,255,255,0.5);
        }
        .hs-card::after {
          content: '';
          position: absolute;
          bottom: -1px; right: -1px;
          width: 12px; height: 12px;
          border-bottom: 1px solid rgba(255,255,255,0.5);
          border-right: 1px solid rgba(255,255,255,0.5);
        }
        .hs-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          padding-bottom: 1rem;
          margin-bottom: 1rem;
        }
        .hs-card-id {
          font-family: monospace;
          font-size: 10px;
          color: var(--color-coinline-red);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .hs-card-dot {
          width: 8px; height: 8px;
          background: var(--color-coinline-red);
        }
        .hs-card-name {
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--color-beast-white);
          text-transform: uppercase;
          letter-spacing: -0.02em;
          line-height: 0.95;
          font-family: sans-serif;
          mix-blend-mode: hard-light;
        }
        .hs-card-footer {
          font-family: monospace;
          font-size: 9px;
          color: rgba(255,255,255,0.35);
          display: flex;
          justify-content: space-between;
          padding-top: 0.75rem;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .hs-card-num {
          position: absolute;
          bottom: 1.5rem;
          right: 1.5rem;
          font-size: 3.5rem;
          font-weight: 900;
          opacity: 0.07;
          line-height: 1;
          font-family: monospace;
          color: white;
        }
        .hs-logo {
          transform: translate(-50%, -50%);
          pointer-events: none;
        }
        .hs-logo-svg {
          width: 70vw;
          max-width: 1000px;
          height: auto;
          display: block;
        }
        .hs-scanlines {
          background: linear-gradient(
            to bottom,
            rgba(255,255,255,0) 50%,
            rgba(0,0,0,0.2) 50%
          );
          background-size: 100% 4px;
        }
        .hs-hud-line {
          flex: 1;
          height: 1px;
          background: rgba(255,255,255,0.2);
          margin: 0 1rem;
          position: relative;
        }
        .hs-hud-line::after {
          content: '';
          position: absolute;
          right: 0; top: -2px;
          width: 5px; height: 5px;
          background: var(--color-coinline-red);
        }
      `}</style>

      {/* Scroll budget — creates proxy scroll space for the animation */}
      <div
        ref={containerRef}
        style={{ height: `calc(100vh + ${PROXY_PX}px)`, position: "relative" }}
      >
        {/* Hero — fixed to viewport until budget exhausted, then scrolls away */}
        <div
          ref={heroRef}
          className="relative overflow-hidden"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            background: COINLINE_DARK,
            zIndex: 5,
          }}
        >
          {/* Scanlines */}
          <div className="hs-scanlines absolute inset-0 pointer-events-none" style={{ zIndex: 10 }} />

          {/* Vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(circle, transparent 40%, var(--color-beast-black) 120%)", zIndex: 11 }}
          />

          {/* Noise */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              zIndex: 12,
              opacity: 0.07,
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* HUD */}
          <div
            className="absolute left-8 right-8 bottom-8 top-20 pointer-events-none flex flex-col justify-end lg:justify-between gap-2 lg:gap-0"
            style={{
              zIndex: 40,
              fontFamily: "monospace",
              fontSize: "10px",
              color: "rgba(255,255,255,0.45)",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            <div className="flex justify-between items-center">
              <span>SYS.READY</span>
              <div className="hs-hud-line" />
              <span>SCROLL VEL: <strong id="hs-vel" style={{ color: CHROMA_CYAN }}>0.00</strong></span>
            </div>
            <div className="flex justify-between items-center">
              <span>COORD: <strong id="hs-coord" style={{ color: CHROMA_CYAN }}>0000000</strong></span>
              <div className="hs-hud-line" />
              <span>COINLINE BARCADE · EST. 2022</span>
            </div>
          </div>

          {/* 3D viewport */}
          <div
            ref={viewportRef}
            className="absolute inset-0 overflow-hidden"
            style={{ perspective: "1000px", zIndex: 1 }}
          >
            <div
              ref={worldRef}
              className="absolute"
              style={{ top: "50%", left: "50%", transformStyle: "preserve-3d", willChange: "transform" }}
            />
          </div>

          {/* Hero text — title at top, description at bottom */}
          <div className="absolute inset-0 flex flex-col justify-between" style={{ zIndex: 30 }}>
            {/* Top gradient behind title */}
            <div
              className="absolute inset-x-0 top-0 pointer-events-none"
              style={{ height: "55%", background: "linear-gradient(to bottom, rgba(0,0,0,0.88) 0%, transparent 100%)" }}
            />
            {/* Bottom gradient behind description */}
            <div
              className="absolute inset-x-0 bottom-0 pointer-events-none"
              style={{ height: "35%", background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, transparent 100%)" }}
            />

            {/* Top: tags + eyebrow + h1 */}
            <div className="relative max-w-7xl mx-auto w-full px-6 lg:px-20 pt-20 lg:pt-24">
              <AnimatedSection>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Branding", "Naming", "Identity Design", "Digital", "Apparel"].map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-beast-pink/15 text-beast-pink border border-beast-pink/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="section-eyebrow text-beast-yellow mb-3">
                  Case Study: Coinline Barcade · 2022
                </p>
                <h1 className="text-display-hero font-display font-extrabold text-white max-w-4xl leading-tight">
                  From a Concept to a{" "}
                  <span className="text-beast-pink">Complete Brand Universe.</span>
                </h1>
              </AnimatedSection>
            </div>

            {/* Bottom: description */}
            <div className="relative max-w-7xl mx-auto w-full px-6 lg:px-20 pb-24 lg:pb-16">
              <p className="text-body-lead text-gray-300 max-w-2xl">
                Named, designed, and launched from scratch, Beast built the full brand
                identity for Coinline Barcade, a retro-modern arcade concept built to own
                every surface it touches.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
