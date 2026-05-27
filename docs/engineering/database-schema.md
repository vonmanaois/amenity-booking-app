# Database Schema

## 1. Database Direction

This project uses Prisma against PostgreSQL, hosted later on Supabase.

Current connection model:

- `DATABASE_URL`: pooled runtime connection
- `DIRECT_URL`: direct migration connection

## 2. Core Enums

### UserRole

- `RESIDENT`
- `STAFF`
- `SUPERUSER`

### AmenityType

- `PARTY_ROOM`
- `MEETING_ROOM`
- `GYM`
- `COURT`
- `OTHER`

### AmenityStatus

- `ACTIVE`
- `INACTIVE`
- `MAINTENANCE`

### BookingStatus

- `PENDING`
- `CONFIRMED`
- `CANCELLED`
- `REJECTED`

## 3. Models

### User

Key fields:

- `id`
- `email`
- `name`
- `phone`
- `role`
- `passwordHash`

Relations:

- resident bookings
- approved bookings
- audit logs as actor

### Amenity

Key fields:

- `id`
- `name`
- `slug`
- `type`
- `description`
- `imageUrl`
- `location`
- `capacity`
- `slotDurationMinutes`
- `openTime`
- `closeTime`
- `rules`
- `status`
- `requiresApproval`
- `maxAdvanceDays`
- `maxBookingDurationMinutes`
- `cancellationCutoffHours`

Relations:

- bookings
- blackout dates

### Booking

Key fields:

- `id`
- `residentId`
- `amenityId`
- `approvedById`
- `startAt`
- `endAt`
- `guestCount`
- `status`
- `notes`
- `eventTitle`
- `eventDetails`
- `approvedAt`
- `cancelledAt`

Notes:

- `eventTitle` and `eventDetails` are included to support party room booking requirements.

### BlackoutDate

Key fields:

- `id`
- `amenityId`
- `startAt`
- `endAt`
- `reason`
- `allDay`

### AuditLog

Key fields:

- `id`
- `actorUserId`
- `action`
- `entityType`
- `entityId`
- `metadata`

## 4. Booking Domain Notes

These rules are not fully implemented yet, but the schema is shaped for them:

- no overlapping valid bookings
- respect amenity operating hours
- respect blackout windows
- support approval-required amenities
- support stricter party room metadata
- support resident and approver ownership

## 5. Current Implementation Reference

The actual schema lives at:

- `prisma/schema.prisma`

Any schema change must be reflected in:

- this file
- `process/decisions.md` if the change is architectural
- migration history once Supabase is connected
