/**
 * Sheets.gs — the workbook is the interim CRM/database.
 *
 * SCHEMA is the single source of truth for tab columns (mirrors
 * docs/beast-growth-assessment-v1-google/02-sheet-data-model.md). Run
 * initWorkbook() once from the editor to create/repair every tab + headers.
 *
 * IDs are immutable, prefixed, and never row numbers. Timestamps are ISO.
 * Multi-select values are stored as "; "-joined strings.
 */

var SCHEMA = {
  Leads: ['lead_id','created_at','updated_at','status','qualification_route','owner','first_name','last_name','work_email','phone','job_title','company_name','company_website','company_type','company_stage','annual_revenue_range','primary_goals','biggest_challenge','desired_result','current_marketing','current_monthly_investment','potential_monthly_investment','timeline','decision_role','other_stakeholders','speaking_with_agencies','additional_context','consent','assessment_type','source_page','source_section','first_landing_page','referrer','utm_source','utm_medium','utm_campaign','utm_term','utm_content','gclid','submission_timestamp','calendar_booking_status','calendar_event_id','meeting_date','next_step','notes','qualification_version','qualification_score','qualification_scores','qualification_reasons','qualification_flags','qualified_at','manual_override','override_owner','override_reason','override_timestamp'],
  Companies: ['company_id','company_name','website','company_type','company_stage','annual_revenue_range','owner','status','first_seen_at','last_activity_at','primary_goal','likely_constraint','opportunity_value','notes'],
  Contacts: ['contact_id','company_id','first_name','last_name','email','phone','title','decision_role','primary_contact','created_at','last_activity_at','notes'],
  Assessments: ['assessment_id','lead_id','company_id','contact_id','assessment_type','submitted_at','qualification_route','scheduled_at','meeting_date','meeting_status','internal_brief_url','likely_constraint','observations','recommended_next_step','completed_at'],
  Opportunities: ['opportunity_id','company_id','primary_contact_id','assessment_id','stage','owner','estimated_value','probability','recommended_engagement','next_step','next_step_due','proposal_url','won_lost_date','lost_reason','notes'],
  Activities: ['activity_id','related_type','related_id','activity_type','activity_date','owner','subject','detail','source','created_at'],
  Tasks: ['task_id','related_type','related_id','assigned_to','task_type','task_title','due_date','status','priority','completed_at','notes'],
  Settings: ['key','value'],
  'Audit Log': ['timestamp','workflow','record_id','action','result','error_message','execution_id']
};

var DEFAULT_SETTINGS = [
  ['internal_notification_emails', ''],
  ['booking_page_url', ''],
  ['calendar_id', ''],
  ['drive_root_folder_id', ''],
  ['default_owner', 'Beast Team'],
  ['minimum_investment_route', 'Under $2K / mo'],
  ['manual_review_email', ''],
  ['privacy_policy_url', 'https://beastcreativeagency.com/privacy'],
  ['company_timezone', 'America/Chicago'],
  ['email_sender_name', 'Beast Creative'],
  // ── Qualification engine thresholds (tune here, no redeploy needed) ──
  ['qualification_version', '1.1.0'],
  ['priority_score_min', 80],
  ['qualified_score_min', 60],
  ['manual_review_score_min', 45],
  ['min_qualified_investment_points', 8],
  ['min_priority_investment_points', 15],
  ['min_priority_decision_points', 11],
  ['min_priority_timing_points', 8],
  ['min_clear_need_points', 12],
  // ── AI enrichment (optional; safe fallback if blank/unavailable) ──
  ['ai_enrichment_enabled', 'true'],
  ['ai_model', 'claude-opus-4-8'],
  ['ai_fetch_website', 'true'],
  ['ai_mock', 'false']
];

var WORKBOOK_CACHE = null;
function workbook_() {
  if (WORKBOOK_CACHE) return WORKBOOK_CACHE;
  var id = CONFIG.spreadsheetId;
  WORKBOOK_CACHE = id ? SpreadsheetApp.openById(id) : SpreadsheetApp.getActiveSpreadsheet();
  if (!WORKBOOK_CACHE) throw new Error('No spreadsheet: set SPREADSHEET_ID or bind the script to the workbook.');
  return WORKBOOK_CACHE;
}

