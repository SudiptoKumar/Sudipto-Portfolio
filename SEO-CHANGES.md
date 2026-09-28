# SEO Changes

This Vercel package preserves the existing SEO implementation while changing the production host to `https://sudiptokumar.vercel.app`.

- Primary identity: Sudipto Kumar
- Page title: `Sudipto Kumar | Finance & Banking · BBA · PSTU`
- Canonical URL: `https://sudiptokumar.vercel.app/`
- Open Graph and X card URLs use the Vercel host.
- JSON-LD `WebSite`, `ProfilePage`, and `Person` URLs use the Vercel host.
- `robots.txt` points to the Vercel sitemap.
- `sitemap.xml` points to the Vercel homepage.
- Existing favicon and profile-image assets are retained.
- The Google Search Console HTML verification file is retained for URL-prefix verification.

## Vercel-specific changes

- Netlify Functions endpoint changed from `/.netlify/functions/contact` to `/api/contact`.
- Netlify-only backend files were removed.
- `api/contact.js` is the Vercel serverless contact handler.
- `vercel.json` defines the Vite build and `dist` output.
