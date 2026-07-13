<script setup lang="ts">
useSeoMeta({
  title: 'Medical Services | Kalihi-Palama Health Center',
  description: 'Comprehensive primary care for every stage of life — adult medicine, women\'s health, and pediatrics.',
})

const offerings = [
  {
    icon: 'i-lucide-user',
    title: 'Adult Medicine',
    description: 'Primary care for adults, including wellness visits, chronic condition management, and acute illness care.',
  },
  {
    icon: 'i-lucide-heart',
    title: 'Women\'s Health',
    description: 'Preventive screenings, reproductive health, prenatal support, and compassionate care across life stages.',
  },
  {
    icon: 'i-lucide-baby',
    title: 'Pediatric Medicine',
    description: 'Well-child visits, immunizations, and sick visits for infants, children, and adolescents.',
  },
]

const adultServices = [
  'Annual physical exams and preventive screenings',
  'Chronic disease management (diabetes, hypertension, asthma)',
  'Acute illness and injury care',
  'Immunizations and health education',
  'Referrals and care coordination',
]

const womensServices = [
  'Well-woman exams and cancer screenings',
  'Family planning and reproductive health',
  'Prenatal and postpartum support',
  'Menopause and midlife health',
]

const pediatricServices = [
  'Well-child checkups and developmental screening',
  'Childhood immunizations',
  'School and sports physicals',
  'Sick visits and chronic condition support',
]

const clinics = [
  {
    name: 'Main Medical & Dental Center',
    address: '915 N. King Street, Honolulu, HI 96817',
    phone: '(808) 848-1438',
    hours: 'Mon–Fri 8:00 AM – 5:00 PM',
  },
  {
    name: 'Downtown Family Medical & Dental Center',
    address: '150 N. Hotel Street, Honolulu, HI 96817',
    phone: '(808) 791-9400',
    hours: 'Mon–Fri 8:00 AM – 5:00 PM',
  },
  {
    name: 'Comprehensive Primary Health Care & Dental Center',
    address: '710 N. King Street, Honolulu, HI 96817',
    phone: '(808) 791-6600',
    hours: 'Mon–Fri 8:00 AM – 5:00 PM',
  },
  {
    name: 'Behavioral Health / Medical Health Education',
    address: '952 N. King Street, Honolulu, HI 96817',
    phone: '(808) 848-1438',
    hours: 'By appointment',
  },
  {
    name: 'Ka\'a\'ahi Clinic',
    address: '420 Ka\'a\'ahi Street, Honolulu, HI 96817',
    phone: '(808) 791-6300',
    hours: 'Hours vary by program',
  },
]
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

    <section class="bg-white py-section">
      <div class="mx-auto grid w-full max-w-(--ui-container) items-start gap-10 px-gutter sm:px-gutter-lg lg:grid-cols-2 lg:gap-16">
        <div>
          <AccentTitle
            title="About Our Medical Services"
            accent="Medical Services"
            class="text-3xl sm:text-4xl"
          />
          <div class="mt-5 space-y-4 text-base leading-relaxed text-zinc-600 text-pretty sm:text-lg">
            <p>
              Our medical team provides patient-centered primary care for adults, women, and children. Whether you need a routine checkup, help managing a chronic condition, or care for a sick child, we are here for you.
            </p>
            <p>
              As a Federally Qualified Health Center, we accept most insurance plans and offer a sliding fee scale based on income so cost is never a barrier to care.
            </p>
            <p>
              Same-day and next-day appointments may be available — call the clinic nearest you to schedule.
            </p>
          </div>
          <CalloutBox
            title="Who Is Eligible"
            class="mt-6"
          >
            Everyone is welcome. We accept Medicaid, Medicare, and most private insurance, and offer sliding-fee discounts for qualifying patients. No one is turned away for inability to pay.
          </CalloutBox>
        </div>

        <ImageSkeleton
          class="aspect-[4/3] w-full"
          label="Medical services photo placeholder"
        />
      </div>
    </section>

    <section class="bg-white pb-section">
      <div class="mx-auto w-full max-w-(--ui-container) px-gutter sm:px-gutter-lg">
        <h2 class="text-center text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
          Services & Offerings
        </h2>
        <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <OfferingCard
            v-for="item in offerings"
            :key="item.title"
            v-bind="item"
          />
        </div>
      </div>
    </section>

    <section class="bg-white pb-section">
      <div class="mx-auto grid w-full max-w-(--ui-container) gap-12 px-gutter sm:px-gutter-lg lg:grid-cols-3">
        <div>
          <h3 class="text-xl font-semibold text-zinc-950">
            Adult Medicine
          </h3>
          <ul class="mt-4 space-y-2.5 text-sm leading-relaxed text-zinc-600">
            <li
              v-for="item in adultServices"
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
              v-for="item in womensServices"
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
            class="mt-6"
            name="Comprehensive Primary Health Care & Dental Center"
            address="710 N. King Street, Honolulu, HI 96817"
            phone="(808) 791-6600"
            hours="Mon–Fri 8:00 AM – 5:00 PM"
          />
        </div>

        <div>
          <h3 class="text-xl font-semibold text-zinc-950">
            Pediatric Medicine
          </h3>
          <ul class="mt-4 space-y-2.5 text-sm leading-relaxed text-zinc-600">
            <li
              v-for="item in pediatricServices"
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
            class="mt-6"
            name="Main Medical & Dental Center"
            address="915 N. King Street, Honolulu, HI 96817"
            phone="(808) 848-1438"
            hours="Mon–Fri 8:00 AM – 5:00 PM"
          />
        </div>
      </div>
    </section>

    <section class="bg-green-50 py-section">
      <div class="mx-auto w-full max-w-(--ui-container) px-gutter sm:px-gutter-lg">
        <h2 class="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
          Clinic Hours & Locations
        </h2>
        <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ClinicCard
            v-for="clinic in clinics"
            :key="clinic.name"
            v-bind="clinic"
          />
        </div>
      </div>
    </section>

    <PageCta />
  </div>
</template>
