/**
 * Followups.gs — booking follow-up reminders + meeting-outcome routing.
 *
 * checkBookingFollowups_ (daily trigger): nudges qualified-but-unbooked leads at
 * ~24h and ~3 days, then stops and hands to a human.
 * onSheetEdit (installable onEdit trigger): meeting_outcome on Assessments routes
 * the opportunity + recap; Decision (Approve/Decline) on Leads approves or
 * declines. Minimal human input: set one cell, automation runs. Plus
 * autoDeclineStale_: undecided manual-review leads auto-get a self-serve plan.
 */

/* ── Booking follow-up reminders ──────────────────────────────────── */
function checkBookingFollowups_() {
  var leads = readObjects_('Leads');
  var now = new Date();
  leads.forEach(function (l) {
    if (l.calendar_booking_status !== 'Awaiting Booking' || !l.work_email) return;
    var created = parseIso_(l.qualified_at || l.created_at);
    if (!created) return;
    var hours = (now.getTime() - created.getTime()) / 3600000;
    var count = Number(l.reminder_count) || 0;
    var row = findRow_('Leads', 'lead_id', l.lead_id);
    if (row < 0) return;

    if (count === 0 && hours >= 24) {
      safe_(function () { sendBookingReminder_(l, 'first'); }, 'reminder', l.lead_id, '');
      updateRow_('Leads', row, { reminder_count: 1, last_reminder_at: nowIso_() });
    } else if (count === 1 && hours >= 72) {
      safe_(function () { sendBookingReminder_(l, 'final'); }, 'reminder', l.lead_id, '');
      updateRow_('Leads', row, { reminder_count: 2, last_reminder_at: nowIso_() });
    } else if (count >= 2 && hours >= 96) {
      updateRow_('Leads', row, {
        calendar_booking_status: 'Qualified - Not Booked',
        status: 'Follow-Up Required',
        next_step: 'Manual follow-up (unbooked)'
      });
      appendRow_('Tasks', {
        task_id: newId_('task'), related_type: 'Lead', related_id: l.lead_id, assigned_to: CONFIG.defaultOwner,
        task_type: 'Follow up', task_title: 'Unbooked qualified: ' + l.company_name, due_date: dueInDays_(0),
        status: 'Open', priority: 'High', completed_at: '', notes: 'Qualified lead did not book after reminders.'
      });
      logActivity_('followup', l.lead_id, 'not_booked', '', '');
    }
  });
  autoDeclineStale_();
}

function sendBookingReminder_(l, kind) {
  var subject = kind === 'final' ? 'Last chance to book your Growth Diagnostic' : 'Ready to book your Growth Diagnostic?';
  var body =
    '<p>Hi ' + esc_(l.first_name) + ',</p>' +
    '<p>You completed the Beast Growth Assessment and qualified for a Growth Diagnostic, but have not picked a time yet.</p>' +
    '<p><a href="' + esc_(CONFIG.bookingUrl) + '" style="display:inline-block;background:#FF1198;color:#fff;text-decoration:none;padding:12px 22px;border-radius:8px;font-weight:bold">Book your Growth Diagnostic</a></p>' +
    (kind === 'final'
      ? '<p>This is the last reminder we will send automatically. If the timing is not right, just reply and let us know.</p>'
      : '<p>It takes 30 minutes, and there is no pitch, just a working diagnosis of your biggest growth constraint.</p>');
  send_(l.work_email, subject, '<div style="' + EMAIL_WRAP + '">' + body + brandFooter_() + '</div>');
}

/* ── Sheet-edit routing (installable onEdit) ──────────────────────────
 * Assessments.meeting_outcome → post-meeting routing.
 * Leads.manual_override (Approve/Decline) → approve or decline the lead.
 */
function onSheetEdit(e) {
  try {
    if (!e || !e.range) return;
    var sh = e.range.getSheet();
    var name = sh.getName();
    var row = e.range.getRow();
    if (row < 2) return;

    if (name === 'Assessments') {
      var acols = headers_('Assessments');
      if (e.range.getColumn() === acols.indexOf('meeting_outcome') + 1) {
        var outcome = String(e.value || e.range.getValue() || '').trim();
        if (outcome) processOutcome_(row, outcome);
      }
    } else if (name === 'Leads') {
      var lcols = headers_('Leads');
      if (e.range.getColumn() === lcols.indexOf('manual_override') + 1) {
        var dec = String(e.value || e.range.getValue() || '').trim();
        if (dec === 'Approve' || dec === 'Decline') {
          var lead = rowObject_('Leads', row);
          if (dec === 'Approve') approveLead_(lead); else declineLead_(lead);
        }
      }
    }
  } catch (err) {
    logActivity_('edit', '', 'error', '', String(err && err.message || err));
  }
}

