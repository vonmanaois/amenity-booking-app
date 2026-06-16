# API Contracts

## Status

No route handlers or mutation contracts are implemented yet. This file defines the intended first contract surface so later work stays consistent.

## Planned Initial Endpoints

### Superuser Location Management

#### `GET /api/superuser/locations`

Purpose:

- return all locations for platform oversight

#### `POST /api/superuser/locations`

Purpose:

- create a new location

Expected request shape:

- `name`
- `slug`
- `addressLine1`
- `addressLine2`
- `city`
- `province`
- `postalCode`
- `country`
- `timezone`

#### `PATCH /api/superuser/locations/:locationId`

Purpose:

- update location metadata or status

### Resident Reads

#### `GET /api/amenities`

Purpose:

- return active amenities for the resident's assigned location

Expected response shape:

- list of amenity summaries

#### `GET /api/amenities/:amenityId`

Purpose:

- return amenity detail

Expected response shape:

- amenity detail
- rules
- summary availability metadata later
- location context

#### `GET /api/amenities/:amenityId/availability`

Purpose:

- return valid slots for a selected date range

Expected query inputs:

- date
- optional timezone

### Resident Writes

#### `POST /api/bookings`

Purpose:

- create a booking request

Expected request shape:

- `amenityId`
- `startAt`
- `endAt`
- `guestCount`
- `notes`
- `eventTitle`
- `eventDetails`

Expected response shape:

- booking id
- booking status
- booking summary

#### `PATCH /api/bookings/:bookingId/cancel`

Purpose:

- cancel an eligible resident booking

### Staff Admin

#### `GET /api/admin/bookings`

Purpose:

- list bookings with filters, scoped to assigned location(s)

#### `PATCH /api/admin/bookings/:bookingId`

Purpose:

- update booking status

#### `POST /api/admin/amenities`

Purpose:

- create amenity for assigned location

#### `PATCH /api/admin/amenities/:amenityId`

Purpose:

- update amenity within the assigned location

### Superuser

#### `GET /api/superuser/staff`

Purpose:

- list staff users and roles

#### `PATCH /api/superuser/users/:userId/role`

Purpose:

- update role assignment

#### `PATCH /api/superuser/users/:userId/locations`

Purpose:

- assign or update a user's location memberships

## Contract Rules

- all write requests must validate server-side
- role checks must run before business logic
- booking availability must never rely only on client state
- party room validation must support extra event details
- location checks must run before any resident or staff query returns data

## Documentation Rule

When an API route is implemented:

1. add request requirements
2. add response shape
3. add auth expectations
4. note validation and edge cases
