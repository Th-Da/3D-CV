import {useRef, type PointerEvent} from 'react'
import {playerInputStore} from '../../../hooks/input/playerInputStore'
import './VirtualJoystick.css'

const MAX_RADIUS = 48

type PointerPos = {x: number; y: number}

function clampAxis(x: number, y: number): {x: number; y: number} {
  const length = Math.hypot(x, y)
  if (length <= 1 || length === 0) {
    return {x, y}
  }
  return {x: x / length, y: y / length}
}

/**
 * HTML virtual joystick (not in the 3D scene). Writes to shared joystickMove axis.
 */
export function VirtualJoystick() {
  const baseRef = useRef<HTMLDivElement>(null)
  const originRef = useRef<PointerPos | null>(null)
  const activePointerRef = useRef<number | null>(null)

  function setThumb(offsetX: number, offsetY: number) {
    const thumb = baseRef.current?.querySelector<HTMLElement>('.virtual-joystick__thumb')
    if (thumb) {
      thumb.style.transform = `translate(${offsetX}px, ${offsetY}px)`
    }
  }

  function reset() {
    playerInputStore.joystickMove.x = 0
    playerInputStore.joystickMove.y = 0
    originRef.current = null
    activePointerRef.current = null
    setThumb(0, 0)
  }

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    if (activePointerRef.current !== null) {
      return
    }
    event.preventDefault()
    event.currentTarget.setPointerCapture(event.pointerId)
    activePointerRef.current = event.pointerId
    const rect = event.currentTarget.getBoundingClientRect()
    originRef.current = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    }
    handlePointerMove(event)
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (activePointerRef.current !== event.pointerId || !originRef.current) {
      return
    }
    event.preventDefault()
    const dx = event.clientX - originRef.current.x
    const dy = event.clientY - originRef.current.y
    const distance = Math.hypot(dx, dy)
    const scale = distance > MAX_RADIUS ? MAX_RADIUS / distance : 1
    const offsetX = dx * scale
    const offsetY = dy * scale
    setThumb(offsetX, offsetY)

    // Screen up (negative dy) → forward (+y)
    const axis = clampAxis(offsetX / MAX_RADIUS, -offsetY / MAX_RADIUS)
    playerInputStore.joystickMove.x = axis.x
    playerInputStore.joystickMove.y = axis.y
  }

  function handlePointerUp(event: PointerEvent<HTMLDivElement>) {
    if (activePointerRef.current !== event.pointerId) {
      return
    }
    reset()
  }

  return (
    <div
      ref={baseRef}
      className="virtual-joystick"
      role="presentation"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <div className="virtual-joystick__base">
        <div className="virtual-joystick__thumb" />
      </div>
    </div>
  )
}
