/**
 * Email.gs — prospect confirmations + internal notifications.
 *
 * Prospect emails NEVER contain the internal route or score. Internal emails
 * include the working detail + links. All interpolated values are HTML-escaped.
 * Uses GmailApp so mail is sent from the deploying Beast account.
 */

function esc_(v) {
  return String(v === undefined || v === null ? '' : v)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function emailOptions_() {
  return { name: CONFIG.senderName };
}

/** Prospect: "We received your Beast Growth Assessment". No internal detail. */
function sendProspectConfirmation_(d, route) {
  var scheduling = routeGetsBooking_(route);
  var subject = 'We received your Beast Growth Assessment';
  var lead = esc_(d.first_name);
  var nextLine = scheduling
    ? 'The next step is a 30-minute Growth Diagnostic. You can choose a time here:<br><a href="' + esc_(CONFIG.bookingUrl) + '">Book your Growth Diagnostic</a>'
    : (route === 'manual_review'
      ? 'A member of the Beast team will review your information and follow up with the most useful next step.'
      : 'We will point you toward the most useful resources and keep the door open as your needs change.');

  var html =
    '<div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;color:#0A0A0A">' +
    '<p>Hi ' + lead + ',</p>' +
    '<p>Thanks for completing the Beast Growth Assessment. We have your responses and are reviewing them.</p>' +
    '<p>' + nextLine + '</p>' +
    '<p>If anything has changed since you submitted, just reply to this email.</p>' +
    '<p>— The Beast Creative Team</p>' +
    '<p style="font-size:12px;color:#888">You are receiving this because you submitted a Growth Assessment at beastcreativeagency.com. ' +
    'See our <a href="' + esc_(CONFIG.privacyUrl) + '">privacy policy</a>.</p>' +
    '</div>';

  var plain = 'Hi ' + d.first_name + ',\n\nThanks for completing the Beast Growth Assessment. We have your responses and are reviewing them.\n\n' +
    (scheduling ? 'Book your Growth Diagnostic: ' + CONFIG.bookingUrl : (route === 'manual_review'
      ? 'A member of the Beast team will review your information and follow up.'
      : 'We will point you toward the most useful resources.')) +
    '\n\nIf anything has changed, just reply to this email.\n\n— The Beast Creative Team';

  GmailApp.sendEmail(d.work_email, subject, plain, { htmlBody: html, name: CONFIG.senderName });
}

/** Internal team notification with full working detail + links. */
function sendInternalNotification_(d, route, ids) {
  var recipients = CONFIG.notifyEmails;
  if (!recipients.length) return;
  var priority = route === 'priority_qualified';
  var subject = (priority ? '[PRIORITY] ' : '') + 'New Growth Assessment - ' + route + ' - ' + d.company_name;
  var sheetUrl = workbook_().getUrl();

  var rows = [
    ['Route', route], ['Name', d.first_name + ' ' + d.last_name], ['Email', d.work_email], ['Phone', d.phone || '—'],
    ['Company', d.company_name + ' (' + d.company_website + ')'],
    ['Type / Stage / Revenue', d.company_type + ' · ' + d.company_stage + ' · ' + d.annual_revenue_range],
    ['Goals', joinMulti_(d.primary_goals)], ['Challenge', d.biggest_challenge], ['Desired result', d.desired_result],
    ['Current marketing', joinMulti_(d.current_marketing)],
    ['Investment (now → potential)', d.current_monthly_investment + ' → ' + d.potential_monthly_investment],
    ['Timeline', d.timeline], ['Decision role', d.decision_role], ['Other agencies', d.speaking_with_agencies],
    ['Source / UTM', (d.utm_source || 'direct') + ' / ' + (d.utm_campaign || '') + (d.gclid ? ' · gclid' : '')],
    ['Booking', routeGetsBooking_(route) ? 'Awaiting booking' : 'N/A']
  ];
  var body = rows.map(function (r) {
    return '<tr><td style="padding:4px 10px;font-weight:bold;vertical-align:top">' + esc_(r[0]) +
      '</td><td style="padding:4px 10px">' + esc_(r[1] || '—') + '</td></tr>';
  }).join('');

  var links = '<p><a href="' + esc_(sheetUrl) + '">Open pipeline sheet</a>' +
    (ids.briefUrl ? ' &nbsp;|&nbsp; <a href="' + esc_(ids.briefUrl) + '">Internal brief</a>' : '') + '</p>';

  var html = '<div style="font-family:Arial,Helvetica,sans-serif;max-width:640px;color:#0A0A0A">' +
    '<h2 style="margin:0 0 4px">' + (priority ? 'Priority: ' : '') + 'New Growth Assessment</h2>' +
    '<p style="color:#888;margin:0 0 12px">Lead ' + esc_(ids.leadId) + '</p>' +
    '<table style="border-collapse:collapse;font-size:14px">' + body + '</table>' + links + '</div>';

  GmailApp.sendEmail(recipients.join(','), subject, 'New Growth Assessment (' + route + ') — open in Gmail to view details.',
    { htmlBody: html, name: CONFIG.senderName });
}

/** Scheduled confirmation, sent after booking reconciliation matches an event. */
function sendScheduledEmail_(d, meetingWhen, meetLink) {
  var subject = 'Your Beast Growth Assessment is scheduled';
  var html = '<div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;color:#0A0A0A">' +
    '<p>Hi ' + esc_(d.first_name) + ',</p>' +
    '<p>Your Beast Growth Assessment is booked for <strong>' + esc_(meetingWhen) + '</strong>.</p>' +
    (meetLink ? '<p>Join: <a href="' + esc_(meetLink) + '">' + esc_(meetLink) + '</a></p>' : '') +
    '<p>We will review your stated goal, your channels, and the most likely constraint on growth. ' +
    'Come with any recent numbers you have handy. To reschedule, use the link in your calendar invite.</p>' +
    '<p>— The Beast Creative Team</p></div>';
  GmailApp.sendEmail(d.work_email, subject, 'Your Beast Growth Assessment is scheduled for ' + meetingWhen + '.',
    { htmlBody: html, name: CONFIG.senderName });
}
