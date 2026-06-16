# Next Steps

## Immediate

1. Build the actual sign-in and sign-up flows against Supabase Auth.
2. Add role-aware redirects after sign-in so users land in the correct area.
3. Start building location-scoped resident and admin reads against real data.

## After Supabase Connection

1. Expand auth and authorization checks.
2. Decide when to apply the staged `authUserId` migration once the Prisma engine issue is resolved.
3. Build location-aware resident amenities and party room list pages against real data.
4. Add booking create/cancel flows with tenant validation.

## Important Constraints

- do not start heavy booking UI before auth and tenant scoping exist
- keep booking logic server-side
- keep role logic centralized once auth is added
- keep tenant scoping centralized once auth is added
- keep the auth helper layer email-compatible until the `authUserId` column is live

## Open Questions

- use Auth.js or Supabase Auth?
- should all party rooms require approval?
- should resident self-registration be open or invite-only?
- should a staff account ever belong to multiple locations?
- when to switch the helper layer from email mapping to `authUserId` mapping

## Session-End Reminder

Before each stop point:

- update `worklog.md`
- update `next-steps.md`
- add any durable architecture changes to `decisions.md`
- commit
