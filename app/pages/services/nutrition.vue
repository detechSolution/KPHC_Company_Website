<script setup lang="ts">
import { BOOK_APPOINTMENT_HREF, NUTRITION_PHONE, NUTRITION_PHONE_HREF } from '~/utils/external-links'
import {
  nutritionClassSessions,
  nutritionClassTopics,
  nutritionResourceGroups,
} from '~/utils/services-content'

useSeoMeta({
  title: 'Nutrition | Kalihi-Palama Health Center',
  description: 'ADA-recognized diabetes self-management education and registered dietitian nutrition counseling at Kalihi-Palama Health Center.',
})
</script>

<template>
  <div>
    <HeroBanner
      align="start"
      eyebrow="KPHC SERVICES"
      eyebrow-icon="i-lucide-salad"
      title="Nutrition"
      description="Diabetes education and personalized nutrition counseling for healthier everyday living"
    />

    <section class="bg-white py-section-sm sm:py-section">
      <div class="mx-auto grid w-full max-w-(--ui-container) items-start gap-split px-gutter sm:px-gutter-lg lg:grid-cols-2 lg:gap-split-lg">
        <div>
          <AccentTitle
            title="Nutrition & Diabetes Education at Kalihi-Palama Health Center"
            accent="Nutrition & Diabetes Education"
            class="text-3xl sm:text-4xl"
          />
          <div class="mt-5 space-y-4 text-base leading-relaxed text-zinc-600 text-pretty sm:text-lg">
            <p>
              KPHC is a recognized Diabetes Self-Management Education Program by the American Diabetes Association. We offer diabetes classes for patients with prediabetes or diabetes, and for anyone who wants to learn more about prevention.
            </p>
            <p>
              Classes are taught by a Registered Dietitian and a Registered Nurse. Each series includes two sessions, and every class ends with a food demonstration and tasting for all participants.
            </p>
          </div>
          <CalloutBox
            title="Program Coordinator"
            class="mt-6"
          >
            <p class="font-semibold text-zinc-950">
              Maile Ishikawa, RD, CDCES
            </p>
            <p class="mt-1">
              Diabetes Self-Management Education Program Coordinator
            </p>
            <p class="mt-3">
              All KPHC patients are welcome to join. Contact Maile at
              <a
                :href="NUTRITION_PHONE_HREF"
                class="font-medium text-primary hover:underline"
              >{{ NUTRITION_PHONE }}</a>
              for more information, or ask your PCP for a referral to the program.
            </p>
          </CalloutBox>
        </div>

        <img
          src="/images/home/wic.webp"
          alt="Nutrition support and healthy eating education at Kalihi-Palama Health Center"
          class="aspect-[4/3] w-full rounded-card object-cover"
          loading="lazy"
          decoding="async"
          width="800"
          height="600"
        >
      </div>
    </section>

    <section class="bg-white pb-section-sm sm:pb-section">
      <div class="mx-auto w-full max-w-(--ui-container) px-gutter sm:px-gutter-lg">
        <h2 class="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
          Diabetes Self-Management Classes
        </h2>
        <p class="mt-4 max-w-3xl text-base leading-relaxed text-zinc-600 text-pretty">
          Sessions cover practical topics that help you manage diabetes day to day. Information is split across two class meetings.
        </p>

        <ul class="mt-6 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          <li
            v-for="topic in nutritionClassTopics"
            :key="topic"
            class="flex gap-2 text-base text-zinc-600"
          >
            <UIcon
              name="i-lucide-check"
              class="mt-0.5 size-4 shrink-0 text-primary"
            />
            <span>{{ topic }}</span>
          </li>
        </ul>

        <div class="mt-stack-xl grid gap-8 lg:grid-cols-2">
          <div>
            <h3 class="text-xl font-semibold text-zinc-950 sm:text-2xl">
              Typical class schedule
            </h3>
            <p class="mt-3 text-base leading-relaxed text-zinc-600 text-pretty">
              Classes are usually held on Tuesdays from 1:00–4:00 PM in two-session series. Call for current dates.
            </p>
            <ul class="mt-5 space-y-2.5 text-base text-zinc-600">
              <li
                v-for="month in nutritionClassSessions"
                :key="month"
                class="flex gap-2"
              >
                <UIcon
                  name="i-lucide-calendar"
                  class="mt-0.5 size-4 shrink-0 text-primary"
                />
                <span>{{ month }} (two consecutive Tuesdays)</span>
              </li>
            </ul>
          </div>

          <CalloutBox title="Language Access">
            Chuukese, Filipino, and Chinese classes are available. Call for the specific dates of language-specific sessions.
          </CalloutBox>
        </div>

        <UButton
          :to="NUTRITION_PHONE_HREF"
          icon="i-lucide-phone"
          :label="`Call Maile at ${NUTRITION_PHONE}`"
          size="xl"
          color="neutral"
          class="mt-stack-xl"
          :ui="{
            base: 'bg-green-900 text-white hover:bg-green-800 disabled:bg-green-900',
          }"
        />
      </div>
    </section>

    <section class="bg-green-50 py-section-sm sm:py-section">
      <div class="mx-auto w-full max-w-(--ui-container) px-gutter sm:px-gutter-lg">
        <h2 class="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
          What Is a Registered Dietitian?
        </h2>
        <div class="mt-5 max-w-3xl space-y-4 text-base leading-relaxed text-zinc-600 text-pretty">
          <p>
            Registered dietitians (RDs) are food and nutrition experts. All registered dietitians are nutritionists, but not all nutritionists are registered dietitians. RDs are the only nutrition professionals who are regulated by law and governed by an ethical code to ensure they provide the best care.
          </p>
          <p>
            A Registered Dietitian can help manage chronic diseases such as diabetes, high blood pressure, high cholesterol, kidney disease, cancer, heart failure, and more.
          </p>
          <p>
            When you first see your RD, the last thing you'll get is a one-size-fits-all diet. Your dietitian gets to know your eating habits and behaviors to make a tailored plan that will most effectively help you.
          </p>
        </div>
      </div>
    </section>

    <section class="bg-white py-section-sm sm:py-section">
      <div class="mx-auto w-full max-w-(--ui-container) px-gutter sm:px-gutter-lg">
        <h2 class="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
          Resources
        </h2>
        <p class="mt-4 max-w-3xl text-base leading-relaxed text-zinc-600 text-pretty">
          Trusted organizations for diabetes, nutrition, heart health, and kidney care.
        </p>

        <div class="mt-stack-lg grid gap-8 sm:grid-cols-2">
          <div
            v-for="group in nutritionResourceGroups"
            :key="group.title"
          >
            <h3 class="text-lg font-semibold text-zinc-950">
              {{ group.title }}
            </h3>
            <ul class="mt-3 space-y-2">
              <li
                v-for="link in group.links"
                :key="link.href"
              >
                <a
                  :href="link.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1.5 text-base text-primary hover:underline"
                >
                  {{ link.label }}
                  <UIcon
                    name="i-lucide-external-link"
                    class="size-3.5 shrink-0"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <PageCta
      title="Ready to Learn More About Nutrition?"
      description="Ask your primary care provider for a referral, or call our Diabetes Self-Management Education Program Coordinator to join a class."
      primary-label="Call Program Coordinator"
      :primary-to="NUTRITION_PHONE_HREF"
      secondary-label="Book an Appointment"
      :secondary-href="BOOK_APPOINTMENT_HREF"
    />
  </div>
</template>
