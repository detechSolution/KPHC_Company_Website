/** Production site origin — used for absolute OG/sitemap URLs at build time. */
export const SITE_URL = 'https://www.kphc.org'

/** Default social preview image (1200×630 recommended; banner is representative). */
export const OG_IMAGE_PATH = '/images/carousel/display/banner-1.webp'
export const OG_IMAGE_URL = `${SITE_URL}${OG_IMAGE_PATH}`

export const SITE_NAME = 'Kalihi-Palama Health Center'

export const DEFAULT_DESCRIPTION = 'Care when you need it most of all. Comprehensive medical, dental, and behavioral health services for our community.'

/** All public routes for sitemap generation. */
export const PUBLIC_ROUTES = [
  '/',
  '/about',
  '/careers',
  '/donate',
  '/events',
  '/providers',
  '/resources',
  '/services',
  '/services/additional',
  '/services/behavioral-health',
  '/services/dental',
  '/services/medical',
  '/services/nutrition',
  '/services/wic',
] as const
