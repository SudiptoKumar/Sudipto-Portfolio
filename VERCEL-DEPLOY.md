# Vercel Deployment

## 1. Create the Vercel project

Import this project into Vercel. Vercel can detect the Vite project automatically; the included `vercel.json` explicitly sets `npm run build` and `dist` as the output directory.

Production URL:

`https://sudiptokumar.vercel.app`

## 2. Add contact-form environment variables

In Vercel Project Settings → Environment Variables, add these for Production:

- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`

## 3. Deploy

Use the Production deployment. The contact form is handled by `api/contact.js` at `/api/contact`.

## 4. Verify after deployment

Open:

- `https://sudiptokumar.vercel.app/`
- `https://sudiptokumar.vercel.app/robots.txt`
- `https://sudiptokumar.vercel.app/sitemap.xml`
- `https://sudiptokumar.vercel.app/google2f899ba08432c5c4.html`
- `https://sudiptokumar.vercel.app/api/contact` (GET should return Method Not Allowed)

For SEO, create/verify a separate URL-prefix property for `https://sudiptokumar.vercel.app/` in Google Search Console and submit the sitemap.
