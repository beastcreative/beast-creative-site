import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { faqSchema } from "@/lib/schema";
import FaqAccordion from "@/components/ui/FaqAccordion";
import IconButton from "@/components/ui/IconButton";

export const metadata: Metadata = {
  alternates: { canonical: "https://beastcreativeagency.com/blog/amazon-advertising-for-cpg-brands-ppc-strategies-to-win-the-buy-box" },
  title: "Amazon Advertising for CPG Brands: PPC Strategies to Win the Buy Box",
  description:
    "The Buy Box drives 82% of Amazon sales. Learn how CPG brands can use Sponsored Products, Sponsored Brands, and strategic PPC to win and maintain it.",
};

const faqs = [
  {
    question: "What is the Amazon Buy Box and why does it matter for CPG?",
    answer: "The Buy Box is the primary 'Add to Cart' button on an Amazon product page, and it drives 82% of all marketplace sales. When multiple sellers offer the same product, Amazon's algorithm determines who wins the Buy Box based on price competitiveness, fulfillment method, seller performance metrics, inventory levels, and customer satisfaction scores.",
  },
  {
    question: "Does PPC advertising affect Buy Box eligibility?",
    answer: "Yes, PPC campaigns influence several Buy Box factors through a compound effect. Consistent sales velocity from PPC improves your seller metrics. Better conversion rates signal product relevance. Higher review volume from increased sales strengthens your account health. The impact goes well beyond simple ad visibility.",
  },
  {
    question: "What's the recommended CPG Amazon PPC campaign structure?",
    answer: "Start with three tiers: Tier 1 (Defensive Campaigns) targeting brand and product-specific keywords to maintain Buy Box eligibility through consistent sales velocity. Tier 2 (Category Expansion) for broader category terms. Tier 3 (Competitor Targeting) when you have clear value propositions that justify the higher CPCs.",
  },
  {
    question: "How do CPG brands find the right keywords for Amazon PPC?",
    answer: "Go beyond obvious product terms. Look for occasion-based keywords ('back to school snacks,' 'office lunch ideas'), diet and lifestyle keywords ('keto-friendly,' 'plant-based options'), and problem-solving keywords ('quick breakfast solutions,' 'healthy kids snacks'). Tools like Helium 10 and Jungle Scout help identify high-volume terms your competitors may be missing.",
  },
  {
    question: "When should CPG brands use automation vs. manual Amazon PPC control?",
    answer: "Use automation for large catalogs, discovery campaigns, and when building initial conversion history. Maintain manual control for high-stakes branded campaigns, complex seasonality patterns where the algorithm may misread demand shifts, and rapidly changing competitive dynamics where bid timing matters.",
  },
];

