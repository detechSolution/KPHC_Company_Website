import { writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createJiti } from 'jiti'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const outputPath = join(root, '.output/public/sitemap.xml')
const sitemapModule = join(root, 'app/utils/sitemap.ts')

const jiti = createJiti(import.meta.url, { cwd: root })
const { buildSitemapXml } = await jiti.import(sitemapModule)

writeFileSync(outputPath, buildSitemapXml())
console.log(`Wrote ${outputPath}`)
