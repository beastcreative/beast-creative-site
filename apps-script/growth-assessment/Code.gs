/**
 * Code.gs — web app entry point + intake orchestration.
 *
 * The Beast website (app/api/growth-assessment/route.ts) POSTs JSON here with a
 * shared secret. We validate, dedupe, persist to Sheets, route, notify, and
 * return only a public-safe result. Internal scoring and Sheet URLs are never
 * returned to the client.
 *
 * Request body: all assessment fields + attribution fields + `secret`.
 * Response: { success, leadId, route, bookingUrl }.
 */

function doGet() {
  return json_({ ok: true, service: 'beast-growth-assessment', ts: nowIso_() });
}

function doPost(e) {
  var execId = Utilities.getUuid().slice(0, 8);
  try {
    if (!e || !e.postData || !e.postData.contents) return json_({ success: false, error: 'Empty request.' });
    if (e.postData.contents.length > CONFIG.MAX_PAYLOAD_BYTES) {
      return json_({ success: false, error: 'Payload too large.' });
    }

    var body;
    try { body = JSON.parse(e.postData.contents); } catch (err) { return json_({ success: false, error: 'Invalid JSON.' }); }

    // Auth: shared secret (constant-time-ish compare).
    if (!CONFIG.sharedSecret || !secureEquals_(String(body.secret || ''), CONFIG.sharedSecret)) {
      logActivity_('intake', '', 'auth', 'rejected', 'bad secret');
      return json_({ success: false, error: 'Unauthorized.' });
    }

    // Anti-spam: honeypot + submit-too-fast → accept quietly, persist nothing.
    if (body.website) {
      logActivity_('intake', '', 'spam', 'honeypot', '');
      return json_({ success: true, route: 'nurture' });
    }
    if (typeof body.elapsed_ms === 'number' && body.elapsed_ms < CONFIG.MIN_ELAPSED_MS) {
      logActivity_('intake', '', 'spam', 'too-fast', '');
      return json_({ success: true, route: 'manual_review' });
    }

    var missing = requiredMissing_(body);
    if (missing.length) return json_({ success: false, error: 'Missing required fields.' });

    var d = sanitize_(body);
    var q = qualify_(d);

    // Secret-gated scoring preview: returns the full score breakdown WITHOUT
    // persisting or emailing. Only reachable with a valid shared secret, so it
    // is internal-only (the website never sends dryRun).
    if (body.dryRun) {
      return json_({ success: true, dryRun: true, route: q.route, score: q.score, categoryScores: q.categoryScores, reasons: q.reasons, flags: q.flags });
    }

    // Secret-gated brief test: generate a brief for this payload + scan it for
    // leaks, without writing to the pipeline. Creates a throwaway Drive doc.
    if (body.testBrief) {
      if (body.mock) FORCE_MOCK = true;
      var turl = createInternalBrief_(d, q, { assessmentId: 'TEST-' + execId, leadId: 'TEST-' + execId });
      return json_({ success: true, testBrief: true, mock: !!body.mock, url: turl, route: q.route, scan: scanBriefDoc_(turl) });
    }

    var route = q.route;
    var ids = persistIntake_(d, q, execId);

    // Notifications + brief + task are best-effort; a failure here must not
    // fail the submission (the lead is already saved).
    safe_(function () { sendProspectConfirmation_(d, route); }, 'confirmation', ids.leadId, execId);
    safe_(function () { ids.briefUrl = createInternalBrief_(d, q, ids); }, 'brief', ids.leadId, execId);
    safe_(function () { sendInternalNotification_(d, route, ids); }, 'internal-notify', ids.leadId, execId);
    safe_(function () { createFollowUpTask_(d, route, ids); }, 'task', ids.leadId, execId);

    logActivity_('intake', ids.leadId, 'created', route, '');
    return json_({
      success: true,
      leadId: ids.leadId,
      route: route,
      bookingUrl: routeGetsBooking_(route) ? CONFIG.bookingUrl : undefined
    });
  } catch (err) {
    logActivity_('intake', '', 'error', 'exception', String(err && err.message || err));
    return json_({ success: false, error: 'We could not process your submission. Please try again.' });
  }
}

