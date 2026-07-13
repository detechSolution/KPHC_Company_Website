<script setup lang="ts">
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

    <section class="bg-white py-section">
      <div class="mx-auto grid w-full max-w-(--ui-container) items-start gap-10 px-gutter sm:px-gutter-lg lg:grid-cols-2 lg:gap-16">
        <div>
          <AccentTitle
            title="Your Gift Powers Quality Care for All"
            accent="Quality Care for All"
            class="text-3xl sm:text-4xl"
          />
          <div class="mt-5 space-y-4 text-base leading-relaxed text-zinc-600 text-pretty sm:text-lg">
            <p>
              As a nonprofit Federally Qualified Health Center, KPHC relies on community support to keep care accessible for every neighbor — regardless of income or insurance status.
            </p>
            <p>
              Your donation helps fund medical, dental, behavioral health, WIC, and outreach programs that serve more than 20,000 patients each year.
            </p>
            <p>
              Contributions are tax-deductible to the extent allowed by law. Thank you for investing in healthier lives across Kalihi-Palama and greater Honolulu.
            </p>
          </div>
          <UButton
            label="Donate Here"
            color="primary"
            size="xl"
            class="mt-8"
          />
        </div>

        <article class="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
          <div class="flex items-center gap-3">
            <div class="flex size-11 items-center justify-center rounded-xl bg-green-50 text-primary">
              <UIcon
                name="i-lucide-mail"
                class="size-5"
              />
            </div>
            <h3 class="text-xl font-semibold text-zinc-950">
              Mail Your Donation
            </h3>
          </div>
          <p class="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base">
            Make checks payable to Kalihi-Palama Health Center and mail to:
          </p>
          <CalloutBox class="mt-5">
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

    <section class="bg-green-50 py-section">
      <div class="mx-auto flex w-full max-w-(--ui-container) flex-col items-center px-gutter text-center sm:px-gutter-lg">
        <h2 class="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
          Every Dollar Makes a Difference
        </h2>
        <p class="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 text-pretty sm:text-lg">
          Your gift helps ensure our community can access quality health care — regardless of income.
        </p>
        <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
          <UButton
            label="Donate Here"
            color="primary"
            size="xl"
          />
          <UButton
            label="Learn About Our Mission"
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
