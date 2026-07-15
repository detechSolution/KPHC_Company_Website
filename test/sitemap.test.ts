import { describe, expect, it } from 'vitest'
import { PUBLIC_ROUTES, SITE_URL } from '../app/utils/site'
import { buildSitemapXml } from '../app/utils/sitemap'

describe('buildSitemapXml', () => {
  it('includes every public route', () => {
    const xml = buildSitemapXml()

    for (const route of PUBLIC_ROUTES) {
      const loc = route === '/' ? `${SITE_URL}/` : `${SITE_URL}${route}`
      expect(xml).toContain(`<loc>${loc}</loc>`)
    }
  })

  it('emits valid sitemap document structure', () => {
    const xml = buildSitemapXml()

    expect(xml).toMatch(/^<\?xml version="1.0" encoding="UTF-8"\?>/)
    expect(xml).toContain('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')
    expect(xml).toContain('</urlset>')
    expect(xml.match(/<url>/g)?.length).toBe(PUBLIC_ROUTES.length)
  })
})
