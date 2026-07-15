import { readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import { PUBLIC_ROUTES } from '../app/utils/site'

const pagesDir = join(fileURLToPath(new URL('..', import.meta.url)), 'app/pages')

function discoverPageRoutes(dir: string, prefix = ''): string[] {
  const routes: string[] = []

  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry)

    if (statSync(fullPath).isDirectory()) {
      routes.push(...discoverPageRoutes(fullPath, `${prefix}/${entry}`))
      continue
    }

    if (!entry.endsWith('.vue'))
      continue

    const name = entry.replace(/\.vue$/, '')
    routes.push(name === 'index' ? (prefix || '/') : `${prefix}/${name}`)
  }

  return routes
}

describe('pUBLIC_ROUTES', () => {
  it('matches file-based pages in app/pages', () => {
    const discovered = discoverPageRoutes(pagesDir).sort()
    expect([...PUBLIC_ROUTES].sort()).toEqual(discovered)
  })
})
