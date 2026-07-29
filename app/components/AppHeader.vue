<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { aboutNavLinks } from '~/utils/about-nav'
import {
  BOOK_APPOINTMENT_HREF,
  MAIN_PHONE,
  MAIN_PHONE_HREF,
  PATIENT_PORTAL_URL,
} from '~/utils/external-links'
import { servicesNavLinks } from '~/utils/services-nav'

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
    active: route.path.startsWith('/services'),
    children: servicesNavLinks.map(link => ({
      label: link.label,
      to: link.to,
      active: route.path === link.to,
    })),
  },
  {
    label: 'About Us',
    active: route.path.startsWith('/about') || route.path === '/providers',
    children: aboutNavLinks.map(link => ({
      label: link.label,
      to: link.to,
      active: link.to === '/about'
        ? route.path === '/about' && !route.hash
        : link.to.startsWith('/about#')
          ? route.fullPath === link.to
          : route.path === link.to,
    })),
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

/**
 * First paint uses CSS (min-[1280px]) so wide screens never flash the hamburger.
 * JS only sets data-compact when the viewport is wide but the one-line nav still
 * does not fit comfortably — then we force the drawer.
 */
const probeRef = ref<HTMLElement | null>(null)
const headerRootRef = ref<HTMLElement | null>(null)
const isCompact = ref(false)

const COMFORT_GAP_PX = 64
const MIN_DESKTOP_VIEWPORT_PX = 1280

let cleanup: (() => void) | undefined

function updateCompactNav() {
  const probe = probeRef.value
  const root = headerRootRef.value
  if (!probe || !root || import.meta.server)
    return

  if (window.innerWidth < MIN_DESKTOP_VIEWPORT_PX) {
    isCompact.value = false
    return
  }

  const container = root.querySelector<HTMLElement>('[data-slot="container"]')
  if (!container)
    return

  const styles = getComputedStyle(container)
  const padX = Number.parseFloat(styles.paddingLeft) + Number.parseFloat(styles.paddingRight)
  const available = container.clientWidth - padX
  isCompact.value = probe.scrollWidth + COMFORT_GAP_PX > available
}

onMounted(() => {
  updateCompactNav()
  document.fonts?.ready.then(() => updateCompactNav())

  const observer = new ResizeObserver(() => updateCompactNav())
  if (headerRootRef.value)
    observer.observe(headerRootRef.value)
  if (probeRef.value)
    observer.observe(probeRef.value)

  window.addEventListener('resize', updateCompactNav, { passive: true })

  cleanup = () => {
    observer.disconnect()
    window.removeEventListener('resize', updateCompactNav)
  }
})

onBeforeUnmount(() => {
  cleanup?.()
})

const expandedMobileGroups = ref<Set<string>>(new Set())
/** User collapsed a group while a child route was active — keep closed until menu reset. */
const collapsedMobileGroups = ref<Set<string>>(new Set())

function mobileGroupHasActiveChild(item: NavigationMenuItem): boolean {
  return item.children?.some(child => child.active) ?? false
}

function mobileGroupExpanded(item: NavigationMenuItem): boolean {
  const label = item.label
  if (!label)
    return false
  if (collapsedMobileGroups.value.has(label))
    return false
  if (expandedMobileGroups.value.has(label))
    return true
  return mobileGroupHasActiveChild(item)
}

function toggleMobileGroup(item: NavigationMenuItem) {
  const label = item.label
  if (!label)
    return

  if (mobileGroupExpanded(item)) {
    expandedMobileGroups.value.delete(label)
    collapsedMobileGroups.value.add(label)
    return
  }

  collapsedMobileGroups.value.delete(label)
  expandedMobileGroups.value = new Set([label])
}

function resetMobileNavGroups() {
  expandedMobileGroups.value = new Set()
  collapsedMobileGroups.value = new Set()
}

function closeMobileMenu(close?: () => void) {
  resetMobileNavGroups()
  close?.()
}
</script>

<template>
  <div
    ref="headerRootRef"
    class="group/nav fixed inset-x-0 top-0 z-50 w-full bg-white/75 hover:bg-white/65 backdrop-blur-md"
    :data-compact="isCompact ? '' : undefined"
  >
    <!-- Probe mirrors desktop row: logo | spaced links | CTAs -->
    <div
      ref="probeRef"
      aria-hidden="true"
      class="pointer-events-none fixed top-0 -left-[9999px] -z-10 flex items-center gap-6 whitespace-nowrap"
    >
      <AppLogo />
      <div class="flex shrink-0 items-center gap-1">
        <span
          v-for="item in items"
          :key="item.label"
          class="px-2.5 text-sm font-medium"
        >
          {{ item.label }}
        </span>
      </div>
      <div class="flex shrink-0 items-center gap-2.5">
        <span class="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium ring-1 ring-inset">
          <span class="size-5 shrink-0" />
          Patient Portal
        </span>
        <span class="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium">
          Book Appointment
        </span>
      </div>
    </div>

    <UHeader
      title="Kalihi-Palama Health Center"
      to="/"
      mode="slideover"
      toggle-side="left"
      :menu="{
        side: 'left',
      }"
      :toggle="{
        color: 'neutral',
        variant: 'ghost',
        size: 'md',
      }"
      :ui="{
        root: 'border-0 bg-transparent shadow-none',
        container: 'relative gap-3 px-gutter sm:gap-4 sm:px-gutter-lg [&_[data-slot=title]]:hidden [&_[data-slot=title]]:min-[1280px]:flex group-data-[compact]/nav:[&_[data-slot=title]]:hidden!',
        center: 'pointer-events-none absolute inset-0 flex items-center justify-center min-[1280px]:pointer-events-auto min-[1280px]:static min-[1280px]:inset-auto min-[1280px]:flex min-[1280px]:flex-none min-[1280px]:shrink-0 group-data-[compact]/nav:pointer-events-none! group-data-[compact]/nav:absolute! group-data-[compact]/nav:inset-0!',
        left: 'relative z-10 flex shrink-0 items-center gap-1.5 min-[1280px]:min-w-0 min-[1280px]:flex-1 group-data-[compact]/nav:min-w-0! group-data-[compact]/nav:flex-none!',
        right: 'relative z-10 flex min-w-0 items-center justify-end gap-2.5 min-[1280px]:flex-1 group-data-[compact]/nav:flex-none!',
        title: 'flex items-center shrink-0 min-w-0',
        toggle: 'flex! shrink-0 min-[1280px]:hidden! group-data-[compact]/nav:flex!',
        content: 'w-full max-w-sm',
      }"
    >
      <template #title>
        <AppLogo />
      </template>

      <ULink
        to="/"
        aria-label="Kalihi-Palama Health Center"
        class="pointer-events-auto flex min-[1280px]:hidden group-data-[compact]/nav:flex!"
      >
        <AppLogo class="object-center" />
      </ULink>

      <UNavigationMenu
        :items="items"
        variant="link"
        color="neutral"
        class="hidden w-fit shrink-0 min-[1280px]:flex group-data-[compact]/nav:hidden!"
        :ui="{
          root: 'w-fit justify-center',
          list: 'w-fit flex-nowrap gap-1',
          link: 'whitespace-nowrap px-2.5 py-1.5 text-sm font-medium text-zinc-800 data-[active]:text-primary data-[active]:font-semibold',
        }"
      />

      <template #right>
        <UButton
          class="hidden shrink-0 min-[1280px]:inline-flex group-data-[compact]/nav:hidden!"
          label="Patient Portal"
          :to="PATIENT_PORTAL_URL"
          target="_blank"
          color="primary"
          variant="outline"
          size="md"
          icon="i-lucide-circle-user"
        />
        <UButton
          class="hidden shrink-0 min-[1280px]:inline-flex group-data-[compact]/nav:hidden!"
          label="Book Appointment"
          :to="appointmentHref"
          color="primary"
          size="md"
        />
      </template>

      <template #content="{ close }">
        <div class="flex h-full min-h-0 flex-col overflow-hidden">
          <div class="flex h-(--ui-header-height) shrink-0 items-center justify-between gap-3 border-b border-zinc-100 px-gutter sm:px-gutter-lg">
            <ULink
              to="/"
              aria-label="Kalihi-Palama Health Center"
              class="flex min-w-0 flex-1 items-center"
              @click="closeMobileMenu(close)"
            >
              <AppLogo />
            </ULink>

            <UButton
              color="neutral"
              variant="ghost"
              size="md"
              icon="i-lucide-x"
              aria-label="Close menu"
              class="-me-1.5 shrink-0"
              @click="closeMobileMenu(close)"
            />
          </div>

          <div class="flex min-h-0 flex-1 flex-col gap-0 overflow-y-auto overscroll-y-contain px-gutter py-4 sm:px-gutter-lg">
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

            <nav
              aria-label="Main navigation"
              class="-mx-1 flex flex-col gap-0.5"
            >
              <template
                v-for="item in items"
                :key="item.label"
              >
                <template v-if="item.children?.length">
                  <button
                    type="button"
                    class="flex w-full items-center justify-between gap-2 rounded-card px-3 py-2.5 text-left text-base font-medium text-zinc-800 transition-colors hover:bg-green-50/60"
                    :class="[
                      item.active && !mobileGroupHasActiveChild(item) && 'font-semibold text-primary',
                      mobileGroupExpanded(item) && !mobileGroupHasActiveChild(item) && 'bg-green-50/80',
                    ]"
                    :aria-expanded="mobileGroupExpanded(item)"
                    @click="toggleMobileGroup(item)"
                  >
                    <span>{{ item.label }}</span>
                    <UIcon
                      name="i-lucide-chevron-down"
                      class="size-5 shrink-0 text-zinc-500 transition-transform duration-200 ease-out"
                      :class="[
                        mobileGroupExpanded(item) && 'rotate-180',
                        mobileGroupExpanded(item) && !mobileGroupHasActiveChild(item) && 'text-primary',
                      ]"
                    />
                  </button>

                  <Transition
                    enter-active-class="transition duration-200 ease-out"
                    enter-from-class="opacity-0 -translate-y-1"
                    enter-to-class="opacity-100 translate-y-0"
                    leave-active-class="transition duration-150 ease-in"
                    leave-from-class="opacity-100 translate-y-0"
                    leave-to-class="opacity-0 -translate-y-1"
                  >
                    <div
                      v-if="mobileGroupExpanded(item)"
                      class="mb-1 ms-1 flex flex-col gap-0.5 border-l-2 border-green-200 ps-3"
                    >
                      <ULink
                        v-for="child in item.children"
                        :key="child.label"
                        :to="child.to"
                        class="rounded-card px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-green-50/60 hover:text-primary"
                        :class="child.active && 'bg-green-50 font-semibold text-primary'"
                        @click="closeMobileMenu(close)"
                      >
                        {{ child.label }}
                      </ULink>
                    </div>
                  </Transition>
                </template>

                <ULink
                  v-else
                  :to="item.to"
                  class="rounded-card px-3 py-2.5 text-base font-medium text-zinc-800 transition-colors hover:bg-green-50/60"
                  :class="item.active && 'bg-green-50 font-semibold text-primary'"
                  @click="closeMobileMenu(close)"
                >
                  {{ item.label }}
                </ULink>
              </template>
            </nav>

            <div class="mt-stack-lg flex flex-col gap-2.5 border-t border-zinc-100 pt-stack-lg">
              <UButton
                label="Patient Portal"
                :to="PATIENT_PORTAL_URL"
                target="_blank"
                color="primary"
                variant="outline"
                size="lg"
                block
                icon="i-lucide-circle-user"
              />
              <UButton
                label="Book an Appointment"
                :to="appointmentHref"
                color="primary"
                size="lg"
                block
                icon="i-lucide-calendar-check"
              />
            </div>
          </div>
        </div>
      </template>
    </UHeader>
  </div>
</template>
