import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { faqSchema } from "@/lib/schema";
import FaqAccordion from "@/components/ui/FaqAccordion";
import IconButton from "@/components/ui/IconButton";

export const metadata: Metadata = {
  alternates: { canonical: "https://beastcreativeagency.com/blog/cpg-sweepstakes-first-party-data-playbook" },
  title: "The CPG Sweepstakes Playbook: First-Party Data Strategy",
  description:
    "How to design sweepstakes campaigns that build consumer databases retail buyers trust. Includes the exact framework behind 36,581 entries on a $6,000 budget.",
};

const faqs = [
  {
    question: "What is a CPG sweepstakes campaign?",
    answer: "A CPG sweepstakes campaign is a promotional mechanic that collects consumer data (name, email, zip code) in exchange for a chance to win a prize. It's the most cost-efficient method for CPG brands to build first-party consumer databases at scale.",
  },
  {
    question: "How much does a CPG sweepstakes campaign cost?",
    answer: "Campaign production at Beast typically starts at $2,500 to $5,000. Ad spend is client-direct to platforms, and we recommend $3,000 to $10,000 for meaningful data volume. Sun-Bird's 36,581-entry campaign ran on $6,000 total including production.",
  },
  {
    question: "How do retail buyers use sweepstakes data?",
    answer: "Retail buyers at Walmart, Target, Kroger, and other national chains use sweepstakes data as proof of consumer demand. A brand showing up with 36,000 verified consumer email addresses in key DMAs is showing a buyer that real people already want the product on shelves.",
  },
  {
    question: "What makes a sweepstakes entry rate high?",
    answer: "The prize relevance to the target audience, the clarity and simplicity of the entry mechanic, the quality of the ad creative, and the precision of the paid social targeting. Beast's Sun-Bird campaign achieved a 7.03% CTR (vs. 0.89% industry average) by combining all four.",
  },
  {
    question: "Can sweepstakes campaigns work on a small budget?",
    answer: "Yes. Beast's Williams Bowl NFL sweepstakes generated 6,020 entries on $1,500 in ad spend, at $0.16 CPC against a $0.28 industry average. The key is precise audience targeting and a compelling creative hook, not budget size.",
  },
];

