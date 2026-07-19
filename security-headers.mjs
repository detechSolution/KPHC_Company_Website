/**
 * Single source of truth for HTML response security headers.
 * Synced into vercel.json by scripts/sync-vercel-security-headers.mjs.
 *
 * Static-site CSP: inline script/style required for Nuxt SSG payload + JSON-LD.
 */
export const CONTENT_SECURITY_POLICY = [
  'default-src \'self\'',
  'base-uri \'self\'',
  'form-action \'self\'',
  'frame-ancestors \'none\'',
  'object-src \'none\'',
  'script-src \'self\' \'unsafe-inline\'',
  'style-src \'self\' \'unsafe-inline\'',
  'img-src \'self\' data: blob:',
  'font-src \'self\'',
  'connect-src \'self\'',
  'upgrade-insecure-requests',
].join('; ')

/** Lowercase keys for Nuxt routeRules / Nitro headers. */
export const SECURITY_HEADERS = {
  'content-security-policy': CONTENT_SECURITY_POLICY,
  'referrer-policy': 'strict-origin-when-cross-origin',
  'x-content-type-options': 'nosniff',
  'x-frame-options': 'DENY',
  'permissions-policy': 'camera=(), microphone=(), geolocation=()',
}

/** Title-Case keys for vercel.json. Keep order stable for readable diffs. */
export const VERCEL_SECURITY_HEADERS = [
  { key: 'Content-Security-Policy', value: CONTENT_SECURITY_POLICY },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
]
