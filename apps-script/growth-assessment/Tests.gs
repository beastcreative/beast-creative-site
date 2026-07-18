/**
 * Tests.gs — lightweight assertions for qualification routes + brief quality.
 * Run from the editor (runTests) or via the secret-gated {runTests:true} endpoint.
 * No external dependencies; generates a mock brief so it never needs an API key.
 */

function testLead_(over) {
  var base = {
    first_name: 'Test', last_name: 'Lead', work_email: 't@example.com',
    company_name: 'Test Co', company_website: 'example.com', company_type: 'Ecommerce / DTC',
    company_stage: 'Established', annual_revenue_range: '$1M – $5M',
    primary_goals: ['More qualified leads'], biggest_challenge: 'Short.', desired_result: 'More.',
    current_marketing: ['SEO'], current_monthly_investment: '$5K – $10K / mo',
    potential_monthly_investment: '$10K – $25K / mo', timeline: '1 – 3 months',
    decision_role: 'I make the decision', speaking_with_agencies: 'No', website: ''
  };
  for (var k in over) base[k] = over[k];
  return base;
}

var TEST_CASES = [
  { name: 'priority', expect: 'priority_qualified', lead: {
    biggest_challenge: 'Meta CAC doubled in 12 months and email revenue is flat; blended ROAS fell 3.1 to 1.8.',
    desired_result: 'Blended ROAS back above 3 and email to 30% of revenue in two quarters',
    primary_goals: ['Better paid media ROI', 'Higher website conversion'],
    potential_monthly_investment: '$25K – $50K / mo', timeline: 'ASAP / this month', decision_role: 'I make the decision'
  }},
  { name: 'qualified', expect: 'qualified', lead: {
    biggest_challenge: 'Our inbound leads are low quality and sales is frustrated with SQL volume every month.',
    primary_goals: ['More qualified leads'], company_type: 'B2B / SaaS', company_stage: 'Growing',
    potential_monthly_investment: '$10K – $25K / mo', timeline: '1 – 3 months', decision_role: 'I influence the decision'
  }},
  { name: 'manual_review', expect: 'manual_review', lead: {
    biggest_challenge: 'We need more awareness in our region.', company_type: 'Local / Regional Business',
    company_stage: 'Early-stage', potential_monthly_investment: '$5K – $10K / mo', timeline: '3 – 6 months',
    decision_role: 'I influence the decision'
  }},
  { name: 'nurture', expect: 'nurture', lead: {
    potential_monthly_investment: 'Under $2K / mo', timeline: 'Just exploring', company_stage: 'Just launched'
  }},
  { name: 'hard_gate', expect: 'manual_review', lead: {
    company_stage: 'Just launched', annual_revenue_range: '$25M+',
    potential_monthly_investment: '$25K – $50K / mo', timeline: 'ASAP / this month'
  }}
];

function runTests() { return runTests_(); }

function runTests_() {
  var results = [];
  var pass = 0, fail = 0;

  TEST_CASES.forEach(function (tc) {
    var q = qualify_(testLead_(tc.lead));
    var ok = q.route === tc.expect;
    if (ok) pass++; else fail++;
    results.push({ test: 'route:' + tc.name, ok: ok, got: q.route, want: tc.expect, score: q.score });
  });

  // Brief quality: generate a mock brief and assert no forbidden tokens.
  FORCE_MOCK = true;
  var q2 = qualify_(testLead_(TEST_CASES[0].lead));
  var url = createInternalBrief_(testLead_(TEST_CASES[0].lead), q2, { assessmentId: 'TEST', leadId: 'TEST' });
  var scan = scanBriefDoc_(url);
  FORCE_MOCK = false;
  if (scan.clean) pass++; else fail++;
  results.push({ test: 'brief:no_placeholders', ok: !!scan.clean, found: scan.found || scan.error || [], url: url });

  var summary = { passed: pass, failed: fail, total: pass + fail, results: results };
  Logger.log(JSON.stringify(summary, null, 2));
  return summary;
}

/**
 * testAI() — run from the editor to (1) trigger the external-service auth prompt
 * and (2) confirm live Claude enrichment. Uses a sample lead; logs the result.
 */
function testAI() {
  var d = testLead_(TEST_CASES[0].lead);
  d.company_name = 'NorthPeak Athletics';
  var q = qualify_(d);
  var site = fetchWebsite_(d.company_website);   // UrlFetchApp -> triggers the scope prompt
  var ai = enrichBrief_(d, q, site);
  var out = ai
    ? { model: ai._model, observations: ai.observations, likely_constraint: ai.likely_constraint,
        question_count: (ai.questions || []).length, research_count: (ai.research || []).length }
    : { ai: null, note: 'Enrichment returned null. Check ANTHROPIC_API_KEY, ai_model, and the Audit Log tab.' };
  Logger.log(JSON.stringify(out, null, 2));
  return out;
}

/** Raw Anthropic ping to surface the exact HTTP status/body (secret-gated endpoint). */
function testAIRaw_() {
  var key = prop_('ANTHROPIC_API_KEY');
  if (!key) return { error: 'no_key' };
  var model = String(setting_('ai_model', 'claude-opus-4-8'));
  try {
    var res = UrlFetchApp.fetch('https://api.anthropic.com/v1/messages', {
      method: 'post', contentType: 'application/json',
      headers: { 'x-api-key': key, 'anthropic-version': '2023-06-01' },
      payload: JSON.stringify({ model: model, max_tokens: 50, messages: [{ role: 'user', content: 'Reply with OK.' }] }),
      muteHttpExceptions: true
    });
    return { model: model, http: res.getResponseCode(), body: res.getContentText().slice(0, 400) };
  } catch (e) { return { model: model, error: String(e && e.message || e) }; }
}

/** Secret-gated status report: recent audit rows + brief-processing counts. */
function statusReport_() {
  var audit = readObjects_('Audit Log');
  var recent = audit.slice(-14).map(function (r) { return r.timestamp + ' | ' + r.workflow + ' | ' + r.action + ' | ' + r.result; });
  var asmts = readObjects_('Assessments');
  var pending = asmts.filter(function (a) { return !a.internal_brief_url; }).length;
  var claimed = asmts.filter(function (a) { return a.internal_brief_url === 'generating' || a.internal_brief_url === 'error'; }).length;
  var withBrief = asmts.filter(function (a) { return String(a.internal_brief_url).indexOf('http') === 0; }).length;
  var leads = readObjects_('Leads');
  var last = leads.length ? leads[leads.length - 1] : null;
  var lastLead = last ? {
    company: last.company_name, route: last.qualification_route, score: last.qualification_score,
    scores: last.qualification_scores, reasons: last.qualification_reasons, flags: last.qualification_flags,
    decision_role: last.decision_role, timeline: last.timeline,
    potential_investment: last.potential_monthly_investment, stage: last.company_stage,
    challenge_len: String(last.biggest_challenge || '').length,
    lead_id: last.lead_id, override: last.manual_override, status: last.status
  } : null;
  return { totalAssessments: asmts.length, pending: pending, claimed: claimed, withBrief: withBrief, lastLead: lastLead, recentAudit: recent };
}
