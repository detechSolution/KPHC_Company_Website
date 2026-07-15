<script setup lang="ts">
import { DEFAULT_DESCRIPTION, OG_IMAGE_URL, SITE_NAME, SITE_URL } from '~/utils/site'
import { buildOrganizationJsonLd } from '~/utils/structured-data'

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#23B473' },
    { name: 'apple-mobile-web-app-title', content: 'KPHC' },
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' },
    { rel: 'shortcut icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
    { rel: 'canonical', href: `${SITE_URL}/` },
  ],
  htmlAttrs: {
    lang: 'en',
  },
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(buildOrganizationJsonLd()),
    },
  ],
})

useSeoMeta({
  title: SITE_NAME,
  description: DEFAULT_DESCRIPTION,
  ogTitle: SITE_NAME,
  ogDescription: DEFAULT_DESCRIPTION,
  ogImage: OG_IMAGE_URL,
  ogImageAlt: 'Kalihi-Palama Health Center care team with patients',
  ogUrl: `${SITE_URL}/`,
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterImage: OG_IMAGE_URL,
})
</script>

<template>
  <UApp>
    <AppHeader />

    <UMain>
      <NuxtPage />
    </UMain>

    <AppFooter />
  </UApp>
</template>
