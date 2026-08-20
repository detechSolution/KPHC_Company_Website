<script setup lang="ts">
import { NEW_TAB_SUFFIX } from '~/utils/a11y'
import { HIPAA_NOTICE_PDF, MAIN_PHONE, MAIN_PHONE_HREF } from '~/utils/external-links'

usePageSeo({
  title: 'Accessibility',
  description: 'Kalihi-Palama Health Center is committed to making our website usable for everyone, including people who use a keyboard or a screen reader.',
})
</script>

<template>
  <div>
    <HeroBanner
      badge="Accessibility"
      badge-icon="i-lucide-accessibility"
      title="This Website Is for Everyone"
      description="We want community members to find care information here — whether you use a mouse, a keyboard, a screen reader, or other assistive tools."
    />

    <section class="bg-white py-section-sm sm:py-section">
      <div class="mx-auto flex w-full max-w-3xl flex-col gap-stack-lg px-gutter sm:px-gutter-lg">
        <div class="space-y-4 text-base leading-relaxed text-zinc-600 text-pretty sm:text-lg">
          <SectionTitle
            title="Making this website easier to use"
            class="text-3xl sm:text-4xl"
          />
          <p>
            We work to make this website meet the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA, a common standard for accessible websites. Pages include a “Skip to main content” link, clear headings, and text that describes images and buttons.
          </p>
        </div>

        <div class="space-y-4 text-base leading-relaxed text-zinc-600 text-pretty sm:text-lg">
          <h2 class="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
            What you can expect
          </h2>
          <ul class="list-disc space-y-2 ps-5">
            <li>Skip past the menu and go straight to the main content</li>
            <li>Text and buttons that stay easy to read, with a clear outline when you use the keyboard</li>
            <li>A pause control on photo slideshows that move on their own</li>
            <li>Descriptions for pictures and for buttons that only show an icon</li>
            <li>A spoken notice when a link will open in a new tab</li>
          </ul>
        </div>

        <div class="space-y-4 text-base leading-relaxed text-zinc-600 text-pretty sm:text-lg">
          <h2 class="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
            Documents and other websites
          </h2>
          <p>
            Our
            <NuxtLink
              to="/resources"
              class="font-medium text-primary hover:underline"
            >
              Resources
            </NuxtLink>
            page explains patient privacy in regular web pages. You can also download the
            <a
              :href="HIPAA_NOTICE_PDF"
              target="_blank"
              rel="noopener noreferrer"
              class="font-medium text-primary hover:underline"
            >HIPAA Notice of Privacy Practices<span class="sr-only">{{ NEW_TAB_SUFFIX }}</span></a>
            as a PDF made to work with screen readers.
          </p>
          <p>
            Some links leave this site — including the Patient Portal, online donations, job applications, and Hawaii WIC. Those pages are run by other organizations.
          </p>
        </div>

        <CalloutBox
          title="Need help using this site?"
          as="h2"
        >
          <p>
            If something on this website is hard to use, email
            <a
              href="mailto:admingroup@kphc.org"
              class="font-medium text-primary hover:underline"
            >admingroup@kphc.org</a>
            or call
            <a
              :href="MAIN_PHONE_HREF"
              class="font-medium text-primary hover:underline"
            >{{ MAIN_PHONE }}</a>.
            Please tell us which page you were on and what did not work. We will help you get the information another way.
          </p>
        </CalloutBox>
      </div>
    </section>
  </div>
</template>
