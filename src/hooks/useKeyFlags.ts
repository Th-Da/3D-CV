import {useEffect, useRef} from 'react'

type KeyFlagMap<T extends string> = Record<string, T>

type UseKeyFlagsOptions = {
  preventDefault?: boolean
  onChange?: (keys: Record<string, boolean>) => void
}

/**
 * Tracks a set of keyboard codes as boolean flags.
 * Clears all flags on window blur so stuck keys do not linger.
 */
export function useKeyFlags<T extends string>(
  initial: Record<T, boolean>,
  codeToFlag: KeyFlagMap<T>,
  options?: UseKeyFlagsOptions,
) {
  const keysRef = useRef(initial)
  const preventDefault = options?.preventDefault ?? false
  const onChangeRef = useRef(options?.onChange)

  useEffect(() => {
    onChangeRef.current = options?.onChange
  }, [options?.onChange])

  useEffect(() => {
    function notify() {
      onChangeRef.current?.(keysRef.current)
    }

    function handleKeyDown(event: KeyboardEvent) {
      const flag = codeToFlag[event.code]
      if (!flag) {
        return
      }
      if (preventDefault) {
        event.preventDefault()
      }
      keysRef.current[flag] = true
      notify()
    }

    function handleKeyUp(event: KeyboardEvent) {
      const flag = codeToFlag[event.code]
      if (!flag) {
        return
      }
      keysRef.current[flag] = false
      notify()
    }

    function clearKeys() {
      for (const flag of Object.keys(keysRef.current) as T[]) {
        keysRef.current[flag] = false
      }
      notify()
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
    window.addEventListener('blur', clearKeys)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
      window.removeEventListener('blur', clearKeys)
    }
  }, [codeToFlag, preventDefault])

  return keysRef
}
