/**
 * Decision.gs — one-click Approve / Decline from the internal alert email.
 *
 * The internal email carries signed links to the web app's doGet. Clicking one
 * approves the lead (prospect gets their booking link) or declines it (prospect
 * gets an AI-drafted self-serve growth plan). Links are HMAC-signed with the
 * shared secret so they cannot be guessed or replayed by outsiders.
 */

function actionToken_(leadId) {
  var raw = Utilities.computeHmacSha256Signature(String(leadId), CONFIG.sharedSecret);
  return Utilities.base64EncodeWebSafe(raw).replace(/[^A-Za-z0-9]/g, '').slice(0, 24);
}

function actionUrl_(leadId, action) {
  var base;
  try { base = ScriptApp.getService().getUrl(); } catch (e) { base = ''; }
  if (!base) return '';
  return base + '?action=' + action + '&lead=' + encodeURIComponent(leadId) + '&token=' + actionToken_(leadId);
}

/** Router for doGet when ?action= is present. Returns a branded HTML page. */
function handleAction_(p) {
  if (!p.lead || actionToken_(p.lead) !== p.token) {
    return htmlPage_('Link not valid', 'This decision link is invalid or has expired.');
  }
  var lead = leadFor_(p.lead);
  if (!lead) return htmlPage_('Not found', 'We could not find that lead.');
  if (lead.manual_override) {
    return htmlPage_('Already decided', 'This lead was already marked "' + lead.manual_override + '". No change was made.');
  }
  if (p.action === 'approve') {
    approveLead_(lead);
    return htmlPage_('Approved', lead.company_name + ' is approved. The prospect just received their booking link.');
  }
  if (p.action === 'decline') {
    declineLead_(lead);
    return htmlPage_('Declined', lead.company_name + ' was declined. The prospect received a helpful, on-brand self-serve plan.');
  }
  return htmlPage_('Unknown action', 'That action is not recognized.');
}

function approveLead_(lead) {
  var d = lead;
  var route = 'qualified';
  var lrow = findRow_('Leads', 'lead_id', lead.lead_id);
  if (lrow > 0) updateRow_('Leads', lrow, {
    qualification_route: route, status: 'Approved', calendar_booking_status: 'Awaiting Booking',
    manual_override: 'Approve', override_owner: 'email-action', override_timestamp: nowIso_(),
    next_step: 'Confirm booking'
  });
  var arow = findRow_('Assessments', 'lead_id', lead.lead_id);
  if (arow > 0) {
    updateRow_('Assessments', arow, { qualification_route: route, meeting_status: 'Awaiting Booking' });
    var asmt = rowObject_('Assessments', arow);
    var oppRow = findRow_('Opportunities', 'assessment_id', asmt.assessment_id);
    if (oppRow > 0) updateRow_('Opportunities', oppRow, { stage: 'Scheduled', next_step: 'Confirm booking', next_step_due: dueInDays_(1) });
  }
  safe_(function () { sendProspectConfirmation_(d, route); }, 'approve-email', lead.lead_id, '');
  appendRow_('Tasks', {
    task_id: newId_('task'), related_type: 'Lead', related_id: lead.lead_id, assigned_to: CONFIG.defaultOwner,
    task_type: 'Prepare internal brief', task_title: 'Prep (approved): ' + lead.company_name, due_date: dueInDays_(1),
    status: 'Open', priority: 'High', completed_at: '', notes: 'Manually approved from email.'
  });
  logActivity_('decision', lead.lead_id, 'approved', '', '');
}

function declineLead_(lead) {
  var d = lead;
  var lrow = findRow_('Leads', 'lead_id', lead.lead_id);
  if (lrow > 0) updateRow_('Leads', lrow, {
    qualification_route: 'nurture', status: 'Declined', calendar_booking_status: 'N/A',
    manual_override: 'Decline', override_owner: 'email-action', override_timestamp: nowIso_(),
    next_step: 'Declined - self-serve plan sent'
  });
  var arow = findRow_('Assessments', 'lead_id', lead.lead_id);
  if (arow > 0) {
    var asmt = rowObject_('Assessments', arow);
    var oppRow = findRow_('Opportunities', 'assessment_id', asmt.assessment_id);
    if (oppRow > 0) updateRow_('Opportunities', oppRow, { stage: 'Closed Lost', lost_reason: 'Not a fit (declined)' });
  }
  var tips = declinePlan_(d);
  safe_(function () { sendDeclineEmail_(d, tips); }, 'decline-email', lead.lead_id, '');
  logActivity_('decision', lead.lead_id, 'declined', '', '');
}

function htmlPage_(title, msg) {
  var html =
    '<div style="font-family:Arial,Helvetica,sans-serif;max-width:520px;margin:60px auto;text-align:center;color:#0A0A0A">' +
    '<div style="font-size:22px;font-weight:bold;color:#FF1198;margin-bottom:10px">' + esc_(title) + '</div>' +
    '<p style="font-size:15px;line-height:1.5">' + esc_(msg) + '</p>' +
    '<p style="color:#8a8a8a;font-size:13px;margin-top:24px">Beast Growth Assessment</p></div>';
  return HtmlService.createHtmlOutput(html).setTitle('Beast Growth Assessment');
}
