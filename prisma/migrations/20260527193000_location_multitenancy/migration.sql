-- CreateEnum
CREATE TYPE "public"."PlatformRole" AS ENUM ('USER', 'SUPERUSER');

-- CreateEnum
CREATE TYPE "public"."LocationMembershipRole" AS ENUM ('RESIDENT', 'STAFF');

-- CreateEnum
CREATE TYPE "public"."LocationStatus" AS ENUM ('ACTIVE', 'INACTIVE');

-- DropIndex
DROP INDEX "public"."Amenity_slug_key";

-- DropIndex
DROP INDEX "public"."BlackoutDate_amenityId_startAt_endAt_idx";

-- DropIndex
DROP INDEX "public"."Booking_status_startAt_idx";

-- AlterTable
ALTER TABLE "public"."Amenity" DROP COLUMN "location",
ADD COLUMN     "area" TEXT NOT NULL,
ADD COLUMN     "locationId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."AuditLog" ADD COLUMN     "locationId" TEXT;

-- AlterTable
ALTER TABLE "public"."BlackoutDate" ADD COLUMN     "locationId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."Booking" ADD COLUMN     "locationId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "role",
ADD COLUMN     "platformRole" "public"."PlatformRole" NOT NULL DEFAULT 'USER';

-- DropEnum
DROP TYPE "public"."UserRole";

-- CreateTable
CREATE TABLE "public"."Location" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "addressLine1" TEXT NOT NULL,
    "addressLine2" TEXT,
    "city" TEXT NOT NULL,
    "province" TEXT NOT NULL,
    "postalCode" TEXT,
    "country" TEXT NOT NULL DEFAULT 'Canada',
    "timezone" TEXT NOT NULL DEFAULT 'America/Toronto',
    "status" "public"."LocationStatus" NOT NULL DEFAULT 'ACTIVE',
    "createdById" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."LocationMembership" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "locationId" TEXT NOT NULL,
    "role" "public"."LocationMembershipRole" NOT NULL,
    "isPrimary" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LocationMembership_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Location_slug_key" ON "public"."Location"("slug");

-- CreateIndex
CREATE INDEX "LocationMembership_locationId_role_idx" ON "public"."LocationMembership"("locationId", "role");

-- CreateIndex
CREATE UNIQUE INDEX "LocationMembership_userId_locationId_key" ON "public"."LocationMembership"("userId", "locationId");

-- CreateIndex
CREATE INDEX "Amenity_locationId_type_status_idx" ON "public"."Amenity"("locationId", "type", "status");

-- CreateIndex
CREATE UNIQUE INDEX "Amenity_locationId_slug_key" ON "public"."Amenity"("locationId", "slug");

-- CreateIndex
CREATE INDEX "AuditLog_locationId_idx" ON "public"."AuditLog"("locationId");

-- CreateIndex
CREATE INDEX "BlackoutDate_locationId_amenityId_startAt_endAt_idx" ON "public"."BlackoutDate"("locationId", "amenityId", "startAt", "endAt");

-- CreateIndex
CREATE INDEX "Booking_locationId_status_startAt_idx" ON "public"."Booking"("locationId", "status", "startAt");

-- AddForeignKey
ALTER TABLE "public"."Location" ADD CONSTRAINT "Location_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."LocationMembership" ADD CONSTRAINT "LocationMembership_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."LocationMembership" ADD CONSTRAINT "LocationMembership_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "public"."Location"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Amenity" ADD CONSTRAINT "Amenity_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "public"."Location"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Booking" ADD CONSTRAINT "Booking_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "public"."Location"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."BlackoutDate" ADD CONSTRAINT "BlackoutDate_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "public"."Location"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AuditLog" ADD CONSTRAINT "AuditLog_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "public"."Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;
