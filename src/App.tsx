import {useState} from 'react'
import './App.css'
import {SceneCanvas} from './components/shared/SceneCanvas'
import {InfoCard} from './components/ui/InfoCard/InfoCard'
import {getCvSection} from './data/cv'
import {CVScene} from './scenes/CVScene/CVScene'
import type {CvSectionId} from './types/cv'

function App() {
  const [activeSectionId, setActiveSectionId] = useState<CvSectionId | null>(null)
  const activeSection = activeSectionId ? getCvSection(activeSectionId) : null

  return (
    <main className="app-shell">
      <SceneCanvas>
        <CVScene
          activeSectionId={activeSectionId}
          onSelectSection={setActiveSectionId}
        />
      </SceneCanvas>
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
