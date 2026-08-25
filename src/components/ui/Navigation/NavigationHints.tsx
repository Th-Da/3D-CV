import {useEffect, useState} from 'react'
import {getCvSection} from '../../../data/cv'
import type {CvSectionId} from '../../../types/cv'
import {prefersTouchControls} from '../../../utils/touchDevice'
import './NavigationHints.css'

type NavigationHintsProps = {
  focusedSectionId: CvSectionId | null
  activeSectionId: CvSectionId | null
}

/**
 * Desktop-only keyboard guidance. Touch users already get joystick + StationOpenPrompt.
 */
export function NavigationHints({
  focusedSectionId,
  activeSectionId,
}: NavigationHintsProps) {
  const [desktopUi, setDesktopUi] = useState(() => !prefersTouchControls())

  useEffect(() => {
    const media = window.matchMedia('(hover: none), (pointer: coarse)')
    function sync() {
      setDesktopUi(!media.matches)
    }
    sync()
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  if (!desktopUi) {
    return null
  }

  const cardOpen = Boolean(activeSectionId)
  const focusedSection =
    !cardOpen && focusedSectionId ? getCvSection(focusedSectionId) : null

  return (
    <div className="navigation-hints" aria-live="polite">
      <p className="navigation-hints__controls">
        {cardOpen ? (
          <>
            <kbd>Esc</kbd> close
          </>
        ) : (
          <>
            <kbd>←↑↓→</kbd> move
            <span className="navigation-hints__sep" aria-hidden="true">
                  ·
                </span>
            <kbd>WASD</kbd> camera
            {focusedSection ? null : (
              <>
                <span className="navigation-hints__sep" aria-hidden="true">
                  ·
                </span>
                <kbd>Enter</kbd> open when near
              </>
            )}
          </>
        )}
      </p>
      {focusedSection ? (
        <p className="navigation-hints__focus">
          <kbd>Enter</kbd> — {focusedSection.title}
        </p>
      ) : null}
    </div>
  )
}
