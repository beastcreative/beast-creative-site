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
  Leads: ['lead_id','created_at','updated_at','status','qualification_route','owner','first_name','last_name','work_email','phone','job_title','company_name','company_website','company_type','company_stage','annual_revenue_range','primary_goals','biggest_challenge','desired_result','current_marketing','current_monthly_investment','potential_monthly_investment','timeline','decision_role','other_stakeholders','speaking_with_agencies','additional_context','consent','assessment_type','source_page','source_section','first_landing_page','referrer','utm_source','utm_medium','utm_campaign','utm_term','utm_content','gclid','submission_timestamp','calendar_booking_status','calendar_event_id','meeting_date','next_step','notes'],
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
  ['email_sender_name', 'Beast Creative']
];

var WORKBOOK_CACHE = null;
function workbook_() {
  if (WORKBOOK_CACHE) return WORKBOOK_CACHE;
  var id = CONFIG.spreadsheetId;
  WORKBOOK_CACHE = id ? SpreadsheetApp.openById(id) : SpreadsheetApp.getActiveSpreadsheet();
  if (!WORKBOOK_CACHE) throw new Error('No spreadsheet: set SPREADSHEET_ID or bind the script to the workbook.');
  return WORKBOOK_CACHE;
}

/** Create/repair every tab and header row. Idempotent — safe to re-run. */
function initWorkbook() {
  var ss = workbook_();
  Object.keys(SCHEMA).forEach(function (name) {
    var sh = ss.getSheetByName(name) || ss.insertSheet(name);
    var headers = SCHEMA[name];
    sh.getRange(1, 1, 1, headers.length).setValues([headers]).setFontWeight('bold');
    sh.setFrozenRows(1);
  });
  // Seed Settings if empty.
  var settings = ss.getSheetByName('Settings');
  if (settings.getLastRow() < 2) {
    settings.getRange(2, 1, DEFAULT_SETTINGS.length, 2).setValues(DEFAULT_SETTINGS);
  }
  var def = ss.getSheetByName('Sheet1');
  if (def && def.getLastRow() === 0) ss.deleteSheet(def);
  return 'Workbook initialized: ' + Object.keys(SCHEMA).join(', ');
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
