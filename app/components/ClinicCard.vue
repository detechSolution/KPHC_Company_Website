<script setup lang="ts">
import type { ClinicExtendedHoursNote, ClinicMedicalHours } from '~/utils/locations-content'
import { splitHoursLine } from '~/utils/format-hours-line'
import { phoneToTelHref, splitPhoneSegments } from '~/utils/linkify-phone'

const props = defineProps<{
  name: string
  address: string
  phone?: string
  phoneHref?: string
  hours?: string | string[]
  details?: string[]
  medicalHours?: ClinicMedicalHours
  dentalHours?: string
  extendedHoursNote?: ClinicExtendedHoursNote
}>()

const hourLines = computed(() => {
  if (!props.hours)
    return []

  return Array.isArray(props.hours) ? props.hours : [props.hours]
})
</script>

<template>
  <article class="flex h-full flex-col rounded-card border border-zinc-200 bg-white p-5 sm:p-6">
    <h3 class="min-h-[3.5rem] text-base font-semibold text-zinc-950 text-balance sm:min-h-[4rem] sm:text-lg">
      {{ name }}
    </h3>

    <ul class="mt-4 space-y-3 text-sm text-zinc-600">
      <li class="flex gap-2.5">
        <UIcon
          name="i-lucide-map-pin"
          class="mt-0.5 size-4 shrink-0 text-primary"
        />
        <span>{{ address }}</span>
      </li>

      <li
        v-if="phone"
        class="flex gap-2.5"
      >
        <UIcon
          name="i-lucide-phone"
          class="mt-0.5 size-4 shrink-0 text-primary"
        />
        <a
          :href="phoneHref ?? `tel:${phone.replace(/\D/g, '')}`"
          class="text-primary transition-colors hover:text-primary/80"
        >
          {{ phone }}
        </a>
      </li>

      <li
        v-for="(hour, index) in hourLines"
        :key="index"
        class="flex gap-2.5"
      >
        <UIcon
          name="i-lucide-clock"
          class="mt-0.5 size-4 shrink-0 text-primary"
        />
        <span><ClinicHoursLine :text="hour" /></span>
      </li>

      <li
        v-if="medicalHours"
        class="flex gap-2.5"
      >
        <UIcon
          name="i-lucide-clock"
          class="mt-0.5 size-4 shrink-0 text-primary"
        />
        <div class="space-y-1">
          <p class="font-medium text-zinc-700">
            Medical hours:
          </p>
          <div class="space-y-0.5">
            <p>
              <span class="font-semibold text-zinc-950">{{ medicalHours.standard.days }}</span>: {{ medicalHours.standard.time }}
            </p>
            <p class="pt-1 font-medium text-zinc-700">
              {{ medicalHours.extended.heading }}:
            </p>
            <p
              v-for="line in medicalHours.extended.lines"
              :key="line.days"
            >
              <span class="font-semibold text-zinc-950">{{ line.days }}</span>: {{ line.time }}
            </p>
          </div>
        </div>
      </li>

      <li
        v-if="dentalHours"
        class="flex gap-2.5"
      >
        <UIcon
          name="i-lucide-clock"
          class="mt-0.5 size-4 shrink-0 text-primary"
        />
        <span>
          <span class="font-medium text-zinc-700">Dental hours:</span>{{ ' ' }}<ClinicHoursLine :text="dentalHours" />
        </span>
      </li>

      <li
        v-for="(detail, index) in details"
        :key="index"
        class="flex gap-2.5"
      >
        <UIcon
          :name="splitHoursLine(detail) ? 'i-lucide-clock' : 'i-lucide-info'"
          class="mt-0.5 size-4 shrink-0 text-primary"
        />
        <span>
          <ClinicHoursLine
            v-if="splitHoursLine(detail)"
            :text="detail"
          />
          <template v-else>
            <template
              v-for="(segment, segmentIndex) in splitPhoneSegments(detail)"
              :key="segmentIndex"
            >
              <a
                v-if="segment.type === 'phone'"
                :href="phoneToTelHref(segment.value)"
                class="text-primary transition-colors hover:text-primary/80"
              >{{ segment.value }}</a>
              <template v-else>{{ segment.value }}</template>
            </template>
          </template>
        </span>
      </li>
    </ul>

    <div
      v-if="extendedHoursNote"
      class="mt-4 space-y-2 border-t border-zinc-100 pt-4 text-sm leading-relaxed text-zinc-600"
    >
      <p>{{ extendedHoursNote.intro }}</p>
      <div class="space-y-0.5">
        <p class="font-medium text-zinc-700">
          {{ extendedHoursNote.extended.heading }}:
        </p>
        <p
          v-for="line in extendedHoursNote.extended.lines"
          :key="line.days"
        >
          <span class="font-semibold text-zinc-950">{{ line.days }}</span>: {{ line.time }}
        </p>
      </div>
      <p>
        <template
          v-for="(segment, segmentIndex) in splitPhoneSegments(extendedHoursNote.scheduling)"
          :key="segmentIndex"
        >
          <a
            v-if="segment.type === 'phone'"
            :href="phoneToTelHref(segment.value)"
            class="text-primary transition-colors hover:text-primary/80"
          >{{ segment.value }}</a>
          <template v-else>{{ segment.value }}</template>
        </template>
      </p>
    </div>
  </article>
</template>
