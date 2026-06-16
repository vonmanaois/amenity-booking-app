-- CreateEnum
CREATE TYPE "public"."UserRole" AS ENUM ('RESIDENT', 'STAFF', 'SUPERUSER');

-- CreateEnum
CREATE TYPE "public"."AmenityType" AS ENUM ('PARTY_ROOM', 'MEETING_ROOM', 'GYM', 'COURT', 'OTHER');

-- CreateEnum
CREATE TYPE "public"."AmenityStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'MAINTENANCE');

-- CreateEnum
CREATE TYPE "public"."BookingStatus" AS ENUM ('PENDING', 'CONFIRMED', 'CANCELLED', 'REJECTED');

-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT,
    "role" "public"."UserRole" NOT NULL DEFAULT 'RESIDENT',
    "passwordHash" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Amenity" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "type" "public"."AmenityType" NOT NULL DEFAULT 'OTHER',
    "description" TEXT NOT NULL,
    "imageUrl" TEXT,
    "location" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,
    "slotDurationMinutes" INTEGER NOT NULL,
    "openTime" TEXT NOT NULL,
    "closeTime" TEXT NOT NULL,
    "rules" TEXT,
    "status" "public"."AmenityStatus" NOT NULL DEFAULT 'ACTIVE',
    "requiresApproval" BOOLEAN NOT NULL DEFAULT false,
    "maxAdvanceDays" INTEGER,
    "maxBookingDurationMinutes" INTEGER,
    "cancellationCutoffHours" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Amenity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Booking" (
    "id" TEXT NOT NULL,
    "residentId" TEXT NOT NULL,
    "amenityId" TEXT NOT NULL,
    "approvedById" TEXT,
    "startAt" TIMESTAMP(3) NOT NULL,
    "endAt" TIMESTAMP(3) NOT NULL,
    "guestCount" INTEGER,
    "status" "public"."BookingStatus" NOT NULL DEFAULT 'PENDING',
    "notes" TEXT,
    "eventTitle" TEXT,
    "eventDetails" TEXT,
    "approvedAt" TIMESTAMP(3),
    "cancelledAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."BlackoutDate" (
    "id" TEXT NOT NULL,
    "amenityId" TEXT NOT NULL,
    "startAt" TIMESTAMP(3) NOT NULL,
    "endAt" TIMESTAMP(3) NOT NULL,
    "reason" TEXT NOT NULL,
    "allDay" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BlackoutDate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."AuditLog" (
    "id" TEXT NOT NULL,
    "actorUserId" TEXT,
    "action" TEXT NOT NULL,
    "entityType" TEXT NOT NULL,
    "entityId" TEXT NOT NULL,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AuditLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Amenity_slug_key" ON "public"."Amenity"("slug");

-- CreateIndex
CREATE INDEX "Booking_residentId_status_idx" ON "public"."Booking"("residentId", "status");

-- CreateIndex
CREATE INDEX "Booking_amenityId_startAt_endAt_idx" ON "public"."Booking"("amenityId", "startAt", "endAt");

-- CreateIndex
CREATE INDEX "Booking_status_startAt_idx" ON "public"."Booking"("status", "startAt");

-- CreateIndex
CREATE INDEX "BlackoutDate_amenityId_startAt_endAt_idx" ON "public"."BlackoutDate"("amenityId", "startAt", "endAt");

-- CreateIndex
CREATE INDEX "AuditLog_actorUserId_idx" ON "public"."AuditLog"("actorUserId");

-- CreateIndex
CREATE INDEX "AuditLog_entityType_entityId_idx" ON "public"."AuditLog"("entityType", "entityId");

-- AddForeignKey
ALTER TABLE "public"."Booking" ADD CONSTRAINT "Booking_residentId_fkey" FOREIGN KEY ("residentId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Booking" ADD CONSTRAINT "Booking_amenityId_fkey" FOREIGN KEY ("amenityId") REFERENCES "public"."Amenity"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Booking" ADD CONSTRAINT "Booking_approvedById_fkey" FOREIGN KEY ("approvedById") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."BlackoutDate" ADD CONSTRAINT "BlackoutDate_amenityId_fkey" FOREIGN KEY ("amenityId") REFERENCES "public"."Amenity"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AuditLog" ADD CONSTRAINT "AuditLog_actorUserId_fkey" FOREIGN KEY ("actorUserId") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
