import { PUBLIC_ROUTES, SITE_URL } from './site'

/** Build sitemap XML from public routes (single source of truth with prerender list). */
export function buildSitemapXml(routes: readonly string[] = PUBLIC_ROUTES): string {
  const urls = routes
    .map(route => `  <url>\n    <loc>${SITE_URL}${route === '/' ? '/' : route}</loc>\n  </url>`)
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
}
