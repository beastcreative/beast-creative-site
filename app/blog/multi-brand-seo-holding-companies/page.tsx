import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { faqSchema } from "@/lib/schema";
import FaqAccordion from "@/components/ui/FaqAccordion";
import IconButton from "@/components/ui/IconButton";

export const metadata: Metadata = {
  title: "Multi-Brand SEO for Holding Companies",
  description:
    "If you manage 3+ consumer brands on separate domains, you&apos;re likely cannibalizing your own search rankings. Here&apos;s the domain architecture that fixes it.",
};

const faqs = [
  {
    question: "What is multi-brand SEO?",
    answer: "Multi-brand SEO is the practice of managing search optimization across a portfolio of brands under a single parent company — ensuring each brand builds independent authority while the holding company benefits from a unified domain strategy.",
  },
  {
    question: "Why do holding companies cannibalize their own SEO?",
    answer: "When multiple brands under the same parent company compete for identical or similar keywords on separate domains, they split the domain authority that would otherwise compound on a single site. Google sees fragmented authority rather than a dominant entity — and ranks competitors who have consolidated that authority instead.",
  },
  {
    question: "Should all brands be on one domain or separate domains?",
    answer: "It depends on brand differentiation and audience overlap. If the brands share a target audience and keyword universe, a sub-brand architecture (brand.holdingco.com) consolidates authority. If brands serve distinct audiences with no keyword overlap, separate domains may be appropriate. Beast maps this at the start of every multi-brand engagement.",
  },
  {
    question: "How long does multi-brand SEO take to show results?",
    answer: "Domain architecture changes show results in 3–6 months as domain authority consolidates. Keyword ranking improvements typically follow 2–4 weeks after technical implementation. The long-term compounding effect of unified authority builds over 12–24 months.",
  },
  {
    question: "What is an entity relationship map in SEO?",
    answer: "An entity relationship map is a structured document that defines how each brand, product, and content asset in your portfolio relates to the others in Google's Knowledge Graph. It's used to implement structured data (schema.org) that tells search engines — and AI tools — exactly how your brands are connected.",
  },
];

