# Next Steps

## Immediate

1. Create the Supabase project.
2. Replace placeholder values in `.env` with the real `DATABASE_URL` and `DIRECT_URL`.
3. Run the first Prisma migration.
4. Confirm the database tables exist in Supabase.

## After Supabase Connection

1. Add a seed script for:
   - residents
   - staff admins
   - superuser
   - amenities
   - party rooms
2. Start auth integration.
3. Build resident amenities and party room list pages against real data.

## Important Constraints

- do not start heavy booking UI before the first migration exists
- keep booking logic server-side
- keep role logic centralized once auth is added

## Open Questions

- use Auth.js or Supabase Auth?
- should all party rooms require approval?
- should resident self-registration be open or invite-only?

## Session-End Reminder

Before each stop point:

- update `worklog.md`
- update `next-steps.md`
- add any durable architecture changes to `decisions.md`
- commit
