export interface TelehealthOption {
  icon: string
  title: string
  description: string
}

export interface RegistrationItem {
  title: string
  body: string
}

export const accordionSections = ['privacy', 'appointment', 'registration', 'hipaa'] as const
export type AccordionSection = typeof accordionSections[number]

/** Accordion item root class — used for scroll-into-view when multiple panels are open. */
export function resourcesSectionClass(section: AccordionSection): string {
  return `resources-section-${section}`
}

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
