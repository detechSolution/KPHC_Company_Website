<script setup lang="ts">
useSeoMeta({
  title: 'Behavioral Health & Social Services | Kalihi-Palama Health Center',
  description: 'Caring for your mind, your emotions, and your whole life with integrated behavioral health and social services.',
})

const offerings = [
  {
    icon: 'i-lucide-messages-square',
    title: 'Behavioral Health',
    description: 'Individual and group therapy for anxiety, depression, trauma, and social wellness.',
  },
  {
    icon: 'i-lucide-users',
    title: 'Social Services',
    description: 'Dedicated case management to connect you with essential community resources.',
  },
  {
    icon: 'i-lucide-heart-handshake',
    title: 'Healthcare for the Homeless',
    description: 'Low-barrier medical care and mental health services for unhoused individuals.',
  },
]

const behavioralServices = [
  'Diagnostic evaluation',
  'Individual psychotherapy',
  'Group therapy and psychoeducation',
  'Medication management (when appropriate)',
  'Crisis support and care coordination',
]

const expectItems = [
  {
    title: 'Patient-Centered Care Team Approach',
    body: 'Your counselor works with your primary care provider and social services team so treatment stays coordinated.',
  },
  {
    title: 'The Assessment Process',
    body: 'We start with a thorough evaluation of your needs, strengths, and goals before recommending a plan of care.',
  },
  {
    title: 'Your Plan of Care',
    body: 'Together we set clear goals and choose therapies that fit your culture, language, and life circumstances.',
  },
  {
    title: 'Recovery / Transition Plan',
    body: 'As you progress, we update your plan and connect you with community supports for lasting wellness.',
  },
]

const clinics = [
  {
    name: 'Akala-Lani Clinic',
    address: '915 N. King Street, Honolulu, HI 96817',
    phone: '(808) 848-1438',
    hours: 'By appointment',
  },
  {
    name: 'KPHC Palama Community Health Center',
    address: '710 N. King Street, Honolulu, HI 96817',
    phone: '(808) 791-6600',
    hours: 'Mon–Fri 8:00 AM – 5:00 PM',
  },
  {
    name: 'Chinatown Gateway Clinic',
    address: '150 N. Hotel Street, Honolulu, HI 96817',
    phone: '(808) 791-9400',
    hours: 'Mon–Fri 8:00 AM – 5:00 PM',
  },
]

const homelessPrograms = [
  {
    title: 'Ka\'a\'ahi Street Clinic',
    body: 'Walk-in and low-barrier clinical care for people experiencing homelessness, including medical and behavioral health support.',
  },
  {
    title: 'Permanent Housing Program',
    body: 'Case management that helps individuals move from homelessness into stable, permanent housing with ongoing support.',
  },
  {
    title: 'Housing First Program',
    body: 'Housing-first services that prioritize a safe place to live while connecting people to health and social resources.',
  },
  {
    title: 'Community Based Case Management (CBCM)',
    body: 'Intensive community outreach and case management for clients with complex medical and social needs.',
  },
  {
    title: 'Community Integrated Services (CIS)',
    body: 'Integrated services that bridge clinical care with housing, benefits, and community partnerships.',
  },
]
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

    <section class="bg-white py-section">
      <div class="mx-auto grid w-full max-w-(--ui-container) items-start gap-10 px-gutter sm:px-gutter-lg lg:grid-cols-2 lg:gap-16">
        <div>
          <AccentTitle
            title="About Our Behavioral Health & Social Services"
            accent="Behavioral Health & Social Services"
            class="text-3xl sm:text-4xl"
          />
          <div class="mt-5 space-y-4 text-base leading-relaxed text-zinc-600 text-pretty sm:text-lg">
            <p>
              Behavioral health is part of whole-person care at KPHC. Our counselors and social workers partner with your medical team to support mental wellness, life stressors, and community resources.
            </p>
            <p>
              Services include therapy, case management, and specialized programs for people experiencing homelessness — all delivered with cultural respect and confidentiality.
            </p>
            <p>
              You do not need a crisis to ask for help. Early support can make a lasting difference for you and your family.
            </p>
          </div>
          <CalloutBox
            title="Who Is Eligible?"
            class="mt-6"
          >
            Behavioral health and social services are available to KPHC patients and community members who meet program criteria. Insurance and sliding-fee options may apply — call us to learn more.
          </CalloutBox>
        </div>

        <ImageSkeleton
          class="aspect-[4/3] w-full"
          label="Behavioral health photo placeholder"
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
      <div class="mx-auto w-full max-w-(--ui-container) px-gutter sm:px-gutter-lg">
        <h2 class="text-3xl font-semibold tracking-tight text-zinc-950">
          Behavioral Health
        </h2>
        <p class="mt-4 max-w-3xl text-base leading-relaxed text-zinc-600 text-pretty">
          Our behavioral health clinicians provide confidential evaluation and treatment in a supportive environment. We treat the whole person — not just a diagnosis.
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

        <h3 class="mt-10 text-xl font-semibold text-zinc-950">
          What To Expect
        </h3>
        <div class="mt-5 grid gap-6 sm:grid-cols-2">
          <div
            v-for="item in expectItems"
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

        <a
          href="tel:+18088481438"
          class="mt-10 inline-flex items-center gap-3 rounded-full bg-green-900 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-green-800"
        >
          <UIcon
            name="i-lucide-phone"
            class="size-5"
          />
          Make an appointment today by calling 808-848-1438
        </a>
      </div>
    </section>

    <section class="bg-white pb-section">
      <div class="mx-auto w-full max-w-(--ui-container) px-gutter sm:px-gutter-lg">
        <h2 class="text-3xl font-semibold tracking-tight text-zinc-950">
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

    <section class="bg-green-50 py-section">
      <div class="mx-auto w-full max-w-(--ui-container) px-gutter sm:px-gutter-lg">
        <h2 class="text-3xl font-semibold tracking-tight text-zinc-950">
          Healthcare For The Homeless
        </h2>
        <p class="mt-4 max-w-3xl text-base leading-relaxed text-zinc-600 text-pretty">
          KPHC provides low-barrier medical, behavioral health, and housing support for people experiencing homelessness across Honolulu.
        </p>
        <div class="mt-8 space-y-6">
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
