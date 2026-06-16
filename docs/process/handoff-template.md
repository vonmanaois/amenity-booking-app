# Project Handoff Template

Use this at the end of a working session so the next session can resume without reconstructing context.

## Resume Prompt

```text
I am continuing a project. Here is where we are right now:

Project:
- Name: Amenity Booking App
- Stack: Next.js, Prisma, Supabase, PostgreSQL, TypeScript, Tailwind
- Structure: App Router with route groups for marketing, auth, resident, admin, superuser

Current architecture:
- One app, many locations
- `Location` is the tenant boundary
- Residents and staff are scoped by location
- Superuser has global access
- Superuser can create/manage locations
- Residents only see their assigned location
- Staff only manage assigned location(s)

Current data model:
- `User` has `platformRole` (`USER`, `SUPERUSER`)
- `LocationMembership` connects users to locations with role `RESIDENT` or `STAFF`
- `Amenity`, `Booking`, `BlackoutDate`, and `AuditLog` are location-scoped

Completed:
- Next.js scaffold
- Prisma setup
- Supabase connection
- Location-based migration applied
- Seed data loaded

Seeded data:
- 2 locations
- 1 superuser
- staff per location
- residents per location
- amenities per location
- bookings per location

Important decisions:
- Use Supabase Postgres + Prisma
- Use `Location` multi-tenancy
- Party rooms are first-class booking flows
- Keep booking logic server-side
- Keep docs updated after each major change

Known constraints:
- Prisma 7 deprecation warning for `package.json#prisma`
- `npm run build` may need outside-sandbox verification in this environment

Docs to trust:
- `docs/product/prd.md`
- `docs/product/design.md`
- `docs/engineering/database-schema.md`
- `docs/process/decisions.md`
- `docs/process/worklog.md`
- `docs/process/next-steps.md`

Your task today is:
[insert the immediate goal]
```

## End-Of-Day Summary

```text
Date:
- YYYY-MM-DD

What changed today:
- ...

What is now true:
- ...

Decisions made:
- ...

Files changed:
- ...

Commands run:
- ...

Verified:
- ...

Open questions:
- ...

Next immediate goal:
- ...
```

## Usage Rules

- Update this file at the end of every session.
- Keep it factual and current.
- Do not include speculative plans unless they are explicit next steps.
- If the project changes materially, update the docs referenced here too.
