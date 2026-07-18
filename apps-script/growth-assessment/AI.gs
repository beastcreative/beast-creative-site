/**
 * AI.gs — optional runtime enrichment for the INTERNAL brief only.
 *
 * Never influences the deterministic route (that is decided in Qualification.gs
 * before this runs). Never writes anything the prospect sees. Reads the
 * submission (+ optionally the prospect's homepage) and returns drafted
 * hypotheses for the strategist. Every failure path returns null so the brief
 * falls back cleanly to deterministic content.
 *
 * Requires Script Property ANTHROPIC_API_KEY. Toggle via Settings:
 *   ai_enrichment_enabled (true/false), ai_model, ai_fetch_website (true/false).
 */

/** Fetch + crudely de-tag the prospect homepage so findings can be sourced. */
function fetchWebsite_(url) {
  if (String(setting_('ai_fetch_website', 'true')) !== 'true') return '';
  if (!url) return '';
  var full = String(url).indexOf('http') === 0 ? String(url) : 'https://' + url;
  try {
    var res = UrlFetchApp.fetch(full, { muteHttpExceptions: true, followRedirects: true });
    if (res.getResponseCode() >= 400) return '';
    var html = res.getContentText();
    var title = (html.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1] || '';
    var desc = (html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i) || [])[1] || '';
    var text = html
      .replace(/<script[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style[\s\S]*?<\/style>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/&nbsp;/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    return ('TITLE: ' + title + ' | META: ' + desc + ' | CONTENT: ' + text).slice(0, 6000);
  } catch (e) {
    return '';
  }
}

/**
 * Ask Claude to draft internal prep. Returns a validated object or null.
 * { observations:[...], likely_constraint, questions:[...], quick_win,
 *   strategic_opportunity, research:[{finding,source_url,label}], _model, _at }
 */
function enrichBrief_(d, q, websiteText) {
  if (String(setting_('ai_enrichment_enabled', 'true')) !== 'true') return null;
  if (aiMock_()) return mockEnrichment_(d, q);
  var key = prop_('ANTHROPIC_API_KEY');
  if (!key) return null;
  var model = String(setting_('ai_model', 'claude-opus-4-8'));

  var system =
    'You are a senior B2B growth strategist preparing an INTERNAL pre-call brief for the Beast Creative team. ' +
    'You receive a prospect\'s self-reported growth-assessment answers and, when available, text scraped from their website. ' +
    'Produce concise, senior-level hypotheses to help a strategist prepare for a 30-minute diagnostic call. ' +
    'HARD RULES: Never fabricate facts, metrics, testimonials, clients, or results. ' +
    'Everything you infer is a HYPOTHESIS to validate in the meeting, not a conclusion. ' +
    'Only include a website research finding if it is directly supported by the provided website text, and include its source_url. ' +
    'If website text is empty or unhelpful, return research as an empty array. Never invent research. ' +
    'Respond with ONLY valid minified JSON. No markdown, no prose outside the JSON.';

  var payload = {
    company: d.company_name, website: d.company_website, company_type: d.company_type,
    stage: d.company_stage, revenue: d.annual_revenue_range, goals: d.primary_goals,
    challenge: d.biggest_challenge, desired_result: d.desired_result,
    current_marketing: d.current_marketing, potential_investment: d.potential_monthly_investment,
    timeline: d.timeline, decision_role: d.decision_role, route: q.route,
    website_text: websiteText || ''
  };

  var instruction =
    'Prospect data (JSON):\n' + JSON.stringify(payload) + '\n\n' +
    'Return JSON with exactly these keys:\n' +
    '{"observations":[3 strings, each <200 chars],"likely_constraint":string,' +
    '"questions":[5-8 strings],"quick_win":string,"strategic_opportunity":string,' +
    '"research":[{"finding":string,"source_url":string,"label":"fact"|"inference"}]}';

  var body = {
    model: model,
    max_tokens: 1400,
    system: system,
    messages: [{ role: 'user', content: instruction }]
  };

  try {
    var res = UrlFetchApp.fetch('https://api.anthropic.com/v1/messages', {
      method: 'post',
      contentType: 'application/json',
      headers: { 'x-api-key': key, 'anthropic-version': '2023-06-01' },
      payload: JSON.stringify(body),
      muteHttpExceptions: true
    });
    var code = res.getResponseCode();
    if (code !== 200) {
      logActivity_('ai', d.company_name || '', 'enrich', 'http_' + code, res.getContentText().slice(0, 200));
      return null;
    }
    var j = JSON.parse(res.getContentText());
    var text = (j.content && j.content[0] && j.content[0].text) || '';
    var parsed = extractJson_(text);
    if (!parsed || !Array.isArray(parsed.observations) || !parsed.observations.length) {
      logActivity_('ai', d.company_name || '', 'enrich', 'bad_shape', text.slice(0, 120));
      return null;
    }
    // Normalize + guard fields.
    parsed.observations = (parsed.observations || []).slice(0, 3).map(String);
    parsed.questions = (Array.isArray(parsed.questions) ? parsed.questions : []).slice(0, 8).map(String);
    parsed.research = Array.isArray(parsed.research) ? parsed.research.filter(function (r) {
      return r && r.finding && r.source_url; // sourced findings only
    }).slice(0, 6) : [];
    parsed.likely_constraint = String(parsed.likely_constraint || '');
    parsed.quick_win = String(parsed.quick_win || '');
    parsed.strategic_opportunity = String(parsed.strategic_opportunity || '');
    parsed._model = model;
    parsed._at = nowIso_();
    logActivity_('ai', d.company_name || '', 'enrich', 'ok', model);
    return parsed;
  } catch (e) {
    logActivity_('ai', d.company_name || '', 'enrich', 'error', String(e && e.message || e));
    return null;
  }
}

/**
 * declinePlan_ — 3-4 honest, generous, do-it-yourself growth tips for a declined
 * prospect, tailored to their goal/challenge. Prospect-facing, so kept general
 * and non-fabricated. Falls back to solid deterministic tips if AI is off/fails.
 */
function declinePlan_(d) {
  if (!aiReady_()) return defaultTips_(d);
  if (aiMock_()) return mockTips_(d);
  var key = prop_('ANTHROPIC_API_KEY');
  var model = String(setting_('ai_model', 'claude-opus-4-8'));
  var system =
    'You are a senior growth strategist writing a short, generous, honest self-serve plan for a prospect who is not the right fit for a paid engagement right now. ' +
    'Give 3 to 4 concrete, practical, do-it-yourself growth actions they can start with organic effort and sweat equity, tailored to their stated goal and challenge. ' +
    'Each tip: one sentence, specific and actionable, no fluff, no fabricated stats or promises, no agency pitch. Respond with ONLY JSON: {"tips":["...","..."]}.';
  var payload = {
    goals: d.primary_goals, challenge: d.biggest_challenge, desired_result: d.desired_result,
    company_type: d.company_type, current_marketing: d.current_marketing
  };
  var body = {
    model: model, max_tokens: 500, system: system,
    messages: [{ role: 'user', content: 'Business:\n' + JSON.stringify(payload) + '\n\nReturn {"tips":[3-4 one-sentence self-serve growth actions]}.' }]
  };
  try {
    var res = UrlFetchApp.fetch('https://api.anthropic.com/v1/messages', {
      method: 'post', contentType: 'application/json',
      headers: { 'x-api-key': key, 'anthropic-version': '2023-06-01' },
      payload: JSON.stringify(body), muteHttpExceptions: true
    });
    if (res.getResponseCode() !== 200) { logActivity_('ai', d.company_name || '', 'declinePlan', 'http_' + res.getResponseCode(), ''); return defaultTips_(d); }
    var j = JSON.parse(res.getContentText());
    var text = (j.content && j.content[0] && j.content[0].text) || '';
    var parsed = extractJson_(text);
    if (parsed && Array.isArray(parsed.tips) && parsed.tips.length) return parsed.tips.slice(0, 4).map(String);
    return defaultTips_(d);
  } catch (e) {
    logActivity_('ai', d.company_name || '', 'declinePlan', 'error', String(e && e.message || e));
    return defaultTips_(d);
  }
}

function mockTips_(d) {
  return [
    'Set up your core email flows (welcome, abandoned cart, post-purchase) before spending more on ads.',
    'Pick one channel you can win at organically and post consistently for 90 days.',
    'Fix your top landing page: one clear promise, one clear call to action, proof above the fold.',
    'Track revenue per visitor weekly so you can see what is actually working.'
  ];
}

function defaultTips_(d) {
  var goals = Array.isArray(d.primary_goals) ? d.primary_goals : String(d.primary_goals || '').split('; ');
  var tips = [
    'Pick one channel you can genuinely win at and post consistently for 90 days before adding more.',
    'Fix your top landing page: one clear promise, one clear call to action, and proof near the top.',
    'Track one honest metric each week so you can tell what is actually moving the needle.'
  ];
  if (goals.indexOf('Retention & repeat revenue') !== -1 || goals.indexOf('Higher website conversion') !== -1) {
    tips.push('Set up core lifecycle emails (welcome, abandoned cart, post-purchase) before spending more on acquisition.');
  } else {
    tips.push('Write down the single biggest objection customers have, and answer it clearly everywhere you sell.');
  }
  return tips;
}

/** Best-effort JSON extraction from a model response. */
function extractJson_(text) {
  try { return JSON.parse(text); } catch (e) {}
  var m = String(text).match(/\{[\s\S]*\}/);
  if (m) { try { return JSON.parse(m[0]); } catch (e2) {} }
  return null;
}

/**
 * Per-request mock override (set by the secret-gated testBrief harness). Globals
 * reset every execution, so this never leaks across requests.
 */
var FORCE_MOCK = false;
function aiMock_() { return FORCE_MOCK || String(setting_('ai_mock', 'false')) === 'true'; }

/**
 * Gate for enrichment. True when enabled AND (mock mode OR a real key exists).
 * In mock mode nothing touches the network, so we can build/test the AI-enriched
 * brief with no key and no external-request scope. Flip ai_mock -> false (and set
 * ANTHROPIC_API_KEY) to go live.
 */
function aiReady_() {
  if (String(setting_('ai_enrichment_enabled', 'true')) !== 'true') return false;
  return aiMock_() || !!prop_('ANTHROPIC_API_KEY');
}

/** Realistic canned enrichment (uses the real lead data) for key-free testing. */
function mockEnrichment_(d, q) {
  var goal = joinMulti_(d.primary_goals) || 'growth';
  var hasEmail = (d.current_marketing || []).indexOf('Email / lifecycle') !== -1;
  return {
    observations: [
      'Stated challenge ("' + String(d.biggest_challenge || '').slice(0, 70) + '") reads as an efficiency or measurement gap, not a traffic-volume gap.',
      'Goal of ' + goal + ' on a ' + (d.timeline || 'near-term') + ' timeline suggests appetite for a structural fix rather than a one-off campaign.',
      hasEmail ? 'Lifecycle/email exists but may be under-leveraged for retention.' : 'No lifecycle/email program mentioned; likely over-reliant on paid acquisition.'
    ],
    likely_constraint: 'Most likely a conversion or retention constraint downstream of acquisition, rather than a top-of-funnel volume problem.',
    questions: [
      'What is your current blended CAC and how has it trended over 12 months?',
      'What does repeat-purchase / retention look like today?',
      'Which channel is your biggest spend, and what is its standalone return?',
      'What have you already tried here, and what happened?',
      'Who signs off on a new engagement, and on what timeline?'
    ],
    quick_win: 'If core lifecycle flows are thin, optimizing them could lift revenue without more ad spend (validate live).',
    strategic_opportunity: 'Move from pure paid acquisition toward a connected acquisition + lifecycle system tied to ' + goal + '.',
    research: [],
    _model: 'mock', _at: nowIso_()
  };
}
