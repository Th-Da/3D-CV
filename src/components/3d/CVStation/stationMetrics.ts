import type {CvSectionId} from '../../../types/cv'

/** Height where the focus marker sits, per silhouette. */
export const STATION_MARKER_Y: Record<CvSectionId, number> = {
  about: 3.85,
  experience: 5.3,
  education: 4.95,
  skills: 3.6,
  projects: 3.5,
  contact: 2.3,
}

/**
 * Yaw in radians. Bodies are authored facing +Z; rotate so the entrance
 * points toward the nearest path / city center.
 */
export const STATION_YAW: Record<CvSectionId, number> = {
  experience: 0,
  education: 0,
  skills: Math.PI / 2,
  about: -Math.PI / 2,
  projects: Math.PI,
  contact: Math.PI,
}

/**
 * XZ half-extents for walk collision (building mass + player radius).
 * Tuned to each silhouette so wider props still block, without eating the path.
 */
export const STATION_COLLIDER_HALF: Record<
  CvSectionId,
  {x: number; z: number}
> = {
  about: {x: 2.0, z: 1.6},
  experience: {x: 2.0, z: 1.4},
  education: {x: 2.15, z: 1.7},
  skills: {x: 1.4, z: 1.5},
  projects: {x: 1.5, z: 1.35},
  contact: {x: 0.7, z: 0.6},
}
