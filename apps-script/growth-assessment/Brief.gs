/**
 * Brief.gs — internal assessment brief as a Google Doc.
 *
 * Creates a working brief the Beast team fills in before the call. If
 * BRIEF_TEMPLATE_DOC_ID is set, we copy that template; otherwise we build a
 * structured doc from scratch. The doc is filed in the "Assessment Briefs"
 * subfolder when DRIVE_ROOT_FOLDER_ID is configured. Returns the doc URL.
 */

/**
 * initDrive() — create the "Beast Growth Operations" folder tree in the Beast
 * account's Drive, store its ID in Script Properties (so every future brief
 * auto-files into "Assessment Briefs"), sweep any loose briefs into it, and move
 * the Pipeline spreadsheet into "Pipeline". Run once from the editor after
 * setup(). Idempotent — safe to re-run.
 */
function initDrive() {
  var root = getOrCreateSubfolder_(DriveApp.getRootFolder(), 'Beast Growth Operations');
  var subs = {};
  ['Pipeline', 'Assessment Briefs', 'Growth Blueprints', 'Proposals', 'Templates', 'Archive'].forEach(function (n) {
    subs[n] = getOrCreateSubfolder_(root, n);
  });
  PropertiesService.getScriptProperties().setProperty('DRIVE_ROOT_FOLDER_ID', root.getId());

  // Sweep any loose "Growth Assessment Brief" docs from My Drive root.
  var moved = 0;
  var files = DriveApp.getRootFolder().getFiles();
  while (files.hasNext()) {
    var f = files.next();
    if (f.getName().indexOf('Growth Assessment Brief') === 0) {
      subs['Assessment Briefs'].addFile(f);
      DriveApp.getRootFolder().removeFile(f);
      moved++;
    }
  }

  // Move the Pipeline spreadsheet into the Pipeline subfolder (best-effort).
  var ssMoved = false;
  try {
    var ssFile = DriveApp.getFileById(workbook_().getId());
    if (ssFile.getParents().hasNext()) {
      subs['Pipeline'].addFile(ssFile);
      DriveApp.getRootFolder().removeFile(ssFile);
      ssMoved = true;
    }
  } catch (e) {}

  return 'Drive ready. "Beast Growth Operations" created (id ' + root.getId() + '). ' +
    moved + ' brief(s) filed; pipeline sheet ' + (ssMoved ? 'moved to Pipeline.' : 'left in place.');
}

function createInternalBrief_(d, q, ids) {
  var title = 'Growth Assessment Brief - ' + briefVal_(d.company_name) + ' - ' + ids.leadId;

  // Optional AI enrichment (internal only, fails safe to deterministic content).
  // Only touches the network when a key is configured, so the brief never
  // depends on the external-request scope being authorized.
  var ai = null;
  if (aiReady_()) {
    ai = enrichBrief_(d, q, fetchWebsite_(d.company_website));
  }

  var doc = DocumentApp.create(title);
  buildBriefBody_(doc.getBody(), d, q, ids, ai);
  doc.saveAndClose();

  var file = DriveApp.getFileById(doc.getId());
  fileIntoBriefsFolder_(file);
  var url = doc.getUrl();

  var row = findRow_('Assessments', 'assessment_id', ids.assessmentId);
  if (row > 0) updateRow_('Assessments', row, { internal_brief_url: url });

  return url;
}

/* ── Brief document builder (deterministic + optional AI, never a placeholder) ── */
var BRIEF_GREY = '#8a8a8a';
var BRIEF_PINK = '#c2185b';

