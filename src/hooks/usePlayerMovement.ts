import {STATION_COLLIDER_HALF} from '../components/3d/CVStation/stationMetrics'
import {PLATFORM_SIZE, type DistrictPlot} from '../utils/sceneLayout'
import type {Axis2} from '../types/input'

export const MOVE_SPEED = 5
/** Keep the player footprint inside the walkable platform edge. */
const WALK_LIMIT = PLATFORM_SIZE / 2 - 0.45

export const MIN_CAMERA_PITCH = 0.25
export const MAX_CAMERA_PITCH = 1.15

type StationCollider = {
  minX: number
  maxX: number
  minZ: number
  maxZ: number
}

function clampToPlatform(x: number, z: number): [number, number] {
  return [
    Math.min(WALK_LIMIT, Math.max(-WALK_LIMIT, x)),
    Math.min(WALK_LIMIT, Math.max(-WALK_LIMIT, z)),
  ]
}

function collidersFromPlots(plots: DistrictPlot[]): StationCollider[] {
  return plots.map((plot) => {
    const half = STATION_COLLIDER_HALF[plot.id]
    return {
      minX: plot.position[0] - half.x,
      maxX: plot.position[0] + half.x,
      minZ: plot.position[1] - half.z,
      maxZ: plot.position[1] + half.z,
    }
  })
}

function hitsStation(x: number, z: number, colliders: StationCollider[]) {
  return colliders.some(
    (box) =>
      x >= box.minX && x <= box.maxX && z >= box.minZ && z <= box.maxZ,
  )
}

/**
 * Clamps to the platform and blocks station building volumes.
 */
export function resolveWalkPosition(
  fromX: number,
  fromZ: number,
  toX: number,
  toZ: number,
  plots: DistrictPlot[],
): [number, number] {
  const colliders = collidersFromPlots(plots)
  const [clampedX, clampedZ] = clampToPlatform(toX, toZ)

  if (!hitsStation(clampedX, clampedZ, colliders)) {
    return [clampedX, clampedZ]
  }

  const [slideX] = clampToPlatform(toX, fromZ)
  if (!hitsStation(slideX, fromZ, colliders)) {
    return [slideX, fromZ]
  }

  const [, slideZ] = clampToPlatform(fromX, toZ)
  if (!hitsStation(fromX, slideZ, colliders)) {
    return [fromX, slideZ]
  }

  return [fromX, fromZ]
}

/**
 * Convert a −1…1 move axis into world XZ displacement for this frame.
 * `yaw` is the orbit camera yaw so +y walks into the view and +x walks right
 * relative to the camera.
 */
export function axisToDisplacement(
  axis: Axis2,
  delta: number,
  yaw: number,
  speed = MOVE_SPEED,
): [number, number] {
  if (axis.x === 0 && axis.y === 0) {
    return [0, 0]
  }
  // Camera sits at (sin(yaw), cos(yaw)) from the player; view-forward is opposite.
  const forwardX = -Math.sin(yaw)
  const forwardZ = -Math.cos(yaw)
  const rightX = Math.cos(yaw)
  const rightZ = -Math.sin(yaw)
  const step = speed * delta
  return [
    (rightX * axis.x + forwardX * axis.y) * step,
    (rightZ * axis.x + forwardZ * axis.y) * step,
  ]
}
