import Link from "next/link";

export default function MarketingHomePage() {
  return (
    <main className="min-h-screen bg-background px-6 py-10 text-foreground">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <section className="rounded-[2rem] border border-border bg-surface px-8 py-12 shadow-sm">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted">
            Amenity Booking App
          </p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
            <div className="space-y-5">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
                Resident amenity and party room booking, structured like your
                `beliefted` app and ready for phased buildout.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg">
                The scaffold is initialized with App Router, `src/`, Tailwind,
                and the first route groups for residents, staff admins, and
                superusers.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/sign-in"
                  className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
                >
                  Sign in
                </Link>
                <Link
                  href="/dashboard"
                  className="rounded-full border border-border bg-surface px-5 py-3 text-sm font-semibold"
                >
                  View resident shell
                </Link>
              </div>
            </div>
            <div className="rounded-[1.5rem] border border-border bg-surface-strong p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
                Current setup
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-muted">
                <li>Resident route group and booking pages</li>
                <li>Staff admin dashboard routes</li>
                <li>Superuser oversight routes</li>
                <li>Product docs in `/docs`</li>
                <li>Ready for auth, Prisma, and PWA work next</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
