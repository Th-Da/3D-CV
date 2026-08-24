import {CVStation} from '../../components/3d/CVStation/CVStation'
import {DioramaBase} from '../../components/3d/Environment/DioramaBase'
import {Ground} from '../../components/3d/Environment/Ground'
import {SceneLighting} from '../../components/3d/Environment/SceneLighting'
import {PlayerController} from '../../components/3d/Player/PlayerController'
import type {CvSectionId} from '../../types/cv'
import {getDistrictPlot} from '../../utils/sceneLayout'

type CVSceneProps = {
  activeSectionId: CvSectionId | null
  focusedSectionId: CvSectionId | null
  onSelectSection: (id: CvSectionId) => void
  onFocusSection: (id: CvSectionId | null) => void
}

export function CVScene({
  activeSectionId,
  focusedSectionId,
  onSelectSection,
  onFocusSection,
}: CVSceneProps) {
  const aboutPlot = getDistrictPlot('about')

  return (
    <>
      <color attach="background" args={['#cfd8e6']} />
      <SceneLighting />
      <DioramaBase />
      <Ground />
      <PlayerController
        plots={[aboutPlot]}
        onFocusChange={onFocusSection}
      />
      <CVStation
        plot={aboutPlot}
        selected={activeSectionId === 'about'}
        focused={focusedSectionId === 'about'}
        onSelect={onSelectSection}
      />
    </>
  )
}
