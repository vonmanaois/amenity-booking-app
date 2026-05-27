# Product Roadmap

## Phase 0: Documentation And Project Control

Completed:

- formal PRD
- product design notes
- engineering docs structure
- process tracking system

## Phase 1: App Foundation

Completed:

- Next.js app scaffold
- role-separated route structure
- PWA manifest baseline
- Prisma setup

Remaining:

- initialize local Git workflow if not already done
- prepare GitHub repository

## Phase 2: Database Connection

Next:

- create Supabase project
- add real `DATABASE_URL`
- add real `DIRECT_URL`
- run initial migration
- confirm Prisma client against live database

## Phase 3: Authentication And Roles

- choose auth strategy
- implement resident, staff, and superuser access
- protect route groups
- attach user roles to session state

## Phase 4: Resident Booking Flow

- amenities list with real data
- party room list with real data
- detail pages
- availability endpoint
- booking submission flow
- my bookings

## Phase 5: Staff Operations

- admin dashboard metrics
- amenities CRUD
- party room rule management
- booking management
- blackout date management

## Phase 6: Superuser Oversight

- staff management
- role management
- audit visibility

## Phase 7: Hardening

- seed data
- test coverage for booking rules
- loading and error states
- empty states
- responsive refinement

## Current Recommendation

Do not move into heavy UI work yet. Connect Supabase and run the first schema migration first, because the booking domain depends heavily on stable data modeling.
