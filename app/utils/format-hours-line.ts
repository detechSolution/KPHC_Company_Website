export interface ParsedHoursLine {
  days: string
  time: string
}

const DAY_NAMES
  = 'Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday'

const DAY_PREFIX_RE = new RegExp(
  `^((?:${DAY_NAMES})(?:[–-](?:${DAY_NAMES}))?)`,
  'i',
)

/** Split a hours string like "Monday–Friday 8:00 AM – 5:00 PM" into bold day label + time. */
export function splitHoursLine(text: string): ParsedHoursLine | null {
  const trimmed = text.trim()
  const match = trimmed.match(DAY_PREFIX_RE)
  if (!match)
    return null

  const days = match[1]!
  const remainder = trimmed.slice(match[0].length).trim()
  if (!remainder)
    return null

  const time = remainder.startsWith(':')
    ? remainder.slice(1).trim()
    : remainder

  return { days, time }
}
