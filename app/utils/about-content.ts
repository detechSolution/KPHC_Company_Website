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
  body: string
  icon: string
}

export interface LeadershipMember {
  name: string
  role: string
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
  { name: 'Emmanuel Kintu', role: 'CEO / Executive Director' },
  { name: 'Darrin Sato', role: 'COO' },
  { name: 'Diana Carris', role: 'CFO' },
  { name: 'Keith Larson', role: 'Dental Director' },
  { name: 'Leanna Gordon', role: 'Medical Director' },
]

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
    body: 'Kalihi-Palama Health Center (KPHC) is committed to providing quality integrated health and social services to our community and all others in need of health care.',
  },
  vision: {
    title: 'Our Vision',
    icon: 'i-lucide-eye',
    body: 'A healthier Honolulu where every person — regardless of income, language, or background — can thrive with dignity, compassion, and comprehensive care close to home.',
  },
  values: {
    title: 'Our Values',
    icon: 'i-lucide-heart',
    body: 'We lead with aloha, equity, integrity, and collaboration. We honor culture, listen first, and partner with patients and community to remove barriers to wellness.',
  },
}
