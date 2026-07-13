<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Home',
    to: '/',
    active: route.path === '/',
  },
  {
    label: 'Services',
    to: '/services',
    active: route.path.startsWith('/services'),
  },
  {
    label: 'About Us',
    to: '/about',
    active: route.path.startsWith('/about'),
  },
  {
    label: 'Resources',
    to: '/resources',
    active: route.path.startsWith('/resources'),
  },
  {
    label: 'Careers',
    to: '/careers',
    active: route.path.startsWith('/careers'),
  },
  {
    label: 'Donate',
    to: '/donate',
    active: route.path.startsWith('/donate'),
  },
])
</script>

<template>
  <UHeader
    title="Kalihi-Palama Health Center"
    to="/"
    :toggle="{
      color: 'neutral',
      variant: 'ghost',
    }"
    :ui="{
      root: 'bg-white/90 backdrop-blur border-b border-default',
      right: 'gap-2 sm:gap-3',
    }"
  >
    <template #title>
      <AppLogo />
    </template>

    <UNavigationMenu
      :items="items"
      variant="link"
      color="neutral"
      class="gap-1"
      :ui="{
        link: 'text-sm font-medium text-zinc-800 data-[active]:text-primary data-[active]:font-semibold',
      }"
    />

    <template #right>
      <div class="hidden items-center gap-2 lg:flex sm:gap-3">
        <UButton
          label="Book a Consultation"
          color="primary"
          size="md"
        />
        <UButton
          label="Patient Portal"
          color="primary"
          variant="outline"
          size="md"
        />
      </div>
    </template>

    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        variant="link"
        color="neutral"
        class="-mx-2.5"
        :ui="{
          link: 'text-base font-medium text-zinc-800 data-[active]:text-primary data-[active]:font-semibold',
        }"
      />

      <div class="mt-6 flex flex-col gap-3">
        <UButton
          label="Book a Consultation"
          color="primary"
          size="lg"
          block
        />
        <UButton
          label="Patient Portal"
          color="primary"
          variant="outline"
          size="lg"
          block
        />
      </div>
    </template>
  </UHeader>
</template>
