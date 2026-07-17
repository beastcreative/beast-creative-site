import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import IconButton from "@/components/ui/IconButton";

export const metadata: Metadata = {
  alternates: { canonical: "https://beastcreativeagency.com/services/web-design" },
  title: "Web Design Agency | CRO & Performance Web Design | Beast Creative",
  description:
    "Conversion-focused web design from Beast Creative Agency. Mobile-first, Lighthouse 90+ scores, built to turn traffic into revenue. Serving brands nationwide.",
};

export default function WebDesignPage() {
  return (
    <>
      <section className="relative bg-beast-black pt-28 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-near-black to-beast-black" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection>
            <p className="section-eyebrow text-beast-pink mb-4">Service: Web Design & CRO</p>
            <h1 className="text-display-hero font-display font-extrabold text-white max-w-4xl mb-6 leading-tight">
              Websites That{" "}
              <span className="text-beast-pink">Convert, Not Just Look Good.</span>
            </h1>
            <p className="text-body-lead text-gray-300 max-w-2xl">
              Mobile-first, performance-optimized, conversion-focused builds. Every page has a purpose and a next step. Lighthouse 90+ scores. Built on proven funnel architecture.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-section-offwhite py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <h2 className="font-display text-3xl font-bold text-beast-black mb-6">Built for Business, Not Awards</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Most web agencies optimize for design awards. We optimize for conversions: calls booked, leads submitted, products purchased. Beautiful design is a tool for achieving that goal, not the goal itself.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Every site we build starts with a question: &quot;What action do we want the visitor to take?&quot; Then we architect every section, headline, and CTA to move them toward it.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="font-display text-3xl font-bold text-beast-black mb-6">What We Build</h2>
              <ul className="space-y-3">
                {["Marketing and landing pages", "E-commerce stores (Shopify, Next.js)", "CPG brand websites with multi-brand architecture", "Lead generation funnels", "CRO audits and optimization", "Mobile-first responsive design", "Lighthouse Performance 90+", "SEO-optimized from day one", "GA4 + conversion tracking setup"].map((item) => (
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

      <section className="bg-beast-black py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-white mb-4">Ready for a Website That Works?</h2>
            <IconButton href="https://calendar.app.google/9q1mcYgEdXNyjK8G6" icon="calendar" target="_blank" rel="noopener noreferrer">See Where You Stand in AI Search</IconButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
