<script setup lang="ts">
import type { MissionTab } from '~/utils/about-content'
import {
  boardOfDirectors,
  executiveTeam,
  historyCards,
  missionContent,
  missionTabs,
  providersCta,
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
          <SectionTitle
            title="More Than a Clinic - A Community Home"
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
          <ContentImage
            src="/images/home/hiring.webp"
            alt="Kalihi-Palama Health Center care team"
            :width="880"
            :height="680"
            sizes="(min-width: 1024px) 40rem, 100vw"
          />
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
        <SectionTitle
          title="Kalihi-Palama History"
          class="text-3xl sm:text-4xl"
          align="center"
        />

        <ContentImage
          src="/images/about-us/history.webp"
          alt="Historical view of Kalihi-Palama and Kalihi-Palama Health Center"
          aspect-class="aspect-21/9"
          class="mt-stack-xl"
          :width="2560"
          :height="1097"
          sizes="(min-width: 82.5rem) 82.5rem, 100vw"
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
        <ContentImage
          src="/images/about-us/bod.webp"
          alt="Kalihi-Palama Health Center mission in action"
          :width="880"
          :height="680"
          sizes="(min-width: 1024px) 40rem, 100vw"
        />

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
            <template v-if="Array.isArray(missionContent[activeTab].body)">
              <p
                v-for="(paragraph, index) in missionContent[activeTab].body"
                :key="index"
                class="mt-3 text-base leading-relaxed text-zinc-600 text-pretty sm:text-lg"
              >
                {{ paragraph }}
              </p>
            </template>
            <p
              v-else-if="missionContent[activeTab].body"
              class="mt-3 text-base leading-relaxed text-zinc-600 text-pretty sm:text-lg"
            >
              {{ missionContent[activeTab].body }}
            </p>
            <ul
              v-if="missionContent[activeTab].items?.length"
              class="mt-3 space-y-2 text-base leading-relaxed text-zinc-600 sm:text-lg"
            >
              <li
                v-for="item in missionContent[activeTab].items"
                :key="item"
                class="flex items-start gap-2 text-pretty"
              >
                <UIcon
                  name="i-lucide-check"
                  class="mt-1 size-4 shrink-0 text-primary"
                />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white py-section-sm sm:py-section">
      <div class="mx-auto w-full max-w-(--ui-container) px-gutter sm:px-gutter-lg">
        <SectionTitle
          title="Board of Directors"
          class="text-3xl sm:text-4xl"
          align="center"
        />
        <p class="mx-auto mt-stack max-w-3xl text-center text-base leading-relaxed text-zinc-600 text-pretty sm:text-lg">
          Our volunteer board provides governance and community oversight, guiding KPHC's mission to serve Kalihi-Palama and beyond.
        </p>

        <div class="mt-stack-xl grid gap-grid sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          <article
            v-for="member in boardOfDirectors"
            :key="member.name"
            class="rounded-card border border-zinc-200 bg-white p-5 shadow-sm sm:p-6"
          >
            <h3 class="font-semibold text-zinc-950">
              {{ member.name }}
            </h3>
            <p class="mt-1 text-sm font-medium text-primary">
              {{ member.role }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-green-50 py-section-sm sm:py-section">
      <div class="mx-auto w-full max-w-(--ui-container) px-gutter sm:px-gutter-lg">
        <SectionTitle
          title="Executive Team"
          class="text-3xl sm:text-4xl"
          align="center"
        />
        <p class="mx-auto mt-stack max-w-3xl text-center text-base leading-relaxed text-zinc-600 text-pretty sm:text-lg">
          Our executive leadership oversees day-to-day operations and ensures high-quality, integrated care across all KPHC programs and sites.
        </p>

        <div class="mt-stack-xl grid gap-grid sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          <article
            v-for="member in executiveTeam"
            :key="member.name"
            class="rounded-card border border-zinc-200 bg-white p-5 shadow-sm sm:p-6"
          >
            <h3 class="font-semibold text-zinc-950">
              {{ member.name }}
            </h3>
            <p class="mt-1 text-sm font-medium text-primary">
              {{ member.role }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-white py-section-sm sm:py-section">
      <div class="mx-auto grid w-full max-w-(--ui-container) items-center gap-split px-gutter sm:px-gutter-lg lg:grid-cols-2 lg:gap-split-lg">
        <ContentImage
          :src="providersCta.image"
          :alt="providersCta.imageAlt"
          :width="880"
          :height="680"
          sizes="(min-width: 1024px) 40rem, 100vw"
        />

        <div>
          <p class="text-sm font-semibold tracking-wide text-primary uppercase">
            {{ providersCta.eyebrow }}
          </p>
          <SectionTitle
            :title="providersCta.title"
            class="mt-stack-sm text-3xl sm:text-4xl"
          />
          <p class="mt-stack text-base leading-relaxed text-zinc-600 text-pretty sm:text-lg">
            {{ providersCta.description }}
          </p>
          <UButton
            :label="providersCta.buttonLabel"
            to="/providers"
            color="primary"
            size="xl"
            class="mt-stack-lg"
          />
        </div>
      </div>
    </section>

    <PageCta />
  </div>
</template>