/* ── persistence: dedupe + write across tabs ──────────────────────── */
function persistIntake_(d, q, execId) {
  var route = q.route;
  var now = nowIso_();

  // Company (dedupe by website, then name).
  var companyRow = findRow_('Companies', 'website', d.company_website);
  if (companyRow < 0) companyRow = findRow_('Companies', 'company_name', d.company_name);
  var companyId;
  if (companyRow < 0) {
    companyId = newId_('cmp');
    appendRow_('Companies', {
      company_id: companyId, company_name: d.company_name, website: d.company_website,
      company_type: d.company_type, company_stage: d.company_stage, annual_revenue_range: d.annual_revenue_range,
      owner: CONFIG.defaultOwner, status: 'Active', first_seen_at: now, last_activity_at: now,
      primary_goal: joinMulti_(d.primary_goals), likely_constraint: '', opportunity_value: '', notes: ''
    });
  } else {
    companyId = sheet_('Companies').getRange(companyRow, headers_('Companies').indexOf('company_id') + 1).getValue();
    updateRow_('Companies', companyRow, { last_activity_at: now });
  }

  // Contact (dedupe by email).
  var contactRow = findRow_('Contacts', 'email', d.work_email);
  var contactId;
  if (contactRow < 0) {
    contactId = newId_('con');
    appendRow_('Contacts', {
      contact_id: contactId, company_id: companyId, first_name: d.first_name, last_name: d.last_name,
      email: d.work_email, phone: d.phone, title: d.job_title, decision_role: d.decision_role,
      primary_contact: 'Yes', created_at: now, last_activity_at: now, notes: ''
    });
  } else {
    contactId = sheet_('Contacts').getRange(contactRow, headers_('Contacts').indexOf('contact_id') + 1).getValue();
    updateRow_('Contacts', contactRow, { last_activity_at: now });
  }

  // Lead (always a new row — each submission is a distinct intake event).
  var leadId = newId_('lead');
  appendRow_('Leads', {
    lead_id: leadId, created_at: now, updated_at: now, status: 'New', qualification_route: route,
    owner: CONFIG.defaultOwner, first_name: d.first_name, last_name: d.last_name, work_email: d.work_email,
    phone: d.phone, job_title: d.job_title, company_name: d.company_name, company_website: d.company_website,
    company_type: d.company_type, company_stage: d.company_stage, annual_revenue_range: d.annual_revenue_range,
    primary_goals: joinMulti_(d.primary_goals), biggest_challenge: d.biggest_challenge, desired_result: d.desired_result,
    current_marketing: joinMulti_(d.current_marketing), current_monthly_investment: d.current_monthly_investment,
    potential_monthly_investment: d.potential_monthly_investment, timeline: d.timeline, decision_role: d.decision_role,
    other_stakeholders: d.other_stakeholders, speaking_with_agencies: d.speaking_with_agencies,
    additional_context: d.additional_context, consent: d.consent ? 'TRUE' : 'FALSE', assessment_type: d.assessment_type,
    source_page: d.source_page, source_section: d.source_section, first_landing_page: d.first_landing_page,
    referrer: d.referrer, utm_source: d.utm_source, utm_medium: d.utm_medium, utm_campaign: d.utm_campaign,
    utm_term: d.utm_term, utm_content: d.utm_content, gclid: d.gclid, submission_timestamp: d.submission_timestamp || now,
    calendar_booking_status: routeGetsBooking_(route) ? 'Awaiting Booking' : 'N/A',
    calendar_event_id: '', meeting_date: '', next_step: firstNextStep_(route), notes: '',
    qualification_version: q.version, qualification_score: q.score,
    qualification_scores: JSON.stringify(q.categoryScores), qualification_reasons: (q.reasons || []).join(' | '),
    qualification_flags: (q.flags || []).join('; '), qualified_at: now,
    manual_override: '', override_owner: '', override_reason: '', override_timestamp: ''
  });

  // Assessment.
  var assessmentId = newId_('asmt');
  appendRow_('Assessments', {
    assessment_id: assessmentId, lead_id: leadId, company_id: companyId, contact_id: contactId,
    assessment_type: d.assessment_type, submitted_at: now, qualification_route: route,
    scheduled_at: '', meeting_date: '', meeting_status: routeGetsBooking_(route) ? 'Awaiting Booking' : 'N/A',
    internal_brief_url: '', likely_constraint: '', observations: '', recommended_next_step: '', completed_at: ''
  });

  // Opportunity.
  var opportunityId = newId_('opp');
  appendRow_('Opportunities', {
    opportunity_id: opportunityId, company_id: companyId, primary_contact_id: contactId, assessment_id: assessmentId,
    stage: routeToStage_(route), owner: CONFIG.defaultOwner, estimated_value: '', probability: '',
    recommended_engagement: '', next_step: firstNextStep_(route), next_step_due: dueInDays_(route === 'priority_qualified' ? 1 : 2),
    proposal_url: '', won_lost_date: '', lost_reason: '', notes: ''
  });

  // Activity.
  appendRow_('Activities', {
    activity_id: newId_('act'), related_type: 'Lead', related_id: leadId, activity_type: 'Intake',
    activity_date: now, owner: CONFIG.defaultOwner, subject: 'New Growth Assessment (' + route + ')',
    detail: d.company_name + ' — ' + joinMulti_(d.primary_goals), source: d.utm_source || 'direct', created_at: now
  });

  return { leadId: leadId, companyId: companyId, contactId: contactId, assessmentId: assessmentId, opportunityId: opportunityId, briefUrl: '' };
}

