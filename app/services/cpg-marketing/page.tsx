import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { faqSchema, serviceSchema } from "@/lib/schema";
import FaqAccordion from "@/components/ui/FaqAccordion";
import IconButton from "@/components/ui/IconButton";

export const metadata: Metadata = {
  title: "CPG Marketing Agency | Sweepstakes & Consumer Data | Beast Creative",
  description:
    "Specialized CPG marketing: sweepstakes campaigns, first-party data collection, retail readiness decks, and AI-powered content pipelines. Working with brands nationwide.",
};

const faqs = [
  { question: "What is CPG marketing and how is it different?", answer: "CPG marketing focuses on building consumer databases, driving retail pull-through, and creating the proof that retail buyers require. Unlike general digital marketing, CPG campaigns are designed to generate first-party data and retail-readiness evidence." },
  { question: "How do you build first-party consumer data?", answer: "Primarily through contest and sweepstakes mechanics that capture consumer name, email, and zip code. We've collected 36,581 emails on a $6,000 budget for Sun-Bird Seasonings." },
  { question: "How much does a sweepstakes campaign cost?", answer: "Campaign production starts at $2,500 to $5,000. Ad spend is client-direct to platforms, and we recommend $3,000 to $10,000 for meaningful data volume." },
  { question: "How long before we see results?", answer: "Sweepstakes campaigns deliver data in real-time. Our Williams BTS campaign hit 22,043 entries in the campaign window on $4,000." },
  { question: "Do you work with brands across the country?", answer: "Absolutely. We work with brands nationally, since all our digital services are fully location-agnostic. We've run campaigns for brands across the US." },
];

export default function CpgMarketingServicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: "CPG Marketing", description: "AI-powered CPG marketing campaigns, sweepstakes, first-party data collection, and retail readiness.", url: "https://beastcreativeagency.com/services/cpg-marketing" })) }} />

      <section className="relative bg-beast-black pt-28 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-near-black to-beast-black" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection>
            <p className="section-eyebrow text-beast-pink mb-4">Service: CPG Marketing</p>
            <h1 className="text-display-hero font-display font-extrabold text-white max-w-4xl mb-6 leading-tight">
              CPG Marketing Services That Build Brands,{" "}
              <span className="text-beast-pink">Databases, and Retail Proof.</span>
            </h1>
            <p className="text-body-lead text-gray-300 max-w-2xl">
              From emerging founders to multi-brand holding companies, Beast&apos;s CPG playbook has generated over 72,000 campaign entries for food and beverage brands at a fraction of industry cost.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-section-offwhite py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection>
              <h2 className="font-display text-3xl font-bold text-beast-black mb-6">What We Deliver</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Most CPG brands run digital advertising to &quot;build awareness.&quot; Beast runs campaigns that build first-party consumer databases, generate pull-through data for retail buyers, and create the kind of measurable engagement that turns a regional brand into a national one.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our CPG campaigns have averaged <strong className="text-beast-black">7.03% CTR</strong> against an industry benchmark of 0.89%. We&apos;ve achieved <strong className="text-beast-black">$0.12 CPC</strong> against an industry average of $0.28. And we&apos;ve hit 2.2x to 3.6x over stated entry goals on every campaign we&apos;ve run.
              </p>
              <p className="text-gray-600 leading-relaxed font-medium">
                These aren&apos;t projections. They&apos;re from named brands you can verify.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="font-display text-3xl font-bold text-beast-black mb-6">What&apos;s Included</h2>
              <ul className="space-y-4">
                {[
                  "Sweepstakes campaign strategy + mechanics",
                  "Landing page design and development",
                  "Ad creative and copywriting",
                  "Paid social management (Facebook, Instagram, TikTok)",
                  "Real-time campaign optimization",
                  "Consumer data capture and segmentation",
                  "Geographic mapping of consumer database",
                  "Monthly performance reporting",
                  "Retail readiness deck (Growth/Scale tiers)",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm">
                    <svg className="w-4 h-4 text-beast-pink shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="bg-beast-black py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 text-center">
          <AnimatedSection>
            <p className="section-eyebrow text-beast-pink mb-3">Case Study</p>
            <h2 className="font-display text-3xl font-bold text-white mb-4">
              Sun-Bird: 36,581 Entries. $6,000 Budget. 7.03% CTR.
            </h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              National Walmart rollout campaign. Nearly 8x industry CTR benchmark. Every entry = a consumer email + zip code for retail proof.
            </p>
            <IconButton href="/work/sun-bird" icon="eye">Read the Full Case Study</IconButton>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-section-offwhite py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-20">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-beast-black mb-8 text-center">Frequently Asked Questions</h2>
            <div className="bg-white rounded-2xl border border-gray-100 px-6">
              <FaqAccordion faqs={faqs} />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-beast-black py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-white mb-4">Ready to Build Your Consumer Database?</h2>
            <IconButton href="https://calendar.app.google/9q1mcYgEdXNyjK8G6" icon="calendar" target="_blank" rel="noopener noreferrer">See Where You Stand in AI Search</IconButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
