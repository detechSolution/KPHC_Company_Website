<script setup lang="ts">
import type { MissionTab } from '~/utils/about-content'
import {
  historyCards,
  missionContent,
  missionTabs,
  qualityBadges,
} from '~/utils/about-content'
import { MAIN_PHONE, MAIN_PHONE_HREF } from '~/utils/external-links'

usePageSeo({
  title: 'About Us',
  description: 'We provide comprehensive, high-quality medical care to support the well-being of our community.',
})

const activeTab = ref<MissionTab>('mission')
</script>

<template>
  <div>
    <HeroBanner
      badge="Get to know about us"
      title="About Kalihi–Palama Health Center"
      description="We provide comprehensive, high-quality medical care to support the well-being of our community."
    />

    <section class="bg-white py-section-sm sm:py-section">
      <div class="mx-auto grid w-full max-w-(--ui-container) items-center gap-split px-gutter sm:px-gutter-lg lg:grid-cols-2 lg:gap-split-lg">
        <div>
          <AccentTitle
            title="More Than a Clinic - A Community Home"
            accent="A Community Home"
            class="text-3xl sm:text-4xl"
          />
          <p class="mt-stack text-base leading-relaxed text-zinc-600 text-pretty sm:text-lg">
            Kalihi-Palama Health Center (KPHC) is an independent, 501(c)(3) non-profit organization that plays a crucial role in the Kalihi-Palama community as a provider of health and social services to patients who typically face significant barriers when accessing health care. KPHC is located in the heart of Kalihi-Palama; an urban, inner-city community that is home to approximately 63,820 residents, many of whom are vulnerable, underserved Asian, Native Hawaiian, and Pacific Island ethnic minorities. KPHC serves more than 20,000 patients annually.
          </p>
          <p class="mt-3 text-base leading-relaxed text-zinc-600 text-pretty sm:text-lg">
            Our doors are open to everyone — including those who are uninsured or underinsured — with sliding fee scales and culturally competent care.
          </p>
          <UButton
            label="Explore Our Services"
            to="/services"
            color="primary"
            size="xl"
            class="mt-stack-lg"
          />
        </div>

        <div class="relative">
          <img
            src="/images/home/hiring.webp"
            alt="Kalihi-Palama Health Center care team"
            class="aspect-[4/3] w-full rounded-card object-cover"
            loading="lazy"
            decoding="async"
            width="800"
            height="600"
          >
          <div class="absolute bottom-4 left-4 flex items-center gap-stack-sm rounded-card bg-green-900 px-4 py-3 text-white shadow-lg sm:bottom-6 sm:left-6">
            <UIcon
              name="i-lucide-phone"
              class="size-5 shrink-0"
            />
            <div>
              <a
                :href="MAIN_PHONE_HREF"
                class="block text-sm font-semibold tracking-wide"
              >
                {{ MAIN_PHONE }}
              </a>
              <p class="text-xs text-green-100">
                Make an appointment
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white pb-section-sm sm:pb-section">
      <div class="mx-auto w-full max-w-(--ui-container) px-gutter sm:px-gutter-lg">
        <AccentTitle
          title="Kalihi-Palama History"
          accent="History"
          class="text-3xl sm:text-4xl"
          align="center"
        />

        <div class="mt-stack-xl grid gap-grid sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          <article
            v-for="card in historyCards"
            :key="card.title"
            class="rounded-card p-6 sm:p-7"
            :class="card.featured
              ? 'bg-primary text-white'
              : 'border border-zinc-200 bg-white shadow-sm'"
          >
            <span
              v-if="card.year"
              class="inline-flex rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-primary"
            >
              {{ card.year }}
            </span>
            <h3
              class="text-lg font-semibold"
              :class="card.featured ? 'text-white' : 'mt-3 text-zinc-950'"
            >
              {{ card.title }}
            </h3>
            <p
              class="mt-3 text-sm leading-relaxed text-pretty"
              :class="card.featured ? 'text-green-50' : 'text-zinc-600'"
            >
              {{ card.body }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-green-50 py-section-sm sm:py-section">
      <div class="mx-auto grid w-full max-w-(--ui-container) items-center gap-split px-gutter sm:px-gutter-lg lg:grid-cols-2 lg:gap-split-lg">
        <img
          src="/images/mission.webp"
          alt="Kalihi-Palama Health Center mission in action"
          class="aspect-[4/3] w-full rounded-card object-cover"
          loading="lazy"
          decoding="async"
          width="800"
          height="600"
        >

        <div>
          <div
            class="inline-flex rounded-full border border-green-200 bg-white p-1"
            role="tablist"
            aria-label="Mission, vision, and values"
          >
            <button
              v-for="tab in missionTabs"
              :key="tab.id"
              type="button"
              role="tab"
              :aria-selected="activeTab === tab.id"
              class="rounded-full px-4 py-2 text-sm font-medium transition-colors"
              :class="activeTab === tab.id
                ? 'bg-primary text-white'
                : 'text-zinc-700 hover:text-primary'"
              @click="activeTab = tab.id"
            >
              {{ tab.label }}
            </button>
          </div>

          <div
            class="mt-stack-lg"
            role="tabpanel"
          >
            <div class="flex size-12 items-center justify-center rounded-xl bg-primary text-white">
              <UIcon
                :name="missionContent[activeTab].icon"
                class="size-6"
              />
            </div>
            <h3 class="mt-stack text-2xl font-semibold text-zinc-950">
              {{ missionContent[activeTab].title }}
            </h3>
            <p class="mt-3 text-base leading-relaxed text-zinc-600 text-pretty sm:text-lg">
              {{ missionContent[activeTab].body }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white py-section-sm sm:py-section">
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

        <ul class="mt-stack-xl flex w-full list-none flex-wrap items-center justify-center gap-4 sm:gap-5 lg:gap-6">
          <li
            v-for="badge in qualityBadges"
            :key="badge.src"
            class="flex size-28 shrink-0 items-center justify-center sm:size-[7.5rem] lg:size-32"
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

    <PageCta />
  </div>
</template>
