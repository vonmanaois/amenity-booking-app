# Database Schema

## 1. Database Direction

This project uses Prisma against PostgreSQL hosted on Supabase.

Current connection model:

- `DATABASE_URL`: pooled runtime connection
- `DIRECT_URL`: direct migration connection

The data model is tenant-scoped by `Location`.

## 2. Core Enums

### PlatformRole

- `USER`
- `SUPERUSER`

### LocationMembershipRole

- `RESIDENT`
- `STAFF`

### LocationStatus

- `ACTIVE`
- `INACTIVE`

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

Global account record.

Key fields:

- `id`
- `authUserId`
- `email`
- `name`
- `phone`
- `platformRole`
- `passwordHash`

Relations:

- Supabase Auth identity
- location memberships
- resident bookings
- approved bookings
- audit logs as actor
- locations created by superuser

### Location

Tenant boundary for a building, site, or managed property.

Key fields:

- `id`
- `name`
- `slug`
- `addressLine1`
- `addressLine2`
- `city`
- `province`
- `postalCode`
- `country`
- `timezone`
- `status`
- `createdById`

Relations:

- memberships
- amenities
- bookings
- blackout dates
- audit logs

### LocationMembership

Connects a user to a location and defines their location-scoped role.

Key fields:

- `id`
- `userId`
- `locationId`
- `role`
- `isPrimary`

### Amenity

Location-scoped amenity or party room.

Key fields:

- `id`
- `locationId`
- `name`
- `slug`
- `type`
- `description`
- `imageUrl`
- `area`
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

- location
- bookings
- blackout dates

### Booking

Location-scoped reservation.

Key fields:

- `id`
- `locationId`
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

- `eventTitle` and `eventDetails` support party room booking requirements.
- location must match the resident and amenity location.

### BlackoutDate

Location-scoped blocked window for an amenity.

Key fields:

- `id`
- `locationId`
- `amenityId`
- `startAt`
- `endAt`
- `reason`
- `allDay`

### AuditLog

Audit trail for admin and superuser actions.

Key fields:

- `id`
- `actorUserId`
- `locationId`
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
- support location-scoped visibility for residents and staff
- allow superuser to manage all locations globally

## 5. Current Implementation Reference

The actual schema lives at:

- `prisma/schema.prisma`

Any schema change must be reflected in:

- this file
- `process/decisions.md` if the change is architectural
- migration history once Supabase is connected
