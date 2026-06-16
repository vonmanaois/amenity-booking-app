# Project Docs

This directory is the shared source of truth for product scope, engineering decisions, and implementation flow.

## Structure

```text
docs/
  README.md
  product/
    prd.md
    design.md
    roadmap.md
  engineering/
    architecture.md
    database-schema.md
    api-contracts.md
  process/
    changelog.md
    decisions.md
    worklog.md
    next-steps.md
    handoff-template.md
```

## Source Of Truth

- `product/prd.md`: product scope, roles, screens, stories, acceptance criteria
- `product/design.md`: UX and flow decisions, user/admin/superuser interaction model
- `product/roadmap.md`: phased implementation sequence
- `engineering/architecture.md`: route structure, folder design, technical direction
- `engineering/database-schema.md`: application data model, location tenancy, and persistence notes
- `engineering/api-contracts.md`: route and payload expectations
- `process/changelog.md`: major dated milestones
- `process/decisions.md`: important technical and product decisions with rationale
- `process/worklog.md`: session-by-session execution log
- `process/next-steps.md`: current backlog and immediate follow-up tasks
- `process/handoff-template.md`: copy-paste prompt for resuming the project after a break

Current architecture theme:

- one app
- many locations
- residents and staff scoped by location
- superuser global control

## Update Rules

When the project changes:

1. Update product docs if scope, roles, or flows change.
2. Update engineering docs if architecture, schema, or contracts change.
3. Update `process/worklog.md` after each working session.
4. Update `process/decisions.md` for decisions that affect future work.
5. Update `process/next-steps.md` before ending the session.

## Git Workflow

Recommended Git rhythm for this project:

1. Update docs first when a change affects scope or architecture.
2. Make the code change.
3. Verify with lint, build, or tests.
4. Update `process/worklog.md` and `process/next-steps.md`.
5. Commit with a focused message.
6. Refresh `process/handoff-template.md` if the durable project state changes.

Suggested commit styles:

- `docs: formalize product and engineering docs`
- `chore: initialize next app scaffold`
- `feat: add resident and admin route shells`
- `feat: add prisma schema for bookings`

## Session Close Checklist

Before stopping work:

- record what changed in `process/worklog.md`
- add or revise any durable decisions in `process/decisions.md`
- refresh `process/next-steps.md`
- update `process/handoff-template.md` if the resume context changed
- commit the current work
