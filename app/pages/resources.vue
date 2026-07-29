<script setup lang="ts">
import type { AccordionSection } from '~/utils/resources-content'
import { HIPAA_NOTICE_PDF } from '~/utils/external-links'
import {
  afterHours,
  clinics,
  registrationItems,
  resourceAccordionItems,
  resourcesSectionClass,
  telehealthOptions,
} from '~/utils/resources-content'
import { sectionFromHash } from '~/utils/resources-hash'
import { scrollElementIntoView, smoothScrollToElementId } from '~/utils/smooth-scroll'

usePageSeo({
  title: 'Resources',
  description: 'Clinic locations, patient privacy, telemedicine options, appointment information, and more.',
})

const sectionScrollMargin = 'scroll-mt-[calc(var(--ui-header-height)+1rem)]'

const items = resourceAccordionItems.map(item => ({
  ...item,
  class: `${resourcesSectionClass(item.value as AccordionSection)} ${sectionScrollMargin}`,
}))

const route = useRoute()
const router = useRouter()
// Default matches SSG HTML; hash is applied client-side (fragments are unavailable at prerender).
const openItems = ref<AccordionSection[]>(['privacy'])
/** Suppress `openItems` watcher while hash navigation updates panels and scrolls. */
let applyingHash = false
/** Hash changed because the user opened a panel in the accordion (keep other panels open). */
let hashUpdateFromAccordion = false

function ensureSectionOpen(section: AccordionSection) {
  if (!openItems.value.includes(section))
    openItems.value = [...openItems.value, section]
}

function openOnlySection(section: AccordionSection) {
  openItems.value = [section]
}

async function scrollToSection(section: AccordionSection) {
  await nextTick()
  await new Promise<void>(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve())))
  await new Promise<void>(resolve => setTimeout(resolve, 280))

  const el = document.querySelector(
    `#resources-accordion .${resourcesSectionClass(section)}`,
  )
  if (el instanceof HTMLElement) {
    scrollElementIntoView(el)
    return
  }

  await smoothScrollToElementId('resources-accordion', { settleMs: 0 })
}

async function handleRouteHash() {
  const section = sectionFromHash(route.hash)
  if (!section)
    return

  applyingHash = true
  try {
    if (hashUpdateFromAccordion) {
      ensureSectionOpen(section)
      hashUpdateFromAccordion = false
    }
    else {
      openOnlySection(section)
    }
    await scrollToSection(section)
  }
  finally {
    applyingHash = false
  }
}

onMounted(() => {
  void handleRouteHash()
})

watch(() => route.hash, () => {
  void handleRouteHash()
})

watch(openItems, async (current, previous) => {
  if (applyingHash)
    return

  const prev = previous ?? []
  const opened = current.filter(section => !prev.includes(section))
  if (opened.length === 0)
    return

  const section = opened[opened.length - 1]!
  const hashSection = sectionFromHash(route.hash)
  if (hashSection !== section) {
    hashUpdateFromAccordion = true
    await router.replace({ path: route.path, hash: `#${section}` })
    return
  }

  await scrollToSection(section)
}, { deep: true })
</script>

<template>
  <div>
    <HeroBanner
      badge="Patient Resources"
      title="Everything You Need to Know"
      description="Clinic locations, patient privacy, telemedicine options, appointment information, and more."
    />

    <section class="bg-white py-section-sm sm:py-section">
      <div
        id="resources-accordion"
        class="mx-auto w-full max-w-3xl scroll-mt-[calc(var(--ui-header-height)+1rem)] px-gutter sm:px-gutter-lg"
      >
        <UAccordion
          v-model="openItems"
          type="multiple"
          collapsible
          :items="items"
          :ui="{
            item: 'mb-4 overflow-hidden rounded-card border border-zinc-200 bg-white shadow-sm last:mb-0',
            trigger: 'px-5 py-4 text-left sm:px-6',
            body: 'px-5 pb-5 sm:px-6 sm:pb-6',
          }"
        >
          <template #leading="{ item }">
            <span class="flex size-11 shrink-0 items-center justify-center rounded-xl bg-green-50 text-primary">
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
                :to="HIPAA_NOTICE_PDF"
                target="_blank"
                external
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
                  class="rounded-card border border-zinc-200 bg-white p-4 text-center"
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
                :to="HIPAA_NOTICE_PDF"
                target="_blank"
                external
              />
            </div>
          </template>
        </UAccordion>
      </div>
    </section>

    <PageCta />
  </div>
</template>
