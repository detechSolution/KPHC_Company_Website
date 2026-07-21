<script setup lang="ts">
import {
  HI_WIC_APPLY_URL,
  HIPAA_NOTICE_PDF,
  WIC_PHONE,
  WIC_PHONE_HREF,
} from '~/utils/external-links'
import {
  wicClinic,
  wicDocumentGroups,
  wicEnrollmentReminders,
  wicFax,
  wicIntro,
  wicMailingAddress,
  wicMessagingPrivacy,
  wicMessagingTerms,
  wicQualification,
  wicServices,
} from '~/utils/services-content'

usePageSeo({
  title: 'Women, Infants, and Children (WIC)',
  description: 'WIC helps Hawaii families eat well, stay active, and stay healthy — with nutrition education, breastfeeding support, and food benefits for eligible women, infants, and children.',
})
</script>

<template>
  <div>
    <HeroBanner
      align="start"
      eyebrow="KPHC SERVICES"
      eyebrow-icon="i-lucide-shopping-cart"
      title="Women, Infants, and Children (WIC)"
      description="Nutrition support for families who qualify — eat well, be active, and stay healthy"
    />

    <section class="bg-white py-section-sm sm:py-section">
      <div class="mx-auto grid w-full max-w-(--ui-container) items-start gap-split px-gutter sm:px-gutter-lg lg:grid-cols-2 lg:gap-split-lg">
        <div>
          <SectionTitle
            title="Women, Infants, and Children (WIC) at Kalihi-Palama Health Center"
            class="text-3xl sm:text-4xl"
          />
          <div class="mt-5 space-y-4 text-base leading-relaxed text-zinc-600 text-pretty sm:text-lg">
            <p
              v-for="paragraph in wicIntro"
              :key="paragraph"
            >
              {{ paragraph }}
            </p>
          </div>
          <CalloutBox
            title="Qualification"
            class="mt-6"
          >
            <p class="mb-3">
              To qualify for Hawaii WIC services, you must:
            </p>
            <ul class="space-y-2">
              <li
                v-for="item in wicQualification"
                :key="item"
                class="flex gap-2"
              >
                <UIcon
                  name="i-lucide-check"
                  class="mt-0.5 size-4 shrink-0 text-primary"
                />
                <span>{{ item }}</span>
              </li>
            </ul>
          </CalloutBox>
        </div>

        <img
          src="/images/home/wic.webp"
          alt="Smiling child receiving WIC nutrition support at Kalihi-Palama Health Center"
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
          How to Become a WIC Client
        </h2>
        <ul class="mt-5 space-y-2.5 text-base text-zinc-600">
          <li class="flex gap-2">
            <UIcon
              name="i-lucide-check"
              class="mt-0.5 size-4 shrink-0 text-primary"
            />
            <span>
              Call
              <a
                :href="WIC_PHONE_HREF"
                class="font-medium text-primary hover:underline"
              >{{ WIC_PHONE }}</a>
              to set up an appointment, or
              <a
                :href="HI_WIC_APPLY_URL"
                target="_blank"
                rel="noopener noreferrer"
                class="font-medium text-primary hover:underline"
              >apply online at hiwic.org/apply</a>.
            </span>
          </li>
        </ul>

        <div class="mt-stack-lg grid gap-8 lg:grid-cols-3">
          <div
            v-for="group in wicDocumentGroups"
            :key="group.title"
          >
            <h3 class="text-lg font-semibold text-zinc-950">
              {{ group.title }}
            </h3>
            <ul class="mt-3 space-y-2 text-base text-zinc-600">
              <li
                v-for="example in group.examples"
                :key="example"
                class="flex gap-2"
              >
                <UIcon
                  name="i-lucide-check"
                  class="mt-0.5 size-4 shrink-0 text-primary"
                />
                <span>{{ example }}</span>
              </li>
            </ul>
          </div>
        </div>

        <ul class="mt-8 space-y-2.5 text-base text-zinc-600">
          <li
            v-for="item in wicEnrollmentReminders"
            :key="item"
            class="flex gap-2"
          >
            <UIcon
              name="i-lucide-check"
              class="mt-0.5 size-4 shrink-0 text-primary"
            />
            <span>{{ item }}</span>
          </li>
        </ul>

        <div class="mt-stack-xl flex flex-wrap gap-3">
          <UButton
            :to="WIC_PHONE_HREF"
            icon="i-lucide-phone"
            :label="`Call us at ${WIC_PHONE}`"
            size="xl"
            color="neutral"
            :ui="{
              base: 'bg-green-900 text-white hover:bg-green-800 disabled:bg-green-900',
            }"
          />
          <UButton
            :href="HI_WIC_APPLY_URL"
            target="_blank"
            rel="noopener noreferrer"
            icon="i-lucide-square-arrow-out-up-right"
            label="Apply Online"
            size="xl"
            color="primary"
            variant="outline"
          />
        </div>
      </div>
    </section>

    <section class="bg-green-50 py-section-sm sm:py-section">
      <div class="mx-auto w-full max-w-(--ui-container) px-gutter sm:px-gutter-lg">
        <h2 class="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
          WIC Services
        </h2>
        <ul class="mt-6 grid gap-2.5 sm:grid-cols-2">
          <li
            v-for="service in wicServices"
            :key="service"
            class="flex gap-2 text-base text-zinc-600"
          >
            <UIcon
              name="i-lucide-check"
              class="mt-0.5 size-4 shrink-0 text-primary"
            />
            <span>{{ service }}</span>
          </li>
        </ul>
      </div>
    </section>

    <section class="bg-white py-section-sm sm:py-section">
      <div class="mx-auto w-full max-w-(--ui-container) px-gutter sm:px-gutter-lg">
        <h2 class="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
          Location & Hours
        </h2>
        <div class="mt-stack-lg grid gap-6 lg:grid-cols-2">
          <ClinicCard
            v-bind="wicClinic"
            :phone-href="WIC_PHONE_HREF"
            :details="[
              `Fax: ${wicFax}`,
              `Mailing address: ${wicMailingAddress}`,
            ]"
          />
        </div>
      </div>
    </section>

    <section class="bg-green-50 py-section-sm sm:py-section">
      <div class="mx-auto w-full max-w-(--ui-container) space-y-8 px-gutter sm:px-gutter-lg">
        <div>
          <h2 class="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
            WIC Privacy Policy
          </h2>
          <h3 class="mt-stack text-lg font-semibold text-zinc-950">
            Messaging Privacy Policy
          </h3>
          <p class="mt-3 max-w-3xl text-base leading-relaxed text-zinc-600 text-pretty">
            {{ wicMessagingPrivacy }}
          </p>
        </div>

        <div>
          <h3 class="text-lg font-semibold text-zinc-950">
            Messaging Terms & Conditions
          </h3>
          <p class="mt-3 max-w-3xl text-base leading-relaxed text-zinc-600 text-pretty">
            {{ wicMessagingTerms }}
          </p>
          <a
            :href="HIPAA_NOTICE_PDF"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-4 inline-flex items-center gap-1.5 text-base font-medium text-primary hover:underline"
          >
            View KPHC's full HIPAA Notice of Privacy Practices
            <UIcon
              name="i-lucide-square-arrow-out-up-right"
              class="size-3.5 shrink-0"
            />
          </a>
        </div>
      </div>
    </section>

    <PageCta
      title="Ready to Apply for WIC?"
      description="Call our WIC team to schedule an appointment, or apply online through the Hawaii WIC program."
      primary-label="Call WIC"
      :primary-to="WIC_PHONE_HREF"
      secondary-label="Apply Online"
      :secondary-href="HI_WIC_APPLY_URL"
    />
  </div>
</template>
