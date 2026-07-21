<script setup lang="ts">
import { servicesIndexCards, servicesIndexReasons } from '~/utils/services-content'

usePageSeo({
  title: 'Services',
  description: 'We offer accessible, compassionate healthcare programs designed to keep you and your family thriving.',
})
</script>

<template>
  <div>
    <HeroBanner
      badge="Get to know our services"
      title="Our Comprehensive Services"
      description="We offer accessible, compassionate healthcare programs designed to keep you and your family thriving."
    />

    <section class="bg-white py-section-sm sm:py-section">
      <div class="mx-auto flex w-full max-w-(--ui-container) flex-col items-center px-gutter text-center sm:px-gutter-lg">
        <SectionTitle
          title="Committed To Providing Quality Integrated Health And Social Services"
          class="max-w-3xl text-3xl sm:text-4xl"
          align="center"
        />
        <p class="mt-stack max-w-2xl text-base leading-relaxed text-zinc-600 text-pretty sm:text-lg">
          As your Patient-Centered Medical Home, we bring medical, dental, behavioral health, and social services together so you can get the right care at the right time — without navigating the system alone.
        </p>
      </div>

      <div class="mx-auto mt-stack-xl flex w-full max-w-(--ui-container) flex-col gap-stack-lg px-gutter sm:mt-12 sm:px-gutter-lg">
        <article
          v-for="service in servicesIndexCards"
          :key="service.title"
          class="grid overflow-hidden rounded-card border border-zinc-200 bg-white shadow-sm sm:grid-cols-[minmax(0,280px)_1fr] lg:grid-cols-[minmax(0,340px)_1fr]"
        >
          <img
            :src="service.image"
            :alt="service.alt"
            class="min-h-48 w-full object-cover sm:min-h-full sm:rounded-none"
            loading="lazy"
            decoding="async"
            width="680"
            height="480"
          >
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

    <section class="bg-white pb-section-sm sm:pb-section">
      <div class="mx-auto w-full max-w-(--ui-container) px-gutter sm:px-gutter-lg">
        <SectionTitle
          title="Why Families Choose Kalihi-Palama"
          class="text-3xl sm:text-4xl"
          align="center"
        />

        <div class="mt-stack-xl grid gap-stack-lg sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="reason in servicesIndexReasons"
            :key="reason.title"
            class="text-center sm:text-left"
          >
            <div class="mx-auto flex size-12 items-center justify-center rounded-xl bg-green-50 text-primary sm:mx-0">
              <UIcon
                :name="reason.icon"
                class="size-6"
              />
            </div>
            <h3 class="mt-stack-sm text-base font-semibold text-zinc-950">
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
