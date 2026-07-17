/**
 * Tasks.gs — follow-up tasks live in the Tasks tab (version 1).
 * A later version can mirror these into the Google Tasks API.
 */

function createFollowUpTask_(d, route, ids) {
  var taskType, title, priority, dueDays;
  switch (route) {
    case 'priority_qualified':
      taskType = 'Prepare internal brief'; title = 'PRIORITY: prep + book ' + d.company_name; priority = 'High'; dueDays = 1; break;
    case 'qualified':
      taskType = 'Prepare internal brief'; title = 'Prep + confirm booking ' + d.company_name; priority = 'High'; dueDays = 2; break;
    case 'manual_review':
      taskType = 'Review new intake'; title = 'Review intake ' + d.company_name; priority = 'Medium'; dueDays = 1; break;
    default:
      taskType = 'Nurture check-in'; title = 'Nurture ' + d.company_name; priority = 'Low'; dueDays = 14;
  }
  appendRow_('Tasks', {
    task_id: newId_('task'), related_type: 'Lead', related_id: ids.leadId, assigned_to: CONFIG.defaultOwner,
    task_type: taskType, task_title: title, due_date: dueInDays_(dueDays), status: 'Open',
    priority: priority, completed_at: '', notes: ''
  });
}

/** Weekday morning digest: overdue tasks, today's meetings, new manual-review leads. */
function sendDailyDigest() {
  var recipients = CONFIG.notifyEmails;
  if (!recipients.length) return;
  var today = Utilities.formatDate(new Date(), CONFIG.timezone, 'yyyy-MM-dd');

  var tasks = readObjects_('Tasks');
  var overdue = tasks.filter(function (t) { return t.status !== 'Done' && t.due_date && t.due_date < today; });
  var dueToday = tasks.filter(function (t) { return t.status !== 'Done' && t.due_date === today; });

  var leads = readObjects_('Leads');
  var manualReview = leads.filter(function (l) { return l.qualification_route === 'manual_review' && l.status === 'New'; });
  var meetings = leads.filter(function (l) { return l.meeting_date && String(l.meeting_date).slice(0, 10) === today; });

  var section = function (label, arr, fmt) {
    if (!arr.length) return '<p><strong>' + esc_(label) + ':</strong> none</p>';
    return '<p><strong>' + esc_(label) + ' (' + arr.length + ')</strong></p><ul>' +
      arr.map(function (x) { return '<li>' + esc_(fmt(x)) + '</li>'; }).join('') + '</ul>';
  };

  var html = '<div style="font-family:Arial,sans-serif;max-width:640px;color:#0A0A0A">' +
    '<h2>Beast Growth - Daily Digest (' + esc_(today) + ')</h2>' +
    section('Overdue tasks', overdue, function (t) { return t.task_title + ' - due ' + t.due_date; }) +
    section("Today's meetings", meetings, function (l) { return l.company_name + ' - ' + l.first_name + ' ' + l.last_name; }) +
    section('New manual-review leads', manualReview, function (l) { return l.company_name + ' - ' + l.work_email; }) +
    section('Tasks due today', dueToday, function (t) { return t.task_title; }) +
    '</div>';

  GmailApp.sendEmail(recipients.join(','), 'Beast Growth - Daily Digest ' + today, 'Open in Gmail to view the digest.',
    { htmlBody: html, name: CONFIG.senderName });
}

/** Read a whole tab as an array of {column: value} objects. */
function readObjects_(name) {
  var sh = sheet_(name);
  var last = sh.getLastRow();
  if (last < 2) return [];
  var cols = headers_(name);
  var values = sh.getRange(2, 1, last - 1, cols.length).getValues();
  return values.map(function (row) {
    var o = {};
    cols.forEach(function (c, i) { o[c] = row[i]; });
    return o;
  });
}
