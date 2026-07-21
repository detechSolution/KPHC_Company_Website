<script setup lang="ts">
import {
  BEHAVIORAL_HEALTH_PHONE,
  BEHAVIORAL_HEALTH_PHONE_HREF,
} from '~/utils/external-links'
import {
  behavioralClinics,
  behavioralExpectItems,
  behavioralOfferings,
  behavioralProviders,
  behavioralServices,
  clinicHoursNote,
  homelessPrograms,
  integratedCareIntro,
} from '~/utils/services-content'

usePageSeo({
  title: 'Behavioral Health & Social Services',
  description: 'Caring for your mind, your emotions, and your whole life with integrated behavioral health and social services.',
})
</script>

<template>
  <div>
    <HeroBanner
      align="start"
      eyebrow="KPHC SERVICES"
      eyebrow-icon="i-lucide-brain"
      title="Behavioral Health and Social Services"
      description="Caring for your mind, your emotions, and your whole life"
    />

    <section class="bg-white py-section-sm sm:py-section">
      <div class="mx-auto grid w-full max-w-(--ui-container) items-start gap-split px-gutter sm:px-gutter-lg lg:grid-cols-2 lg:gap-split-lg">
        <div>
          <AccentTitle
            title="Behavioral Health and Social Services at Kalihi-Palama Health Center"
            accent="Behavioral Health and Social Services"
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
            title="Who Is Eligible?"
            class="mt-6"
          >
            The Behavioral Health Program provides behavioral health treatment to patients of all ages that are current patients at Kalihi-Palama Health Center. Insurance and sliding-fee options may apply — call us to learn more.
          </CalloutBox>
        </div>

        <img
          src="/images/services/behavioral-health-services.webp"
          alt="Kalihi-Palama Health Center community members gathered together"
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
            v-for="item in behavioralOfferings"
            :key="item.title"
            v-bind="item"
          />
        </div>
      </div>
    </section>

    <section class="bg-white pb-section-sm sm:pb-section">
      <div class="mx-auto w-full max-w-(--ui-container) px-gutter sm:px-gutter-lg">
        <h2 class="text-3xl font-semibold tracking-tight text-zinc-950">
          Behavioral Health
        </h2>
        <p class="mt-4 max-w-3xl text-base leading-relaxed text-zinc-600 text-pretty">
          The Behavioral Health Program provides behavioral health treatment to patients of all ages that are current patients at Kalihi-Palama Health Center. The following modalities are provided through the department:
        </p>
        <ul class="mt-6 space-y-2.5 text-base text-zinc-600">
          <li
            v-for="item in behavioralServices"
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

        <h3 class="mt-stack-xl text-xl font-semibold text-zinc-950">
          What To Expect
        </h3>
        <div class="mt-5 grid gap-6 sm:grid-cols-2">
          <div
            v-for="item in behavioralExpectItems"
            :key="item.title"
          >
            <h4 class="font-semibold text-zinc-950">
              {{ item.title }}
            </h4>
            <p class="mt-2 text-sm leading-relaxed text-zinc-600 text-pretty">
              {{ item.body }}
            </p>
          </div>
        </div>

        <UButton
          :to="BEHAVIORAL_HEALTH_PHONE_HREF"
          icon="i-lucide-phone"
          size="xl"
          color="neutral"
          class="mt-stack-xl w-full max-w-full sm:w-auto"
          title="Make an appointment today by calling 808-841-7981"
          :ui="{
            base: 'inline-flex max-w-full min-w-0 bg-green-900 text-white hover:bg-green-800 disabled:bg-green-900',
            label: 'min-w-0 truncate',
          }"
        >
          <span class="truncate">
            <span class="sm:hidden">Call {{ BEHAVIORAL_HEALTH_PHONE }}</span>
            <span class="hidden sm:inline">Make an appointment today by calling {{ BEHAVIORAL_HEALTH_PHONE }}</span>
          </span>
        </UButton>
      </div>
    </section>

    <section class="bg-green-50 py-section-sm sm:py-section">
      <div class="mx-auto w-full max-w-(--ui-container) px-gutter sm:px-gutter-lg">
        <h2 class="text-center text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
          Meet Our Behavioral Health Team
        </h2>
        <p class="mx-auto mt-4 max-w-3xl text-center text-base leading-relaxed text-zinc-600 text-pretty">
          Our licensed clinicians and psychiatric providers offer compassionate, culturally competent care across Kalihi-Palama Health Center sites.
        </p>
        <div class="mt-stack-xl overflow-hidden rounded-card border border-zinc-200 bg-white shadow-sm divide-y divide-zinc-100">
          <ProviderCard
            v-for="provider in behavioralProviders"
            :key="provider.name"
            v-bind="provider"
          />
        </div>

        <div class="mt-stack-xl">
          <h2 class="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
            Clinic Hours & Locations
          </h2>
          <p class="mt-4 max-w-3xl text-base leading-relaxed text-zinc-600 text-pretty">
            {{ clinicHoursNote }}
          </p>
          <div class="mt-stack-lg grid gap-6 sm:grid-cols-2">
            <ClinicCard
              v-for="clinic in behavioralClinics"
              :key="clinic.name"
              v-bind="clinic"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white py-section-sm sm:py-section">
      <div class="mx-auto w-full max-w-(--ui-container) px-gutter sm:px-gutter-lg">
        <h2 class="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
          Healthcare For The Homeless
        </h2>
        <p class="mt-4 max-w-3xl text-base leading-relaxed text-zinc-600 text-pretty">
          The Health Care for the Homeless Project (HCHP) has been providing accessible, quality care for individuals and families who are homeless or at risk for homelessness since 1988.
        </p>
        <div class="mt-stack-lg space-y-6">
          <div
            v-for="program in homelessPrograms"
            :key="program.title"
          >
            <h3 class="text-lg font-semibold text-zinc-950">
              {{ program.title }}
            </h3>
            <p class="mt-2 text-base leading-relaxed text-zinc-600 text-pretty">
              {{ program.body }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <PageCta />
  </div>
</template>
