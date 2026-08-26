import {useEffect} from 'react'
import type {CvSectionId} from '../../types/cv'

type UseKeyboardSectionInputOptions = {
  activeSectionId: CvSectionId | null
  focusedSectionId: CvSectionId | null
  onOpen: (id: CvSectionId) => void
  onClose: () => void
}

/**
 * Enter opens the focused station card; Escape closes the active card.
 */
export function useKeyboardSectionInput({
  activeSectionId,
  focusedSectionId,
  onOpen,
  onClose,
}: UseKeyboardSectionInputOptions) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.repeat) {
        return
      }

      if (event.code === 'Escape' && activeSectionId) {
        event.preventDefault()
        onClose()
        return
      }

      if (event.code !== 'Enter' && event.code !== 'NumpadEnter') {
        return
      }
      if (activeSectionId || !focusedSectionId) {
        return
      }

      event.preventDefault()
      onOpen(focusedSectionId)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeSectionId, focusedSectionId, onOpen, onClose])
}
