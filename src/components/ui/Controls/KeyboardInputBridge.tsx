import {useKeyboardMovementInput} from '../../../hooks/input/useKeyboardMovementInput'
import {useKeyboardOrbitInput} from '../../../hooks/input/useKeyboardOrbitInput'

/** Mounts keyboard → shared player input bindings. */
export function KeyboardInputBridge() {
  useKeyboardMovementInput()
  useKeyboardOrbitInput()
  return null
}
