export interface HistoryCard {
  year: string | null
  title: string
  body: string
  featured: boolean
}

export type MissionTab = 'mission' | 'vision' | 'values'

export interface MissionTabItem {
  id: MissionTab
  label: string
}

export interface MissionContent {
  title: string
  body: string | string[]
  items?: string[]
  icon: string
}

export interface LeadershipMember {
  name: string
  role: string
  photo?: string
}

export const executiveTeamPhoto = {
  src: '/images/about-us/executive-team.webp',
  alt: 'Kalihi-Palama Health Center executive team',
  width: 1024,
  height: 819,
}

export interface ProvidersCtaContent {
  eyebrow: string
  title: string
  description: string
  buttonLabel: string
  image: string
  imageAlt: string
}

export const providersCta: ProvidersCtaContent = {
  eyebrow: 'Our Care Team',
  title: 'Meet Our Providers',
  description: 'Doctors, nurse practitioners, and specialists across medical, dental, behavioral health, and more — delivering compassionate, culturally competent care at KPHC.',
  buttonLabel: 'View Our Providers',
  image: '/images/services/medical-services.webp',
  imageAlt: 'Medical care team at Kalihi-Palama Health Center',
}

export const boardOfDirectors: LeadershipMember[] = [
  { name: 'Vernon Nakamura', role: 'President' },
  { name: 'Russell Kaupu', role: 'Vice President' },
  { name: 'Peter Hanashiro', role: 'Immediate Past President / Treasurer' },
  { name: 'Louise Li', role: 'Secretary' },
  { name: 'Clifford Chang', role: 'Director at Large' },
  { name: 'Richard Keene', role: 'Director at Large' },
  { name: 'Rosemarie Mendoza', role: 'Director at Large' },
  { name: 'Christopher Pating', role: 'Director at Large' },
  { name: 'Tanya Suapaia', role: 'Director at Large' },
  { name: 'Liane Sugimoto', role: 'Director at Large' },
  { name: 'Kahu Heather Barfield', role: 'Director at Large' },
]

export const executiveTeam: LeadershipMember[] = [
  { name: 'Emmanuel Kintu', role: 'CEO / Executive Director', photo: '/images/about-us/emmanuel-kintu.webp' },
  { name: 'Darrin Sato', role: 'COO', photo: '/images/about-us/darrin-sato.webp' },
  { name: 'Diana Carris', role: 'CFO' },
  { name: 'Keith Larson', role: 'Dental Director', photo: '/images/about-us/keith-larson.webp' },
  { name: 'Leanna Gordon', role: 'Medical Director', photo: '/images/about-us/leanna-gordon.webp' },
]

const HONORIFICS = new Set(['kahu', 'dr', 'mr', 'mrs', 'ms', 'miss', 'rev', 'sir'])

export function leadershipInitials(name: string): string {
  return name
    .split(/\s+/)
    .map(part => part.replace(/\./g, ''))
    .filter((part) => {
      const first = part[0] ?? ''
      return /[a-z]/i.test(first) && !HONORIFICS.has(part.toLowerCase())
    })
    .slice(0, 2)
    .map(part => part[0]!.toUpperCase())
    .join('')
}

export const historyCards: HistoryCard[] = [
  {
    year: null,
    title: 'Our Journey',
    body: 'From a humble clinic in the basement of Kaumakapili Church to a Federally Qualified Health Center serving more than 20,000 patients each year — our story is rooted in community.',
    featured: true,
  },
  {
    year: '1975',
    title: 'The Founding',
    body: 'KPHC began as a community response to unmet health needs in Kalihi-Palama, opening its doors to neighbors who needed accessible care.',
    featured: false,
  },
  {
    year: '1980s',
    title: 'Growing the Mission',
    body: 'Services expanded beyond primary care as the center deepened partnerships and built programs that reflected the needs of local families.',
    featured: false,
  },
  {
    year: '1990s',
    title: 'FQHC Designation',
    body: 'Federal recognition as a Federally Qualified Health Center strengthened our ability to deliver affordable, comprehensive care to underserved communities.',
    featured: false,
  },
  {
    year: '2019',
    title: 'Chinatown Expansion',
    body: 'New clinic sites extended our reach, bringing medical, dental, and supportive services closer to more people across Honolulu.',
    featured: false,
  },
  {
    year: '2020',
    title: 'National Recognition',
    body: 'Continued investment in quality, cultural competence, and integrated care earned recognition for excellence in community health.',
    featured: false,
  },
]

export const missionTabs: MissionTabItem[] = [
  { id: 'mission', label: 'Mission' },
  { id: 'vision', label: 'Vision' },
  { id: 'values', label: 'Values' },
]

export const missionContent: Record<MissionTab, MissionContent> = {
  mission: {
    title: 'Our Mission',
    icon: 'i-lucide-hand-heart',
    body: [
      'To provide quality integrated health and social services to our community and all others in need of health care.',
      'Our focus is preventative primary health care provided in a respectful, caring, and culturally appropriate manner.',
    ],
  },
  vision: {
    title: 'Our Vision',
    icon: 'i-lucide-eye',
    body: 'To be a leader in community-based health care utilizing innovation and resourcefulness in our development of CULTURALLY SENSITIVE programs and services to improve the overall health and well-being of our patients and community.',
  },
  values: {
    title: 'Our Values',
    icon: 'i-lucide-heart',
    body: '',
    items: [
      'Performance Excellence',
      'Respect & Recognition',
      'Integrity',
      'Dedication',
      'Equality & Education',
    ],
  },
}
