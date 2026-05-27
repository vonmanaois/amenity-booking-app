import { AppShell } from "@/components/layout/app-shell";

const residentLinks = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/amenities", label: "Amenities" },
  { href: "/party-rooms", label: "Party Rooms" },
  { href: "/bookings", label: "Bookings" },
  { href: "/profile", label: "Profile" },
];

export default function ResidentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppShell
      area="Resident"
      title="Amenity Booking"
      description="Resident booking surfaces for amenities and party rooms."
      links={residentLinks}
    >
      {children}
    </AppShell>
  );
}
