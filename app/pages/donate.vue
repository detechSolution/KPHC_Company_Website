<script setup lang="ts">
import { PAYPAL_DONATE_URL } from '~/utils/external-links'

useSeoMeta({
  title: 'Donate | Kalihi-Palama Health Center',
  description: 'Donate now to make a difference in our programs, community, and someone\'s life.',
})
</script>

<template>
  <div>
    <HeroBanner
      badge="Support Our Mission"
      title="Make a Difference in Our Community"
      description="Donate now to make a difference in our program, community and someone's life."
    />

    <section class="bg-white py-section-sm sm:py-section">
      <div class="mx-auto grid w-full max-w-(--ui-container) items-start gap-split px-gutter sm:px-gutter-lg lg:grid-cols-2 lg:gap-split-lg">
        <div>
          <AccentTitle
            title="Your Gift Powers Quality Care for All"
            accent="Quality Care for All"
            class="text-3xl sm:text-4xl"
          />
          <div class="mt-stack space-y-4 text-base leading-relaxed text-zinc-600 text-pretty sm:text-lg">
            <p>
              As a nonprofit Federally Qualified Health Center, KPHC relies on community support to keep care accessible for every neighbor — regardless of income or insurance status.
            </p>
            <p>
              Your donation helps fund medical, dental, behavioral health, WIC, and outreach programs that serve more than 20,000 patients each year.
            </p>
            <p>
              You can give online securely through PayPal or mail a check using the address below. Contributions are tax-deductible to the extent allowed by law.
            </p>
            <p>
              Thank you for investing in healthier lives across Kalihi-Palama and greater Honolulu.
            </p>
          </div>
          <UButton
            label="Donate Here"
            :to="PAYPAL_DONATE_URL"
            target="_blank"
            rel="noopener noreferrer"
            color="primary"
            size="xl"
            class="mt-stack-lg"
          />
        </div>

        <article class="rounded-card border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
          <div class="flex items-center gap-stack-sm">
            <div class="flex size-12 shrink-0 items-center justify-center rounded-xl bg-green-50 text-primary">
              <UIcon
                name="i-lucide-mail"
                class="size-6"
              />
            </div>
            <h3 class="text-xl font-semibold text-zinc-950">
              Mail Your Donation
            </h3>
          </div>
          <p class="mt-stack-sm text-sm leading-relaxed text-zinc-600 sm:text-base">
            Make checks payable to Kalihi-Palama Health Center and mail to:
          </p>
          <CalloutBox class="mt-stack">
            <p class="font-semibold text-zinc-950">
              Kalihi-Palama Health Center
            </p>
            <p class="mt-3 flex gap-2.5">
              <UIcon
                name="i-lucide-map-pin"
                class="mt-0.5 size-4 shrink-0 text-primary"
              />
              <span>Administration P.O. Box 17460<br>Honolulu, HI 96817</span>
            </p>
            <p class="mt-3 flex gap-2.5">
              <UIcon
                name="i-lucide-user"
                class="mt-0.5 size-4 shrink-0 text-primary"
              />
              <span>Attention: Darrin Sato, LCSW</span>
            </p>
          </CalloutBox>
        </article>
      </div>
    </section>

    <section class="bg-green-50 py-section-sm sm:py-section">
      <div class="mx-auto flex w-full max-w-(--ui-container) flex-col items-center px-gutter text-center sm:px-gutter-lg">
        <h2 class="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
          Every Dollar Makes a Difference
        </h2>
        <p class="mt-stack max-w-2xl text-base leading-relaxed text-zinc-600 text-pretty sm:text-lg">
          Your gift helps ensure our community can access quality health care — regardless of income.
        </p>
        <div class="mt-stack-lg flex w-full flex-col items-stretch gap-stack-sm sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
          <UButton
            label="Donate Here"
            :to="PAYPAL_DONATE_URL"
            target="_blank"
            rel="noopener noreferrer"
            color="primary"
            size="xl"
            class="w-full justify-center sm:w-auto"
          />
          <UButton
            label="Learn About Our Mission"
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
