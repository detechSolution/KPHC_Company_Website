<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { BOOK_APPOINTMENT_HREF, MAIN_PHONE, MAIN_PHONE_HREF } from '~/utils/external-links'

const route = useRoute()

const appointmentHref = BOOK_APPOINTMENT_HREF

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
    mode="slideover"
    :menu="{
      side: 'right',
    }"
    :toggle="{
      color: 'neutral',
      variant: 'ghost',
      size: 'md',
      ui: {
        base: 'outline-none focus:outline-none focus-visible:outline-none ring-0 focus-visible:ring-0',
      },
    }"
    :ui="{
      root: 'border-0 bg-white/85 backdrop-blur-md shadow-[0_1px_0_0_var(--color-green-100)]',
      container: 'gap-2 px-gutter sm:gap-3 sm:px-gutter-lg lg:gap-4',
      left: 'flex items-center gap-1.5 lg:min-w-0 lg:flex-1',
      center: 'hidden lg:flex lg:min-w-0 lg:justify-center',
      right: 'flex items-center justify-end gap-2 lg:min-w-0 lg:flex-1',
      title: 'flex items-center shrink-0 outline-none focus:outline-none focus-visible:outline-none ring-0',
      body: 'flex flex-col gap-0 px-gutter py-4 sm:px-gutter-lg',
      content: 'w-full max-w-sm',
    }"
  >
    <template #title>
      <AppLogo />
    </template>

    <UNavigationMenu
      :items="items"
      variant="link"
      color="neutral"
      class="w-fit shrink-0"
      :ui="{
        root: 'w-fit justify-center',
        list: 'w-fit gap-0 xl:gap-0.5',
        link: 'whitespace-nowrap px-2 py-1.5 xl:px-2.5 text-sm font-medium text-zinc-800 data-[active]:text-primary data-[active]:font-semibold outline-none focus-visible:before:outline-none',
      }"
    />

    <template #right>
      <!-- Desktop only — mobile booking lives in the drawer to avoid crowding the menu toggle -->
      <UButton
        class="hidden shrink-0 lg:inline-flex"
        label="Book Appointment"
        :to="appointmentHref"
        color="primary"
        size="md"
      />
    </template>

    <template #body>
      <div class="mb-4 rounded-card border border-green-100 bg-green-50 p-4">
        <p class="text-xs font-semibold tracking-wide text-primary uppercase">
          Need care?
        </p>
        <a
          :href="MAIN_PHONE_HREF"
          class="mt-1.5 flex items-center gap-2.5 text-base font-semibold text-zinc-950 transition-colors hover:text-primary"
        >
          <span class="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
            <UIcon
              name="i-lucide-phone"
              class="size-5"
            />
          </span>
          <span>
            {{ MAIN_PHONE }}
            <span class="mt-0.5 block text-xs font-normal text-zinc-600">
              Call to schedule or ask a question
            </span>
          </span>
        </a>
      </div>

      <UNavigationMenu
        :items="items"
        orientation="vertical"
        variant="link"
        color="neutral"
        class="-mx-1"
        :ui="{
          list: 'gap-0.5',
          link: 'rounded-card px-3 py-2.5 text-base font-medium text-zinc-800 data-[active]:bg-green-50 data-[active]:text-primary data-[active]:font-semibold outline-none focus-visible:before:outline-none',
        }"
      />

      <div class="mt-stack-lg border-t border-zinc-100 pt-stack-lg">
        <UButton
          label="Book an Appointment"
          :to="appointmentHref"
          color="primary"
          size="lg"
          block
          icon="i-lucide-calendar-check"
        />
      </div>
    </template>
  </UHeader>
</template>