/* ── Lookup values (drive dropdowns + document allowed values) ─────── */
var LOOKUPS = {
  'Lead Status': ['New', 'Scheduled', 'Assessment Completed', 'Follow-Up Required', 'Proposal Sent', 'Closed Won', 'Closed Lost', 'Nurture'],
  'Qualification Route': ['priority_qualified', 'qualified', 'manual_review', 'nurture', 'spam'],
  'Company Type': ['Ecommerce / DTC', 'B2B / SaaS', 'CPG / Consumer Brand', 'Local / Regional Business', 'Startup', 'Other'],
  'Company Stage': ['Just launched', 'Early-stage', 'Growing', 'Established', 'Enterprise'],
  'Annual Revenue': ['Under $500K', '$500K – $1M', '$1M – $5M', '$5M – $25M', '$25M+', 'Prefer not to say'],
  'Primary Goals': ['More qualified leads', 'Higher website conversion', 'Better paid media ROI', 'Stronger brand / positioning', 'More organic & AI search visibility', 'Launch a product or market', 'Better measurement & attribution', 'Retention & repeat revenue'],
  'Marketing Channels': ['SEO', 'Paid search', 'Paid social', 'Email / lifecycle', 'Content', 'Organic social', 'Influencer / UGC', 'Nothing consistent yet'],
  'Current Investment': ['Under $2K / mo', '$2K – $5K / mo', '$5K – $10K / mo', '$10K – $25K / mo', '$25K – $50K / mo', '$50K+ / mo'],
  'Potential Investment': ['Under $2K / mo', '$2K – $5K / mo', '$5K – $10K / mo', '$10K – $25K / mo', '$25K – $50K / mo', '$50K+ / mo', 'Not sure yet'],
  'Timeline': ['ASAP / this month', '1 – 3 months', '3 – 6 months', 'Just exploring'],
  'Decision Role': ['I make the decision', "I'm part of the decision", 'I influence the decision', "I'm researching for someone else"],
  'Speaking With Agencies': ['Yes', 'No', 'Not yet'],
  'Company Status': ['Active', 'Prospect', 'Inactive'],
  'Opportunity Stage': ['New Growth Assessment', 'Qualification Review', 'Scheduled', 'Assessment Completed', 'Follow-Up Required', 'Growth Blueprint Proposed', 'Proposal Sent', 'Decision', 'Closed Won', 'Closed Lost', 'Nurture'],
  'Task Type': ['Review new intake', 'Prepare internal brief', 'Conduct assessment', 'Send recap', 'Build Growth Blueprint', 'Create proposal', 'Follow up', 'Nurture check-in'],
  'Task Status': ['Open', 'In Progress', 'Done', 'Blocked'],
  'Task Priority': ['High', 'Medium', 'Low']
};

/* Which tab columns get a dropdown, and from which lookup category. */
var VALIDATION = {
  Leads: { status: 'Lead Status', qualification_route: 'Qualification Route', company_type: 'Company Type', company_stage: 'Company Stage', annual_revenue_range: 'Annual Revenue', current_monthly_investment: 'Current Investment', potential_monthly_investment: 'Potential Investment', timeline: 'Timeline', decision_role: 'Decision Role', speaking_with_agencies: 'Speaking With Agencies' },
  Companies: { company_type: 'Company Type', company_stage: 'Company Stage', annual_revenue_range: 'Annual Revenue', status: 'Company Status' },
  Assessments: { qualification_route: 'Qualification Route' },
  Opportunities: { stage: 'Opportunity Stage' },
  Tasks: { task_type: 'Task Type', status: 'Task Status', priority: 'Task Priority' }
};

var VALIDATION_ROWS = 2000; // rows to pre-apply dropdowns to
var HEADER_BG = '#0A0A0A';
var HEADER_FG = '#FFFFFF';