/* ── validation + sanitization ────────────────────────────────────── */
var REQUIRED_FIELDS = ['first_name','last_name','work_email','company_name','company_website','company_type','company_stage','annual_revenue_range','biggest_challenge','desired_result','current_monthly_investment','potential_monthly_investment','timeline','decision_role','speaking_with_agencies'];

function requiredMissing_(b) {
  var missing = REQUIRED_FIELDS.filter(function (f) { return !b[f] || String(b[f]).trim() === ''; });
  if (b.consent !== true && String(b.consent) !== 'true') missing.push('consent');
  if (!Array.isArray(b.primary_goals) || b.primary_goals.length === 0) missing.push('primary_goals');
  if (!isEmail_(b.work_email)) missing.push('work_email');
  return missing;
}

function sanitize_(b) {
  var clip = function (v, n) { return v === undefined || v === null ? '' : String(v).slice(0, n); };
  return {
    first_name: clip(b.first_name, 80), last_name: clip(b.last_name, 80), work_email: clip(b.work_email, 254),
    phone: clip(b.phone, 40), job_title: clip(b.job_title, 120), company_name: clip(b.company_name, 160),
    company_website: clip(b.company_website, 200), company_type: clip(b.company_type, 60),
    company_stage: clip(b.company_stage, 40), annual_revenue_range: clip(b.annual_revenue_range, 40),
    primary_goals: (Array.isArray(b.primary_goals) ? b.primary_goals : []).slice(0, 3).map(function (g) { return clip(g, 80); }),
    biggest_challenge: clip(b.biggest_challenge, 600), desired_result: clip(b.desired_result, 600),
    current_marketing: (Array.isArray(b.current_marketing) ? b.current_marketing : []).map(function (g) { return clip(g, 60); }),
    current_monthly_investment: clip(b.current_monthly_investment, 40), potential_monthly_investment: clip(b.potential_monthly_investment, 40),
    timeline: clip(b.timeline, 40), decision_role: clip(b.decision_role, 60), other_stakeholders: clip(b.other_stakeholders, 300),
    speaking_with_agencies: clip(b.speaking_with_agencies, 20), additional_context: clip(b.additional_context, 1200),
    consent: b.consent === true || String(b.consent) === 'true', assessment_type: clip(b.assessment_type || 'general', 40),
    website: clip(b.website, 200),
    source_page: clip(b.source_page, 200), source_section: clip(b.source_section, 200), first_landing_page: clip(b.first_landing_page, 300),
    current_page: clip(b.current_page, 300), referrer: clip(b.referrer, 300), utm_source: clip(b.utm_source, 120),
    utm_medium: clip(b.utm_medium, 120), utm_campaign: clip(b.utm_campaign, 120), utm_term: clip(b.utm_term, 120),
    utm_content: clip(b.utm_content, 120), gclid: clip(b.gclid, 200), submission_timestamp: clip(b.submission_timestamp, 40)
  };
}

/* ── helpers ──────────────────────────────────────────────────────── */
function firstNextStep_(route) {
  if (route === 'priority_qualified' || route === 'qualified') return 'Prepare internal brief + confirm booking';
  if (route === 'manual_review') return 'Review new intake';
  return 'Nurture check-in';
}
function dueInDays_(n) {
  var dt = new Date(); dt.setDate(dt.getDate() + n);
  return Utilities.formatDate(dt, CONFIG.timezone, 'yyyy-MM-dd');
}
function isEmail_(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v || '')); }
function secureEquals_(a, b) {
  if (a.length !== b.length) return false;
  var r = 0;
  for (var i = 0; i < a.length; i++) r |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return r === 0;
}
function safe_(fn, workflow, recordId, execId) {
  try { fn(); } catch (err) { logActivity_(workflow, recordId, 'error', 'caught', String(err && err.message || err)); }
}
function json_(obj) {
  // Strip undefined so the JSON stays clean.
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
