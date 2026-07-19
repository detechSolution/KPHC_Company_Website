import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { VERCEL_SECURITY_HEADERS } from '../security-headers.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const vercelPath = join(root, 'vercel.json')

const vercel = JSON.parse(readFileSync(vercelPath, 'utf8'))
const htmlRule = vercel.headers?.find(rule => rule.source === '/(.*)')

if (!htmlRule) {
  throw new Error('vercel.json: missing headers rule for "/(.*)"')
}

const cacheControl = htmlRule.headers.find(header => header.key === 'Cache-Control')
if (!cacheControl) {
  throw new Error('vercel.json: missing Cache-Control header on "/(.*)" rule')
}

htmlRule.headers = [cacheControl, ...VERCEL_SECURITY_HEADERS]

writeFileSync(vercelPath, `${JSON.stringify(vercel, null, 2)}\n`)
console.log(`Synced security headers into ${vercelPath}`)
