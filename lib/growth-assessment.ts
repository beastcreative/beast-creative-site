/**
 * Beast Growth Assessment — shared data model.
 * Field options, the Zod schema (used client + server), and the qualification
 * routing function (mirrored in apps-script/growth-assessment/Routing.gs so the
 * website fallback and the Apps Script backend agree).
 * See docs/beast-growth-assessment-v1-google/.
 */
import { z } from "zod";

/* ── Field options (labels shown to users; values stored) ─────────── */
export const COMPANY_TYPES = [
  "Ecommerce / DTC",
  "B2B / SaaS",
  "CPG / Consumer Brand",
  "Local / Regional Business",
  "Startup",
  "Other",
] as const;

export const COMPANY_STAGES = [
  "Just launched",
  "Early-stage",
  "Growing",
  "Established",
  "Enterprise",
] as const;

export const REVENUE_RANGES = [
  "Under $500K",
  "$500K – $1M",
  "$1M – $5M",
  "$5M – $25M",
  "$25M+",
  "Prefer not to say",
] as const;

export const PRIMARY_GOALS = [
  "More qualified leads",
  "Higher website conversion",
  "Better paid media ROI",
  "Stronger brand / positioning",
  "More organic & AI search visibility",
  "Launch a product or market",
  "Better measurement & attribution",
  "Retention & repeat revenue",
] as const;

export const MARKETING_CHANNELS = [
  "SEO",
  "Paid search",
  "Paid social",
  "Email / lifecycle",
  "Content",
  "Organic social",
  "Influencer / UGC",
  "Nothing consistent yet",
] as const;

export const INVESTMENT_RANGES = [
  "Under $2K / mo",
  "$2K – $5K / mo",
  "$5K – $10K / mo",
  "$10K – $25K / mo",
  "$25K – $50K / mo",
  "$50K+ / mo",
] as const;

export const POTENTIAL_INVESTMENT = [...INVESTMENT_RANGES, "Not sure yet"] as const;

export const TIMELINES = [
  "ASAP / this month",
  "1 – 3 months",
  "3 – 6 months",
  "Just exploring",
] as const;

export const DECISION_ROLES = [
  "I make the decision",
  "I'm part of the decision",
  "I influence the decision",
  "I'm researching for someone else",
] as const;

export const AGENCY_STATUS = ["Yes", "No", "Not yet"] as const;

/* ── Hidden attribution fields ────────────────────────────────────── */
export interface Attribution {
  source_page?: string;
  source_section?: string;
  assessment_type?: string;
  first_landing_page?: string;
  current_page?: string;
  referrer?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
  first_touch_timestamp?: string;
  submission_timestamp?: string;
}

/* ── Zod schema (client + server) ─────────────────────────────────── */
export const assessmentSchema = z.object({
  // Step 1
  first_name: z.string().min(1, "Required").max(80),
  last_name: z.string().min(1, "Required").max(80),
  work_email: z.string().email("Enter a valid email").max(254),
  company_name: z.string().min(1, "Required").max(160),
  company_website: z.string().min(1, "Required").max(200),
  phone: z.string().max(40).optional().or(z.literal("")),
  job_title: z.string().max(120).optional().or(z.literal("")),
  // Step 2
  company_type: z.enum(COMPANY_TYPES),
  company_stage: z.enum(COMPANY_STAGES),
  annual_revenue_range: z.enum(REVENUE_RANGES),
  // Step 3
  primary_goals: z.array(z.enum(PRIMARY_GOALS)).min(1, "Pick at least one").max(3, "Pick up to three"),
  biggest_challenge: z.string().min(1, "Required").max(600),
  desired_result: z.string().min(1, "Required").max(600),
  // Step 4
  current_marketing: z.array(z.enum(MARKETING_CHANNELS)).max(MARKETING_CHANNELS.length),
  current_monthly_investment: z.enum(INVESTMENT_RANGES),
  potential_monthly_investment: z.enum(POTENTIAL_INVESTMENT),
  timeline: z.enum(TIMELINES),
  // Step 5
  decision_role: z.enum(DECISION_ROLES),
  other_stakeholders: z.string().max(300).optional().or(z.literal("")),
  speaking_with_agencies: z.enum(AGENCY_STATUS),
  additional_context: z.string().max(1200).optional().or(z.literal("")),
  consent: z.literal(true, { message: "Please confirm to continue" }),
  // anti-spam
  website: z.string().max(0).optional().or(z.literal("")), // honeypot: must be empty
});

export type AssessmentData = z.infer<typeof assessmentSchema>;

export type QualificationRoute =
  | "priority_qualified"
  | "qualified"
  | "manual_review"
  | "nurture"
  | "spam";

const HIGH_INVESTMENT = new Set([
  "$5K – $10K / mo",
  "$10K – $25K / mo",
  "$25K – $50K / mo",
  "$50K+ / mo",
]);
const NEAR_TERM = new Set(["ASAP / this month", "1 – 3 months"]);
const ESTABLISHED_STAGE = new Set(["Growing", "Established", "Enterprise"]);

/**
 * Qualification routing. Kept intentionally simple + tunable. Mirrored in
 * Routing.gs; Apps Script is the source of truth in production, this runs in the
 * website fallback when Apps Script isn't wired yet. Thresholds move to the
 * Sheet's Settings tab later so they can change without a redeploy.
 */
export function computeRoute(d: Partial<AssessmentData>): QualificationRoute {
  if (d.website) return "spam";

  const potential = d.potential_monthly_investment || "";
  const timeline = d.timeline || "";
  const exploring = timeline === "Just exploring";
  const lowBudget = potential === "Under $2K / mo";

  if (lowBudget || (exploring && !HIGH_INVESTMENT.has(potential))) return "nurture";

  const decides = d.decision_role === "I make the decision" || d.decision_role === "I'm part of the decision";
  const nearTerm = NEAR_TERM.has(timeline);
  const goodBudget = HIGH_INVESTMENT.has(potential);
  const established = ESTABLISHED_STAGE.has(d.company_stage || "");

  if (decides && nearTerm && goodBudget && established) return "priority_qualified";
  if (decides && (nearTerm || goodBudget)) return "qualified";
  return "manual_review";
}

/** Public copy per route (safe to show; no internal scoring). */
export const ROUTE_COPY: Record<Exclude<QualificationRoute, "spam">, { heading: string; body: string }> = {
  priority_qualified: {
    heading: "You're a strong fit. Let's talk.",
    body: "Your Growth Assessment request is a priority fit for the next step. Choose a time below and we'll come prepared.",
  },
  qualified: {
    heading: "This is a fit. Choose a time.",
    body: "Your Growth Assessment request is a fit for the next step. Pick a time below and we'll review your goals, channels, and the most likely constraint.",
  },
  manual_review: {
    heading: "We've got your assessment.",
    body: "A member of the Beast team will review your information and follow up with the most useful next step.",
  },
  nurture: {
    heading: "Thanks for sharing.",
    body: "A full Growth Assessment may not be the best next step for you yet. We'll point you toward the most useful resources and keep the door open as your needs change.",
  },
};
