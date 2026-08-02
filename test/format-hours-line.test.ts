import { describe, expect, it } from 'vitest'
import { splitHoursLine } from '../app/utils/format-hours-line'

describe('splitHoursLine', () => {
  it('parses weekday ranges with times', () => {
    expect(splitHoursLine('Monday–Friday 8:00 AM – 5:00 PM')).toEqual({
      days: 'Monday–Friday',
      time: '8:00 AM – 5:00 PM',
    })
  })

  it('parses single days with times', () => {
    expect(splitHoursLine('Saturday 8:00 AM – 12:00 PM')).toEqual({
      days: 'Saturday',
      time: '8:00 AM – 12:00 PM',
    })
  })

  it('parses closed days with a colon', () => {
    expect(splitHoursLine('Sunday: Closed')).toEqual({
      days: 'Sunday',
      time: 'Closed',
    })
  })

  it('returns null for phone lines', () => {
    expect(splitHoursLine('Medical: (808) 848-1438')).toBeNull()
  })
})
