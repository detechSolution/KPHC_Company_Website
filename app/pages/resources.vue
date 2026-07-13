<script setup lang="ts">
useSeoMeta({
  title: 'Resources | Kalihi-Palama Health Center',
  description: 'Clinic locations, patient privacy, telemedicine options, appointment information, and more.',
})

const afterHours = [
  { label: 'Emergency', value: '911' },
  { label: 'Care & Advice After Clinical Hours', value: '(808) 848-1438' },
  { label: 'Clinical Advice During Office Hours — Nurse Hotline', value: '(808) 791-6525' },
  { label: 'Hawaii Crisis Line 24/7', value: '(808) 832-3100' },
  { label: 'Hawaii Cares (Toll-Free)', value: '1-800-753-6879' },
]

const clinics = [
  {
    name: 'Main Medical & Dental Center',
    address: '915 N. King Street, Honolulu, HI 96817',
    details: [
      'Medical: (808) 848-1438',
      'Dental: (808) 791-6500',
      'Mon–Fri 8:00 AM – 5:00 PM',
    ],
  },
  {
    name: 'Downtown Family Medical & Dental Center',
    address: '150 N. Hotel Street, Honolulu, HI 96817',
    details: [
      'Medical / Dental: (808) 791-9400',
      'Mon–Fri 8:00 AM – 5:00 PM',
    ],
  },
  {
    name: 'Comprehensive Primary Health Care & Dental Center',
    address: '710 N. King Street, Honolulu, HI 96817',
    details: [
      'Medical / Dental: (808) 791-6600',
      'Mon–Fri 8:00 AM – 5:00 PM',
    ],
  },
  {
    name: 'Behavioral Health, Medical Health Education & Pharmacy',
    address: '952 N. King Street, Honolulu, HI 96817',
    details: [
      'Phone: (808) 848-1438',
      'Hours vary by department',
    ],
  },
  {
    name: 'Women, Infants & Children (WIC)',
    address: '915 N. King Street, Honolulu, HI 96817',
    details: [
      'Phone: (808) 848-1438',
      'By appointment',
    ],
  },
  {
    name: 'Optometry',
    address: '915 N. King Street, Honolulu, HI 96817',
    details: [
      'Phone: (808) 848-1438',
      'By appointment',
    ],
  },
  {
    name: 'Kūhou Site — Health Care for the Homeless Project',
    address: '420 Ka\'a\'ahi Street, Honolulu, HI 96817',
    details: [
      'Phone: (808) 791-6300',
      'Hours vary by program',
    ],
  },
  {
    name: 'Ka\'a\'ahi Clinic',
    address: '420 Ka\'a\'ahi Street, Honolulu, HI 96817',
    details: [
      'Phone: (808) 791-6300',
      'Low-barrier walk-in options available',
    ],
  },
  {
    name: 'Kūhou Site — Health Care for the Homeless Project',
    address: '421 Ka\'a\'ahi Street, Honolulu, HI 96817',
    details: [
      'Phone: (808) 791-6300',
      'Hours vary by program',
    ],
  },
]

const telehealthOptions = [
  {
    icon: 'i-lucide-video',
    title: 'Telehealth (Audio + Video)',
    description: 'Meet with your provider from home using a smartphone, tablet, or computer.',
  },
  {
    icon: 'i-lucide-phone',
    title: 'Telephone-Only',
    description: 'Audio visits when video is unavailable — still private and convenient.',
  },
  {
    icon: 'i-lucide-circle-check',
    title: 'Virtual Check-In',
    description: 'Quick follow-ups for results, medication questions, and care coordination.',
  },
]

