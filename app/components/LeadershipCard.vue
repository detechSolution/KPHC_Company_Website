<script setup lang="ts">
import { leadershipInitials } from '~/utils/about-content'

defineProps<{
  name: string
  role: string
  photo?: string
}>()
</script>

<template>
  <article class="flex items-center gap-4 rounded-card border border-zinc-200 bg-white p-5 shadow-sm sm:p-6">
    <img
      v-if="photo"
      :src="photo"
      :alt="`${name}, ${role}`"
      width="160"
      height="160"
      class="size-16 shrink-0 rounded-full object-cover object-center sm:size-20"
      loading="lazy"
      decoding="async"
    >
    <div
      v-else
      class="flex size-16 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-semibold text-primary sm:size-20 sm:text-base"
      aria-hidden="true"
    >
      {{ leadershipInitials(name) }}
    </div>
    <div class="min-w-0">
      <h3 class="font-semibold text-zinc-950">
        {{ name }}
      </h3>
      <p class="mt-1 text-sm font-medium text-primary">
        {{ role }}
      </p>
    </div>
  </article>
</template>
