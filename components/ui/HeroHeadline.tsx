"use client";

import { motion, Variants, useReducedMotion } from "framer-motion";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const word: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

export default function HeroHeadline() {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return (
      <h1 className="text-display-hero font-display font-extrabold text-white max-w-4xl mb-4">
        San Antonio SEO &amp; AEO
        <br />
        <span>for the AI Search Era</span>
      </h1>
    );
  }

  const line1 = ["San", "Antonio", "SEO", "&", "AEO"];
  const line2 = ["for", "the", "AI", "Search", "Era"];

  return (
    <motion.h1
      className="text-display-hero font-display font-extrabold text-white max-w-4xl mb-4"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }}
    >
      {line1.map((w) => (
        <motion.span key={w} className="inline-block mr-[0.28em]" variants={word}>
          {w}
        </motion.span>
      ))}
      <span className="block h-0" aria-hidden="true" />
      {line2.map((w) => (
        <motion.span key={w} className="inline-block mr-[0.28em] text-beast-pink" variants={word}>
          {w}
        </motion.span>
      ))}
    </motion.h1>
  );
}