function buildBriefBody_(body, d, q, ids, ai) {
  var c = q.categoryScores;

  body.appendParagraph('Internal Growth Assessment Brief').setHeading(DocumentApp.ParagraphHeading.TITLE);
  body.appendParagraph('Draft - automated   |   Beast staff only - do not share with the prospect')
    .setForegroundColor(BRIEF_PINK).setBold(true);
  note_(body, 'Labels: Fact = submitted by prospect. Signal = derived by the scoring engine. ' +
    'Hypothesis = inference to validate in the meeting. Research = sourced from the prospect website. ' +
    'Human = to be completed by the strategist.');

  h1_(body, 'Record Information');
  kv_(body, 'Company', briefVal_(d.company_name) + ' (' + briefVal_(d.company_website) + ')');
  kv_(body, 'Prospect', briefVal_(d.first_name) + ' ' + briefVal_(d.last_name) + ' - ' +
    briefVal_(d.job_title, 'role n/a') + ' - ' + briefVal_(d.work_email) + (d.phone ? ' - ' + d.phone : ''));
  kv_(body, 'Assessment ID', briefVal_(ids.assessmentId));
  kv_(body, 'Route', q.route);
  kv_(body, 'Score', q.score + ' / 100 (v' + q.version + ')');
  kv_(body, 'Source', briefVal_((d.utm_source || 'direct') + (d.utm_campaign ? ' / ' + d.utm_campaign : '') +
    (d.source_page ? ' - ' + d.source_page : ''), 'direct'));
  kv_(body, 'Submitted', briefVal_(d.submission_timestamp, nowIso_()));
  kv_(body, 'Booking status', routeGetsBooking_(q.route) ? 'Awaiting booking' : 'N/A');

  h1_(body, 'Known Facts From Intake');
  kv_(body, 'Business', briefVal_(d.company_type) + ' - ' + briefVal_(d.company_stage) + ' - ' + briefVal_(d.annual_revenue_range));
  kv_(body, 'Stated goal', briefVal_(joinMulti_(d.primary_goals)));
  kv_(body, 'Stated challenge', briefVal_(d.biggest_challenge));
  kv_(body, 'Desired outcome', briefVal_(d.desired_result));
  kv_(body, 'Current marketing', briefVal_(joinMulti_(d.current_marketing), 'None stated'));
  kv_(body, 'Investment readiness', briefVal_(d.current_monthly_investment) + ' now, ' + briefVal_(d.potential_monthly_investment) + ' potential');
  kv_(body, 'Timeline', briefVal_(d.timeline));
  kv_(body, 'Decision role', briefVal_(d.decision_role) + (d.other_stakeholders ? ' (also: ' + d.other_stakeholders + ')' : ''));
  kv_(body, 'Talking to other agencies', briefVal_(d.speaking_with_agencies));
  kv_(body, 'Additional context', briefVal_(d.additional_context, 'None provided'));

  h1_(body, 'Derived Qualification Signals');
  kv_(body, 'Category scores', 'Strategic need ' + c.strategic_need + '/25, Investment ' + c.investment +
    '/25, Timing ' + c.timing + '/15, Decision ' + c.decision + '/15, Business fit ' + c.business_fit +
    '/15, Engagement ' + c.engagement + '/5');
  h2_(body, 'Route reasons');
  (q.reasons || []).forEach(function (r) { bullet_(body, r); });
  kv_(body, 'Flags', (q.flags && q.flags.length) ? q.flags.join(', ') : 'None');

  h1_(body, 'Company Research');
  if (ai && ai.research && ai.research.length) {
    ai.research.forEach(function (r) {
      var p = bullet_(body, r.finding + ' [' + (r.label || 'inference') + ']');
      p.appendText('  ' + r.source_url).setForegroundColor(BRIEF_GREY);
    });
    note_(body, 'Sourced from the prospect website at brief-generation time. Verify before relying on it.');
  } else {
    note_(body, 'No website research available for this intake.');
  }

  h1_(body, 'Initial Fit Rationale');
  body.appendParagraph(fitRationale_(d, q));

  h1_(body, 'Three Initial Observations (Hypotheses - validate in meeting)');
  if (ai && ai.observations && ai.observations.length) ai.observations.forEach(function (o) { bullet_(body, o); });
  else note_(body, 'Requires validation during the Growth Diagnostic.');

  h1_(body, 'Likely Primary Constraint (Hypothesis)');
  body.appendParagraph((ai && ai.likely_constraint) ? ai.likely_constraint : 'Requires validation during the Growth Diagnostic.');

  h1_(body, 'Questions to Ask');
  var qs = (ai && ai.questions && ai.questions.length) ? ai.questions : fallbackQuestions_(d, q);
  qs.forEach(function (x) { bullet_(body, x); });

  h1_(body, 'Potential Quick Win (Hypothesis)');
  body.appendParagraph((ai && ai.quick_win) ? ai.quick_win : 'Not yet assessed. Identify a low-effort, high-signal improvement during the call.');

  h1_(body, 'Strategic Opportunity');
  body.appendParagraph((ai && ai.strategic_opportunity) ? ai.strategic_opportunity :
    'Tie recommendations to the stated goal: ' + briefVal_(joinMulti_(d.primary_goals)) + '.');

  h1_(body, 'Recommended Meeting Focus');
  body.appendParagraph(recommendedFocus_(d, q));

  h1_(body, 'Risks');
  risks_(d, q).forEach(function (r) { bullet_(body, r); });

  h1_(body, 'Human Review');
  kv_(body, 'Reviewed by', 'Pending');
  kv_(body, 'Reviewed at', 'Pending');
  kv_(body, 'Approved for meeting', 'No (draft)');
  kv_(body, 'Meeting owner', briefVal_(CONFIG.defaultOwner));

  if (ai && ai._model) note_(body, 'AI draft by ' + ai._model + ' at ' + ai._at + '. Hypotheses only; not verified.');
}

