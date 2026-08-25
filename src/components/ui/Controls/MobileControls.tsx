import {useEffect, useState} from 'react'
import {useTouchCameraInput} from '../../../hooks/input/useTouchCameraInput'
import {prefersTouchControls} from '../../../utils/touchDevice'
import {VirtualJoystick} from './VirtualJoystick'

/**
 * Mobile control layer: joystick (move) + window-level camera swipe.
 * Does not overlay the canvas so station taps still reach the 3D scene.
 */
export function MobileControls() {
  const [enabled, setEnabled] = useState(prefersTouchControls)
  useTouchCameraInput(enabled)

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
      <VirtualJoystick />
    </div>
  )
}
