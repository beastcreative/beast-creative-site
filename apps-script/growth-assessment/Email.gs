/**
 * Email.gs — prospect + internal email.
 *
 * Prospect emails NEVER contain the internal score, route, budget judgment, or
 * risks. Internal emails carry the working detail + links. All interpolated
 * values are HTML-escaped. Sent via GmailApp from the deploying Beast account.
 */

function esc_(v) {
  return String(v === undefined || v === null ? '' : v)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

var EMAIL_WRAP = 'font-family:Arial,Helvetica,sans-serif;max-width:580px;color:#0A0A0A;line-height:1.5';
function brandFooter_() {
  return '<p style="margin-top:22px">The Beast Creative Team</p>' +
    '<p style="font-size:12px;color:#8a8a8a">You are receiving this because you submitted a Growth Assessment at ' +
    'beastcreativeagency.com. See our <a href="' + esc_(CONFIG.privacyUrl) + '">privacy policy</a>.</p>';
}
function send_(to, subject, html, plain) {
  GmailApp.sendEmail(to, subject, plain || 'Open this email in a client that supports HTML.',
    { htmlBody: html, name: CONFIG.senderName });
}

/* ── 1. Immediate route-specific confirmation ─────────────────────── */
function sendProspectConfirmation_(d, route) {
  var first = esc_(d.first_name);
  var subject, body;

  if (routeGetsBooking_(route)) {
    subject = 'Your next step with Beast';
    body =
      '<p>Hi ' + first + ',</p>' +
      '<p>Thanks for completing the Beast Growth Assessment. Based on what you shared, the next step is a 30-minute Growth Diagnostic.</p>' +
      '<p><a href="' + esc_(CONFIG.bookingUrl) + '" style="display:inline-block;background:#FF1198;color:#fff;text-decoration:none;padding:12px 22px;border-radius:8px;font-weight:bold">Book your Growth Diagnostic</a></p>' +
      '<p><strong>What you told us</strong><br>' +
      'Goal: ' + esc_(joinMulti_(d.primary_goals)) + '<br>' +
      'Challenge: ' + esc_(d.biggest_challenge) + '</p>' +
      '<p>On the call we will pressure-test the most likely constraint on that goal and show you where we would start. No pitch, no pressure. If anything has changed, just reply to this email.</p>';
  } else if (route === 'manual_review') {
    subject = 'We received your Beast Growth Assessment';
    body =
      '<p>Hi ' + first + ',</p>' +
      '<p>Thanks for completing the Beast Growth Assessment. A Beast strategist will review your responses and follow up within one business day with the most useful next step.</p>' +
      '<p>If anything has changed since you submitted, just reply to this email.</p>';
  } else {
    subject = 'We received your Beast Growth Assessment';
    body =
      '<p>Hi ' + first + ',</p>' +
      '<p>Thanks for sharing where your growth stands. A full Growth Diagnostic may not be the most useful next step for you just yet, but we do not want to leave you empty-handed.</p>' +
      '<p><a href="https://beastcreativeagency.com/work">See how Beast has driven measurable growth</a>, and keep this thread. As your needs change, we are one reply away.</p>';
  }

  send_(d.work_email, subject, '<div style="' + EMAIL_WRAP + '">' + body + brandFooter_() + '</div>');
}

/* ── 2. Post-booking Growth Diagnostic Snapshot ───────────────────── */
function sendSnapshot_(d, meetingWhen, meetLink) {
  var examine = examineAreas_(d);
  var body =
    '<p>Hi ' + esc_(d.first_name) + ',</p>' +
    '<p>Your Beast Growth Diagnostic is booked for <strong>' + esc_(meetingWhen) + '</strong>.' +
    (meetLink ? ' Join here: <a href="' + esc_(meetLink) + '">' + esc_(meetLink) + '</a>.' : '') + '</p>' +
    '<p><strong>What we heard</strong><br>' +
    'Goal: ' + esc_(joinMulti_(d.primary_goals)) + '<br>' +
    'Challenge: ' + esc_(d.biggest_challenge) + '<br>' +
    'Desired outcome: ' + esc_(d.desired_result) + '</p>' +
    '<p><strong>What we will examine</strong></p><ul>' +
    examine.map(function (a) { return '<li>' + esc_(a) + '</li>'; }).join('') + '</ul>' +
    '<p><strong>What to have ready</strong></p><ul>' +
    '<li>Any recent performance numbers you can share</li>' +
    '<li>Your current marketing mix and spend</li>' +
    '<li>Access to relevant reports, only if you choose</li>' +
    '<li>Anyone else who should be part of the decision</li></ul>' +
    '<p><strong>Agenda</strong></p><ul>' +
    '<li>Confirm your goals and context</li>' +
    '<li>Identify the primary growth constraint</li>' +
    '<li>Review the biggest opportunities and tradeoffs</li>' +
    '<li>Agree on the best next step</li></ul>' +
    '<p>This is a working diagnostic, not a pre-written sales presentation. To reschedule, use the link in your calendar invite.</p>';
  send_(d.work_email, 'Your Beast Growth Diagnostic is booked', '<div style="' + EMAIL_WRAP + '">' + body + brandFooter_() + '</div>');
}

/** Deterministic "what we'll examine" areas from the prospect's stated goals. */
var EXAMINE_MAP = {
  'More qualified leads': 'Lead quality and acquisition efficiency',
  'Higher website conversion': 'Conversion path and landing experience',
  'Better paid media ROI': 'Paid media efficiency and creative',
  'Stronger brand / positioning': 'Positioning and messaging clarity',
  'More organic & AI search visibility': 'Organic and AI search visibility',
  'Launch a product or market': 'Go-to-market approach',
  'Better measurement & attribution': 'Measurement and attribution',
  'Retention & repeat revenue': 'Retention and lifecycle revenue'
};
function examineAreas_(d) {
  var goals = Array.isArray(d.primary_goals) ? d.primary_goals : String(d.primary_goals || '').split('; ').filter(Boolean);
  var areas = goals.map(function (g) { return EXAMINE_MAP[String(g).trim()]; }).filter(Boolean).slice(0, 3);
  if (!areas.length) areas = ['The primary constraint on your stated goal', 'Where the fastest, lowest-risk gains are'];
  return areas;
}

/* ── 3. Post-meeting Growth Diagnostic Recap ──────────────────────── */
function sendRecap_(r) {
  var obs = (r.observations && r.observations.length) ? r.observations : [];
  var body =
    '<p>Hi ' + esc_(r.first_name) + ',</p>' +
    '<p>Thanks for your time on the Growth Diagnostic. Here is a short recap.</p>' +
    '<p><strong>Your goal</strong><br>' + esc_(r.goal || 'Grow the business') + '</p>' +
    '<p><strong>The primary constraint we discussed</strong><br>' + esc_(r.constraint || 'See notes below') + '</p>' +
    (obs.length ? '<p><strong>A few observations</strong></p><ul>' + obs.map(function (o) { return '<li>' + esc_(o) + '</li>'; }).join('') + '</ul>' : '') +
    '<p><strong>Agreed next step</strong><br>' + esc_(r.next_step || 'We will follow up shortly') + '</p>' +
    (r.next_detail ? '<p>' + esc_(r.next_detail) + '</p>' : '') +
    '<p>Reply here with any questions in the meantime.</p>';
  send_(r.work_email, 'Your Beast Growth Diagnostic recap', '<div style="' + EMAIL_WRAP + '">' + body + brandFooter_() + '</div>');
}

/* ── Decline: honest, generous self-serve plan (auto-sent on Decline) ── */
function sendDeclineEmail_(d, tips) {
  var items = (tips && tips.length) ? tips : [];
  var body =
    '<p>Hi ' + esc_(d.first_name) + ',</p>' +
    '<p>Thanks for taking the Beast Growth Assessment. Being straight with you: a full Growth Diagnostic may not be the most useful next step for where ' + esc_(d.company_name) + ' is right now. But we do not want to leave you empty-handed.</p>' +
    '<p>Here are a few moves you can make on your own to build momentum:</p><ul>' +
    items.map(function (t) { return '<li>' + esc_(t) + '</li>'; }).join('') +
    '</ul>' +
    '<p>Put in the sweat equity on these, and when the timing is right, we would love to talk. The door stays open.</p>';
  send_(d.work_email, 'A few growth moves you can make on your own', '<div style="' + EMAIL_WRAP + '">' + body + brandFooter_() + '</div>');
}

/* ── Internal team notification ───────────────────────────────────── */
function sendInternalNotification_(d, route, ids, q) {
  var recipients = CONFIG.notifyEmails;
  if (!recipients.length) return;
  var priority = route === 'priority_qualified';
  var subject = (priority ? '[PRIORITY] ' : '') + 'New Growth Assessment - ' + route + ' - ' + d.company_name;
  var sheetUrl = workbook_().getUrl();

  var rows = [
    ['Route', route], ['Name', d.first_name + ' ' + d.last_name], ['Email', d.work_email], ['Phone', d.phone || '-'],
    ['Company', d.company_name + ' (' + d.company_website + ')'],
    ['Type / Stage / Revenue', d.company_type + ' / ' + d.company_stage + ' / ' + d.annual_revenue_range],
    ['Goals', joinMulti_(d.primary_goals)], ['Challenge', d.biggest_challenge], ['Desired result', d.desired_result],
    ['Current marketing', joinMulti_(d.current_marketing)],
    ['Investment (now to potential)', d.current_monthly_investment + ' to ' + d.potential_monthly_investment],
    ['Timeline', d.timeline], ['Decision role', d.decision_role], ['Other agencies', d.speaking_with_agencies],
    ['Source / UTM', (d.utm_source || 'direct') + ' / ' + (d.utm_campaign || '') + (d.gclid ? ' / gclid' : '')],
    ['Booking', routeGetsBooking_(route) ? 'Awaiting booking' : 'N/A']
  ];
  var body = rows.map(function (r) {
    return '<tr><td style="padding:4px 10px;font-weight:bold;vertical-align:top">' + esc_(r[0]) +
      '</td><td style="padding:4px 10px">' + esc_(r[1] || '-') + '</td></tr>';
  }).join('');

  var links = '<p><a href="' + esc_(sheetUrl) + '">Open pipeline sheet</a>' +
    (ids.briefUrl && String(ids.briefUrl).indexOf('http') === 0 ? ' &nbsp;|&nbsp; <a href="' + esc_(ids.briefUrl) + '">Internal brief (full AI analysis)</a>' : '') + '</p>';

  // Inline "why" so the decision can be made without opening the brief.
  var why = '';
  if (q) {
    var c = q.categoryScores || {};
    var lastReason = (q.reasons && q.reasons.length) ? q.reasons[q.reasons.length - 1] : '';
    why = '<div style="margin:14px 0;padding:12px 14px;background:#faf5f8;border-left:3px solid #FF1198">' +
      '<div style="font-weight:bold">Score ' + q.score + '/100 &middot; ' + esc_(route) + '</div>' +
      '<div style="font-size:13px;color:#555;margin-top:4px">need ' + (c.strategic_need || 0) + ' &middot; budget ' + (c.investment || 0) +
      ' &middot; timing ' + (c.timing || 0) + ' &middot; authority ' + (c.decision || 0) + ' &middot; fit ' + (c.business_fit || 0) + '</div>' +
      '<div style="font-size:13px;color:#555;margin-top:4px">' + esc_(lastReason) + '</div></div>';
  }

  // One-click decision buttons (signed links to the web app).
  var approveUrl = actionUrl_(ids.leadId, 'approve');
  var declineUrl = actionUrl_(ids.leadId, 'decline');
  var buttons = (approveUrl && declineUrl) ?
    '<p style="margin:16px 0">' +
    '<a href="' + approveUrl + '" style="display:inline-block;background:#16a34a;color:#fff;text-decoration:none;padding:11px 20px;border-radius:8px;font-weight:bold;margin-right:8px">Approve + send booking link</a>' +
    '<a href="' + declineUrl + '" style="display:inline-block;background:#0A0A0A;color:#fff;text-decoration:none;padding:11px 20px;border-radius:8px;font-weight:bold">Decline + send self-serve plan</a>' +
    '</p><p style="font-size:12px;color:#8a8a8a">One click. Approve books them; Decline auto-sends an AI self-serve plan. Full analysis is in the brief.</p>' : '';

  var html = '<div style="font-family:Arial,Helvetica,sans-serif;max-width:640px;color:#0A0A0A">' +
    '<h2 style="margin:0 0 4px">' + (priority ? 'Priority: ' : '') + 'New Growth Assessment</h2>' +
    '<p style="color:#8a8a8a;margin:0 0 12px">Lead ' + esc_(ids.leadId) + '</p>' +
    why + buttons +
    '<table style="border-collapse:collapse;font-size:14px">' + body + '</table>' + links + '</div>';

  send_(recipients.join(','), subject, html, 'New Growth Assessment (' + route + '). Open in Gmail to view details.');
}
