# Grill: Course images missing in production
Date: 2026-05-25

## Intent
Fix the 5 course cards on the landing page (section directly below Hero) showing no images on the deployed Netlify site, while localhost works correctly.

## Constraints
- Fix must be live ASAP — this is visible to real users
- Cannot change the deployment stack (Netlify frontend + Render Strapi backend)
- Images already exist on Cloudinary (from prior seeding of local DB)

## Key decisions
- Decision: Use the Strapi REST API to upload images and link them to courses, not direct DB manipulation. Reason: the production Strapi is on Render (PostgreSQL or SQLite on ephemeral disk) — the seed script targets the local SQLite file only. Alternative considered: manually uploading via Strapi admin panel — slower, error-prone, and requires Cloudinary plugin to be configured with correct env vars.

## Surfaced assumptions
- The `seed-course-images.mjs` script was only ever run against the local `.tmp/data.db` (SQLite) — confirmed by the script literally opening that path.
- The production Strapi at `https://network-masters-hub-pkkk.onrender.com` IS reachable (other course data loads fine), but the `image` relation on each course is null.
- Cloudinary plugin IS configured in `backend/config/plugins.ts` — but only works if `CLOUDINARY_NAME`, `CLOUDINARY_KEY`, `CLOUDINARY_SECRET` env vars are set on the Render service.
- Images exist locally at `frontend/public/assets/p1.webp` through `p5.webp`.

## Open questions
- Are `CLOUDINARY_NAME`, `CLOUDINARY_KEY`, `CLOUDINARY_SECRET` set as environment variables on the Render service? If not, the upload provider falls back or fails silently.
- What is the production Strapi API token (needed to run the seeding script against production)?
- Which course slug maps to which image file (p1–p5)?
