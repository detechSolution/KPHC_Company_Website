<script setup lang="ts">
export interface HeroCarouselImage {
  src: string
  alt: string
}

const props = withDefaults(defineProps<{
  items?: HeroCarouselImage[]
  /** Autoplay delay in ms */
  delay?: number
}>(), {
  delay: 4500,
  items: () => [
    {
      src: '/images/carousel/display/banner-1.webp',
      alt: 'Kalihi-Palama Health Center care team with patients',
    },
    {
      src: '/images/carousel/display/banner-2.webp',
      alt: 'Community members receiving care at KHPC',
    },
    {
      src: '/images/carousel/display/banner-3.webp',
      alt: 'Healthcare services at Kalihi-Palama Health Center',
    },
    {
      src: '/images/carousel/display/banner-4.webp',
      alt: 'Patients and providers at Kalihi-Palama Health Center',
    },
    {
      src: '/images/carousel/display/banner-5.webp',
      alt: 'Welcoming care at Kalihi-Palama Health Center',
    },
  ],
})

const slotRels = [-2, -1, 0, 1, 2] as const

const offset = ref(0)
const paused = ref(false)
const reduceMotion = ref(false)

useHead(() => ({
  link: props.items.map((item, index) => ({
    rel: 'preload',
    as: 'image',
    href: item.src,
    fetchpriority: index === 0 ? 'high' : 'low',
  })),
}))

function itemAt(rel: number) {
  const count = props.items.length
  if (count === 0)
    return undefined
  const index = ((offset.value + rel) % count + count) % count
  return props.items[index]
}

const visibleSlots = computed(() =>
  slotRels.map(rel => ({
    rel,
    item: itemAt(rel),
    isCenter: rel === 0,
  })),
)

const activeIndex = computed(() => {
  const count = props.items.length
  if (count === 0)
    return 0
  return ((offset.value % count) + count) % count
})

function slotVisibilityClass(rel: number) {
  const abs = Math.abs(rel)
  if (abs === 0)
    return ''
  if (abs === 1)
    return 'hidden sm:block'
  return 'hidden lg:block'
}

function slotSizeClass(rel: number) {
  const abs = Math.abs(rel)
  if (abs === 0) {
    return 'hero-carousel-slide--active aspect-[16/10] w-[min(82vw,36rem)] sm:w-[40vw] lg:w-[42vw] lg:max-w-[42rem]'
  }
  if (abs === 1) {
    return 'hero-carousel-slide--adjacent aspect-[6/7] w-[min(46vw,14rem)] sm:w-[19vw] lg:w-[17vw] lg:max-w-[16rem]'
  }
  return 'hero-carousel-slide--outer aspect-[6/7] w-[min(34vw,11rem)] sm:w-[14vw] lg:w-[12vw] lg:max-w-[12rem]'
}

function goTo(index: number) {
  if (props.items.length === 0)
    return
  offset.value = ((index % props.items.length) + props.items.length) % props.items.length
}

function preloadImages() {
  for (const item of props.items) {
    const img = new Image()
    img.src = item.src
  }
}

function advance() {
  if (paused.value || props.items.length < 2)
    return
  offset.value = (offset.value + 1) % props.items.length
}

let timer: ReturnType<typeof setInterval> | undefined

function start() {
  stop()
  if (reduceMotion.value || props.items.length < 2)
    return
  timer = setInterval(advance, props.delay)
}

function stop() {
  if (timer) {
    clearInterval(timer)
    timer = undefined
  }
}

onMounted(() => {
  reduceMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  preloadImages()
  start()
})

onBeforeUnmount(stop)

watch(() => props.delay, start)
watch(() => props.items, preloadImages, { deep: true })
</script>

<template>
  <div
    class="hero-carousel"
    role="region"
    aria-roledescription="carousel"
    aria-label="Healthcare photo carousel"
    @mouseenter="paused = true"
    @mouseleave="paused = false"
    @focusin="paused = true"
    @focusout="paused = false"
  >
    <div class="hero-carousel__track">
      <div
        v-for="slot in visibleSlots"
        :key="slot.rel"
        class="hero-carousel-slide relative shrink-0 overflow-hidden rounded-card"
        :class="[
          slotVisibilityClass(slot.rel),
          slotSizeClass(slot.rel),
          reduceMotion && 'hero-carousel-slide--reduced-motion',
        ]"
      >
        <Transition name="hero-carousel-image">
          <img
            v-if="slot.item"
            :key="slot.item.src"
            :src="slot.item.src"
            :alt="slot.item.alt"
            class="absolute inset-0 size-full object-cover"
            width="880"
            height="550"
            :loading="slot.isCenter ? 'eager' : 'lazy'"
            decoding="async"
            draggable="false"
          >
        </Transition>
      </div>
    </div>

    <div
      v-if="items.length > 1"
      class="hero-carousel__dots"
      role="tablist"
      aria-label="Carousel slides"
    >
      <button
        v-for="(_, index) in items"
        :key="index"
        type="button"
        role="tab"
        class="hero-carousel__dot"
        :class="index === activeIndex && 'hero-carousel__dot--active'"
        :aria-label="`Go to slide ${index + 1} of ${items.length}`"
        :aria-selected="index === activeIndex"
        @click="goTo(index)"
      />
    </div>
  </div>
