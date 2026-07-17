# Beast Growth Assessment — Apps Script Backend

The Google Workspace backend for the website's `/growth-assessment` form.
Website → **this Apps Script web app** → Google Sheets → Calendar → Gmail → Drive.

The website works **without** this backend (fallback mode: it computes the route
locally and emails via Resend). Connecting this backend upgrades it to the full
CRM/pipeline. Nothing about the public experience changes.

## Files

| File | Purpose |
|------|---------|
| `appsscript.json` | Manifest: OAuth scopes + web-app access. |
| `Config.gs` | Reads Script Properties + Settings tab. No hardcoded secrets. |
| `Sheets.gs` | `SCHEMA`, `initWorkbook()`, row read/write/dedupe, IDs, audit log. |
| `Routing.gs` | `computeRoute_()` — mirror of `lib/growth-assessment.ts`. |
| `Code.gs` | `doPost()`/`doGet()` + intake orchestration (validate → persist → notify). |
| `Email.gs` | Prospect confirmation + internal notification (HTML-escaped). |
| `Brief.gs` | Creates the internal Google Doc brief in Drive. |
| `Tasks.gs` | Follow-up tasks + weekday `sendDailyDigest()`. |
| `Calendar.gs` | `reconcileBookings()` — matches calendar events to awaiting leads. |
| `Triggers.gs` | `setup()`, `installTriggers()`, `selfTest()`. |

## One-time setup

1. **Create the workbook** `Beast Growth Pipeline` (or let the script use a bound sheet).
2. **Create the Apps Script project** (bound to the workbook via Extensions → Apps Script). Paste the one-file bundle `dist/beast-growth-assessment.gs.txt` into `Code.gs` (replacing its contents), and paste `appsscript.json` into the manifest. (The bundle is a generated concatenation of the individual `.gs` files — regenerate after code changes; see bottom of this file.)
3. **Set Script Properties** (Project Settings → Script properties):

   | Key | Required | Value |
   |-----|----------|-------|
   | `SHARED_SECRET` | ✅ | Must equal the website's `GROWTH_SHARED_SECRET`. Generate a long random string. |
   | `SPREADSHEET_ID` | ✅ (if standalone) | The workbook ID from its URL. Omit if the project is bound. |
   | `NOTIFY_EMAILS` | ✅ | Comma-separated internal recipients. |
   | `DEFAULT_OWNER` | ✅ | Default lead owner. |
   | `BOOKING_URL` | ✅ | Calendar appointment-schedule link. |
   | `DRIVE_ROOT_FOLDER_ID` | optional | "Beast Growth Operations" folder ID (for briefs). |
   | `BRIEF_TEMPLATE_DOC_ID` | optional | Google Doc template to copy for briefs. |
   | `CALENDAR_ID` | optional | Calendar to poll for bookings (default: primary). |
   | `SENDER_NAME` | optional | Default `Beast Creative`. |
   | `PRIVACY_URL` | optional | Default `https://beastcreativeagency.com/privacy`. |
   | `COMPANY_TIMEZONE` | optional | IANA tz, default `America/Chicago`. |

4. **Run `setup()`** once from the editor. It builds every tab (`initWorkbook()`)
   and installs triggers. Approve the OAuth scopes when prompted.
5. **Run `selfTest()`** — confirms a row lands in `Leads` and returns a JSON result.
   Delete the self-test row afterward.
6. **Deploy → New deployment → Web app.** Execute as **you** (the Beast account);
   who has access: **Anyone**. Copy the `/exec` URL.
7. **Wire the website:** set two env vars on Vercel and redeploy:
   - `GROWTH_APPS_SCRIPT_URL` = the `/exec` URL
   - `GROWTH_SHARED_SECRET` = the same string as `SHARED_SECRET`
8. Submit a real test from the site and confirm the row + emails.

## Redeployment

Editing `.gs` code requires **Deploy → Manage deployments → Edit → Version: New**
to publish changes to the same `/exec` URL. Changing Script Properties or Settings
tab values takes effect immediately (no redeploy).

## Security notes

- Secrets live only in Script Properties. The web app rejects any POST without a
  matching `SHARED_SECRET`.
- Honeypot + timing checks drop bots before any records are written.
- Internal Sheet URLs and the qualification score are never returned to the public.
- All values interpolated into emails are HTML-escaped.

Full column schema: `docs/beast-growth-assessment-v1-google/02-sheet-data-model.md`.
