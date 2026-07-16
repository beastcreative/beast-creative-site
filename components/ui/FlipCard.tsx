"use client";

import Image from "next/image";
import { useState } from "react";

interface FlipCardProps {
  front: string;
  back: string;
  alt: string;
  tilt?: number;
}

export default function FlipCard({ front, back, alt, tilt = 3 }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      aria-label={`${alt}, press to flip`}
      className="relative w-full cursor-pointer"
      style={{ perspective: "1000px" }}
      onPointerEnter={(e) => { if (e.pointerType === "mouse") setFlipped(true); }}
      onPointerLeave={(e) => { if (e.pointerType === "mouse") setFlipped(false); }}
      onPointerUp={(e) => { if (e.pointerType === "touch") setFlipped((f) => !f); }}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setFlipped((f) => !f); } }}
    >
      <div
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.7s ease",
          transform: flipped
            ? `rotate(${tilt}deg) rotateY(180deg)`
            : `rotate(${tilt}deg) rotateY(0deg)`,
          position: "relative",
        }}
        className="w-full"
      >
        {/* Front */}
        <div
          style={{ backfaceVisibility: "hidden" }}
          className="rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
        >
          <Image src={front} alt={alt} width={440} height={440} className="w-full h-auto block" />
        </div>
        {/* Back */}
        <div
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
          }}
          className="rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
        >
          <Image src={back} alt={alt + " (back)"} width={440} height={440} className="w-full h-auto block" />
        </div>
      </div>
      {/* Hint: mobile only */}
      <p className="text-xs text-gray-400 text-center mt-3 md:hidden">Tap to flip</p>
    </div>
  );
}
