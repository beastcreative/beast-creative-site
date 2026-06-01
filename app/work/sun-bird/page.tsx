import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import StatCounter from "@/components/ui/StatCounter";
import RelatedCaseStudies from "@/components/ui/RelatedCaseStudies";
import IconButton from "@/components/ui/IconButton";
import FlipCard from "@/components/ui/FlipCard";

export const metadata: Metadata = {
  title: "Sun-Bird Seasonings Bird Herd Campaign | 36,581 Entries, 7.03% CTR | Beast Creative",
  description:
    "Beast Creative Agency helped Sun-Bird Seasonings announce their national Walmart rollout with a sweepstakes generating 36,581 entries — 3.6x their goal — at 7.03% CTR and $0.12 CPC. Nearly 8x the industry benchmark.",
};

export default function SunBirdPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-beast-black pt-28 pb-20 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-near-black to-beast-black" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Text */}
            <AnimatedSection>
              <div className="flex flex-wrap gap-2 mb-4">
                {["CPG Marketing", "National Retail Launch", "Sweepstakes", "Paid Social", "Consumer Data"].map((tag) => (
                  <span key={tag} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-beast-pink/15 text-beast-pink border border-beast-pink/20">{tag}</span>
                ))}
              </div>
              <p className="section-eyebrow text-beast-yellow mb-3">Case Study — Sun-Bird Seasonings · 2021</p>
              <h1 className="text-display-hero font-display font-extrabold text-white mb-6 leading-tight">
                Delivering CPG Brand Awareness{" "}
                <span className="text-beast-pink">at Scale.</span>
              </h1>
              <p className="text-body-lead text-gray-300 max-w-xl">
                Sun-Bird expanded into Walmart nationwide — and drove 36,581 contest entries, 3.6x the goal, on a $6,000 budget. 7.03% CTR. $0.12 CPC. Nearly 8x the industry benchmark.
              </p>
            </AnimatedSection>

            {/* Flip card */}
            <AnimatedSection delay={0.15} className="flex justify-center lg:justify-end">
              <div className="w-full max-w-[460px] lg:max-w-[500px]">
                <FlipCard
                  front="/assets/sunbird-flip-front.png"
                  back="/assets/sunbird-flip-back.png"
                  alt="Sun-Bird Seasonings campaign creative"
                  tilt={3}
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-beast-yellow py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 ">
            <StatCounter value={36581} label="Total Entries" sublabel="vs 10,000 goal — 3.6x" valueClassName="text-beast-black" labelClassName="text-beast-black/60" sublabelClassName="text-beast-black/40" />
            <StatCounter value={7.03} suffix="%" decimals={2} label="Click-Through Rate" sublabel="vs 0.89% industry avg" valueClassName="text-beast-black" labelClassName="text-beast-black/60" sublabelClassName="text-beast-black/40" />
            <StatCounter value={0.12} prefix="$" decimals={2} label="Cost Per Click" sublabel="vs $0.28 industry avg" valueClassName="text-beast-black" labelClassName="text-beast-black/60" sublabelClassName="text-beast-black/40" />
            <StatCounter value={208431} label="Paid Reach" sublabel="national" valueClassName="text-beast-black" labelClassName="text-beast-black/60" sublabelClassName="text-beast-black/40" />
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="bg-section-offwhite py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* MAIN — 2/3 */}
            <div className="lg:col-span-2 space-y-12 order-2 lg:order-1">

              {/* The Brief */}
              <AnimatedSection>
                <p className="section-eyebrow text-beast-pink mb-2">The Brief</p>
                <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Sun-Bird Just Landed in Every Walmart in America. Let&apos;s Make Some Noise.</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Sun-Bird Seasonings had earned a major milestone: their full line of Asian-inspired seasoning mixes — Fried Rice, Stir-Fry, Beef &amp; Broccoli, General Tso&apos;s Chicken, and Mongolian Beef — was landing in Walmart stores nationwide. For a regional brand, getting into Walmart nationally is the moment everything changes. The shelves are set. The products are shipping. Now the brand needed to build consumer demand fast enough to keep those shelves moving.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The brief was deceptively straightforward: announce the national Walmart rollout, build consumer excitement, and collect first-party data that would give Sun-Bird&apos;s retail team proof of consumer demand across Walmart&apos;s distribution footprint.
                </p>
                <div className="bg-white rounded-xl p-5 border border-gray-100 mt-4">
                  <p className="font-display font-bold text-beast-black text-sm mb-2">The Stakes</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">Getting into Walmart is a massive opportunity — and a massive test. Retailers watch sell-through rates closely in the first weeks and months. A national rollout that doesn&apos;t move product risks getting delisted. Sun-Bird needed consumers to know it was there, find it on the shelf, and buy it.</p>
                  <p className="font-display font-bold text-beast-black text-sm mb-1">The Goal</p>
                  <p className="text-gray-600 text-sm">10,000 sweepstakes entries, based on performance benchmarks from other C.H. Guenther brand campaigns. Beast took that as the starting point.</p>
                </div>
              </AnimatedSection>

              {/* The Process */}
              <AnimatedSection>
                <p className="section-eyebrow text-beast-pink mb-2">The Approach</p>
                <h2 className="font-display text-3xl font-bold text-beast-black mb-6">Join the Bird Herd. Win Big. Tell Your Friends.</h2>
                <div className="space-y-6">
                  {[
                    {
                      step: "1",
                      label: "The Campaign Concept: Bird Herd",
                      detail: "\"Bird Herd\" was both a play on Sun-Bird's brand identity and an instant community signal — \"the Bird Herd\" is what Sun-Bird fans are called. The concept: Sun-Bird is now at a Walmart near you nationwide. To celebrate, we're giving away a $1,000 Walmart gift card and a gift pack filled with Sun-Bird products and branded swag. Enter to win and join the Bird Herd.",
                    },
                    {
                      step: "2",
                      label: "The Creative Strategy",
                      detail: "The ad creative leaned directly into the national Walmart rollout as the news hook. \"Now at a store near you nationwide\" is a legitimately exciting announcement for fans of the brand. Beast built multiple creative variations testing different headlines, visual treatments, and CTAs — identifying winners within the first days and shifting budget toward them.",
                    },
                    {
                      step: "3",
                      label: "The Prize Architecture",
                      detail: "One grand prize. One winner. Maximum perceived value. Grand Prize: $1,000 Walmart gift card, wok, chopsticks, branded kitchen towels, branded Sun-Bird apron, and Sun-Bird products. The Walmart gift card was a strategic choice — it reinforced the retail channel and incentivized consumers to think of Walmart as the place to find Sun-Bird.",
                    },
                    {
                      step: "4",
                      label: "Mobile-First Execution",
                      detail: "Beast's media strategy prioritized mobile placements, reflecting where the target audience (women 35–65) spends time. The results validated the approach decisively: mobile reach hit 164,800 (80% of total paid reach) and mobile link clicks hit 28,059 (94% of total link clicks).",
                    },
                    {
                      step: "5",
                      label: "The Data That Mattered Beyond the Numbers",
                      detail: "36,581 first-party consumer records — each with a name, verified email, and ZIP code. When Sun-Bird's retail team mapped the geographic distribution of entries against Walmart's national store footprint, the result was a consumer demand heat map — geographic proof that real people in specific markets were aware of and engaged with the brand. That's what you bring into a Walmart buyer meeting.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <span className="w-8 h-8 rounded-full bg-beast-pink/10 border border-beast-pink/20 text-beast-pink font-display font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
                        {item.step}
                      </span>
                      <div>
                        <p className="font-display font-bold text-beast-black mb-1">{item.label}</p>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Mobile Story Ads */}
              <AnimatedSection>
                <p className="section-eyebrow text-beast-pink mb-2">Mobile Creative</p>
                <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Built for the Scroll. Made for Mobile.</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  80% of total paid reach came from mobile placements. Beast built story-format ads specifically for the mobile feed — full-screen, thumb-stopping creative that met Sun-Bird fans exactly where they were scrolling.
                </p>
                <div className="flex gap-10 justify-center">
                  <div className="w-[30%] max-w-[180px] [transform:rotate(-3deg)] hover:[transform:rotate(0deg)_scale(1.03)] transition-transform duration-300">
                    <div className="rounded-2xl overflow-hidden shadow-[0px_5px_15px_0px_rgba(0,0,0,0.3)]">
                      <Image src="/assets/sunbird-mobile-flocking.jpg" alt="Sun-Bird mobile story — Flocking to a Store Near You" width={540} height={960} className="w-full h-auto block" />
                    </div>
                  </div>
                  <div className="w-[30%] max-w-[180px] [transform:rotate(1deg)] hover:[transform:rotate(0deg)_scale(1.03)] transition-transform duration-300">
                    <div className="rounded-2xl overflow-hidden shadow-[0px_5px_15px_0px_rgba(0,0,0,0.3)]">
                      <Image src="/assets/sunbird-mobile-giftcard.jpg" alt="Sun-Bird mobile story — Flocking to a Store Near You sweepstakes" width={540} height={960} className="w-full h-auto block" />
                    </div>
                  </div>
                  <div className="w-[30%] max-w-[180px] [transform:rotate(3deg)] hover:[transform:rotate(0deg)_scale(1.03)] transition-transform duration-300">
                    <div className="rounded-2xl overflow-hidden shadow-[0px_5px_15px_0px_rgba(0,0,0,0.3)]">
                      <Image src="/assets/sunbird-mobile-product.jpg" alt="Sun-Bird mobile story — Our Product Your Creation" width={540} height={960} className="w-full h-auto block" />
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* The Results */}
              <AnimatedSection>
                <p className="section-eyebrow text-beast-pink mb-2">The Results</p>
                <h2 className="font-display text-3xl font-bold text-beast-black mb-4">The Numbers That Changed How Sun-Bird Talks to Retailers.</h2>
                <div className="overflow-hidden rounded-xl border border-gray-100 mb-8">
                  <table className="w-full text-sm">
<caption className="sr-only">Sun-Bird Campaign Results</caption>
                    <thead>
                      <tr className="bg-beast-black">
                        <th scope="col" className="text-left px-4 py-3 font-display font-bold text-gray-400 text-xs uppercase tracking-wide">Metric</th>
                        <th scope="col" className="text-right px-4 py-3 font-display font-bold text-beast-yellow text-xs uppercase tracking-wide">Result</th>
                        <th scope="col" className="text-right px-4 py-3 font-display font-bold text-gray-400 text-xs uppercase tracking-wide">vs Benchmark</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { metric: "Total Entries", result: "36,581", benchmark: "3.6x over 10,000 goal" },
                        { metric: "Click-Through Rate (CTR)", result: "7.03%", benchmark: "7.9x industry avg (0.89%)" },
                        { metric: "Cost Per Click (CPC)", result: "$0.12", benchmark: "57% lower than $0.28 avg" },
                        { metric: "Total Ad Budget", result: "$6,000", benchmark: "—" },
                        { metric: "Paid Reach", result: "208,431", benchmark: "—" },
                        { metric: "Paid Impressions", result: "687,698", benchmark: "—" },
                        { metric: "Paid Link Clicks", result: "48,347", benchmark: "—" },
                        { metric: "Post Shares", result: "647", benchmark: "—" },
                        { metric: "New FB Page Likes", result: "739", benchmark: "—" },
                      ].map((row, i) => (
                        <tr key={row.metric} className={i % 2 === 0 ? "bg-white" : "bg-section-offwhite"}>
                          <td className="px-4 py-3 text-gray-700 font-medium">{row.metric}</td>
                          <td className="px-4 py-3 text-right font-display font-bold text-beast-black">{row.result}</td>
                          <td className="px-4 py-3 text-right text-beast-pink text-xs font-semibold">{row.benchmark}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-near-black rounded-xl p-6 mb-8">
                  <p className="font-display font-bold text-beast-pink text-xs uppercase tracking-widest mb-3">The First-Party Data Story</p>
                  <p className="text-gray-300 text-sm leading-relaxed">36,581 email addresses. 36,581 ZIP codes. 36,581 people who raised their hand and said &quot;I&apos;m interested in Sun-Bird.&quot; That database is a direct email channel to over 36,000 consumers — no platform algorithm in the way. Geographic demand data mapped to specific US markets. Proof of consumer awareness to present to retail buyers.</p>
                </div>

                <blockquote className="border border-beast-pink/20 bg-beast-pink/5 rounded-xl px-6 py-4">
                  <p className="text-beast-black font-medium italic text-lg leading-relaxed">
                    &quot;No competitor can walk into a pitch meeting with a 7.03% CTR and $0.12 CPC on a $6,000 budget. That&apos;s our proof of concept.&quot;
                  </p>
                  <footer className="mt-3 text-sm text-gray-500">— John Speer, Co-Owner/COO, Beast Creative Agency</footer>
                </blockquote>
              </AnimatedSection>

            </div>

            {/* SIDEBAR — 1/3 */}
            <div className="space-y-6 order-1 lg:order-2">
              <AnimatedSection>
                <div className="bg-white rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-display font-bold text-sm uppercase tracking-widest text-beast-pink mb-5">Campaign Overview</h3>
                  {[
                    { label: "Client", value: "Sun-Bird Seasonings" },
                    { label: "Campaign", value: "Bird Herd — Walmart Rollout" },
                    { label: "Dates", value: "Aug 23 – Sep 30, 2021" },
                    { label: "Duration", value: "38 days" },
                    { label: "Ad Budget", value: "$6,000" },
                    { label: "Platforms", value: "Facebook, Instagram" },
                    { label: "Services", value: "Strategy, Creative, Landing Page, Paid Social, Data Strategy" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between py-3 border-b border-gray-100 last:border-0 gap-3">
                      <span className="text-sm text-white shrink-0">{item.label}</span>
                      <span className="text-sm font-semibold text-beast-black text-right">{item.value}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="bg-near-black rounded-2xl p-6 border border-beast-pink/20">
                  <h3 className="font-display font-bold text-sm uppercase tracking-widest text-beast-pink mb-4">Industry Benchmarks</h3>
                  {[
                    { metric: "CTR", beast: "7.03%", industry: "0.89%", lift: "7.9x" },
                    { metric: "CPC", beast: "$0.12", industry: "$0.28", lift: "57% lower" },
                    { metric: "Entries", beast: "36,581", industry: "10,000 goal", lift: "3.6x" },
                  ].map((row) => (
                    <div key={row.metric} className="mb-4 last:mb-0 pb-4 last:pb-0 border-b border-white/5 last:border-0">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-white uppercase tracking-widest">{row.metric}</span>
                        <span className="text-xs font-bold text-beast-pink">{row.lift}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-display font-bold text-beast-yellow text-lg">{row.beast}</span>
                        <span className="text-xs text-white/70 self-end pb-0.5">avg: {row.industry}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

          </div>
        </div>
      </section>

      {/* CAMPAIGN CREATIVE */}
      <section className="bg-[#F4F4F4] py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection className="text-center mb-14">
            <p className="section-eyebrow text-beast-pink mb-3">Campaign Creative</p>
            <h2 className="font-display text-4xl font-extrabold text-beast-black mb-4">The Ads That Drove 36,581 Entries.</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Bold creative built to stop thumbs mid-scroll. These ran across Facebook and Instagram during the Bird Herd sweepstakes.</p>
          </AnimatedSection>

          {/* Scattered square ads */}
          <div className="flex flex-col items-center lg:flex-row lg:items-end justify-center gap-8 lg:gap-6 mb-16">

            <AnimatedSection delay={0.05} className="w-full max-w-[340px] shrink-0">
              <div className="rounded-2xl overflow-hidden shadow-[0px_5px_15px_0px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:scale-105 hover:lg:rotate-0 lg:[transform:rotate(-4deg)]">
                <Image src="/assets/sunbird-ad-green.jpg" alt="Sun-Bird Bird Herd social ad" width={680} height={680} className="w-full h-auto block" />
              </div>
              <div className="flex items-center justify-center mt-6">
                <span className="inline-flex items-center gap-2 bg-beast-pink rounded-full px-4 py-1.5 text-sm font-bold text-white font-display">
                  <span className="w-2 h-2 rounded-full bg-beast-green animate-pulse shrink-0" />
                  Launch Ad
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="w-full max-w-[360px] shrink-0">
              <div className="rounded-2xl overflow-hidden shadow-[0px_5px_15px_0px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:scale-105 lg:[transform:rotate(2deg)]">
                <Image src="/assets/sunbird-winner.png" alt="Sun-Bird Bird Herd winner announcement" width={680} height={680} className="w-full h-auto block" />
              </div>
              <div className="flex items-center justify-center mt-6">
                <span className="inline-flex items-center gap-2 bg-beast-pink rounded-full px-4 py-1.5 text-sm font-bold text-white font-display">
                  <span className="w-2 h-2 rounded-full bg-beast-green animate-pulse shrink-0" />
                  Winner Reveal
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15} className="w-full max-w-[340px] shrink-0">
              <div className="rounded-2xl overflow-hidden shadow-[0px_5px_15px_0px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:scale-105 hover:lg:rotate-0 lg:[transform:rotate(4deg)]">
                <Image src="/assets/sunbird-ad-yellow.jpg" alt="Sun-Bird Flocking to a Store Near You ad" width={680} height={680} className="w-full h-auto block" />
              </div>
              <div className="flex items-center justify-center mt-6">
                <span className="inline-flex items-center gap-2 bg-beast-pink rounded-full px-4 py-1.5 text-sm font-bold text-white font-display">
                  <span className="w-2 h-2 rounded-full bg-beast-green animate-pulse shrink-0" />
                  Awareness Ad
                </span>
              </div>
            </AnimatedSection>

          </div>

        </div>
      </section>

      <RelatedCaseStudies related={["williams-bts", "williams-allstars", "sweet-sensi"]} />

      <section className="bg-beast-black py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-white mb-4">Is Your Brand Ready for Walmart? Your Marketing Should Get There First.</h2>
            <p className="text-gray-400 mb-8">Sun-Bird walked into Walmart with 36,000 consumer records and a 7.03% CTR to back up every conversation. Beast builds that proof for CPG brands.</p>
            <IconButton href="https://calendar.app.google/9q1mcYgEdXNyjK8G6" icon="chart" target="_blank" rel="noopener noreferrer">See Where You Stand in AI Search</IconButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
