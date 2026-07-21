<script setup lang="ts">
const props = defineProps<{
  error: {
    statusCode?: number
    statusMessage?: string
    message?: string
  }
}>()

const router = useRouter()

const isNotFound = computed(() => props.error.statusCode === 404)

const statusLabel = computed(() => String(props.error.statusCode ?? 'Error'))

const title = computed(() =>
  isNotFound.value ? 'This Page Isn\'t Available' : 'Something Went Wrong',
)

const description = computed(() =>
  isNotFound.value
    ? 'The link may be outdated or the page may have moved. Let\'s get you back on track.'
    : 'We hit an unexpected snag. You can go back or return to our homepage to continue browsing.',
)

const icon = computed(() =>
  isNotFound.value ? 'i-lucide-compass' : 'i-lucide-circle-alert',
)

useSeoMeta({
  title: () => `${isNotFound.value ? 'Page Not Found' : 'Error'} | Kalihi-Palama Health Center`,
  description: () => description.value,
  robots: 'noindex, nofollow',
})

function goBack() {
  if (import.meta.client && window.history.length > 1) {
    router.back()
    return
  }
  navigateTo('/')
}
</script>

<template>
  <section
    class="error-page relative overflow-hidden bg-gradient-to-b from-green-50 via-green-50/40 to-white"
    aria-labelledby="error-title"
  >
    <div
      class="pointer-events-none absolute inset-0"
      aria-hidden="true"
    >
      <div class="absolute -top-24 left-1/2 size-[32rem] -translate-x-1/2 rounded-full bg-green-100/50 blur-3xl" />
      <div class="absolute top-20 -right-16 size-64 rounded-full bg-green-50/80 blur-2xl" />
      <div class="absolute bottom-0 -left-16 size-56 rounded-full bg-green-100/40 blur-2xl" />
    </div>

    <div class="relative z-10 mx-auto flex min-h-[min(70vh,40rem)] w-full max-w-2xl flex-col items-center justify-center px-gutter py-section-sm text-center sm:px-gutter-lg sm:py-section-lg">
      <div
        class="flex size-16 items-center justify-center rounded-2xl bg-white text-primary shadow-sm ring-1 ring-green-100 sm:size-20"
        aria-hidden="true"
      >
        <UIcon
          :name="icon"
          class="size-8 sm:size-9"
        />
      </div>

      <p class="mt-stack-lg text-sm font-semibold tracking-[0.2em] text-primary uppercase">
        {{ statusLabel }}
      </p>

      <p
        class="mt-stack-sm text-7xl leading-none font-bold tracking-tight text-primary sm:text-8xl"
        aria-hidden="true"
      >
        {{ isNotFound ? '404' : statusLabel }}
      </p>

      <h1
        id="error-title"
        class="mt-stack text-3xl font-semibold tracking-tight text-zinc-950 text-balance sm:text-4xl"
      >
        {{ title }}
      </h1>

      <p class="mt-stack max-w-lg text-base leading-relaxed text-zinc-600 text-pretty sm:text-lg">
        {{ description }}
      </p>

      <div class="mt-stack-lg flex w-full flex-col items-stretch gap-stack-sm sm:w-auto sm:flex-row sm:items-center sm:justify-center">
        <UButton
          label="Go Back"
          color="primary"
          variant="outline"
          size="xl"
          icon="i-lucide-arrow-left"
          class="w-full justify-center sm:w-auto"
          @click="goBack"
        />
        <UButton
          label="Back to Home"
          to="/"
          color="primary"
          size="xl"
          icon="i-lucide-house"
          class="w-full justify-center sm:w-auto"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (prefers-reduced-motion: reduce) {
  .error-page {
    background: var(--color-green-50);
  }
}
</style>