/**
 * Create/repair the entire workbook — tabs, headers, lookup values, dropdown
 * validation, protected system structure, formatting, and seeded Settings.
 * Idempotent: safe to re-run any time. This is the ONLY thing needed to build
 * the spreadsheet; nothing is created by hand.
 */
function initWorkbook() {
  var ss = workbook_();
  buildTabs_(ss);
  buildLookups_(ss);
  seedSettings_(ss);
  applyValidation_(ss);
  applyFormatting_(ss);
  applyProtection_(ss);
  var def = ss.getSheetByName('Sheet1');
  if (def && def.getLastRow() === 0 && def.getLastColumn() <= 1) { try { ss.deleteSheet(def); } catch (e) {} }
  SpreadsheetApp.flush();
  return 'Workbook fully initialized: ' + Object.keys(SCHEMA).join(', ') + ', Lookup Values (validation + protection + formatting applied).';
}

function buildTabs_(ss) {
  Object.keys(SCHEMA).forEach(function (name) {
    var sh = ss.getSheetByName(name) || ss.insertSheet(name);
    var headers = SCHEMA[name];
    sh.getRange(1, 1, 1, headers.length).setValues([headers]);
    sh.setFrozenRows(1);
  });
}

/** Lookup Values tab: one column per category, values listed beneath. */
function buildLookups_(ss) {
  var name = 'Lookup Values';
  var sh = ss.getSheetByName(name) || ss.insertSheet(name);
  sh.clearContents();
  var cats = Object.keys(LOOKUPS);
  var maxLen = cats.reduce(function (m, c) { return Math.max(m, LOOKUPS[c].length); }, 0);
  var grid = [cats.slice()];
  for (var r = 0; r < maxLen; r++) {
    grid.push(cats.map(function (c) { return LOOKUPS[c][r] || ''; }));
  }
  sh.getRange(1, 1, grid.length, cats.length).setValues(grid);
  sh.setFrozenRows(1);
}

function seedSettings_(ss) {
  var settings = ss.getSheetByName('Settings');
  var existing = {};
  var last = settings.getLastRow();
  if (last >= 2) {
    settings.getRange(2, 1, last - 1, 1).getValues().forEach(function (r) {
      if (r[0]) existing[String(r[0]).trim()] = true;
    });
  }
  // Additive + idempotent: append only settings that aren't already present.
  var toAdd = DEFAULT_SETTINGS.filter(function (kv) { return !existing[kv[0]]; });
  if (toAdd.length) {
    settings.getRange(settings.getLastRow() + 1, 1, toAdd.length, 2).setValues(toAdd);
  }
}

/** Attach dropdown validation to the mapped columns, sourced from Lookup Values. */
function applyValidation_(ss) {
  var lookup = ss.getSheetByName('Lookup Values');
  var lookupCats = lookup.getRange(1, 1, 1, lookup.getLastColumn()).getValues()[0];
  Object.keys(VALIDATION).forEach(function (tab) {
    var sh = ss.getSheetByName(tab);
    var cols = SCHEMA[tab];
    var map = VALIDATION[tab];
    Object.keys(map).forEach(function (col) {
      var colIdx = cols.indexOf(col);
      var catIdx = lookupCats.indexOf(map[col]);
      if (colIdx < 0 || catIdx < 0) return;
      var count = LOOKUPS[map[col]].length;
      var srcRange = lookup.getRange(2, catIdx + 1, count, 1);
      var rule = SpreadsheetApp.newDataValidation().requireValueInRange(srcRange, true).setAllowInvalid(true).build();
      sh.getRange(2, colIdx + 1, VALIDATION_ROWS, 1).setDataValidation(rule);
    });
  });
}

function applyFormatting_(ss) {
  var all = Object.keys(SCHEMA).concat(['Lookup Values']);
  all.forEach(function (name) {
    var sh = ss.getSheetByName(name);
    if (!sh) return;
    var lastCol = Math.max(1, sh.getLastColumn());
    sh.getRange(1, 1, 1, lastCol).setBackground(HEADER_BG).setFontColor(HEADER_FG).setFontWeight('bold');
    // Alternating row banding for readability (skip if already banded).
    if (!sh.getBandings().length) {
      try {
        sh.getRange(1, 1, sh.getMaxRows(), lastCol)
          .applyRowBanding(SpreadsheetApp.BandingTheme.LIGHT_GREY, true, false);
      } catch (e) {}
    }
    sh.autoResizeColumns(1, lastCol);
  });
  var leads = ss.getSheetByName('Leads');
  if (leads) leads.setTabColor('#FF1198');
}

