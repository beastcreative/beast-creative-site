"use client";

import { useState } from "react";
import AssessmentForm from "@/components/growth-assessment/AssessmentForm";
import { ROUTE_COPY, type QualificationRoute } from "@/lib/growth-assessment";
import { pushEvent } from "@/lib/analytics";

type Done = { route: QualificationRoute; bookingUrl?: string; message?: string; firstName?: string };

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="led-label inline-flex items-center gap-2.5 text-beast-pink">
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

export default function AssessmentExperience({ assessmentType }: { assessmentType: string }) {
  const [done, setDone] = useState<Done | null>(null);

  if (done) return <ResultScreen {...done} />;

  /* ── intake layout ── */
  return (
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
            Find the Constraint <span>Slowing Your Growth.</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-black/65">
            This is not a generic agency intro call. Tell us your goals, your channels, and where growth feels stuck. We review it first, then show you the most useful next step. No pitch, no pressure.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
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

          <div>
            <AssessmentForm assessmentType={assessmentType} onComplete={setDone} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── clean, centered result screen ── */
function ResultScreen({ route, bookingUrl, firstName }: Done) {
  const showBooking = route === "qualified" || route === "priority_qualified";
  const copy = ROUTE_COPY[route as Exclude<QualificationRoute, "spam">] ?? ROUTE_COPY.manual_review;
  const name = firstName ? `${firstName}, ` : "";
  const nextCopy = showBooking
    ? "You're a strong fit. Book your 30-minute Growth Diagnostic below. No pitch, just a working session on your growth."
    : route === "nurture"
      ? "We'll point you to the most useful resources for where your business is right now, and keep the door open as things grow."
      : "If Beast is the right fit, you'll get an email to book your 30-minute Growth Diagnostic. If not, we'll point you to the most useful next step.";

  return (
    <section className="relative flex min-h-[82vh] items-center overflow-hidden bg-off-white">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{ background: "radial-gradient(55% 45% at 85% 8%, rgba(255,17,152,0.08) 0%, transparent 60%), radial-gradient(45% 40% at 8% 92%, rgba(255,255,0,0.12) 0%, transparent 60%)" }}
      />
      <div className="relative mx-auto w-full max-w-3xl px-6 py-24 text-center">
        <span className="led-label text-beast-pink">Assessment Received</span>
        <h1 className="mt-6 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-beast-black sm:text-5xl lg:text-6xl">
          We're Analyzing <span>Your Growth.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-black/65">
          Our team is reviewing where growth is really stuck for your business, before we ever get on a call.
        </p>

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-6 text-left sm:grid-cols-2">
          <div className="border-t led-rule pt-4">
            <p className="led-label text-beast-black">What we're looking at</p>
            <p className="mt-2 text-sm leading-relaxed text-black/60">
              Your goals, your channels, and the single biggest constraint holding growth back.
            </p>
          </div>
          <div className="border-t led-rule pt-4">
            <p className="led-label text-beast-black">What happens next</p>
            <p className="mt-2 text-sm leading-relaxed text-black/60">{nextCopy}</p>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-black/10 bg-white p-8 text-left shadow-[0_5px_15px_rgba(0,0,0,0.06)]">
          <h2 className="font-display text-2xl font-bold uppercase leading-tight text-beast-black">
            {name}we've got your assessment.
          </h2>
          <p className="mt-3 leading-relaxed text-black/65">{copy.body}</p>
          {showBooking && bookingUrl && (
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => pushEvent("calendar_open", { cta_location: "assessment_result", route })}
              className="btn-primary mt-6 inline-flex"
            >
              Book Your Growth Diagnostic →
            </a>
          )}
        </div>

        <div className="mt-10">
          <a href="/work" className="btn-ghost-pink text-sm">See the work Beast has done →</a>
        </div>
      </div>
    </section>
  );
}
