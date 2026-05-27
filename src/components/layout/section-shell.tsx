type SectionShellProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionShell({
  eyebrow,
  title,
  description,
}: SectionShellProps) {
  return (
    <section className="space-y-6">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
          {eyebrow}
        </p>
        <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
        <p className="max-w-3xl text-base leading-7 text-muted">
          {description}
        </p>
      </div>
      <div className="rounded-[1.5rem] border border-dashed border-border bg-surface-strong px-5 py-6 text-sm leading-6 text-muted">
        This page is intentionally lightweight for the initial setup. It marks
        the route and ownership boundary so we can add auth, data models, and
        booking workflows without reshaping the app structure later.
      </div>
    </section>
  );
}
