import {useFrame} from '@react-three/fiber'
import {useRef} from 'react'
import type {Group} from 'three'
import {
  consumeOrbitDelta,
  readMoveAxis,
} from '../../../hooks/input/playerInputStore'
import {useInteractionTarget} from '../../../hooks/useInteractionTarget'
import {
  axisToDisplacement,
  MAX_CAMERA_PITCH,
  MIN_CAMERA_PITCH,
  resolveWalkPosition,
} from '../../../hooks/usePlayerMovement'
import type {CvSectionId} from '../../../types/cv'
import {
  GROUND_SURFACE_Y,
  type DistrictPlot,
} from '../../../utils/sceneLayout'
import {BlockMesh} from '../CVStation/BlockMesh'

/** Spawn on the path west of the About station. */
const SPAWN_XZ: [number, number] = [3, 0]
/** Matches the previous fixed offset [8, 7, 8] around the player. */
const CAMERA_RADIUS = Math.hypot(8, 8)
const INITIAL_YAW = Math.PI / 4
const INITIAL_PITCH = Math.atan2(7, CAMERA_RADIUS)
const CAMERA_FOLLOW = 8
const LOOK_AT_Y = 1.2

type PlayerControllerProps = {
  plots: DistrictPlot[]
  onFocusChange: (id: CvSectionId | null) => void
}

export function PlayerController({plots, onFocusChange}: PlayerControllerProps) {
  const groupRef = useRef<Group>(null)
  const focusedRef = useRef<CvSectionId | null>(null)
  const yawRef = useRef(INITIAL_YAW)
  const pitchRef = useRef(INITIAL_PITCH)
  const findTarget = useInteractionTarget(plots)

  useFrame((state, delta) => {
    const group = groupRef.current
    if (!group) {
      return
    }

    const [dx, dz] = axisToDisplacement(readMoveAxis(), delta)
    if (dx !== 0 || dz !== 0) {
      const [nextX, nextZ] = resolveWalkPosition(
        group.position.x,
        group.position.z,
        group.position.x + dx,
        group.position.z + dz,
        plots,
      )
      group.position.x = nextX
      group.position.z = nextZ
    }
    group.position.y = GROUND_SURFACE_Y

    const nextFocus = findTarget(group.position.x, group.position.z)
    if (nextFocus !== focusedRef.current) {
      focusedRef.current = nextFocus
      onFocusChange(nextFocus)
    }

    const {yaw, pitch} = consumeOrbitDelta(delta)
    yawRef.current += yaw
    pitchRef.current = Math.min(
      MAX_CAMERA_PITCH,
      Math.max(MIN_CAMERA_PITCH, pitchRef.current + pitch),
    )

    const targetX =
      group.position.x + Math.sin(yawRef.current) * CAMERA_RADIUS
    const targetY =
      LOOK_AT_Y + Math.tan(pitchRef.current) * CAMERA_RADIUS
    const targetZ =
      group.position.z + Math.cos(yawRef.current) * CAMERA_RADIUS

    const {camera} = state
    const follow = 1 - Math.exp(-CAMERA_FOLLOW * delta)
    camera.position.x += (targetX - camera.position.x) * follow
    camera.position.y += (targetY - camera.position.y) * follow
    camera.position.z += (targetZ - camera.position.z) * follow
    camera.lookAt(group.position.x, LOOK_AT_Y, group.position.z)
  })

  return (
    <group ref={groupRef} position={[SPAWN_XZ[0], GROUND_SURFACE_Y, SPAWN_XZ[1]]}>
      <BlockMesh position={[0, 0.55, 0]} size={[0.55, 0.9, 0.35]} color="#3d5a80" />
      <BlockMesh position={[0, 1.15, 0]} size={[0.42, 0.42, 0.42]} color="#e8c4a8" />
      <BlockMesh position={[0, 0.35, 0.22]} size={[0.35, 0.2, 0.08]} color="#2f4563" />
    </group>
  )
}