export default function SweepstakesPlaybookPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "The CPG Sweepstakes Playbook: First-Party Data Strategy",
            description: "How to design sweepstakes campaigns that build consumer databases retail buyers trust. Includes the exact framework behind 36,581 entries on a $6,000 budget.",
            datePublished: "2026-03-14",
            author: { "@type": "Organization", name: "Beast Creative Agency", url: "https://beastcreativeagency.com" },
            publisher: { "@type": "Organization", name: "Beast Creative Agency", url: "https://beastcreativeagency.com" },
          }),
        }}
      />

      {/* HERO */}
      <section className="relative bg-beast-black pt-28 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-near-black to-beast-black" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-20">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-beast-pink/10 text-beast-pink border border-beast-pink/20">
                CPG Marketing
              </span>
              <span className="text-xs text-[#888888]">March 14, 2026 · 8 min read</span>
            </div>
            <h1 className="text-display-hero font-display font-extrabold text-white mb-6 leading-tight">
              The CPG Sweepstakes Playbook:{" "}
              <span className="text-beast-pink">36,581 Entries on $6,000</span>
            </h1>
            <p className="text-body-lead text-[#C8C8C8] max-w-2xl">
              We&apos;ve run sweepstakes campaigns that generated 36,581 entries on $6,000. Here&apos;s the exact framework, from mechanic design to retail pitch.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section className="bg-beast-white py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-20 space-y-8">
          <AnimatedSection>
            <div className="prose prose-lg max-w-none">

              <h2 className="font-display text-3xl font-bold text-beast-black mt-0 mb-4">Why CPG Brands Run Sweepstakes</h2>
              <p className="text-[#4A4A4A] leading-relaxed mb-4">
                The retail pitch problem is a real one: a buyer at Walmart or Target wants proof that consumers actually want your product before they give you shelf space. Most emerging CPG brands can&apos;t provide that proof. They have social followers, maybe some Amazon reviews, but nothing that translates to retail demand signals.
              </p>
              <p className="text-[#4A4A4A] leading-relaxed mb-8">
                A well-executed sweepstakes campaign solves this directly. You walk into the buyer meeting with 36,000 verified consumer email addresses, broken down by DMA, with open rates and engagement data attached. That&apos;s not a pitch. That&apos;s proof.
              </p>

              {/* Stats callout */}
              <div className="bg-beast-black rounded-2xl p-6 mb-8 grid grid-cols-3 gap-4">
                {[
                  { value: "36,581", label: "Consumer emails", sub: "Sun-Bird Seasonings, $6K" },
                  { value: "7.03%", label: "CTR achieved", sub: "vs 0.89% avg" },
                  { value: "$0.12", label: "Cost per click", sub: "vs $0.28 avg" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="font-display text-2xl font-extrabold text-beast-yellow">{s.value}</div>
                    <div className="text-xs text-white font-semibold mt-1">{s.label}</div>
                    <div className="text-xs text-[#717171] mt-0.5">{s.sub}</div>
                  </div>
                ))}
              </div>

              <h2 className="font-display text-3xl font-bold text-beast-black mb-4">The 4-Part Framework</h2>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2">1. Prize Selection: Relevant, Not Just Expensive</h3>
              <p className="text-[#4A4A4A] leading-relaxed mb-4">
                The most common sweepstakes mistake is picking a generic prize like cash, a TV, or an Amazon gift card. These attract entrants who have zero interest in your brand, polluting your consumer database with noise.
              </p>
              <p className="text-[#4A4A4A] leading-relaxed mb-6">
                Beast&apos;s Sun-Bird &quot;Bird Herd&quot; campaign prize was designed around Sun-Bird&apos;s Asian-inspired seasoning products: a fully stocked kitchen bundle. Every entrant was someone who cared about cooking Asian food at home. Every email address went into a database of verified, interested consumers, exactly what the Walmart pitch required.
              </p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2">2. Entry Mechanic: Friction Is Your Enemy</h3>
              <p className="text-[#4A4A4A] leading-relaxed mb-6">
                The entry form should capture name, email, and zip code, and nothing else. Each additional field reduces your entry rate by 10 to 20%. Zip code is worth keeping because it allows you to segment your consumer database by DMA, which is directly relevant to retail pitch conversations about regional distribution.
              </p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2">3. Paid Social Strategy: Precision Over Volume</h3>
              <p className="text-[#4A4A4A] leading-relaxed mb-4">
                Beast runs sweepstakes campaigns primarily on Meta (Facebook/Instagram) with tight audience targeting: interest-based audiences layered with behavioral signals relevant to the product category. The goal is not impressions. The goal is qualified entry cost.
              </p>
              <p className="text-[#4A4A4A] leading-relaxed mb-6">
                On Sun-Bird&apos;s campaign, we achieved a $0.12 CPC against a $0.28 industry average by optimizing creative for scroll-stop performance and targeting audiences with demonstrated cooking interest. On a $3,000 ad spend, that difference generates roughly 15,000 additional clicks.
              </p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2">4. Post-Campaign Data Strategy</h3>
              <p className="text-[#4A4A4A] leading-relaxed mb-4">
                The entry list is not the product. The product is what you do with it. Beast delivers post-campaign analysis that includes:
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "Consumer database segmented by DMA and geographic distribution",
                  "Email welcome sequence with brand story and product education",
                  "Engagement metrics (open rate, click rate) for the retail pitch",
                  "DMA heat map showing where consumer interest is concentrated",
                  "Retail readiness deck incorporating the data",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm">
                    <span className="text-beast-pink font-bold shrink-0">→</span>
                    <span className="text-[#4A4A4A]">{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Results Across Beast&apos;s Sweepstakes Portfolio</h2>
              <div className="overflow-hidden rounded-xl border border-light-border mb-8">
                <table className="w-full text-sm">
<caption className="sr-only">CPG Sweepstakes Campaign Comparison</caption>
                  <thead>
                    <tr className="bg-section-offwhite border-b border-light-border">
                      <th scope="col" className="text-left px-4 py-3 font-display font-bold text-beast-black text-xs uppercase tracking-wide">Campaign</th>
                      <th scope="col" className="text-right px-4 py-3 font-display font-bold text-beast-black text-xs uppercase tracking-wide">Entries</th>
                      <th scope="col" className="text-right px-4 py-3 font-display font-bold text-beast-black text-xs uppercase tracking-wide">Budget</th>
                      <th scope="col" className="text-right px-4 py-3 font-display font-bold text-beast-black text-xs uppercase tracking-wide">CTR</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { campaign: "Sun-Bird Bird Herd", entries: "36,581", budget: "$6K", ctr: "7.03%" },
                      { campaign: "Williams BTS", entries: "22,043", budget: "$4K", ctr: "3.89%" },
                      { campaign: "Williams All-Stars", entries: "13,660", budget: "—", ctr: "—" },
                      { campaign: "Williams Bowl", entries: "6,020", budget: "$1.5K", ctr: "—" },
                    ].map((row, i) => (
                      <tr key={row.campaign} className={i % 2 === 0 ? "bg-beast-white" : "bg-section-offwhite"}>
                        <td className="px-4 py-3 text-[#4A4A4A] font-medium">{row.campaign}</td>
                        <td className="px-4 py-3 text-right font-display font-bold text-beast-black">{row.entries}</td>
                        <td className="px-4 py-3 text-right text-[#717171]">{row.budget}</td>
                        <td className="px-4 py-3 text-right text-beast-pink font-semibold">{row.ctr}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-beast-black rounded-2xl p-8 mb-8">
                <p className="font-display font-bold text-beast-pink text-xs uppercase tracking-widest mb-3">See the Full Case Study</p>
                <p className="text-[#C8C8C8] text-sm leading-relaxed mb-4">
                  The Sun-Bird Bird Herd campaign was Beast&apos;s flagship CPG sweepstakes, built to support Sun-Bird&apos;s national Walmart rollout announcement. 36,581 consumer emails on $6,000. 7.03% CTR. $0.12 CPC.
                </p>
                <IconButton href="/work/sun-bird" icon="eye">
                  Read the Sun-Bird Case Study </IconButton>
              </div>

            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-section-offwhite py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-20">
          <AnimatedSection>
            <p className="text-beast-pink text-xs font-bold uppercase tracking-widest mb-3 text-center">FAQ</p>
            <h2 className="font-display text-3xl font-bold text-beast-black mb-10 text-center">Common Questions</h2>
            <FaqAccordion faqs={faqs} />
          </AnimatedSection>
        </div>
      </section>

      {/* RELATED POSTS */}
      <section className="bg-section-light py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection>
            <h2 className="font-display text-2xl font-bold text-beast-black mb-8">More From the Blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a href="/blog/cpg-ad-creative-that-converts-testing-iteration-and-best-practices" className="group block bg-beast-white rounded-2xl border border-light-border p-6 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-light-surface text-[#717171]">CPG Marketing</span>
                  <span className="text-xs text-[#717171]">8 min read</span>
                </div>
                <h3 className="font-display text-base font-bold text-beast-black mb-2 leading-snug group-hover:text-beast-pink transition-colors">CPG Ad Creative That Converts: Testing, Iteration, and Best Practices</h3>
                <p className="text-[#717171] text-sm leading-relaxed mb-4">Learn how to build a systematic CPG creative testing framework, from defining creative buckets to scaling winning eleme</p>
                <div className="flex items-center justify-between pt-3 border-t border-light-border">
                  <span className="text-xs text-[#717171]">December 15, 2025</span>
                  <span className="text-beast-pink text-sm font-semibold">Read →</span>
                </div>
              </a>
              <a href="/blog/influencer-marketing-for-cpg-products-finding-and-working-with-content-creators" className="group block bg-beast-white rounded-2xl border border-light-border p-6 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-light-surface text-[#717171]">CPG Marketing</span>
                  <span className="text-xs text-[#717171]">10 min read</span>
                </div>
                <h3 className="font-display text-base font-bold text-beast-black mb-2 leading-snug group-hover:text-beast-pink transition-colors">Influencer Marketing for CPG Products: Finding and Working With Content Creators</h3>
                <p className="text-[#717171] text-sm leading-relaxed mb-4">Nearly 92% of consumers trust recommendations from people they don&apos;t personally know over traditional advertising, a stat</p>
                <div className="flex items-center justify-between pt-3 border-t border-light-border">
                  <span className="text-xs text-[#717171]">February 16, 2026</span>
                  <span className="text-beast-pink text-sm font-semibold">Read →</span>
                </div>
              </a>
              <a href="/blog/social-media-marketing-for-cpg-brands-platform-strategies-that-drive-sales" className="group block bg-beast-white rounded-2xl border border-light-border p-6 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-light-surface text-[#717171]">CPG Marketing</span>
                  <span className="text-xs text-[#717171]">10 min read</span>
                </div>
                <h3 className="font-display text-base font-bold text-beast-black mb-2 leading-snug group-hover:text-beast-pink transition-colors">Social Media Marketing for CPG Brands: Platform Strategies That Drive Sales</h3>
                <p className="text-[#717171] text-sm leading-relaxed mb-4">CPG brands face a unique challenge: selling products that consumers often buy on autopilot through platforms designed fo</p>
                <div className="flex items-center justify-between pt-3 border-t border-light-border">
                  <span className="text-xs text-[#717171]">February 14, 2026</span>
                  <span className="text-beast-pink text-sm font-semibold">Read →</span>
                </div>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
      {/* CTA */}
      <section className="bg-beast-black py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-white mb-4">
              Ready to Build Your Consumer Database?
            </h2>
            <p className="text-[#C8C8C8] mb-8">
              Beast designs sweepstakes campaigns that generate first-party consumer data at scale, built to support your retail pitch.
            </p>
            <IconButton href="/growth-assessment" icon="calendar">Start Your Growth Assessment</IconButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
