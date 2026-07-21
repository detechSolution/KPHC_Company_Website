<script setup lang="ts">
import { CAREERS_JOBS_URL } from '~/utils/external-links'

usePageSeo({
  title: 'Careers',
  description: 'Join Kalihi-Palama Health Center and help deliver compassionate care to our community.',
})
</script>

<template>
  <div>
    <HeroBanner
      badge="Join Our Team"
      badge-icon="i-lucide-briefcase"
      title="Build a Career with KPHC"
      description="Join a team dedicated to health equity, cultural competence, and compassionate care for everyone in our community."
      :links="[
        {
          label: 'View Current Openings',
          to: CAREERS_JOBS_URL,
          target: '_blank',
          rel: 'noopener noreferrer',
          color: 'primary',
        },
      ]"
    />

    <section class="bg-white py-section-sm sm:py-section">
      <div class="mx-auto grid w-full max-w-(--ui-container) items-center gap-split px-gutter sm:px-gutter-lg lg:grid-cols-2 lg:gap-split-lg">
        <div>
          <SectionTitle
            title="More Than a Job, Your Calling"
            class="text-3xl sm:text-4xl"
          />
          <div class="mt-stack space-y-4 text-base leading-relaxed text-zinc-600 text-pretty sm:text-lg">
            <p>
              Kalihi-Palama Health Center is a Federally Qualified Community Health Center in Honolulu, Hawaii. Every day, our team delivers medical, dental, behavioral health, and social services that help neighbors thrive.
            </p>
            <p>
              KPHC is an equal opportunity employer. We welcome applicants of all backgrounds and are committed to a workplace that reflects the communities we serve.
            </p>
          </div>
        </div>

        <img
          src="/images/home/hiring.webp"
          alt="Kalihi-Palama Health Center care team"
          class="aspect-[4/3] w-full rounded-card object-cover"
          loading="lazy"
          decoding="async"
          width="800"
          height="600"
        >
      </div>
    </section>

    <section class="bg-green-50 py-section-sm sm:py-section">
      <div class="mx-auto flex w-full max-w-(--ui-container) flex-col items-center px-gutter text-center sm:px-gutter-lg">
        <h2 class="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
          Join Our Team Now
        </h2>
        <p class="mt-stack max-w-2xl text-base leading-relaxed text-zinc-600 text-pretty sm:text-lg">
          Browse current openings and apply online. We're always looking for passionate people to join our team.
        </p>
        <div class="mt-stack-lg flex w-full flex-col items-stretch gap-stack-sm sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
          <UButton
            label="View Current Openings"
            :to="CAREERS_JOBS_URL"
            target="_blank"
            rel="noopener noreferrer"
            color="primary"
            size="xl"
            class="w-full justify-center sm:w-auto"
          />
          <UButton
            label="Learn About KPHC"
            to="/about"
            color="primary"
            variant="outline"
            size="xl"
            class="w-full justify-center sm:w-auto"
          />
        </div>
      </div>
    </section>
  </div>
</template>
