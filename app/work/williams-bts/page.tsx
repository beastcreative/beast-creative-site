import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FlipCard from "@/components/ui/FlipCard";
import AnimatedSection from "@/components/ui/AnimatedSection";
import StatCounter from "@/components/ui/StatCounter";
import RelatedCaseStudies from "@/components/ui/RelatedCaseStudies";
import IconButton from "@/components/ui/IconButton";

export const metadata: Metadata = {
  title: "Williams Foods Back-to-School Campaign | 22,043 Entries on $4,000 | Beast Creative",
  description:
    "Beast Creative Agency helped Williams Foods generate 22,043 sweepstakes entries, 2.2x their goal, on a $4,000 ad budget with 3.89% CTR and $0.18 CPC for the 'Williamize Your Food' back-to-school campaign.",
};

export default function WilliamsBtsPage() {
  return (
    <>
      <section className="relative bg-beast-black pt-28 pb-20 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-near-black to-beast-black" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <AnimatedSection>
              <div className="flex flex-wrap gap-2 mb-4">
                {["CPG Marketing", "Sweepstakes", "Paid Social", "Consumer Data", "Email Marketing"].map((tag) => (
                  <span key={tag} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-beast-pink/15 text-beast-pink border border-beast-pink/20">{tag}</span>
                ))}
              </div>
              <p className="section-eyebrow text-beast-yellow mb-3">Case Study: Williams Foods · 2021</p>
              <h1 className="text-display-hero font-display font-extrabold text-white mb-6 leading-tight">
                They Asked for 10,000 Entries.{" "}
                <span className="text-beast-pink">We Delivered 22,043.</span>
              </h1>
              <p className="text-body-lead text-gray-300 max-w-xl">
                2.2x the stated goal. $0.18 CPC on a $4,000 budget. 287,896 people reached in 31 days.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.15} className="flex justify-center lg:justify-end">
              <div className="w-72 lg:w-96 xl:w-[440px]">
                <FlipCard
                  front="/assets/williams-bts-hero.jpg"
                  back="/assets/williams-bts-hero-back.jpg"
                  alt="Williams Back-to-School campaign ad"
                  tilt={3}
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="bg-beast-yellow py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 ">
            <StatCounter value={22043} label="Total Entries" sublabel="vs 10,000 goal (2.2x)" valueClassName="text-beast-black" labelClassName="text-beast-black/60" sublabelClassName="text-beast-black/40" />
            <StatCounter value={3.89} suffix="%" decimals={2} label="Click-Through Rate" sublabel="vs 0.89% industry avg" valueClassName="text-beast-black" labelClassName="text-beast-black/60" sublabelClassName="text-beast-black/40" />
            <StatCounter value={0.18} prefix="$" decimals={2} label="Cost Per Click" sublabel="vs $0.28 industry avg" valueClassName="text-beast-black" labelClassName="text-beast-black/60" sublabelClassName="text-beast-black/40" />
            <StatCounter value={287896} label="Paid Reach" sublabel="on $4,000 budget" valueClassName="text-beast-black" labelClassName="text-beast-black/60" sublabelClassName="text-beast-black/40" />
          </div>
        </div>
      </section>

      <section className="bg-section-offwhite py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12 order-2 lg:order-1">

              <AnimatedSection>
                <p className="section-eyebrow text-beast-pink mb-2">The Brief</p>
                <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Back to School, Back to Williams.</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Williams Foods had a dual mission heading into Fall 2021: drive consumer engagement through a back-to-school themed campaign, and announce that Williams Chili Seasoning had landed in Walmart stores nationwide. The back-to-school season is a natural fit for Williams: families are back at the dinner table, school lunches need to be packed, and weeknight meals become a routine again.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The entry goal coming in was 10,000 total submissions. Beast took that number as the floor, not the ceiling.
                </p>
                <div className="bg-white rounded-xl p-5 border border-gray-100">
                  <p className="font-display font-bold text-beast-black text-sm mb-2">The Opportunity</p>
                  <p className="text-gray-600 text-sm leading-relaxed">Most CPG back-to-school campaigns follow the same playbook: feature a kid, push a coupon. Beast saw an opening to do something more engaging: ask consumers which food they wanted Williams to &quot;Williamize.&quot; That question transformed a passive sweepstakes into an interactive brand conversation and gave Williams valuable product insight simultaneously.</p>
                </div>
              </AnimatedSection>

              {/* Campaign Ad Cards */}
              <AnimatedSection>
                <p className="section-eyebrow text-beast-pink mb-2">Campaign Creative</p>
                <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Spin to Win. Williamize Your Food.</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  The creative leaned into the back-to-school energy with a bold, playful aesthetic: a Spin to Win mechanic paired with the "Williamize Your Food" sweepstakes concept. Eye-catching color and a clear prize hook made these impossible to scroll past.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <div className="flex-1 max-w-[280px] mx-auto sm:mx-0 [transform:rotate(-2deg)_translateY(0px)] hover:[transform:rotate(0deg)_translateY(-8px)] transition-all duration-300 cursor-default"
                    style={{animation: "float1 4s ease-in-out infinite"}}>
                    <div className="rounded-2xl overflow-hidden shadow-[0px_5px_15px_0px_rgba(0,0,0,0.3)]">
                      <Image src="/assets/williams-bts-ad1.jpg" alt="Williams Back-to-School Spin to Win ad" width={540} height={540} className="w-full h-auto block" />
                    </div>
                  </div>
                  <div className="flex-1 max-w-[280px] mx-auto sm:mx-0 [transform:rotate(2deg)_translateY(0px)] hover:[transform:rotate(0deg)_translateY(-8px)] transition-all duration-300 cursor-default"
                    style={{animation: "float2 4s ease-in-out infinite"}}>
                    <div className="rounded-2xl overflow-hidden shadow-[0px_5px_15px_0px_rgba(0,0,0,0.3)]">
                      <Image src="/assets/williams-bts-ad2.jpg" alt="Williams Back-to-School prize tiers ad" width={540} height={540} className="w-full h-auto block" />
                    </div>
                  </div>
                </div>
                <style>{`
                  @keyframes float1 {
                    0%, 100% { transform: rotate(-2deg) translateY(0px); }
                    50% { transform: rotate(-2deg) translateY(-10px); }
                  }
                  @keyframes float2 {
                    0%, 100% { transform: rotate(2deg) translateY(-5px); }
                    50% { transform: rotate(2deg) translateY(5px); }
                  }
                `}</style>
              </AnimatedSection>

              <AnimatedSection>
                <p className="section-eyebrow text-beast-pink mb-2">The Idea</p>
                <h2 className="font-display text-3xl font-bold text-beast-black mb-6">Williamize Your Food. And Tell Us What That Means to You.</h2>
                <div className="space-y-6">
                  {[
                    { step: "1", label: "The Concept", detail: "\"Williamize Your Food!\" invited participants to submit their favorite homemade back-to-school food or snack for a chance to have Williams create and name a recipe after them, permanently featured on the Williams website. This mechanic was inherently personal, shareable, and promised something meaningful beyond gift cards: your recipe, your name, on a nationally distributed brand's website forever." },
                    { step: "2", label: "The Prize Structure", detail: "Tiered prizes made the sweepstakes feel premium on a lean budget. 1st: $500 Walmart gift card + back-to-school kit + Williams gift box. 2nd: $200 Walmart gift card + kit + gift box. 3rd: $100 Walmart gift card + kit + gift box. Plus: the top 3 winners' submitted food ideas were developed into real \"Williamized\" recipes, named after the winners and featured on Williams' website and social media." },
                    { step: "3", label: "Entry Mechanic & Data Capture", detail: "Landing page at bringhomethew.com captured name, email, ZIP code, and their favorite food to \"Williamize.\" Every entry built the first-party database. ZIP code data mapped consumer density geographically: intelligence Williams could use for retail expansion planning, targeted email follow-up by region, and future campaign geo-targeting." },
                    { step: "4", label: "Paid Social Strategy", detail: "Beast ran Facebook as the primary channel with Instagram secondary, targeting Williams' core demographic (women 35 to 65). The $4,000 budget was deployed across the full 31-day campaign with real-time optimization. Mobile delivery drove the bulk of performance: 93.6% of paid reach and 94.2% of paid link clicks came from mobile users." },
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
                <div className="mt-6 bg-white rounded-xl p-5 border border-gray-100">
                  <p className="font-display font-bold text-beast-black text-sm mb-3">Winners</p>
                  <div className="space-y-2">
                    {[
                      { place: "1st", name: "Alisha W., Minnesota", item: "Graham Crackers" },
                      { place: "2nd", name: "Maritza G., Oklahoma", item: "Enchiladas" },
                      { place: "3rd", name: "Leticia M., Georgia", item: "Sandwich & Chex Mix" },
                    ].map((w) => (
                      <div key={w.place} className="flex items-center gap-3 text-sm">
                        <span className="font-display font-bold text-beast-pink w-8">{w.place}</span>
                        <span className="text-gray-700 font-medium">{w.name}</span>
                        <span className="text-gray-400 mx-1">·</span>
                        <span className="text-gray-500 italic">{w.item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Mobile Story Ads */}
              <AnimatedSection>
                <p className="section-eyebrow text-beast-pink mb-2">Mobile Creative</p>
                <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Built for the Scroll. Made for Mobile.</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  93.6% of paid reach came from mobile placements. Beast built story-format ads that met Williams fans in the feed with bold, eye-catching creative that made the sweepstakes impossible to scroll past.
                </p>
                <div className="flex gap-10 justify-center">
                  <div className="w-[30%] max-w-[180px] [transform:rotate(-3deg)] hover:[transform:rotate(0deg)_scale(1.03)] transition-transform duration-300">
                    <div className="rounded-2xl overflow-hidden shadow-[0px_5px_15px_0px_rgba(0,0,0,0.3)]">
                      <Image src="/assets/williams-bts-story1.jpg" alt="Williams BTS mobile story: Williamize Your Food notebook" width={540} height={960} className="w-full h-auto block" />
                    </div>
                  </div>
                  <div className="w-[30%] max-w-[180px] [transform:rotate(1deg)] hover:[transform:rotate(0deg)_scale(1.03)] transition-transform duration-300">
                    <div className="rounded-2xl overflow-hidden shadow-[0px_5px_15px_0px_rgba(0,0,0,0.3)]">
                      <Image src="/assets/williams-bts-story2.jpg" alt="Williams BTS mobile story: Blue school supplies" width={540} height={960} className="w-full h-auto block" />
                    </div>
                  </div>
                  <div className="w-[30%] max-w-[180px] [transform:rotate(3deg)] hover:[transform:rotate(0deg)_scale(1.03)] transition-transform duration-300">
                    <div className="rounded-2xl overflow-hidden shadow-[0px_5px_15px_0px_rgba(0,0,0,0.3)]">
                      <Image src="/assets/williams-bts-story3.jpg" alt="Williams BTS mobile story: Chalkboard lunchbox" width={540} height={960} className="w-full h-auto block" />
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <p className="section-eyebrow text-beast-pink mb-2">The Results</p>
                <h2 className="font-display text-3xl font-bold text-beast-black mb-4">$4,000. 287,896 People. 22,043 Entries.</h2>
                <div className="overflow-hidden rounded-xl border border-gray-100 mb-6">
                  <table className="w-full text-sm">
<caption className="sr-only">Williams BTS Campaign Results</caption>
                    <thead>
                      <tr className="bg-beast-black">
                        <th scope="col" className="text-left px-4 py-3 font-display font-bold text-gray-400 text-xs uppercase tracking-wide">Metric</th>
                        <th scope="col" className="text-right px-4 py-3 font-display font-bold text-beast-yellow text-xs uppercase tracking-wide">Result</th>
                        <th scope="col" className="text-right px-4 py-3 font-display font-bold text-gray-400 text-xs uppercase tracking-wide">vs Benchmark</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { metric: "Total Entries", result: "22,043", benchmark: "2.2x over 10,000 goal" },
                        { metric: "CTR", result: "3.89%", benchmark: "4.4x industry avg" },
                        { metric: "CPC", result: "$0.18", benchmark: "36% lower than avg" },
                        { metric: "Paid Reach", result: "287,896", benchmark: "—" },
                        { metric: "Paid Impressions", result: "567,243", benchmark: "—" },
                        { metric: "Paid Link Clicks", result: "22,065", benchmark: "—" },
                        { metric: "New FB Page Likes", result: "268", benchmark: "—" },
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
                <div className="bg-near-black rounded-xl p-5">
                  <p className="font-display font-bold text-beast-pink text-xs uppercase tracking-widest mb-2">What Happened Next</p>
                  <p className="text-gray-300 text-sm leading-relaxed">The data captured in this campaign (geographic distribution, demographic profile, engagement behavior) fed directly into the strategy for the <strong className="text-white">Williams All-Stars March Madness 2022</strong> campaign, which generated another 13,660 entries. Each campaign built on the last. Each database grew.</p>
                </div>
              </AnimatedSection>

            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <AnimatedSection>
                <div className="bg-white rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-display font-bold text-sm uppercase tracking-widest text-beast-pink mb-5">Campaign Overview</h3>
                  {[
                    { label: "Client", value: "Williams Foods" },
                    { label: "Campaign", value: "Williamize Your Food (BTS)" },
                    { label: "Dates", value: "Aug 30 to Sep 30, 2021" },
                    { label: "Duration", value: "31 days" },
                    { label: "Ad Budget", value: "$4,000" },
                    { label: "Platforms", value: "Facebook, Instagram" },
                    { label: "Services", value: "Strategy, Landing Page, Paid Social, Prize Fulfillment" },
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
                    { metric: "CTR", beast: "3.89%", industry: "0.89%", lift: "4.4x" },
                    { metric: "CPC", beast: "$0.18", industry: "$0.28", lift: "36% lower" },
                    { metric: "Entries", beast: "22,043", industry: "10,000 goal", lift: "2.2x" },
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

      <RelatedCaseStudies related={["williams-allstars", "sun-bird", "williams-bowl"]} />

      <section className="bg-beast-black py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-white mb-4">Double Your Entry Goal. On Half the Budget.</h2>
            <p className="text-gray-400 mb-8">That&apos;s not a pitch. That&apos;s what happened. Let&apos;s talk about what Beast&apos;s proven sweepstakes playbook can do for your brand.</p>
            <IconButton href="https://calendar.app.google/9q1mcYgEdXNyjK8G6" icon="chart" target="_blank" rel="noopener noreferrer">See Where You Stand in AI Search</IconButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
