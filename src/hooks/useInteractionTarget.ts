import type {CvSectionId} from '../types/cv'
import type {DistrictPlot} from '../utils/sceneLayout'

/** Distance (XZ) within which Enter can open a station. */
export const INTERACT_RADIUS = 3.25

/**
 * Returns a finder for the nearest interactive station within INTERACT_RADIUS.
 * Only plots passed in are considered (e.g. stations that exist in the scene).
 */
export function useInteractionTarget(plots: DistrictPlot[]) {
  return (playerX: number, playerZ: number): CvSectionId | null => {
    let nearestId: CvSectionId | null = null
    let nearestDistance = INTERACT_RADIUS

    for (const plot of plots) {
      const dx = plot.position[0] - playerX
      const dz = plot.position[1] - playerZ
      const distance = Math.hypot(dx, dz)

      if (distance < nearestDistance) {
        nearestDistance = distance
        nearestId = plot.id
      }
    }

    return nearestId
  }
}
