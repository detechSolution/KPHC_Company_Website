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

export interface QualityBadge {
  src: string
  alt: string
  /** Award year; ongoing accreditations use 0 and sort last. */
  year: number
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

export const qualityBadges: QualityBadge[] = [
  {
    src: '/images/badges/national-quality-leader-2025-diabetes.webp',
    alt: 'HRSA National Quality Leader 2025 badge for Diabetes Health',
    year: 2025,
  },
  {
    src: '/images/badges/advancing-hit-2025.webp',
    alt: 'HRSA Advancing HIT for Quality 2025 Awardee badge',
    year: 2025,
  },
  {
    src: '/images/badges/advancing-hit-2024.webp',
    alt: 'HRSA Advancing HIT for Quality 2024 Awardee badge',
    year: 2024,
  },
  {
    src: '/images/badges/health-center-quality-leader-2024.webp',
    alt: 'HRSA Health Center Quality Leader 2024 Awardee badge',
    year: 2024,
  },
  {
    src: '/images/badges/advancing-hit-2023.webp',
    alt: 'HRSA Advancing HIT for Quality 2023 Awardee badge',
    year: 2023,
  },
  {
    src: '/images/badges/advancing-hit-2022.webp',
    alt: 'HRSA Advancing HIT for Quality 2022 Awardee badge',
    year: 2022,
  },
  {
    src: '/images/badges/access-enhancer-2022.webp',
    alt: 'HRSA Access Enhancer 2022 Awardee badge',
    year: 2022,
  },
  {
    src: '/images/badges/health-center-quality-leader-2022.webp',
    alt: 'HRSA Health Center Quality Leader 2022 Awardee badge',
    year: 2022,
  },
  {
    src: '/images/badges/health-center-quality-leader-2021.webp',
    alt: 'HRSA Health Center Quality Leader 2021 Awardee badge',
    year: 2021,
  },
  {
    src: '/images/badges/health-center-quality-leader-2020.webp',
    alt: 'HRSA Health Center Quality Leader 2020 Awardee badge',
    year: 2020,
  },
  {
    src: '/images/badges/advancing-hit-2019.webp',
    alt: 'HRSA Advancing HIT for Quality 2019 Awardee badge',
    year: 2019,
  },
  {
    src: '/images/badges/health-center-quality-leader-2019.webp',
    alt: 'HRSA Health Center Quality Leader 2019 Awardee badge',
    year: 2019,
  },
  {
    src: '/images/badges/health-center-quality-leader-2018.webp',
    alt: 'HRSA Health Center Quality Leader 2018 Awardee badge',
    year: 2018,
  },
  {
    src: '/images/badges/health-center-quality-leader-2017.webp',
    alt: 'HRSA Health Center Quality Leader 2017 Awardee badge',
    year: 2017,
  },
  {
    src: '/images/badges/ncqa-pcmh-recognized.webp',
    alt: 'NCQA Recognized Patient-Centered Medical Home badge',
    year: 0,
  },
  {
    src: '/images/badges/carf-accredited.webp',
    alt: 'CARF Accredited gold seal badge',
    year: 0,
  },
].sort((a, b) => b.year - a.year)
