import type { AccordionSection } from './resources-content'
import { accordionSections } from './resources-content'

/** Map a URL hash fragment to a resources accordion section id, if valid. */
export function sectionFromHash(hash: string): AccordionSection | undefined {
  const id = hash.replace(/^#/, '')
  return accordionSections.find(section => section === id)
}