const registrationItems = [
  {
    title: 'Health Insurance Card',
    body: 'Bring your current insurance card (Medicaid, Medicare, or private plan).',
  },
  {
    title: 'Identification',
    body: 'Passport, driver\'s license, state ID, or other government-issued photo ID.',
  },
  {
    title: 'Legal Guardianship Papers',
    body: 'Required when accompanying a minor or adult under legal guardianship.',
  },
  {
    title: 'Proof of Income (Sliding Scale)',
    body: 'Pay stubs, tax returns, benefit letters, or other income documentation if applying for sliding-fee discounts.',
  },
  {
    title: 'Shot Records',
    body: 'Immunization records for children and adults when available.',
  },
  {
    title: 'WIC Requirements',
    body: 'If enrolling in WIC, bring proof of identity, residency, and income for each applicant.',
  },
]

const items = [
  {
    label: 'Notice of Privacy Practice',
    icon: 'i-lucide-shield',
    description: 'Effective Date: January 1, 2008 · Reviewed & Revised: April 8, 2013',
    slot: 'privacy' as const,
  },
  {
    label: 'Clinic Hours & Locations',
    icon: 'i-lucide-map-pin',
    slot: 'locations' as const,
  },
  {
    label: 'Make An Appointment',
    icon: 'i-lucide-calendar',
    slot: 'appointment' as const,
  },
  {
    label: 'Patient Registration',
    icon: 'i-lucide-user-round',
    slot: 'registration' as const,
  },
  {
    label: 'HIPAA Regulation',
    icon: 'i-lucide-file-text',
    slot: 'hipaa' as const,
  },
]

const openItem = ref('0')
</script>

