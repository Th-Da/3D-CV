/** Shared player/camera input axes used by keyboard, joystick, and touch. */

export type Axis2 = {
  /** −1 left … +1 right (world +X). */
  x: number
  /** −1 back … +1 forward (world −Z). */
  y: number
}

export type OrbitDelta = {
  yaw: number
  pitch: number
}

export const ZERO_AXIS: Axis2 = {x: 0, y: 0}
export const ZERO_ORBIT: OrbitDelta = {yaw: 0, pitch: 0}
