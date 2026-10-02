# Sudipto Kumar Portfolio

React + TypeScript + Vite portfolio for Sudipto Kumar, a BBA student in Finance and Banking and a tech enthusiast. This package is prepared for deployment on Vercel at:

`https://sudiptokumar.vercel.app`

## Stack

- React + TypeScript + Vite
- Tailwind CSS
- Framer Motion
- Lenis smooth scrolling
- Lucide icons
- Devicon technology marks in the scrolling toolkit marquee
- Vercel Node Function for the contact form

## Contact workflow

The contact form posts to `/api/contact`. The Vercel function validates the submitted fields, rejects the honeypot field, detects device/browser/IP metadata, and sends an HTML-formatted Telegram notification.

The Telegram notification uses a clickable `mailto:` email link and an HTML block quotation for the submitted message.

Required Vercel environment variables:

- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`

Add both variables in the Vercel project settings for the Production environment before testing the contact form.

## Build

```bash
npm install
npm run build
```

Vercel uses `vercel.json` with `npm run build` and publishes `dist`. Vercel automatically exposes `api/contact.js` as `/api/contact`.

## SEO / domain identity

The production URL, canonical URL, Open Graph URL/image URL, JSON-LD `WebSite` / `ProfilePage` / `Person` references, `robots.txt` sitemap URL, and XML sitemap all use `https://sudiptokumar.vercel.app` in this package.

The Google Search Console HTML verification file is retained so the new Vercel URL can be verified as a separate URL-prefix property.
