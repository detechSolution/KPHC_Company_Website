<script setup lang="ts">
import { MAKE_APPOINTMENT_HREF } from '~/utils/external-links'
import {
  afterHours,
  clinicLocations,
  locationsCta,
  locationsIntro,
} from '~/utils/locations-content'

usePageSeo({
  title: 'Clinic Hours & Locations',
  description: 'Find Kalihi-Palama Health Center clinic addresses, phone numbers, and hours across Honolulu.',
})
</script>

<template>
  <div>
    <HeroBanner
      badge="Visit Us"
      title="Clinic Hours & Locations"
      :description="locationsIntro"
    />

    <section class="bg-white py-section-sm sm:py-section">
      <div class="mx-auto w-full max-w-(--ui-container) px-gutter sm:px-gutter-lg">
        <CalloutBox title="After Hours Assistance">
          <ul class="mt-1 space-y-2">
            <li
              v-for="row in afterHours"
              :key="row.label"
              class="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4"
            >
              <span>{{ row.label }}</span>
              <a
                :href="`tel:${row.value.replace(/\D/g, '')}`"
                class="font-medium text-primary hover:underline"
              >
                {{ row.value }}
              </a>
            </li>
          </ul>
        </CalloutBox>

        <div class="mt-stack-lg grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ClinicCard
            v-for="(clinic, index) in clinicLocations"
            :key="`${clinic.name}-${index}`"
            v-bind="clinic"
          />
        </div>
      </div>
    </section>

    <PageCta
      :title="locationsCta.title"
      :description="locationsCta.description"
      :primary-label="locationsCta.primaryLabel"
      :primary-to="MAKE_APPOINTMENT_HREF"
      :secondary-label="locationsCta.secondaryLabel"
      secondary-href="/resources"
      footer-link-label="Explore our services"
      footer-link-to="/services"
    />
  </div>
</template>
