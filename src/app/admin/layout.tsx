import { AppShell } from "@/components/layout/app-shell";

const adminLinks = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/amenities", label: "Amenities" },
  { href: "/admin/party-rooms", label: "Party Rooms" },
  { href: "/admin/bookings", label: "Bookings" },
  { href: "/admin/users", label: "Users" },
  { href: "/admin/settings", label: "Settings" },
];

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppShell
      area="Staff Admin"
      title="Operations"
      description="Coordinator and staff management surfaces."
      links={adminLinks}
    >
      {children}
    </AppShell>
  );
}
