
## v2 follow-up fixes
- Project image width/height corrected to the real 600x450 (v1 guessed 1280x800).
- Saved dark theme now restored before first paint (previously the choice was lost on reload; also removes a light flash).
- Removed the `color-scheme` meta added in v1 (could mismatch the class-based theme).
- Tech-stack icons now reserve 20x20 space.

## v3
- `dateModified` in the ProfilePage JSON-LD is now a full ISO 8601 datetime with timezone (`2026-10-02T09:30:00+06:00`) to clear the Rich Results "Invalid datetime value" warning. Update it whenever you make a meaningful content change.
