/**
 * Qualification.gs — deterministic v1.1 scoring engine.
 *
 * This is the SINGLE source of truth for the route. It is deterministic,
 * configurable (thresholds live in the Settings tab), auditable (returns score,
 * per-category breakdown, reasons, flags, version), and never influenced by AI.
 * See docs/beast-growth-assessment-v1.1-completion/02-qualification-engine.md.
 *
 * Returns: { route, score, categoryScores, reasons, flags, version }
 */

function numSetting_(key, fallback) {
  var v = setting_(key, fallback);
  var n = Number(v);
  return isNaN(n) ? fallback : n;
}

var PRIORITY_VERTICALS = ['Ecommerce / DTC', 'B2B / SaaS', 'CPG / Consumer Brand'];
var ESTABLISHED_STAGES = ['Growing', 'Established', 'Enterprise'];

function qualify_(d) {
  var version = String(setting_('qualification_version', '1.1.0'));
  var reasons = [];
  var flags = [];

  var cat = {
    strategic_need: scoreStrategicNeed_(d, reasons),
    investment: scoreInvestment_(d, reasons),
    timing: scoreTiming_(d, reasons),
    decision: scoreDecision_(d, reasons),
    business_fit: scoreBusinessFit_(d, reasons),
    engagement: scoreEngagement_(d, reasons)
  };
  var score = cat.strategic_need + cat.investment + cat.timing + cat.decision + cat.business_fit + cat.engagement;

  var hardReview = hardManualReview_(d, flags);
  var route = routeFromScore_(d, score, cat, hardReview, reasons);

  return { route: route, score: score, categoryScores: cat, reasons: reasons, flags: flags, version: version };
}

/* ── Category scorers (each pushes an internal reason) ─────────────── */

function scoreStrategicNeed_(d, reasons) {
  var challenge = String(d.biggest_challenge || '');
  var desired = String(d.desired_result || '');
  var goals = Array.isArray(d.primary_goals) ? d.primary_goals : [];
  var hasNumber = /\d/.test(challenge);
  var pts;
  if (!challenge) pts = 0;
  else if (challenge.length >= 80 || (hasNumber && challenge.length >= 40)) pts = 20;
  else if (challenge.length >= 50) pts = 14;
  else if (challenge.length >= 30) pts = 10;
  else pts = 5;
  if (goals.length >= 2 && desired.length >= 40) pts += 5;
  pts = Math.min(25, pts);
  reasons.push('Strategic need ' + pts + '/25 (' + (pts >= 20 ? 'clear, specific constraint' : pts >= 10 ? 'moderate clarity' : 'thin/unclear') + ')');
  return pts;
}

var INVESTMENT_POINTS = {
  '$50K+ / mo': 25, '$25K – $50K / mo': 25, '$10K – $25K / mo': 22,
  '$5K – $10K / mo': 15, '$2K – $5K / mo': 8, 'Under $2K / mo': 0, 'Not sure yet': 4
};

function scoreInvestment_(d, reasons) {
  var pts = INVESTMENT_POINTS[d.potential_monthly_investment];
  if (pts === undefined) pts = 0;
  // Current investment adds up to 3 confidence points, capped at 25.
  var cur = INVESTMENT_POINTS[d.current_monthly_investment] || 0;
  if (cur >= 15) pts += 3; else if (cur >= 8) pts += 2;
  pts = Math.min(25, pts);
  reasons.push('Investment readiness ' + pts + '/25 (potential ' + (d.potential_monthly_investment || 'unknown') + ')');
  return pts;
}

var TIMING_POINTS = { 'ASAP / this month': 15, '1 – 3 months': 13, '3 – 6 months': 8, 'Just exploring': 0 };

function scoreTiming_(d, reasons) {
  var pts = TIMING_POINTS[d.timeline];
  if (pts === undefined) pts = 0;
  reasons.push('Timing ' + pts + '/15 (' + (d.timeline || 'unknown') + ')');
  return pts;
}

var DECISION_POINTS = {
  'I make the decision': 15, "I'm part of the decision": 11,
  'I influence the decision': 6, "I'm researching for someone else": 2
};

function scoreDecision_(d, reasons) {
  var pts = DECISION_POINTS[d.decision_role];
  if (pts === undefined) pts = 0;
  reasons.push('Decision readiness ' + pts + '/15 (' + (d.decision_role || 'unknown') + ')');
  return pts;
}

