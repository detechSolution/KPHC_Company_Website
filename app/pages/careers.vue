<script setup lang="ts">
useSeoMeta({
  title: 'Careers | Kalihi-Palama Health Center',
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
    />

    <section class="bg-white py-section">
      <div class="mx-auto grid w-full max-w-(--ui-container) items-center gap-10 px-gutter sm:px-gutter-lg lg:grid-cols-2 lg:gap-16">
        <div>
          <AccentTitle
            title="More Than a Job, Your Calling"
            accent="Your Calling"
            class="text-3xl sm:text-4xl"
          />
          <div class="mt-5 space-y-4 text-base leading-relaxed text-zinc-600 text-pretty sm:text-lg">
            <p>
              Kalihi-Palama Health Center is a Federally Qualified Community Health Center in Honolulu, Hawaii. Every day, our team delivers medical, dental, behavioral health, and social services that help neighbors thrive.
            </p>
            <p>
              KPHC is an equal opportunity employer. We welcome applicants of all backgrounds and are committed to a workplace that reflects the communities we serve.
            </p>
          </div>
        </div>

        <ImageSkeleton
          class="aspect-[4/3] w-full"
          label="Careers photo placeholder"
        />
      </div>
    </section>

    <section class="bg-green-50 py-section">
      <div class="mx-auto flex w-full max-w-(--ui-container) flex-col items-center px-gutter text-center sm:px-gutter-lg">
        <h2 class="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
          Join Our Team Now
        </h2>
        <p class="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 text-pretty sm:text-lg">
          Send us your resume and a note about the kind of work you'd like to do. We're always looking for passionate people.
        </p>
        <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
          <UButton
            label="Send Us Your Resume"
            to="mailto:admingroup@kphc.org?subject=Career%20Inquiry"
            color="primary"
            size="xl"
          />
          <UButton
            label="Learn About KPHC"
            to="/about"
            color="primary"
            variant="outline"
            size="xl"
          />
        </div>
      </div>
    </section>
  </div>
</template>
