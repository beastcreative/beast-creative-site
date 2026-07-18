"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { captureAttribution, getAttribution, pushEvent } from "@/lib/analytics";
import {
  assessmentSchema,
  ROUTE_COPY,
  COMPANY_TYPES,
  COMPANY_STAGES,
  REVENUE_RANGES,
  PRIMARY_GOALS,
  MARKETING_CHANNELS,
  INVESTMENT_RANGES,
  POTENTIAL_INVESTMENT,
  TIMELINES,
  DECISION_ROLES,
  AGENCY_STATUS,
  type AssessmentData,
  type QualificationRoute,
} from "@/lib/growth-assessment";

type Data = Partial<AssessmentData>;
type Errors = Record<string, string>;

const STEP_FIELDS: (keyof AssessmentData)[][] = [
  ["first_name", "last_name", "work_email", "company_name", "company_website"],
  ["company_type", "company_stage", "annual_revenue_range"],
  ["primary_goals", "biggest_challenge", "desired_result"],
  ["current_marketing", "current_monthly_investment", "potential_monthly_investment", "timeline"],
  ["decision_role", "speaking_with_agencies", "consent"],
];
const STEP_TITLES = ["Contact & Company", "Business Context", "Goal & Challenge", "Marketing & Readiness", "Decision Readiness"];
const TOTAL = 5;

/* ── field primitives (Ledger-styled, accessible) ─────────────────── */
function FieldWrap({ label, htmlFor, error, required, children }: { label: string; htmlFor?: string; error?: string; required?: boolean; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="led-label mb-2 block text-beast-black">
        {label} {required && <span className="text-beast-pink">*</span>}
      </label>
      {children}
      {error && <p role="alert" className="mt-1.5 text-xs font-medium text-beast-pink">{error}</p>}
    </div>
  );
}

function Text({ id, label, value, onChange, error, required, type = "text", placeholder }: { id: string; label: string; value?: string; onChange: (v: string) => void; error?: string; required?: boolean; type?: string; placeholder?: string }) {
  return (
    <FieldWrap label={label} htmlFor={id} error={error} required={required}>
      <input id={id} type={type} value={value || ""} placeholder={placeholder} aria-invalid={!!error}
        onChange={(e) => onChange(e.target.value)} className="form-input-light" />
    </FieldWrap>
  );
}

function Select({ id, label, value, options, onChange, error, required, placeholder = "Select one" }: { id: string; label: string; value?: string; options: readonly string[]; onChange: (v: string) => void; error?: string; required?: boolean; placeholder?: string }) {
  return (
    <FieldWrap label={label} htmlFor={id} error={error} required={required}>
      <select id={id} value={value || ""} aria-invalid={!!error} onChange={(e) => onChange(e.target.value)} className="form-input-light">
        <option value="" disabled>{placeholder}</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </FieldWrap>
  );
}

function Textarea({ id, label, value, onChange, error, required, placeholder }: { id: string; label: string; value?: string; onChange: (v: string) => void; error?: string; required?: boolean; placeholder?: string }) {
  return (
    <FieldWrap label={label} htmlFor={id} error={error} required={required}>
      <textarea id={id} rows={3} value={value || ""} placeholder={placeholder} aria-invalid={!!error}
        onChange={(e) => onChange(e.target.value)} className="form-input-light resize-none" />
    </FieldWrap>
  );
}

