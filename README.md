# KHPC Company Website

Static company website built with [Nuxt 4](https://nuxt.com) and [Nuxt UI](https://ui.nuxt.com). Deployed as **SSG** (no runtime server).

## Setup

```bash
pnpm install
```

## Development

```bash
pnpm dev
```

## Static generation (production)

```bash
pnpm generate
# or
pnpm build
```

Output is written to `.output/public` — deploy that folder to any static host (S3, Cloudflare Pages, Netlify, GitHub Pages, nginx, etc.).

Preview locally:

```bash
pnpm preview
```

## SiteGround manual deployment

Create an upload-ready archive:

```bash
pnpm build:siteground
```

This runs static generation (without touching `vercel.json`), packages
`.output/public` into `siteground-deploy.zip` in the project root, and includes
`public/.htaccess` with Apache rewrite, cache, and security headers. Security
header values stay aligned with `security-headers.mjs` via
`pnpm sync:siteground-htaccess` (also run automatically as part of
`pnpm sync:host-headers` / `pnpm generate`).

**Upload:** In SiteGround Site Tools, open **Site → File Manager**, upload the
archive to the domain's `public_html` directory, extract it there, and remove
the archive afterward. The extracted `index.html`, `.htaccess`, `_nuxt`, and
other generated files must sit directly inside `public_html` (not inside an
extra folder).

**Requirements:** `build:siteground` needs the `zip` command on your PATH
(macOS includes it; on Windows use Git Bash or WSL, or install zip manually).

**If headers or pretty URLs fail after deploy:** confirm Apache modules
`mod_rewrite`, `mod_headers`, and `mod_deflate` are enabled and that
`.htaccess` overrides are allowed for the site (typical on SiteGround shared
hosting). Re-upload a fresh zip if an old `.htaccess` was left in `public_html`.

## Quality checks

```bash
pnpm lint
pnpm typecheck
pnpm test
```

## Agent / contributor notes

See [AGENTS.md](./AGENTS.md) and `.cursor/rules/` for SSG and Vue/Nuxt conventions.
