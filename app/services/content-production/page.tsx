import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import IconButton from "@/components/ui/IconButton";

export const metadata: Metadata = {
  alternates: { canonical: "https://beastcreativeagency.com/services/content-production" },
  title: "AI Content Marketing Agency San Antonio",
  description:
    "AI-powered content production: recipe videos, product demos, and social content at scale, at 90%+ lower cost than traditional production. Beast Creative Agency.",
};

export default function ContentProductionPage() {
  return (
    <>
      <section className="relative bg-beast-black pt-28 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-near-black to-beast-black" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection>
            <p className="section-eyebrow text-beast-pink mb-4">Service: AI Content Production</p>
            <h1 className="text-display-hero font-display font-extrabold text-white max-w-4xl mb-6 leading-tight">
              Content at Scale.{" "}
              <span className="text-beast-pink">Not at a Premium.</span>
            </h1>
            <p className="text-body-lead text-gray-300 max-w-2xl">
              Recipe videos, product demos, and social content at scale, produced with AI at 90%+ lower cost than traditional production. We&apos;ve processed 900+ recipe assets for CPG clients.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-section-offwhite py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <h2 className="font-display text-3xl font-bold text-beast-black mb-6">The Content Problem</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You have 50 SKUs. 900 recipes. A TikTok account that posts twice a week. The math doesn&apos;t work with traditional production: a single recipe video costs $800 to $2,500. To post daily, you&apos;d need $200K+ per year just in production.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Beast&apos;s AI content pipeline changes the math. We batch-produce assets from your existing content library, turning one photoshoot into 30 social posts and one recipe PDF into 12 short-form videos.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="font-display text-3xl font-bold text-beast-black mb-6">What We Produce</h2>
              <ul className="space-y-3">
                {["Recipe videos (short-form and long-form)", "Product demo and unboxing content", "Social media graphics and carousels", "AI-written captions and hashtag strategy", "Email newsletter content", "Blog posts and SEO articles", "Product photography variations (AI-enhanced)", "Seasonal campaign content batches"].map((item) => (
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
            <h2 className="font-display text-3xl font-bold text-white mb-4">Ready to Post Every Day Without the Production Budget?</h2>
            <IconButton href="/growth-assessment?type=content" icon="calendar">Start Your Growth Assessment</IconButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
