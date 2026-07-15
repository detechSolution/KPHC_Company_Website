// https://nuxt.com/docs/api/configuration/nuxt-config
import { PUBLIC_ROUTES } from './app/utils/site'

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
  ],

  // Company site: SSG only. Keep ssr:true so pages prerender to real HTML at
  // build time (required for SEO). There is no Node/Nitro server at runtime.
  ssr: true,

  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: [...PUBLIC_ROUTES],
    },
  },

  routeRules: {
    '/**': { prerender: true },
  },

  devtools: {
    enabled: true,
  },

  css: ['~/assets/css/main.css'],

  // Light-only site — no dark/system theme switching
  ui: {
    colorMode: false,
  },

  compatibilityDate: '2026-06-30',

  eslint: {
    config: {
      // Let @antfu/eslint-config own JS/TS/Vue/stylistic; Nuxt adds Nuxt-specific rules only
      standalone: false,
    },
  },
})
