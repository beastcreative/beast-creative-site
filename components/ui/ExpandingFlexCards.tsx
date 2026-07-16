"use client";

import { useState } from "react";

const CARDS = [
  {
    image: "/assets/coinline-expand-joystick.jpg",
    tag: "Visual Reference",
    title: "Motion at the Core",
    caption:
      "The arcade joystick's four-directional geometry became the structural DNA of the Coinline letterforms. Angular cuts, precise axes, and directional energy: every letter built like a cabinet built to move.",
  },
  {
    image: "/assets/coinline-expand-font.jpg",
    tag: "Typography",
    title: "Type as Geometry",
    caption:
      "Geometric typefaces showed us the direction: modular, angular letterforms that feel assembled rather than drawn. We studied what made them feel digital and purpose-built, then pushed further into something fully custom.",
  },
  {
    image: "/assets/coinline-expand-coin.jpg",
    tag: "The Name",
    title: "Currency of Play",
    caption:
      "The pixel coin is the universal symbol of arcade culture. It gave us 'Coinline' and the pixel-precision construction philosophy embedded into every letterform. The O in the wordmark is literally a coin.",
  },
  {
    image: "/assets/coinline-expand-gameover.jpg",
    tag: "Aesthetic DNA",
    title: "Pixel Perfect",
    caption:
      "The glowing, blocky game-over screen defined an entire era's visual grammar. We didn't replicate it. We inherited its DNA and rebuilt it for 2022: sharper, modular, and built for every surface the brand would touch.",
  },
];

export default function ExpandingFlexCards() {
  const [active, setActive] = useState(0);

  return (
    <>
      <style>{`
        .efc-wrap {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .efc-container {
          display: flex;
          flex-direction: row;
          align-items: stretch;
          height: 420px;
        }
        .efc-card {
          position: relative;
          overflow: hidden;
          cursor: pointer;
          margin: 0 6px;
          background-size: auto 120%;
          background-position: center;
          transition:
            flex-grow 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95),
            border-radius 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95),
            background-size 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95),
            margin 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
          min-width: 56px;
        }
        .efc-card:first-child { margin-left: 0; }
        .efc-card:last-child  { margin-right: 0; }
        .efc-card.efc-active {
          flex-grow: 10000;
          border-radius: 20px;
          background-size: auto 100%;
        }
        .efc-card:not(.efc-active) {
          flex-grow: 1;
          border-radius: 12px;
        }
        .efc-shadow {
          position: absolute;
          inset: 0;
          transition: box-shadow 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
        }
        .efc-card.efc-active .efc-shadow {
          box-shadow: inset 0 -180px 80px -60px rgba(0,0,0,0.9);
        }
        .efc-card:not(.efc-active) .efc-shadow {
          box-shadow: inset 0 -40px 20px -30px rgba(0,0,0,0.5);
        }
        .efc-label {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 20px;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }
        .efc-card.efc-active .efc-label { opacity: 1; }
        .efc-card:not(.efc-active) .efc-label { opacity: 0; }
        .efc-tag {
          display: inline-block;
          background: var(--color-coinline-pink);
          color: white;
          font-size: 0.62rem;
          font-weight: 700;
          padding: 3px 10px;
          border-radius: 20px;
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.07em;
        }
        .efc-title {
          font-weight: 800;
          font-size: 1.05rem;
          color: #fff;
          margin-bottom: 6px;
          line-height: 1.2;
          letter-spacing: -0.01em;
        }
        .efc-caption {
          font-size: 0.78rem;
          color: rgba(255,255,255,0.78);
          line-height: 1.55;
          max-width: 340px;
        }

        /* Mobile: vertical accordion */
        @media (max-width: 640px) {
          .efc-container {
            flex-direction: column;
            height: auto;
          }
          .efc-card {
            margin: 4px 0;
            background-size: cover;
            min-width: unset;
            min-height: 64px;
            transition:
              flex-grow 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95),
              border-radius 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95),
              min-height 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
          }
          .efc-card:first-child { margin-top: 0; }
          .efc-card:last-child  { margin-bottom: 0; }
          .efc-card.efc-active  { min-height: 260px; }
          .efc-card.efc-active .efc-label  { opacity: 1; }
          .efc-card:not(.efc-active) .efc-label { opacity: 0; }
        }
      `}</style>

      <div className="efc-wrap">
        <div className="efc-container">
          {CARDS.map((card, i) => (
            <div
              key={i}
              className={`efc-card${active === i ? " efc-active" : ""}`}
              style={{ backgroundImage: `url(${card.image})` }}
              onClick={() => setActive(i)}
            >
              <div className="efc-shadow" />
              <div className="efc-label">
                <div className="efc-tag">{card.tag}</div>
                <div className="efc-title">{card.title}</div>
                <div className="efc-caption">{card.caption}</div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 text-center sm:hidden">Tap a card to expand</p>
      </div>
    </>
  );
}
