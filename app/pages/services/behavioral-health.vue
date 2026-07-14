<script setup lang="ts">
useSeoMeta({
  title: 'Behavioral Health & Social Services | Kalihi-Palama Health Center',
  description: 'Caring for your mind, your emotions, and your whole life with integrated behavioral health and social services.',
})

const offerings = [
  {
    icon: 'i-lucide-messages-square',
    title: 'Behavioral Health',
    description: 'Individual and group therapy, medication management, and consultation for patients of all ages.',
  },
  {
    icon: 'i-lucide-users',
    title: 'Social Services',
    description: 'Case management and crisis support that connect you with essential community resources.',
  },
  {
    icon: 'i-lucide-heart-handshake',
    title: 'Healthcare for the Homeless',
    description: 'Accessible medical care, behavioral health, and housing support for people experiencing homelessness.',
  },
]

const behavioralServices = [
  'Behavioral Health Consultation',
  'Diagnostic Evaluation',
  'Medication Evaluation and Management',
  'Short-term Psychotherapy',
  'Tobacco Cessation',
  'Substance Abuse Individual and Group Therapy',
  'Individual Psychotherapy',
  'Group Psychotherapy',
  'Stress Management',
  'Domestic Violence',
  'Sex Trafficking',
]

const expectItems = [
  {
    title: 'Patient Centered Care Team Approach',
    body: 'As a patient at Kalihi-Palama Health Center, a team of healthcare professionals and support staff will assist you to meet your healthcare needs. Our goal is to provide you with integrated services to keep you healthy and/or achieve wellness. Our trained integrated care team will assist you to navigate your healthcare needs to include enrollment, financial qualifying, scheduling appointments, medical and specialty care visits, referrals for treatment to specialists or testing, getting prescriptions you need and providing education on important health topics.',
  },
  {
    title: 'The Assessment Process',
    body: 'When you first begin treatment with any healthcare professional at KPHC, you will first begin with an assessment. A healthcare professional will ask you many questions about your concerns, background, and goals so the best treatment/care plan can be developed.',
  },
  {
    title: 'Your Plan of Care',
    body: 'Based on your assessment and request, you and your care team will put together a "treatment plan" and develop self-management goals. With certain healthcare providers in Behavioral Health and Health Care for the Homeless Project, you will be asked to sign that you agree with your treatment plan. Remember, this is YOUR treatment plan so we encourage you to give frequent feedback on your treatment progress and what will be helpful to you to meet your goals.',
  },
  {
    title: 'Self-Management Goals',
    body: 'When working with your healthcare team you may be requested to participate in the development of self-management goals. Self-management goals are goals that you will develop in collaboration with your team of healthcare providers to manage chronic healthcare conditions on a daily basis. These goals are activities including learning, understanding and following medical regimens/recommendations, making changes in lifestyle such as exercise and diet, and dealing with emotions that arise from having a chronic healthcare condition.',
  },
  {
    title: 'Recovery / Transition Plan',
    body: 'When receiving services from certain healthcare providers, such as Behavioral Health and Health Care for the Homeless, as you make progress towards your treatment goals, you will be discussing with your team your next steps in recovery. This may include completion of treatment and discharge from our programs or the need for external specialized services. The eventual goal is to help you have the highest quality independent life possible within the community.',
  },
]

const clinics = [
  {
    name: 'Behavioral Health, Medical, Health Education & Pharmacy',
    address: '952 North King Street, Honolulu, HI 96817',
    phone: '(808) 841-7981',
    hours: 'Monday–Friday 8:00 AM – 5:00 PM',
  },
  {
    name: 'Kaaahi Clinic',
    address: '546 Kaaahi Street, Honolulu, HI 96817',
    phone: '(808) 791-6342',
    hours: 'Monday–Friday 8:00 AM – 4:00 PM',
  },
]

const homelessPrograms = [
  {
    title: 'Community-Based Case Management Service',
    body: 'Case Management and 24-hour crisis intervention services are provided to clients with severe and persistent mental illness, alcohol or substance abuse issues, and/or chronic medical issues.',
  },
  {
    title: 'Community Integrated Services (CIS)',
    body: 'Community Integrated Services provides housing-focused support for eligible QUEST Integration (QI) members who are homeless, at risk of homelessness, or transitioning from institutions. The program is managed by Hawaii Med-QUEST and contracted health plans. CIS Case Managers assist clients with housing applications, securing housing, tenancy rights education, and developing skills for independent living.',
  },
  {
    title: 'Ka\'a\'ahi Street Clinic',
    body: 'Located at the IHS Homeless Shelter for Women and Families. Services include Behavioral Health Care, Medical Care, TB Screening, and Follow-up & Referral Service.',
  },
  {
    title: 'Permanent Housing Program',
    body: 'Permanent Housing is a supportive housing program that provides housing subsidies along with long-term case management services to homeless individuals and families with disabilities. Participants pay 30% of their income towards rent, and the program subsidy provides the remaining dollar amount.',
  },
  {
    title: 'Housing First Program',
    body: 'Housing First is a collaborative effort with U.S. VETS that provide case management, housing assistance, and supportive services to chronically homeless individuals and families. Services are provided with the immediate and primary focus on helping participants to quickly access and sustain permanent housing. The Housing First model is recognized as a Best Practice by the National Alliance to End Homelessness.',
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
            title="Behavioral Health and Social Services at Kalihi-Palama Health Center"
            accent="Behavioral Health and Social Services"
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
          href="tel:+18088417981"
          class="mt-10 inline-flex items-center gap-3 rounded-full bg-green-900 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-green-800"
        >
          <UIcon
            name="i-lucide-phone"
            class="size-5"
          />
          Make an appointment today by calling 808-841-7981
        </a>
      </div>
    </section>

    <section class="bg-white pb-section">
      <div class="mx-auto w-full max-w-(--ui-container) px-gutter sm:px-gutter-lg">
        <h2 class="text-3xl font-semibold tracking-tight text-zinc-950">
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

    <section class="bg-green-50 py-section">
      <div class="mx-auto w-full max-w-(--ui-container) px-gutter sm:px-gutter-lg">
        <h2 class="text-3xl font-semibold tracking-tight text-zinc-950">
          Healthcare For The Homeless
        </h2>
        <p class="mt-4 max-w-3xl text-base leading-relaxed text-zinc-600 text-pretty">
          The Health Care for the Homeless Project (HCHP) has been providing accessible, quality care for individuals and families who are homeless or at risk for homelessness since 1988.
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
