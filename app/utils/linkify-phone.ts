export interface PhoneTextSegment {
  type: 'text' | 'phone'
  value: string
}

const PHONE_IN_TEXT_RE = /\(?\d{3}\)?[\s.-]*\d{3}[\s.-]*\d{4}|\b988\b/g

/** Split copy into plain text and dialable phone fragments (for inline tel: links). */
export function splitPhoneSegments(text: string): PhoneTextSegment[] {
  const segments: PhoneTextSegment[] = []
  let lastIndex = 0

  for (const match of text.matchAll(PHONE_IN_TEXT_RE)) {
    const index = match.index ?? 0
    if (index > lastIndex)
      segments.push({ type: 'text', value: text.slice(lastIndex, index) })
    segments.push({ type: 'phone', value: match[0] })
    lastIndex = index + match[0].length
  }

  if (lastIndex < text.length)
    segments.push({ type: 'text', value: text.slice(lastIndex) })

  if (segments.length === 0)
    segments.push({ type: 'text', value: text })

  return segments
}

export function phoneToTelHref(phone: string): string {
  const digits = phone.replace(/\D/g, '')
  if (digits.length === 3)
    return `tel:${digits}`
  if (digits.length === 10)
    return `tel:+1${digits}`
  if (digits.length === 11 && digits.startsWith('1'))
    return `tel:+${digits}`
  return `tel:${digits}`
}
