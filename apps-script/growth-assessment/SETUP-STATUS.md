# Beast Growth Assessment — Setup Status

Living checklist for the guided Google Workspace implementation. Updated as we go.
**No step is done until it shows ✅ Complete here.**

**Status legend:** ⬜ Not started · ⏳ Waiting on John · 🔧 Configured · 🔐 Authorized · 🧪 Tested · ✅ Complete

---

## Phase 1 — Automated (repo-side, no Google account needed)

| # | Item | Status |
|---|------|--------|
| 1.1 | Website page, 5-step form, API relay built | ✅ Complete |
| 1.2 | Apps Script backend files written | ✅ Complete |
| 1.3 | Init script builds tabs + headers + **lookup values + dropdown validation + protected structure + formatting** | ✅ Complete |
| 1.4 | One-file paste bundle generated (`dist/beast-growth-assessment.gs.txt`) | ✅ Complete |
| 1.5 | Shared secret generated + stored locally (git-ignored) | ✅ Complete |
| 1.6 | `tsc` + `next build` + render + fallback API tests pass | ✅ Complete |
| 1.7 | Live in fallback mode at `/growth-assessment` | ✅ Complete |

---

## Phase 2 — Google setup (guided, one step at a time)

| # | Item | What I need from you | Status |
|---|------|----------------------|--------|
| 2.1 | Choose the Google account that owns this system | Confirm which Google account to use | ⏳ Waiting on John |
| 2.2 | Create the `Beast Growth Pipeline` spreadsheet | Create + open a new Google Sheet | ⬜ Not started |
| 2.3 | Open the bound Apps Script project | Extensions → Apps Script | ⬜ Not started |
| 2.4 | Paste the code bundle + manifest | Paste 2 things | ⬜ Not started |
| 2.5 | Set Script Properties (secret, notify emails, owner, booking URL) | Paste 4–5 values | ⬜ Not started |
| 2.6 | Run `setup()` → builds workbook + triggers | Click Run, approve OAuth | ⬜ Not started |
| 2.7 | Authorize OAuth scopes (Sheets, Gmail, Drive, Calendar) | Click Allow | ⬜ Not started |
| 2.8 | Run `selfTest()` → confirm a row lands in Leads | Click Run, report result | ⬜ Not started |
| 2.9 | Deploy as Web app → copy `/exec` URL | Deploy + paste URL back | ⬜ Not started |
| 2.10 | Create Calendar `Beast Growth Assessment` appointment schedule | Create in Google Calendar, paste link | ⬜ Not started |
| 2.11 | (Optional) Create `Beast Growth Operations` Drive folders | I can auto-create, or you do it | ⬜ Not started |
| 2.12 | Set Vercel env vars (`GROWTH_APPS_SCRIPT_URL`, `GROWTH_SHARED_SECRET`) + redeploy | Paste into Vercel | ⬜ Not started |
| 2.13 | Confirm sender name + internal notification recipients | Confirm | ⬜ Not started |
| 2.14 | Define GA4 events + mark booking as conversion | Confirm in GA4/GTM | ⬜ Not started |
| 2.15 | Confirm `/privacy` covers this collection | Confirm | ⬜ Not started |

---

## Phase 3 — End-to-end verification (nothing marked Complete until all ✅)

| # | Area | How verified | Status |
|---|------|-------------|--------|
| 3.1 | Website form (all 5 steps, validation, states) | Live submit | ⬜ Not started |
| 3.2 | Apps Script endpoint receives + authenticates | selfTest + live submit | ⬜ Not started |
| 3.3 | Google Sheets records written (Leads/Companies/Contacts/Assessments/Opportunities/Activities) | Inspect rows | ⬜ Not started |
| 3.4 | Qualification routing correct (priority/qualified/manual/nurture) | Test each path | ⬜ Not started |
| 3.5 | Email notifications (prospect confirmation + internal alert) | Check inboxes | ⬜ Not started |
| 3.6 | Drive brief generated + filed | Open the doc | ⬜ Not started |
| 3.7 | Calendar booking flow + reconciliation back to Sheets | Book a test slot | ⬜ Not started |
| 3.8 | Analytics events fire | GA4 DebugView | ⬜ Not started |
| 3.9 | Error handling / fallback | Force failure, confirm safe response | ⬜ Not started |
| 3.10 | Full end-to-end live test | Real submission → row → emails → booking | ⬜ Not started |

---

**Overall: 🚧 In progress — Phase 1 complete, awaiting Phase 2.1 (account choice).**
