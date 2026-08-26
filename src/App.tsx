import {useState} from 'react'
import './App.css'
import {SceneCanvas} from './components/shared/SceneCanvas'
import {KeyboardInputBridge} from './components/ui/Controls/KeyboardInputBridge'
import {MobileControls} from './components/ui/Controls/MobileControls'
import {SectionKeyboardBridge} from './components/ui/Controls/SectionKeyboardBridge'
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

  return (
    <main className="app-shell">
      <KeyboardInputBridge />
      <SectionKeyboardBridge
        activeSectionId={activeSectionId}
        focusedSectionId={focusedSectionId}
        onOpen={setActiveSectionId}
        onClose={() => setActiveSectionId(null)}
      />
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
