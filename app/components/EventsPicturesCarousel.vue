<script setup lang="ts">
import type { EventPicture } from '~/utils/events-content'

const props = withDefaults(defineProps<{
  items: EventPicture[]
  delay?: number
}>(), {
  delay: 5500,
})

const offset = ref(0)
const paused = ref(false)
const reduceMotion = ref(false)

const activeIndex = computed(() => {
  const count = props.items.length
  if (count === 0)
    return 0
  return ((offset.value % count) + count) % count
})

const active = computed(() => props.items[activeIndex.value])

function goTo(index: number) {
  if (props.items.length === 0)
    return
  offset.value = ((index % props.items.length) + props.items.length) % props.items.length
}

function advance(delta: 1 | -1) {
  if (props.items.length < 2)
    return
  goTo(activeIndex.value + delta)
}

function nextFromAutoplay() {
  if (paused.value)
    return
  advance(1)
}

let timer: ReturnType<typeof setInterval> | undefined

function start() {
  stop()
  if (reduceMotion.value || props.items.length < 2)
    return
  timer = setInterval(nextFromAutoplay, props.delay)
}

function stop() {
  if (timer) {
    clearInterval(timer)
    timer = undefined
  }
}

onMounted(() => {
  reduceMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  start()
})

onBeforeUnmount(stop)

watch(() => props.delay, start)
watch(paused, (isPaused) => {
  if (isPaused)
    stop()
  else
    start()
})
</script>

<template>
  <div
    class="relative"
    role="region"
    aria-roledescription="carousel"
    aria-label="Event pictures"
    @mouseenter="paused = true"
    @mouseleave="paused = false"
    @focusin="paused = true"
    @focusout="paused = false"
  >
    <div class="relative aspect-[16/9] w-full overflow-hidden rounded-card bg-green-50 sm:aspect-[2/1]">
      <template v-if="active">
        <Transition
          name="event-picture"
          mode="out-in"
        >
          <img
            v-if="active.src"
            :key="`img-${activeIndex}`"
            :src="active.src"
            :alt="active.alt"
            class="absolute inset-0 size-full object-cover"
            loading="lazy"
            decoding="async"
            width="2560"
            height="1978"
          >
          <div
            v-else
            :key="`skel-${activeIndex}`"
            class="absolute inset-0"
          >
            <ImageSkeleton
              :label="`${active.alt} — image coming soon`"
              class="absolute inset-0 size-full"
            />
            <div class="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-2 text-green-800/45">
              <UIcon
                name="i-lucide-image"
                class="size-10 sm:size-12"
              />
              <span class="text-xs font-medium tracking-wide uppercase sm:text-sm">
                Event photo coming soon
              </span>
            </div>
          </div>
        </Transition>
      </template>
    </div>

    <div
      v-if="items.length > 1"
      class="mt-stack flex items-center justify-center gap-3"
    >
      <UButton
        icon="i-lucide-chevron-left"
        aria-label="Previous event picture"
        color="neutral"
        variant="outline"
        size="sm"
        square
        :ui="{ base: 'rounded-full' }"
        @click="advance(-1)"
      />
      <div class="flex items-center gap-2">
        <button
          v-for="(item, index) in items"
          :key="index"
          type="button"
          class="size-2.5 rounded-full transition-colors"
          :class="index === activeIndex ? 'bg-primary' : 'bg-zinc-300 hover:bg-zinc-400'"
          :aria-label="`Go to event picture ${index + 1}`"
          :aria-current="index === activeIndex ? 'true' : undefined"
          @click="goTo(index)"
        />
      </div>
      <UButton
        icon="i-lucide-chevron-right"
        aria-label="Next event picture"
        color="neutral"
        variant="outline"
        size="sm"
        square
        :ui="{ base: 'rounded-full' }"
        @click="advance(1)"
      />
    </div>
  </div>
</template>

<style scoped>
.event-picture-enter-active,
.event-picture-leave-active {
  transition: opacity 0.35s ease;
}

.event-picture-enter-from,
.event-picture-leave-to {
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .event-picture-enter-active,
  .event-picture-leave-active {
    transition: none;
  }
}
</style>
