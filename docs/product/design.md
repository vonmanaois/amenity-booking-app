# Product Design

## 1. UX Direction

The product should feel structured, practical, and trustworthy rather than flashy. Residents need a fast booking flow. Staff admins need operational clarity. Superusers need governance and visibility.

Design principles:

- make booking status obvious
- show rules before the user commits
- keep party rooms prominent because they carry more operational risk
- keep admin and resident flows visually distinct
- keep location context visible where it affects access or availability
- favor clear information architecture over decoration

## 2. Resident Experience

### Primary Resident Surfaces

- Dashboard
- Amenities
- Party Rooms
- My Bookings
- Profile

### Resident Flow Priorities

- fast discovery
- clear rules
- easy availability selection
- obvious success and failure states
- invisible tenant switching for single-location residents

### Party Room UX Notes

Party rooms should be surfaced as a dedicated entry point, even if they are stored as a type of amenity internally.

Important party room behaviors:

- rules should appear before slot confirmation
- event title or notes may be required
- approval requirements should be obvious
- stricter cancellation windows should be visible
- if a resident belongs to only one location, no location picker should appear

## 3. Staff Admin Experience

### Primary Staff Admin Surfaces

- Dashboard
- Amenities
- Party Rooms
- Bookings
- Users
- Settings

### Staff Admin Priorities

- identify booking issues quickly
- review party room activity efficiently
- manage rules without digging through unrelated screens
- resolve booking exceptions with minimal friction
- operate only within assigned location context

## 4. Superuser Experience

### Primary Superuser Surfaces

- Overview
- Staff
- Roles
- Audit

### Superuser Priorities

- role governance
- staff control
- escalation handling
- visibility into sensitive changes
- create and manage locations without using the staff admin flow

## 5. Visual Direction

Current baseline direction:

- warm neutral background
- green accent for trust and reservation actions
- rounded panels
- clean segmented app shells by role

This direction is already reflected in the initialized app scaffold.

## 6. Interaction Design Notes

### Booking Flow

The booking flow should eventually be split into clear steps:

1. choose amenity
2. choose date
3. choose time slot
4. review rules and details
5. submit
6. confirm outcome

Location context should be resolved before the flow starts, not midway through the booking.

### Error Handling

Errors should explain:

- why a slot is unavailable
- why a cancellation is blocked
- why a role cannot access a page

### Status Language

Use explicit statuses:

- Pending
- Confirmed
- Cancelled
- Rejected

## 7. Navigation Rules

- residents should never see staff-only controls
- staff admins should not see superuser controls
- superuser navigation should emphasize governance, not resident tasks
- party rooms should have a dedicated resident entry point
- location switching should be explicit for superusers and hidden for single-location residents

## 8. Documentation Rule

If a design change affects flows, navigation, role behavior, or visibility of booking rules, update this file and the PRD together.
