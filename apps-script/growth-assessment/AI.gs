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

/** Best-effort JSON extraction from a model response. */
function extractJson_(text) {
  try { return JSON.parse(text); } catch (e) {}
  var m = String(text).match(/\{[\s\S]*\}/);
  if (m) { try { return JSON.parse(m[0]); } catch (e2) {} }
  return null;
}

/**
 * Gate for any external call. Returns true only when enrichment is enabled AND
 * an API key exists. Until then we never touch UrlFetchApp, so the brief builds
 * deterministically with no dependency on the external-request scope.
 */
function aiReady_() {
  return String(setting_('ai_enrichment_enabled', 'true')) === 'true' && !!prop_('ANTHROPIC_API_KEY');
}
