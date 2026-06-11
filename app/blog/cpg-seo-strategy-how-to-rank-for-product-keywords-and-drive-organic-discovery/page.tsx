import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { faqSchema } from "@/lib/schema";
import FaqAccordion from "@/components/ui/FaqAccordion";
import IconButton from "@/components/ui/IconButton";

export const metadata: Metadata = {
  title: "CPG SEO Strategy: How to Rank for Product Keywords and Drive Organic Discovery",
  description:
    "87% of product searches start online. Learn the CPG SEO strategy that drives organic discovery — from problem-solution keywords and product page optimization to local SEO and content authority.",
};

const faqs = [
  {
    question: "What makes SEO for CPG brands different from other industries?",
    answer: "CPG brands compete against retail giants (Amazon, Walmart, Target) for basic product terms — often a losing battle. Effective CPG SEO shifts focus toward problem-solution keywords, ingredient and benefit queries, and educational content where brand sites can establish authority that retail platforms can't match. Local SEO through store locator optimization is also uniquely powerful for distributed CPG brands.",
  },
  {
    question: "What types of keywords should CPG brands target?",
    answer: "Three categories work well: Product Category Keywords (broad descriptive terms your target customer searches, e.g., 'natural energy drinks'), Problem-Solution Keywords (long-tail queries that convert well, e.g., 'how to get energy without coffee'), and Ingredient/Benefit Keywords (e.g., 'products with ashwagandha') that attract qualified, intent-rich traffic.",
  },
  {
    question: "How should CPG brands optimize product page titles for SEO?",
    answer: "Lead with the benefit or key descriptor, not just the brand name. 'High Protein Energy Bar – Chocolate PowerBar Original' outperforms 'PowerBar Original – Chocolate' by capturing both branded and non-branded searches. Keep titles under 60 characters to avoid truncation in search results.",
  },
  {
    question: "Can recipe and usage content really drive CPG sales?",
    answer: "Yes — it's one of the most effective CPG content strategies. Recipe content targets informational queries that naturally showcase your product, generates backlinks from food blogs and media, and attracts social shares. A hot sauce brand targeting 'easy spicy dinner recipes' reaches highly relevant consumers who need exactly that product, without competing directly with retail giant product listings.",
  },
  {
    question: "How do CPG brands measure SEO success given offline purchase attribution challenges?",
    answer: "Beyond rankings and traffic, track: product page conversion rates for DTC channels, store locator usage (a strong signal of in-store purchase intent), branded search volume growth over time, and survey customers about how they discovered your brand. Customer lifetime value of organic visitors is often significantly higher than paid acquisition cohorts.",
  },
];

