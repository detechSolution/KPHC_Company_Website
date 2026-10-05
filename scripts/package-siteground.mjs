import { spawnSync } from 'node:child_process'
import { constants } from 'node:fs'
import { access, rm, stat } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const outputDirectory = join(root, '.output/public')
const archivePath = join(root, 'siteground-deploy.zip')

for (const requiredFile of ['index.html', '404.html', '.htaccess']) {
  try {
    await access(join(outputDirectory, requiredFile), constants.R_OK)
  }
  catch {
    throw new Error(`Missing .output/public/${requiredFile}. Run "pnpm generate" first.`)
  }
}

await rm(archivePath, { force: true })

const result = spawnSync(
  'zip',
  ['-q', '-r', archivePath, '.', '-x', '*.DS_Store'],
  { cwd: outputDirectory, encoding: 'utf8' },
)

if (result.error?.code === 'ENOENT') {
  throw new Error(
    'The "zip" CLI is required to create siteground-deploy.zip. '
    + 'It is available on macOS and most Linux installs; on Windows use Git Bash, WSL, '
    + 'or install a zip utility and ensure it is on PATH.',
  )
}

if (result.status !== 0) {
  throw new Error(result.stderr || `zip exited with status ${result.status}`)
}

const archive = await stat(archivePath)
console.log(`Created ${archivePath} (${(archive.size / 1024 / 1024).toFixed(1)} MB)`)
