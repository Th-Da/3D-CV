import {useRef, type PointerEvent} from 'react'
import {playerInputStore} from '../../../hooks/input/playerInputStore'
import './TouchCameraPad.css'

const YAW_SENSITIVITY = 0.005
const PITCH_SENSITIVITY = 0.0035

/**
 * Right-side swipe zone for camera look.
 * Writes one-shot orbit deltas into shared touchOrbit.
 */
export function TouchCameraPad() {
  const activePointerRef = useRef<number | null>(null)
  const lastRef = useRef<{x: number; y: number} | null>(null)

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    if (activePointerRef.current !== null) {
      return
    }
    const target = event.target as HTMLElement
    if (target.closest('button, a, .info-card, .virtual-joystick')) {
      return
    }
    event.currentTarget.setPointerCapture(event.pointerId)
    activePointerRef.current = event.pointerId
    lastRef.current = {x: event.clientX, y: event.clientY}
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (activePointerRef.current !== event.pointerId || !lastRef.current) {
      return
    }
    const dx = event.clientX - lastRef.current.x
    const dy = event.clientY - lastRef.current.y
    lastRef.current = {x: event.clientX, y: event.clientY}

    // Swipe right → look right (yaw decreases with existing A/D convention).
    playerInputStore.touchOrbit.yaw -= dx * YAW_SENSITIVITY
    playerInputStore.touchOrbit.pitch -= dy * PITCH_SENSITIVITY
  }

  function handlePointerUp(event: PointerEvent<HTMLDivElement>) {
    if (activePointerRef.current !== event.pointerId) {
      return
    }
    activePointerRef.current = null
    lastRef.current = null
  }

  return (
    <div
      className="touch-camera-pad"
      role="presentation"
      aria-hidden
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    />
  )
}
