"use client";

import Image from "next/image";
import { useState } from "react";

interface TradingCardProps {
  front: string;
  back: string;
  alt: string;
  rotation: number;
  floatDelay: string;
  defaultFlipped?: boolean;
  noFloat?: boolean;
}

export default function TradingCard({ front, back, alt, rotation, floatDelay, defaultFlipped = false, noFloat = false }: TradingCardProps) {
  const [flipped, setFlipped] = useState(defaultFlipped);

  // Hover = desktop mouse only; tap = touch only
  const handlePointerEnter = (e: React.PointerEvent) => {
    if (e.pointerType === "mouse") setFlipped(!defaultFlipped);
  };
  const handlePointerLeave = (e: React.PointerEvent) => {
    if (e.pointerType === "mouse") setFlipped(defaultFlipped);
  };
  const handlePointerUp = (e: React.PointerEvent) => {
    if (e.pointerType === "touch") setFlipped(f => !f);
  };

  return (
    <div
      className="cursor-pointer"
      style={noFloat ? undefined : {
        willChange: "transform",
        animation: "card-float 3s ease-in-out infinite",
        animationDelay: floatDelay,
      }}
    >
      {/* Middle: handles static tilt */}
      <div style={{ transform: `rotate(${rotation}deg)` }}>
        {/* Inner: handles 3D flip */}
        <div
          className="relative w-full"
          style={{ perspective: "1000px", aspectRatio: "2.5 / 3.5" }}
          onPointerEnter={handlePointerEnter}
          onPointerLeave={handlePointerLeave}
          onPointerUp={handlePointerUp}
        >
          <div
            className="
              relative w-full h-full
              transition-transform duration-700 ease-in-out
              [transform-style:preserve-3d]
            "
            style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
          >
            {/* Front face */}
            <div
              className="absolute inset-0 rounded-2xl overflow-hidden shadow-[0px_5px_15px_0px_rgba(0,0,0,0.3)] [backface-visibility:hidden]"
            >
              <Image
                src={front}
                alt={`${alt} front`}
                fill
                className="object-cover"
              />
            </div>

            {/* Back face */}
            <div
              className="absolute inset-0 rounded-2xl overflow-hidden shadow-[0px_5px_15px_0px_rgba(0,0,0,0.3)] [backface-visibility:hidden] [transform:rotateY(180deg)]"
            >
              <Image
                src={back}
                alt={`${alt} back`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
