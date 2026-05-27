# API Contracts

## Status

No route handlers or mutation contracts are implemented yet. This file defines the intended first contract surface so later work stays consistent.

## Planned Initial Endpoints

### Resident Reads

#### `GET /api/amenities`

Purpose:

- return active amenities for resident browsing

Expected response shape:

- list of amenity summaries

#### `GET /api/amenities/:amenityId`

Purpose:

- return amenity detail

Expected response shape:

- amenity detail
- rules
- summary availability metadata later

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

- list bookings with filters

#### `PATCH /api/admin/bookings/:bookingId`

Purpose:

- update booking status

#### `POST /api/admin/amenities`

Purpose:

- create amenity

#### `PATCH /api/admin/amenities/:amenityId`

Purpose:

- update amenity

### Superuser

#### `GET /api/superuser/staff`

Purpose:

- list staff users and roles

#### `PATCH /api/superuser/users/:userId/role`

Purpose:

- update role assignment

## Contract Rules

- all write requests must validate server-side
- role checks must run before business logic
- booking availability must never rely only on client state
- party room validation must support extra event details

## Documentation Rule

When an API route is implemented:

1. add request requirements
2. add response shape
3. add auth expectations
4. note validation and edge cases
