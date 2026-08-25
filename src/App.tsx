import {useEffect, useState} from 'react'
import './App.css'
import {SceneCanvas} from './components/shared/SceneCanvas'
import {KeyboardInputBridge} from './components/ui/Controls/KeyboardInputBridge'
import {MobileControls} from './components/ui/Controls/MobileControls'
import {InfoCard} from './components/ui/InfoCard/InfoCard'
import {NavigationHints} from './components/ui/Navigation/NavigationHints'
import {StationOpenPrompt} from './components/ui/Navigation/StationOpenPrompt'
import {getCvSection} from './data/cv'
import {CVScene} from './scenes/CVScene/CVScene'
import type {CvSectionId} from './types/cv'

function App() {
  const [activeSectionId, setActiveSectionId] = useState<CvSectionId | null>(null)
  const [focusedSectionId, setFocusedSectionId] = useState<CvSectionId | null>(null)
  const activeSection = activeSectionId ? getCvSection(activeSectionId) : null

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.repeat) {
        return
      }

      if (event.code === 'Escape' && activeSectionId) {
        event.preventDefault()
        setActiveSectionId(null)
        return
      }

      if (event.code !== 'Enter' && event.code !== 'NumpadEnter') {
        return
      }
      if (activeSectionId || !focusedSectionId) {
        return
      }

      event.preventDefault()
      setActiveSectionId(focusedSectionId)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeSectionId, focusedSectionId])

  return (
    <main className="app-shell">
      <KeyboardInputBridge />
      <SceneCanvas>
        <CVScene
          activeSectionId={activeSectionId}
          focusedSectionId={focusedSectionId}
          onSelectSection={setActiveSectionId}
          onFocusSection={setFocusedSectionId}
        />
      </SceneCanvas>
      <MobileControls />
      <NavigationHints
        focusedSectionId={focusedSectionId}
        activeSectionId={activeSectionId}
      />
      <StationOpenPrompt
        focusedSectionId={focusedSectionId}
        activeSectionId={activeSectionId}
        onOpen={setActiveSectionId}
      />
      {activeSection ? (
        <InfoCard
          section={activeSection}
          onClose={() => setActiveSectionId(null)}
        />
      ) : null}
    </main>
  )
}

export default App
