// Usage: node scripts/set-domain.mjs https://yourdomain.com
// Swaps the canonical origin everywhere it is hard-coded (index.html, robots, sitemap, llms.txt, Netlify redirect).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const OLD = "https://sudiptokumar.vercel.app";
const next = (process.argv[2] || "").replace(/\/+$/, "");
if (!/^https:\/\/[a-z0-9-]+(\.[a-z0-9-]+)+$/i.test(next)) {
  console.error("Usage: node scripts/set-domain.mjs https://yourdomain.com   (https, no path)");
  process.exit(1);
}
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
for (const f of ["index.html", "public/robots.txt", "public/sitemap.xml", "public/llms.txt", "public/_redirects"]) {
  const file = path.join(root, f);
  if (!fs.existsSync(file)) continue;
  const text = fs.readFileSync(file, "utf8");
  const count = text.split(OLD).length - 1;
  fs.writeFileSync(file, text.split(OLD).join(next));
  console.log(`${f}: ${count} replacement(s)`);
}
console.log(`Done. Canonical origin is now ${next}. Redeploy, then add it to Search Console.`);
