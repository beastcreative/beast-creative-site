/**
 * Processing.gs — background side-effects for new intakes.
 *
 * doPost persists the lead and returns instantly. This function (a 1-minute
 * trigger) does the slow work: AI brief, prospect confirmation, internal alert,
 * and follow-up task. It claims each unprocessed assessment by writing a marker
 * to internal_brief_url, so work runs exactly once and never blocks the visitor.
 */
function processPending_() {
  var assessments = readObjects_('Assessments');
  var now = new Date().getTime();

  for (var i = 0; i < assessments.length; i++) {
    var a = assessments[i];
    if (a.internal_brief_url) continue;                         // already processed/claimed
    var submitted = parseIso_(a.submitted_at);
    if (!submitted || (now - submitted.getTime()) > 2 * 3600000) continue; // only recent intakes

    var arow = findRow_('Assessments', 'assessment_id', a.assessment_id);
    if (arow < 0) continue;
    updateRow_('Assessments', arow, { internal_brief_url: 'generating' }); // claim (prevents re-run)

    var lead = leadFor_(a.lead_id);
    if (!lead) continue;
    var d = lead;                                               // Leads row carries all intake fields by name
    var q = leadRowToQ_(lead);
    var ids = { leadId: a.lead_id, assessmentId: a.assessment_id, companyId: a.company_id, contactId: a.contact_id, briefUrl: '' };

    safe_(function () { ids.briefUrl = createInternalBrief_(d, q, ids); }, 'brief', a.lead_id, '');
    safe_(function () { sendProspectConfirmation_(d, q.route); }, 'confirmation', a.lead_id, '');
    safe_(function () { sendInternalNotification_(d, q.route, ids); }, 'internal-notify', a.lead_id, '');
    safe_(function () { createFollowUpTask_(d, q.route, ids); }, 'task', a.lead_id, '');

    if (!ids.briefUrl) updateRow_('Assessments', arow, { internal_brief_url: 'error' }); // don't loop on failure
    logActivity_('process', a.lead_id, 'done', q.route, '');
  }
}

/** Rebuild the qualification result object from a stored Leads row. */
function leadRowToQ_(lead) {
  var cs = {};
  try { cs = JSON.parse(lead.qualification_scores || '{}'); } catch (e) {}
  return {
    route: lead.qualification_route,
    score: Number(lead.qualification_score) || 0,
    categoryScores: cs,
    reasons: String(lead.qualification_reasons || '').split(' | ').filter(Boolean),
    flags: String(lead.qualification_flags || '').split('; ').filter(Boolean),
    version: lead.qualification_version
  };
}
