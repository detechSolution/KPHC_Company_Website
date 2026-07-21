<script setup lang="ts">
import { BOOK_APPOINTMENT_HREF } from '~/utils/external-links'
import {
  providers,
  providerSpecialties,
} from '~/utils/providers-content'

usePageSeo({
  title: 'Our Providers',
  description: 'Meet the doctors, nurse practitioners, and care team at Kalihi-Palama Health Center across medical, behavioral health, nutrition, and specialty services.',
})

const selectedSpecialty = ref<string>('all')

const filteredProviders = computed(() => {
  if (selectedSpecialty.value === 'all') {
    return providers
  }
  return providers.filter(provider => provider.specialty === selectedSpecialty.value)
})

const specialtyOptions = computed(() => [
  { label: 'All Specialties', value: 'all' },
  ...providerSpecialties.map(specialty => ({
    label: specialty,
    value: specialty,
  })),
])
</script>

<template>
  <div>
    <HeroBanner
      badge="Our Care Team"
      badge-icon="i-lucide-stethoscope"
      title="Meet Our Providers"
      description="Doctors, nurse practitioners, and specialists committed to compassionate, culturally competent care for our community."
    />

    <section class="bg-white py-section-sm sm:py-section">
      <div class="mx-auto w-full max-w-(--ui-container) px-gutter sm:px-gutter-lg">
        <div class="mx-auto flex max-w-3xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p class="text-center text-sm leading-relaxed text-zinc-600 sm:text-left sm:text-base">
            Browse our care team by specialty. Call the clinic nearest you to schedule an appointment.
          </p>
          <USelect
            v-model="selectedSpecialty"
            :items="specialtyOptions"
            value-key="value"
            label-key="label"
            class="w-full shrink-0 sm:w-64"
            aria-label="Filter providers by specialty"
          />
        </div>

        <p
          v-if="filteredProviders.length === 0"
          class="mt-stack-xl text-center text-sm text-zinc-500"
        >
          No providers found for this specialty.
        </p>

        <div
          v-else
          class="mt-stack-xl overflow-hidden rounded-card border border-zinc-200 bg-white shadow-sm divide-y divide-zinc-100"
        >
          <ProviderCard
            v-for="provider in filteredProviders"
            :key="provider.name"
            v-bind="provider"
          />
        </div>

        <CalloutBox
          title="Ready to Schedule?"
          class="mt-stack-xl"
        >
          <p>
            View clinic hours and phone numbers, then call the location nearest you to book an appointment with a provider.
          </p>
          <UButton
            label="Clinic Hours & Locations"
            color="primary"
            size="lg"
            class="mt-4"
            :to="BOOK_APPOINTMENT_HREF"
          />
        </CalloutBox>
      </div>
    </section>

    <PageCta />
  </div>
</template>
