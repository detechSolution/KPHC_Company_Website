<script setup lang="ts">
const props = defineProps<{
  name: string
  specialty: string
  locations: string[]
  credentials: string
  education?: string[]
  residencyTraining?: string[]
  professionalInterests?: string
  personalInterests?: string
  featured?: boolean
}>()

const isPhysician = computed(() => /,\s*(?:MD|DO)\b/.test(props.name))

const initials = computed(() => providerInitials(props.name))

const places = computed(() => props.locations.map(splitClinicLocation))

const showResidency = computed(() =>
  isPhysician.value && Boolean(props.residencyTraining?.length),
)

const hasTraining = computed(() =>
  Boolean(props.education?.length) || showResidency.value,
)

const wideDetails = computed(() =>
  Boolean(props.featured) && places.value.length > 0 && hasTraining.value,
)

const focusPhrases = computed(() => phraseList(props.professionalInterests))
const personalPhrases = computed(() => phraseList(props.personalInterests))

const focusLabel = computed(() => (props.featured ? 'About' : 'Clinical focus'))

const hasNarrative = computed(() =>
  Boolean(props.professionalInterests || props.personalInterests),
)

function providerInitials(name: string) {
  const given = name.split(',')[0] ?? name
  const parts = given
    .split(/\s+/)
    .map(part => part.replace(/[.'’]/g, ''))
    .filter(part => /^[a-z]/i.test(part))
  const first = parts[0]?.[0] ?? ''
  const last = parts.length > 1 ? (parts.at(-1)?.[0] ?? '') : ''
  return `${first}${last}`.toUpperCase()
}

function splitClinicLocation(location: string) {
  const [clinic, address] = location.split(/\s+[—–]\s+/)
  return {
    clinic: clinic?.trim() || location,
    address: address?.trim() ?? '',
  }
}

function phraseList(value?: string) {
  if (!value || value.length > 120 || /[.!?]/.test(value))
    return null
  const parts = value.split(/,\s+/).map(part => part.trim()).filter(Boolean)
  return parts.length > 1 ? parts : null
}
</script>

<template>
  <article class="flex h-full min-w-0 flex-col rounded-card border border-zinc-200 bg-white p-5 shadow-sm sm:p-6">
    <header class="flex items-start gap-3.5">
      <div
        class="flex size-12 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-semibold text-primary"
        aria-hidden="true"
      >
        {{ initials }}
      </div>
      <div class="min-w-0">
        <h3 class="text-base font-semibold text-zinc-950 text-pretty sm:text-lg">
          {{ name }}
        </h3>
        <p class="mt-1 text-sm font-medium text-primary">
          {{ specialty }}
        </p>
        <p class="mt-1.5 text-sm leading-relaxed text-zinc-600 text-pretty">
          {{ credentials }}
        </p>
      </div>
    </header>

    <div
      v-if="places.length || hasTraining"
      class="mt-5 grid gap-5 border-t border-zinc-100 pt-5"
      :class="wideDetails ? 'sm:grid-cols-2' : ''"
    >
      <div v-if="places.length">
        <p class="flex items-center gap-1.5 text-sm font-semibold text-zinc-950">
          <UIcon
            name="i-lucide-map-pin"
            class="size-4 shrink-0 text-primary"
          />
          Clinic locations
        </p>
        <ul class="mt-2.5 space-y-2.5">
          <li
            v-for="place in places"
            :key="`${place.clinic}-${place.address}`"
          >
            <p class="text-sm font-medium text-zinc-800">
              {{ place.clinic }}
            </p>
            <p
              v-if="place.address"
              class="text-sm text-zinc-500"
            >
              {{ place.address }}
            </p>
          </li>
        </ul>
      </div>

      <div
        v-if="hasTraining"
        class="space-y-5"
      >
        <div v-if="education?.length">
          <p class="flex items-center gap-1.5 text-sm font-semibold text-zinc-950">
            <UIcon
              name="i-lucide-graduation-cap"
              class="size-4 shrink-0 text-primary"
            />
            Education
          </p>
          <ul class="mt-2.5 space-y-1.5 text-sm leading-relaxed text-zinc-600">
            <li
              v-for="item in education"
              :key="item"
            >
              {{ item }}
            </li>
          </ul>
        </div>

        <div v-if="showResidency">
          <p class="flex items-center gap-1.5 text-sm font-semibold text-zinc-950">
            <UIcon
              name="i-lucide-stethoscope"
              class="size-4 shrink-0 text-primary"
            />
            Residency training
          </p>
          <ul class="mt-2.5 space-y-1.5 text-sm leading-relaxed text-zinc-600">
            <li
              v-for="item in residencyTraining"
              :key="item"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div
      v-if="hasNarrative"
      class="mt-5 space-y-4 rounded-xl bg-green-50 px-4 py-4"
    >
      <div v-if="professionalInterests">
        <p class="text-sm font-semibold text-zinc-950">
          {{ focusLabel }}
        </p>
        <ul
          v-if="focusPhrases"
          class="mt-2 flex flex-wrap gap-2"
        >
          <li
            v-for="phrase in focusPhrases"
            :key="phrase"
            class="rounded-full bg-white px-2.5 py-1 text-sm text-zinc-700 ring-1 ring-green-100"
          >
            {{ phrase }}
          </li>
        </ul>
        <p
          v-else
          class="mt-1.5 text-sm leading-relaxed text-zinc-600 text-pretty"
        >
          {{ professionalInterests }}
        </p>
      </div>

      <div v-if="personalInterests">
        <p class="text-sm font-semibold text-zinc-950">
          Personal interests
        </p>
        <ul
          v-if="personalPhrases"
          class="mt-2 flex flex-wrap gap-2"
        >
          <li
            v-for="phrase in personalPhrases"
            :key="phrase"
            class="rounded-full bg-white px-2.5 py-1 text-sm text-zinc-700 ring-1 ring-green-100"
          >
            {{ phrase }}
          </li>
        </ul>
        <p
          v-else
          class="mt-1.5 text-sm leading-relaxed text-zinc-600 text-pretty"
        >
          {{ personalInterests }}
        </p>
      </div>
    </div>
  </article>
</template>
