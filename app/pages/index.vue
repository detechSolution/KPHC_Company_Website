<script setup lang="ts">
useSeoMeta({
  title: 'Kalihi-Palama Health Center',
  description: 'Care when you need it most of all. Comprehensive medical, dental, and behavioral health services for our community.',
})
</script>

<template>
  <div>
    <HeroBanner
      size="lg"
      variant="plain"
      title="Modern Healthcare Solutions That Puts You First."
      accent="Healthcare Solutions"
      description="Kalihi-Palama Health Center is a Federally Qualified Health Center (FQHC) providing accessible medical, dental, and behavioral health care for our community."
      :links="[{
        label: 'Book a Consultation',
        color: 'primary',
        size: 'xl',
      }]"
    />
  </div>
</template>