export default function AmazonAdvertisingPost() {
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
            headline: "Amazon Advertising for CPG Brands: PPC Strategies to Win the Buy Box",
            description: "The Buy Box drives 82% of Amazon sales. Learn how CPG brands can use Sponsored Products, Sponsored Brands, and strategic PPC to win and maintain it.",
            datePublished: "2025-07-11",
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
                Amazon Ads
              </span>
              <span className="text-xs text-[#888888]">July 11, 2025 · 9 min read</span>
            </div>
            <h1 className="text-display-hero font-display font-extrabold text-white mb-6 leading-tight">
              Amazon Advertising for CPG Brands:{" "}
              <span className="text-beast-pink">PPC Strategies to Win the Buy Box</span>
            </h1>
            <p className="text-body-lead text-[#C8C8C8] max-w-2xl">
              The Buy Box drives 82% of Amazon sales. Winning it isn&apos;t luck. It&apos;s a coordinated PPC and account health strategy. Here&apos;s how to execute it.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section className="bg-beast-white py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-20 space-y-8">
          <AnimatedSection>
            <div className="prose prose-lg max-w-none">

              <div className="rounded-2xl overflow-hidden mb-10" style={{ boxShadow: "0px 5px 15px 0px rgba(0,0,0,0.15)" }}>
                <Image
                  src="/assets/blog/contentcraft-6944e4bf91309-1-1024x585.png"
                  alt="Amazon advertising for CPG brands"
                  width={1024}
                  height={585}
                  className="w-full h-auto"
                />
              </div>

              <h2 className="font-display text-3xl font-bold text-beast-black mt-0 mb-4">Understanding the Buy Box Algorithm</h2>
              <p className="text-[#4A4A4A] leading-relaxed mb-4">
                The Buy Box drives 82% of all Amazon marketplace sales, yet many CPG brands overlook the algorithmic complexity involved. Amazon&apos;s system evaluates multiple factors simultaneously:
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "Price competitiveness (not necessarily the lowest, but competitive within a range)",
                  "Fulfillment method (FBA typically wins over FBM)",
                  "Seller performance metrics: cancellation rate, late shipment rate, order defect rate",
                  "Inventory levels and availability",
                  "Customer satisfaction scores and review volume",
                  "Account health and policy compliance history",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed">
                    <span className="text-beast-pink font-bold shrink-0">→</span> {item}
                  </li>
                ))}
              </ul>
              <p className="text-[#4A4A4A] leading-relaxed mb-8">
                PPC campaigns directly influence several of these factors through a compound effect: consistent sales velocity, higher review volume, and improved conversion rates all feed back into Buy Box eligibility.
              </p>

              <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Strategic PPC Approaches for CPG Brands</h2>
              <h3 className="font-display text-xl font-bold text-beast-black mb-2">Three-Tier Sponsored Products Strategy</h3>
              <ul className="space-y-3 mb-8">
                {[
                  { label: "Tier 1: Defensive Campaigns", detail: "Target brand and product-specific keywords. Maintain Buy Box eligibility through consistent sales velocity on your own terms." },
                  { label: "Tier 2: Category Expansion", detail: "Focus on broader category terms like 'healthy snacks' or 'organic food' to capture new customers exploring your category." },
                  { label: "Tier 3: Competitor Targeting", detail: "Target competitor terms when you have clear, communicable value propositions. Higher CPCs require a convincing differentiator." },
                ].map((item) => (
                  <li key={item.label} className="flex gap-3">
                    <svg className="w-4 h-4 text-beast-pink shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    <span className="text-[#4A4A4A] text-sm leading-relaxed">
                      <strong className="text-beast-black">{item.label}:</strong> {item.detail}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="rounded-2xl overflow-hidden mb-10" style={{ boxShadow: "0px 5px 15px 0px rgba(0,0,0,0.15)" }}>
                <Image
                  src="/assets/blog/contentcraft-6944e4c78eaff-1.png"
                  alt="Amazon keyword research for CPG brands"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                />
              </div>

              <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Advanced Keyword Research for CPG Categories</h2>
              <p className="text-[#4A4A4A] leading-relaxed mb-4">Go beyond basic product terms. Often-overlooked keyword categories that convert well for CPG:</p>
              <ul className="space-y-3 mb-8">
                {[
                  { label: "Occasion-based", detail: "\"back to school snacks,\" \"office lunch ideas,\" \"movie night treats\"" },
                  { label: "Diet and lifestyle", detail: "\"keto-friendly,\" \"plant-based options,\" \"gluten-free alternatives\"" },
                  { label: "Problem-solving", detail: "\"quick breakfast solutions,\" \"healthy kids snacks,\" \"portion-controlled meals\"" },
                ].map((item) => (
                  <li key={item.label} className="flex gap-3">
                    <svg className="w-4 h-4 text-beast-pink shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    <span className="text-[#4A4A4A] text-sm leading-relaxed">
                      <strong className="text-beast-black">{item.label}:</strong> {item.detail}
                    </span>
                  </li>
                ))}
              </ul>

              <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Product Listing Optimization</h2>
              <p className="text-[#4A4A4A] leading-relaxed mb-4">A strong PPC campaign driving traffic to a weak listing is wasted spend. Optimize listings to support your ad performance:</p>
              <ul className="space-y-2 mb-6">
                {[
                  "Title: Brand + Key Benefit + Product Type + Size/Quantity + Key Features",
                  "Main image: clean white background, product at full prominence",
                  "Secondary images: lifestyle shots, ingredient/nutrition focus, size comparison",
                  "Bullet points: lead with benefits, address common objections",
                  "A+ Content: use Brand Registry to add rich content that increases conversion rate",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed">
                    <span className="text-beast-pink font-bold shrink-0">→</span> {item}
                  </li>
                ))}
              </ul>

              <div className="rounded-2xl overflow-hidden mb-10" style={{ boxShadow: "0px 5px 15px 0px rgba(0,0,0,0.15)" }}>
                <Image
                  src="/assets/blog/contentcraft-6944e4d068354-1.png"
                  alt="Amazon seasonal strategy for CPG products"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                />
              </div>

              <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Seasonal Strategy and Inventory Coordination</h2>
              <p className="text-[#4A4A4A] leading-relaxed mb-4">Ramp PPC spend 4 to 6 weeks before seasonal peaks to build momentum and improve organic rankings. Critical warning: running out of stock during a PPC campaign kills Buy Box eligibility. Coordinate inventory planning with campaign calendars, since going out of stock after a strong promotional push can set your rankings back weeks.</p>

              <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Common Mistakes to Avoid</h2>
              <ul className="space-y-2 mb-8">
                {[
                  "Racing to the bottom on price: focus on value differentiation instead",
                  "Ignoring mobile: over 70% of Amazon searches happen on mobile devices",
                  "Neglecting review management: poor reviews directly impact Buy Box eligibility",
                  "Spreading budget across too many campaigns without sufficient data for optimization",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed">
                    <span className="text-beast-pink font-bold shrink-0">→</span> {item}
                  </li>
                ))}
              </ul>

              <div className="bg-beast-black rounded-2xl p-8 mb-8">
                <p className="font-display font-bold text-beast-pink text-xs uppercase tracking-widest mb-3">Beast Creative Agency</p>
                <p className="text-[#C8C8C8] text-sm leading-relaxed mb-4">
                  We manage Amazon advertising for CPG brands at every stage of distribution, from first-time sellers to brands scaling national catalog presence. Our strategies prioritize long-term Buy Box dominance, not just short-term ROAS.
                </p>
                <IconButton href="/cpg" icon="arrow">Learn About Our CPG Marketing</IconButton>
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
              <a href="/blog/ai-content-production-cpg-brands" className="group block bg-beast-white rounded-2xl border border-light-border p-6 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-light-surface text-[#717171]">AI Marketing</span>
                  <span className="text-xs text-[#717171]">5 min read</span>
                </div>
                <h3 className="font-display text-base font-bold text-beast-black mb-2 leading-snug group-hover:text-beast-pink transition-colors">AI Content Production for CPG Brands</h3>
                <p className="text-[#717171] text-sm leading-relaxed mb-4">How CPG brands can create 30x more content without 30x the budget using AI-powered content pipelines. Includes Beast&apos;s a</p>
                <div className="flex items-center justify-between pt-3 border-t border-light-border">
                  <span className="text-xs text-[#717171]">February 22, 2026</span>
                  <span className="text-beast-pink text-sm font-semibold">Read →</span>
                </div>
              </a>
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
              <a href="/blog/cpg-advertising-strategy-choosing-the-right-paid-channels-for-your-budget" className="group block bg-beast-white rounded-2xl border border-light-border p-6 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-light-surface text-[#717171]">Paid Media Strategy</span>
                  <span className="text-xs text-[#717171]">8 min read</span>
                </div>
                <h3 className="font-display text-base font-bold text-beast-black mb-2 leading-snug group-hover:text-beast-pink transition-colors">CPG Advertising Strategy: Choosing the Right Paid Channels for Your Budget</h3>
                <p className="text-[#717171] text-sm leading-relaxed mb-4">Stop burning budget on the wrong channels. Learn how CPG brands should allocate paid media across Google, Meta, Amazon, </p>
                <div className="flex items-center justify-between pt-3 border-t border-light-border">
                  <span className="text-xs text-[#717171]">June 9, 2025</span>
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
              Ready to Win the Amazon Buy Box for Your CPG Brand?
            </h2>
            <p className="text-[#C8C8C8] mb-8">
              Beast builds coordinated Amazon PPC strategies that improve Buy Box eligibility, reviews, and organic rankings simultaneously.
            </p>
            <IconButton href="/growth-assessment" icon="calendar">Book a Growth Diagnostic</IconButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
