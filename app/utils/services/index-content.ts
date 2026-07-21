import type { ServiceCard, ServiceReason } from './types'

export const servicesIndexCards: ServiceCard[] = [
  {
    title: 'Medical Services',
    count: '3 Services',
    description: 'Comprehensive primary care for adults, women, and children — including preventive visits, chronic disease management, and family medicine.',
    to: '/services/medical',
    image: '/images/services/medical-services.webp',
    alt: 'Patient and provider in a consultation at Kalihi-Palama Health Center',
  },
  {
    title: 'Behavioral Health and Social Services',
    count: '3 Services',
    description: 'Integrated counseling, case management, and healthcare for the homeless programs that support mind, emotions, and daily life.',
    to: '/services/behavioral-health',
    image: '/images/services/behavioral-health-services.webp',
    alt: 'Kalihi-Palama Health Center community members gathered together',
  },
  {
    title: 'Dental Services',
    count: '4 Clinics',
    description: 'Preventive and restorative dental care for the whole family, with clinics dedicated to adults and children across Honolulu.',
    to: '/services/dental',
    image: '/images/services/dental-services.webp',
    alt: 'Dental provider caring for a patient at Kalihi-Palama Health Center',
  },
  {
    title: 'Additional Services',
    count: '3 Services',
    description: 'Optometry, pharmacy, and wellness education that wrap around your primary care and keep your family supported.',
    to: '/services/additional',
    image: '/images/services/additional-services.webp',
    alt: 'Healthcare provider administering a vaccination to a patient',
  },
  {
    title: 'Nutrition',
    count: 'ADA Recognized',
    description: 'Diabetes self-management education and registered dietitian counseling to help you build healthier habits every day.',
    to: '/services/nutrition',
    image: '/images/home/wic.webp',
    alt: 'Nutrition support and healthy eating education at Kalihi-Palama Health Center',
  },
  {
    title: 'Women, Infants, & Children (WIC)',
    count: 'Nutrition Support',
    description: 'Nutrition education, breastfeeding support, and healthy food benefits for eligible pregnant people, new parents, infants, and young children.',
    to: '/services/wic',
    image: '/images/home/wic.webp',
    alt: 'Smiling child receiving WIC nutrition support at Kalihi-Palama Health Center',
  },
]

export const servicesIndexReasons: ServiceReason[] = [
  {
    icon: 'i-lucide-heart-handshake',
    title: 'Patient-First Approach',
    description: 'Care plans built around your goals, language, culture, and family — not a one-size-fits-all checklist.',
  },
  {
    icon: 'i-lucide-sparkles',
    title: 'Advanced Healthcare Innovation',
    description: 'Telehealth options, coordinated referrals, and modern clinic tools that make care more accessible.',
  },
  {
    icon: 'i-lucide-award',
    title: 'Award-Winning Certified Quality',
    description: 'Recognized for excellence as a Federally Qualified Health Center and Patient-Centered Medical Home.',
  },
  {
    icon: 'i-lucide-users',
    title: 'Compassionate Community Care',
    description: 'Rooted in Kalihi-Palama, we serve neighbors with aloha — including those who need sliding-scale support.',
  },
]
