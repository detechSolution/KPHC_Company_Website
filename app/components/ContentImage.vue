<script setup lang="ts">
withDefaults(defineProps<{
  src: string
  alt: string
  width: number
  height: number
  aspectClass?: string
  loading?: 'lazy' | 'eager'
  sizes?: string
}>(), {
  aspectClass: 'aspect-4/3',
  loading: 'lazy',
})
</script>

<template>
  <div class="overflow-hidden rounded-card">
    <img
      :src="src"
      :alt="alt"
      :class="aspectClass"
      class="w-full object-cover"
      :loading="loading"
      decoding="async"
      :width="width"
      :height="height"
      :sizes="sizes"
    >
  </div>
</template>
