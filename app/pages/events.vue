<script setup lang="ts">
import {
  churchPartners,
  eventPictures,
  friendSponsors,
  kphcPresidents,
  longServingEmployees,
  otherContributors,
  specialMahalo,
  tierSponsors,
} from '~/utils/events-content'

usePageSeo({
  title: 'Events',
  description: 'Thank you for making the Kalihi-Palama Health Center 50th Anniversary Gala a success — honoring our people, partners, and community.',
})

const tierLabelClass: Record<'gold' | 'silver' | 'bronze', string> = {
  gold: 'text-amber-700',
  silver: 'text-zinc-500',
  bronze: 'text-orange-800',
}
</script>

<template>
  <div>
    <HeroBanner
      badge="50th Anniversary"
      badge-icon="i-lucide-sparkles"
      title="Kalihi-Palama Health Center Anniversary Gala"
      accent="Anniversary Gala"
      description="Celebrating 50 years of compassion, community, and care."
    />

    <section class="bg-white py-section-sm sm:py-section">
      <div class="mx-auto flex w-full max-w-3xl flex-col items-center px-gutter text-center sm:px-gutter-lg">
        <AccentTitle
          title="Thank You for Making Our Gala a Success"
          accent="Thank You"
          align="center"
          class="text-3xl sm:text-4xl"
        />
        <div class="mt-stack space-y-4 text-base leading-relaxed text-zinc-600 text-pretty sm:text-lg">
          <p>
            Dear KPHC 50 Years Anniversary Gala Guests,
          </p>
          <p>
            What an unforgettable evening. Because of your generosity, we raised over
            <span class="font-semibold text-zinc-950">$102,450</span>
            to further our mission of providing quality integrated health and social services to our community.
          </p>
          <p>
            With heartfelt appreciation,<br>
            The Kalihi-Palama Health Center Team
          </p>
        </div>
      </div>
    </section>

    <section class="bg-green-50 py-section-sm sm:py-section">
      <div class="mx-auto w-full max-w-(--ui-container) px-gutter sm:px-gutter-lg">
        <AccentTitle
          title="Honoring Our People"
          accent="Honoring"
          align="center"
          class="text-3xl sm:text-4xl"
        />
        <p class="mx-auto mt-stack max-w-2xl text-center text-base leading-relaxed text-zinc-600 text-pretty sm:text-lg">
          We celebrate long-serving team members and the presidents who helped guide KPHC through five decades of care.
        </p>

        <div class="mt-stack-lg grid gap-grid sm:mt-stack-xl lg:grid-cols-2 lg:gap-gutter">
          <article class="rounded-card border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
            <h3 class="text-center text-lg font-semibold tracking-wide text-zinc-950 uppercase sm:text-xl">
              Long Serving Employees
            </h3>
            <ul class="mt-stack divide-y divide-zinc-100">
              <li
                v-for="employee in longServingEmployees"
                :key="`${employee.year}-${employee.name}`"
                class="flex items-baseline justify-between gap-4 py-3 text-sm sm:text-base"
              >
                <span class="font-medium text-zinc-950">
                  {{ employee.name }}
                </span>
                <span class="shrink-0 tabular-nums text-primary">
                  {{ employee.year }}
                </span>
              </li>
            </ul>
          </article>

          <article class="rounded-card border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
            <h3 class="text-center text-lg font-semibold tracking-wide text-zinc-950 uppercase sm:text-xl">
              KPHC Presidents
            </h3>
            <ul class="mt-stack space-y-3 text-center">
              <li
                v-for="president in kphcPresidents"
                :key="president"
                class="text-base text-zinc-700 sm:text-lg"
              >
                {{ president }}
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-white py-section-sm sm:py-section">
      <div class="mx-auto w-full max-w-(--ui-container) px-gutter sm:px-gutter-lg">
        <AccentTitle
          title="Church Partners"
          accent="Partners"
          align="center"
          class="text-3xl sm:text-4xl"
        />
        <p class="mx-auto mt-stack max-w-2xl text-center text-base leading-relaxed text-zinc-600 text-pretty sm:text-lg">
          Faith communities that helped plant and grow Kalihi-Palama Health Center.
        </p>

        <div class="mt-stack-lg grid gap-split sm:mt-stack-xl lg:grid-cols-2 lg:gap-split-lg">
          <figure
            v-for="church in churchPartners"
            :key="church.id"
            class="flex flex-col"
          >
            <div class="relative aspect-[4/3] w-full overflow-hidden rounded-card bg-green-50">
              <img
                :src="church.image"
                :alt="church.alt"
                class="absolute inset-0 size-full object-cover"
                loading="lazy"
                decoding="async"
                width="1400"
                height="1050"
              >
            </div>
            <figcaption class="mt-stack space-y-2 px-1 text-center">
              <p class="text-sm font-semibold tracking-wide text-primary uppercase">
                {{ church.name }}
              </p>
              <p class="text-sm font-medium leading-relaxed tracking-wide text-zinc-800 uppercase text-pretty sm:text-base">
                {{ church.caption }}
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section class="bg-green-50 py-section-sm sm:py-section">
      <div class="mx-auto w-full max-w-(--ui-container) px-gutter sm:px-gutter-lg">
        <h2 class="text-center text-2xl font-semibold tracking-wide text-zinc-950 uppercase sm:text-3xl">
          Event Pictures
        </h2>
        <p class="mx-auto mt-stack max-w-2xl text-center text-base leading-relaxed text-zinc-600 text-pretty sm:text-lg">
          Moments from our Anniversary Gala — stage performances, cultural celebrations, and awards on the evening we honored five decades of care.
        </p>
        <div class="mt-stack-lg sm:mt-stack-xl">
          <EventsPicturesCarousel :items="eventPictures" />
        </div>
      </div>
    </section>

    <section class="bg-white py-section-sm sm:py-section">
      <div class="mx-auto w-full max-w-(--ui-container) px-gutter sm:px-gutter-lg">
        <AccentTitle
          title="Mahalo to Our Sponsors"
          accent="Mahalo"
          align="center"
          class="text-3xl sm:text-4xl"
        />
        <p class="mx-auto mt-stack max-w-2xl text-center text-base leading-relaxed text-zinc-600 text-pretty sm:text-lg">
          We are grateful for every partner who helped make this celebration possible.
        </p>

        <div class="mt-stack-lg grid gap-grid sm:mt-stack-xl sm:grid-cols-3">
          <div
            v-for="tier in tierSponsors"
            :key="tier.tier"
            class="flex flex-col items-center rounded-card border border-zinc-200 bg-white p-6 shadow-sm sm:p-8"
          >
            <p
              class="text-xs font-semibold tracking-[0.2em] uppercase"
              :class="tierLabelClass[tier.tier]"
            >
              {{ tier.label }}
            </p>
            <ul class="mt-stack flex w-full flex-col items-center gap-4">
              <li
                v-for="partner in tier.partners"
                :key="partner.name"
                class="flex min-h-24 w-full items-center justify-center sm:min-h-28"
              >
                <img
                  :src="partner.src"
                  :alt="partner.alt"
                  class="max-h-24 w-full object-contain sm:max-h-28"
                  loading="lazy"
                  decoding="async"
                >
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-stack-xl">
          <h3 class="text-center text-sm font-semibold tracking-[0.2em] text-zinc-500 uppercase">
            Friends
          </h3>
          <ul class="mt-stack grid grid-cols-1 gap-grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <li
              v-for="partner in friendSponsors"
              :key="partner.name"
              class="flex items-center justify-center rounded-card border border-zinc-200 bg-white p-5 shadow-sm sm:p-6"
              :class="partner.large ? 'min-h-40 sm:min-h-44 sm:col-span-1' : 'min-h-28 sm:min-h-32'"
            >
              <img
                :src="partner.src"
                :alt="partner.alt"
                class="w-full object-contain"
                :class="partner.large ? 'max-h-36 sm:max-h-40' : 'max-h-20 sm:max-h-24'"
                loading="lazy"
                decoding="async"
              >
            </li>
          </ul>
        </div>

        <div class="mt-stack-xl border-t border-zinc-200 pt-stack-lg text-center">
          <h3 class="text-sm font-semibold tracking-[0.2em] text-zinc-500 uppercase">
            Other Significant Contributors
          </h3>
          <p class="mt-stack-sm text-base font-medium text-zinc-950">
            {{ otherContributors.join(', ') }}
          </p>
        </div>

        <div class="mt-stack-lg border-t border-zinc-200 pt-stack-lg text-center">
          <h3 class="text-sm font-semibold tracking-[0.2em] text-zinc-500 uppercase">
            Special Mahalo
          </h3>
          <p class="mx-auto mt-stack-sm max-w-3xl text-base leading-relaxed text-zinc-700 text-pretty">
            {{ specialMahalo.join(' · ') }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
