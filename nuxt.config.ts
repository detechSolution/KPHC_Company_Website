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
    '/_nuxt/**': {
      headers: {
        'cache-control': 'public, max-age=31536000, immutable',
      },
    },
    '/images/**': {
      headers: {
        'cache-control': 'public, max-age=31536000, immutable',
      },
    },
    '/fonts/**': {
      headers: {
        'cache-control': 'public, max-age=31536000, immutable',
      },
    },
    '/**': {
      prerender: true,
      headers: {
        'cache-control': 'public, max-age=0, must-revalidate',
      },
    },
  },

  experimental: {
    // After a deploy, cached HTML may reference removed chunk hashes. Reload
    // immediately when a lazy chunk fails instead of showing a 500 error page.
    emitRouteChunkError: 'automatic-immediate',
  },

  devtools: {
    enabled: import.meta.dev,
  },

  app: {
    head: {
      link: [
        {
          rel: 'preload',
          as: 'font',
          type: 'font/woff2',
          href: '/fonts/caveat-latin-400.woff2',
          crossorigin: 'anonymous',
        },
        {
          rel: 'preload',
          as: 'image',
          href: '/images/logo-header.webp',
          fetchpriority: 'high',
        },
      ],
    },
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