/**
 * Protect system structure with warning-only protection: header rows on every
 * tab, and the full Lookup Values + Audit Log tabs. Warning-only keeps the owner
 * able to edit while guarding against accidental structural changes.
 */
function applyProtection_(ss) {
  Object.keys(SCHEMA).forEach(function (name) {
    var sh = ss.getSheetByName(name);
    if (!sh) return;
    dropProtections_(sh);
    sh.getRange(1, 1, 1, SCHEMA[name].length).protect().setWarningOnly(true)
      .setDescription(name + ' header (system)');
  });
  ['Lookup Values', 'Audit Log'].forEach(function (name) {
    var sh = ss.getSheetByName(name);
    if (!sh) return;
    dropProtections_(sh);
    sh.protect().setWarningOnly(true).setDescription(name + ' (system — do not edit)');
  });
}

function dropProtections_(sh) {
  sh.getProtections(SpreadsheetApp.ProtectionType.RANGE).forEach(function (p) { p.remove(); });
  sh.getProtections(SpreadsheetApp.ProtectionType.SHEET).forEach(function (p) { p.remove(); });
}

function sheet_(name) {
  var sh = workbook_().getSheetByName(name);
  if (!sh) throw new Error('Missing tab "' + name + '". Run initWorkbook().');
  return sh;
}

function headers_(name) { return SCHEMA[name]; }

/** Append an object as a row, ordered by the tab's schema. Returns the object. */
function appendRow_(name, obj) {
  var cols = headers_(name);
  var row = cols.map(function (c) { return obj[c] === undefined || obj[c] === null ? '' : obj[c]; });
  sheet_(name).appendRow(row);
  return obj;
}

/** Find the 1-based row index where column `col` equals `value` (case-insensitive). */
function findRow_(name, col, value) {
  if (!value) return -1;
  var cols = headers_(name);
  var idx = cols.indexOf(col);
  if (idx < 0) return -1;
  var sh = sheet_(name);
  var last = sh.getLastRow();
  if (last < 2) return -1;
  var values = sh.getRange(2, idx + 1, last - 1, 1).getValues();
  var target = String(value).trim().toLowerCase();
  for (var i = 0; i < values.length; i++) {
    if (String(values[i][0]).trim().toLowerCase() === target) return i + 2;
  }
  return -1;
}

/** Update named columns on a given row. */
function updateRow_(name, rowIndex, patch) {
  var cols = headers_(name);
  var sh = sheet_(name);
  Object.keys(patch).forEach(function (k) {
    var idx = cols.indexOf(k);
    if (idx >= 0) sh.getRange(rowIndex, idx + 1).setValue(patch[k]);
  });
}

/* ── IDs, time, serialization ─────────────────────────────────────── */
function newId_(prefix) {
  return prefix + '_' + Utilities.getUuid().replace(/-/g, '').slice(0, 20);
}
function nowIso_() {
  return Utilities.formatDate(new Date(), 'UTC', "yyyy-MM-dd'T'HH:mm:ss'Z'");
}
function joinMulti_(v) {
  if (Array.isArray(v)) return v.join('; ');
  return v === undefined || v === null ? '' : String(v);
}

/* ── Audit log ────────────────────────────────────────────────────── */
function logActivity_(workflow, recordId, action, result, errorMessage) {
  try {
    appendRow_('Audit Log', {
      timestamp: nowIso_(),
      workflow: workflow,
      record_id: recordId || '',
      action: action || '',
      result: result || '',
      error_message: errorMessage || '',
      execution_id: Utilities.getUuid().slice(0, 8)
    });
  } catch (err) {
    // Audit logging must never break the main flow.
  }
}
