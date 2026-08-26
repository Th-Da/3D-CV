import type {ThreeEvent} from '@react-three/fiber'
import type {CvSectionId} from '../../../types/cv'
import {
  GROUND_SURFACE_Y,
  type DistrictPlot,
} from '../../../utils/sceneLayout'
import {CVStationMarker} from './CVStationMarker'
import {StationBody} from './StationBody'
import {STATION_MARKER_Y, STATION_YAW} from './stationMetrics'

type CVStationProps = {
  plot: DistrictPlot
  selected: boolean
  focused: boolean
  onSelect: (id: CvSectionId) => void
}

export function CVStation({plot, selected, focused, onSelect}: CVStationProps) {
  function handleSelect(event: ThreeEvent<PointerEvent>) {
    event.stopPropagation()
    onSelect(plot.id)
  }

  return (
    <group
      position={[plot.position[0], GROUND_SURFACE_Y, plot.position[1]]}
      rotation={[0, STATION_YAW[plot.id], 0]}
      onClick={handleSelect}
      onPointerOver={() => {
        document.body.style.cursor = 'pointer'
      }}
      onPointerOut={() => {
        document.body.style.cursor = 'auto'
      }}
    >
      <StationBody id={plot.id} accent={plot.color} />
      <CVStationMarker
        selected={selected}
        focused={focused}
        height={STATION_MARKER_Y[plot.id]}
      />
    </group>
  )
}
