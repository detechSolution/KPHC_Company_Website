const RELOAD_STORAGE_KEY = 'khpc:chunk-reload-attempt'
const RELOAD_COOLDOWN_MS = 10_000

function isChunkLoadError(error: unknown): boolean {
  if (!error)
    return false

  const message = error instanceof Error ? error.message : String(error)
  const name = error instanceof Error ? error.name : ''

  return (
    name === 'ChunkLoadError'
    || message.includes('Failed to fetch dynamically imported module')
    || message.includes('Importing a module script failed')
    || message.includes('Failed to load module script')
    || message.includes('Loading chunk')
    || message.includes('dynamically imported module')
  )
}

function reloadOnce(): boolean {
  const lastAttempt = Number(sessionStorage.getItem(RELOAD_STORAGE_KEY) || 0)
  const now = Date.now()

  if (now - lastAttempt < RELOAD_COOLDOWN_MS)
    return false

  sessionStorage.setItem(RELOAD_STORAGE_KEY, String(now))
  window.location.reload()
  return true
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:chunkError', () => {
    reloadOnce()
  })

  nuxtApp.hook('vue:error', (error) => {
    if (isChunkLoadError(error))
      reloadOnce()
  })

  window.addEventListener('unhandledrejection', (event) => {
    if (!isChunkLoadError(event.reason))
      return

    event.preventDefault()
    reloadOnce()
  })

  window.addEventListener('error', (event) => {
    const target = event.target
    if (
      (target instanceof HTMLScriptElement && target.src.includes('/_nuxt/'))
      || (target instanceof HTMLLinkElement && target.href.includes('/_nuxt/'))
    ) {
      reloadOnce()
      return
    }

    if (isChunkLoadError(event.error ?? event.message))
      reloadOnce()
  }, true)
})
