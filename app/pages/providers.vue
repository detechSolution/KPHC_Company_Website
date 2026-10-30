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
const specialtyLabelId = useId()

const filteredProviders = computed(() => {
  if (selectedSpecialty.value === 'all') {
    return providers
  }
  return providers.filter(provider => provider.specialty === selectedSpecialty.value)
})

const providerStatus = computed(() => {
  const count = filteredProviders.value.length
  const specialty = selectedSpecialty.value === 'all'
    ? 'all specialties'
    : selectedSpecialty.value
  if (count === 0)
    return `No providers found for ${specialty}.`
  const noun = count === 1 ? 'provider' : 'providers'
  return `${count} ${noun} shown for ${specialty}.`
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
          <div class="flex w-full shrink-0 flex-col gap-1.5 sm:w-64">
            <p
              :id="specialtyLabelId"
              class="text-sm font-medium text-zinc-950"
            >
              Specialty
            </p>
            <USelect
              v-model="selectedSpecialty"
              :items="specialtyOptions"
              value-key="value"
              label-key="label"
              class="w-full"
              :aria-labelledby="specialtyLabelId"
              aria-label="Specialty"
            />
          </div>
        </div>

        <h2 class="sr-only">
          Provider directory
        </h2>
        <p
          class="sr-only"
          aria-live="polite"
          aria-atomic="true"
        >
          {{ providerStatus }}
        </p>

        <p
          v-if="filteredProviders.length === 0"
          class="mt-stack-xl text-center text-sm text-zinc-500"
        >
          No providers found for this specialty.
        </p>

        <div
          v-else
          class="mt-stack-xl grid items-stretch gap-4 lg:grid-cols-2"
        >
          <ProviderCard
            v-for="provider in filteredProviders"
            :key="provider.name"
            v-bind="provider"
            :class="provider.featured ? 'h-full lg:col-span-2' : 'h-full'"
          />
        </div>

        <CalloutBox
          title="Ready to Schedule?"
          as="h2"
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
