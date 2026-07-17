/**
 * Config.gs — configuration + secrets access.
 *
 * All secrets and IDs live in Script Properties (Project Settings → Script
 * properties). NOTHING is hardcoded. The Settings tab in the workbook can
 * override operational (non-secret) values at runtime without a redeploy.
 *
 * Required Script Properties (set these before deploying — see README):
 *   SHARED_SECRET        must equal the website's GROWTH_SHARED_SECRET env var
 *   SPREADSHEET_ID       the Beast Growth Pipeline workbook id (omit if bound)
 *   NOTIFY_EMAILS        comma-separated internal recipients
 *   DEFAULT_OWNER        default lead owner (name or email)
 *   BOOKING_URL          Google Calendar appointment-schedule link
 * Optional:
 *   DRIVE_ROOT_FOLDER_ID   "Beast Growth Operations" folder (for briefs)
 *   BRIEF_TEMPLATE_DOC_ID  a Google Doc template to copy for internal briefs
 *   CALENDAR_ID            calendar to poll for booking reconciliation
 *   SENDER_NAME            email sender name (default "Beast Creative")
 *   PRIVACY_URL            privacy policy URL used in emails
 *   COMPANY_TIMEZONE       IANA tz (default America/Chicago)
 */

var SETTINGS_CACHE = null;

/** Read a Script Property. */
function prop_(key, fallback) {
  var v = PropertiesService.getScriptProperties().getProperty(key);
  return v === null || v === undefined || v === '' ? (fallback === undefined ? '' : fallback) : v;
}

/**
 * Read a value from the Settings tab (key/value rows), cached per execution.
 * Falls back to the matching Script Property, then to `fallback`.
 */
function setting_(key, fallback) {
  if (SETTINGS_CACHE === null) {
    SETTINGS_CACHE = {};
    try {
      var sh = workbook_().getSheetByName('Settings');
      if (sh) {
        var rows = sh.getDataRange().getValues();
        for (var i = 1; i < rows.length; i++) {
          if (rows[i][0]) SETTINGS_CACHE[String(rows[i][0]).trim()] = rows[i][1];
        }
      }
    } catch (err) {
      // Settings tab may not exist yet on first run.
    }
  }
  if (SETTINGS_CACHE[key] !== undefined && SETTINGS_CACHE[key] !== '') return SETTINGS_CACHE[key];
  return prop_(key.toUpperCase(), fallback);
}

var CONFIG = {
  get sharedSecret() { return prop_('SHARED_SECRET'); },
  get spreadsheetId() { return prop_('SPREADSHEET_ID'); },
  get notifyEmails() {
    return String(setting_('internal_notification_emails', prop_('NOTIFY_EMAILS')))
      .split(',').map(function (s) { return s.trim(); }).filter(Boolean);
  },
  get defaultOwner() { return setting_('default_owner', prop_('DEFAULT_OWNER', 'Beast Team')); },
  get bookingUrl() { return setting_('booking_page_url', prop_('BOOKING_URL')); },
  get driveRootId() { return setting_('drive_root_folder_id', prop_('DRIVE_ROOT_FOLDER_ID')); },
  get briefTemplateId() { return prop_('BRIEF_TEMPLATE_DOC_ID'); },
  get calendarId() { return setting_('calendar_id', prop_('CALENDAR_ID')); },
  get senderName() { return setting_('email_sender_name', prop_('SENDER_NAME', 'Beast Creative')); },
  get privacyUrl() { return setting_('privacy_policy_url', prop_('PRIVACY_URL', 'https://beastcreativeagency.com/privacy')); },
  get timezone() { return setting_('company_timezone', prop_('COMPANY_TIMEZONE', 'America/Chicago')); },
  MAX_PAYLOAD_BYTES: 20000,
  MIN_ELAPSED_MS: 2500
};
