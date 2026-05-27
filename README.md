# Amenity Booking App

<p align="center">
  <strong>A role-based booking platform for residential amenities and party rooms.</strong>
</p>

<p align="center">
  Built as a practice project focused on product structure, real-world booking logic, role separation, and maintainable engineering workflow.
</p>

<p align="center">
  <a href="https://nextjs.org"><img alt="Next.js" src="https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white"></a>
  <a href="https://react.dev"><img alt="React" src="https://img.shields.io/badge/React-19-20232A?logo=react&logoColor=61DAFB"></a>
  <a href="https://www.typescriptlang.org"><img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white"></a>
  <a href="https://tailwindcss.com"><img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white"></a>
  <a href="https://www.prisma.io"><img alt="Prisma" src="https://img.shields.io/badge/Prisma-6-2D3748?logo=prisma&logoColor=white"></a>
  <a href="https://supabase.com"><img alt="Supabase" src="https://img.shields.io/badge/Supabase-Postgres-3ECF8E?logo=supabase&logoColor=white"></a>
  <a href="https://www.postgresql.org"><img alt="PostgreSQL" src="https://img.shields.io/badge/PostgreSQL-Database-336791?logo=postgresql&logoColor=white"></a>
  <a href="https://eslint.org"><img alt="ESLint" src="https://img.shields.io/badge/ESLint-9-4B32C3?logo=eslint&logoColor=white"></a>
</p>

---

## Project Snapshot

This project is designed as a modern amenity reservation system for residential use. It supports residents booking shared spaces, staff coordinating operational rules, and superusers overseeing platform-level control.

The app is being built with party room booking as a first-class workflow, not just a generic amenity type. That matters because party rooms usually carry stricter rules, more scheduling friction, and more admin involvement than ordinary shared amenities.

## Why This Project

This project is serving as hands-on practice in:

- structuring a real Next.js application from the start
- modeling a booking domain with actual constraints
- separating product roles clearly
- documenting decisions and implementation flow properly
- building with a cleaner engineering process instead of jumping straight into UI work

## Core Roles

### Resident

- browse amenities and party rooms
- check availability
- create bookings
- manage personal reservations

### Coordinator / Staff Admin

- manage amenities
- review party room requests
- control booking rules and blackout windows
- update booking statuses

### Superuser

- manage staff roles
- oversee sensitive settings
- review audit activity

## Product Focus

The product is centered around:

- amenity discovery
- party room booking
- booking validation
- operational admin control
- role-based access and governance

## Current Status

### Completed

- Next.js App Router scaffold
- role-separated route structure
- resident, admin, and superuser layout shells
- Prisma schema and shared client
- project documentation system
- Git and GitHub project setup

### Next

- connect Supabase
- run the first database migration
- add seed data
- implement authentication
- replace placeholder pages with real resident and admin flows

## Screenshots

Screenshots and UI previews will be added here later as the interface becomes more complete.

Suggested future sections:

- landing page
- resident dashboard
- party room detail
- booking flow
- admin dashboard

## Tech Stack

### Frontend

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4

### Data Layer

- Prisma 6
- PostgreSQL
- Supabase-ready connection model

### Tooling

- ESLint
- npm

## Architecture Direction

The application is split into clear route areas:

- public / marketing
- authentication
- resident app
- staff admin app
- superuser app

This keeps role boundaries visible early and makes the app easier to scale without reshaping the entire route tree later.

## Documentation Workflow

This repository uses a structured documentation system so product, engineering, and process decisions stay controlled.

Important docs:

- [`docs/README.md`](./docs/README.md)
- [`docs/product/prd.md`](./docs/product/prd.md)
- [`docs/product/design.md`](./docs/product/design.md)
- [`docs/product/roadmap.md`](./docs/product/roadmap.md)
- [`docs/engineering/architecture.md`](./docs/engineering/architecture.md)
- [`docs/engineering/database-schema.md`](./docs/engineering/database-schema.md)
- [`docs/engineering/api-contracts.md`](./docs/engineering/api-contracts.md)
- [`docs/process/decisions.md`](./docs/process/decisions.md)
- [`docs/process/worklog.md`](./docs/process/worklog.md)
- [`docs/process/next-steps.md`](./docs/process/next-steps.md)

## Local Setup

### Install dependencies

```bash
npm install
```

### Prepare environment variables

```bash
cp .env.example .env
```

Then replace the placeholder values with your real Supabase connection strings later.

Required variables:

- `DATABASE_URL`
- `DIRECT_URL`

### Generate Prisma client

```bash
npm run prisma:generate
```

### Run the app

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Useful Commands

```bash
npm run dev
npm run lint
npm run build
npm run prisma:generate
npm run prisma:migrate -- --name init
npm run prisma:studio
```

## Project Structure

```text
.
├── docs/
│   ├── product/
│   ├── engineering/
│   └── process/
├── prisma/
├── public/
└── src/
    ├── app/
    ├── components/
    ├── generated/
    └── lib/
```

## Developer

**Von Manaois**

- GitHub: [@vonmanaois](https://github.com/vonmanaois)
- Repository: [vonmanaois/amenity-booking-app](https://github.com/vonmanaois/amenity-booking-app)

## Notes

- `.env` is intentionally ignored by Git
- Prisma client is generated into `src/generated/prisma`
- Supabase is the planned database provider, but the live connection is not yet wired
