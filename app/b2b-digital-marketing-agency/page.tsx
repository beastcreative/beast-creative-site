import type { Metadata } from "next";
import { faqSchema } from "@/lib/schema";
import LandingPage, { type LandingData } from "@/components/landing/LandingPage";
import AnalyticsInit from "@/components/landing/AnalyticsInit";

export const metadata: Metadata = {
  title: "B2B Digital Marketing Agency for Qualified Growth | Beast Creative",
  description:
    "Beast helps B2B companies create qualified growth by connecting positioning, search, paid media, content, website conversion, and sales handoff into one measurable demand system.",
  openGraph: {
    title: "B2B Growth Partner | Beast Creative",
    description:
      "Build a more predictable B2B growth system. Beast connects positioning, demand, conversion, and sales handoff into one measurable engine.",
    type: "website",
    url: "https://beastcreativeagency.com/b2b-digital-marketing-agency",
  },
  alternates: { canonical: "https://beastcreativeagency.com/b2b-digital-marketing-agency" },
};

const data: LandingData = {
  pageType: "b2b",
  eyebrow: "B2B Growth Partner",
  h1Pre: "Build a More Predictable",
  h1Accent: "B2B Growth System",
  sub: "If your traffic, content, paid media, website, and sales process are pulling in different directions, growth becomes expensive and unpredictable. Beast finds the constraint, fixes the handoff points, and builds a measurable demand system around qualified opportunities.",
  primaryCta: "Start Your B2B Growth Assessment",
  secondaryCta: { label: "See the Proof", href: "#proof" },
  heroVisual: {
    label: "B2B demand system composite",
    note: "Website + dashboard + strategy-board composite. ~1200×900. Shows positioning → demand → conversion → sales handoff.",
  },
  proof: [
    { value: 36581, label: "First-Party Leads", sublabel: "on a $6K budget" },
    { value: 7.03, suffix: "%", decimals: 2, label: "CTR Achieved", sublabel: "vs 0.89% avg" },
    { value: 0.12, prefix: "$", decimals: 2, label: "Cost Per Click", sublabel: "vs $0.28 avg" },
    { value: 500, suffix: "%+", label: "Revenue Growth", sublabel: "Sweet Sensi" },
  ],
  problem: {
    headingPre: "B2B Growth Gets Expensive When Your System Is",
    headingAccent: "Disconnected.",
    intro:
      "When traffic, content, paid media, the website, and sales are pulling in different directions, every lead costs more and closes slower. Beast finds the constraint and fixes the handoff points so marketing produces qualified opportunities instead of activity.",
    items: [
      { t: "Inconsistent Lead Flow", d: "Pipeline is unpredictable month to month." },
      { t: "Poor Lead Quality", d: "Sales spends time on leads that never had a chance." },
      { t: "Long Sales Cycles", d: "Deals stall because the buyer journey is unclear." },
      { t: "Generic Positioning", d: "You look like every other option in the category." },
      { t: "Website Conversion Issues", d: "Traffic arrives but does not become qualified inquiries." },
      { t: "Marketing & Sales Misalignment", d: "The handoff leaks and attribution is incomplete." },
    ],
  },
  system: {
    steps: [
      { step: "01", name: "Diagnose", desc: "Map positioning, demand sources, website conversion, and the sales handoff to find the real constraint." },
      { step: "02", name: "Design", desc: "A demand plan across positioning, search, paid acquisition, content, and conversion, built around qualified pipeline." },
      { step: "03", name: "Build", desc: "Messaging, landing pages, content, campaigns, and the tracking that connects marketing to sales." },
      { step: "04", name: "Grow", desc: "Measure lead quality, tighten the handoff, and scale what produces real opportunities." },
    ],
  },
  capabilities: {
    heading: "Every Capability Points at Qualified Pipeline.",
    items: [
      { outcome: "Sharper Positioning", caps: "Messaging and brand strategy that make you the obvious choice." },
      { outcome: "More Qualified Demand", caps: "Search, paid media, and content that attract the right buyers." },
      { outcome: "Higher Website Conversion", caps: "UX, copy, and landing pages that turn visits into inquiries." },
      { outcome: "Tighter Sales Handoff", caps: "CRM alignment, lead scoring, and follow-up that protect pipeline." },
      { outcome: "Clear Attribution", caps: "Analytics and tracking that show what actually creates opportunities." },
    ],
  },
  cases: [
    { client: "TEKSBuilder", result: "1 Week", resultLabel: "idea to launched SaaS", proves: "Beast built and launched its own AI SaaS product and go-to-market in a week, then scaled it state by state.", href: "/work/teksbuilder", image: "/assets/teksbuilder-hero.jpg" },
    { client: "Sweet Sensi", result: "500%+", resultLabel: "MRR growth", proves: "A durable growth engine, not a one-off campaign, built in a difficult category.", href: "/work/sweet-sensi", image: "/assets/sweet-sensi-gummies.jpg" },
    { client: "Sun-Bird Seasonings", result: "36,581", resultLabel: "leads on $6K", proves: "A demand and first-party-data system built to prove real market demand.", href: "/work/sun-bird", image: "/assets/sunbird-ad-green.jpg" },
  ],
  faqs: [
    { question: "What does a B2B Growth Diagnostic include?", answer: "A focused review of your positioning, demand sources, website conversion, and the marketing-to-sales handoff. If Beast sees a real opportunity, we show you where we would start and why. No pitch, no pressure." },
    { question: "Do you generate leads or build the whole demand system?", answer: "The whole system. We connect positioning, search visibility, paid acquisition, content, website conversion, and sales handoff so marketing produces qualified opportunities, not just activity." },
    { question: "How is Beast different from a typical B2B agency?", answer: "We work as a growth partner, publish results by name, and connect strategy to execution. We diagnose the constraint first, then build the measurable system around qualified pipeline." },
    { question: "Do you work with our sales team and CRM?", answer: "Yes. Marketing that ignores the sales handoff leaks pipeline. We align lead scoring, follow-up, and attribution so qualified opportunities do not fall through." },
    { question: "Where is Beast based?", answer: "Beast Creative is headquartered in San Antonio, TX and works with companies across the United States." },
  ],
  finalHeadingPre: "Fix the Constraint Slowing Your",
  finalHeadingAccent: "B2B Growth.",
  finalCopy:
    "In one focused call we will look at your goals, your channels, and the handoff points where growth is being lost. If Beast can help, we will show you the next move.",
};

export default function B2BLandingPage() {
  const faqJsonLd = faqSchema(data.faqs);
  return (
    <>
      <AnalyticsInit />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <LandingPage data={data} />
    </>
  );
}
