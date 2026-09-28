# Portfolio ZIP Import Workflow

This repository includes a GitHub Actions workflow that lets you upload a new portfolio ZIP to the repository root. The workflow extracts it, replaces the existing portfolio files, removes the ZIP, and commits the imported version.

## Normal use

1. Keep this repository **private**.
2. Upload the new portfolio ZIP to the repository root using **Add file → Upload files**.
3. Commit the ZIP to `main`.
4. GitHub Actions automatically runs `Import Portfolio ZIP`.
5. The workflow extracts the ZIP, cleans the previous portfolio files, commits the new files, and removes the ZIP.
6. Because the Vercel project is connected to this repository, the resulting Git commit can trigger the Vercel deployment.

## ZIP requirements

- Put the portfolio files at the ZIP root, as in the supplied portfolio ZIP.
- A ZIP containing one top-level project folder is also supported.
- Do not include `.git` in the ZIP.
- Keep secrets out of the ZIP. Telegram credentials belong in Vercel Environment Variables.

## Manual workflow run

You can also run the workflow from **Actions → Import Portfolio ZIP → Run workflow** and provide the exact ZIP filename already present in the repository root.
