<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  description: string
}>()
</script>

<template>
  <article class="flex flex-col items-center rounded-card border border-zinc-200 bg-white p-6 text-center shadow-sm sm:p-8">
    <div class="flex size-14 items-center justify-center rounded-full bg-green-50 text-primary">
      <UIcon
        :name="icon"
        class="size-7"
      />
    </div>
    <h3 class="mt-5 text-lg font-semibold text-zinc-950">
      {{ title }}
    </h3>
    <p class="mt-2 text-sm leading-relaxed text-zinc-600 text-pretty">
      {{ description }}
    </p>
  </article>
</template>
