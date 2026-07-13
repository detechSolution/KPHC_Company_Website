<script setup lang="ts">
withDefaults(defineProps<{
  /** Accessible label for the placeholder */
  label?: string
}>(), {
  label: 'Image placeholder',
})
</script>

<template>
  <div
    role="img"
    :aria-label="label"
    class="relative overflow-hidden rounded-2xl bg-green-100/80"
  >
    <USkeleton class="absolute inset-0 size-full rounded-none" />
  </div>
</template>
