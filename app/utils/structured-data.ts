import { FACEBOOK_URL, INSTAGRAM_URL, MAIN_PHONE_HREF } from './external-links'
import { OG_IMAGE_URL, SITE_NAME, SITE_URL } from './site'

const MAIN_ADDRESS = {
  '@type': 'PostalAddress',
  'streetAddress': '915 North King Street',
  'addressLocality': 'Honolulu',
  'addressRegion': 'HI',
  'postalCode': '96817',
  'addressCountry': 'US',
} as const

/** Site-wide MedicalClinic JSON-LD for the homepage and global head. */
export function buildOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    '@id': `${SITE_URL}/#organization`,
    'name': SITE_NAME,
    'url': SITE_URL,
    'image': OG_IMAGE_URL,
    'logo': `${SITE_URL}/images/logo.png`,
    'telephone': MAIN_PHONE_HREF.replace('tel:', ''),
    'address': MAIN_ADDRESS,
    'sameAs': [FACEBOOK_URL, INSTAGRAM_URL],
    'medicalSpecialty': [
      'PrimaryCare',
      'Dentistry',
      'Psychiatric',
      'Nutrition',
    ],
    'description': 'Federally Qualified Health Center providing medical, dental, behavioral health, and nutrition services in Honolulu.',
  }
}
