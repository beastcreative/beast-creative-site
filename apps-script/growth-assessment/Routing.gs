/**
 * Routing.gs — qualification routing.
 *
 * This is the PRODUCTION source of truth for routing. It is a byte-for-byte
 * behavioral mirror of computeRoute() in lib/growth-assessment.ts (the website
 * fallback). Keep the two in sync: if you tune thresholds here, tune them there
 * (or move them into the Settings tab and read them in both places).
 *
 * Routes: priority_qualified | qualified | manual_review | nurture | spam
 */

var HIGH_INVESTMENT = ['$5K – $10K / mo', '$10K – $25K / mo', '$25K – $50K / mo', '$50K+ / mo'];
var NEAR_TERM = ['ASAP / this month', '1 – 3 months'];
var ESTABLISHED_STAGE = ['Growing', 'Established', 'Enterprise'];

function inList_(list, v) { return list.indexOf(v) !== -1; }

function computeRoute_(d) {
  if (d.website) return 'spam';

  var potential = d.potential_monthly_investment || '';
  var timeline = d.timeline || '';
  var exploring = timeline === 'Just exploring';
  var lowBudget = potential === 'Under $2K / mo';

  if (lowBudget || (exploring && !inList_(HIGH_INVESTMENT, potential))) return 'nurture';

  var decides = d.decision_role === 'I make the decision' || d.decision_role === "I'm part of the decision";
  var nearTerm = inList_(NEAR_TERM, timeline);
  var goodBudget = inList_(HIGH_INVESTMENT, potential);
  var established = inList_(ESTABLISHED_STAGE, d.company_stage || '');

  if (decides && nearTerm && goodBudget && established) return 'priority_qualified';
  if (decides && (nearTerm || goodBudget)) return 'qualified';
  return 'manual_review';
}

/** Whether a route should be shown the booking page. */
function routeGetsBooking_(route) {
  return route === 'qualified' || route === 'priority_qualified';
}

/** Opportunity stage seeded from the intake route. */
function routeToStage_(route) {
  if (route === 'priority_qualified' || route === 'qualified') return 'Qualification Review';
  if (route === 'manual_review') return 'Qualification Review';
  return 'Nurture';
}

/** Public-safe message per route (no internal scoring). */
function routeMessage_(route) {
  switch (route) {
    case 'priority_qualified':
    case 'qualified':
      return 'Your Growth Assessment request is a fit for the next step. Choose a time below.';
    case 'manual_review':
      return 'We have your information. A member of the Beast team will review it and follow up with the most useful next step.';
    default:
      return 'Thank you for sharing your information. A full Growth Assessment may not be the best next step yet. We will point you toward the most useful resources and keep the door open as your needs change.';
  }
}
