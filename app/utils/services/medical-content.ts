import type { ServiceClinic, ServiceOffering } from './types'

export const medicalOfferings: ServiceOffering[] = [
  {
    icon: 'i-lucide-user',
    title: 'Adult Medicine',
    description: 'Adult, pediatric, and family medicine with preventive care, wellness visits, immunizations, and care coordination.',
  },
  {
    icon: 'i-lucide-heart',
    title: 'Women\'s Health',
    description: 'Reproductive health, prenatal care, screenings, and gynecological services across life stages.',
  },
  {
    icon: 'i-lucide-baby',
    title: 'Pediatric Medicine',
    description: 'Well-baby and well-child care, developmental screening, teen medical care, and sick visits.',
  },
]

export const medicalAdultServices = [
  'Preventive Care',
  'Physical Exams',
  'Annual Wellness Visits',
  'Women\'s Health',
  'Developmental Care',
  'Immunizations',
  'Care Coordination',
]

export const medicalWomensServices = [
  'Reproductive Health Services',
  'Birth Control',
  'Breast Checks',
  'Breastfeeding',
  'Other Gynecological Exams',
  'Pap Smears',
  'Pregnancy Testing and Counseling',
  'Prenatal Care and Delivery Services',
  'STD/HIV Testing and Treatment',
]

export const medicalPediatricServices = [
  'Child Car Safety Education and Inspections',
  'Developmental Screening',
  'Health Education',
  'Sick Child Care and Follow-Up',
  'Teen Medical Care',
  'Well Baby Care',
  'Well-Child Check-Ups',
]

export const medicalWomensClinic: ServiceClinic = {
  name: 'Comprehensive Primary Health Care & Dental Center',
  address: '710 North King Street, Honolulu, HI 96817',
  phone: '(808) 843-7550',
  hours: 'Monday–Friday 8:00 AM – 5:00 PM',
}

export const medicalPediatricClinic: ServiceClinic = {
  name: 'Comprehensive Primary Health Care & Dental Center',
  address: '710 North King Street, Honolulu, HI 96817',
  phone: '(808) 843-7552',
  hours: 'Monday–Friday 8:00 AM – 5:00 PM',
}
