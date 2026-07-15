import { describe, expect, it } from 'vitest'
import { splitAccentTitle } from '../app/utils/accent-title'

describe('splitAccentTitle', () => {
  it('returns the full title when accent is missing', () => {
    expect(splitAccentTitle('Hello World')).toEqual([
      { text: 'Hello World', accent: false },
    ])
  })

  it('returns the full title when accent is not found', () => {
    expect(splitAccentTitle('Hello World', 'Missing')).toEqual([
      { text: 'Hello World', accent: false },
    ])
  })

  it('splits around the accent substring', () => {
    expect(splitAccentTitle('Modern Healthcare Solutions That Put You First.', 'Healthcare Solutions')).toEqual([
      { text: 'Modern ', accent: false },
      { text: 'Healthcare Solutions', accent: true },
      { text: ' That Put You First.', accent: false },
    ])
  })

  it('omits empty segments', () => {
    expect(splitAccentTitle('Healthcare Solutions', 'Healthcare Solutions')).toEqual([
      { text: 'Healthcare Solutions', accent: true },
    ])
  })
})
