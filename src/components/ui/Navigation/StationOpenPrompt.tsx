import {useEffect, useState} from 'react'
import {getCvSection} from '../../../data/cv'
import type {CvSectionId} from '../../../types/cv'
import {prefersTouchControls} from '../../../utils/touchDevice'
import './StationOpenPrompt.css'

type StationOpenPromptProps = {
  focusedSectionId: CvSectionId | null
  activeSectionId: CvSectionId | null
  onOpen: (id: CvSectionId) => void
}

/**
 * Touch-only prompt when the player is near any CV station.
 * Reuses focusedSectionId from proximity detection — works for all stations.
 */
export function StationOpenPrompt({
  focusedSectionId,
  activeSectionId,
  onOpen,
}: StationOpenPromptProps) {
  const [touchUi, setTouchUi] = useState(prefersTouchControls)

  useEffect(() => {
    const media = window.matchMedia('(hover: none), (pointer: coarse)')
    function sync() {
      setTouchUi(media.matches)
    }
    sync()
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  if (!touchUi || !focusedSectionId || activeSectionId) {
    return null
  }

  const section = getCvSection(focusedSectionId)

  return (
    <button
      type="button"
      className="station-open-prompt"
      aria-label={`Open ${section.title} card`}
      onClick={() => onOpen(focusedSectionId)}
    >
      Open card
    </button>
  )
}
