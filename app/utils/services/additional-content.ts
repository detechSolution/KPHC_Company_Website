import type { ServiceClinic, ServiceOffering } from './types'

export const additionalOfferings: ServiceOffering[] = [
  {
    icon: 'i-lucide-glasses',
    title: 'Optometry',
    description: 'Comprehensive eye exams, diabetic eye screening, and vision care for the whole family.',
  },
  {
    icon: 'i-lucide-pill',
    title: 'Pharmacy',
    description: 'On-site prescription filling, patient education, and financial assistance options.',
  },
  {
    icon: 'i-lucide-heart-pulse',
    title: 'Wellness & Prevention Education',
    description: 'Classes and workshops that help you build healthy habits and prevent chronic illness.',
  },
]

export const optometryServices = [
  'Comprehensive eye exams',
  'Diabetic eye screening',
  'Computer vision and near-work strain evaluation',
  'Eyeglass prescriptions and referrals',
]

export const pharmacyServices = [
  'Prescription filling and refills',
  'Patient medication education',
  'Automatic refill options',
  'Financial assistance counseling',
]

export const pharmacyLocations: ServiceClinic[] = [
  {
    name: 'Downtown Family Medical & Dental Center',
    address: '89 South King Street, Honolulu, HI 96813',
    phone: '(808) 792-5560',
    hours: 'Monday–Friday 8:00 AM – 5:00 PM',
  },
  {
    name: 'Comprehensive Primary Health Care & Dental Center',
    address: '710 North King Street, Honolulu, HI 96817',
    phone: '(808) 843-7575',
    hours: 'Monday–Friday 8:00 AM – 5:00 PM',
  },
  {
    name: 'Behavioral Health, Medical, Health Education & Pharmacy',
    address: '952 North King Street, Honolulu, HI 96817',
    phone: '(808) 791-6330',
    hours: 'Monday–Friday 8:00 AM – 5:00 PM',
  },
]

export const wellnessPrograms = [
  'Asthma education',
  'Tobacco prevention and cessation support',
  'Nutrition education',
  'Diabetes self-management',
  'Physical activity and healthy lifestyle workshops',
  'Chronic disease prevention classes',
]