<template>
  <div>
    <HeroBanner
      badge="Patient Resources"
      title="Everything You Need to Know"
      description="Clinic locations, patient privacy, telemedicine options, appointment information, and more."
    />

    <section class="bg-white py-section">
      <div class="mx-auto w-full max-w-3xl px-gutter sm:px-gutter-lg">
        <UAccordion
          v-model="openItem"
          type="single"
          collapsible
          :items="items"
          :ui="{
            item: 'mb-4 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm last:mb-0',
            trigger: 'px-5 py-4 text-left sm:px-6',
            body: 'px-5 pb-5 sm:px-6 sm:pb-6',
          }"
        >
          <template #leading="{ item }">
            <span class="flex size-10 shrink-0 items-center justify-center rounded-xl bg-green-50 text-primary">
              <UIcon
                :name="item.icon"
                class="size-5"
              />
            </span>
          </template>

          <template #default="{ item }">
            <span class="flex flex-col gap-0.5">
              <span class="font-semibold text-zinc-950">{{ item.label }}</span>
              <span
                v-if="item.description"
                class="text-xs font-normal text-zinc-500"
              >
                {{ item.description }}
              </span>
            </span>
          </template>

          <template #privacy-body>
            <div class="space-y-4 text-sm leading-relaxed text-zinc-600 sm:text-base">
              <p>
                This Notice describes how medical information about you may be used and disclosed and how you can get access to this information. Please review it carefully.
              </p>
              <h4 class="text-base font-semibold text-zinc-950">
                Our Pledge Regarding Protected Health Information
              </h4>
              <p>
                We understand that health information about you is personal. We are committed to protecting your privacy while providing quality care.
              </p>
              <CalloutBox title="KPHC Is Required by Law To:">
                <ul class="mt-1 space-y-2">
                  <li class="flex gap-2">
                    <UIcon
                      name="i-lucide-check"
                      class="mt-0.5 size-4 shrink-0 text-primary"
                    />
                    <span>Keep your health information private</span>
                  </li>
                  <li class="flex gap-2">
                    <UIcon
                      name="i-lucide-check"
                      class="mt-0.5 size-4 shrink-0 text-primary"
                    />
                    <span>Give you this Notice of our legal duties and privacy practices</span>
                  </li>
                  <li class="flex gap-2">
                    <UIcon
                      name="i-lucide-check"
                      class="mt-0.5 size-4 shrink-0 text-primary"
                    />
                    <span>Follow the terms of the Notice currently in effect</span>
                  </li>
                </ul>
              </CalloutBox>
              <UButton
                label="Download Full HIPAA Privacy Notice (PDF)"
                color="primary"
                size="lg"
              />
            </div>
          </template>

          <template #locations-body>
            <div class="space-y-6">
              <p class="text-sm leading-relaxed text-zinc-600 sm:text-base">
                Please call the health center nearest to you to make an appointment. Clinic hours and services vary for each site.
              </p>

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

              <div class="grid gap-4 sm:grid-cols-2">
                <ClinicCard
                  v-for="(clinic, index) in clinics"
                  :key="`${clinic.name}-${index}`"
                  :name="clinic.name"
                  :address="clinic.address"
                  :details="clinic.details"
                />
              </div>
            </div>
          </template>

          <template #appointment-body>
            <div class="space-y-5 text-sm leading-relaxed text-zinc-600 sm:text-base">
              <p>
                You can schedule in-person visits or use telemedicine when appropriate. Ask the clinic which options are available for your provider and visit type.
              </p>
              <div class="grid gap-4 sm:grid-cols-3">
                <article
                  v-for="option in telehealthOptions"
                  :key="option.title"
                  class="rounded-2xl border border-zinc-200 bg-white p-4 text-center"
                >
                  <div class="mx-auto flex size-11 items-center justify-center rounded-full bg-green-50 text-primary">
                    <UIcon
                      :name="option.icon"
                      class="size-5"
                    />
                  </div>
                  <h4 class="mt-3 text-sm font-semibold text-zinc-950">
                    {{ option.title }}
                  </h4>
                  <p class="mt-1.5 text-xs leading-relaxed text-zinc-600">
                    {{ option.description }}
                  </p>
                </article>
              </div>
              <CalloutBox title="Insurance Coverage">
                Telehealth and telephone visits may be covered by Medicaid, Medicare, and many private plans. Coverage varies — confirm with your insurer or our billing team before your appointment.
              </CalloutBox>
            </div>
          </template>

          <template #registration-body>
            <div class="space-y-5 text-sm leading-relaxed text-zinc-600 sm:text-base">
              <CalloutBox>
                Please arrive at least 30 minutes early for your first visit. Bring your insurance card and photo ID, and be prepared to complete registration forms.
              </CalloutBox>

              <h4 class="text-base font-semibold text-zinc-950">
                What to bring to your first appointment?
              </h4>
              <ol class="space-y-4">
                <li
                  v-for="(entry, index) in registrationItems"
                  :key="entry.title"
                  class="flex gap-3"
                >
                  <span class="flex size-7 shrink-0 items-center justify-center rounded-full bg-green-50 text-xs font-bold text-primary">
                    {{ index + 1 }}
                  </span>
                  <div>
                    <p class="font-semibold text-zinc-950">
                      {{ entry.title }}
                    </p>
                    <p class="mt-1">
                      {{ entry.body }}
                    </p>
                  </div>
                </li>
              </ol>

              <CalloutBox>
                <ul class="space-y-2">
                  <li class="flex gap-2">
                    <UIcon
                      name="i-lucide-check"
                      class="mt-0.5 size-4 shrink-0 text-primary"
                    />
                    <span>If you are pregnant, bring prenatal records when available.</span>
                  </li>
                  <li class="flex gap-2">
                    <UIcon
                      name="i-lucide-check"
                      class="mt-0.5 size-4 shrink-0 text-primary"
                    />
                    <span>After birth, bring hospital discharge papers and the baby's birth certificate if you have them.</span>
                  </li>
                </ul>
              </CalloutBox>
            </div>
          </template>

          <template #hipaa-body>
            <div class="space-y-4 text-sm leading-relaxed text-zinc-600 sm:text-base">
              <p>
                The Health Insurance Portability and Accountability Act (HIPAA) gives you important rights regarding your health information. KPHC is fully committed to compliance with all HIPAA regulations.
              </p>
              <UButton
                label="Download HIPAA Notice of Privacy Practices (PDF)"
                color="primary"
                size="lg"
              />
            </div>
          </template>
        </UAccordion>
      </div>
    </section>

    <PageCta />
  </div>
</template>
