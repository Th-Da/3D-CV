import {CVStation} from '../../components/3d/CVStation/CVStation'
import {DioramaBase} from '../../components/3d/Environment/DioramaBase'
import {Ground} from '../../components/3d/Environment/Ground'
import {SceneLighting} from '../../components/3d/Environment/SceneLighting'
import type {CvSectionId} from '../../types/cv'
import {getDistrictPlot} from '../../utils/sceneLayout'

type CVSceneProps = {
  activeSectionId: CvSectionId | null
  onSelectSection: (id: CvSectionId) => void
}

export function CVScene({activeSectionId, onSelectSection}: CVSceneProps) {
  const aboutPlot = getDistrictPlot('about')

  return (
    <>
      <color attach="background" args={['#cfd8e6']} />
      <SceneLighting />
      <DioramaBase />
      <Ground />
      <CVStation
        plot={aboutPlot}
        selected={activeSectionId === 'about'}
        onSelect={onSelectSection}
      />
    </>
  )
}
