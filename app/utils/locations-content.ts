export interface AfterHoursContact {
  label: string
  value: string
}

export interface ClinicHoursLine {
  days: string
  time: string
}

export interface ClinicMedicalHours {
  standard: ClinicHoursLine
  extended: {
    heading: string
    lines: ClinicHoursLine[]
  }
}

export interface ClinicExtendedHoursNote {
  intro: string
  extended: {
    heading: string
    lines: ClinicHoursLine[]
  }
  scheduling: string
}

export interface ClinicLocation {
  name: string
  address: string
  details?: string[]
  medicalHours?: ClinicMedicalHours
  dentalHours?: string
  extendedHoursNote?: ClinicExtendedHoursNote
}

/** Main Medical & Dental Center (915) — medical clinic hours */
export const main915MedicalHours: ClinicMedicalHours = {
  standard: {
    days: 'Monday–Friday',
    time: '8:00am – 5:00pm',
  },
  extended: {
    heading: 'Extended Hours',
    lines: [
      { days: 'Saturday', time: '8:00am – 5:00pm' },
      { days: 'Wednesday', time: '5:00pm – 7:00pm' },
    ],
  },
}

/** Main Medical & Dental Center (915) — extended hours scheduling note */
export const main915ExtendedHoursNote: ClinicExtendedHoursNote = {
  intro: 'The 915 North King Street clinic provides extended clinical hours to care for patients from all KPHC clinical sites outside of standard business hours.',
  extended: {
    heading: 'Extended Hours',
    lines: [
      { days: 'Saturday', time: '8:00am – 5:00pm' },
      { days: 'Wednesday', time: '5:00pm – 7:00pm' },
    ],
  },
  scheduling: 'To schedule an appointment during the extended hours, call (808) 848-1438.',
}

/** Main Medical & Dental Center (915) — dental clinic hours */
export const main915DentalHours = 'Monday–Friday 7:45 AM – 4:30 PM'

export const locationsIntro
  = 'Please call the health center nearest to you to make an appointment. Clinic hours and services vary for each site.'

export const locationsCta = {
  title: 'Planning your visit?',
  description:
    'Use the phone number on the clinic card for the site you plan to visit—hours and services vary by location. For telehealth, new patients, insurance, and what to bring, see patient resources.',
  primaryLabel: 'How to schedule an appointment',
  secondaryLabel: 'Patient resources',
} as const

export const afterHours: AfterHoursContact[] = [
  { label: 'In Case of Emergency Dial', value: '911' },
  { label: 'Care & Advice After Clinical Hours — Physician\'s Exchange', value: '(808) 524-2575' },
  { label: 'Clinical Advice During Office Hours — Nurse Hotline', value: '(808) 843-7206' },
  { label: 'Hawaii Cares Crisis Line 24/7', value: '(808) 832-3100' },
  { label: 'Call, Text, or Chat 24/7 Hawaii Cares', value: '988' },
]

export const clinicLocations: ClinicLocation[] = [
  {
    name: 'Main Medical & Dental Center',
    address: '915 North King Street, Honolulu, HI 96817',
    details: [
      'Medical: (808) 848-1438',
      'Dental: (808) 845-0686',
    ],
    medicalHours: main915MedicalHours,
    dentalHours: main915DentalHours,
    extendedHoursNote: main915ExtendedHoursNote,
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
      'Monday–Friday 8:00 AM – 4:30 PM',
      'Saturday 8:00 AM – 12:00 PM',
    ],
  },
]