export default function CpgSeoPost() {
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
            headline: "CPG SEO Strategy: How to Rank for Product Keywords and Drive Organic Discovery",
            description: "87% of product searches start online. Learn the CPG SEO strategy that drives organic discovery — from problem-solution keywords and product page optimization to local SEO and content authority.",
            datePublished: "2025-05-13",
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
                SEO Strategy
              </span>
              <span className="text-xs text-[#888888]">May 13, 2025 · 8 min read</span>
            </div>
            <h1 className="text-display-hero font-display font-extrabold text-white mb-6 leading-tight">
              CPG SEO Strategy:{" "}
              <span className="text-beast-pink">How to Rank for Product Keywords and Drive Organic Discovery</span>
            </h1>
            <p className="text-body-lead text-[#C8C8C8] max-w-2xl">
              87% of product searches start online, yet most CPG companies still treat SEO as an afterthought. Here&amp;apos;s how to build organic discovery that compounds over time.
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
                  src="/assets/blog/contentcraft-6944e3c5c81e2-1-1024x585.png"
                  alt="CPG SEO strategy for product keywords"
                  width={1024}
                  height={585}
                  className="w-full h-auto"
                />
              </div>

              <h2 className="font-display text-3xl font-bold text-beast-black mt-0 mb-4">The CPG SEO Landscape</h2>
              <p className="text-[#4A4A4A] leading-relaxed mb-4">
                Consumer packaged goods brands compete against retail giants — Amazon, Walmart, Target — for basic product search terms. This is often a losing battle. Effective CPG SEO requires a different approach: dominate the search queries that retail platforms can&apos;t or won&apos;t answer.
              </p>
              <p className="text-[#4A4A4A] leading-relaxed mb-8">
                Customers research through various channels before purchasing — discovering brands through search queries, comparing on product pages, reading reviews, then completing purchases online or in stores. Your content must influence those discovery moments, even when the sale happens off your site.
              </p>

              <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Keyword Research for CPG Brands</h2>
              <ul className="space-y-3 mb-8">
                {[
                  { label: "Product Category Keywords", detail: "Broad descriptive terms your target customer searches. 'Natural energy drinks,' 'pre-workout beverages,' 'caffeine-free energy boosters.' Higher volume, less brand-specific competition than branded terms." },
                  { label: "Problem-Solution Keywords", detail: "Map customer pain points to solution-focused queries. 'How to get energy without coffee,' 'healthy snacks for kids lunch boxes,' 'gluten-free pasta that tastes good.' These long-tail variations convert better with less competition." },
                  { label: "Ingredient and Benefit Keywords", detail: "Capture searches for specific components: 'products with ashwagandha,' 'organic coconut oil benefits.' Establishes authority while targeting qualified traffic." },
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
                  src="/assets/blog/contentcraft-6944e3d1f0ae2-1.png"
                  alt="CPG product page optimization for SEO"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                />
              </div>

              <h2 className="font-display text-3xl font-bold text-beast-black mb-4">On-Page Optimization for Product Pages</h2>
              <h3 className="font-display text-xl font-bold text-beast-black mb-2">Title Tag Optimization</h3>
              <div className="bg-section-offwhite rounded-xl p-5 mb-6 border border-light-border">
                <p className="text-sm text-[#717171] mb-1"><span className="text-red-500 font-bold">✗ Weak:</span> &quot;PowerBar Original – Chocolate&quot;</p>
                <p className="text-sm text-[#4A4A4A]"><span className="text-green-600 font-bold">✓ Strong:</span> &quot;High Protein Energy Bar – Chocolate PowerBar Original&quot;</p>
              </div>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2">Product Descriptions That Convert and Rank</h3>
              <p className="text-[#4A4A4A] leading-relaxed mb-4">Effective descriptions follow a four-part formula:</p>
              <ul className="space-y-2 mb-6">
                {[
                  "Lead with benefits before features",
                  "Include target keywords naturally without stuffing",
                  "Address common customer questions proactively",
                  "Use structured data for price, availability, and reviews",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed">
                    <span className="text-beast-pink font-bold shrink-0">→</span> {item}
                  </li>
                ))}
              </ul>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2">Image Optimization</h3>
              <p className="text-[#4A4A4A] leading-relaxed mb-8">
                Replace generic filenames with descriptive ones: &quot;organic-protein-powder-vanilla-flavor.jpg&quot; instead of &quot;IMG_001.jpg.&quot; Alt text should describe images while incorporating keywords naturally.
              </p>

              <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Content Marketing That Drives Product Discovery</h2>
              <ul className="space-y-3 mb-6">
                {[
                  { label: "Recipe and Usage Content", detail: "A hot sauce brand targeting 'easy spicy dinner recipes' reaches relevant consumers while naturally showcasing the product and generating backlinks." },
                  { label: "Comparison and 'Best Of' Content", detail: "Rather than ceding comparison searches to third parties, create 'best protein powders for beginners' guides that control the narrative." },
                  { label: "Educational Content Around Ingredients", detail: "Detailed guides covering health benefits, sourcing, and common misconceptions build category authority that retail sites can't match." },
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
                  src="/assets/blog/contentcraft-6944e3dc1225c-1.png"
                  alt="CPG local SEO and store locator optimization"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                />
              </div>

              <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Local SEO for CPG Brands</h2>
              <p className="text-[#4A4A4A] leading-relaxed mb-4">
                Store locator pages optimized with city and retailer names capture high-intent local searches: &quot;Buy Organic Energy Bars in Seattle – Available at Whole Foods Capitol Hill, PCC Natural Markets, and 15+ local stores.&quot; This type of page captures purchase-intent traffic that brand pages don&apos;t.
              </p>

              <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Common CPG SEO Mistakes to Avoid</h2>
              <ul className="space-y-2 mb-8">
                {[
                  "Competing against Amazon and Walmart for basic product terms — redirect budget to educational content instead",
                  "Treating all products equally — prioritize high-margin items and bestsellers for SEO investment",
                  "Ignoring seasonal opportunities — plan content 8–12 weeks ahead of peak seasons",
                  "Underestimating voice search — target conversational question-based queries ('What&apos;s the healthiest energy drink?')",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed">
                    <span className="text-beast-pink font-bold shrink-0">→</span> {item}
                  </li>
                ))}
              </ul>

              <div className="bg-beast-black rounded-2xl p-8 mb-8">
                <p className="font-display font-bold text-beast-pink text-xs uppercase tracking-widest mb-3">Beast Creative Agency</p>
                <p className="text-[#C8C8C8] text-sm leading-relaxed mb-4">
                  Our SEO and AEO practice helps CPG brands build the kind of organic presence that compounds over time — ranking on Google and getting cited in AI tools like ChatGPT, Perplexity, and Gemini.
                </p>
                <IconButton href="/services/seo-aeo" icon="arrow">See Our SEO + AEO Service</IconButton>
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
              <a href="/blog/amazon-advertising-for-cpg-brands-ppc-strategies-to-win-the-buy-box" className="group block bg-beast-white rounded-2xl border border-light-border p-6 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-light-surface text-[#717171]">Amazon Ads</span>
                  <span className="text-xs text-[#717171]">9 min read</span>
                </div>
                <h3 className="font-display text-base font-bold text-beast-black mb-2 leading-snug group-hover:text-beast-pink transition-colors">Amazon Advertising for CPG Brands: PPC Strategies to Win the Buy Box</h3>
                <p className="text-[#717171] text-sm leading-relaxed mb-4">The Buy Box drives 82% of Amazon sales. Learn how CPG brands can use Sponsored Products, Sponsored Brands, and strategic</p>
                <div className="flex items-center justify-between pt-3 border-t border-light-border">
                  <span className="text-xs text-[#717171]">July 11, 2025</span>
                  <span className="text-beast-pink text-sm font-semibold">Read →</span>
                </div>
              </a>
              <a href="/blog/cpg-ad-creative-that-converts-testing-iteration-and-best-practices" className="group block bg-beast-white rounded-2xl border border-light-border p-6 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-light-surface text-[#717171]">CPG Marketing</span>
                  <span className="text-xs text-[#717171]">8 min read</span>
                </div>
                <h3 className="font-display text-base font-bold text-beast-black mb-2 leading-snug group-hover:text-beast-pink transition-colors">CPG Ad Creative That Converts: Testing, Iteration, and Best Practices</h3>
                <p className="text-[#717171] text-sm leading-relaxed mb-4">Learn how to build a systematic CPG creative testing framework — from defining creative buckets to scaling winning eleme</p>
                <div className="flex items-center justify-between pt-3 border-t border-light-border">
                  <span className="text-xs text-[#717171]">December 15, 2025</span>
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
              Ready to Build Organic Discovery for Your CPG Brand?
            </h2>
            <p className="text-[#C8C8C8] mb-8">
              Beast builds SEO and AEO strategies that position CPG brands as the authoritative answer — in Google and in AI search tools.
            </p>
            <IconButton href="https://calendar.app.google/9q1mcYgEdXNyjK8G6" icon="calendar" target="_blank" rel="noopener noreferrer">See Where You Stand in AI Search</IconButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
