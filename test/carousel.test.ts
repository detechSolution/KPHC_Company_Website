import { describe, expect, it } from 'vitest'
import { normalizeCarouselIndex } from '../app/utils/carousel'

describe('normalizeCarouselIndex', () => {
  it('returns 0 for empty carousels', () => {
    expect(normalizeCarouselIndex(3, 0)).toBe(0)
    expect(normalizeCarouselIndex(-1, 0)).toBe(0)
  })

  it('wraps positive indices', () => {
    expect(normalizeCarouselIndex(5, 3)).toBe(2)
    expect(normalizeCarouselIndex(3, 3)).toBe(0)
  })

  it('wraps negative indices', () => {
    expect(normalizeCarouselIndex(-1, 5)).toBe(4)
    expect(normalizeCarouselIndex(-6, 5)).toBe(4)
  })
})
