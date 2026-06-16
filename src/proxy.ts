import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";
import { PlatformRole } from "@/generated/prisma";
import { prisma } from "@/lib/db/prisma";

function getSupabaseEnv() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabasePublishableKey =
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!supabaseUrl || !supabasePublishableKey) {
    throw new Error(
      "Missing Supabase environment variables. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY.",
    );
  }

  return {
    supabaseUrl,
    supabasePublishableKey,
  };
}

async function syncAuthSession(request: NextRequest) {
  const { supabaseUrl, supabasePublishableKey } = getSupabaseEnv();

  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(supabaseUrl, supabasePublishableKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));

        response = NextResponse.next({
          request,
        });

        cookiesToSet.forEach(({ name, value, options }) => {
          response.cookies.set(name, value, options);
        });
      },
    },
  });

  const { data, error } = await supabase.auth.getUser();

  if (error || !data.user?.email) {
    return { response, authUser: null };
  }

  const email = data.user.email.trim().toLowerCase();
  const displayName =
    data.user.user_metadata?.full_name ??
    data.user.user_metadata?.name ??
    email.split("@")[0] ??
    email;

  const user = await prisma.user.findUnique({
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
      },
    },
  });

  const syncedUser =
    user ??
    (await prisma.user.create({
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
        },
      },
    }));

  return { response, authUser: data.user, appUser: syncedUser };
}

function getDefaultHomePath(appUser: { platformRole: string; memberships: Array<{ role: string }> }) {
  if (appUser.platformRole === PlatformRole.SUPERUSER) {
    return "/superuser";
  }

  const hasStaffMembership = appUser.memberships.some(
    (membership) => membership.role === "STAFF",
  );
  if (hasStaffMembership) {
    return "/admin";
  }

  const hasResidentMembership = appUser.memberships.some(
    (membership) => membership.role === "RESIDENT",
  );
  if (hasResidentMembership) {
    return "/dashboard";
  }

  return null;
}

function isPublicPath(pathname: string) {
  return pathname === "/" || pathname === "/sign-in" || pathname === "/sign-up";
}

function isResidentPath(pathname: string) {
  return (
    pathname === "/dashboard" ||
    pathname.startsWith("/amenities") ||
    pathname.startsWith("/party-rooms") ||
    pathname.startsWith("/bookings") ||
    pathname.startsWith("/profile")
  );
}

function isAdminPath(pathname: string) {
  return pathname === "/admin" || pathname.startsWith("/admin/");
}

function isSuperuserPath(pathname: string) {
  return pathname === "/superuser" || pathname.startsWith("/superuser/");
}

export async function proxy(request: NextRequest) {
  const { response, authUser, appUser } = await syncAuthSession(request);
  const pathname = request.nextUrl.pathname;

  if (isPublicPath(pathname)) {
    const homePath = authUser && appUser ? getDefaultHomePath(appUser) : null;

    if (homePath) {
      return NextResponse.redirect(new URL(homePath, request.url));
    }

    return response;
  }

  if (!authUser || !appUser) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  const isSuperuser = appUser.platformRole === PlatformRole.SUPERUSER;
  const hasResidentMembership = appUser.memberships.some(
    (membership) => membership.role === "RESIDENT",
  );
  const hasStaffMembership = appUser.memberships.some(
    (membership) => membership.role === "STAFF",
  );

  if (isSuperuserPath(pathname) && !isSuperuser) {
    return NextResponse.redirect(
      new URL(hasStaffMembership ? "/admin" : "/dashboard", request.url),
    );
  }

  if (isAdminPath(pathname) && !isSuperuser && !hasStaffMembership) {
    return NextResponse.redirect(
      new URL(hasResidentMembership ? "/dashboard" : "/sign-in", request.url),
    );
  }

  if (isResidentPath(pathname) && !isSuperuser && !hasResidentMembership) {
    return NextResponse.redirect(
      new URL(hasStaffMembership ? "/admin" : "/sign-in", request.url),
    );
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
