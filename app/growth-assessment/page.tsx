import type { Metadata } from "next";
import AnalyticsInit from "@/components/landing/AnalyticsInit";
import AssessmentExperience from "@/components/growth-assessment/AssessmentExperience";

export const metadata: Metadata = {
  title: "Start Your Growth Assessment | Beast Creative",
  description:
    "Take the Beast Growth Assessment. Tell us your goals, channels, and the constraint slowing growth. If we're a fit, you'll book a Growth Diagnostic; if not, we'll point you to the most useful next step.",
  openGraph: {
    title: "Start Your Growth Assessment | Beast Creative",
    description:
      "A focused review of your goals, channels, and the constraint slowing growth. If Beast is a fit, you'll book a Growth Diagnostic.",
    type: "website",
    url: "https://beastcreativeagency.com/growth-assessment",
  },
  alternates: { canonical: "https://beastcreativeagency.com/growth-assessment" },
};

// Hidden assessment type passed from vertical/service CTAs (?type=…), recorded
// with the lead so Beast can see which page/vertical drove each assessment.
const VALID_TYPES = ["general", "ecommerce", "b2b", "cpg", "app", "seo", "paid", "web", "branding", "content", "work", "blog"];

export default async function GrowthAssessmentPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type } = await searchParams;
  const assessmentType = type && VALID_TYPES.includes(type) ? type : "general";
  return (
    <>
      <AnalyticsInit />
      <div className="ledger bg-off-white text-beast-black">
        <AssessmentExperience assessmentType={assessmentType} />
      </div>
    </>
  );
}
