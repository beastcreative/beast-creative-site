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
| 2.1 | Choose the Google account that owns this system | Beast Workspace account (beastcreativeagency.com domain) | 🔧 Configured |
| 2.2 | Create the `Beast Growth Pipeline` spreadsheet | Created + open on john@beastcreativeagency.com | 🔧 Configured |
| 2.3 | Open the bound Apps Script project | Extensions → Apps Script | ⏳ Waiting on John |
| 2.4 | Paste the code bundle (manifest skipped — scopes auto-detected) | Pasted + saved | 🔧 Configured |
| 2.5 | Set Script Properties (secret, notify emails, owner, booking URL) | 4 values saved (booking URL = dedicated schedule) | 🔧 Configured |
| 2.6 | Run `setup()` → builds workbook + triggers | All 10 tabs built + triggers installed | ✅ Complete |
| 2.7 | Authorize OAuth scopes (Sheets, Gmail, Drive, Calendar) | Approved "Allow all" for john@beastcreativeagency.com | 🔐 Authorized |
| 2.8 | Run `selfTest()` → confirm a row lands in Leads | Click Run, then check row + email + brief | ⏳ Waiting on John |
| 2.9 | Deploy as Web app → copy `/exec` URL | Deployed + verified (valid secret writes, wrong secret rejected) | ✅ Complete |
| 2.10 | Create Calendar `Beast Growth Assessment` appointment schedule | Created: calendar.app.google/PegvMAhP72Gt2YqZ7 (wired into site + Script Property) | 🔧 Configured |
| 2.11 | Create `Beast Growth Operations` Drive folders | Folder tree created; brief + sheet filed via `initDrive()` | ✅ Complete |
| 2.12 | Set Vercel env vars (`GROWTH_APPS_SCRIPT_URL`, `GROWTH_SHARED_SECRET`) + redeploy | John lacks Vercel access → friend adds both + redeploys (message sent) | ⏳ Waiting on friend |
| 2.13 | Confirm sender name + internal notification recipients | Confirm | ⬜ Not started |
| 2.14 | Define GA4 events + mark booking as conversion | Confirm in GA4/GTM | ⬜ Not started |
| 2.15 | Confirm `/privacy` covers this collection | Confirm | ⬜ Not started |

---

## Phase 3 — End-to-end verification (nothing marked Complete until all ✅)

| # | Area | How verified | Status |
|---|------|-------------|--------|
| 3.1 | Website form (all 5 steps, validation, states) | Live submit | ⬜ Not started |
| 3.2 | Apps Script endpoint receives + authenticates | Verified via Node fetch: valid→write, wrong→reject | 🧪 Tested |
| 3.3 | Google Sheets records written (Leads/Companies/Contacts/Assessments/Opportunities) | selfTest wrote all rows | 🧪 Tested |
| 3.4 | Qualification routing correct (priority/qualified/manual/nurture) | selfTest → priority_qualified ✓ (other paths pending live test) | 🧪 Tested (partial) |
| 3.5 | Email notifications (internal alert received) | Received; emoji/em-dash cleaned (re-verify wording on next email) | 🧪 Tested |
| 3.6 | Drive brief generated + filed | Brief created + auto-filed to Assessment Briefs | 🧪 Tested |
| 3.7 | Calendar booking flow + reconciliation back to Sheets | Book a test slot | ⬜ Not started |
| 3.8 | Analytics events fire | GA4 DebugView | ⬜ Not started |
| 3.9 | Error handling / fallback | Force failure, confirm safe response | ⬜ Not started |
| 3.10 | Full end-to-end live test | Real submission → row → emails → booking | ⬜ Not started |

---

## Phase 4 — v1.1 completion (qualification, briefing, follow-up)

Deploys now go out via **clasp** (`./apps-script/growth-assessment/deploy.sh`), no pasting.

| # | Item | Status |
|---|------|--------|
| 4.1 | Deterministic qualification engine (100-pt, configurable, audited) | 🧪 Tested (route suite passes) |
| 4.2 | Brief rewrite — labeled sections, fit rationale, no `[ ]`/prompt leaks, Draft/internal | 🧪 Tested (scan clean) |
| 4.3 | AI enrichment (homepage fetch + Claude hypotheses), fails safe to deterministic | ✅ LIVE (Beast Anthropic key set, real Claude verified editor + web-app) |
| 4.4 | Route-specific confirmation + post-booking Snapshot + post-meeting Recap | 🔧 Built (live-test pending) |
| 4.5 | Booking follow-up reminders (24h/72h/stop) | 🔧 Built (live-test pending) |
| 4.6 | Meeting-outcome routing (onEdit → Recap + opportunity + task) | 🔧 Built (live-test pending) |
| 4.7 | Tests (route coverage + placeholder scan) | 🧪 Tested (6/6 pass) |
| 4.8 | clasp deploy pipeline | ✅ Complete |

### Guided setup session (when convenient — enables AI + new fields)
1. **(AI)** Add Script Property `ANTHROPIC_API_KEY` = the **Beast** Anthropic key (not personal). Never committed to GitHub.
2. **Run `setup()`** from the editor → click **Allow** on the new "connect to an external service" permission (this is the AI/website fetch). This also adds the new Sheet columns, Settings thresholds, the Meeting Outcome dropdown, and installs the follow-up + outcome triggers.
3. **(Optional)** Run `runTests()` → confirm 6/6 pass.
4. **Live end-to-end test** once the friend sets the two Vercel env vars (or test the endpoint directly).

### Cleanup register (re-check each session)
- Secret-gated dev endpoint modes kept intentionally: `dryRun`, `testBrief`, `runTests` (all require the shared secret; safe, useful for tuning). Remove before public scale if desired.
- Test data to purge before launch: `Self Test Co`, `Endpoint Test Co`, any `TEST-*` briefs in Drive/Assessments.
- `ai_mock` Setting defaults to `false`; only the secret-gated test harness forces mock.

---

## Phase 5 — LIVE (2026-07-18)

- ✅ Beast Anthropic key set; AI enrichment live (real Claude verified).
- ✅ Partner set Vercel env vars (`GROWTH_APPS_SCRIPT_URL`, `GROWTH_SHARED_SECRET`); website→backend connected.
- ✅ Decoupled architecture: instant response (~4s), background `processPending_` handles AI brief + emails + task.
- ✅ **Full end-to-end verified live**: form → backend → AI brief → emails → booking reconciliation. Audit log confirms `ai enrich ok` + `process done` + `calendar booked`.

### Remaining before Phase 2
- ⏳ Purge test data (`Self Test Co`, `Endpoint Test Co`, `Live E2E Test Co`, `TEST-*` briefs) before launch.
- ⏳ GA4/GTM: forward `growth_assessment_*` events + mark booking as conversion (John's dashboard).
- ⏳ (Optional) `CONTACT_EMAIL` Vercel var for the rare fallback path.
- ⏳ (Optional) real solid-yellow footer button if John wants it.

**Overall: ✅ Growth Assessment v1.1 is LIVE and end-to-end verified. Ready for Phase 2 once test data is purged.**
