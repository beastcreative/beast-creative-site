"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface CinemaVideoProps {
  src: string;
  poster: string;
  alt: string;
  className?: string;
}

/**
 * Reduced-motion-safe autoplay video for the /redesign-2 "Screening
 * Room" route. SSR (and the pre-mount frame) renders the poster via
 * next/image; after mount the video only swaps in when the visitor
 * does NOT prefer reduced motion. Must be placed inside a positioned,
 * sized container (the poster image uses `fill`).
 */
export default function CinemaVideo({ src, poster, alt, className = "" }: CinemaVideoProps) {
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPlayVideo(true);
    }
  }, []);

  if (playVideo) {
    return (
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        aria-label={alt}
        className={`h-full w-full object-cover ${className}`}
      >
        <source src={src} type="video/mp4" />
      </video>
    );
  }

  return (
    <Image
      src={poster}
      alt={alt}
      fill
      sizes="100vw"
      className={`object-cover ${className}`}
    />
  );
}
