<script setup lang="ts">
import { splitAccentTitle } from '~/utils/accent-title'

const props = withDefaults(defineProps<{
  title: string
  accent: string
  as?: 'h1' | 'h2' | 'h3'
  align?: 'center' | 'start'
  class?: string
}>(), {
  as: 'h2',
  align: 'start',
})

const Tag = computed(() => props.as)

const parts = computed(() => splitAccentTitle(props.title, props.accent))
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
    <template
      v-for="(part, index) in parts"
      :key="index"
    >
      <span
        v-if="part.accent"
        class="font-accent text-[1.08em] font-normal text-primary"
      >
        {{ part.text }}
      </span>
      <template v-else>
        {{ part.text }}
      </template>
    </template>
  </component>
</template>
