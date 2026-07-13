<script setup lang="ts">
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' },
  ],
  htmlAttrs: {
    lang: 'en',
  },
})

const title = 'Kalihi-Palama Health Center'
const description = 'Care when you need it most of all. Comprehensive medical, dental, and behavioral health services for our community.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <UApp>
    <AppHeader />

    <UMain>
      <NuxtPage />
    </UMain>

    <UFooter>
      <template #left>
        <p class="text-sm text-muted">
          KHPC © {{ new Date().getFullYear() }} All Rights Reserved
        </p>
      </template>
    </UFooter>
  </UApp>
</template>
