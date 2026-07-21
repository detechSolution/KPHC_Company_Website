import type { ServiceClinic } from './types'

export const wicIntro = [
  'The Women, Infants, and Children (WIC) program helps families learn to eat well, be active, and stay healthy.',
  'KPHC WIC has multilingual WIC staff and interpreting services to assist clients.',
]

export const wicQualification = [
  'Be a pregnant, breastfeeding, or postpartum woman, or a child under 5 years old',
  'Be a resident of Hawaii',
  'Be at nutritional risk',
  'Meet federal income guidelines (most recent WIC income guidelines apply)',
]

export interface WicDocumentGroup {
  title: string
  examples: string[]
}

export const wicDocumentGroups: WicDocumentGroup[] = [
  {
    title: 'Proof of income for everyone who works in the household',
    examples: [
      'Pay stubs',
      'Leave Earning Statement (LES)',
      'Individuals with proof of Quest, TANF, or SNAP benefit documents meet WIC income eligibility requirements',
    ],
  },
  {
    title: 'Proof of identity',
    examples: [
      'Driver\'s license',
      'State I.D.',
      'Birth certificate',
    ],
  },
  {
    title: 'Proof of Hawaii residence',
    examples: [
      'Driver\'s license',
      'State I.D.',
      'Military housing documents',
      'Household utility bill',
      'Your baby or children\'s immunization record',
    ],
  },
]

export const wicEnrollmentReminders = [
  'Bring your baby or children who need WIC',
  'Bring your baby or children\'s immunization record',
]

export const wicServices = [
  'Nutrition and health education',
  'Breastfeeding support and education',
  'Advice on how to eat well and purchase WIC foods',
  'Advice on how to stay healthy',
  'Become certified for WIC',
  'Provide WIC food benefits',
  'Help finding healthcare and other community services',
]

export const wicClinic: ServiceClinic = {
  name: 'Women, Infants, & Children (WIC)',
  address: '710 North King Street, Honolulu, HI 96817',
  phone: '(808) 841-0011',
  hours: 'Monday–Friday 7:15 AM – 4:30 PM',
}

export const wicMailingAddress = 'Kalihi-Palama Health Center, Women, Infants, Children (WIC), PO Box 17460, Honolulu, HI 96817'

export const wicFax = '(808) 842-1002'

export const wicMessagingPrivacy = 'We collect phone numbers from users. Mobile information will not be shared with third parties or affiliates for marketing or promotional purposes. Text messaging originator opt-in data and consent will not be shared with any third parties. If you wish to stop receiving future communications, you can opt out by texting STOP.'

export const wicMessagingTerms = 'You agree to receive informational messages (appointment reminders, surveys, two-way conversations, etc.) from Kalihi-Palama Health Center. Message frequency varies. Message and data rates may apply. For help, text HELP or call us at (808) 841-0011. You can opt out at any time by replying STOP.'
