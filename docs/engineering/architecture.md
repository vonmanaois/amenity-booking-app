# Engineering Architecture

## 1. Current Technical Direction

- Next.js App Router
- TypeScript
- Tailwind CSS
- Prisma ORM
- Supabase-hosted PostgreSQL

## 2. Routing Structure

The app is structured with role-oriented route areas:

- `(marketing)` for public landing
- `(auth)` for sign-in and sign-up
- `(user)` for resident-facing product flows
- `admin` for staff admin operations
- `superuser` for platform-level governance

## 3. Current Route Map

### Resident

- `/dashboard`
- `/amenities`
- `/amenities/[amenityId]`
- `/party-rooms`
- `/party-rooms/[amenityId]`
- `/bookings`
- `/profile`

### Staff Admin

- `/admin`
- `/admin/amenities`
- `/admin/party-rooms`
- `/admin/bookings`
- `/admin/users`
- `/admin/settings`

### Superuser

- `/superuser`
- `/superuser/staff`
- `/superuser/roles`
- `/superuser/audit`

## 4. Folder Strategy

```text
src/
  app/
  components/
  generated/
  lib/
```

Current notable folders:

- `src/app`: route tree and route-specific UI
- `src/components/layout`: reusable app shells
- `src/lib/db`: runtime database access
- `src/generated/prisma`: generated Prisma client output

## 5. Architectural Rules

- keep route files thin
- keep booking logic server-side
- keep generated code out of normal app logic
- keep role separation visible in routing and layout
- keep party room flows explicit instead of hiding them under generic amenities

## 6. Runtime Data Strategy

The intended runtime path is:

`Next.js server code -> Prisma client -> Supabase Postgres`

Initial implementation should prefer:

- server components for reads where useful
- route handlers or server actions for mutations
- central Prisma client import from `src/lib/db/prisma.ts`

## 7. Current Scaffold Notes

The current app already has:

- resident shell
- staff admin shell
- superuser shell
- app-wide metadata
- manifest baseline

This is enough to start real integration work without reshaping the route tree again.
