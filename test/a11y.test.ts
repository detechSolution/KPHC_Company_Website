import { describe, expect, it } from 'vitest'
import { NEW_TAB_SUFFIX, newTabLabel } from '../app/utils/a11y'

describe('newTabLabel', () => {
  it('appends the new-tab suffix for assistive names', () => {
    expect(newTabLabel('Patient Portal')).toBe(`Patient Portal${NEW_TAB_SUFFIX}`)
  })
})
