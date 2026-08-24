import {useKeyFlags} from '../useKeyFlags'
import {playerInputStore} from './playerInputStore'

type MoveFlag = 'forward' | 'back' | 'left' | 'right'

const MOVE_KEY_MAP: Record<string, MoveFlag> = {
  ArrowUp: 'forward',
  ArrowDown: 'back',
  ArrowLeft: 'left',
  ArrowRight: 'right',
}

function syncKeyboardMove(keys: Record<string, boolean>) {
  const flags = keys as Record<MoveFlag, boolean>
  let x = 0
  let y = 0
  if (flags.forward) y += 1
  if (flags.back) y -= 1
  if (flags.left) x -= 1
  if (flags.right) x += 1
  const length = Math.hypot(x, y)
  if (length > 1) {
    x /= length
    y /= length
  }
  playerInputStore.keyboardMove.x = x
  playerInputStore.keyboardMove.y = y
}

/**
 * Arrow keys → shared move axis { x, y } in −1…1.
 * ↑ forward (+y), ↓ back (−y), ← (−x), → (+x).
 */
export function useKeyboardMovementInput() {
  useKeyFlags(
    {forward: false, back: false, left: false, right: false},
    MOVE_KEY_MAP,
    {preventDefault: true, onChange: syncKeyboardMove},
  )
}
