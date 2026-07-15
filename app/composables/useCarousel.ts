import { normalizeCarouselIndex } from '~/utils/carousel'

export interface UseCarouselOptions {
  itemCount: MaybeRefOrGetter<number>
  /** Autoplay delay in ms */
  delay?: MaybeRefOrGetter<number>
  /** When false, autoplay is disabled entirely */
  autoplay?: MaybeRefOrGetter<boolean>
}

export function useCarousel(options: UseCarouselOptions) {
  const offset = ref(0)
  const paused = ref(false)
  const reduceMotion = ref(false)

  const count = computed(() => toValue(options.itemCount))

  const activeIndex = computed(() => normalizeCarouselIndex(offset.value, count.value))

  function goTo(index: number) {
    if (count.value === 0)
      return
    offset.value = normalizeCarouselIndex(index, count.value)
  }

  function advance(delta: 1 | -1 = 1) {
    if (count.value < 2)
      return
    goTo(activeIndex.value + delta)
  }

  let timer: ReturnType<typeof setInterval> | undefined

  function start() {
    stop()
    const delay = toValue(options.delay ?? 5000)
    const autoplay = toValue(options.autoplay ?? true)
    if (!autoplay || reduceMotion.value || count.value < 2 || paused.value)
      return
    timer = setInterval(advance, delay, 1)
  }

  function stop() {
    if (timer) {
      clearInterval(timer)
      timer = undefined
    }
  }

  onMounted(() => {
    if (import.meta.client) {
      reduceMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    }
    start()
  })

  onBeforeUnmount(stop)

  watch(
    [
      () => toValue(options.delay),
      () => toValue(options.itemCount),
      () => toValue(options.autoplay ?? true),
      paused,
      reduceMotion,
    ],
    start,
  )

  return {
    offset,
    paused,
    reduceMotion,
    activeIndex,
    goTo,
    advance,
    start,
    stop,
  }
}
