<script setup lang="ts">
import { dentalAppointmentSites, dentalProofOfIncome } from '~/utils/services-content'

useSeoMeta({
  title: 'Dental Services | Kalihi-Palama Health Center',
  description: 'Healthy smiles for the whole family — preventive and restorative dental care at KPHC clinics.',
})
</script>

<template>
  <div>
    <HeroBanner
      align="start"
      eyebrow="KPHC SERVICES"
      eyebrow-icon="i-lucide-smile"
      title="Dental Services"
      description="Healthy smiles for the whole family"
    />

    <section class="bg-white py-section-sm sm:py-section">
      <div class="mx-auto grid w-full max-w-(--ui-container) items-start gap-split px-gutter sm:px-gutter-lg lg:grid-cols-2 lg:gap-split-lg">
        <div>
          <AccentTitle
            title="About Our Dental Services"
            accent="Dental Services"
            class="text-3xl sm:text-4xl"
          />
          <div class="mt-5 space-y-4 text-base leading-relaxed text-zinc-600 text-pretty sm:text-lg">
            <p>
              At KPHC, our dentists, hygienists, and dental staff provide quality, integrated, family dental care for the community and all others in need of dental care. Our focus is on preventive and primary dental care that is provided in a caring, culturally sensitive, and respectful environment. Our general dentists provide a range of services for patients of all ages, including comprehensive oral exams, cleanings, dentures, consultation, basic restorative care (fillings, crowns), and urgent care.
            </p>
            <p>
              In addition, we may offer certain oral surgery and root canal therapy. We can assist with a referral for specialty care (wisdom teeth removal, implants, root canal therapy, braces, periodontal/gum surgery, etc.), which may be required to address your treatment needs.
            </p>
          </div>
          <CalloutBox
            title="Who Is Eligible"
            class="mt-6"
          >
            We accept QUEST and most private dental insurance plans, and offer sliding-scale discounts for low-income patients who qualify. We can help facilitate completing an application to obtain State Quest coverage if eligible. Proof of income is required at the time of registration (to be updated annually) to participate in sliding scale discounts.
          </CalloutBox>
        </div>

        <img
          src="/images/services/dental-services.webp"
          alt="Dental provider caring for a patient at Kalihi-Palama Health Center"
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
        <h2 class="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
          Clinics follow ADA, OSHA, and CDC recommendations for infection control.
        </h2>
        <p class="mt-4 max-w-3xl text-base leading-relaxed text-zinc-600 text-pretty">
          A scheduled comprehensive examination with complete x-ray series is required prior to beginning any permanent restorative or rehabilitative dental care.
        </p>

        <h3 class="mt-12 text-xl font-semibold text-zinc-950 sm:text-2xl">
          For an appointment at one of our clinics, please call:
        </h3>
        <ul class="mt-5 space-y-4">
          <li
            v-for="site in dentalAppointmentSites"
            :key="site.name"
            class="flex flex-col gap-1 border-b border-zinc-100 pb-4 last:border-0 sm:flex-row sm:items-baseline sm:gap-3"
          >
            <span class="font-medium text-zinc-950">{{ site.name }}</span>
            <span class="hidden text-zinc-300 sm:inline">·</span>
            <a
              :href="`tel:${site.phone.replace(/\D/g, '')}`"
              class="text-primary hover:underline"
            >
              {{ site.phone }}
            </a>
            <span class="hidden text-zinc-300 sm:inline">·</span>
            <span class="text-sm text-zinc-600">{{ site.address }}</span>
          </li>
        </ul>
        <p class="mt-6 max-w-3xl text-sm leading-relaxed text-zinc-600 text-pretty">
          We provide discounts for low-income uninsured patients. Our procedures and visit fees may be discounted based on family income level using State and Federal guidelines.
        </p>

        <h3 class="mt-12 text-xl font-semibold text-zinc-950 sm:text-2xl">
          Examples of valid proof of income include:
        </h3>
        <ol class="mt-5 list-decimal space-y-2 pl-5 text-base leading-relaxed text-zinc-600">
          <li
            v-for="item in dentalProofOfIncome"
            :key="item"
          >
            {{ item }}
          </li>
        </ol>
        <p class="mt-6 max-w-3xl text-base leading-relaxed text-zinc-600 text-pretty">
          We accept QUEST and most private dental insurance plans. We can help facilitate completing an application to obtain State Quest coverage if eligible.
        </p>
      </div>
    </section>

    <PageCta />
  </div>
</template>
