# Decisions

## 2026-04-14 - Use Next.js App Router For The Frontend

Decision:

Use Next.js App Router with a `src/`-based project structure.

Why:

- aligns with the nearby `beliefted` app structure
- supports route groups cleanly
- works well for a server-first application

Impact:

- route areas are split by audience and responsibility

## 2026-05-20 - Treat Party Rooms As A First-Class Product Flow

Decision:

Model party rooms as amenities in the data layer, but expose them explicitly in the user and admin experience.

Why:

- party rooms usually have stricter booking rules
- they are operationally higher risk than generic amenities
- the UX should make their policies obvious

Impact:

- dedicated resident route
- dedicated admin route
- extra booking detail fields in schema

## 2026-05-25 - Expand The Access Model To Three Roles

Decision:

Support `resident`, `staff`, and `superuser`.

Why:

- separates operational staff actions from platform governance
- avoids overloading ordinary admin accounts with sensitive controls

Impact:

- separate admin and superuser route areas
- role field in the user model
- role-based auth work later

## 2026-05-27 - Use Supabase Postgres With Prisma

Decision:

Use Supabase for hosted PostgreSQL and Prisma as the ORM.

Why:

- booking, blackout, and admin relationships are naturally relational
- easier to model constraints than MongoDB for this use case
- good balance between practice value and setup simplicity

Alternatives considered:

- MongoDB

Impact:

- Prisma schema drives the core domain
- Supabase connection is the next infrastructure step

## 2026-05-27 - Pin Prisma To Version 6 For Simpler Setup

Decision:

Use Prisma `6.16.2` instead of Prisma `7.x`.

Why:

- Prisma 7 introduces a more complex configuration path that is unnecessary for this practice project right now
- Prisma 6 keeps the standard `schema.prisma + .env` workflow

Impact:

- simpler learning path
- easier migrations and tutorials

## 2026-05-27 - Model The App As A Location-Based Multi-Tenant Platform

Decision:

Use `Location` as the tenant boundary and connect users to locations through `LocationMembership`.

Why:

- the company has multiple managed locations
- residents should only see their own location's amenities and bookings
- staff should only manage assigned locations
- superusers need global visibility and control

Impact:

- schema now includes `Location` and `LocationMembership`
- amenities, bookings, blackout dates, and audit logs are location-scoped
- superuser can create and manage locations directly
- docs and seed data must reflect tenant behavior

## 2026-06-03 - Use Supabase Auth For Identity And Prisma For App Users

Decision:

Use Supabase Auth for sign-in/session identity and Prisma `User` rows for application roles, memberships, and tenant-scoped data.

Why:

- keeps auth and domain data separated cleanly
- allows Prisma to remain the source of truth for location access and roles
- lets the app map Supabase users to seeded or newly created app users by `authUserId`

Impact:

- `User` now has an `authUserId` field
- route checks can sync/authenticate against Supabase and then resolve Prisma access rules
- protected routes will rely on a DAL-style auth helper layer
