import { describe, expect, it } from 'vitest'
import { SITE_NAME, SITE_URL } from '../app/utils/site'
import { buildOrganizationJsonLd } from '../app/utils/structured-data'

describe('buildOrganizationJsonLd', () => {
  it('emits MedicalClinic schema with site identity', () => {
    const schema = buildOrganizationJsonLd()

    expect(schema['@context']).toBe('https://schema.org')
    expect(schema['@type']).toBe('MedicalClinic')
    expect(schema.name).toBe(SITE_NAME)
    expect(schema.url).toBe(SITE_URL)
    expect(schema['@id']).toBe(`${SITE_URL}/#organization`)
    expect(schema.address).toMatchObject({
      '@type': 'PostalAddress',
      'addressLocality': 'Honolulu',
      'addressRegion': 'HI',
    })
    expect(schema.sameAs).toHaveLength(2)
  })
})