/**
 * autoDeclineStale_ — manual-review leads left undecided past the configured
 * window auto-receive the self-serve plan. Set auto_decline_days to 0 to disable.
 * Called hourly from checkBookingFollowups_.
 */
function autoDeclineStale_() {
  var days = numSetting_('auto_decline_days', 3);
  if (days <= 0) return;
  var leads = readObjects_('Leads');
  var now = new Date().getTime();
  var cutoff = days * 24 * 3600000;
  leads.forEach(function (l) {
    if (l.qualification_route !== 'manual_review') return;
    if (l.manual_override) return;
    if (l.status === 'Declined' || l.status === 'Approved') return;
    var created = parseIso_(l.qualified_at || l.created_at);
    if (!created || (now - created.getTime()) < cutoff) return;
    declineLead_(l);
    logActivity_('auto-decline', l.lead_id, 'stale', days + 'd', '');
  });
}

var OUTCOME_MAP = {
  'Growth Blueprint': { stage: 'Growth Blueprint Proposed', task: 'Build Growth Blueprint', detail: 'We will put together a Growth Blueprint and share it with you.' },
  'Proposal': { stage: 'Proposal Sent', task: 'Create proposal', detail: 'We will send a proposal with scope and next steps.' },
  'Additional discovery': { stage: 'Qualification Review', task: 'Conduct assessment', detail: 'We will set up a short follow-up to dig a little deeper.' },
  'Nurture': { stage: 'Nurture', task: 'Nurture check-in', detail: 'We will stay in touch and share useful resources.' },
  'Closed lost': { stage: 'Closed Lost', task: '', detail: '' }
};

function processOutcome_(rowIdx, outcome) {
  var asmt = rowObject_('Assessments', rowIdx);
  if (!asmt || asmt.recap_sent_at) return; // idempotent: already handled
  var lead = leadFor_(asmt.lead_id);
  var m = OUTCOME_MAP[outcome] || { stage: 'Follow-Up Required', task: 'Follow up', detail: 'We will follow up with the next step.' };

  var oppRow = findRow_('Opportunities', 'assessment_id', asmt.assessment_id);
  if (oppRow > 0) updateRow_('Opportunities', oppRow, { stage: m.stage, next_step: m.task || 'None', next_step_due: dueInDays_(2) });

  if (m.task) {
    appendRow_('Tasks', {
      task_id: newId_('task'), related_type: 'Lead', related_id: asmt.lead_id, assigned_to: CONFIG.defaultOwner,
      task_type: m.task, task_title: m.task + ': ' + (lead ? lead.company_name : asmt.assessment_id),
      due_date: dueInDays_(2), status: 'Open', priority: 'Medium', completed_at: '', notes: ''
    });
  }

  if (lead && lead.work_email && outcome !== 'Closed lost') {
    safe_(function () {
      sendRecap_({
        first_name: lead.first_name, work_email: lead.work_email,
        goal: joinMulti_(lead.primary_goals),
        constraint: asmt.confirmed_constraint || asmt.likely_constraint || 'Discussed on the call',
        observations: String(asmt.observations || '').split('; ').filter(Boolean),
        next_step: outcome, next_detail: m.detail
      });
    }, 'recap-email', asmt.lead_id, '');
  }

  updateRow_('Assessments', rowIdx, { meeting_status: 'Completed', completed_at: nowIso_(), recap_sent_at: nowIso_(), recommended_next_step: outcome });
  var lrow = findRow_('Leads', 'lead_id', asmt.lead_id);
  if (lrow > 0) updateRow_('Leads', lrow, { status: outcome === 'Closed lost' ? 'Closed Lost' : 'Assessment Completed', next_step: m.task || 'None' });
  logActivity_('outcome', asmt.lead_id, outcome, 'processed', '');
}

/* ── small helpers ────────────────────────────────────────────────── */
function rowObject_(name, rowIdx) {
  var cols = headers_(name);
  var vals = sheet_(name).getRange(rowIdx, 1, 1, cols.length).getValues()[0];
  var o = {};
  cols.forEach(function (c, i) { o[c] = vals[i]; });
  return o;
}
function leadFor_(leadId) {
  var row = findRow_('Leads', 'lead_id', leadId);
  return row > 0 ? rowObject_('Leads', row) : null;
}
function parseIso_(s) {
  if (!s) return null;
  var d = new Date(s);
  return isNaN(d.getTime()) ? null : d;
}
