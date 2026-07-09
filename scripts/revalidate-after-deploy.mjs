import { readFileSync, existsSync } from "node:fs";

function loadEnvLocal() {
  const path = ".env.local";
  if (!existsSync(path)) return {};

  const env = {};
  for (const line of readFileSync(path, "utf8").split("\n")) {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
    if (!match) continue;
    let value = match[2] ?? "";
    if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
    env[match[1]] = value;
  }
  return env;
}

const env = { ...loadEnvLocal(), ...process.env };
const secret = env.SANITY_WEBHOOK_SECRET;
const siteUrl = env.NEXT_PUBLIC_SITE_URL ?? "https://rdsvenues.com";

if (!secret) {
  console.error("SANITY_WEBHOOK_SECRET not found in .env.local or process.env — skipping post-deploy revalidation.");
  process.exit(1);
}

const url = `${siteUrl}/api/revalidate?secret=${encodeURIComponent(secret)}`;

console.log(`Revalidating all pages at ${siteUrl}...`);

const res = await fetch(url);
const body = await res.json().catch(() => ({}));

if (!res.ok) {
  console.error(`Revalidation failed: ${res.status}`, body);
  process.exit(1);
}

console.log("Revalidated:", body);
