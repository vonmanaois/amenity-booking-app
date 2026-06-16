# Product Requirements Document

## 1. Product Summary

The Amenity Booking App is a Next.js PWA for residents to discover, reserve, and manage shared amenities across multiple locations. Party room booking is a primary product flow and must be handled explicitly rather than buried under generic amenities.

The application supports three roles:

- Resident
- Coordinator / Staff Admin
- Superuser

## 2. Problem Statement

Shared amenities are often booked through manual spreadsheets, messages, or inconsistent admin workflows. That creates:

- double bookings
- unclear availability
- slow coordination
- weak visibility into usage
- inconsistent application of booking rules

The product replaces that with a structured self-service experience backed by admin oversight and platform-level controls.

## 3. Goals

### Business Goals

- Reduce manual admin effort
- Improve booking visibility and operational control
- Establish a scalable booking platform foundation

### User Goals

- Discover amenities quickly
- Understand rules before booking
- Reserve a valid slot without confusion
- Track and manage upcoming bookings easily

### Admin Goals

- Manage amenities and rules centrally
- Handle party room requests and exceptions
- Review bookings and operational activity efficiently

### Superuser Goals

- Control sensitive roles and permissions
- Review audit activity
- Resolve escalated platform issues

## 4. Roles And Permissions

### Resident

Can:

- sign in
- access only their assigned location
- browse amenities and party rooms for that location
- view availability
- create bookings
- cancel eligible bookings
- view booking history

Cannot:

- manage amenities
- manage other users
- access staff or superuser areas

### Coordinator / Staff Admin

Can:

- access admin dashboard
- create, edit, disable, and manage amenities for assigned location(s)
- review and manage party room bookings for assigned location(s)
- configure rules and blackout windows
- update booking statuses
- view residents and booking activity within assigned location(s)

### Superuser

Can:

- access all staff capabilities
- create and manage locations
- manage staff accounts and roles
- manage sensitive platform settings
- review audit activity
- resolve escalated booking or access issues

## 5. MVP Scope

### In Scope

- authentication foundation
- role-based access
- location creation and management by superuser
- resident dashboard shell
- amenities list and detail
- party room list and detail
- slot-based booking flow
- my bookings
- staff admin dashboard shell
- admin amenity and booking management surfaces
- superuser oversight shell
- Prisma data layer
- PWA manifest baseline

### Out Of Scope For Initial Build

- payments
- waitlists
- push notifications
- recurring reservations
- QR access control
- advanced analytics exports
- multi-location support

## 6. User Journey Overview

### Resident Journey

1. Resident signs in.
2. Resident browses amenities or enters party rooms directly.
3. Resident reviews rules and availability.
4. Resident selects a valid slot.
5. Resident submits a booking request.
6. System validates booking constraints.
7. Resident sees booking status and later manages it from `My Bookings`.

### Staff Admin Journey

1. Staff admin signs in.
2. Staff admin reviews dashboard activity.
3. Staff admin manages amenities, including party rooms, for assigned location(s).
4. Staff admin adjusts booking rules and blackout dates.
5. Staff admin reviews and updates booking statuses.

### Superuser Journey

1. Superuser signs in.
2. Superuser creates or manages locations.
3. Superuser enters platform oversight area.
4. Superuser reviews staff roles and audit events.
5. Superuser resolves escalated issues as needed.

## 7. Screen Inventory

### Shared / Public

- Landing page
- Sign in
- Sign up

### Resident

- Dashboard
- Amenities list
- Amenity detail
- Party rooms list
- Party room detail
- Booking flow / slot picker
- My bookings
- Profile

### Staff Admin

- Admin dashboard
- Amenities management
- Party room management
- Booking management
- Users
- Settings / rule management

### Superuser

- Superuser overview
- Locations
- Staff management
- Role management
- Audit / oversight

## 8. Core Functional Requirements

### Authentication

- The app must support residents, staff admins, and superusers.
- Protected routes must enforce role-based access.
- Resident and staff access must be scoped to assigned locations.
- Superuser access must be global.

### Amenity Browsing

- Residents must be able to browse amenities for their location.
- Residents must be able to enter a dedicated party room flow.

### Availability

- Users must only see slots that are actually bookable.
- Availability must reflect booking overlap rules, blackout dates, amenity status, and operating hours.

### Booking

- Residents must be able to create valid bookings.
- Party room bookings may require event details or approval rules.
- Residents must be able to cancel eligible bookings.
- Bookings must be validated against location ownership and amenity ownership.

### Admin Management

- Staff admins must be able to manage amenities and bookings for assigned locations.
- Superusers must be able to create and manage locations.
- Superusers must be able to manage staff and roles.

## 9. Acceptance Themes

The build should ultimately satisfy these themes:

- residents can complete a valid booking without staff help
- party room rules are visible and enforced
- staff admins can manage operational booking work
- superusers can govern access and oversight
- booking conflicts are blocked at the server layer

## 10. Current Build Status

Implemented so far:

- route structure for resident, staff admin, and superuser areas
- project docs and process structure
- Prisma schema and shared Prisma client
- buildable Next.js scaffold
- location-based schema redesign
- location migration and seed data in Supabase
- Supabase Auth integration plan and app-user mapping layer

Not yet implemented:

- auth
- real data fetching
- booking logic
