import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactForm from "@/components/forms/ContactForm";
import IconButton from "@/components/ui/IconButton";

export const metadata: Metadata = {
  title: "Contact Beast Creative Agency | San Antonio SEO & AEO",
  description:
    "See where you stand in AI search, or send a message. No pitch deck, no commitments — just an honest conversation. Working with brands nationwide.",
};

const faqs = [
  {
    q: "What happens when I reach out?",
    a: "We come prepared. Before the call, we look at your brand, your current marketing, and your competitors. On the call, you get an honest read on where you're losing ground and what would move the needle fastest — no pitch deck, no sales script.",
  },
  {
    q: "Do you only work with CPG brands?",
    a: "CPG food and beverage brands are our flagship and where our deepest playbook lives. We also work with e-commerce brands, retail businesses, and multi-brand holding companies. If you're not sure whether we're a fit, a quick call will tell you.",
  },
  {
    q: "What's a typical starting budget to work with Beast?",
    a: "Our campaigns start at $2,500/month in ad spend, with management fees on top. We don't take on accounts below that threshold — the math doesn't work for either side. If you're not there yet, we'll tell you what to build toward.",
  },
  {
    q: "How fast do you move?",
    a: "First campaigns typically launch within 2–3 weeks of signing. No six-week onboarding cycles. You'll have Slack access, Looker dashboards, and weekly Loom updates from day one.",
  },
  {
    q: "Do you work with brands outside of San Antonio?",
    a: "Yes — all of our active clients are national brands. We're headquartered in San Antonio and work remotely with brands across the U.S.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-beast-black pt-28 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-near-black to-beast-black" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-20 text-center">
          <AnimatedSection>
            <p className="section-eyebrow text-beast-pink mb-4">Let&apos;s Talk</p>
            <h1 className="font-display text-5xl lg:text-7xl font-extrabold text-white tracking-normal mb-6">
              Start the Conversation.
            </h1>
            <p className="text-body-lead text-gray-300 max-w-2xl mx-auto">
              See where you stand in AI search, or send us a message. No pitch deck. No commitments. Just an honest conversation about what Beast can do for your brand.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="bg-beast-black py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            {/* Left: Primary — Book a call */}
            <AnimatedSection>
              <div className="space-y-8">
                <div>
                  <h2 className="font-display text-2xl font-bold text-white mb-3">See Where You Stand in AI Search</h2>
                  <p className="text-gray-400 mb-6">
                    We come prepared with a real read on your brand — what&apos;s working, what isn&apos;t, and where the fastest wins are hiding. No pitch. No obligations.
                  </p>
                  <IconButton href="https://calendar.app.google/9q1mcYgEdXNyjK8G6" icon="calendar" target="_blank" rel="noopener noreferrer">
                    See Where You Stand in AI Search
                  </IconButton>
                </div>

                <div className="border-t border-dark-border pt-8 space-y-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-1">Phone / SMS</p>
                    <a href="sms:+12103320567" className="text-white hover:text-beast-pink transition-colors font-medium text-lg">
                      (210) 332-0567
                    </a>
                    <p className="text-gray-500 text-sm mt-1">Text or call — we respond fast</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-1">Location</p>
                    <p className="text-white font-medium">San Antonio, TX</p>
                    <p className="text-gray-500 text-sm mt-1">Serving clients nationally</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-1">Response Time</p>
                    <p className="text-white font-medium">Within 1 business day</p>
                    <p className="text-gray-500 text-sm mt-1">For all inquiries and form submissions</p>
                  </div>
                </div>

                <div className="bg-dark-surface rounded-2xl p-6 border border-dark-border">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-4">Why Talk to Beast</p>
                  <ul className="space-y-3">
                    {[
                      "7.03% CTR — vs 0.89% industry average",
                      "36,581 consumer emails on a $6,000 budget",
                      "500%+ MRR growth for e-commerce CPG clients",
                      "No pitch deck — just honest numbers",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm">
                        <svg className="w-4 h-4 text-beast-pink shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Secondary — Email form */}
            <AnimatedSection delay={0.15}>
              <h2 className="font-display text-2xl font-bold text-white mb-3">Not Ready to Book? Send a Note.</h2>
              <p className="text-gray-500 text-sm mb-6">Fill out the form and we&apos;ll respond within 1 business day.</p>
              <ContactForm submitLabel="Send My Message" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-section-offwhite py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection>
            <p className="section-eyebrow text-beast-pink mb-4 text-center">FAQ</p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-beast-black tracking-normal mb-10 text-center">
              Common Questions
            </h2>
          </AnimatedSection>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <AnimatedSection key={faq.q} delay={i * 0.06}>
                <details className="group bg-white rounded-2xl border border-gray-100 overflow-hidden">
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none font-display font-semibold text-beast-black text-base select-none">
                    {faq.q}
                    <svg
                      className="w-5 h-5 text-beast-pink shrink-0 ml-4 transition-transform duration-200 group-open:rotate-45"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
                    </svg>
                  </summary>
                  <p className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
