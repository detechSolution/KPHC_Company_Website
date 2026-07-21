export interface AfterHoursContact {
  label: string
  value: string
}

export interface ClinicLocation {
  name: string
  address: string
  details: string[]
}

export interface TelehealthOption {
  icon: string
  title: string
  description: string
}

export interface RegistrationItem {
  title: string
  body: string
}

export const accordionSections = ['privacy', 'locations', 'appointment', 'registration', 'hipaa'] as const
export type AccordionSection = typeof accordionSections[number]

export const afterHours: AfterHoursContact[] = [
  { label: 'In Case of Emergency Dial', value: '911' },
  { label: 'Care & Advice After Clinical Hours — Physician\'s Exchange', value: '(808) 524-2575' },
  { label: 'Clinical Advice During Office Hours — Nurse Hotline', value: '(808) 843-7206' },
  { label: 'Hawaii Cares Crisis Line 24/7', value: '(808) 832-3100' },
  { label: 'Call, Text, or Chat 24/7 Hawaii Cares', value: '988' },
]

export const clinics: ClinicLocation[] = [
  {
    name: 'Main Medical & Dental Center',
    address: '915 North King Street, Honolulu, HI 96817',
    details: [
      'Medical: (808) 848-1438',
      'Dental: (808) 845-0686',
      'Mon, Tue, Thu, Fri, Sat 8:00 AM – 5:00 PM',
      'Wednesday 8:00 AM – 7:00 PM',
    ],
  },
  {
    name: 'Downtown Family Medical & Dental Center',
    address: '89 South King Street, Honolulu, HI 96813',
    details: [
      'Medical: (808) 792-5560',
      'Dental: (808) 792-5576',
      'Monday–Friday 8:00 AM – 5:00 PM',
    ],
  },
  {
    name: 'Comprehensive Primary Health Care & Dental Center',
    address: '710 North King Street, Honolulu, HI 96817',
    details: [
      'Medical: (808) 843-7575',
      'Women\'s Health: (808) 843-7550',
      'Pediatrics: (808) 843-7552',
      'Family Dental (1st Floor): (808) 843-7502',
      'Children\'s Dental (2nd Floor): (808) 843-7520',
      'Monday–Friday 8:00 AM – 5:00 PM',
    ],
  },
  {
    name: 'Behavioral Health, Medical, Health Education & Pharmacy',
    address: '952 North King Street, Honolulu, HI 96817',
    details: [
      'Medical: (808) 791-6330',
      'Behavioral Health: (808) 841-7981',
      'Monday–Friday 8:00 AM – 5:00 PM',
    ],
  },
  {
    name: 'Ka\'a\'ahi Clinic',
    address: '546 Ka\'a\'ahi Street, Honolulu, HI 96817',
    details: [
      'Phone: (808) 791-6342',
      'Monday–Friday 8:00 AM – 4:00 PM',
    ],
  },
  {
    name: 'Women, Infants & Children (WIC)',
    address: '710 North King Street, Honolulu, HI 96817',
    details: [
      'Phone: (808) 841-0011',
      'Monday–Friday 7:15 AM – 4:30 PM',
    ],
  },
  {
    name: 'Optometry',
    address: '915 North King Street, Honolulu, HI 96817',
    details: [
      'Phone: (808) 848-1438',
      'By appointment',
    ],
  },
]

export const telehealthOptions: TelehealthOption[] = [
  {
    icon: 'i-lucide-video',
    title: 'Telehealth (Audio + Video)',
    description: 'Meet with your provider from home using a smartphone, tablet, or computer.',
  },
  {
    icon: 'i-lucide-phone',
    title: 'Telephone-Only',
    description: 'Audio visits when video is unavailable — still private and convenient.',
  },
  {
    icon: 'i-lucide-circle-check',
    title: 'Virtual Check-In',
    description: 'Quick follow-ups for results, medication questions, and care coordination.',
  },
]

export const registrationItems: RegistrationItem[] = [
  {
    title: 'Health Insurance Card',
    body: 'Bring your current insurance card (Medicaid, Medicare, or private plan).',
  },
  {
    title: 'Identification',
    body: 'Passport, driver\'s license, state ID, or other government-issued photo ID.',
  },
  {
    title: 'Legal Guardianship Papers',
    body: 'Required when accompanying a minor or adult under legal guardianship.',
  },
  {
    title: 'Proof of Income (Sliding Scale)',
    body: 'Pay stubs, tax returns, benefit letters, or other income documentation if applying for sliding-fee discounts.',
  },
  {
    title: 'Shot Records',
    body: 'Immunization records for children and adults when available.',
  },
  {
    title: 'WIC Requirements',
    body: 'If enrolling in WIC, bring proof of identity, residency, and income for each applicant. See our WIC program page for full enrollment details.',
  },
]

export const resourceAccordionItems = [
  {
    value: 'privacy',
    label: 'Notice of Privacy Practices',
    icon: 'i-lucide-shield',
    description: 'Effective Date: January 1, 2008 · Reviewed & Revised: April 8, 2013',
    slot: 'privacy' as const,
  },
  {
    value: 'locations',
    label: 'Clinic Hours & Locations',
    icon: 'i-lucide-map-pin',
    slot: 'locations' as const,
  },
  {
    value: 'appointment',
    label: 'Make An Appointment',
    icon: 'i-lucide-calendar',
    slot: 'appointment' as const,
  },
  {
    value: 'registration',
    label: 'Patient Registration',
    icon: 'i-lucide-user-round',
    slot: 'registration' as const,
  },
  {
    value: 'hipaa',
    label: 'HIPAA Regulation',
    icon: 'i-lucide-file-text',
    slot: 'hipaa' as const,
  },
]
