# CLAUDE.md — Beast Creative Engineering & AI Standards

**Version: 1.0**

> Referenced documentation — read this before beginning work:

@AGENTS.md

---

## Purpose

This document is the primary source of truth for every AI agent working on the Beast Creative codebase.

Before making any code changes, architectural decisions, UI changes, copy changes, or documentation updates, read this file completely.

If additional documentation is referenced inside this file, read those documents before beginning work.

Never assume. Inspect first. Plan second. Implement third. Test fourth. Document fifth.

---

## Mission

Beast Creative builds systems that help businesses grow.

We are not building websites. We are not building marketing campaigns. We are building growth systems.

Every feature should contribute to one or more of the following:

- More qualified leads
- Better conversion
- Better customer experience
- Better measurement
- Better operational efficiency
- Better long-term scalability

If a feature does not improve one of these, question whether it should exist.

---

## Core Principles

Always optimize for:

1. Clarity
2. Simplicity
3. Speed
4. Scalability
5. Maintainability

Avoid:

- unnecessary complexity
- unnecessary dependencies
- duplicate logic
- overengineering
- feature bloat

---

## Business Philosophy

Always think like a business consultant before thinking like a developer.

Understand:

- the business problem
- the customer problem
- the revenue impact

Never solve technical problems without understanding business goals.

---

## AI Philosophy

AI assists humans. AI does not replace judgment.

Never:

- fabricate facts
- invent statistics
- invent testimonials
- invent case studies
- invent customer quotes
- invent analytics

Clearly distinguish **known facts** from **reasonable assumptions**.

---

## Development Workflow

Always follow this order.

### Phase 1 — Inspect

Understand the current implementation. Identify:

- architecture
- dependencies
- existing patterns
- reusable components

Never begin coding before inspection.

### Phase 2 — Plan

Describe:

- files affected
- components affected
- risks
- implementation order
- testing approach

Wait for approval before making major architectural changes.

### Phase 3 — Implement

Reuse existing patterns whenever possible. Never duplicate logic.

### Phase 4 — Test

Verify:

- functionality
- accessibility
- responsiveness
- performance
- error handling

### Phase 5 — Document

Explain: WHY, HOW, FILES CHANGED, DEPENDENCIES, TESTING, KNOWN LIMITATIONS.

---

## Architecture Principles

Prefer **reusable components** over page-specific components.

Prefer **composition** over duplication.

Business logic should remain outside presentation components.

---

## Coding Standards

Use:

- TypeScript
- strict typing
- descriptive naming
- reusable utilities

Avoid:

- `any`
- magic numbers
- deeply nested logic
- duplicated code

Every async function must include error handling.

Every form must validate both **client side** and **server side**.

---

## UI Philosophy

Design should communicate trust. Avoid unnecessary decoration.

Interfaces should feel professional, modern, fast, and focused.

Whitespace is intentional. Do not clutter layouts.

---

## Mobile First

Every feature must work on desktop, tablet, and mobile.

Never treat mobile as an afterthought.

---

## Accessibility

Every interface should include:

- keyboard navigation
- visible focus states
- semantic HTML
- sufficient color contrast
- descriptive labels
- meaningful alt text

Forms should clearly communicate errors.

---

## Performance

Optimize for:

- Core Web Vitals
- fast interactions
- minimal JavaScript
- lazy loading where appropriate
- optimized images

Never sacrifice usability for animations.

---

## Conversion Philosophy

Every page must answer:

- Who is this for?
- What problem does it solve?
- Why Beast?
- What should the visitor do next?

Every page needs a clear primary CTA. Avoid competing calls-to-action.

---

## Copywriting Standards

Write clearly. Write directly. Avoid agency clichés.

Never write:

- "We are passionate..."
- "We're a full-service agency..."
- "Cutting-edge solutions..."

Instead: explain business outcomes, use short paragraphs, and write for decision makers.

---

## SEO Standards

Every page should include:

- unique title
- unique meta description
- proper heading hierarchy
- descriptive URLs
- internal links
- schema where appropriate
- image alt text

---

## AEO Standards

Write for **people first, AI second, search engines third**.

Content should answer complete questions. Use:

- concise summaries
- entity-rich language
- structured sections
- FAQ where appropriate

Avoid keyword stuffing.

---

## Forms

Forms should collect only necessary information. Use progressive disclosure where appropriate.

Every submission must include:

- validation
- success state
- error state
- loading state

---

## Google Workspace Standards

Current Beast infrastructure:

```text
Website
  ↓
Google Apps Script
  ↓
Google Sheets
  ↓
Google Calendar
  ↓
Gmail
  ↓
Google Drive
  ↓
Looker Studio
```

Do not introduce third-party CRM software without approval.

The public experience must remain fully branded. Never expose Google Forms publicly.

---

## Future BeastOS

Current Google Workspace infrastructure is temporary. Build systems so they can migrate cleanly into BeastOS later.

- Use stable IDs.
- Normalize data.
- Avoid spreadsheet-specific business logic when possible.

---

## Analytics

Track meaningful business events. Do not collect sensitive personal information unnecessarily.

Never send long-form free-text responses to analytics platforms.

---

## Security

Never hardcode API keys, secrets, or passwords. Use environment variables or secure configuration.

Validate every request. Sanitize user input. Escape rendered HTML.

---

## Documentation

Every significant feature should include: Purpose, Requirements, Implementation, Dependencies, Testing, Rollback procedure.

Documentation should explain **WHY**, not only HOW.

---

## Git Workflow

Inspect → Plan → Implement → Test → Document → Commit.

Never combine unrelated changes into one commit.

---

## Error Handling

Every feature should include: Loading, Empty, Success, Error, Recovery.

Retry where appropriate.

---

## Quality Assurance

Before considering work complete:

- lint passes
- build passes
- tests pass
- responsive review completed
- accessibility review completed
- no console errors
- no broken links

---

## Communication

When reporting work, summarize:

- what changed
- why
- files modified
- risks
- follow-up work

If uncertain, state uncertainty. Never pretend confidence.

---

## Definition of Done

Work is only complete when:

- The implementation works.
- The code is maintainable.
- The UI is responsive.
- Accessibility has been verified.
- Documentation has been updated.
- Testing has been completed.
- Business goals are supported.

---

## Guiding Principle

Every decision should make Beast easier to operate, easier to scale, easier to maintain, and better at helping businesses grow.

If there is a tradeoff, prefer long-term clarity over short-term convenience.
