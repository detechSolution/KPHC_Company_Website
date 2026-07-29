import { describe, expect, it } from 'vitest'
import { aboutTargetFromHash } from '../app/utils/about-hash'

describe('aboutTargetFromHash', () => {
  it('returns undefined for empty or unknown hashes', () => {
    expect(aboutTargetFromHash('')).toBeUndefined()
    expect(aboutTargetFromHash('#')).toBeUndefined()
    expect(aboutTargetFromHash('#unknown')).toBeUndefined()
  })

  it('maps section hashes', () => {
    expect(aboutTargetFromHash('#history')).toEqual({ sectionId: 'history' })
    expect(aboutTargetFromHash('board')).toEqual({ sectionId: 'board' })
  })

  it('maps mission tab hashes to the mission section', () => {
    expect(aboutTargetFromHash('#vision')).toEqual({ sectionId: 'mission', tab: 'vision' })
    expect(aboutTargetFromHash('#values')).toEqual({ sectionId: 'mission', tab: 'values' })
  })
})
