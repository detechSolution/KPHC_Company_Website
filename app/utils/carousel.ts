export interface HeroCarouselImage {
  src: string
  alt: string
}

/** Normalize a carousel index into `[0, count)`. */
export function normalizeCarouselIndex(index: number, count: number): number {
  if (count <= 0)
    return 0
  return ((index % count) + count) % count
}
