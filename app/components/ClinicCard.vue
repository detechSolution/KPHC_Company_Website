<script setup lang="ts">
defineProps<{
  name: string
  address: string
  phone?: string
  phoneHref?: string
  hours?: string
  details?: string[]
}>()
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
        v-if="hours"
        class="flex gap-2.5"
      >
        <UIcon
          name="i-lucide-clock"
          class="mt-0.5 size-4 shrink-0 text-primary"
        />
        <span>{{ hours }}</span>
      </li>

      <li
        v-for="(detail, index) in details"
        :key="index"
        class="flex gap-2.5"
      >
        <UIcon
          name="i-lucide-info"
          class="mt-0.5 size-4 shrink-0 text-primary"
        />
        <span>{{ detail }}</span>
      </li>
    </ul>
  </article>
</template>
