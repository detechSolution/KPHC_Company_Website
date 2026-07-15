<script setup lang="ts">
import {
  BOOK_APPOINTMENT_HREF,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  MAIN_PHONE,
  MAIN_PHONE_HREF,
  PATIENT_PORTAL_URL,
} from '~/utils/external-links'

const year = new Date().getFullYear()

interface FooterLink {
  label: string
  to: string
  target?: '_blank'
}

const contact = {
  address: 'P.O. Box 17460\nHonolulu, HI 96817',
  phone: MAIN_PHONE,
  phoneHref: MAIN_PHONE_HREF,
  email: 'admingroup@kphc.org',
  emailHref: 'mailto:admingroup@kphc.org',
}

const centerLinks: FooterLink[] = [
  { label: 'Services', to: '/services' },
  { label: 'Directory', to: BOOK_APPOINTMENT_HREF },
  { label: 'Events', to: '/events' },
  { label: 'Donate', to: '/donate' },
  { label: 'Careers', to: '/careers' },
]

const resourceLinks: FooterLink[] = [
  { label: 'Patient Portal', to: PATIENT_PORTAL_URL, target: '_blank' as const },
  { label: 'Language Assistance', to: '/resources' },
  { label: 'Community Resources', to: '/resources' },
  { label: 'Nutrition', to: '/services/nutrition' },
]

const socialLinks = [
  {
    label: 'Instagram',
    icon: 'i-simple-icons-instagram',
    to: INSTAGRAM_URL,
    target: '_blank' as const,
  },
  {
    label: 'Facebook',
    icon: 'i-simple-icons-facebook',
    to: FACEBOOK_URL,
    target: '_blank' as const,
  },
]
</script>

<template>
  <footer class="bg-zinc-950 text-white">
    <div class="mx-auto w-full max-w-(--ui-container) px-gutter py-section-sm sm:px-gutter-lg sm:py-section">
      <div class="grid gap-split sm:grid-cols-2 lg:grid-cols-3 lg:gap-split-lg">
        <div>
          <h2 class="text-sm font-semibold tracking-wide text-white">
            Contacts
          </h2>

          <div class="mt-4 space-y-3 text-sm leading-relaxed text-zinc-300">
            <p class="whitespace-pre-line">
              {{ contact.address }}
            </p>
            <p>
              <a
                :href="contact.phoneHref"
                class="transition-colors hover:text-white"
              >
                {{ contact.phone }}
              </a>
            </p>
            <p>
              <a
                :href="contact.emailHref"
                class="transition-colors hover:text-white"
              >
                {{ contact.email }}
              </a>
            </p>
          </div>

          <div class="mt-stack flex items-center gap-stack-sm">
            <UButton
              v-for="social in socialLinks"
              :key="social.label"
              :to="social.to"
              :target="social.target"
              :icon="social.icon"
              :aria-label="social.label"
              color="neutral"
              variant="outline"
              square
              size="md"
              :ui="{
                base: 'rounded-xl border-zinc-600 bg-transparent text-white hover:bg-zinc-800 hover:text-white',
              }"
            />
          </div>
        </div>

        <div>
          <h2 class="text-sm font-semibold tracking-wide text-white">
            At Kalihi-Palama Health Center
          </h2>
          <ul class="mt-4 space-y-3">
            <li
              v-for="link in centerLinks"
              :key="link.label"
            >
              <NuxtLink
                :to="link.to"
                :target="link.target"
                :rel="link.target ? 'noopener noreferrer' : undefined"
                class="text-sm text-zinc-300 transition-colors hover:text-white"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h2 class="text-sm font-semibold tracking-wide text-white">
            Other Resources
          </h2>
          <ul class="mt-4 space-y-3">
            <li
              v-for="link in resourceLinks"
              :key="link.label"
            >
              <NuxtLink
                :to="link.to"
                :target="link.target"
                :rel="link.target ? 'noopener noreferrer' : undefined"
                class="text-sm text-zinc-300 transition-colors hover:text-white"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="border-t border-zinc-800">
      <div class="mx-auto flex w-full max-w-(--ui-container) px-gutter py-5 sm:px-gutter-lg">
        <p class="text-sm text-zinc-400">
          KPHC © {{ year }} All Rights Reserved
        </p>
      </div>
    </div>
  </footer>
</template>