function scoreBusinessFit_(d, reasons) {
  var stage = d.company_stage || '';
  var vertical = PRIORITY_VERTICALS.indexOf(d.company_type) !== -1;
  var hasSite = !!(d.company_website && String(d.company_website).length > 3);
  var pts;
  if (ESTABLISHED_STAGES.indexOf(stage) !== -1) pts = hasSite ? 12 : 9;
  else if (stage === 'Early-stage') pts = 8;
  else pts = 4; // Just launched / unknown
  if (vertical) pts += 3;
  pts = Math.min(15, pts);
  reasons.push('Business fit ' + pts + '/15 (' + (stage || 'unknown') + (vertical ? ', priority vertical' : '') + ')');
  return pts;
}

function scoreEngagement_(d, reasons) {
  var challenge = String(d.biggest_challenge || '');
  var desired = String(d.desired_result || '');
  var extra = String(d.additional_context || '');
  var total = challenge.length + desired.length + extra.length;
  var pts;
  if (challenge && challenge === desired) pts = 1; // copy-paste
  else if (total >= 200) pts = 5;
  else if (total >= 80) pts = 3;
  else if (total >= 20) pts = 1;
  else pts = 0;
  reasons.push('Engagement ' + pts + '/5');
  return pts;
}

/* ── Hard manual-review gates (run regardless of score) ────────────── */
function hardManualReview_(d, flags) {
  var flagged = false;
  // Missing a required scoring input (should not happen post-validation).
  if (!d.potential_monthly_investment || !d.decision_role || !d.annual_revenue_range) {
    flags.push('missing_required_scoring_input'); flagged = true;
  }
  // Obvious contradiction: very early stage but very high revenue.
  var early = d.company_stage === 'Just launched' || d.company_stage === 'Early-stage';
  if (early && (d.annual_revenue_range === '$25M+' || d.annual_revenue_range === '$5M – $25M')) {
    flags.push('stage_revenue_contradiction'); flagged = true;
  }
  // Large opportunity with unclear budget → human should handle.
  if (d.potential_monthly_investment === 'Not sure yet' && d.annual_revenue_range === '$25M+') {
    flags.push('large_opportunity_unclear_budget'); flagged = true;
  }
  return flagged;
}

/* ── Route decision ───────────────────────────────────────────────── */
function routeFromScore_(d, score, cat, hardReview, reasons) {
  var priMin = numSetting_('priority_score_min', 80);
  var qMin = numSetting_('qualified_score_min', 60);
  var mMin = numSetting_('manual_review_score_min', 45);
  var minPriInv = numSetting_('min_priority_investment_points', 15);
  var minPriDec = numSetting_('min_priority_decision_points', 11);
  var minPriTim = numSetting_('min_priority_timing_points', 8);
  var minQInv = numSetting_('min_qualified_investment_points', 8);
  var minNeed = numSetting_('min_clear_need_points', 12);

  if (hardReview) { reasons.push('Routed to manual review by a hard gate'); return 'manual_review'; }

  // Practical-minimum + exploring nurture gates.
  if (d.potential_monthly_investment === 'Under $2K / mo') {
    reasons.push('Nurture: potential investment below practical minimum'); return 'nurture';
  }
  if (d.timeline === 'Just exploring' && !(cat.investment >= minPriInv && cat.decision >= minPriDec)) {
    reasons.push('Nurture: exploring timeline without strong budget and authority'); return 'nurture';
  }

  var priorityGates = cat.investment >= minPriInv && cat.timing >= minPriTim && cat.decision >= minPriDec;
  if (score >= priMin && priorityGates) {
    reasons.push('Priority qualified: score ' + score + ' with all priority gates met'); return 'priority_qualified';
  }
  if (score >= priMin) reasons.push('Score ' + score + ' but missed a priority gate; routed to qualified');

  if (score >= qMin && cat.investment >= minQInv && cat.strategic_need >= minNeed) {
    reasons.push('Qualified: score ' + score + ', adequate budget and clear need'); return 'qualified';
  }
  if (score >= mMin) { reasons.push('Manual review: score ' + score + ' in review band'); return 'manual_review'; }

  reasons.push('Nurture: score ' + score + ' below review threshold'); return 'nurture';
}
