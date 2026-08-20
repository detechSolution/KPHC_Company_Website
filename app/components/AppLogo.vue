<script setup lang="ts">
withDefaults(defineProps<{
  /** Empty string when the logo sits inside a named link. */
  alt?: string
}>(), {
  alt: 'Kalihi-Palama Health Center',
})
</script>

<template>
  <img
    src="/images/logo-header.webp"
    :alt="alt"
    width="608"
    height="206"
    fetchpriority="high"
    decoding="async"
    class="block h-16 w-auto max-w-[17rem] object-contain object-left contrast-[1.15] brightness-[0.92] sm:h-[4.25rem] sm:max-w-[19rem] xl:h-[4.25rem] xl:max-w-[18rem]"
  >
</template>
