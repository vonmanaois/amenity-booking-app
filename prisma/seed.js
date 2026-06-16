/* eslint-disable @typescript-eslint/no-require-imports */

const {
  PrismaClient,
  PlatformRole,
  LocationMembershipRole,
  AmenityType,
  AmenityStatus,
  BookingStatus,
} = require("../src/generated/prisma");

const prisma = new PrismaClient();

async function main() {
  await prisma.auditLog.deleteMany();
  await prisma.blackoutDate.deleteMany();
  await prisma.booking.deleteMany();
  await prisma.amenity.deleteMany();
  await prisma.locationMembership.deleteMany();
  await prisma.location.deleteMany();
  await prisma.user.deleteMany();

  const superuser = await prisma.user.create({
    data: {
    email: "superuser@amenity.local",
    name: "Platform Superuser",
    phone: "555-000-1000",
    platformRole: PlatformRole.SUPERUSER,
    passwordHash: "seeded-password-placeholder",
    },
  });

  const [downtownLocation, lakesideLocation] = await Promise.all([
    prisma.location.create({
      data: {
        name: "Downtown Tower",
        slug: "downtown-tower",
        addressLine1: "100 King Street West",
        city: "Toronto",
        province: "ON",
        postalCode: "M5X 1A9",
        createdById: superuser.id,
      },
    }),
    prisma.location.create({
      data: {
        name: "Lakeside Residences",
        slug: "lakeside-residences",
        addressLine1: "25 Harbour View Drive",
        city: "Mississauga",
        province: "ON",
        postalCode: "L5B 4P2",
        createdById: superuser.id,
      },
    }),
  ]);

  const users = await Promise.all([
    prisma.user.create({
      data: {
      email: "staff.downtown@amenity.local",
      name: "Downtown Coordinator",
      phone: "555-000-2001",
      platformRole: PlatformRole.USER,
      passwordHash: "seeded-password-placeholder",
      },
    }),
    prisma.user.create({
      data: {
      email: "staff.lakeside@amenity.local",
      name: "Lakeside Coordinator",
      phone: "555-000-2002",
      platformRole: PlatformRole.USER,
      passwordHash: "seeded-password-placeholder",
      },
    }),
    prisma.user.create({
      data: {
      email: "resident.one@amenity.local",
      name: "Avery Resident",
      phone: "555-000-3001",
      platformRole: PlatformRole.USER,
      passwordHash: "seeded-password-placeholder",
      },
    }),
    prisma.user.create({
      data: {
      email: "resident.two@amenity.local",
      name: "Jordan Resident",
      phone: "555-000-3002",
      platformRole: PlatformRole.USER,
      passwordHash: "seeded-password-placeholder",
      },
    }),
    prisma.user.create({
      data: {
      email: "resident.three@amenity.local",
      name: "Taylor Resident",
      phone: "555-000-3003",
      platformRole: PlatformRole.USER,
      passwordHash: "seeded-password-placeholder",
      },
    }),
    prisma.user.create({
      data: {
      email: "resident.four@amenity.local",
      name: "Morgan Resident",
      phone: "555-000-3004",
      platformRole: PlatformRole.USER,
      passwordHash: "seeded-password-placeholder",
      },
    }),
  ]);

  const [
    downtownStaff,
    lakesideStaff,
    downtownResidentOne,
    downtownResidentTwo,
    lakesideResidentOne,
    lakesideResidentTwo,
  ] = users;

  const memberships = [
    {
      userId: downtownStaff.id,
      locationId: downtownLocation.id,
      role: LocationMembershipRole.STAFF,
      isPrimary: true,
    },
    {
      userId: lakesideStaff.id,
      locationId: lakesideLocation.id,
      role: LocationMembershipRole.STAFF,
      isPrimary: true,
    },
    {
      userId: downtownResidentOne.id,
      locationId: downtownLocation.id,
      role: LocationMembershipRole.RESIDENT,
      isPrimary: true,
    },
    {
      userId: downtownResidentTwo.id,
      locationId: downtownLocation.id,
      role: LocationMembershipRole.RESIDENT,
      isPrimary: true,
    },
    {
      userId: lakesideResidentOne.id,
      locationId: lakesideLocation.id,
      role: LocationMembershipRole.RESIDENT,
      isPrimary: true,
    },
    {
      userId: lakesideResidentTwo.id,
      locationId: lakesideLocation.id,
      role: LocationMembershipRole.RESIDENT,
      isPrimary: true,
    },
  ];

  for (const membership of memberships) {
    await prisma.locationMembership.create({
      data: membership,
    });
  }

  const amenities = await Promise.all([
    prisma.amenity.create({
      data: {
          locationId: downtownLocation.id,
        name: "Skyline Party Room",
        slug: "skyline-party-room",
        type: AmenityType.PARTY_ROOM,
        description: "Large event room with skyline views for resident celebrations.",
        area: "Level 12 West Wing",
        capacity: 60,
        slotDurationMinutes: 240,
        openTime: "10:00",
        closeTime: "23:00",
        rules: "Residents must clean the room after use. Approval required for events over 40 guests.",
        status: AmenityStatus.ACTIVE,
        requiresApproval: true,
        maxAdvanceDays: 90,
        maxBookingDurationMinutes: 360,
        cancellationCutoffHours: 48,
      },
    }),
    prisma.amenity.create({
      data: {
          locationId: downtownLocation.id,
        name: "Fitness Studio",
        slug: "fitness-studio",
        type: AmenityType.GYM,
        description: "Shared workout studio for group and solo exercise sessions.",
        area: "Level 3 Wellness Floor",
        capacity: 20,
        slotDurationMinutes: 60,
        openTime: "06:00",
        closeTime: "22:00",
        rules: "Indoor shoes required.",
        status: AmenityStatus.ACTIVE,
      },
    }),
    prisma.amenity.create({
      data: {
          locationId: lakesideLocation.id,
        name: "Harbour Party Lounge",
        slug: "harbour-party-lounge",
        type: AmenityType.PARTY_ROOM,
        description: "Private party lounge for birthdays, dinners, and resident gatherings.",
        area: "Ground Floor Club Lounge",
        capacity: 45,
        slotDurationMinutes: 180,
        openTime: "11:00",
        closeTime: "22:00",
        rules: "Alcohol service requires staff approval.",
        status: AmenityStatus.ACTIVE,
        requiresApproval: true,
        maxAdvanceDays: 60,
        maxBookingDurationMinutes: 300,
        cancellationCutoffHours: 72,
      },
    }),
    prisma.amenity.create({
      data: {
          locationId: lakesideLocation.id,
        name: "Boardroom One",
        slug: "boardroom-one",
        type: AmenityType.MEETING_ROOM,
        description: "Small reservable meeting room for residents and committees.",
        area: "Second Floor Business Hub",
        capacity: 10,
        slotDurationMinutes: 60,
        openTime: "08:00",
        closeTime: "20:00",
        rules: "No food inside the boardroom.",
        status: AmenityStatus.ACTIVE,
      },
    }),
  ]);

  const [downtownPartyRoom, downtownGym, lakesidePartyRoom, lakesideBoardroom] =
    amenities;

  await prisma.blackoutDate.create({
    data: {
      id: "seeded-downtown-blackout",
      locationId: downtownLocation.id,
      amenityId: downtownPartyRoom.id,
      startAt: new Date("2026-06-15T16:00:00.000Z"),
      endAt: new Date("2026-06-15T23:00:00.000Z"),
      reason: "Location-wide maintenance event",
      allDay: false,
    },
  });

  const bookings = [
    {
      locationId: downtownLocation.id,
      residentId: downtownResidentOne.id,
      amenityId: downtownPartyRoom.id,
      approvedById: downtownStaff.id,
      startAt: new Date("2026-06-20T22:00:00.000Z"),
      endAt: new Date("2026-06-21T02:00:00.000Z"),
      guestCount: 35,
      status: BookingStatus.CONFIRMED,
      notes: "Birthday event setup starts 30 minutes early.",
      eventTitle: "Birthday Celebration",
      eventDetails: "Resident family birthday dinner and gathering.",
      approvedAt: new Date("2026-06-10T14:00:00.000Z"),
    },
    {
      locationId: downtownLocation.id,
      residentId: downtownResidentTwo.id,
      amenityId: downtownGym.id,
      startAt: new Date("2026-06-12T11:00:00.000Z"),
      endAt: new Date("2026-06-12T12:00:00.000Z"),
      guestCount: 2,
      status: BookingStatus.CONFIRMED,
      notes: "Personal training session.",
    },
    {
      locationId: lakesideLocation.id,
      residentId: lakesideResidentOne.id,
      amenityId: lakesidePartyRoom.id,
      startAt: new Date("2026-06-28T21:00:00.000Z"),
      endAt: new Date("2026-06-29T01:00:00.000Z"),
      guestCount: 28,
      status: BookingStatus.PENDING,
      notes: "Needs review for food vendor access.",
      eventTitle: "Engagement Dinner",
      eventDetails: "Small private family celebration with catering.",
    },
    {
      locationId: lakesideLocation.id,
      residentId: lakesideResidentTwo.id,
      amenityId: lakesideBoardroom.id,
      startAt: new Date("2026-06-18T23:00:00.000Z"),
      endAt: new Date("2026-06-19T00:00:00.000Z"),
      guestCount: 4,
      status: BookingStatus.CONFIRMED,
      notes: "Condo committee planning session.",
    },
  ];

  for (const booking of bookings) {
    await prisma.booking.create({
      data: booking,
    });
  }

  await prisma.auditLog.createMany({
    data: [
      {
        actorUserId: superuser.id,
        locationId: downtownLocation.id,
        action: "LOCATION_CREATED",
        entityType: "Location",
        entityId: downtownLocation.id,
        metadata: { seeded: true },
      },
      {
        actorUserId: superuser.id,
        locationId: lakesideLocation.id,
        action: "LOCATION_CREATED",
        entityType: "Location",
        entityId: lakesideLocation.id,
        metadata: { seeded: true },
      },
    ],
    skipDuplicates: true,
  });

  console.log("Seeded locations, users, memberships, amenities, bookings, and audit logs.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
