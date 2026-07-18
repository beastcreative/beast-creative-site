/**
 * Triggers.gs — installable time-driven triggers.
 * Run installTriggers() once from the editor after deploying. Re-running clears
 * and reinstalls, so it is safe to call again after changing schedules.
 */

var TRIGGER_FNS = ['reconcileBookings', 'sendDailyDigest', 'checkBookingFollowups_', 'onAssessmentEdit', 'onSheetEdit', 'processPending_'];

function installTriggers() {
  removeTriggers();
  // Background processing of new intakes (AI brief + emails + task), every minute.
  ScriptApp.newTrigger('processPending_').timeBased().everyMinutes(1).create();
  // Reconcile calendar bookings every 15 minutes.
  ScriptApp.newTrigger('reconcileBookings').timeBased().everyMinutes(15).create();
  // Weekday morning digest at 8am in the project timezone.
  ScriptApp.newTrigger('sendDailyDigest').timeBased().atHour(8).everyDays(1).create();
  // Booking follow-up reminders, checked hourly (gated to ~24h/72h per lead).
  ScriptApp.newTrigger('checkBookingFollowups_').timeBased().everyHours(1).create();
  // Sheet-edit routing: meeting outcomes + lead Approve/Decline decisions.
  ScriptApp.newTrigger('onSheetEdit').forSpreadsheet(workbook_()).onEdit().create();
  return 'Triggers installed: processPending_ (1m), reconcileBookings (15m), ' +
    'sendDailyDigest (daily 8am), checkBookingFollowups_ (hourly), onSheetEdit (on edit).';
}

function removeTriggers() {
  ScriptApp.getProjectTriggers().forEach(function (t) {
    if (TRIGGER_FNS.indexOf(t.getHandlerFunction()) !== -1) ScriptApp.deleteTrigger(t);
  });
  return 'Triggers removed.';
}

/* ── One-shot setup helper ─────────────────────────────────────────
 * Run setup() once from the editor for a fresh project: builds the workbook,
 * then installs triggers. Set Script Properties BEFORE running this.
 */
function setup() {
  var a = initWorkbook();
  var b = installTriggers();
  return a + '\n' + b;
}

/* ── Self-test: exercise routing + a fake intake without HTTP ──────── */
function selfTest() {
  var sample = {
    secret: CONFIG.sharedSecret, first_name: 'Test', last_name: 'Lead', work_email: 'test+selftest@example.com',
    company_name: 'Self Test Co', company_website: 'selftest.example', company_type: 'B2B / SaaS',
    company_stage: 'Established', annual_revenue_range: '$5M – $25M', primary_goals: ['More qualified leads'],
    biggest_challenge: 'Testing the pipeline', desired_result: 'A written row', current_marketing: ['SEO'],
    current_monthly_investment: '$5K – $10K / mo', potential_monthly_investment: '$10K – $25K / mo',
    timeline: '1 – 3 months', decision_role: 'I make the decision', speaking_with_agencies: 'No',
    consent: true, website: '', elapsed_ms: 60000, assessment_type: 'selftest'
  };
  var res = doPost({ postData: { contents: JSON.stringify(sample) } });
  return res.getContent();
}
