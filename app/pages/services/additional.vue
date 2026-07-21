<script setup lang="ts">
import { MAIN_PHONE } from '~/utils/external-links'
import {
  additionalOfferings,
  optometryServices,
  pharmacyLocations,
  pharmacyServices,
  wellnessPrograms,
} from '~/utils/services-content'

usePageSeo({
  title: 'Additional Services',
  description: 'Wraparound support for every part of your life — optometry, pharmacy, and wellness education.',
})
</script>

<template>
  <div>
    <HeroBanner
      align="start"
      eyebrow="KPHC SERVICES"
      eyebrow-icon="i-lucide-briefcase-medical"
      title="Additional Services"
      description="Wraparound support for every part of your life"
    />

    <section class="bg-white py-section-sm sm:py-section">
      <div class="mx-auto grid w-full max-w-(--ui-container) items-start gap-split px-gutter sm:px-gutter-lg lg:grid-cols-2 lg:gap-split-lg">
        <div>
          <SectionTitle
            title="About Our Additional Services"
            class="text-3xl sm:text-4xl"
          />
          <div class="mt-5 space-y-4 text-base leading-relaxed text-zinc-600 text-pretty sm:text-lg">
            <p>
              Health is more than a clinic visit. Our additional services — optometry, pharmacy, and wellness education — wrap around your primary care so your family gets practical support every day.
            </p>
            <p>
              These programs work alongside your medical and dental teams to remove barriers and keep care connected. For nutrition support through WIC, visit our
              <NuxtLink
                to="/services/wic"
                class="font-medium text-primary hover:underline"
              >
                Women, Infants, and Children (WIC)
              </NuxtLink>
              program page.
            </p>
          </div>
          <CalloutBox class="mt-6">
            Many additional services can be coordinated during your regular clinic visits. Ask your care team which programs are available at your preferred site.
          </CalloutBox>
        </div>

        <img
          src="/images/services/additional-services.webp"
          alt="Healthcare provider administering a vaccination to a patient"
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
          Services & Offerings
        </h2>
        <div class="mt-stack-xl grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <OfferingCard
            v-for="item in additionalOfferings"
            :key="item.title"
            v-bind="item"
          />
        </div>
      </div>
    </section>

    <section class="bg-white pb-section-sm sm:pb-section">
      <div class="mx-auto w-full max-w-(--ui-container) space-y-14 px-gutter sm:px-gutter-lg">
        <div>
          <h3 class="text-2xl font-semibold text-zinc-950">
            Optometry
          </h3>
          <ul class="mt-4 space-y-2.5 text-base text-zinc-600">
            <li
              v-for="item in optometryServices"
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
          <ClinicCard
            class="mt-6 max-w-lg"
            name="Main Medical & Dental Center"
            address="915 North King Street, Honolulu, HI 96817"
            :phone="MAIN_PHONE"
            hours="By appointment"
          />
        </div>

        <div>
          <h3 class="text-2xl font-semibold text-zinc-950">
            Pharmacy
          </h3>
          <ul class="mt-4 space-y-2.5 text-base text-zinc-600">
            <li
              v-for="item in pharmacyServices"
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
          <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <ClinicCard
              v-for="location in pharmacyLocations"
              :key="location.name"
              v-bind="location"
            />
          </div>
        </div>

        <div>
          <h3 class="text-2xl font-semibold text-zinc-950">
            Wellness & Prevention Education
          </h3>
          <ul class="mt-4 space-y-2.5 text-base text-zinc-600">
            <li
              v-for="item in wellnessPrograms"
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
    </section>

    <PageCta />
  </div>
</template>
