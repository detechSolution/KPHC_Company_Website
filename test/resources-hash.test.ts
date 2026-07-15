import { describe, expect, it } from 'vitest'
import { sectionFromHash } from '../app/utils/resources-hash'

describe('sectionFromHash', () => {
  it('returns undefined for empty or unknown hashes', () => {
    expect(sectionFromHash('')).toBeUndefined()
    expect(sectionFromHash('#')).toBeUndefined()
    expect(sectionFromHash('#unknown')).toBeUndefined()
  })

  it('maps known accordion section hashes', () => {
    expect(sectionFromHash('#locations')).toBe('locations')
    expect(sectionFromHash('#privacy')).toBe('privacy')
    expect(sectionFromHash('appointment')).toBe('appointment')
  })
})
