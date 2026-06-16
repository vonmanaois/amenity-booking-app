# Worklog

## 2026-05-27

Completed:

- installed and configured Prisma
- added initial Prisma schema for user, amenity, booking, blackout date, and audit log
- added shared Prisma client
- created the structured docs system
- moved project guidance into `product`, `engineering`, and `process`
- redesigned the schema for `Location` multi-tenancy
- generated a new Prisma migration for the location-based model
- started the location seed data script
- applied the location-based migration to Supabase
- seeded 2 locations, 7 users, 6 memberships, 4 amenities, and 4 bookings
- added a reusable handoff template for session resumes
- added the authUserId schema change and auth helper layer
- wired route protection in Next.js 16 `proxy.ts`
- kept the auth runtime path on email-based lookup while the authUserId migration remains staged locally

Notes:

- Prisma 7 added unnecessary configuration overhead for this stage, so the project was pinned to Prisma 6
- build verification still requires running outside the sandbox in this environment because of a Turbopack restriction, not because of app code errors
- the app now models tenant scoping through `Location` and `LocationMembership`
- migration and seed verification were completed against Supabase
- the authUserId migration is staged, but the live apply step is blocked by Prisma engine/database connectivity in this environment
- `next build` currently emits a trace warning because `src/proxy.ts` imports the Prisma client directly; it is non-blocking but worth revisiting later if the build trace needs tightening

Verified:

- `npm run prisma:generate`
- `npm run lint`
- `npm run build`
- `npx prisma migrate deploy`
- `npm run prisma:seed`
- `npx prisma migrate status`

## 2026-05-25

Completed:

- expanded product direction to include party rooms explicitly
- added resident, staff admin, and superuser role model to docs

## 2026-05-20

Completed:

- converted the initial design note into a formal PRD

## 2026-04-14

Completed:

- drafted the first product and architecture blueprint
