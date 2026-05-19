# Grill: Course images not showing on landing page
Date: 2026-05-19

## Intent
Course photos uploaded via Strapi CMS are not visible on the landing page. Titles and other data load correctly but images show as broken/blank.

## Constraints
- Backend hosted on Render (free tier, ephemeral filesystem)
- Frontend on Netlify
- User wants Cloudinary for image storage

## Key decisions
- Decision: Use Cloudinary as upload provider. Reason: Render's filesystem is ephemeral — files are wiped on every redeploy. Cloudinary free tier (25GB) is sufficient and the config code already exists in plugins.ts. Alternative considered: Render persistent disk (paid).

## Surfaced assumptions
- User assumed "no console errors" meant no network-level image failures — but Network tab (not Console) is where 404s on image requests appear.
- User assumed the Cloudinary config in plugins.ts was active — but `@strapi/provider-upload-cloudinary` was never installed, so Strapi fell back to local disk storage silently.
- Images were uploaded to Render's ephemeral local disk. After a redeploy, the files were wiped. The database still holds the metadata (name, format, URL path) but the actual files are gone.

## Root cause
`plugins.ts` was `({})` (empty) on the deployed version — no upload provider configured. Strapi defaulted to local filesystem. Render's ephemeral disk wiped the uploaded files on redeploy. The `plugins.ts` Cloudinary config was added locally but never committed or deployed, and the npm package was never installed.

## Open questions
- Whether existing broken image records in Strapi's Media Library need to be deleted and re-uploaded, or if re-uploading overwrites them.
