# Email Templates

The canonical email bodies are built inline in `../Email.gs` (so values are
escaped and kept in sync with routing). This folder holds the **approved copy**
in plain form for review/wording changes — edit here, then mirror wording into
`Email.gs`. Do not add logic here; these are copy references only.

---

## 1. Prospect — Intake received (all routes)

**Subject:** We received your Beast Growth Assessment

> Hi {{first_name}},
>
> Thanks for completing the Beast Growth Assessment. We have your responses and
> are reviewing them.
>
> **Qualified route:** The next step is a 30-minute Growth Diagnostic. You can
> choose a time here: {{booking_url}}
> **Manual review:** A member of the Beast team will review your information and
> follow up with the most useful next step.
> **Nurture:** We will point you toward the most useful resources and keep the
> door open as your needs change.
>
> If anything has changed since you submitted, just reply to this email.
>
> — The Beast Creative Team

*Never include the internal route name or score in prospect email.*

---

## 2. Prospect — Scheduled (after booking reconciliation)

**Subject:** Your Beast Growth Assessment is scheduled

> Hi {{first_name}},
>
> Your Beast Growth Assessment is booked for **{{meeting_when}}**.
> Join: {{meet_link}}
>
> We will review your stated goal, your channels, and the most likely constraint
> on growth. Come with any recent numbers you have handy. To reschedule, use the
> link in your calendar invite.
>
> — The Beast Creative Team

---

## 3. Internal — New assessment notification

**Subject:** `[PRIORITY] ` (priority only) New Growth Assessment — {{route}} — {{company}}

Includes: lead identity, company + website, goal, challenge, desired result,
investment range, timeline, decision role, source/UTM, route, booking status,
and links to the pipeline sheet + internal brief.

---

## 4. Internal — Meeting booked

**Subject:** Meeting booked — {{company}} — {{meeting_when}}

---

## 5. Internal — Daily digest (weekday 8am)

**Subject:** Beast Growth — Daily Digest {{date}}

Sections: overdue tasks, today's meetings, new manual-review leads, tasks due today.

---

## Post-meeting recap (manual for now)

**Subject:** Your Beast Growth Assessment recap

Sent by the team after the call. Include: stated goal, likely primary constraint,
two or three observations, recommended next step, what Beast will send next.
**Do not send a complete strategy for free.**
