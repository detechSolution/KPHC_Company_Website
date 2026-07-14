<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<template>
  <div class="rounded-card border border-green-200 bg-green-50 p-5 sm:p-6">
    <h3
      v-if="title"
      class="text-sm font-bold tracking-wide text-green-900 uppercase"
    >
      {{ title }}
    </h3>
    <div
      class="text-sm leading-relaxed text-zinc-700 sm:text-base"
      :class="title ? 'mt-2' : undefined"
    >
      <slot />
    </div>
  </div>
</template>
