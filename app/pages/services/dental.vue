<script setup lang="ts">
useSeoMeta({
  title: 'Dental Services | Kalihi-Palama Health Center',
  description: 'Healthy smiles for the whole family — preventive and restorative dental care at KPHC clinics.',
})

const appointmentSites = [
  {
    name: 'Main Medical and Dental Center',
    phone: '(808) 848-1438',
    address: '915 N. King Street, Honolulu, HI 96817',
  },
  {
    name: 'Family Dental Clinic (1st Floor)',
    phone: '(808) 791-6600',
    address: '710 N. King Street, Honolulu, HI 96817',
  },
  {
    name: 'Children\'s Dental Clinic (2nd Floor)',
    phone: '(808) 791-6600',
    address: '710 N. King Street, Honolulu, HI 96817',
  },
  {
    name: 'Downtown Family Dental Center',
    phone: '(808) 791-9400',
    address: '150 N. Hotel Street, Honolulu, HI 96817',
  },
]

const proofOfIncome = [
  'Pay stubs (most recent 30 days)',
  'Social Security benefit letter',
  'Current tax return',
  'Unemployment benefit statement',
  'Public assistance award letter',
  'Letter from employer stating wages',
  'Bank statements showing income deposits',
]
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

    <section class="bg-white py-section">
      <div class="mx-auto grid w-full max-w-(--ui-container) items-start gap-10 px-gutter sm:px-gutter-lg lg:grid-cols-2 lg:gap-16">
        <div>
          <AccentTitle
            title="About Our Dental Services"
            accent="Dental Services"
            class="text-3xl sm:text-4xl"
          />
          <div class="mt-5 space-y-4 text-base leading-relaxed text-zinc-600 text-pretty sm:text-lg">
            <p>
              Our dental team provides preventive and restorative care for children and adults. From oral exams and cleanings to fillings and patient education, we help your family keep healthy smiles for life.
            </p>
            <p>
              Clinics follow ADA, OSHA, and CDC recommendations for infection control so you can feel confident every visit.
            </p>
          </div>
          <CalloutBox
            title="Who Is Eligible"
            class="mt-6"
          >
            We accept QUEST and most private dental insurance plans, and offer sliding-scale discounts for low-income patients who qualify. Bring proof of income when applying for the sliding fee scale.
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

    <section class="bg-white pb-section">
      <div class="mx-auto w-full max-w-(--ui-container) px-gutter sm:px-gutter-lg">
        <h2 class="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
          Clinics follow ADA, OSHA, and CDC recommendations for infection control.
        </h2>
        <p class="mt-4 max-w-3xl text-base leading-relaxed text-zinc-600 text-pretty">
          Sterilization protocols, protective equipment, and clinic procedures are updated to meet current professional guidelines for patient and staff safety.
        </p>

        <h3 class="mt-12 text-xl font-semibold text-zinc-950 sm:text-2xl">
          For an appointment at one of our clinics, please call:
        </h3>
        <ul class="mt-5 space-y-4">
          <li
            v-for="site in appointmentSites"
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
          Sliding-scale discounts may be available for qualifying low-income patients. Ask our front desk team about eligibility when you call.
        </p>

        <h3 class="mt-12 text-xl font-semibold text-zinc-950 sm:text-2xl">
          Examples of valid proof of income include:
        </h3>
        <ol class="mt-5 list-decimal space-y-2 pl-5 text-base leading-relaxed text-zinc-600">
          <li
            v-for="item in proofOfIncome"
            :key="item"
          >
            {{ item }}
          </li>
        </ol>
        <p class="mt-6 max-w-3xl text-base leading-relaxed text-zinc-600 text-pretty">
          We also accept QUEST and private insurance. Bring your insurance card and photo ID to every visit.
        </p>
      </div>
    </section>

    <PageCta />
  </div>
</template>
