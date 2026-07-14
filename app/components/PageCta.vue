<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  description?: string
  primaryLabel?: string
  primaryTo?: string
  secondaryLabel?: string
  secondaryHref?: string
}>(), {
  title: 'Ready to Take Control of Your Health?',
  description: 'Schedule your appointment today. We accept most insurance plans and offer a sliding fee scale for those who qualify. No one is turned away.',
  primaryLabel: 'Book an Appointment',
  secondaryLabel: 'Call Us Now',
  secondaryHref: 'tel:+18088481438',
})
</script>

<template>
  <section class="bg-white py-section">
    <div class="mx-auto flex w-full max-w-(--ui-container) flex-col items-center px-gutter text-center sm:px-gutter-lg">
      <h2 class="max-w-2xl text-3xl font-semibold tracking-tight text-zinc-950 text-balance sm:text-4xl">
        {{ title }}
      </h2>
      <p class="mt-4 max-w-2xl text-base text-zinc-600 text-pretty sm:text-lg">
        {{ description }}
      </p>
      <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
        <UButton
          :label="primaryLabel"
          :to="primaryTo"
          color="primary"
          size="xl"
        />
        <UButton
          :label="secondaryLabel"
          :to="secondaryHref"
          color="primary"
          variant="outline"
          size="xl"
        />
      </div>
    </div>
  </section>
</template>
