export interface QualityBadge {
  src: string
  alt: string
  /** Award year; ongoing accreditations use 0 and sort last. */
  year: number
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
