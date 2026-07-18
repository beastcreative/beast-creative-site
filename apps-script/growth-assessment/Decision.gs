/**
 * Decision.gs — approve / decline a lead.
 *
 * Triggered by a human setting the lead's `manual_override` cell (Approve/Decline)
 * in the sheet, or by autoDeclineStale_ when a manual-review lead sits undecided
 * past the configured window. Approve sends the prospect their booking link;
 * Decline auto-sends an AI-drafted self-serve growth plan. Both are idempotent.
 */

function approveLead_(lead) {
  if (lead.status === 'Approved') return;
  var d = lead;
  var route = 'qualified';
  var lrow = findRow_('Leads', 'lead_id', lead.lead_id);
  if (lrow > 0) updateRow_('Leads', lrow, {
    qualification_route: route, status: 'Approved', calendar_booking_status: 'Awaiting Booking',
    manual_override: 'Approve', override_owner: CONFIG.defaultOwner, override_timestamp: nowIso_(),
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
    status: 'Open', priority: 'High', completed_at: '', notes: 'Manually approved.'
  });
  logActivity_('decision', lead.lead_id, 'approved', '', '');
}

function declineLead_(lead) {
  if (lead.status === 'Declined') return;
  var d = lead;
  var lrow = findRow_('Leads', 'lead_id', lead.lead_id);
  if (lrow > 0) updateRow_('Leads', lrow, {
    qualification_route: 'nurture', status: 'Declined', calendar_booking_status: 'N/A',
    manual_override: 'Decline', override_owner: CONFIG.defaultOwner, override_timestamp: nowIso_(),
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
