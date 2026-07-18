import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import RelatedCaseStudies from "@/components/ui/RelatedCaseStudies";
import IconButton from "@/components/ui/IconButton";
import StatCounter from "@/components/ui/StatCounter";

export const metadata: Metadata = {
  alternates: { canonical: "https://beastcreativeagency.com/work/pioneer" },
  title: "Pioneer Brand ROAS Campaign | Paid Media & Digital Marketing | Beast Creative",
  description:
    "Beast Creative Agency delivered ROAS-driven paid media campaigns for Pioneer, building audience, driving conversions, and generating measurable return on ad spend through strategic Facebook and Instagram advertising.",
};

export default function PioneerPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-beast-black pt-28 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-near-black to-beast-black" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection>
            <div className="flex flex-wrap gap-2 mb-4">
              {["Paid Media", "Performance Marketing", "Facebook Ads", "Instagram Ads", "ROAS"].map((tag) => (
                <span key={tag} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-beast-pink/15 text-beast-pink border border-beast-pink/20">{tag}</span>
              ))}
            </div>
            <p className="section-eyebrow text-beast-yellow mb-3">Case Study: Pioneer · Ongoing</p>
            <h1 className="text-display-hero font-display font-extrabold text-white max-w-4xl mb-6 leading-tight">
              Built to Perform.{" "}
              <span className="text-beast-pink">Optimized to Convert.</span>
            </h1>
            <p className="text-body-lead text-gray-300 max-w-2xl">
              Performance marketing for Pioneer: paid social campaigns built around measurable return on ad spend, not vanity metrics.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* BEAST BENCHMARK STATS */}
      <section className="bg-beast-yellow py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCounter value={7.03} suffix="%" decimals={2} label="Peak CTR" sublabel="vs 0.89% industry avg" valueClassName="text-beast-black" labelClassName="text-beast-black/60" sublabelClassName="text-beast-black/40" />
            <StatCounter value={0.12} prefix="$" decimals={2} label="Lowest CPC" sublabel="vs $0.28 industry avg" valueClassName="text-beast-black" labelClassName="text-beast-black/60" sublabelClassName="text-beast-black/40" />
            <StatCounter value={3.6} suffix="x" decimals={1} label="Over Goal" sublabel="Sun-Bird campaign" valueClassName="text-beast-black" labelClassName="text-beast-black/60" sublabelClassName="text-beast-black/40" />
            <StatCounter value={9.5} suffix="%" decimals={1} label="Email CTR" sublabel="vs 0.82% industry avg" valueClassName="text-beast-black" labelClassName="text-beast-black/60" sublabelClassName="text-beast-black/40" />
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
                <p className="section-eyebrow text-beast-pink mb-2">The Challenge</p>
                <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Turn Every Dollar Into a Trackable Return.</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Pioneer came to Beast with a performance-first mandate: paid social advertising that could be measured, optimized, and directly connected to business outcomes. Not impressions. Not reach. Not brand awareness in the abstract, but actual, attributable return on ad spend.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Beast&apos;s performance marketing practice is built around exactly this. The team doesn&apos;t run ads and report on clicks. They build full-funnel tracking systems that connect ad impressions to landing page visits, to form completions, to purchases, to revenue. Every optimization decision is made on the basis of what&apos;s actually driving return, not what looks good in a dashboard.
                </p>
              </AnimatedSection>

              {/* The Approach */}
              <AnimatedSection>
                <p className="section-eyebrow text-beast-pink mb-2">How Beast Works</p>
                <h2 className="font-display text-3xl font-bold text-beast-black mb-6">Data In. Revenue Out.</h2>
                <div className="space-y-6">
                  {[
                    {
                      step: "1",
                      label: "Audience Architecture",
                      detail: "Before a single ad runs, Beast builds the audience strategy. Lookalike audiences from existing buyer data, interest-based targeting layered with behavioral signals, retargeting pools for site visitors and video viewers, and exclusion lists to make sure budget isn't wasted on people who already converted.",
                    },
                    {
                      step: "2",
                      label: "Creative Testing",
                      detail: "Beast runs a minimum of 3 to 5 creative variations per campaign at launch: different headlines, different visual treatments, different CTAs. The algorithm identifies the winner fast. Budget shifts toward what's converting. Underperforming creative gets cut. This iterative process is what keeps CPC low and CTR high over the life of a campaign.",
                    },
                    {
                      step: "3",
                      label: "Full-Funnel Conversion Tracking",
                      detail: "Every stage of the funnel is instrumented: ad impression → landing page → conversion event. Beast sets up pixel tracking, conversion APIs, and UTM parameters to ensure reporting is accurate and optimization signals are clean. You see actual revenue impact, not just the ad platform's self-reported metrics.",
                    },
                    {
                      step: "4",
                      label: "Real-Time Optimization",
                      detail: "Campaigns are monitored daily. Budget shifts toward performing audiences and creative in real time. Targeting is refined as campaign data accumulates. Beast doesn't set campaigns live and check in weekly. The team is in the accounts every day making the micro-adjustments that compound into dramatically better performance.",
                    },
                    {
                      step: "5",
                      label: "Transparent Reporting",
                      detail: "Pioneer gets a clear monthly performance report: what was spent, what it generated, what's working, what isn't, and what changes are being made. No vanity metrics. No confusing dashboards. Just the numbers that matter to the business.",
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

              {/* Benchmarks */}
              <AnimatedSection>
                <p className="section-eyebrow text-beast-pink mb-2">Proven Performance</p>
                <h2 className="font-display text-3xl font-bold text-beast-black mb-4">The Benchmarks Behind Beast&apos;s Method.</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Beast&apos;s paid social campaigns across comparable clients have consistently achieved the following, run by the same team using the same methodology deployed for Pioneer.
                </p>
                <div className="overflow-hidden rounded-xl border border-gray-100">
                  <table className="w-full text-sm">
<caption className="sr-only">Pioneer Paid Media Results</caption>
                    <thead>
                      <tr className="bg-beast-black">
                        <th scope="col" className="text-left px-4 py-3 font-display font-bold text-gray-400 text-xs uppercase tracking-wide">Metric</th>
                        <th scope="col" className="text-right px-4 py-3 font-display font-bold text-beast-yellow text-xs uppercase tracking-wide">Beast Average</th>
                        <th scope="col" className="text-right px-4 py-3 font-display font-bold text-gray-400 text-xs uppercase tracking-wide">Industry Avg</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { metric: "Click-Through Rate (CTR)", beast: "3.5% to 7.03%", industry: "0.89%" },
                        { metric: "Cost Per Click (CPC)", beast: "$0.12 to $0.18", industry: "$0.28" },
                        { metric: "Campaign Goal Achievement", beast: "2.2x to 3.6x over goal", industry: "1x (goal)" },
                        { metric: "Email Open Rate", beast: "29.1%", industry: "24%" },
                        { metric: "Email Click Rate", beast: "9.5%", industry: "0.82%" },
                      ].map((row, i) => (
                        <tr key={row.metric} className={i % 2 === 0 ? "bg-white" : "bg-section-offwhite"}>
                          <td className="px-4 py-3 text-gray-700 font-medium">{row.metric}</td>
                          <td className="px-4 py-3 text-right font-display font-bold text-beast-black">{row.beast}</td>
                          <td className="px-4 py-3 text-right text-gray-400">{row.industry}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-400 mt-3 italic">These benchmarks come from real campaigns run by the same team: Williams Foods and Sun-Bird Seasonings.</p>
              </AnimatedSection>

            </div>

            {/* SIDEBAR — 1/3 */}
            <div className="space-y-6 order-1 lg:order-2">
              <AnimatedSection>
                <div className="bg-white rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-display font-bold text-sm uppercase tracking-widest text-beast-pink mb-5">Campaign Overview</h3>
                  {[
                    { label: "Client", value: "Pioneer" },
                    { label: "Industry", value: "Consumer Brand" },
                    { label: "Platforms", value: "Facebook, Instagram" },
                    { label: "Services", value: "Paid Social, Audience Strategy, Creative Testing, Performance Reporting" },
                    { label: "Focus", value: "Return on Ad Spend (ROAS)" },
                    { label: "Status", value: "Active Client" },
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
                  <h3 className="font-display font-bold text-sm uppercase tracking-widest text-beast-pink mb-4">What Beast Tracks</h3>
                  <div className="space-y-3">
                    {[
                      "Ad spend vs. revenue generated",
                      "Cost per click (CPC)",
                      "Click-through rate (CTR)",
                      "Cost per acquisition (CPA)",
                      "Return on ad spend (ROAS)",
                      "Audience performance by segment",
                      "Creative performance by variant",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-beast-pink shrink-0" />
                        <span className="text-sm text-gray-400">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <div className="bg-beast-pink/10 border border-beast-pink/20 rounded-2xl p-6">
                  <p className="font-display font-bold text-beast-pink text-xs uppercase tracking-widest mb-2">Case Study In Progress</p>
                  <p className="text-gray-700 text-sm leading-relaxed">Full campaign metrics and results will be published when available. Contact Beast for details on Pioneer&apos;s campaign performance.</p>
                  <Link href="/contact" className="inline-flex mt-4 text-sm font-bold text-beast-pink hover:text-beast-black transition-colors">
                    Request Details →
                  </Link>
                </div>
              </AnimatedSection>
            </div>

          </div>
        </div>
      </section>

      <RelatedCaseStudies related={["sun-bird", "williams-bts", "sweet-sensi"]} />

      <section className="bg-beast-black py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-white mb-4">Want Paid Social That Pays Back?</h2>
            <p className="text-gray-400 mb-8">Beast builds performance campaigns around ROAS, not vanity metrics. Let&apos;s look at your numbers and show you what&apos;s possible.</p>
            <IconButton href="/growth-assessment" icon="calendar">Start Your Growth Assessment</IconButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
