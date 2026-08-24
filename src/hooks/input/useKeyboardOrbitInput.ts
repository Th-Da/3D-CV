import {useKeyFlags} from '../useKeyFlags'
import {playerInputStore} from './playerInputStore'

const YAW_SPEED = 1.6
const PITCH_SPEED = 1.2

type OrbitFlag = 'yawLeft' | 'yawRight' | 'pitchUp' | 'pitchDown'

const ORBIT_KEY_MAP: Record<string, OrbitFlag> = {
  KeyA: 'yawLeft',
  KeyD: 'yawRight',
  KeyW: 'pitchUp',
  KeyS: 'pitchDown',
}

function syncKeyboardOrbit(keys: Record<string, boolean>) {
  const flags = keys as Record<OrbitFlag, boolean>
  let yaw = 0
  let pitch = 0
  if (flags.yawLeft) yaw += YAW_SPEED
  if (flags.yawRight) yaw -= YAW_SPEED
  if (flags.pitchUp) pitch += PITCH_SPEED
  if (flags.pitchDown) pitch -= PITCH_SPEED
  playerInputStore.keyboardOrbit.yaw = yaw
  playerInputStore.keyboardOrbit.pitch = pitch
}

/**
 * WASD → continuous orbit rates on the shared input (rad/sec style).
 * A/D yaw, W/S pitch.
 */
export function useKeyboardOrbitInput() {
  useKeyFlags(
    {yawLeft: false, yawRight: false, pitchUp: false, pitchDown: false},
    ORBIT_KEY_MAP,
    {onChange: syncKeyboardOrbit},
  )
}
