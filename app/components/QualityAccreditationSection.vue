<script setup lang="ts">
import { qualityBadges } from '~/utils/quality-badges'
</script>

<template>
  <section class="bg-white pb-section-sm sm:pb-section">
    <div class="mx-auto flex w-full max-w-(--ui-container) flex-col items-center px-gutter text-center sm:px-gutter-lg">
      <AccentTitle
        title="Quality & Accreditation Recognition"
        accent="Recognition"
        class="text-3xl sm:text-4xl"
        align="center"
      />
      <p class="mt-stack max-w-2xl text-base leading-relaxed text-zinc-600 text-pretty sm:text-lg">
        Kalihi-Palama Health Center is recognized by HRSA for clinical quality, access, and health information technology, and holds NCQA Patient-Centered Medical Home and CARF accreditations.
      </p>

      <ul class="mt-stack-xl grid w-full list-none grid-cols-3 place-items-center gap-4 sm:grid-cols-4 sm:gap-5 md:grid-cols-6 lg:grid-cols-8 lg:gap-6">
        <li
          v-for="badge in qualityBadges"
          :key="badge.src"
          class="flex size-24 items-center justify-center sm:size-28 lg:size-32"
        >
          <img
            :src="badge.src"
            :alt="badge.alt"
            class="size-full object-contain transition-transform duration-300 ease-out hover:scale-105"
            loading="lazy"
            decoding="async"
            width="320"
            height="320"
          >
        </li>
      </ul>
    </div>
  </section>
</template>
