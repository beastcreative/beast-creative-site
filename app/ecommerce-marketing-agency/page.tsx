import type { Metadata } from "next";
import { faqSchema } from "@/lib/schema";
import LandingPage, { type LandingData } from "@/components/landing/LandingPage";
import AnalyticsInit from "@/components/landing/AnalyticsInit";

export const metadata: Metadata = {
  title: "Ecommerce Marketing Agency | Conversion, Search & Paid Media | Beast Creative",
  description:
    "Beast helps ecommerce brands turn more traffic into revenue by connecting search, paid media, product-page conversion, content, and retention into one measurable growth system.",
  openGraph: {
    title: "Ecommerce Growth Partner | Beast Creative",
    description:
      "Turn more ecommerce traffic into revenue. Beast connects acquisition, conversion, and retention into one measurable growth system.",
    type: "website",
    url: "https://beastcreativeagency.com/ecommerce-marketing-agency",
  },
  alternates: { canonical: "https://beastcreativeagency.com/ecommerce-marketing-agency" },
};

const data: LandingData = {
  pageType: "ecommerce",
  eyebrow: "Ecommerce Growth Partner",
  h1Pre: "The Ecommerce Marketing Agency",
  h1Accent: "Built to Grow Revenue",
  sub: "Most ecommerce brands do not have a traffic problem. They have a system problem. Beast identifies what is limiting growth, from acquisition cost to weak conversion, thin retention, or broken attribution, then builds the connected growth system to fix it.",
  primaryCta: "Start Your Ecommerce Growth Assessment",
  secondaryCta: { label: "See the Proof", href: "#proof" },
  heroVisual: {
    label: "Ecommerce growth composite",
    note: "Revenue/analytics dashboard + product imagery. ~1200×900. Shows acquisition → conversion → retention.",
  },
  proof: [
    { value: 500, suffix: "%+", label: "MRR Growth", sublabel: "Sweet Sensi" },
    { value: 36581, label: "Emails Captured", sublabel: "on a $6K budget" },
    { value: 7.03, suffix: "%", decimals: 2, label: "CTR Achieved", sublabel: "vs 0.89% avg" },
    { value: 0.12, prefix: "$", decimals: 2, label: "Cost Per Click", sublabel: "vs $0.28 avg" },
  ],
  problem: {
    headingPre: "Ecommerce Growth Rarely Stalls Because of",
    headingAccent: "Traffic.",
    intro:
      "It usually breaks somewhere in the system. You pay more to acquire, the product page leaks, retention is thin, and attribution is fuzzy, so scaling profitably feels impossible. Beast finds the leak and connects the engine around revenue.",
    items: [
      { t: "Rising Acquisition Cost", d: "CAC keeps climbing while margin gets thinner." },
      { t: "Traffic That Does Not Convert", d: "Clicks arrive, but product and landing pages do not turn them into orders." },
      { t: "Weak Retention", d: "First orders do not become repeat revenue." },
      { t: "Disconnected Creative & Media", d: "Ads, creative, and the on-site experience tell different stories." },
      { t: "Broken Attribution", d: "You cannot see which spend actually drives profitable revenue." },
      { t: "Scaling Without Profit", d: "Growth happens, but not the kind that adds margin." },
    ],
  },
  system: {
    steps: [
      { step: "01", name: "Diagnose", desc: "Audit acquisition, product pages, the conversion path, retention, and attribution to find where revenue leaks." },
      { step: "02", name: "Design", desc: "A connected plan across paid media, search, CRO, creative, and retention, built around profitable growth." },
      { step: "03", name: "Build", desc: "Landing and product pages, ad creative, retention flows, and the tracking to measure all of it." },
      { step: "04", name: "Grow", desc: "Test, optimize, and scale the winners while cutting what does not pay back." },
    ],
  },
  capabilities: {
    heading: "Every Capability Points at Revenue.",
    items: [
      { outcome: "Lower Acquisition Cost", caps: "Paid media, search, and creative testing that improves cost per profitable order." },
      { outcome: "Higher Conversion", caps: "Product-page and landing-page CRO, UX, and messaging that turn visits into orders." },
      { outcome: "More Repeat Revenue", caps: "Email, retention, and lifecycle systems that compound customer value." },
      { outcome: "Clear Attribution", caps: "Analytics, event tracking, and UTM discipline so every dollar is accountable." },
      { outcome: "Connected Creative & Media", caps: "One story across ads, site, and content instead of disconnected pieces." },
    ],
  },
  cases: [
    { client: "Sweet Sensi", result: "500%+", resultLabel: "MRR growth", proves: "An SEO and social engine cracked a restricted category and compounded monthly revenue.", href: "/work/sweet-sensi", image: "/assets/sweet-sensi-gummies.jpg" },
    { client: "Sun-Bird Seasonings", result: "36,581", resultLabel: "emails on $6K", proves: "A demand and data-capture system built for a national Walmart rollout, not just a campaign.", href: "/work/sun-bird", image: "/assets/sunbird-ad-green.jpg" },
    { client: "Williams Foods", result: "22,043", resultLabel: "entries on $4K", proves: "Precision targeting and a low-friction mechanic beat the goal 2.2x at $0.18 CPC.", href: "/work/williams-bts", image: "/assets/williams-bts-hero.jpg" },
  ],
  faqs: [
    { question: "What does an Ecommerce Growth Diagnostic include?", answer: "A focused review of your goals, acquisition, product and landing pages, conversion path, retention, and attribution. If Beast sees a real opportunity, we show you where we would start and why. No pitch, no pressure." },
    { question: "Do you only run ads, or build the whole system?", answer: "The whole system. Ads are one input. We connect paid media, search, product-page conversion, creative, retention, and measurement so more traffic becomes more revenue." },
    { question: "How is Beast different from a typical ecommerce agency?", answer: "We work as a growth partner, not a task vendor, and we publish results by name. Every number on our site is attributed to a real client. We diagnose the constraint first, then build the connected system." },
    { question: "What size ecommerce brands do you work with?", answer: "Growth-stage brands ready to invest in a real system. We work with national CPG and DTC brands alongside regional brands scaling up." },
    { question: "Where is Beast based?", answer: "Beast Creative is headquartered in San Antonio, TX and works with brands across the United States." },
  ],
  finalHeadingPre: "Find the Leak in Your",
  finalHeadingAccent: "Ecommerce Growth System.",
  finalCopy:
    "In one focused call we will look at your goals, your channels, and where revenue is leaking. If Beast can help, we will show you the next move.",
  seo: {
    eyebrow: "About Beast",
    items: [
      {
        level: "h2",
        heading: "The Ecommerce Digital Marketing Agency Built Around Revenue",
        body: "Beast is an ecommerce digital marketing agency that connects search, paid media, product-page conversion, email, and retention into one system, so growth compounds instead of leaking between disconnected channels.",
      },
      {
        level: "h3",
        heading: "A Digital Marketing Agency for Ecommerce Brands That Want a System, Not Tactics",
        body: "As a digital marketing agency for ecommerce, we start with the constraint actually holding growth back, then build the connected plan to fix it, measured against revenue rather than vanity metrics.",
      },
      {
        level: "h2",
        heading: "What Makes Us the Best Ecommerce Marketing Agency for Growth",
        body: "The best ecommerce marketing agency for you is the one that proves its work. Every result we publish is a real, named client, and every engagement is built to move the numbers that show up in your P&L.",
      },
    ],
  },
};

export default function EcommerceLandingPage() {
  const faqJsonLd = faqSchema(data.faqs);
  return (
    <>
      <AnalyticsInit />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <LandingPage data={data} />
    </>
  );
}