export default function MultiBrandSeoPost() {
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
            headline: "Multi-Brand SEO for Holding Companies",
            description: "If you manage 3+ consumer brands on separate domains, you&apos;re likely cannibalizing your own search rankings. Here&apos;s the domain architecture that fixes it.",
            datePublished: "2026-02-08",
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
                SEO/AEO
              </span>
              <span className="text-xs text-[#888888]">February 8, 2026 · 7 min read</span>
            </div>
            <h1 className="text-display-hero font-display font-extrabold text-white mb-6 leading-tight">
              Multi-Brand SEO:{" "}
              <span className="text-beast-pink">Why Holding Companies Are Hurting Their Own Rankings</span>
            </h1>
            <p className="text-body-lead text-[#C8C8C8] max-w-2xl">
              If you manage 3+ consumer brands on separate domains, you&amp;apos;re probably cannibalizing your own search authority. Here&amp;apos;s the architecture that fixes it.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section className="bg-beast-white py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-20 space-y-8">
          <AnimatedSection>
            <div className="prose prose-lg max-w-none">

              <h2 className="font-display text-3xl font-bold text-beast-black mt-0 mb-4">The Problem Nobody Talks About</h2>
              <p className="text-[#4A4A4A] leading-relaxed mb-4">
                Multi-brand holding companies in CPG, food and beverage, and consumer goods face a structural SEO problem that their individual brand managers typically don&apos;t see: they&apos;re competing against themselves.
              </p>
              <p className="text-[#4A4A4A] leading-relaxed mb-4">
                When three brands under the same parent company each maintain separate domains targeting similar keywords — say, "hot sauce recipe," "seasoning mix recipes," "easy weeknight dinner ideas" — they split the domain authority that would otherwise consolidate into a dominant ranking entity.
              </p>
              <p className="text-[#4A4A4A] leading-relaxed mb-8">
                Google doesn&apos;t give extra credit because you own all three. It sees three medium-authority domains competing for the same query and ranks whichever competitor has consolidated that authority on a single domain.
              </p>

              <h2 className="font-display text-3xl font-bold text-beast-black mb-4">How Domain Authority Gets Diluted</h2>
              <p className="text-[#4A4A4A] leading-relaxed mb-4">
                Domain authority is accumulated through inbound links, topical depth, content volume, engagement signals, and technical performance. Every piece of that authority is domain-specific.
              </p>
              <p className="text-[#4A4A4A] leading-relaxed mb-6">
                A holding company with three brands — each building domain authority independently — is spending three times the budget and producing one-third of the SEO result compared to a unified architecture. This effect compounds over time as competitors consolidate.
              </p>

              <div className="bg-section-offwhite rounded-2xl p-6 mb-8 border border-light-border">
                <p className="font-display font-bold text-beast-black text-sm mb-4">Example: Fragmented vs. Unified Architecture</p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs font-semibold text-red-500 uppercase tracking-wide mb-2">Fragmented (common)</p>
                    <ul className="space-y-1 text-sm text-[#717171]">
                      <li>brand-a.com — DA 28</li>
                      <li>brand-b.com — DA 24</li>
                      <li>brand-c.com — DA 19</li>
                      <li className="pt-2 text-xs text-[#717171]">Three competing entities, none dominant</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-beast-pink uppercase tracking-wide mb-2">Unified (correct)</p>
                    <ul className="space-y-1 text-sm text-[#717171]">
                      <li>holdingco.com — DA 52+</li>
                      <li>/brands/brand-a</li>
                      <li>/brands/brand-b</li>
                      <li className="pt-2 text-xs text-[#717171]">One entity with compounding authority</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="font-display text-3xl font-bold text-beast-black mb-4">The Multi-Brand SEO Architecture</h2>
              <p className="text-[#4A4A4A] leading-relaxed mb-4">
                The right architecture depends on the relationship between brands and their keyword universes. Beast maps three scenarios:
              </p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2">Scenario 1: Overlapping audiences, similar keywords</h3>
              <p className="text-[#4A4A4A] leading-relaxed mb-6">
                Sub-brand architecture on a shared domain. Each brand gets its own section (/brands/brand-name), its own landing pages, and its own content cluster — but all authority accumulates to the parent domain. Internal linking between brands compounds authority across the portfolio.
              </p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2">Scenario 2: Distinct audiences, separate keyword universes</h3>
              <p className="text-[#4A4A4A] leading-relaxed mb-6">
                Separate domains may be appropriate here, but with a deliberate interlinking strategy and a shared holding company authority source. The holding company domain should still exist and link to each brand, passing authority downward.
              </p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2">Scenario 3: Mixed portfolio</h3>
              <p className="text-[#4A4A4A] leading-relaxed mb-8">
                Some brands consolidate under the parent; others maintain separate domains. This requires an entity relationship map that defines exactly how each brand relates to the others in Google&apos;s Knowledge Graph — implemented through schema.org structured data.
              </p>

              <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Entity Mapping for AI Search</h2>
              <p className="text-[#4A4A4A] leading-relaxed mb-4">
                Beyond Google, multi-brand holdings have an AEO problem. When ChatGPT or Perplexity tries to answer "what brands does [holding company] own," they need clear entity relationships to give an accurate answer. Without proper schema.org markup defining those relationships, AI tools either give incomplete answers or omit your brands entirely.
              </p>
              <p className="text-[#4A4A4A] leading-relaxed mb-8">
                Beast&apos;s multi-brand SEO architecture includes Organization schema that defines the parent-child relationship between holding company and brands, BreadcrumbList markup for navigation context, and SameAs links connecting each entity to its authoritative external records.
              </p>

              <h2 className="font-display text-3xl font-bold text-beast-black mb-4">The 5-Step Multi-Brand SEO Audit</h2>
              <ol className="space-y-4 mb-8 list-none">
                {[
                  { step: "1", label: "Keyword universe mapping", detail: "Identify where brand keyword clusters overlap and where they diverge." },
                  { step: "2", label: "Domain authority comparison", detail: "Benchmark current DA for each domain and model what unified architecture would produce." },
                  { step: "3", label: "Cannibalization analysis", detail: "Identify specific queries where your own brands are competing against each other in search results." },
                  { step: "4", label: "Architecture recommendation", detail: "Sub-brand, separate domains, or hybrid — with implementation roadmap and redirect strategy." },
                  { step: "5", label: "Entity relationship map", detail: "Schema.org markup that defines the full brand portfolio for both Google and AI search engines." },
                ].map((item) => (
                  <li key={item.step} className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-beast-pink/10 border border-beast-pink/20 text-beast-pink font-display font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
                      {item.step}
                    </span>
                    <div>
                      <p className="font-display font-bold text-beast-black text-sm">{item.label}</p>
                      <p className="text-[#717171] text-sm leading-relaxed">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="bg-beast-black rounded-2xl p-8 mb-8">
                <p className="font-display font-bold text-beast-pink text-xs uppercase tracking-widest mb-3">Beast SEO + AEO</p>
                <p className="text-[#C8C8C8] text-sm leading-relaxed mb-4">
                  Beast&apos;s SEO + AEO service includes multi-brand architecture audits, entity relationship mapping, and structured data implementation — designed specifically for holding companies managing portfolios of consumer brands.
                </p>
                <IconButton href="/services/seo-aeo" icon="arrow">
                  See Our SEO + AEO Service </IconButton>
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
              <a href="/blog/what-is-aeo-answer-engine-optimization" className="group block bg-beast-white rounded-2xl border border-light-border p-6 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-light-surface text-[#717171]">SEO/AEO</span>
                  <span className="text-xs text-[#717171]">6 min read</span>
                </div>
                <h3 className="font-display text-base font-bold text-beast-black mb-2 leading-snug group-hover:text-beast-pink transition-colors">What Is AEO (Answer Engine Optimization)?</h3>
                <p className="text-[#717171] text-sm leading-relaxed mb-4">AEO is the practice of structuring content to be cited by AI answer engines like ChatGPT, Gemini, and Perplexity. Learn </p>
                <div className="flex items-center justify-between pt-3 border-t border-light-border">
                  <span className="text-xs text-[#717171]">March 28, 2026</span>
                  <span className="text-beast-pink text-sm font-semibold">Read →</span>
                </div>
              </a>
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
            </div>
          </AnimatedSection>
        </div>
      </section>
      {/* CTA */}
      <section className="bg-beast-black py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-white mb-4">
              Managing Multiple Brands?
            </h2>
            <p className="text-[#C8C8C8] mb-8">
              Beast builds multi-brand SEO architectures that stop the cannibalization and start compounding authority across your entire portfolio.
            </p>
            <IconButton href="https://calendar.app.google/9q1mcYgEdXNyjK8G6" icon="calendar" target="_blank" rel="noopener noreferrer">See Where You Stand in AI Search</IconButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
