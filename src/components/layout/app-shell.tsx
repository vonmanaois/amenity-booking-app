import Link from "next/link";

type AppShellProps = {
  area: string;
  title: string;
  description: string;
  links: Array<{
    href: string;
    label: string;
  }>;
  children: React.ReactNode;
};

export function AppShell({
  area,
  title,
  description,
  links,
  children,
}: AppShellProps) {
  return (
    <div className="min-h-screen bg-background px-4 py-5 sm:px-6">
      <div className="mx-auto grid min-h-[calc(100vh-2.5rem)] max-w-7xl gap-4 lg:grid-cols-[260px_minmax(0,1fr)]">
        <aside className="rounded-[1.75rem] border border-border bg-surface px-5 py-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
            {area}
          </p>
          <h1 className="mt-4 text-2xl font-semibold tracking-tight">{title}</h1>
          <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
          <nav className="mt-8 flex flex-col gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-transparent px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-border hover:bg-surface-strong hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </aside>
        <div className="rounded-[1.75rem] border border-border bg-surface px-5 py-6 shadow-sm sm:px-8 sm:py-8">
          {children}
        </div>
      </div>
    </div>
  );
}