</template>

<style scoped>
.hero-carousel {
  position: relative;
  left: 50%;
  width: 100vw;
  max-width: 100vw;
  transform: translateX(-50%);
  overflow: hidden;
}

.hero-carousel__track {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-stack-sm);
  /* Top only — dots own the space below the slides for even rhythm. */
  padding: var(--spacing-stack-sm) 0 0;
  min-height: calc(min(82vw, 36rem) * 10 / 16);
}

@media (min-width: 640px) {
  .hero-carousel__track {
    gap: var(--spacing-grid);
    padding-top: var(--spacing-grid);
    min-height: calc(40vw * 10 / 16);
  }
}

@media (min-width: 1024px) {
  .hero-carousel__track {
    gap: var(--spacing-gutter);
    min-height: calc(min(42vw, 42rem) * 10 / 16);
  }
}

.hero-carousel::before,
.hero-carousel::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: clamp(2rem, 8vw, 5rem);
  z-index: 10;
  pointer-events: none;
}

.hero-carousel::before {
  left: 0;
  background: linear-gradient(to right, var(--hero-carousel-fade, #fff) 15%, transparent);
}

.hero-carousel::after {
  right: 0;
  background: linear-gradient(to left, var(--hero-carousel-fade, #fff) 15%, transparent);
}

.hero-carousel-slide {
  background: linear-gradient(135deg, var(--color-green-100) 0%, var(--color-green-50) 100%);
  transition:
    width 0.8s cubic-bezier(0.4, 0, 0.2, 1),
    aspect-ratio 0.8s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.8s cubic-bezier(0.4, 0, 0.2, 1),
    filter 0.8s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.hero-carousel-slide--active {
  opacity: 1;
  filter: none;
  transform: scale(1);
  box-shadow:
    0 20px 25px -5px rgb(15 60 40 / 0.1),
    0 8px 10px -6px rgb(15 60 40 / 0.08);
}

.hero-carousel-slide--adjacent {
  opacity: 0.92;
  filter: saturate(0.96);
  transform: scale(0.98);
  box-shadow:
    0 10px 15px -3px rgb(15 60 40 / 0.08),
    0 4px 6px -4px rgb(15 60 40 / 0.06);
}

.hero-carousel-slide--outer {
  opacity: 0.78;
  filter: saturate(0.9);
  transform: scale(0.95);
  box-shadow:
    0 4px 6px -1px rgb(15 60 40 / 0.06),
    0 2px 4px -2px rgb(15 60 40 / 0.04);
}

.hero-carousel__dots {
  display: flex;
  justify-content: center;
  gap: var(--spacing-stack-sm);
  /* Clear of slide shadows; keeps image→dots closer to dots→next-section rhythm. */
  margin-top: var(--spacing-stack-lg);
}

.hero-carousel__dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 9999px;
  border: none;
  padding: 0;
  cursor: pointer;
  background: var(--color-green-200);
  transition:
    width 0.3s ease,
    background-color 0.3s ease,
    transform 0.3s ease;
}

.hero-carousel__dot:hover {
  background: var(--color-green-300);
  transform: scale(1.1);
}

.hero-carousel__dot--active {
  width: 1.5rem;
  background: var(--color-green-500);
}

.hero-carousel__dot:focus-visible {
  outline: 2px solid var(--color-green-500);
  outline-offset: 2px;
}

.hero-carousel-image-enter-active {
  transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 2;
}

.hero-carousel-image-leave-active {
  transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
  inset: 0;
  z-index: 1;
}

.hero-carousel-image-enter-from,
.hero-carousel-image-leave-to {
  opacity: 0;
}

.hero-carousel-slide--reduced-motion {
  transition: none;
}

@media (prefers-reduced-motion: reduce) {
  .hero-carousel-slide {
    transition: none;
  }

  .hero-carousel-image-enter-active,
  .hero-carousel-image-leave-active {
    transition: none;
  }

  .hero-carousel__dot {
    transition: none;
  }
}
</style>
