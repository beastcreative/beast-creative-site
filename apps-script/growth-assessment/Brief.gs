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

function createInternalBrief_(d, route, ids) {
  var title = 'Growth Assessment Brief — ' + d.company_name + ' — ' + ids.leadId;
  var doc;

  if (CONFIG.briefTemplateId) {
    var copy = DriveApp.getFileById(CONFIG.briefTemplateId).makeCopy(title);
    doc = DocumentApp.openById(copy.getId());
    fillTemplateTokens_(doc, d, route, ids);
  } else {
    doc = DocumentApp.create(title);
    buildBriefBody_(doc.getBody(), d, route, ids);
    doc.saveAndClose();
    doc = DocumentApp.openById(doc.getId());
  }

  var file = DriveApp.getFileById(doc.getId());
  fileIntoBriefsFolder_(file);
  var url = doc.getUrl();

  // Link the brief back onto the Assessment record.
  var row = findRow_('Assessments', 'assessment_id', ids.assessmentId);
  if (row > 0) updateRow_('Assessments', row, { internal_brief_url: url });

  return url;
}

function buildBriefBody_(body, d, route, ids) {
  body.appendParagraph('Growth Assessment Brief').setHeading(DocumentApp.ParagraphHeading.TITLE);
  body.appendParagraph(d.company_name + '  ·  Route: ' + route + '  ·  ' + ids.leadId)
    .setForegroundColor('#888888');

  var known = [
    ['Company', d.company_name + ' (' + d.company_website + ')'],
    ['Prospect', d.first_name + ' ' + d.last_name + ' — ' + (d.job_title || 'role n/a') + ' — ' + d.work_email + (d.phone ? ' — ' + d.phone : '')],
    ['Business', d.company_type + ' · ' + d.company_stage + ' · ' + d.annual_revenue_range],
    ['Source', (d.utm_source || 'direct') + (d.utm_campaign ? ' / ' + d.utm_campaign : '') + (d.source_page ? ' · ' + d.source_page : '')],
    ['Stated goal', joinMulti_(d.primary_goals)],
    ['Stated challenge', d.biggest_challenge],
    ['Desired outcome', d.desired_result],
    ['Current marketing', joinMulti_(d.current_marketing) || '—'],
    ['Investment readiness', d.current_monthly_investment + ' now → ' + d.potential_monthly_investment + ' potential · ' + d.timeline],
    ['Decision role', d.decision_role + (d.other_stakeholders ? ' (also: ' + d.other_stakeholders + ')' : '')],
    ['Talking to other agencies', d.speaking_with_agencies],
    ['Additional context', d.additional_context || '—']
  ];
  body.appendParagraph('Known facts (from intake)').setHeading(DocumentApp.ParagraphHeading.HEADING1);
  known.forEach(function (r) {
    var p = body.appendParagraph('');
    p.appendText(r[0] + ': ').setBold(true);
    p.appendText(String(r[1])).setBold(false);
  });

  body.appendParagraph('Initial fit').setHeading(DocumentApp.ParagraphHeading.HEADING1);
  body.appendParagraph('Route: ' + route + '. [Add fit rationale — do not fabricate. State assumptions vs. facts.]');

  var toFill = ['Three observations', 'Likely primary constraint', 'Questions to ask', 'Potential quick win',
    'Strategic opportunity', 'Recommended next step', 'Risks'];
  toFill.forEach(function (h) {
    body.appendParagraph(h).setHeading(DocumentApp.ParagraphHeading.HEADING1);
    body.appendParagraph('[ ]');
  });
}

/** Replace {{token}} placeholders when using a Drive template. */
function fillTemplateTokens_(doc, d, route, ids) {
  var body = doc.getBody();
  var map = {
    '{{company}}': d.company_name, '{{website}}': d.company_website, '{{route}}': route, '{{lead_id}}': ids.leadId,
    '{{prospect}}': d.first_name + ' ' + d.last_name, '{{email}}': d.work_email, '{{goal}}': joinMulti_(d.primary_goals),
    '{{challenge}}': d.biggest_challenge, '{{desired_result}}': d.desired_result,
    '{{investment}}': d.current_monthly_investment + ' → ' + d.potential_monthly_investment, '{{timeline}}': d.timeline
  };
  Object.keys(map).forEach(function (k) { body.replaceText(escapeRegex_(k), String(map[k] || '')); });
  doc.saveAndClose();
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

function escapeRegex_(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
