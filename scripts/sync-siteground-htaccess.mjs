import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { VERCEL_SECURITY_HEADERS } from '../security-headers.mjs'

const START_MARKER = '# @sync-security-headers-start'
const END_MARKER = '# @sync-security-headers-end'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const htaccessPath = join(root, 'public/.htaccess')

const headerLines = VERCEL_SECURITY_HEADERS.map(
  ({ key, value }) => `  Header always set ${key} "${value}"`,
).join('\n')

const syncedBlock = [
  START_MARKER,
  '  # Security headers (synced from security-headers.mjs)',
  headerLines,
  END_MARKER,
].join('\n')

let content = readFileSync(htaccessPath, 'utf8')
const markerPattern = new RegExp(
  `${START_MARKER.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[\\s\\S]*?${END_MARKER.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`,
)

if (!markerPattern.test(content)) {
  throw new Error(
    `public/.htaccess is missing "${START_MARKER}" / "${END_MARKER}" markers.`,
  )
}

content = content.replace(markerPattern, syncedBlock)
writeFileSync(htaccessPath, content)
console.log(`Synced security headers into ${htaccessPath}`)
