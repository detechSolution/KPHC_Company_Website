import type { RouterConfig } from 'nuxt/schema'

/** Pages that apply hash state and scrolling themselves (accordion, tabs, etc.). */
const CUSTOM_HASH_SCROLL_PATHS = new Set(['/about', '/resources'])

export default {
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition)
      return savedPosition

    if (to.hash && CUSTOM_HASH_SCROLL_PATHS.has(to.path))
      return false

    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }

    return { top: 0, left: 0 }
  },
} satisfies RouterConfig
