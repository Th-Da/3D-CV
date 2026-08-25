import {useEffect} from 'react'
import {playerInputStore} from './playerInputStore'
import {
  isCameraSwipeZone,
  isTouchUiTarget,
} from '../../utils/touchDevice'

const YAW_SENSITIVITY = 0.005
const PITCH_SENSITIVITY = 0.0035
const DRAG_THRESHOLD = 8

/**
 * Camera look from touch swipes on the right side of the screen.
 * Listens on window so the canvas stays clickable for station taps.
 */
export function useTouchCameraInput(enabled: boolean) {
  useEffect(() => {
    if (!enabled) {
      return
    }

    let activePointer: number | null = null
    let lastX = 0
    let lastY = 0
    let startX = 0
    let startY = 0
    let dragging = false

    function resetPointer() {
      activePointer = null
      dragging = false
    }

    function handlePointerDown(event: PointerEvent) {
      if (event.pointerType === 'mouse') {
        return
      }
      if (activePointer !== null) {
        return
      }
      if (!isCameraSwipeZone(event.clientX)) {
        return
      }
      if (isTouchUiTarget(event.target)) {
        return
      }

      activePointer = event.pointerId
      startX = event.clientX
      startY = event.clientY
      lastX = event.clientX
      lastY = event.clientY
      dragging = false
    }

    function handlePointerMove(event: PointerEvent) {
      if (event.pointerId !== activePointer) {
        return
      }

      if (!dragging) {
        const travel = Math.hypot(event.clientX - startX, event.clientY - startY)
        if (travel < DRAG_THRESHOLD) {
          return
        }
        dragging = true
      }

      const dx = event.clientX - lastX
      const dy = event.clientY - lastY
      lastX = event.clientX
      lastY = event.clientY

      playerInputStore.touchOrbit.yaw -= dx * YAW_SENSITIVITY
      playerInputStore.touchOrbit.pitch -= dy * PITCH_SENSITIVITY
    }

    function handlePointerEnd(event: PointerEvent) {
      if (event.pointerId !== activePointer) {
        return
      }
      resetPointer()
    }

    window.addEventListener('pointerdown', handlePointerDown)
    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerup', handlePointerEnd)
    window.addEventListener('pointercancel', handlePointerEnd)
    window.addEventListener('blur', resetPointer)

    return () => {
      window.removeEventListener('pointerdown', handlePointerDown)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerup', handlePointerEnd)
      window.removeEventListener('pointercancel', handlePointerEnd)
      window.removeEventListener('blur', resetPointer)
    }
  }, [enabled])
}
