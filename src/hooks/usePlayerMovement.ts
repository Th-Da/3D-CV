import {PLATFORM_SIZE, type DistrictPlot} from '../utils/sceneLayout'
import type {Axis2} from '../types/input'

export const MOVE_SPEED = 5
/** Keep the player footprint inside the walkable platform edge. */
const WALK_LIMIT = PLATFORM_SIZE / 2 - 0.45
/** Matches the station body in CVStation (`BlockMesh` size [2, 2.2, 2]). */
const STATION_BODY_HALF = 1
/** Approx. half-width of the player body so walls feel solid. */
const PLAYER_RADIUS = 0.35
const STATION_COLLIDER_HALF = STATION_BODY_HALF + PLAYER_RADIUS

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
  return plots.map((plot) => ({
    minX: plot.position[0] - STATION_COLLIDER_HALF,
    maxX: plot.position[0] + STATION_COLLIDER_HALF,
    minZ: plot.position[1] - STATION_COLLIDER_HALF,
    maxZ: plot.position[1] + STATION_COLLIDER_HALF,
  }))
}

function hitsStation(x: number, z: number, colliders: StationCollider[]) {
  return colliders.some(
    (box) =>
      x >= box.minX && x <= box.maxX && z >= box.minZ && z <= box.maxZ,
  )
}

/**
 * Clamps to the platform and blocks station building volumes.
 * Tries full move, then X-only / Z-only so the player can slide along walls.
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

/** Convert a −1…1 move axis into world XZ displacement for this frame. */
export function axisToDisplacement(
  axis: Axis2,
  delta: number,
  speed = MOVE_SPEED,
): [number, number] {
  if (axis.x === 0 && axis.y === 0) {
    return [0, 0]
  }
  // +y forward → −Z, +x right → +X
  return [axis.x * speed * delta, -axis.y * speed * delta]
}
