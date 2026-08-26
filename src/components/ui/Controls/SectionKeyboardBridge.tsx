import {useKeyboardSectionInput} from '../../../hooks/input/useKeyboardSectionInput'
import type {CvSectionId} from '../../../types/cv'

type SectionKeyboardBridgeProps = {
  activeSectionId: CvSectionId | null
  focusedSectionId: CvSectionId | null
  onOpen: (id: CvSectionId) => void
  onClose: () => void
}

/** Mounts Enter/Escape → section card open/close. */
export function SectionKeyboardBridge({
  activeSectionId,
  focusedSectionId,
  onOpen,
  onClose,
}: SectionKeyboardBridgeProps) {
  useKeyboardSectionInput({
    activeSectionId,
    focusedSectionId,
    onOpen,
    onClose,
  })
  return null
}
