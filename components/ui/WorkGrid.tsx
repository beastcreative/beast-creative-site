"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface Stat {
  label: string;
  value: string;
  sub: string;
}

interface CaseStudy {
  client: string;
  campaign: string;
  heroStat: string;
  heroStatLabel: string;
  year: string;
  categories: string[];
  href: string;
  highlight: boolean;
  stats: Stat[];
  image?: string;
  gradientFrom?: string;
  gradientTo?: string;
  logo?: { src: string; width: number; height: number };
}

const FILTERS = ["All", "CPG Marketing", "Branding", "SEO", "Paid Media"];

function matches(categories: string[], filter: string): boolean {
  if (filter === "All") return true;
  if (filter === "SEO") return categories.some(c => c === "SEO" || c === "Social Media" || c === "E-Commerce");
  if (filter === "Paid Media") return categories.some(c => c === "Paid Media" || c === "Performance Marketing" || c === "Paid Social");
  return categories.includes(filter);
}

export default function WorkGrid({ caseStudies }: { caseStudies: CaseStudy[] }) {
  const [active, setActive] = useState("All");
  const filtered = caseStudies.filter(cs => matches(cs.categories, active));

  return (
    <section className="bg-section-offwhite py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filter case studies by category">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              aria-pressed={active === f}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                active === f
                  ? "bg-beast-pink text-white"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-beast-pink hover:text-beast-pink"
              }`}
            >
              {f}
              {f === "All" && (
                <span className="ml-1.5 text-xs opacity-60">{caseStudies.length}</span>
              )}
            </button>
          ))}
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filtered.map((cs, i) => (
              <AnimatedSection key={cs.href} delay={i * 0.08}>
                <Link href={cs.href} className="group block h-full">
                  <article className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                    {/* Visual banner */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                      {cs.image ? (
                        <Image
                          src={cs.image}
                          alt={`${cs.client} — ${cs.campaign}`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div
                          className="absolute inset-0 flex items-center justify-center"
                          style={{
                            background: `linear-gradient(135deg, ${cs.gradientFrom ?? "#171717"} 0%, ${cs.gradientTo ?? "#0a0a0a"} 100%)`,
                          }}
                        >
                          {cs.logo && (
                            <Image
                              src={cs.logo.src}
                              alt={`${cs.client} logo`}
                              width={cs.logo.width}
                              height={cs.logo.height}
                              className="h-auto w-auto max-h-11 max-w-[55%] object-contain opacity-90 transition-transform duration-500 group-hover:scale-105"
                            />
                          )}
                        </div>
                      )}
                      {/* Year badge */}
                      <span className="absolute top-3 right-3 text-[11px] font-bold uppercase tracking-widest text-white bg-black/45 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10">
                        {cs.year}
                      </span>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <p className="text-xs font-semibold uppercase tracking-widest text-beast-pink mb-3">
                        {cs.client}
                      </p>
                      <h3 className="font-display text-lg font-bold text-beast-black mb-4 leading-tight">
                        {cs.campaign}
                      </h3>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="font-display text-4xl font-extrabold text-beast-black tracking-normal">
                          {cs.heroStat}
                        </span>
                        <span className="text-sm text-gray-500 font-medium">{cs.heroStatLabel}</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 my-4 py-4 border-y border-gray-100">
                        {cs.stats.map((stat) => (
                          <div key={stat.label} className="text-center">
                            <div className="font-display text-base font-bold text-beast-black">{stat.value}</div>
                            <div className="text-xs text-gray-500">{stat.sub}</div>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {cs.categories.map((cat) => (
                          <span key={cat} className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600">
                            {cat}
                          </span>
                        ))}
                      </div>
                      <div className="mt-auto">
                        <span className="btn-ghost-pink text-sm">View Case Study →</span>
                      </div>
                    </div>
                  </article>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="font-display text-lg font-semibold text-gray-500 mb-2">No case studies in this category yet.</p>
            <p className="text-sm text-gray-400">
              <a href="/contact" className="text-beast-pink hover:underline">Get in touch</a> to discuss your project.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
