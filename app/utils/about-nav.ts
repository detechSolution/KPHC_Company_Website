export interface AboutNavLink {
  label: string
  to: string
}

/** Section element ids on `/about` (URL hash targets). */
export const aboutSectionIds = [
  'community',
  'history',
  'mission',
  'board',
  'executive-team',
] as const

export type AboutSectionId = typeof aboutSectionIds[number]

export const aboutNavLinks: AboutNavLink[] = [
  {
    label: 'Who We Are',
    to: '/about',
  },
  {
    label: 'Our History',
    to: '/about#history',
  },
  {
    label: 'Mission, Vision & Values',
    to: '/about#mission',
  },
  {
    label: 'Board of Directors',
    to: '/about#board',
  },
  {
    label: 'Executive Team',
    to: '/about#executive-team',
  },
  {
    label: 'Our Providers',
    to: '/providers',
  },
]
