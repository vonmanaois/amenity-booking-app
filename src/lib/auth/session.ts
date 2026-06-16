import "server-only";

import { cache } from "react";
import { redirect } from "next/navigation";
import { PlatformRole, type LocationMembershipRole } from "@/generated/prisma";

import { prisma } from "@/lib/db/prisma";
import { createClient } from "@/lib/supabase/server";

export type AuthLocationMembership = {
  id: string;
  locationId: string;
  role: LocationMembershipRole;
  isPrimary: boolean;
  location: {
    id: string;
    name: string;
    slug: string;
    status: "ACTIVE" | "INACTIVE";
    timezone: string;
  };
};

export type AuthSessionUser = {
  id: string;
  email: string;
  name: string;
  phone: string | null;
  platformRole: PlatformRole;
  memberships: AuthLocationMembership[];
};

export type AuthSessionContext = {
  user: AuthSessionUser;
  memberships: AuthLocationMembership[];
  activeMembership: AuthLocationMembership | null;
  activeLocation: AuthLocationMembership["location"] | null;
};

const signInRoute = "/sign-in";
const dashboardRoute = "/dashboard";
const adminRoute = "/admin";
const superuserRoute = "/superuser";

function getDisplayName(email: string, fullName?: string | null) {
  if (fullName?.trim()) return fullName.trim();
  const [localPart] = email.split("@");
  return localPart || email;
}

export const getSupabaseAuthUser = cache(async () => {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data.user) {
    return null;
  }

  return data.user;
});

export const syncAppUserFromSupabaseUser = cache(async () => {
  const authUser = await getSupabaseAuthUser();

  if (!authUser) {
    return null;
  }

  const email = authUser.email?.trim().toLowerCase();
  if (!email) {
    return null;
  }

  const displayName = getDisplayName(
    email,
    authUser.user_metadata?.full_name ?? authUser.user_metadata?.name,
  );

  const existingByEmail = await prisma.user.findUnique({
    where: { email },
    select: {
      id: true,
      email: true,
      name: true,
      phone: true,
      platformRole: true,
      memberships: {
        select: {
          id: true,
          locationId: true,
          role: true,
          isPrimary: true,
          location: {
            select: {
              id: true,
              name: true,
              slug: true,
              status: true,
              timezone: true,
            },
          },
        },
        orderBy: [{ isPrimary: "desc" }, { createdAt: "asc" }],
      },
    },
  });

  if (existingByEmail) {
    return existingByEmail;
  }

  return prisma.user.create({
    data: {
      email,
      name: displayName,
      platformRole: PlatformRole.USER,
    },
    select: {
      id: true,
      email: true,
      name: true,
      phone: true,
      platformRole: true,
      memberships: {
        select: {
          id: true,
          locationId: true,
          role: true,
          isPrimary: true,
          location: {
            select: {
              id: true,
              name: true,
              slug: true,
              status: true,
              timezone: true,
            },
          },
        },
        orderBy: [{ isPrimary: "desc" }, { createdAt: "asc" }],
      },
    },
  });
});

export const getAuthSessionContext = cache(async (): Promise<AuthSessionContext | null> => {
  const user = await syncAppUserFromSupabaseUser();

  if (!user) {
    return null;
  }

  const memberships = user.memberships as AuthLocationMembership[];
  const activeMembership =
    memberships.find((membership) => membership.isPrimary) ?? memberships[0] ?? null;

  return {
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      phone: user.phone,
      platformRole: user.platformRole,
      memberships,
    },
    memberships,
    activeMembership,
    activeLocation: activeMembership?.location ?? null,
  };
});

export const requireAuthSession = cache(async () => {
  const context = await getAuthSessionContext();

  if (!context) {
    redirect(signInRoute);
  }

  return context;
});

export const requireSuperuserSession = cache(async () => {
  const context = await requireAuthSession();

  if (context.user.platformRole !== PlatformRole.SUPERUSER) {
    redirect(dashboardRoute);
  }

  return context;
});

export const requireStaffSession = cache(async () => {
  const context = await requireAuthSession();
  const hasStaffMembership = context.memberships.some(
    (membership) => membership.role === "STAFF",
  );

  if (context.user.platformRole !== PlatformRole.SUPERUSER && !hasStaffMembership) {
    redirect(dashboardRoute);
  }

  return context;
});

export const requireResidentSession = cache(async () => {
  const context = await requireAuthSession();
  const hasResidentMembership = context.memberships.some(
    (membership) => membership.role === "RESIDENT",
  );

  if (
    context.user.platformRole !== PlatformRole.SUPERUSER &&
    !hasResidentMembership
  ) {
    redirect(adminRoute);
  }

  return context;
});

export function getDefaultHomePath(context: AuthSessionContext) {
  if (context.user.platformRole === PlatformRole.SUPERUSER) {
    return superuserRoute;
  }

  const hasStaffMembership = context.memberships.some(
    (membership) => membership.role === "STAFF",
  );
  if (hasStaffMembership) {
    return adminRoute;
  }

  const hasResidentMembership = context.memberships.some(
    (membership) => membership.role === "RESIDENT",
  );
  if (hasResidentMembership) {
    return dashboardRoute;
  }

  return null;
}

export function canAccessAdminArea(context: AuthSessionContext) {
  return (
    context.user.platformRole === PlatformRole.SUPERUSER ||
    context.memberships.some((membership) => membership.role === "STAFF")
  );
}

export function canAccessResidentArea(context: AuthSessionContext) {
  return (
    context.user.platformRole === PlatformRole.SUPERUSER ||
    context.memberships.some((membership) => membership.role === "RESIDENT")
  );
}

export function canAccessSuperuserArea(context: AuthSessionContext) {
  return context.user.platformRole === PlatformRole.SUPERUSER;
}
