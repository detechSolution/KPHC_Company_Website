<script setup lang="ts">
withDefaults(defineProps<{
  src: string
  alt: string
  width: number
  height: number
  aspectClass?: string
  objectClass?: string
  loading?: 'lazy' | 'eager'
  sizes?: string
}>(), {
  aspectClass: 'aspect-4/3',
  objectClass: 'object-cover',
  loading: 'lazy',
})
</script>

<template>
  <div class="overflow-hidden rounded-card">
    <img
      :src="src"
      :alt="alt"
      :class="[aspectClass, objectClass]"
      class="w-full"
      :loading="loading"
      decoding="async"
      :width="width"
      :height="height"
      :sizes="sizes"
    >
  </div>
</template>
