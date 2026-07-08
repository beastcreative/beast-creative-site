import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import IconButton from "@/components/ui/IconButton";
import WorkGrid from "@/components/ui/WorkGrid";

export const metadata: Metadata = {
  title: "Our Work | Case Studies | Beast Creative Agency",
  description:
    "Real campaigns. Real numbers. See how Beast Creative Agency delivers 8x industry benchmarks for CPG brands and ambitious businesses nationwide.",
};

const caseStudies = [
  {
    client: "Sun-Bird Seasonings",
    campaign: "Bird Herd — National Walmart Rollout Campaign",
    heroStat: "36,581",
    heroStatLabel: "consumer emails on $6K budget",
    year: "2021",
    categories: ["CPG Marketing", "Paid Social", "Sweepstakes"],
    href: "/work/sun-bird",
    image: "/assets/sunbird-ad-green.jpg",
    highlight: true,
    stats: [
      { label: "CTR", value: "7.03%", sub: "vs 0.89% avg" },
      { label: "CPC", value: "$0.12", sub: "vs $0.28 avg" },
      { label: "Reach", value: "208K", sub: "paid" },
    ],
  },
  {
    client: "Williams Foods",
    campaign: "Back-to-School \"Williamize Your Food\" Sweepstakes",
    heroStat: "22,043",
    heroStatLabel: "entries on $4K budget",
    year: "2021",
    categories: ["CPG Marketing", "Paid Social", "Sweepstakes"],
    href: "/work/williams-bts",
    image: "/assets/williams-bts-hero.jpg",
    highlight: false,
    stats: [
      { label: "CTR", value: "3.89%", sub: "vs 0.89% avg" },
      { label: "CPC", value: "$0.18", sub: "vs $0.28 avg" },
      { label: "Over Goal", value: "2.2x", sub: "target: 10K" },
    ],
  },
  {
    client: "Williams Foods",
    campaign: "All-Stars — March Madness Digital Trading Cards",
    heroStat: "13,660",
    heroStatLabel: "entries in 24 days",
    year: "2022",
    categories: ["CPG Marketing", "Campaign Design", "Paid Social"],
    href: "/work/williams-allstars",
    image: "/assets/allstars-ad-announcement.png",
    highlight: false,
    stats: [
      { label: "Reach", value: "200K", sub: "total" },
      { label: "Duration", value: "24", sub: "days" },
      { label: "Cards", value: "8", sub: "unique" },
    ],
  },
  {
    client: "Sweet Sensi",
    campaign: "CBD E-Commerce Growth",
    heroStat: "500%+",
    heroStatLabel: "MRR growth",
    year: "2023–2024",
    categories: ["SEO", "Social Media", "E-Commerce"],
    href: "/work/sweet-sensi",
    image: "/assets/sweet-sensi-gummies.jpg",
    highlight: false,
    stats: [
      { label: "Strategy", value: "SEO", sub: "+ Social" },
      { label: "Email CTR", value: "9.5%", sub: "vs 0.82% avg" },
      { label: "Channels", value: "2x", sub: "compounding" },
    ],
  },
  {
    client: "Coinline",
    campaign: "Brand Naming & Identity",
    heroStat: "0",
    heroStatLabel: "explanation needed — name speaks itself",
    year: "2022",
    categories: ["Branding", "Naming", "Identity Design"],
    href: "/work/coinline",
    image: "",
    gradientFrom: "#1a0a14",
    gradientTo: "#10060d",
    logo: { src: "/assets/logos/coinline.png", width: 524, height: 90 },
    highlight: false,
    stats: [
      { label: "Name", value: "1", sub: "perfect" },
      { label: "Research", value: "Extensive", sub: "gaming culture" },
      { label: "Ready", value: "Launch", sub: "ready" },
    ],
  },
  {
    client: "Williams Foods",
    campaign: "Williams Bowl — NFL Season Sweepstakes",
    heroStat: "6,020",
    heroStatLabel: "entries on $1.5K budget",
    year: "2021",
    categories: ["CPG Marketing", "Paid Social"],
    href: "/work/williams-bowl",
    image: "/assets/williams-bowl-banner.jpg",
    highlight: false,
    stats: [
      { label: "Budget", value: "$1.5K", sub: "ad spend" },
      { label: "CPC", value: "$0.16", sub: "vs $0.28 avg" },
      { label: "New Likes", value: "872", sub: "Facebook" },
    ],
  },
  {
    client: "Pioneer",
    campaign: "Paid Media & ROAS Campaign",
    heroStat: "ROAS",
    heroStatLabel: "performance marketing built around measurable return",
    year: "Ongoing",
    categories: ["Paid Media", "Performance Marketing", "Facebook Ads"],
    href: "/work/pioneer",
    image: "",
    gradientFrom: "#0a0a1a",
    gradientTo: "#060612",
    logo: { src: "/assets/logos/pioneer.png", width: 182, height: 117 },
    highlight: false,
    stats: [
      { label: "CTR", value: "7.03%", sub: "benchmark" },
      { label: "CPC", value: "$0.12", sub: "benchmark" },
      { label: "Platform", value: "Meta", sub: "FB + IG" },
    ],
  },
];

export default function WorkPage() {
  return (
    <>
      <section className="relative bg-beast-black pt-28 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-near-black to-beast-black" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection>
            <p className="section-eyebrow text-beast-pink mb-4">Our Work</p>
            <h1 className="text-display-hero font-display font-extrabold text-white max-w-3xl mb-6">
              Work That Wins.
            </h1>
            <p className="text-body-lead text-gray-300 max-w-2xl">
              Real campaigns. Real clients. Real numbers — every one of these is verified, named, and repeatable.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <WorkGrid caseStudies={caseStudies} />

      <section className="bg-beast-black py-16 lg:py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-display text-4xl font-bold text-white tracking-normal mb-4">
              Ready to Be Our Next Case Study?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Every one of these campaigns started with a simple conversation. Let&apos;s have yours.
            </p>
            <IconButton href="https://calendar.app.google/9q1mcYgEdXNyjK8G6" icon="calendar" target="_blank" rel="noopener noreferrer">See Where You Stand in AI Search</IconButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
