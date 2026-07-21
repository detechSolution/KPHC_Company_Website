<script setup lang="ts">
const props = withDefaults(defineProps<{
  title: string
  as?: 'h1' | 'h2' | 'h3'
  align?: 'center' | 'start'
  class?: string
}>(), {
  as: 'h2',
  align: 'start',
})

const Tag = computed(() => props.as)
</script>

<template>
  <component
    :is="Tag"
    class="font-semibold tracking-tight text-zinc-950 text-balance"
    :class="[
      align === 'center' ? 'text-center' : 'text-left',
      $props.class,
    ]"
  >
    {{ title }}
  </component>
</template>
