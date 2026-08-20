/** Accessible name suffix for links that open a new browsing context. */
export const NEW_TAB_SUFFIX = ' (opens in a new tab)'

export function newTabLabel(label: string) {
  return `${label}${NEW_TAB_SUFFIX}`
}
