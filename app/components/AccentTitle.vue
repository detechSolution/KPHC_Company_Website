<script setup lang="ts">
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

const parts = computed(() => {
  const { title, accent } = props
  if (!title.includes(accent)) {
    return [{ text: title, accent: false as const }]
  }

  const index = title.indexOf(accent)
  return [
    { text: title.slice(0, index), accent: false as const },
    { text: accent, accent: true as const },
    { text: title.slice(index + accent.length), accent: false as const },
  ].filter(part => part.text.length > 0)
})
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
