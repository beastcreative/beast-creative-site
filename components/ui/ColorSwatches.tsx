"use client";

import { useState } from "react";

const colors = [
  { name: "Neon Magenta", hex: "#ed1564", desc: "Hero color. Electric and energetic, the neon pink of classic arcade marquees.", border: "#F5E642" },
  { name: "Deep Purple", hex: "#1A0A2E", desc: "The foundation. Dark, atmospheric. The color of an arcade in low light.", border: "#ed1564" },
  { name: "Electric Yellow", hex: "#F5E642", desc: "The accent. The color of a coin, a scoreboard flash, a PLAYER 1 START prompt.", border: "#1A0A2E" },
  { name: "Interstellar Black", hex: "#0A0A0A", desc: "Structure and depth. Grounds the palette and makes every color pop harder.", border: "#F5E642" },
];

export default function ColorSwatches() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopied(hex);
    setTimeout(() => setCopied(null), 1800);
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 items-start">
      {colors.map((c) => (
        <button
          key={c.name}
          onClick={() => handleCopy(c.hex)}
          className="group text-left focus:outline-none"
          aria-label={`Copy ${c.hex}`}
        >
          {/* Swatch */}
          <div
            className="relative h-20 rounded-xl mb-3 overflow-hidden transition-all duration-300 cursor-pointer border-2 border-transparent group-hover:border-current"
            style={{ backgroundColor: c.hex, borderColor: "transparent" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor = c.border;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor = "transparent";
            }}
          >
            {/* Copied overlay */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${
                copied === c.hex ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundColor: `${c.hex}cc` }}
            >
              <span className="text-white font-display font-bold text-sm tracking-widest drop-shadow">
                COPIED!
              </span>
            </div>

            {/* Hex badge on hover */}
            <div
              className={`absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-black/60 text-white font-mono text-xs font-bold tracking-wide transition-opacity duration-200 ${
                copied === c.hex ? "opacity-0" : "opacity-0 group-hover:opacity-100"
              }`}
            >
              {c.hex}
            </div>
          </div>

          <p className="font-display font-bold text-beast-black text-sm">{c.name}</p>
          <p className="font-mono text-xs text-beast-pink mt-0.5 mb-1">{c.hex}</p>
          <p className="text-xs text-gray-500 leading-relaxed">{c.desc}</p>
        </button>
      ))}
    </div>
  );
}
