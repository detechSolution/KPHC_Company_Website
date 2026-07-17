export interface EventPicture {
  /** Optional image path — skeleton shown when omitted */
  src?: string
  alt: string
}

export interface EventPartner {
  name: string
  src: string
  alt: string
  /** Larger display for detailed seals / tall logos */
  large?: boolean
}

export interface LongServingEmployee {
  year: string
  name: string
}

export const longServingEmployees: LongServingEmployee[] = [
  { year: '1983', name: 'Julieta B. Saldana' },
  { year: '1990', name: 'Glenn Hanada' },
  { year: '1991', name: 'Corazon B. Luague' },
  { year: '1991', name: 'Glenn Rediger' },
  { year: '1992', name: 'Hue Thi Nettrour' },
  { year: '1993', name: 'Massani B. Tauai' },
  { year: '1993', name: 'My Linh Thi Nguyen' },
  { year: '1994', name: 'Marilou Tagata-Mindo' },
  { year: '1994', name: 'Blandina C. Mamaclay' },
  { year: '1994', name: 'Nora C. Dimaya' },
]

export const kphcPresidents = [
  'Rev. Richard Wong',
  'Donna Kaya',
  'Cheryl Hippo',
  'David Turek',
  'David Mathews',
  'John Kochi',
  'Martin Hernandez',
  'Vernon Nakamura',
]

export const churchPartners = [
  {
    id: 'kaumakapili',
    name: 'Kaumakapili Church',
    image: '/images/events/churches/kaumakapili-church.webp',
    alt: 'Kaumakapili Church exterior',
    caption: 'Founders of Kalihi–Palama Health Center. We\'re incredibly thankful for Kaumakapili\'s support in building this organization from the ground up.',
  },
  {
    id: 'st-elizabeth',
    name: 'St. Elizabeth\'s Episcopal Church',
    image: '/images/events/churches/st-elizabeths-church.webp',
    alt: 'St. Elizabeth\'s Episcopal Church exterior',
    caption: 'Ongoing support and playing a key part in making the construction of Kalihi–Palama Health Center 710 N King Street possible.',
  },
]

export const eventPictures: EventPicture[] = [
  {
    src: '/images/events/gallery/gala-stage-music.webp',
    alt: 'Musicians performing on the KPHC Anniversary Gala stage with illuminated marquee letters',
  },
  {
    src: '/images/events/gallery/gala-cultural-dance.webp',
    alt: 'Traditional Polynesian dance performance at the KPHC Anniversary Gala',
  },
  {
    src: '/images/events/gallery/gala-lion-dance-banquet.webp',
    alt: 'Lion dance performers greeting guests at banquet tables during the KPHC Anniversary Gala',
  },
  {
    src: '/images/events/gallery/gala-lion-dance-guests.webp',
    alt: 'Guests enjoying a lion dance cultural performance at the KPHC Anniversary Gala',
  },
  {
    src: '/images/events/gallery/gala-lion-dance-hongbao.webp',
    alt: 'Guest offering a red envelope during a lion dance at the KPHC Anniversary Gala',
  },
  {
    src: '/images/events/gallery/gala-awards-ceremony-stage.webp',
    alt: 'Honorees standing on stage with illuminated KPHC letters at the Anniversary Gala awards ceremony',
  },
  {
    src: '/images/events/gallery/gala-awards-honorees.webp',
    alt: 'Award recipients wearing leis and holding plaques on stage at the KPHC Anniversary Gala',
  },
]

export const tierSponsors: { tier: 'gold' | 'silver' | 'bronze', label: string, partners: EventPartner[] }[] = [
  {
    tier: 'gold',
    label: 'Gold',
    partners: [
      {
        name: 'The Queen\'s Health Systems',
        src: '/images/events/partners/queens-health-systems.webp',
        alt: 'The Queen\'s Health Systems logo',
      },
    ],
  },
  {
    tier: 'silver',
    label: 'Silver',
    partners: [
      {
        name: 'AlohaCare',
        src: '/images/events/partners/alohacare.webp',
        alt: 'AlohaCare logo',
      },
    ],
  },
  {
    tier: 'bronze',
    label: 'Bronze',
    partners: [
      {
        name: 'First Hawaiian Bank',
        src: '/images/events/partners/first-hawaiian-bank.webp',
        alt: 'First Hawaiian Bank logo',
      },
    ],
  },
]

export const otherContributors = ['Henry Schein']

export const friendSponsors: EventPartner[] = [
  {
    name: 'Diagnostic Laboratory Services',
    src: '/images/events/partners/diagnostic-laboratory-services.webp',
    alt: 'Diagnostic Laboratory Services, Inc. logo',
  },
  {
    name: 'Hawaiʻi Pacific Health',
    src: '/images/events/partners/hawaii-pacific-health.webp',
    alt: 'Hawaiʻi Pacific Health logo',
  },
  {
    name: 'AAPCHO',
    src: '/images/events/partners/aapcho.webp',
    alt: 'Association of Asian Pacific Community Health Organizations logo',
  },
  {
    name: 'HDS Foundation',
    src: '/images/events/partners/hds-foundation.webp',
    alt: 'HDS Foundation logo',
  },
  {
    name: 'Prince Resorts Hawaii',
    src: '/images/events/partners/prince-resorts-hawaii.webp',
    alt: 'Prince Resorts Hawaii logo',
  },
  {
    name: 'Atlas Insurance Agency',
    src: '/images/events/partners/atlas-insurance.webp',
    alt: 'Atlas Insurance Agency logo',
  },
  {
    name: 'Lin Eye Surgery Laser Center',
    src: '/images/events/partners/lin-eye-surgery.webp',
    alt: 'Lin Eye Surgery Laser Center logo',
  },
  {
    name: 'Central Pacific Bank',
    src: '/images/events/partners/central-pacific-bank.webp',
    alt: 'Central Pacific Bank logo',
  },
  {
    name: 'KMH LLP',
    src: '/images/events/partners/kmh-llp.webp',
    alt: 'KMH LLP logo',
  },
  {
    name: 'IBEW Hawaii',
    src: '/images/events/partners/ibew-hawaii.webp',
    alt: 'International Brotherhood of Electrical Workers Hawaii logo',
    large: true,
  },
]

export const specialMahalo = [
  'Kalani Realista',
  'Renee Tasman',
  'Young Oak Kim and Leon',
  'Duane Ayau',
  'Savannah\'s Events LLC',
  'Tanner Mobile Sounds',
  'Hula Dancers',
  'Prince Waikiki Staff',
]
