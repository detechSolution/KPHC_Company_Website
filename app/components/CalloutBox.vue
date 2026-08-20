<script setup lang="ts">
const props = withDefaults(defineProps<{
  title?: string
  as?: 'h2' | 'h3' | 'p'
}>(), {
  as: 'p',
})

const TitleTag = computed(() => props.as)
</script>

<template>
  <div class="rounded-card border border-green-200 bg-green-50 p-5 sm:p-6">
    <component
      :is="TitleTag"
      v-if="title"
      class="text-sm font-bold tracking-wide text-green-900 uppercase"
    >
      {{ title }}
    </component>
    <div
      class="text-sm leading-relaxed text-zinc-700 sm:text-base"
      :class="title ? 'mt-2' : undefined"
    >
      <slot />
    </div>
  </div>
</template>
