<script setup lang="ts">
import { MAIN_PHONE, MAIN_PHONE_HREF } from '~/utils/external-links'

useSeoMeta({
  title: 'Additional Services | Kalihi-Palama Health Center',
  description: 'Wraparound support for every part of your life — optometry, pharmacy, WIC, and wellness education.',
})

const offerings = [
  {
    icon: 'i-lucide-glasses',
    title: 'Optometry',
    description: 'Comprehensive eye exams, diabetic eye screening, and vision care for the whole family.',
  },
  {
    icon: 'i-lucide-pill',
    title: 'Pharmacy',
    description: 'On-site prescription filling, patient education, and financial assistance options.',
  },
  {
    icon: 'i-lucide-shopping-cart',
    title: 'Women, Infants, & Children (WIC)',
    description: 'Nutrition education, breastfeeding support, and healthy food benefits for eligible families.',
  },
  {
    icon: 'i-lucide-heart-pulse',
    title: 'Wellness & Prevention Education',
    description: 'Classes and workshops that help you build healthy habits and prevent chronic illness.',
  },
]

const optometryServices = [
  'Comprehensive eye exams',
  'Diabetic eye screening',
  'Computer vision and near-work strain evaluation',
  'Eyeglass prescriptions and referrals',
]

const pharmacyServices = [
  'Prescription filling and refills',
  'Patient medication education',
  'Automatic refill options',
  'Financial assistance counseling',
]

const pharmacyLocations = [
  {
    name: 'Downtown Family Medical & Dental Center',
    address: '89 South King Street, Honolulu, HI 96813',
    phone: '(808) 792-5560',
    hours: 'Monday–Friday 8:00 AM – 5:00 PM',
  },
  {
    name: 'Comprehensive Primary Health Care & Dental Center',
    address: '710 North King Street, Honolulu, HI 96817',
    phone: '(808) 843-7575',
    hours: 'Monday–Friday 8:00 AM – 5:00 PM',
  },
  {
    name: 'Behavioral Health, Medical, Health Education & Pharmacy',
    address: '952 North King Street, Honolulu, HI 96817',
    phone: '(808) 791-6330',
    hours: 'Monday–Friday 8:00 AM – 5:00 PM',
  },
]

const wellnessPrograms = [
  'Asthma education',
  'Tobacco prevention and cessation support',
  'Nutrition education',
  'Diabetes self-management',
  'Physical activity and healthy lifestyle workshops',
  'Chronic disease prevention classes',
]

const wicDocuments = [
  'Proof of identity for each applicant',
  'Proof of Hawaii residency',
  'Proof of income or adjunctive eligibility',
  'Immunization records for children (when available)',
]
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
          <AccentTitle
            title="About Our Additional Services"
            accent="Additional Services"
            class="text-3xl sm:text-4xl"
          />
          <div class="mt-5 space-y-4 text-base leading-relaxed text-zinc-600 text-pretty sm:text-lg">
            <p>
              Health is more than a clinic visit. Our additional services — optometry, pharmacy, WIC, and wellness education — wrap around your primary care so your family gets practical support every day.
            </p>
            <p>
              These programs work alongside your medical and dental teams to remove barriers and keep care connected.
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
        <div class="mt-stack-xl grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <OfferingCard
            v-for="item in offerings"
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

    <section class="bg-green-50 py-section-sm sm:py-section">
      <div class="mx-auto w-full max-w-(--ui-container) px-gutter sm:px-gutter-lg">
        <h2 class="text-3xl font-semibold tracking-tight text-zinc-950">
          Women, Infants, & Children (WIC)
        </h2>
        <div class="mt-5 max-w-3xl space-y-4 text-base leading-relaxed text-zinc-600 text-pretty">
          <p>
            WIC provides nutrition education, breastfeeding support, and healthy food benefits for pregnant people, new parents, infants, and young children who qualify.
          </p>
          <p>
            To become a client, bring documentation to your appointment. Staff will guide you through eligibility and enrollment.
          </p>
        </div>

        <h3 class="mt-stack-lg text-lg font-semibold text-zinc-950">
          What to bring
        </h3>
        <ul class="mt-4 space-y-2.5 text-base text-zinc-600">
          <li
            v-for="item in wicDocuments"
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

        <UButton
          :to="MAIN_PHONE_HREF"
          icon="i-lucide-phone"
          :label="MAIN_PHONE"
          size="xl"
          color="neutral"
          class="mt-stack-xl"
          :ui="{
            base: 'bg-green-900 text-white hover:bg-green-800 disabled:bg-green-900',
          }"
        />
      </div>
    </section>

    <PageCta />
  </div>
</template>
