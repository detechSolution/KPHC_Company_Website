<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const appointmentHref = 'tel:+18088481438'

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
      root: 'border-0 bg-white/85 backdrop-blur-md shadow-[0_1px_0_0_var(--color-green-100)]',
      container: 'gap-4 px-gutter sm:gap-6 sm:px-gutter-lg',
      center: 'hidden lg:flex',
      right: 'gap-3 shrink-0',
    }"
  >
    <template #title>
      <AppLogo />
    </template>

    <UNavigationMenu
      :items="items"
      variant="link"
      color="neutral"
      class="gap-2"
      :ui="{
        link: 'px-2.5 py-1.5 text-sm font-medium text-zinc-800 data-[active]:text-primary data-[active]:font-semibold',
      }"
    />

    <template #right>
      <UButton
        class="shrink-0 max-lg:hidden"
        label="Book an Appointment"
        :to="appointmentHref"
        color="primary"
        size="md"
      />
      <UButton
        class="shrink-0 lg:hidden"
        label="Book"
        :to="appointmentHref"
        color="primary"
        size="sm"
      />
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

      <UButton
        class="mt-stack-lg"
        label="Book an Appointment"
        :to="appointmentHref"
        color="primary"
        size="lg"
        block
      />
    </template>
  </UHeader>
</template>
