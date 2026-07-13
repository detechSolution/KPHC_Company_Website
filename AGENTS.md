# Agent guidelines

This is the **KHPC company website**: a Nuxt 4 + Nuxt UI static marketing site.

## Must follow

1. **SSG only** — produce static files via `pnpm generate` / `pnpm build`. No runtime Node/Nitro server.
2. Keep **`ssr: true`** so pages prerender to HTML (SEO). Do not switch to `ssr: false` unless asked.
3. Do **not** add `server/` API routes, ISR, SWR, or server-only middleware.
4. Vue 3 **Composition API** + `<script setup lang="ts">`.
5. Prefer **Nuxt UI** + Tailwind; keep pages/views thin and components focused.

## Commands

| Script | Purpose |
|--------|---------|
| `pnpm dev` | Local development |
| `pnpm generate` / `pnpm build` | Static site generation → `.output/public` |
| `pnpm preview` | Preview the generated site |
| `pnpm lint` | ESLint |
| `pnpm typecheck` | `nuxt typecheck` |

## Rules & skills context

Project Cursor rules live in `.cursor/rules/`. They adapt guidance from [antfu/skills](https://github.com/antfu/skills) (Vue, Nuxt, vue-best-practices) for this SSG company site.

When implementing UI/Vue work, apply the Vue architecture, reactivity/SFC, and data-flow rules already in `.cursor/rules/`.
