<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'

export type HeroBannerAlign = 'center' | 'start'
export type HeroBannerVariant = 'soft' | 'solid' | 'plain'
export type HeroBannerSize = 'md' | 'lg'

const props = withDefaults(defineProps<{
  /** Pill badge label (About / Services / Resources / Donate) */
  badge?: string
  badgeIcon?: string
  /** Service-detail eyebrow, e.g. "KPHC SERVICES" */
  eyebrow?: string
  eyebrowIcon?: string
  title: string
  description?: string
  links?: ButtonProps[]
  align?: HeroBannerAlign
  /** soft = mint gradient (homepage), solid = green-50 band, plain = white */
  variant?: HeroBannerVariant
  size?: HeroBannerSize
  images?: { src: string, alt: string }[]
}>(), {
  align: 'center',
  variant: 'solid',
  size: 'md',
  badgeIcon: 'i-lucide-sparkles',
  links: () => [],
  images: () => [],
})

const slots = useSlots()
const titleId = useId()

const isCentered = computed(() => props.align === 'center')

/** Media closes the hero — keep modest bottom padding so the next section’s top padding isn’t doubled. */
const hasMedia = computed(() => props.images.length > 0 || Boolean(slots.default))

const sectionClass = computed(() => [
  'relative overflow-hidden',
  props.variant === 'soft' && 'bg-gradient-to-b from-green-50 via-green-50/40 to-white',
  props.variant === 'solid' && 'bg-green-50',
  props.variant === 'plain' && 'bg-white',
])

const containerClass = computed(() => {
  const isLg = props.size === 'lg'
  const top = isLg ? 'pt-section-sm sm:pt-section-lg' : 'pt-section-sm sm:pt-section'
  const bottom = hasMedia.value
    ? 'pb-stack-lg sm:pb-stack-xl'
    : (isLg ? 'pb-section-sm sm:pb-section-lg' : 'pb-section-sm sm:pb-section')

  return [
    'relative z-10 mx-auto flex w-full max-w-(--ui-container) flex-col px-gutter sm:px-gutter-lg',
    top,
    bottom,
    isCentered.value ? 'items-center text-center' : 'items-start text-left',
  ]
})

const titleClass = computed(() => [
  'max-w-4xl font-semibold tracking-tight text-zinc-950 text-balance',
  props.size === 'lg'
    ? 'text-4xl sm:text-5xl lg:text-6xl leading-[1.15]'
    : 'text-3xl sm:text-4xl lg:text-5xl leading-tight',
])

const descriptionClass = computed(() => [
  'mt-stack text-base sm:text-lg text-zinc-600 text-pretty',
  isCentered.value ? 'max-w-2xl' : 'max-w-xl',
])
</script>

<template>
  <section
    :class="sectionClass"
    :aria-labelledby="titleId"
  >
    <div
      v-if="variant === 'soft'"
      class="pointer-events-none absolute inset-0"
      aria-hidden="true"
    >
      <div class="absolute -top-24 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-green-100/50 blur-3xl" />
      <div class="absolute top-16 -right-20 size-72 rounded-full bg-green-50/80 blur-2xl" />
    </div>

    <div :class="containerClass">
      <div
        v-if="badge"
        class="hero-enter mb-stack inline-flex items-center gap-2 rounded-full bg-green-100 px-3.5 py-1.5 text-sm font-medium text-green-800"
      >
        <UIcon
          v-if="badgeIcon"
          :name="badgeIcon"
          class="size-3.5 shrink-0 text-primary"
        />
        <span>{{ badge }}</span>
      </div>

      <div
        v-else-if="eyebrow"
        class="hero-enter mb-stack inline-flex items-center gap-2"
      >
        <span
          v-if="eyebrowIcon"
          class="inline-flex size-9 items-center justify-center rounded-lg bg-primary text-white"
        >
          <UIcon
            :name="eyebrowIcon"
            class="size-5"
          />
        </span>
        <span class="text-xs font-bold tracking-[0.14em] text-primary uppercase">
          {{ eyebrow }}
        </span>
      </div>

      <h1
        :id="titleId"
        class="hero-enter hero-enter-delay-1"
        :class="titleClass"
      >
        {{ title }}
      </h1>

      <p
        v-if="description"
        class="hero-enter hero-enter-delay-2"
        :class="descriptionClass"
      >
        {{ description }}
      </p>

      <div
        v-if="links.length || $slots.actions"
        class="hero-enter hero-enter-delay-3 mt-stack-lg flex flex-wrap gap-stack-sm"
        :class="isCentered ? 'justify-center' : 'justify-start'"
      >
        <slot name="actions">
          <UButton
            v-for="(link, index) in links"
            :key="index"
            v-bind="link"
            :size="link.size ?? 'xl'"
          />
        </slot>
      </div>

      <div
        v-if="images.length || $slots.default"
        class="hero-enter hero-enter-delay-4 mt-stack-lg w-full sm:mt-stack-xl"
        :class="[
          isCentered ? 'max-w-full' : 'max-w-4xl',
          variant === 'soft' && 'hero-media--soft',
        ]"
      >
        <slot>
          <div class="flex justify-center gap-stack-sm overflow-hidden sm:gap-grid">
            <img
              v-for="(image, index) in images"
              :key="`${image.src}-${index}`"
              :src="image.src"
              :alt="image.alt"
              class="h-48 w-[70%] shrink-0 rounded-card object-cover shadow-md sm:h-64 sm:w-[48%] lg:h-72"
              :class="images.length > 1 && index === 0 ? 'hidden sm:block' : undefined"
              loading="eager"
            >
          </div>
        </slot>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes hero-rise {
  from {
    transform: translateY(0.75rem);
  }

  to {
    transform: translateY(0);
  }
}

.hero-enter {
  animation: hero-rise 0.7s ease-out both;
}

.hero-enter-delay-1 {
  animation-delay: 80ms;
}

.hero-enter-delay-2 {
  animation-delay: 160ms;
}

.hero-enter-delay-3 {
  animation-delay: 240ms;
}

.hero-enter-delay-4 {
  animation-delay: 320ms;
}

.hero-media--soft {
  /* Soft hero fades to white; match carousel edge fades to the page surface. */
  --hero-carousel-fade: #fff;
}

@media (prefers-reduced-motion: reduce) {
  .hero-enter {
    animation: none;
  }
}
</style>
