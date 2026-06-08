# Grill: Seed landing-page testimonials into Strapi CMS
Date: 2026-06-08

## Intent
Make the landing-page testimonials editable by the client in the Strapi CMS. The
client should open "Testimonials" in the admin, see the existing reviews listed,
click any one to edit it, and use "Add new entry" to create more — exactly like
the existing blog collection. This requires two halves: (1) seed the existing
testimonials into Strapi, and (2) rewire the frontend to fetch them from Strapi
instead of a hardcoded array.

## Constraints
- Must work in PRODUCTION (Strapi on Render: network-masters-hub-pkkk.onrender.com),
  not just local dev. A local SQLite seed does not reach the client (this is the
  exact failure documented in course-images-missing-in-prod.md).
- No production backend redeploy / schema migration if avoidable.
- Live testimonials section must never render blank.

## Key decisions
- Decision: Scope is ONLY the 9 card testimonials in Testimonials.tsx ("Success
  Stories" grid, rendered in page.tsx:60). Reason: that is the only testimonials
  section live on the site. Alternative rejected: include the 9 in
  WrittenTestimonialsSection.tsx — that component is dead code (never imported/
  rendered), so it's ignored entirely.
- Decision: One tagged collection was considered for merging both sections, but
  became moot once the written section was dropped. Use the EXISTING `testimonial`
  schema as-is (name, role, message richtext, avatar media). Reason: it already
  fits the 9 card testimonials → no schema change → no prod redeploy.
- Decision: Seed via Strapi REST API against PRODUCTION using a freshly created
  prod API token (user will generate in Admin → Settings → API Tokens). Reason:
  local DB seed never reaches the client; tokens in the repo are local-only.
  Entries must be created as PUBLISHED (draftAndPublish is on).
- Decision: Keep the current 9 hardcoded as a fallback. Frontend renders Strapi
  data; if the fetch fails/empties/403s (Render cold start, missing permission),
  it falls back to the hardcoded 9 so the section never goes blank.
- Decision: Sort by date (oldest-first) to preserve current on-site order; new
  client entries append. No `order` field — avoids schema change/redeploy.
- Decision: Render uploaded avatar when present, else keep the existing gray-circle
  placeholder. Lets the client add student photos later with no code change.
- Decision: Enable Public find/findOne permission for the testimonial collection
  in prod Strapi (user will flip in Settings → Roles → Public). Frontend reads
  publicly; fallback covers the case where it's still off.

## Surfaced assumptions
- Production Strapi shares the same Cloudinary + admin as documented prior; other
  content (courses/blogs) already loads live, implying public read works for them.
- Repo Strapi tokens (frontend/.env.local and the hardcoded fallback in
  strapi.ts) are issued for the LOCAL instance and likely won't authenticate
  against prod.
- Testimonials.tsx can fetch server-side (it wraps client-only motion children),
  mirroring how blogs are fetched.

## Open questions
- Exact prod API token value — user is creating a fresh one.
- Whether Netlify needs any env change (only if we later switch to token-based
  read instead of public read).

## Out of scope
- WrittenTestimonialsSection.tsx (dead code) — left untouched.
- Client-controllable ordering / `order` field.
- Any Strapi schema change or backend redeploy.
