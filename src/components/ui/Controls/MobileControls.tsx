import {useEffect, useState} from 'react'
import {TouchCameraPad} from './TouchCameraPad'
import {VirtualJoystick} from './VirtualJoystick'

function prefersTouchControls() {
  if (typeof window === 'undefined') {
    return false
  }
  return window.matchMedia('(hover: none), (pointer: coarse)').matches
}

/**
 * Mobile control layer over the canvas: joystick (move) + swipe pad (look).
 */
export function MobileControls() {
  const [enabled, setEnabled] = useState(prefersTouchControls)

  useEffect(() => {
    const media = window.matchMedia('(hover: none), (pointer: coarse)')
    function sync() {
      setEnabled(media.matches)
    }
    sync()
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  if (!enabled) {
    return null
  }

  return (
    <div className="mobile-controls">
      <TouchCameraPad />
      <VirtualJoystick />
    </div>
  )
}
