import {CVStation} from '../../components/3d/CVStation/CVStation'
import {Decor} from '../../components/3d/Environment/Decor'
import {DioramaBase} from '../../components/3d/Environment/DioramaBase'
import {Ground} from '../../components/3d/Environment/Ground'
import {SceneLighting} from '../../components/3d/Environment/SceneLighting'
import {PlayerController} from '../../components/3d/Player/PlayerController'
import type {CvSectionId} from '../../types/cv'
import {districtPlots} from '../../utils/sceneLayout'

const SKY = '#cfd8e6'

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
  return (
    <>
      <color attach="background" args={[SKY]} />
      <fog attach="fog" args={[SKY, 16, 38]} />
      <SceneLighting />
      <DioramaBase />
      <Ground />
      <Decor />
      <PlayerController
        plots={districtPlots}
        onFocusChange={onFocusSection}
      />
      {districtPlots.map((plot) => (
        <CVStation
          key={plot.id}
          plot={plot}
          selected={activeSectionId === plot.id}
          focused={focusedSectionId === plot.id}
          onSelect={onSelectSection}
        />
      ))}
    </>
  )
}
