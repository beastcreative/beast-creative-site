import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import StatCounter from "@/components/ui/StatCounter";
import RelatedCaseStudies from "@/components/ui/RelatedCaseStudies";
import IconButton from "@/components/ui/IconButton";
import TiltCard from "@/components/ui/TiltCard";

export const metadata: Metadata = {
  alternates: { canonical: "https://beastcreativeagency.com/work/williams-bowl" },
  title: "Williams Bowl 2021 NFL Campaign | 6,020 Entries, $1,500 Budget | Beast Creative",
  description:
    "How Beast Creative Agency launched the Williams Bowl, a 4-week NFL-style bracket sweepstakes for Williams Foods that generated 6,020 entries, 872 new Facebook followers, and proved the CPG sweepstakes model on a $1,500 budget.",
};

export default function WilliamsBowlPage() {
  return (
    <>
      <section className="relative bg-beast-black pt-28 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-near-black to-beast-black" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="flex flex-wrap gap-2 mb-4">
                {["CPG Marketing", "Campaign Design", "Paid Social", "Consumer Data"].map((tag) => (
                  <span key={tag} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-beast-pink/15 text-beast-pink border border-beast-pink/20">{tag}</span>
                ))}
              </div>
              <p className="section-eyebrow text-beast-yellow mb-3">Case Study: Williams Foods · 2021</p>
              <h1 className="text-display-hero font-display font-extrabold text-white max-w-4xl mb-6 leading-tight">
                The Campaign That Made{" "}
                <span>CPG Growth Inevitable.</span>
              </h1>
              <p className="text-body-lead text-gray-300 max-w-2xl">
                The first campaign. The one that proved everything. 6,020 entries on a $1,500 ad budget. $0.16 CPC. The proof-of-concept that launched an entire campaign series.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="flex justify-center lg:justify-end">
                <div className="w-[346px] lg:w-[460px] xl:w-[528px]">
                  <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "0px 5px 15px 0px rgba(0,0,0,0.3)" }}>
                    <video
                      src="/assets/williams-bowl-hero.mp4"
                      aria-hidden="true"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="bg-beast-yellow py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 ">
            <StatCounter value={6020} label="Total Entries" sublabel="on $1,500 budget" valueClassName="text-beast-black" labelClassName="text-beast-black/60" sublabelClassName="text-beast-black/40" />
            <StatCounter value={0.16} prefix="$" decimals={2} label="Cost Per Click" sublabel="vs $0.28 industry avg" valueClassName="text-beast-black" labelClassName="text-beast-black/60" sublabelClassName="text-beast-black/40" />
            <StatCounter value={872} label="New Page Likes" sublabel="Facebook growth" valueClassName="text-beast-black" labelClassName="text-beast-black/60" sublabelClassName="text-beast-black/40" />
            <StatCounter value={4} label="Rounds Played" sublabel="bracket mechanic" valueClassName="text-beast-black" labelClassName="text-beast-black/60" sublabelClassName="text-beast-black/40" />
          </div>
        </div>
      </section>

      <section className="bg-section-offwhite py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12 order-2 lg:order-1">

              <AnimatedSection>
                <p className="section-eyebrow text-beast-pink mb-2">The Brief</p>
                <h2 className="font-display text-3xl font-bold text-beast-black mb-4">NFL Season. Williams Seasonings. Let&apos;s Make It a Thing.</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  This was the origin. Before the 22,000-entry back-to-school campaign. Before the 13,000-entry March Madness trading card collection. Before Beast had a thick CPG case study to point at, this was the campaign that started it all.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Williams Foods came to Beast with a modest budget and a clear opportunity: NFL season is the biggest food moment of the year. Tailgating, game day spreads, chili cook-offs, wing nights: Williams seasonings belong in every single one of those moments. The question was how to connect the brand to the cultural energy of the NFL in a way that felt authentic and drove real consumer engagement.
                </p>
                <div className="bg-white rounded-xl p-5 border border-gray-100">
                  <p className="font-display font-bold text-beast-black text-sm mb-2">The Constraint</p>
                  <p className="text-gray-600 text-sm leading-relaxed">A $1,500 total ad budget. For the Beast team, this wasn&apos;t a limitation. It was a challenge to prove that creative mechanics could do what raw ad spend alone couldn&apos;t. The Williams Bowl would live or die on the strength of the concept, not the size of the media buy.</p>
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <p className="section-eyebrow text-beast-pink mb-2">Campaign Creative</p>
                <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Built for the Bracket. Designed to Drive Votes.</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Every round of the Williams Bowl needed creative that made fans feel the stakes. Beast designed the campaign around the NFL playoff energy: stadium atmosphere, bold typography, and a prize stack that escalated week over week. The creative made it easy to understand, impossible to ignore, and worth sharing.
                </p>
                <TiltCard
                  src="/assets/williams-bowl-banner.jpg"
                  alt="Williams Bowl: Vote and Win Big campaign banner"
                  width={1500}
                  height={788}
                />
              </AnimatedSection>

              <AnimatedSection>
                <p className="section-eyebrow text-beast-pink mb-2">The Idea</p>
                <h2 className="font-display text-3xl font-bold text-beast-black mb-6">16 Seasonings Enter. One Champion Emerges.</h2>
                <div className="space-y-6">
                  {[
                    { step: "1", label: "The Concept: Williams Bowl", detail: "Beast designed the Williams Bowl as a four-round bracket tournament modeled directly on the NFL playoff structure. The 16 Williams seasoning products were seeded as \"teams\" and fans voted on head-to-head matchups each week, advancing their favorites through the bracket toward the Williams Bowl championship. Unlike a standard sweepstakes where you enter once and wait, the Williams Bowl gave fans a reason to come back four times." },
                    { step: "2", label: "The Bracket", detail: "Wildcard Round: OG Chili vs. OG Taco, Tex Mex Chili vs. Brown Gravy, Spaghetti vs. Spicy Wing, Chipotle Chili vs. Sloppy Joe, Meatloaf vs. Country Gravy, Tex Mex Taco vs. White Chicken Chili. Divisional → Championship → Williams Bowl Grand Prize. Final matchup: OG Chili vs. Tex Mex Taco. The people spoke." },
                    { step: "3", label: "The Prize Structure", detail: "Round-specific prizes escalated with the stakes. Wildcard: $25 Amazon gift card + Williams football + Williams gift pack. Divisional: $50 gift card + football + NFL hat. Championship: $75 gift card + hat & t-shirt. Williams Bowl Grand Prize: $100 gift card + football + hat, t-shirt, tumbler & jersey from favorite NFL team + Williams gift pack." },
                    { step: "4", label: "Distribution Innovation", detail: "One of Beast's key strategic decisions was partnering with an external sweepstakes aggregator website, a distribution channel that extended reach beyond Williams' existing social audience and the paid media footprint. This partnership channel became a repeatable playbook element that Beast refined and used again in future Williams and Sun-Bird campaigns." },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <span className="w-8 h-8 rounded-full bg-beast-pink/10 border border-beast-pink/20 text-beast-pink font-display font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">{item.step}</span>
                      <div>
                        <p className="font-display font-bold text-beast-black mb-1">{item.label}</p>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <p className="section-eyebrow text-beast-pink mb-2">The Bracket</p>
                <h2 className="font-display text-3xl font-bold text-beast-black mb-4">16 Seasonings Enter. Fans Decide Who Wins.</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Every week, Williams fans voted head-to-head matchups, pitting seasonings against each other like playoff seeds. OG Chili vs. Sloppy Joe. Tex Mex Taco vs. Spaghetti. Each vote entered fans to win that round&apos;s prize, and advanced their favorite deeper into the bracket. Four rounds. Four chances to win. One Williams Bowl champion.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <div className="flex-1 max-w-[320px] mx-auto sm:mx-0 [transform:rotate(-2deg)_translateY(0px)] hover:[transform:rotate(0deg)_translateY(-8px)] transition-all duration-300 cursor-default"
                    style={{animation: "bracketFloat1 4s ease-in-out infinite"}}>
                    <div className="rounded-2xl overflow-hidden shadow-[0px_5px_15px_0px_rgba(0,0,0,0.3)]">
                      <Image src="/assets/williams-bowl-bracket.jpg" alt="Williams Bowl championship bracket: seasoning matchups" width={1080} height={1080} className="w-full h-auto block" />
                    </div>
                  </div>
                  <div className="flex-1 max-w-[320px] mx-auto sm:mx-0 [transform:rotate(2deg)_translateY(0px)] hover:[transform:rotate(0deg)_translateY(-8px)] transition-all duration-300 cursor-default"
                    style={{animation: "bracketFloat2 4s ease-in-out infinite"}}>
                    <div className="rounded-2xl overflow-hidden shadow-[0px_5px_15px_0px_rgba(0,0,0,0.3)]">
                      <Image src="/assets/williams-bowl-bracket-final.jpg" alt="Williams Bowl finals: OG Chili vs Tex Mex Taco" width={1080} height={1080} className="w-full h-auto block" />
                    </div>
                  </div>
                </div>
                <style>{`
                  @keyframes bracketFloat1 {
                    0%, 100% { transform: rotate(-2deg) translateY(0px); }
                    50% { transform: rotate(-2deg) translateY(-10px); }
                  }
                  @keyframes bracketFloat2 {
                    0%, 100% { transform: rotate(2deg) translateY(-5px); }
                    50% { transform: rotate(2deg) translateY(5px); }
                  }
                `}</style>
              </AnimatedSection>

              <AnimatedSection>
                <p className="section-eyebrow text-beast-pink mb-2">The Results</p>
                <h2 className="font-display text-3xl font-bold text-beast-black mb-4">$1,500 In. 6,020 New Consumer Records Out.</h2>
                <div className="overflow-hidden rounded-xl border border-gray-100 mb-6">
                  <table className="w-full text-sm">
<caption className="sr-only">Williams Bowl Campaign Results</caption>
                    <thead>
                      <tr className="bg-beast-black">
                        <th scope="col" className="text-left px-4 py-3 font-display font-bold text-gray-400 text-xs uppercase tracking-wide">Metric</th>
                        <th scope="col" className="text-right px-4 py-3 font-display font-bold text-beast-yellow text-xs uppercase tracking-wide">Result</th>
                        <th scope="col" className="text-right px-4 py-3 font-display font-bold text-gray-400 text-xs uppercase tracking-wide">vs Benchmark</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { metric: "Total Entries", result: "6,020", benchmark: "—" },
                        { metric: "Total Ad Budget", result: "$1,500", benchmark: "—" },
                        { metric: "Cost Per Click (CPC)", result: "$0.16", benchmark: "43% lower than $0.28 avg" },
                        { metric: "New Facebook Page Likes", result: "872", benchmark: "—" },
                        { metric: "Campaign Duration", result: "4 weeks", benchmark: "—" },
                        { metric: "Rounds Completed", result: "4", benchmark: "—" },
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

                {/* Round by round */}
                <div className="bg-white rounded-xl p-5 border border-gray-100 mb-6">
                  <p className="font-display font-bold text-beast-black text-sm mb-3">Round-by-Round Participation</p>
                  <div className="space-y-2">
                    {[
                      { round: "Wildcard (Week 1)", entries: "1,919", locations: "CA, TX, FL, NY, OH" },
                      { round: "Divisional (Week 2)", entries: "1,300", locations: "TX, FL, CA, NY, OH" },
                      { round: "Championship (Week 3)", entries: "805", locations: "TX, FL, CA, NY, MO" },
                      { round: "Williams Bowl (Week 4)", entries: "1,996", locations: "CA, FL, TX, NY, PA" },
                    ].map((r) => (
                      <div key={r.round} className="flex justify-between text-sm py-1.5 border-b border-gray-50 last:border-0">
                        <span className="text-gray-700 font-medium">{r.round}</span>
                        <div className="text-right">
                          <span className="font-display font-bold text-beast-black mr-3">{r.entries}</span>
                          <span className="text-xs text-gray-400">{r.locations}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-near-black rounded-xl p-5">
                  <p className="font-display font-bold text-beast-pink text-xs uppercase tracking-widest mb-2">Why This Campaign Matters</p>
                  <p className="text-gray-300 text-sm leading-relaxed">At $1,500, the Williams Bowl proved that Beast&apos;s creative mechanic approach could generate thousands of consumer records efficiently. The $0.16 CPC, 43% below industry average, showed that the concept itself was doing the work, not just the ad budget. Three months later, the BTS campaign ran on $4,000 and generated 22,043 entries. One year later, Williams All-Stars added 13,660 more with an email click rate 11x the industry average. The Williams Bowl is where that story started.</p>
                </div>
              </AnimatedSection>

            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <AnimatedSection>
                <div className="bg-white rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-display font-bold text-sm uppercase tracking-widest text-beast-pink mb-5">Campaign Overview</h3>
                  {[
                    { label: "Client", value: "Williams Foods" },
                    { label: "Campaign", value: "Williams Bowl: NFL Bracket" },
                    { label: "Year", value: "Fall / Winter 2021" },
                    { label: "Duration", value: "4 weeks" },
                    { label: "Ad Budget", value: "$1,500" },
                    { label: "Platforms", value: "Facebook, Sweepstakes Partner" },
                    { label: "Services", value: "Strategy, Creative, Polling Setup, Landing Page, Paid Social" },
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
                  <h3 className="font-display font-bold text-sm uppercase tracking-widest text-beast-pink mb-4">The Williams Campaign Series</h3>
                  {[
                    { campaign: "Williams Bowl", result: "6,020 entries", year: "2021" },
                    { campaign: "Williams BTS", result: "22,043 entries", year: "2021" },
                    { campaign: "Williams All-Stars", result: "13,660 entries", year: "2022" },
                  ].map((row) => (
                    <div key={row.campaign} className="mb-4 last:mb-0 pb-4 last:pb-0 border-b border-white/5 last:border-0">
                      <div className="flex justify-between items-center mb-0.5">
                        <span className="text-xs text-white uppercase tracking-widest">{row.campaign}</span>
                        <span className="text-xs text-white">{row.year}</span>
                      </div>
                      <span className="font-display font-bold text-beast-yellow">{row.result}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Winners — full-width section */}
      <section className="bg-[#F4F4F4] py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection className="text-center mb-14">
            <p className="section-eyebrow text-beast-pink mb-3">The Winners</p>
            <h2 className="font-display text-4xl font-extrabold text-beast-black mb-4">Real Fans. Real Prizes. Announced Every Round.</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Every round, Beast designed and posted custom winner announcement graphics tagging the real fans who voted their way to victory, keeping the community engaged and the next entry feeling urgent.</p>
          </AnimatedSection>
          <div className="flex flex-col items-center lg:flex-row lg:items-end justify-center gap-8 lg:gap-6">
            {[
              { src: "/assets/williams-bowl-winner-wildcard.jpg",     label: "Wildcard Round",     rot: "-4deg", delay: 0.05 },
              { src: "/assets/williams-bowl-winner-divisional.jpg",   label: "Divisional Round",   rot:  "2deg", delay: 0.1  },
              { src: "/assets/williams-bowl-winner-championship.jpg", label: "Championship Round",  rot: "-2deg", delay: 0.15 },
              { src: "/assets/williams-bowl-winner-grandprize.jpg",   label: "Grand Prize",         rot:  "4deg", delay: 0.2  },
            ].map((card) => (
              <AnimatedSection key={card.label} delay={card.delay} className="w-full max-w-[300px] shrink-0">
                <div
                  className="rounded-2xl overflow-hidden shadow-[0px_5px_15px_0px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:scale-105 hover:lg:rotate-0"
                  style={{ transform: `rotate(${card.rot})` }}
                >
                  <Image
                    src={card.src}
                    alt={`Williams Bowl ${card.label} winner announcement`}
                    width={1080}
                    height={1080}
                    className="w-full h-auto block"
                  />
                </div>
                <div className="flex items-center justify-center mt-6">
                  <span className="inline-flex items-center gap-2 bg-beast-pink rounded-full px-4 py-1.5 text-sm font-bold text-white font-display">
                    <span className="w-2 h-2 rounded-full bg-beast-green animate-pulse shrink-0" />
                    {card.label}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <RelatedCaseStudies related={["williams-bts", "williams-allstars", "sun-bird"]} />

      <section className="bg-beast-black py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-white mb-4">Every Great Campaign Series Starts With the First One.</h2>
            <p className="text-gray-400 mb-8">Beast&apos;s CPG sweepstakes playbook is proven across multiple campaigns, multiple clients, and multiple years. Ready to run your first, or your best yet?</p>
            <IconButton href="/growth-assessment?type=work" icon="rocket">Start Your Growth Assessment</IconButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
