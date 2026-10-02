
## 2026-10-02 - Initial-load / semantic H1 fix

- Removed the duplicate static SEO-only homepage from `index.html` so the browser no longer shows a second page before React mounts.
- Kept `#root` as a clean React mount point.
- Made the visible `Sudipto Kumar` text part of the real homepage `<h1>`.
- Removed the hidden-name/`aria-hidden` workaround from the Hero heading.
- Prevented the outer Hero columns from starting at `opacity: 0`, reducing first-paint flicker while retaining the existing component-level entrance animations.
- Preserved the existing single-page visual structure, navigation, metadata, JSON-LD, canonical URL, verification files, and portfolio content.


## v2 follow-up fixes
- Project image width/height corrected to the real 600x450 (v1 guessed 1280x800).
- Saved dark theme now restored before first paint (previously the choice was lost on reload; also removes a light flash).
- Removed the `color-scheme` meta added in v1 (could mismatch the class-based theme).
- Tech-stack icons now reserve 20x20 space.

## v3
- `dateModified` in the ProfilePage JSON-LD is now a full ISO 8601 datetime with timezone (`2026-10-02T09:30:00+06:00`) to clear the Rich Results "Invalid datetime value" warning. Update it whenever you make a meaningful content change.
