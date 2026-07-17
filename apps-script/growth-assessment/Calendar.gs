/**
 * Calendar.gs — booking reconciliation (Option B from the spec).
 *
 * The public flow sends qualified prospects to a Google Calendar appointment
 * schedule (CONFIG.bookingUrl). This time-driven poller scans the assessment
 * calendar for recent events and matches them to awaiting leads by attendee
 * email, then updates Leads / Assessments / Opportunities and emails the
 * prospect a scheduled confirmation.
 *
 * Set CALENDAR_ID to the calendar the appointment schedule writes into (often
 * the owner's primary calendar). Install the trigger with installTriggers().
 */

function reconcileBookings() {
  var calId = CONFIG.calendarId;
  var cal = calId ? CalendarApp.getCalendarById(calId) : CalendarApp.getDefaultCalendar();
  if (!cal) { logActivity_('calendar', '', 'reconcile', 'no-calendar', ''); return; }

  // Look at events from now through the next 30 days (booking window).
  var start = new Date();
  var end = new Date(); end.setDate(end.getDate() + 30);
  var events = cal.getEvents(start, end);

  var awaiting = readObjects_('Leads').filter(function (l) {
    return l.calendar_booking_status === 'Awaiting Booking' && l.work_email;
  });
  if (!awaiting.length) return;

  var byEmail = {};
  awaiting.forEach(function (l) { byEmail[String(l.work_email).toLowerCase()] = l; });

  events.forEach(function (ev) {
    var guests = ev.getGuestList();
    for (var i = 0; i < guests.length; i++) {
      var email = String(guests[i].getEmail()).toLowerCase();
      var lead = byEmail[email];
      if (!lead) continue;
      markBooked_(lead, ev);
      delete byEmail[email]; // one booking per awaiting lead per run
      break;
    }
  });
}

function markBooked_(lead, ev) {
  var when = Utilities.formatDate(ev.getStartTime(), CONFIG.timezone, "EEE MMM d, yyyy 'at' h:mm a z");
  var meetLink = extractMeetLink_(ev);
  var meetingIso = Utilities.formatDate(ev.getStartTime(), 'UTC', "yyyy-MM-dd'T'HH:mm:ss'Z'");

  var leadRow = findRow_('Leads', 'lead_id', lead.lead_id);
  if (leadRow > 0) updateRow_('Leads', leadRow, {
    status: 'Scheduled', calendar_booking_status: 'Booked', calendar_event_id: ev.getId(),
    meeting_date: meetingIso, updated_at: nowIso_(), next_step: 'Conduct assessment'
  });

  var asmtRow = findRow_('Assessments', 'lead_id', lead.lead_id);
  if (asmtRow > 0) updateRow_('Assessments', asmtRow, {
    scheduled_at: nowIso_(), meeting_date: meetingIso, meeting_status: 'Scheduled'
  });

  // Advance the opportunity via its assessment link.
  var asmt = asmtRow > 0 ? readObjects_('Assessments')[asmtRow - 2] : null;
  if (asmt) {
    var oppRow = findRow_('Opportunities', 'assessment_id', asmt.assessment_id);
    if (oppRow > 0) updateRow_('Opportunities', oppRow, { stage: 'Scheduled', next_step: 'Conduct assessment', next_step_due: meetingIso.slice(0, 10) });
  }

  safe_(function () {
    sendScheduledEmail_({ first_name: lead.first_name, work_email: lead.work_email }, when, meetLink);
  }, 'scheduled-email', lead.lead_id, '');

  safe_(function () { sendMeetingBookedInternal_(lead, when); }, 'meeting-booked-notify', lead.lead_id, '');
  logActivity_('calendar', lead.lead_id, 'booked', when, '');
}

function sendMeetingBookedInternal_(lead, when) {
  var recipients = CONFIG.notifyEmails;
  if (!recipients.length) return;
  GmailApp.sendEmail(recipients.join(','), 'Meeting booked - ' + lead.company_name + ' - ' + when,
    lead.first_name + ' ' + lead.last_name + ' (' + lead.company_name + ') booked a Growth Assessment for ' + when + '.',
    { name: CONFIG.senderName });
}

function extractMeetLink_(ev) {
  var m = String(ev.getDescription() || '').match(/https:\/\/meet\.google\.com\/[a-z0-9-]+/i);
  return m ? m[0] : '';
}
