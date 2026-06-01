import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { faqSchema, serviceSchema } from "@/lib/schema";
import FaqAccordion from "@/components/ui/FaqAccordion";
import IconButton from "@/components/ui/IconButton";

export const metadata: Metadata = {
  title: "SEO Agency San Antonio + Answer Engine Optimization (AEO) | Beast Creative",
  description:
    "Beast Creative offers traditional SEO and Answer Engine Optimization — ensuring your brand appears in Google AND AI search tools like ChatGPT, Gemini, and Perplexity.",
};

const faqs = [
  { question: "What is AEO (Answer Engine Optimization)?", answer: "AEO is the practice of structuring your content to be cited and recommended by AI answer engines — ChatGPT, Gemini, Perplexity, and Claude. It's becoming as important as traditional SEO as more users turn to AI for research." },
  { question: "How is AEO different from traditional SEO?", answer: "Traditional SEO optimizes for search engine rankings. AEO optimizes for AI citation — structuring content with clear authoritative statements, FAQ markup, entity definitions, and factual density that AI systems prefer to cite." },
  { question: "How do you optimize for AI search?", answer: "Through semantic HTML structure, Schema.org markup, authoritative topical coverage, FAQ sections, clear definition of entities and relationships, and building domain authority that AI systems trust as a source." },
  { question: "How long does SEO take to work?", answer: "Technical fixes can show results in 2–4 weeks. Content authority builds over 3–6 months. AEO citation can happen faster if your content is the clearest available answer to a specific question." },
];

export default function SeoAeoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: "SEO + Answer Engine Optimization", description: "Traditional SEO plus AEO to rank in Google and get cited by AI search tools like ChatGPT, Gemini, and Perplexity.", url: "https://beastcreativeagency.com/services/seo-aeo" })) }} />

      <section className="relative bg-beast-black pt-28 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-near-black to-beast-black" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection>
            <p className="section-eyebrow text-beast-pink mb-4">Service — SEO + AEO</p>
            <h1 className="text-display-hero font-display font-extrabold text-white max-w-4xl mb-6 leading-tight">
              Rank in Google.{" "}
              <span className="text-beast-pink">Get Cited by AI.</span>
            </h1>
            <p className="text-body-lead text-gray-300 max-w-2xl">
              Beast is one of the few agencies offering AEO (Answer Engine Optimization) — structuring content to be cited by ChatGPT, Gemini, Perplexity, and Claude alongside traditional SEO.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-section-offwhite py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <h2 className="font-display text-3xl font-bold text-beast-black mb-6">SEO That Works in 2026</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Google search is no longer the only discovery channel. An estimated 30%+ of search queries now go to AI tools first. If your brand doesn&apos;t appear in both traditional search AND AI-generated answers, you&apos;re invisible to a growing portion of your market.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Beast builds an integrated SEO + AEO strategy — technical optimization, content authority, and structured data that wins in both environments.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="font-display text-3xl font-bold text-beast-black mb-6">What We Deliver</h2>
              <ul className="space-y-3">
                {["Technical SEO audit and remediation", "Keyword and topic cluster strategy", "On-page optimization", "Schema.org structured data implementation", "FAQ markup for People Also Ask", "AEO content strategy and formatting", "Entity and relationship mapping", "Local SEO (national + regional)", "Monthly ranking reports", "Competitor gap analysis"].map((item) => (
                  <li key={item} className="flex gap-3 text-sm">
                    <svg className="w-4 h-4 text-beast-pink shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
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
            <h2 className="font-display text-3xl font-bold text-white mb-4">Ready to Own Both Search and AI?</h2>
            <IconButton href="https://calendar.app.google/9q1mcYgEdXNyjK8G6" icon="calendar" target="_blank" rel="noopener noreferrer">See Where You Stand in AI Search</IconButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
