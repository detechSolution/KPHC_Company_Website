<script setup lang="ts">
import { CAREERS_JOBS_URL } from '~/utils/external-links'

useSeoMeta({
  title: 'Kalihi-Palama Health Center',
  description: 'Care when you need it most of all. Comprehensive medical, dental, and behavioral health services for our community.',
})

const highlightCards = [
  {
    title: 'Kalihi-Palama Health Center Events',
    action: 'View More',
    to: '/resources',
    image: '/images/home/events.webp',
    alt: 'Community event with traditional Hawaiian dance performance at KPHC',
  },
  {
    title: 'We\'re Hiring! Apply Today',
    action: 'Apply Now',
    to: CAREERS_JOBS_URL,
    target: '_blank' as const,
    image: '/images/home/hiring.webp',
    alt: 'Kalihi-Palama Health Center care team',
  },
  {
    title: 'Apply for WIC Services',
    action: 'Apply Now',
    to: '/services/additional',
    image: '/images/home/wic.webp',
    alt: 'Smiling child receiving WIC nutrition support',
  },
]
</script>

<template>
  <div>
    <HeroBanner
      size="lg"
      variant="soft"
      title="Modern Healthcare Solutions That Puts You First."
      accent="Healthcare Solutions"
      description="Kalihi-Palama Health Center is a Federally Qualified Health Center (FQHC) providing accessible medical, dental, and behavioral health care for our community."
    >
      <HeroCarousel />
    </HeroBanner>

    <section class="bg-white pt-stack-lg pb-section-sm sm:pt-stack-xl sm:pb-section">
      <div class="mx-auto flex w-full max-w-(--ui-container) flex-col items-center px-gutter text-center sm:px-gutter-lg">
        <AccentTitle
          title="We Provide Comprehensive Healthcare for Our Patients."
          accent="Comprehensive Healthcare"
          class="max-w-3xl text-3xl sm:text-4xl"
          align="center"
        />
        <p class="mt-stack max-w-2xl text-base leading-relaxed text-zinc-600 text-pretty sm:text-lg">
          As a Patient-Centered Medical Home, we coordinate your care across medical, dental, behavioral health, and social services — so you and your family get the support you need in one place.
        </p>
        <p class="mt-stack-sm max-w-2xl text-base leading-relaxed text-zinc-600 text-pretty sm:text-lg">
          Our team is committed to culturally respectful, affordable care for every stage of life.
        </p>
      </div>
    </section>

    <section class="bg-white pb-section-sm sm:pb-section">
      <div class="mx-auto grid w-full max-w-(--ui-container) gap-grid px-gutter sm:grid-cols-2 sm:px-gutter-lg lg:grid-cols-3 lg:gap-gutter">
        <NuxtLink
          v-for="card in highlightCards"
          :key="card.title"
          :to="card.to"
          :target="card.target"
          :rel="card.target ? 'noopener noreferrer' : undefined"
          class="group relative block overflow-hidden rounded-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <img
            :src="card.image"
            :alt="card.alt"
            class="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            loading="lazy"
            decoding="async"
            width="640"
            height="480"
          >
          <div class="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-zinc-950/80 via-zinc-950/30 to-transparent p-5 sm:p-6">
            <h3 class="text-lg font-semibold text-white text-balance sm:text-xl">
              {{ card.title }}
            </h3>
            <span class="mt-2 inline-flex items-center gap-1 text-sm font-medium text-green-200 transition-colors group-hover:text-white">
              {{ card.action }}
              <UIcon
                name="i-lucide-chevron-right"
                class="size-4"
              />
            </span>
          </div>
        </NuxtLink>
      </div>
    </section>

    <section class="bg-white pb-section-sm sm:pb-section">
      <div class="mx-auto grid w-full max-w-(--ui-container) items-center gap-split px-gutter sm:px-gutter-lg lg:grid-cols-2 lg:gap-split-lg">
        <div>
          <p class="text-sm font-semibold tracking-wide text-primary uppercase">
            Comprehensive Services
          </p>
          <h2 class="mt-stack-sm text-3xl font-semibold tracking-tight text-zinc-950 text-balance sm:text-4xl">
            Empowering your health and uplifting your life
          </h2>
          <p class="mt-stack text-base leading-relaxed text-zinc-600 text-pretty sm:text-lg">
            From primary care and dental to behavioral health, WIC, pharmacy, and more — explore the programs designed to keep you and your family thriving.
          </p>
          <UButton
            label="Explore Our Services"
            to="/services"
            color="primary"
            size="xl"
            class="mt-stack-lg"
          />
        </div>

        <div class="grid grid-cols-2 gap-grid">
          <img
            src="/images/home/empowering-pediatric-care.webp"
            alt="Kalihi-Palama Health Center provider with a young patient during a checkup"
            class="aspect-square w-full rounded-card object-cover"
            loading="lazy"
            decoding="async"
            width="480"
            height="480"
          >
          <img
            src="/images/services/medical-services.webp"
            alt="Healthcare provider in consultation with a patient at Kalihi-Palama Health Center"
            class="aspect-square w-full rounded-card object-cover"
            loading="lazy"
            decoding="async"
            width="480"
            height="480"
          >
        </div>
      </div>
    </section>

    <PageCta />
  </div>
</template>
