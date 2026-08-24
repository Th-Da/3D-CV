import {ZERO_AXIS, ZERO_ORBIT, type Axis2, type OrbitDelta} from '../../types/input'

/**
 * Mutable shared input bus. Keyboard, joystick, and touch write here;
 * the player/camera read merged values each frame.
 */
export const playerInputStore = {
  keyboardMove: {...ZERO_AXIS} as Axis2,
  joystickMove: {...ZERO_AXIS} as Axis2,
  keyboardOrbit: {...ZERO_ORBIT} as OrbitDelta,
  touchOrbit: {...ZERO_ORBIT} as OrbitDelta,
}

/** Prefer joystick while active; otherwise keyboard. Clamp to unit circle. */
export function readMoveAxis(): Axis2 {
  const joy = playerInputStore.joystickMove
  const key = playerInputStore.keyboardMove
  const usingJoy = joy.x !== 0 || joy.y !== 0
  const axis = usingJoy ? joy : key
  const length = Math.hypot(axis.x, axis.y)
  if (length <= 1 || length === 0) {
    return axis
  }
  return {x: axis.x / length, y: axis.y / length}
}

/**
 * Merge keyboard orbit rates (× delta) with touch look deltas, then clear touch.
 */
export function consumeOrbitDelta(delta: number): OrbitDelta {
  const key = playerInputStore.keyboardOrbit
  const touch = playerInputStore.touchOrbit
  const yaw = key.yaw * delta + touch.yaw
  const pitch = key.pitch * delta + touch.pitch
  touch.yaw = 0
  touch.pitch = 0
  return {yaw, pitch}
}
