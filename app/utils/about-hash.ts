import type { MissionTab } from './about-content'
import type { AboutSectionId } from './about-nav'
import { aboutSectionIds } from './about-nav'

const missionTabIds: MissionTab[] = ['mission', 'vision', 'values']

/** Map a URL hash to a scroll target section id and optional mission tab. */
export function aboutTargetFromHash(hash: string): { sectionId: AboutSectionId | 'mission', tab?: MissionTab } | undefined {
  const id = hash.replace(/^#/, '')
  if (!id)
    return undefined

  if (missionTabIds.includes(id as MissionTab)) {
    return { sectionId: 'mission', tab: id as MissionTab }
  }

  if ((aboutSectionIds as readonly string[]).includes(id)) {
    return { sectionId: id as AboutSectionId }
  }

  return undefined
}
