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
  'Preventative Care',
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
  'Breast Feeding',
  'Other Gynecological Exams',
  'PAP Smears',
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

export const medicalClinics: ServiceClinic[] = [
  {
    name: 'Main Medical & Dental Center',
    address: '915 North King Street, Honolulu, HI 96817',
    phone: '(808) 848-1438',
    hours: 'Mon, Tue, Thu, Fri, Sat 8:00 AM – 5:00 PM · Wed 8:00 AM – 7:00 PM',
  },
  {
    name: 'Kaaahi Clinic',
    address: '546 Kaaahi Street, Honolulu, HI 96817',
    phone: '(808) 791-6342',
    hours: 'Monday–Friday 8:00 AM – 4:00 PM',
  },
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
  {
    name: 'Women\'s Health — Comprehensive Primary Health Care & Dental Center',
    address: '710 North King Street, Honolulu, HI 96817',
    phone: '(808) 843-7550',
    hours: 'Monday–Friday 8:00 AM – 5:00 PM',
  },
  {
    name: 'Pediatrics — Comprehensive Primary Health Care & Dental Center',
    address: '710 North King Street, Honolulu, HI 96817',
    phone: '(808) 843-7552',
    hours: 'Monday–Friday 8:00 AM – 5:00 PM',
  },
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
