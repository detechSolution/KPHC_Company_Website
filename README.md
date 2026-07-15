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

## Quality checks

```bash
pnpm lint
pnpm typecheck
pnpm test
```

## Agent / contributor notes

See [AGENTS.md](./AGENTS.md) and `.cursor/rules/` for SSG and Vue/Nuxt conventions.
