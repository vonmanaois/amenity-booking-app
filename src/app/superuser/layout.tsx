import { AppShell } from "@/components/layout/app-shell";

const superuserLinks = [
  { href: "/superuser", label: "Overview" },
  { href: "/superuser/staff", label: "Staff" },
  { href: "/superuser/roles", label: "Roles" },
  { href: "/superuser/audit", label: "Audit" },
];

export default function SuperuserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppShell
      area="Superuser"
      title="Platform Control"
      description="Platform-level oversight, staff governance, and audit review."
      links={superuserLinks}
    >
      {children}
    </AppShell>
  );
}
