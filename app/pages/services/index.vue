<script setup lang="ts">
useSeoMeta({
  title: 'Services | Kalihi-Palama Health Center',
  description: 'We offer accessible, compassionate healthcare programs designed to keep you and your family thriving.',
})

const services = [
  {
    title: 'Medical Services',
    count: '3 Services',
    description: 'Comprehensive primary care for adults, women, and children — including preventive visits, chronic disease management, and family medicine.',
    to: '/services/medical',
  },
  {
    title: 'Behavioral Health and Social Services',
    count: '3 Services',
    description: 'Integrated counseling, case management, and healthcare for the homeless programs that support mind, emotions, and daily life.',
    to: '/services/behavioral-health',
  },
  {
    title: 'Dental Services',
    count: '4 Clinics',
    description: 'Preventive and restorative dental care for the whole family, with clinics dedicated to adults and children across Honolulu.',
    to: '/services/dental',
  },
  {
    title: 'Additional Services',
    count: '4 Services',
    description: 'Optometry, pharmacy, WIC, and wellness education that wrap around your primary care and keep your family supported.',
    to: '/services/additional',
  },
]

const reasons = [
  {
    icon: 'i-lucide-heart-handshake',
    title: 'Patient-First Approach',
    description: 'Care plans built around your goals, language, culture, and family — not a one-size-fits-all checklist.',
  },
  {
    icon: 'i-lucide-sparkles',
    title: 'Advanced Healthcare Innovation',
    description: 'Telehealth options, coordinated referrals, and modern clinic tools that make care more accessible.',
  },
  {
    icon: 'i-lucide-award',
    title: 'Award-Winning Certified Quality',
    description: 'Recognized for excellence as a Federally Qualified Health Center and Patient-Centered Medical Home.',
  },
  {
    icon: 'i-lucide-users',
    title: 'Compassionate Community Care',
    description: 'Rooted in Kalihi-Palama, we serve neighbors with aloha — including those who need sliding-scale support.',
  },
]
</script>

<template>
  <div>
    <HeroBanner
      badge="Get to know our services"
      title="Our Comprehensive Services"
      description="We offer accessible, compassionate healthcare programs designed to keep you and your family thriving."
    />

    <section class="bg-white py-section">
      <div class="mx-auto flex w-full max-w-(--ui-container) flex-col items-center px-gutter text-center sm:px-gutter-lg">
        <AccentTitle
          title="Committed To Providing Quality Integrated Health And Social Services"
          accent="Quality Integrated"
          class="max-w-3xl text-3xl sm:text-4xl"
          align="center"
        />
        <p class="mt-5 max-w-2xl text-base leading-relaxed text-zinc-600 text-pretty sm:text-lg">
          As your Patient-Centered Medical Home, we bring medical, dental, behavioral health, and social services together so you can get the right care at the right time — without navigating the system alone.
        </p>
      </div>

      <div class="mx-auto mt-12 flex w-full max-w-(--ui-container) flex-col gap-6 px-gutter sm:px-gutter-lg">
        <article
          v-for="service in services"
          :key="service.title"
          class="grid overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm sm:grid-cols-[minmax(0,280px)_1fr] lg:grid-cols-[minmax(0,340px)_1fr]"
        >
          <ImageSkeleton
            class="min-h-48 w-full sm:min-h-full sm:rounded-none"
            :label="`${service.title} photo placeholder`"
          />
          <div class="flex flex-col justify-center p-6 sm:p-8">
            <div class="flex flex-wrap items-start justify-between gap-3">
              <h3 class="text-xl font-semibold text-zinc-950 sm:text-2xl">
                {{ service.title }}
              </h3>
              <span class="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-primary">
                {{ service.count }}
              </span>
            </div>
            <p class="mt-3 text-base leading-relaxed text-zinc-600 text-pretty">
              {{ service.description }}
            </p>
            <div class="mt-6">
              <UButton
                label="View Service Detail"
                :to="service.to"
                color="primary"
                size="lg"
              />
            </div>
          </div>
        </article>
      </div>
    </section>

    <section class="bg-white pb-section">
      <div class="mx-auto w-full max-w-(--ui-container) px-gutter sm:px-gutter-lg">
        <AccentTitle
          title="Why Families Choose Kalihi-Palama"
          accent="Kalihi-Palama"
          class="text-3xl sm:text-4xl"
          align="center"
        />

        <div class="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div
            v-for="reason in reasons"
            :key="reason.title"
            class="text-center sm:text-left"
          >
            <div class="mx-auto flex size-12 items-center justify-center rounded-xl bg-green-50 text-primary sm:mx-0">
              <UIcon
                :name="reason.icon"
                class="size-6"
              />
            </div>
            <h3 class="mt-4 text-base font-semibold text-zinc-950">
              {{ reason.title }}
            </h3>
            <p class="mt-2 text-sm leading-relaxed text-zinc-600 text-pretty">
              {{ reason.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <PageCta />
  </div>
</template>
