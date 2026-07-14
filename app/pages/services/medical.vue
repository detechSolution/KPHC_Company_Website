<script setup lang="ts">
useSeoMeta({
  title: 'Medical Services | Kalihi-Palama Health Center',
  description: 'Comprehensive primary care for every stage of life — adult medicine, women\'s health, and pediatrics.',
})

const offerings = [
  {
    icon: 'i-lucide-user',
    title: 'Adult Medicine',
    description: 'Adult, pediatric, and family medicine with preventive care, wellness visits, immunizations, and care coordination.',
  },
  {
    icon: 'i-lucide-heart',
    title: 'Women\'s Health',
    description: 'Reproductive health, prenatal care, screenings, and gynecological services across life stages.',
  },
  {
    icon: 'i-lucide-baby',
    title: 'Pediatric Medicine',
    description: 'Well-baby and well-child care, developmental screening, teen medical care, and sick visits.',
  },
]

const adultServices = [
  'Preventative Care',
  'Physical Exams',
  'Annual Wellness Visits',
  'Women\'s Health',
  'Developmental Care',
  'Immunizations',
  'Care Coordination',
]

const womensServices = [
  'Reproductive Health Services',
  'Birth Control',
  'Breast Checks',
  'Breast Feeding',
  'Other Gynecological Exams',
  'PAP Smears',
  'Pregnancy Testing and Counseling',
  'Prenatal Care and Delivery Services',
  'STD/HIV Testing and Treatment',
]

const pediatricServices = [
  'Child Car Safety Education and Inspections',
  'Developmental Screening',
  'Health Education',
  'Sick Child Care and Follow-Up',
  'Teen Medical Care',
  'Well Baby Care',
  'Well-Child Check-Ups',
]

const clinics = [
  {
    name: 'Main Medical & Dental Center',
    address: '915 North King Street, Honolulu, HI 96817',
    phone: '(808) 848-1438',
    hours: 'Mon, Tue, Thu, Fri, Sat 8:00 AM – 5:00 PM · Wed 8:00 AM – 7:00 PM',
  },
  {
    name: 'Kaaahi Clinic',
    address: '546 Kaaahi Street, Honolulu, HI 96817',
    phone: '(808) 791-6342',
    hours: 'Monday–Friday 8:00 AM – 4:00 PM',
  },
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
  {
    name: 'Women\'s Health — Comprehensive Primary Health Care & Dental Center',
    address: '710 North King Street, Honolulu, HI 96817',
    phone: '(808) 843-7550',
    hours: 'Monday–Friday 8:00 AM – 5:00 PM',
  },
  {
    name: 'Pediatrics — Comprehensive Primary Health Care & Dental Center',
    address: '710 North King Street, Honolulu, HI 96817',
    phone: '(808) 843-7552',
    hours: 'Monday–Friday 8:00 AM – 5:00 PM',
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
            title="Medical Services at Kalihi-Palama Health Center"
            accent="Medical Services"
            class="text-3xl sm:text-4xl"
          />
          <div class="mt-5 space-y-4 text-base leading-relaxed text-zinc-600 text-pretty sm:text-lg">
            <p>
              Kalihi-Palama Health Center (KPHC) is committed to providing quality integrated health and social services to our community and all others in need of health care.
            </p>
            <p>
              We provide access to comprehensive primary health care services. We are a patient-centered medical home, and our patients have access to evidence-based care and self-management support. Our focus is preventative primary health care provided in a respectful, caring, and culturally appropriate manner. Our patients have the ability to choose their Primary Care Provider (PCP). We provide care coordination and continuity of care to our patients.
            </p>
          </div>
          <CalloutBox
            title="Who Is Eligible"
            class="mt-6"
          >
            Everyone is welcome. We accept Medicaid, Medicare, and most private insurance, and offer sliding-fee discounts for qualifying patients. No one is turned away for inability to pay.
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

    <section class="bg-white pb-section">
      <div class="mx-auto w-full max-w-(--ui-container) px-gutter sm:px-gutter-lg">
        <h2 class="text-center text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
          Overall Health & Wellness
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
          <p class="mt-1 text-sm text-zinc-500">
            Adult, Pediatric & Family Medicine
          </p>
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
            address="710 North King Street, Honolulu, HI 96817"
            phone="(808) 843-7550"
            hours="Monday–Friday 8:00 AM – 5:00 PM"
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
            name="Comprehensive Primary Health Care & Dental Center"
            address="710 North King Street, Honolulu, HI 96817"
            phone="(808) 843-7552"
            hours="Monday–Friday 8:00 AM – 5:00 PM"
          />
        </div>
      </div>
    </section>

    <section class="bg-green-50 py-section">
      <div class="mx-auto w-full max-w-(--ui-container) px-gutter sm:px-gutter-lg">
        <h2 class="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
          Clinic Hours & Locations
        </h2>
        <p class="mt-4 max-w-3xl text-base leading-relaxed text-zinc-600 text-pretty">
          Please call the health center nearest to you to make an appointment. Clinic hours and services vary for each site.
        </p>
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
