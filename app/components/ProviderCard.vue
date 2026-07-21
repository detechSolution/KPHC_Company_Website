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

const hasDetails = computed(() =>
  Boolean(
    props.education?.length
    || (isPhysician.value && props.residencyTraining?.length)
    || props.professionalInterests
    || props.personalInterests,
  ),
)
</script>

<template>
  <article class="min-w-0 px-6 py-6 sm:px-8 sm:py-8">
    <div class="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,15rem)_1fr]">
      <div class="min-w-0">
        <h3 class="text-lg font-semibold text-zinc-950 text-pretty">
          {{ name }}
        </h3>
        <p class="mt-1 text-sm font-medium text-primary">
          {{ specialty }}
        </p>
        <p class="mt-2 text-sm leading-relaxed text-zinc-600 text-pretty">
          {{ credentials }}
        </p>

        <div
          v-if="locations.length"
          class="mt-4"
        >
          <p class="text-xs font-semibold tracking-wide text-zinc-500 uppercase">
            Clinic Locations
          </p>
          <ul class="mt-2 space-y-1.5 text-sm text-zinc-600">
            <li
              v-for="location in locations"
              :key="location"
              class="flex gap-2"
            >
              <UIcon
                name="i-lucide-map-pin"
                class="mt-0.5 size-3.5 shrink-0 text-primary"
              />
              <span>{{ location }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div
        v-if="hasDetails && !featured"
        class="min-w-0 space-y-4"
      >
        <div v-if="education?.length">
          <p class="text-xs font-semibold tracking-wide text-zinc-500 uppercase">
            Education
          </p>
          <ul class="mt-2 space-y-1.5 text-sm leading-relaxed text-zinc-600">
            <li
              v-for="item in education"
              :key="item"
              class="flex gap-2"
            >
              <UIcon
                name="i-lucide-graduation-cap"
                class="mt-0.5 size-3.5 shrink-0 text-primary"
              />
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>

        <div v-if="isPhysician && residencyTraining?.length">
          <p class="text-xs font-semibold tracking-wide text-zinc-500 uppercase">
            Residency Training
          </p>
          <ul class="mt-2 space-y-1.5 text-sm leading-relaxed text-zinc-600">
            <li
              v-for="item in residencyTraining"
              :key="item"
              class="flex gap-2"
            >
              <UIcon
                name="i-lucide-stethoscope"
                class="mt-0.5 size-3.5 shrink-0 text-primary"
              />
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>

        <div v-if="professionalInterests">
          <p class="text-xs font-semibold tracking-wide text-zinc-500 uppercase">
            Clinical Focus
          </p>
          <p class="mt-2 text-sm leading-relaxed text-zinc-600 text-pretty break-words">
            {{ professionalInterests }}
          </p>
        </div>

        <div v-if="personalInterests">
          <p class="text-xs font-semibold tracking-wide text-zinc-500 uppercase">
            Personal Interests
          </p>
          <p class="mt-2 text-sm leading-relaxed text-zinc-500 text-pretty break-words">
            {{ personalInterests }}
          </p>
        </div>
      </div>
    </div>

    <div
      v-if="hasDetails && featured"
      class="mt-6 space-y-4 border-t border-zinc-100 pt-6"
    >
      <div v-if="education?.length">
        <p class="text-xs font-semibold tracking-wide text-zinc-500 uppercase">
          Education
        </p>
        <ul class="mt-2 space-y-1.5 text-sm leading-relaxed text-zinc-600">
          <li
            v-for="item in education"
            :key="item"
            class="flex gap-2"
          >
            <UIcon
              name="i-lucide-graduation-cap"
              class="mt-0.5 size-3.5 shrink-0 text-primary"
            />
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>

      <div v-if="isPhysician && residencyTraining?.length">
        <p class="text-xs font-semibold tracking-wide text-zinc-500 uppercase">
          Residency Training
        </p>
        <ul class="mt-2 space-y-1.5 text-sm leading-relaxed text-zinc-600">
          <li
            v-for="item in residencyTraining"
            :key="item"
            class="flex gap-2"
          >
            <UIcon
              name="i-lucide-stethoscope"
              class="mt-0.5 size-3.5 shrink-0 text-primary"
            />
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>

      <div v-if="professionalInterests">
        <p class="text-xs font-semibold tracking-wide text-zinc-500 uppercase">
          About
        </p>
        <p class="mt-2 text-sm leading-relaxed text-zinc-600 text-pretty">
          {{ professionalInterests }}
        </p>
      </div>

      <div v-if="personalInterests">
        <p class="text-xs font-semibold tracking-wide text-zinc-500 uppercase">
          Personal Interests
        </p>
        <p class="mt-2 text-sm leading-relaxed text-zinc-500 text-pretty">
          {{ personalInterests }}
        </p>
      </div>
    </div>
  </article>
</template>
