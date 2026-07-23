import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import IconButton from "@/components/ui/IconButton";

export const metadata: Metadata = {
  alternates: { canonical: "https://beastcreativeagency.com/services/paid-media" },
  title: "Paid Social Media Agency San Antonio | AI-Optimized Paid Media | Beast Creative",
  description:
    "AI-optimized Facebook, Instagram, TikTok, and Google ad campaigns with real-time creative testing. $0.12 CPC vs $0.28 industry average.",
};

export default function PaidMediaPage() {
  return (
    <>
      <section className="relative bg-beast-black pt-28 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-near-black to-beast-black" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection>
            <p className="section-eyebrow text-beast-pink mb-4">Service: Paid Media</p>
            <h1 className="text-display-hero font-display font-extrabold text-white max-w-4xl mb-6 leading-tight">
              Paid Media That Pays{" "}
              <span>You Back.</span>
            </h1>
            <p className="text-body-lead text-gray-300 max-w-2xl">
              Ads are one input in your growth system, not the whole thing. We turn paid spend into profitable, qualified demand across Facebook, Instagram, TikTok, and Google, with real-time creative testing and daily optimization. Our CPG campaigns average $0.12 CPC vs $0.28 industry standard.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-section-offwhite py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <h2 className="font-display text-3xl font-bold text-beast-black mb-6">Our Approach</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Spend only pays back when it drives qualified demand, not cheap clicks or vanity reach. We don&apos;t set up campaigns and check in monthly. We monitor daily, test creative continuously, and optimize based on real-time data, not gut feelings.
              </p>
              <p className="text-gray-600 leading-relaxed">
                AI-assisted audience segmentation finds the pockets of your market that convert at the lowest cost. Dynamic creative testing lets us run 10 variations simultaneously and double down on what works within 48 hours.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="font-display text-3xl font-bold text-beast-black mb-6">Platforms & Services</h2>
              <ul className="space-y-3">
                {["Facebook + Instagram ad management", "TikTok ads (organic + paid)", "Google Search + Display campaigns", "AI-powered audience segmentation", "Dynamic creative testing (A/B + multivariate)", "Daily monitoring and real-time optimization", "Retargeting and lookalike audiences", "Monthly performance reporting with revenue attribution"].map((item) => (
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
            <h2 className="font-display text-3xl font-bold text-white mb-4">Ready to Outperform Your Benchmarks?</h2>
            <IconButton href="/growth-assessment?type=paid" icon="calendar">Start Your Growth Assessment</IconButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
