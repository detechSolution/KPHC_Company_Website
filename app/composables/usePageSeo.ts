import { DEFAULT_DESCRIPTION, OG_IMAGE_URL, SITE_NAME, SITE_URL } from '../utils/site'

export interface PageSeoOptions {
  /** Page title — `| Kalihi-Palama Health Center` is appended when omitted from the title. */
  title: string
  description?: string
  /** Route path override — defaults to the current route. */
  path?: string
  ogImage?: string
}

function buildCanonicalUrl(path: string): string {
  return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`
}

function buildPageTitle(title: string): string {
  return title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`
}

export function usePageSeo(options: PageSeoOptions) {
  const route = useRoute()
  const path = options.path ?? route.path
  const description = options.description ?? DEFAULT_DESCRIPTION
  const ogImage = options.ogImage ?? OG_IMAGE_URL
  const canonical = buildCanonicalUrl(path)
  const title = buildPageTitle(options.title)

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogUrl: canonical,
    ogImage,
    ogImageAlt: 'Kalihi-Palama Health Center care team with patients',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterImage: ogImage,
  })

  useHead({
    link: [{ rel: 'canonical', href: canonical }],
  })
}