/* ── brief helpers ─────────────────────────────────────────────────── */
function h1_(b, t) { return b.appendParagraph(t).setHeading(DocumentApp.ParagraphHeading.HEADING1); }
function h2_(b, t) { return b.appendParagraph(t).setHeading(DocumentApp.ParagraphHeading.HEADING2); }
function kv_(b, k, v) { var p = b.appendParagraph(''); p.appendText(k + ': ').setBold(true); p.appendText(String(v)).setBold(false); return p; }
function bullet_(b, t) { return b.appendListItem(String(t)).setGlyphType(DocumentApp.GlyphType.BULLET); }
function note_(b, t) { return b.appendParagraph(String(t)).setForegroundColor(BRIEF_GREY).setItalic(true); }
function briefVal_(v, fb) {
  if (v === undefined || v === null) return fb || 'Not provided';
  var s = String(v).trim();
  return s === '' ? (fb || 'Not provided') : s;
}

function fitRationale_(d, q) {
  var c = q.categoryScores;
  var parts = [];
  parts.push('Routed ' + q.route.replace(/_/g, ' ') + ' at score ' + q.score + '/100.');
  parts.push('Decision role: ' + briefVal_(d.decision_role) + '. Timeline: ' + briefVal_(d.timeline) +
    '. Potential investment: ' + briefVal_(d.potential_monthly_investment) + '. Stage: ' + briefVal_(d.company_stage) + '.');
  var validate = [];
  if (c.business_fit < 12) validate.push('business-stage fit');
  if (c.strategic_need < 14) validate.push('clarity of the core problem');
  if (c.investment < 15) validate.push('budget readiness');
  if (q.flags && q.flags.length) validate.push('flags (' + q.flags.join(', ') + ')');
  if (validate.length) parts.push('Validate in the meeting: ' + validate.join(', ') + '.');
  return parts.join(' ');
}

function fallbackQuestions_(d, q) {
  var qs = [
    'What does success look like in the next 90 days, in numbers?',
    'What have you already tried here, and what happened?',
    'How are you measuring performance today, and where are the blind spots?',
    'Who else is involved in this decision, and what is the buying process?',
    'What is the realistic budget range and timeline to act?'
  ];
  if ((d.current_marketing || []).indexOf('Email / lifecycle') === -1) {
    qs.push('Is there a lifecycle/email program, or is growth mostly paid acquisition?');
  }
  return qs;
}

function recommendedFocus_(d, q) {
  if (q.route === 'priority_qualified' || q.route === 'qualified') {
    return 'Confirm the primary constraint quickly, then show one credible path to the stated goal (' +
      briefVal_(joinMulti_(d.primary_goals)) + '). Diagnose; do not present a full plan for free.';
  }
  if (q.route === 'manual_review') {
    return 'Clarify the gaps that triggered review before committing time. Confirm budget, authority, and fit.';
  }
  return 'Low-touch. Point to the most useful resource and set a requalification trigger.';
}

function risks_(d, q) {
  var c = q.categoryScores;
  return [
    'Fit: ' + (c.business_fit >= 12 ? 'stage and vertical look aligned' : 'stage or vertical fit unproven'),
    'Budget: ' + (c.investment >= 15 ? 'budget appears adequate' : 'budget may be below the practical minimum'),
    'Authority: ' + (c.decision >= 11 ? 'decision access looks strong' : 'decision authority unclear'),
    'Timing: ' + (c.timing >= 8 ? 'timeline is near-term' : 'timeline may be soft'),
    'Data quality: ' + (c.engagement >= 3 ? 'responses are substantive' : 'responses are thin; validate everything'),
    'Scope: confirm the ask maps to Beast services before proposing.'
  ];
}

function fileIntoBriefsFolder_(file) {
  if (!CONFIG.driveRootId) return;
  try {
    var root = DriveApp.getFolderById(CONFIG.driveRootId);
    var sub = getOrCreateSubfolder_(root, 'Assessment Briefs');
    sub.addFile(file);
    DriveApp.getRootFolder().removeFile(file); // remove from My Drive root
  } catch (err) {
    // Filing is best-effort; the doc still exists in Drive.
  }
}

function getOrCreateSubfolder_(parent, name) {
  var it = parent.getFoldersByName(name);
  return it.hasNext() ? it.next() : parent.createFolder(name);
}

/**
 * Quality gate: scan a generated brief for forbidden leaks (empty brackets,
 * undefined, template tokens, raw prompt instructions). Returns {clean, found}.
 */
function scanBriefDoc_(url) {
  var FORBIDDEN = ['[ ]', 'undefined', '{{', 'Add fit rationale', 'do not fabricate', '[Add', 'null,'];
  try {
    var m = String(url).match(/[-\w]{25,}/);
    if (!m) return { clean: false, error: 'no doc id in url' };
    var text = DocumentApp.openById(m[0]).getBody().getText();
    var found = FORBIDDEN.filter(function (t) { return text.indexOf(t) !== -1; });
    return { clean: found.length === 0, found: found };
  } catch (e) {
    return { clean: false, error: String(e && e.message || e) };
  }
}
