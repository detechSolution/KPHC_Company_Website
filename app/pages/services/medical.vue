<script setup lang="ts">
import {
  clinicHoursNote,
  defaultEligibilityCallout,
  integratedCareIntro,
  medicalAdultServices,
  medicalClinics,
  medicalOfferings,
  medicalPediatricClinic,
  medicalPediatricServices,
  medicalWomensClinic,
  medicalWomensServices,
} from '~/utils/services-content'

usePageSeo({
  title: 'Medical Services',
  description: 'Comprehensive primary care for every stage of life — adult medicine, women\'s health, and pediatrics.',
})
</script>

<template>
  <div>
    <HeroBanner
      align="start"
      eyebrow="KPHC SERVICES"
      eyebrow-icon="i-lucide-stethoscope"
      title="Medical Services"
      description="Comprehensive primary care for every stage of life"
    />

    <section class="bg-white py-section-sm sm:py-section">
      <div class="mx-auto grid w-full max-w-(--ui-container) items-start gap-split px-gutter sm:px-gutter-lg lg:grid-cols-2 lg:gap-split-lg">
        <div>
          <AccentTitle
            title="Medical Services at Kalihi-Palama Health Center"
            accent="Medical Services"
            class="text-3xl sm:text-4xl"
          />
          <div class="mt-5 space-y-4 text-base leading-relaxed text-zinc-600 text-pretty sm:text-lg">
            <p
              v-for="paragraph in integratedCareIntro"
              :key="paragraph"
            >
              {{ paragraph }}
            </p>
          </div>
          <CalloutBox
            title="Who Is Eligible"
            class="mt-6"
          >
            {{ defaultEligibilityCallout }}
          </CalloutBox>
        </div>

        <img
          src="/images/services/medical-services.webp"
          alt="Healthcare provider in consultation with a patient at Kalihi-Palama Health Center"
          class="aspect-[4/3] w-full rounded-card object-cover"
          loading="lazy"
          decoding="async"
          width="800"
          height="600"
        >
      </div>
    </section>

    <section class="bg-white pb-section-sm sm:pb-section">
      <div class="mx-auto w-full max-w-(--ui-container) px-gutter sm:px-gutter-lg">
        <h2 class="text-center text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
          Overall Health & Wellness
        </h2>
        <div class="mt-stack-xl grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <OfferingCard
            v-for="item in medicalOfferings"
            :key="item.title"
            v-bind="item"
          />
        </div>
      </div>
    </section>

    <section class="bg-white pb-section-sm sm:pb-section">
      <div class="mx-auto w-full max-w-(--ui-container) px-gutter sm:px-gutter-lg">
        <div class="grid gap-split lg:grid-cols-3 lg:gap-split-lg">
          <div>
            <h3 class="text-xl font-semibold text-zinc-950">
              Adult Medicine
            </h3>
            <p class="mt-1 text-sm text-zinc-500">
              Adult, Pediatric & Family Medicine
            </p>
            <ul class="mt-4 space-y-2.5 text-sm leading-relaxed text-zinc-600">
              <li
                v-for="item in medicalAdultServices"
                :key="item"
                class="flex gap-2"
              >
                <UIcon
                  name="i-lucide-check"
                  class="mt-0.5 size-4 shrink-0 text-primary"
                />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-xl font-semibold text-zinc-950">
              Women's Health
            </h3>
            <ul class="mt-4 space-y-2.5 text-sm leading-relaxed text-zinc-600">
              <li
                v-for="item in medicalWomensServices"
                :key="item"
                class="flex gap-2"
              >
                <UIcon
                  name="i-lucide-check"
                  class="mt-0.5 size-4 shrink-0 text-primary"
                />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-xl font-semibold text-zinc-950">
              Pediatric Medicine
            </h3>
            <ul class="mt-4 space-y-2.5 text-sm leading-relaxed text-zinc-600">
              <li
                v-for="item in medicalPediatricServices"
                :key="item"
                class="flex gap-2"
              >
                <UIcon
                  name="i-lucide-check"
                  class="mt-0.5 size-4 shrink-0 text-primary"
                />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-8 grid gap-6 lg:grid-cols-3">
          <div class="hidden lg:block" />
          <ClinicCard v-bind="medicalWomensClinic" />
          <ClinicCard v-bind="medicalPediatricClinic" />
        </div>
      </div>
    </section>

    <section class="bg-green-50 py-section-sm sm:py-section">
      <div class="mx-auto w-full max-w-(--ui-container) px-gutter sm:px-gutter-lg">
        <h2 class="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
          Clinic Hours & Locations
        </h2>
        <p class="mt-4 max-w-3xl text-base leading-relaxed text-zinc-600 text-pretty">
          {{ clinicHoursNote }}
        </p>
        <div class="mt-stack-lg grid gap-grid sm:grid-cols-2 lg:grid-cols-3">
          <ClinicCard
            v-for="clinic in medicalClinics"
            :key="clinic.name"
            v-bind="clinic"
          />
        </div>
      </div>
    </section>

    <PageCta />
  </div>
</template>