function MultiCheck({ label, options, values, onToggle, error, required, max }: { label: string; options: readonly string[]; values: string[]; onToggle: (v: string) => void; error?: string; required?: boolean; max?: number }) {
  return (
    <FieldWrap label={max ? `${label} (up to ${max})` : label} error={error} required={required}>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {options.map((o) => {
          const on = values.includes(o);
          const disabled = !!max && !on && values.length >= max;
          return (
            <button key={o} type="button" disabled={disabled} onClick={() => onToggle(o)}
              className={`flex items-center gap-2.5 rounded-lg border px-3 py-2.5 text-left text-sm transition-colors ${on ? "border-beast-pink bg-beast-pink/5 text-beast-black" : "border-black/12 text-black/70 hover:border-black/30"} ${disabled ? "cursor-not-allowed opacity-40" : ""}`}>
              <span className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border ${on ? "border-beast-pink bg-beast-pink text-white" : "border-black/25"}`}>{on && "✓"}</span>
              {o}
            </button>
          );
        })}
      </div>
    </FieldWrap>
  );
}

function Radio({ label, options, value, onChange, error, required }: { label: string; options: readonly string[]; value?: string; onChange: (v: string) => void; error?: string; required?: boolean }) {
  return (
    <FieldWrap label={label} error={error} required={required}>
      <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
        {options.map((o) => (
          <button key={o} type="button" onClick={() => onChange(o)}
            className={`rounded-lg border px-4 py-2.5 text-sm transition-colors ${value === o ? "border-beast-pink bg-beast-pink/5 text-beast-black" : "border-black/12 text-black/70 hover:border-black/30"}`}>
            {o}
          </button>
        ))}
      </div>
    </FieldWrap>
  );
}

/* ── main form ────────────────────────────────────────────────────── */
export default function AssessmentForm({ assessmentType = "general" }: { assessmentType?: string }) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<Data>({ primary_goals: [], current_marketing: [] });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");
  const [result, setResult] = useState<{ route: QualificationRoute; bookingUrl?: string; message?: string } | null>(null);
  const startedAt = useRef<number>(0);
  const interacted = useRef(false);

  useEffect(() => {
    captureAttribution();
    startedAt.current = Date.now();
    pushEvent("growth_assessment_view", { assessment_type: assessmentType });
  }, [assessmentType]);

  const set = <K extends keyof AssessmentData>(k: K, v: AssessmentData[K]) => {
    if (!interacted.current) {
      interacted.current = true;
      pushEvent("growth_assessment_start", { assessment_type: assessmentType });
    }
    setData((d) => ({ ...d, [k]: v }));
    setErrors((e) => ({ ...e, [k]: "" }));
  };
  const toggle = (k: "primary_goals" | "current_marketing", v: string, max?: number) => {
    const cur = (data[k] as string[]) || [];
    const next = cur.includes(v) ? cur.filter((x) => x !== v) : max && cur.length >= max ? cur : [...cur, v];
    set(k, next as AssessmentData[typeof k]);
  };

  const validateStep = (s: number): boolean => {
    const fields = STEP_FIELDS[s - 1];
    const res = assessmentSchema.safeParse({ ...data, website: data.website ?? "" });
    const next: Errors = {};
    if (!res.success) {
      for (const issue of res.error.issues) {
        const key = issue.path[0] as keyof AssessmentData;
        if (fields.includes(key) && !next[key as string]) next[key as string] = issue.message;
      }
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const nextStep = () => {
    if (!validateStep(step)) return;
    pushEvent("growth_assessment_step_complete", { step, assessment_type: assessmentType });
    setStep((s) => Math.min(TOTAL, s + 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const prevStep = () => setStep((s) => Math.max(1, s - 1));

  const submit = async () => {
    if (!validateStep(5)) return;
    setStatus("submitting");
    const payload = {
      ...data,
      assessment_type: assessmentType,
      submission_timestamp: new Date().toISOString(),
      elapsed_ms: Date.now() - startedAt.current,
      ...getAttribution(),
    };
    pushEvent("growth_assessment_submit", { assessment_type: assessmentType });
    try {
      const res = await fetch("/api/growth-assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok || !json.success) throw new Error(json?.error || "submit failed");
      const route: QualificationRoute = json.route || "manual_review";
      setResult({ route, bookingUrl: json.bookingUrl, message: json.message });
      setStatus("done");
      const evt =
        route === "priority_qualified" || route === "qualified"
          ? "growth_assessment_scheduler_open"
          : route === "nurture"
          ? "growth_assessment_nurture"
          : "growth_assessment_manual_review";
      pushEvent(evt, { route, assessment_type: assessmentType });
    } catch {
      setStatus("error");
    }
  };

  const progress = useMemo(() => Math.round(((step - 1) / TOTAL) * 100), [step]);

  /* ── result states ── */
  if (status === "done" && result) {
    const showBooking = result.route === "qualified" || result.route === "priority_qualified";
    const copy = ROUTE_COPY[result.route as Exclude<QualificationRoute, "spam">] ?? ROUTE_COPY.manual_review;
    return (
      <div className="rounded-2xl border border-black/10 bg-white p-8 shadow-[0_5px_15px_rgba(0,0,0,0.05)] lg:p-10">
        <span className="led-label text-beast-pink">Assessment received</span>
        <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-tight text-beast-black lg:text-4xl">{copy.heading}</h2>
        <p className="mt-4 max-w-xl leading-relaxed text-black/65">{copy.body}</p>
        {showBooking && result.bookingUrl && (
          <a href={result.bookingUrl} target="_blank" rel="noopener noreferrer"
            onClick={() => pushEvent("calendar_open", { cta_location: "assessment_result", route: result.route })}
            className="btn-primary mt-7 inline-flex">Book Your Growth Diagnostic →</a>
        )}
        {result.route === "nurture" && (
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="/work" className="btn-light">See the Work</a>
            <a href="/blog" className="btn-ghost-pink text-sm">Read the Insights →</a>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_5px_15px_rgba(0,0,0,0.05)] sm:p-8 lg:p-10">
      {/* honeypot */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true"
        value={data.website || ""} onChange={(e) => setData((d) => ({ ...d, website: e.target.value }))}
        className="absolute -left-[9999px] h-0 w-0 opacity-0" />

      {/* progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <span className="led-label text-beast-pink">Step {step} of {TOTAL}</span>
          <span className="led-label text-black/40">{STEP_TITLES[step - 1]}</span>
        </div>
        <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-black/10">
          <div className="h-full bg-beast-pink transition-all duration-500" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="space-y-5">
        {step === 1 && (
          <>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Text id="first_name" label="First name" value={data.first_name} onChange={(v) => set("first_name", v)} error={errors.first_name} required />
              <Text id="last_name" label="Last name" value={data.last_name} onChange={(v) => set("last_name", v)} error={errors.last_name} required />
            </div>
            <Text id="work_email" label="Work email" type="email" value={data.work_email} onChange={(v) => set("work_email", v)} error={errors.work_email} required />
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Text id="company_name" label="Company" value={data.company_name} onChange={(v) => set("company_name", v)} error={errors.company_name} required />
              <Text id="company_website" label="Website" value={data.company_website} onChange={(v) => set("company_website", v)} error={errors.company_website} required placeholder="yourcompany.com" />
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Text id="phone" label="Phone (optional)" value={data.phone} onChange={(v) => set("phone", v)} />
              <Text id="job_title" label="Job title (optional)" value={data.job_title} onChange={(v) => set("job_title", v)} />
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <Select id="company_type" label="Company type" value={data.company_type} options={COMPANY_TYPES} onChange={(v) => set("company_type", v as AssessmentData["company_type"])} error={errors.company_type} required />
            <Select id="company_stage" label="Company stage" value={data.company_stage} options={COMPANY_STAGES} onChange={(v) => set("company_stage", v as AssessmentData["company_stage"])} error={errors.company_stage} required />
            <Select id="annual_revenue_range" label="Annual revenue" value={data.annual_revenue_range} options={REVENUE_RANGES} onChange={(v) => set("annual_revenue_range", v as AssessmentData["annual_revenue_range"])} error={errors.annual_revenue_range} required />
          </>
        )}
        {step === 3 && (
          <>
            <MultiCheck label="Primary goals" options={PRIMARY_GOALS} values={(data.primary_goals as string[]) || []} onToggle={(v) => toggle("primary_goals", v, 3)} error={errors.primary_goals} required max={3} />
            <Textarea id="biggest_challenge" label="Biggest challenge right now" value={data.biggest_challenge} onChange={(v) => set("biggest_challenge", v)} error={errors.biggest_challenge} required placeholder="What's actually holding growth back?" />
            <Textarea id="desired_result" label="Desired business result" value={data.desired_result} onChange={(v) => set("desired_result", v)} error={errors.desired_result} required placeholder="What would success look like?" />
          </>
        )}
        {step === 4 && (
          <>
            <MultiCheck label="Current marketing" options={MARKETING_CHANNELS} values={(data.current_marketing as string[]) || []} onToggle={(v) => toggle("current_marketing", v)} error={errors.current_marketing} />
            <Select id="current_monthly_investment" label="Current monthly marketing investment" value={data.current_monthly_investment} options={INVESTMENT_RANGES} onChange={(v) => set("current_monthly_investment", v as AssessmentData["current_monthly_investment"])} error={errors.current_monthly_investment} required />
            <Select id="potential_monthly_investment" label="Potential monthly investment" value={data.potential_monthly_investment} options={POTENTIAL_INVESTMENT} onChange={(v) => set("potential_monthly_investment", v as AssessmentData["potential_monthly_investment"])} error={errors.potential_monthly_investment} required />
            <Radio label="Timeline" options={TIMELINES} value={data.timeline} onChange={(v) => set("timeline", v as AssessmentData["timeline"])} error={errors.timeline} required />
          </>
        )}
        {step === 5 && (
          <>
            <Radio label="Your role in the decision" options={DECISION_ROLES} value={data.decision_role} onChange={(v) => set("decision_role", v as AssessmentData["decision_role"])} error={errors.decision_role} required />
            <Radio label="Talking with other agencies?" options={AGENCY_STATUS} value={data.speaking_with_agencies} onChange={(v) => set("speaking_with_agencies", v as AssessmentData["speaking_with_agencies"])} error={errors.speaking_with_agencies} required />
            <Text id="other_stakeholders" label="Other stakeholders (optional)" value={data.other_stakeholders} onChange={(v) => set("other_stakeholders", v)} />
            <Textarea id="additional_context" label="Anything else we should know? (optional)" value={data.additional_context} onChange={(v) => set("additional_context", v)} />
            <label className="flex items-start gap-3 pt-1">
              <input type="checkbox" checked={!!data.consent} onChange={(e) => set("consent", e.target.checked as AssessmentData["consent"])}
                className="mt-0.5 h-5 w-5 shrink-0 accent-beast-pink" />
              <span className="text-sm leading-relaxed text-black/65">
                I agree to be contacted by Beast Creative about my growth assessment and consent to my information being handled per the{" "}
                <a href="/privacy" className="text-beast-pink underline">privacy policy</a>.
              </span>
            </label>
            {errors.consent && <p role="alert" className="text-xs font-medium text-beast-pink">{errors.consent}</p>}
          </>
        )}
      </div>

      {status === "error" && (
        <p role="alert" className="mt-6 rounded-lg border border-beast-pink/40 bg-beast-pink/5 px-4 py-3 text-sm text-beast-black">
          Something went wrong sending your assessment. Your answers are saved. Please try again.
        </p>
      )}

      {/* nav */}
      <div className="mt-8 flex items-center justify-between gap-4 border-t led-rule pt-6">
        {step > 1 ? (
          <button type="button" onClick={prevStep} className="btn-ghost-pink text-sm">← Back</button>
        ) : <span />}
        {step < TOTAL ? (
          <button type="button" onClick={nextStep} className="btn-primary">Continue →</button>
        ) : (
          <button type="button" onClick={submit} disabled={status === "submitting"} className="btn-primary">
            {status === "submitting" ? "Sending…" : status === "error" ? "Try Again" : "Submit Assessment"}
          </button>
        )}
      </div>
    </div>
  );
}
