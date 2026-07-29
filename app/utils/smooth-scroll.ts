export interface SmoothScrollOptions {
  /** Extra time after the target exists (accordion expand, tab panel, etc.). */
  settleMs?: number
  /** Max time to wait for the element when navigating from another route. */
  waitMs?: number
}

export function scrollBehaviorForRoute(): ScrollBehavior {
  if (import.meta.server)
    return 'auto'
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
}

export function scrollElementIntoView(el: HTMLElement, behavior = scrollBehaviorForRoute()) {
  const scrollMarginTop = Number.parseFloat(getComputedStyle(el).scrollMarginTop) || 0
  const top = Math.max(0, window.scrollY + el.getBoundingClientRect().top - scrollMarginTop)
  window.scrollTo({ top, behavior })
}

async function waitForElementById(id: string, waitMs: number): Promise<HTMLElement | null> {
  const deadline = performance.now() + waitMs

  while (performance.now() < deadline) {
    const el = document.getElementById(id)
    if (el)
      return el
    await new Promise<void>(resolve => requestAnimationFrame(() => resolve()))
  }

  return document.getElementById(id)
}

/** Smooth scroll to a section id, honoring scroll-margin and reduced-motion preferences. */
export async function smoothScrollToElementId(
  id: string,
  { settleMs = 0, waitMs = 2500 }: SmoothScrollOptions = {},
): Promise<void> {
  if (import.meta.server)
    return

  await document.fonts?.ready

  const el = await waitForElementById(id, waitMs)
  if (!el)
    return

  await new Promise<void>(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve())))

  if (settleMs > 0)
    await new Promise<void>(resolve => setTimeout(resolve, settleMs))

  scrollElementIntoView(el)
}
