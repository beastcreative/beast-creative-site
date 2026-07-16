"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

export default function SweetSensiHero() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Full-bg video fades in + scales down
      tl.from(".hero-video-bg", {
        scale: 1.08,
        opacity: 0,
        duration: 1.2,
        ease: "power3.inOut",
      });

      // Text items stagger up, overlapping with video reveal
      tl.from(
        ".hero-text-item",
        {
          y: 36,
          opacity: 0,
          duration: 0.75,
          stagger: 0.13,
        },
        "-=0.7"
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative bg-beast-black min-h-screen overflow-hidden flex items-center"
    >
      {/* Full-bleed background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hero-video-bg absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.8 }}
        src="/assets/sweet-sensi-hero.mp4"
      />

      {/* Text */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20 py-24 w-full">
        <div className="lg:w-1/2 lg:pr-16">
          <div className="hero-text-item flex flex-wrap gap-2 mb-4">
            {[
              "SEO",
              "Social Media Marketing",
              "E-Commerce",
              "CBD Industry",
              "Content Strategy",
            ].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-beast-pink/15 text-beast-pink border border-beast-pink/20"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="hero-text-item section-eyebrow text-beast-yellow mb-3">
            Case Study: Sweet Sensi · 2023 to 2024
          </p>
          <h1 className="hero-text-item text-display-hero font-display font-extrabold text-white mb-6 leading-tight">
            500% MRR Growth.{" "}
            <span className="text-beast-pink">
              In the Industry That Bans Most Ads.
            </span>
          </h1>
          <p className="hero-text-item text-body-lead text-gray-300">
            CBD brands couldn&apos;t run Google or Facebook ads. So Beast built an
            organic engine instead, and grew Sweet Sensi&apos;s monthly
            recurring revenue by over 500%.
          </p>
        </div>
      </div>
    </section>
  );
}
