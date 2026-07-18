import type { Metadata } from "next";
import AnalyticsInit from "@/components/landing/AnalyticsInit";
import AssessmentForm from "@/components/growth-assessment/AssessmentForm";

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
const VALID_TYPES = ["general", "ecommerce", "b2b", "cpg", "app", "seo", "paid", "web", "branding", "content"];

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="led-label flex items-center gap-2.5 text-beast-pink">
      <span className="inline-block h-px w-6 bg-black/25" aria-hidden="true" />
      {children}
    </span>
  );
}

const WHAT_HAPPENS = [
  { t: "You share the picture", d: "Five quick steps: your goals, your channels, and where growth feels stuck." },
  { t: "We review it", d: "We look for the real constraint before we ever get on a call, so the time is useful." },
  { t: "You get a next move", d: "If Beast is a fit, you book a 30-minute diagnostic. If not, we point you to the most useful resource." },
];

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
        <section className="relative overflow-hidden bg-off-white">
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
            style={{ background: "radial-gradient(55% 45% at 85% 10%, rgba(255,17,152,0.07) 0%, transparent 60%), radial-gradient(45% 40% at 5% 90%, rgba(255,255,0,0.10) 0%, transparent 60%)" }}
          />
          <span className="led-cross text-black/30" style={{ top: 96, left: 24 }} aria-hidden="true" />
          <div className="relative mx-auto w-full max-w-7xl px-6 pt-28 pb-16 lg:px-20 lg:pt-32 lg:pb-24">
            <div className="max-w-2xl">
              <Label>The Beast Growth Assessment</Label>
              <h1 className="mt-6 font-display text-[2.75rem] font-extrabold uppercase leading-[0.95] tracking-tight text-beast-black sm:text-6xl lg:text-[4.25rem]">
                Find the Constraint <span className="text-beast-pink">Slowing Your Growth.</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-black/65">
                This is not a generic agency intro call. Tell us your goals, your channels, and where growth feels stuck. We review it first, then show you the most useful next step. No pitch, no pressure.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              {/* what happens next */}
              <div>
                <p className="led-label text-beast-black">What happens next</p>
                <ol className="mt-5 border-t led-rule">
                  {WHAT_HAPPENS.map((s, i) => (
                    <li key={i} className="flex items-start gap-4 border-b led-rule py-5">
                      <span className="led-label mt-0.5 text-beast-pink">[{String(i + 1).padStart(2, "0")}]</span>
                      <div>
                        <p className="font-display text-lg font-bold uppercase leading-tight text-beast-black">{s.t}</p>
                        <p className="mt-1.5 text-sm leading-relaxed text-black/60">{s.d}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <p className="mt-6 text-sm leading-relaxed text-black/50">
                  Takes about two minutes. Your answers go straight to the Beast team, not a lead marketplace.
                </p>
              </div>

              {/* the form */}
              <div>
                <AssessmentForm assessmentType={assessmentType} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
