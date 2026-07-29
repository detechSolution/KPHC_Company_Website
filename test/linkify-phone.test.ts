import { describe, expect, it } from 'vitest'
import { phoneToTelHref, splitPhoneSegments } from '../app/utils/linkify-phone'

describe('splitPhoneSegments', () => {
  it('linkifies a labeled clinic phone', () => {
    expect(splitPhoneSegments('Medical: (808) 848-1438')).toEqual([
      { type: 'text', value: 'Medical: ' },
      { type: 'phone', value: '(808) 848-1438' },
    ])
  })

  it('leaves hour lines unchanged', () => {
    const line = 'Monday–Friday 8:00 AM – 5:00 PM'
    expect(splitPhoneSegments(line)).toEqual([{ type: 'text', value: line }])
  })
})

describe('phoneToTelHref', () => {
  it('normalizes ten-digit numbers', () => {
    expect(phoneToTelHref('(808) 848-1438')).toBe('tel:+18088481438')
  })

  it('handles three-digit crisis lines', () => {
    expect(phoneToTelHref('988')).toBe('tel:988')
  })
})
