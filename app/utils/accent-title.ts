export interface AccentTitlePart {
  text: string
  accent: boolean
}

/** Split a heading so one substring can be styled as the accent (Caveat + primary). */
export function splitAccentTitle(title: string, accent?: string): AccentTitlePart[] {
  if (!accent || !title.includes(accent))
    return [{ text: title, accent: false }]

  const index = title.indexOf(accent)

  return [
    { text: title.slice(0, index), accent: false },
    { text: accent, accent: true },
    { text: title.slice(index + accent.length), accent: false },
  ].filter(part => part.text.length > 0)
}
