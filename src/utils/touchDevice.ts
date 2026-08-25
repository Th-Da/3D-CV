/** True on phones/tablets where we show touch controls. */
export function prefersTouchControls() {
  if (typeof window === 'undefined') {
    return false
  }
  return window.matchMedia('(hover: none), (pointer: coarse)').matches
}

/** Right-side band used for camera swipe (must match useTouchCameraInput). */
export const CAMERA_SWIPE_ZONE_START = 0.42

export function isCameraSwipeZone(clientX: number) {
  return clientX >= window.innerWidth * CAMERA_SWIPE_ZONE_START
}

export function isTouchUiTarget(target: EventTarget | null) {
  if (!(target instanceof Element)) {
    return false
  }
  return Boolean(
    target.closest(
      'button, a, .info-card, .virtual-joystick, .station-open-prompt',
    ),
  )
}
