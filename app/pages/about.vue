<script setup lang="ts">
useSeoMeta({
  title: 'About Us | Kalihi-Palama Health Center',
  description: 'We provide comprehensive, high-quality medical care to support the well-being of our community.',
})

const historyCards = [
  {
    year: null as string | null,
    title: 'Our Journey',
    body: 'From a humble clinic in the basement of Kaumakapili Church to a Federally Qualified Health Center serving more than 20,000 patients each year — our story is rooted in community.',
    featured: true,
  },
  {
    year: '1975',
    title: 'The Founding',
    body: 'KPHC began as a community response to unmet health needs in Kalihi-Palama, opening its doors to neighbors who needed accessible care.',
    featured: false,
  },
  {
    year: '1980s',
    title: 'Growing the Mission',
    body: 'Services expanded beyond primary care as the center deepened partnerships and built programs that reflected the needs of local families.',
    featured: false,
  },
  {
    year: '1990s',
    title: 'FQHC Designation',
    body: 'Federal recognition as a Federally Qualified Health Center strengthened our ability to deliver affordable, comprehensive care to underserved communities.',
    featured: false,
  },
  {
    year: '2019',
    title: 'Chinatown Expansion',
    body: 'New clinic sites extended our reach, bringing medical, dental, and supportive services closer to more people across Honolulu.',
    featured: false,
  },
  {
    year: '2020',
    title: 'National Recognition',
    body: 'Continued investment in quality, cultural competence, and integrated care earned recognition for excellence in community health.',
    featured: false,
  },
]

type MissionTab = 'mission' | 'vision' | 'values'

const activeTab = ref<MissionTab>('mission')

const missionTabs: { id: MissionTab, label: string }[] = [
  { id: 'mission', label: 'Mission' },
  { id: 'vision', label: 'Vision' },
  { id: 'values', label: 'Values' },
]

const missionContent: Record<MissionTab, { title: string, body: string, icon: string }> = {
  mission: {
    title: 'Our Mission',
    icon: 'i-lucide-hand-heart',
    body: 'To provide quality integrated health and social services that are accessible, culturally respectful, and centered on the people of Kalihi-Palama and surrounding communities.',
  },
  vision: {
    title: 'Our Vision',
    icon: 'i-lucide-eye',
    body: 'A healthier Honolulu where every person — regardless of income, language, or background — can thrive with dignity, compassion, and comprehensive care close to home.',
  },
  values: {
    title: 'Our Values',
    icon: 'i-lucide-heart',
    body: 'We lead with aloha, equity, integrity, and collaboration. We honor culture, listen first, and partner with patients and community to remove barriers to wellness.',
  },
}
</script>

<template>
  <div>
    <HeroBanner
      badge="Get to know about us"
      title="About Kalihi–Palama Health Center"
      description="We provide comprehensive, high-quality medical care to support the well-being of our community."
    />

    <section class="bg-white py-section">
      <div class="mx-auto grid w-full max-w-(--ui-container) items-center gap-10 px-gutter sm:px-gutter-lg lg:grid-cols-2 lg:gap-16">
        <div>
          <AccentTitle
            title="More Than a Clinic - A Community Home"
            accent="A Community Home"
            class="text-3xl sm:text-4xl"
          />
          <p class="mt-5 text-base leading-relaxed text-zinc-600 text-pretty sm:text-lg">
            Kalihi-Palama Health Center is an independent 501(c)(3) non-profit Federally Qualified Health Center serving the Kalihi-Palama community in Honolulu, Hawaii. We care for more than 20,000 patients each year with medical, dental, behavioral health, and social services under one roof.
          </p>
          <p class="mt-3 text-base leading-relaxed text-zinc-600 text-pretty sm:text-lg">
            Our doors are open to everyone — including those who are uninsured or underinsured — with sliding fee scales and culturally competent care.
          </p>
          <UButton
            label="Explore Our Services"
            to="/services"
            color="primary"
            size="xl"
            class="mt-8"
          />
        </div>

        <div class="relative">
          <ImageSkeleton
            class="aspect-[4/3] w-full"
            label="KPHC staff photo placeholder"
          />
          <div class="absolute bottom-4 left-4 flex items-center gap-3 rounded-xl bg-green-900 px-4 py-3 text-white shadow-lg sm:bottom-6 sm:left-6">
            <UIcon
              name="i-lucide-phone"
              class="size-5 shrink-0"
            />
            <div>
              <a
                href="tel:+18088481438"
                class="block text-sm font-semibold tracking-wide"
              >
                808-848-1438
              </a>
              <p class="text-xs text-green-100">
                Connect through the Physician's exchange.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white pb-section">
      <div class="mx-auto w-full max-w-(--ui-container) px-gutter sm:px-gutter-lg">
        <AccentTitle
          title="Kalihi-Palama History"
          accent="History"
          class="text-3xl sm:text-4xl"
          align="center"
        />

        <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          <article
            v-for="card in historyCards"
            :key="card.title"
            class="rounded-2xl p-6 sm:p-7"
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

    <section class="bg-green-50 py-section">
      <div class="mx-auto grid w-full max-w-(--ui-container) items-center gap-10 px-gutter sm:px-gutter-lg lg:grid-cols-2 lg:gap-16">
        <ImageSkeleton
          class="aspect-[4/3] w-full"
          label="Patient care photo placeholder"
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
            class="mt-8"
            role="tabpanel"
          >
            <div class="flex size-12 items-center justify-center rounded-xl bg-primary text-white">
              <UIcon
                :name="missionContent[activeTab].icon"
                class="size-6"
              />
            </div>
            <h3 class="mt-5 text-2xl font-semibold text-zinc-950">
              {{ missionContent[activeTab].title }}
            </h3>
            <p class="mt-3 text-base leading-relaxed text-zinc-600 text-pretty sm:text-lg">
              {{ missionContent[activeTab].body }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <PageCta />
  </div>
</template>
