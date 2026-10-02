# SEO Build v2026-09-29

This release keeps the existing visual portfolio identity unchanged and strengthens the single-page personal-identity system.

## Identity
- Primary identity: Sudipto Kumar
- Hero tagline: `BBA Student · Tech Enthusiast`
- Academic context: Finance & Banking · BBA · PSTU
- Targeted query variants include the full-name and short-name forms for portfolio, website, BBA, Finance, Finance & Banking, PSTU, and projects.

## Image identity
- Existing SK favicon retained.
- Personal portrait is the primary person image.
- Added 1:1, 4:3, and 16:9 portrait assets.
- Replaced the previous text-based OG preview with a photo-led preview containing no text overlay.
- Added image sitemap entries for the portrait assets.

## Structured data
- WebSite
- WebPage
- ProfilePage
- Person
- ImageObject
- Person `sameAs` links for confirmed profiles
- `Person.image` points to the portrait variants

## Search architecture
- Single-page portfolio only.
- No keyword doorway pages.
- Vercel is the primary canonical search identity.
- Netlify mirrors the same content/design and points its canonical to Vercel.

## Deployment
- Vercel build remains Vite + `/api/contact`.
- Netlify build uses the same front-end and maps `/api/contact` to the Netlify function.
- Both deployments use the same environment variable names for Telegram contact delivery.


## 2026-10-02 - Minimal parity bug-fix release
- Rebuilt from the current GitHub source baseline to preserve all existing sections, navigation, cards, and visual content.
- Fixed the semantic Hero H1 without removing the existing visual identity treatment.
- Reduced first-paint Hero hiding without removing inner entrance animations.
- Added a mobile-safe fallback for the Hero name to prevent gradient-block rendering.
- Improved Contact form placeholder contrast.
- Added a fixed-header offset to section navigation.
- No sections or existing content were intentionally removed.
