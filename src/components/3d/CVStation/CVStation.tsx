import type {ThreeEvent} from '@react-three/fiber'
import type {CvSectionId} from '../../../types/cv'
import {
  GROUND_SURFACE_Y,
  PLOT_RAISE,
  type DistrictPlot,
} from '../../../utils/sceneLayout'
import {BlockMesh} from './BlockMesh'
import {CVStationMarker} from './CVStationMarker'

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
      position={[plot.position[0], GROUND_SURFACE_Y + PLOT_RAISE, plot.position[1]]}
      onClick={handleSelect}
      onPointerOver={() => {
        document.body.style.cursor = 'pointer'
      }}
      onPointerOut={() => {
        document.body.style.cursor = 'auto'
      }}
    >
      <BlockMesh position={[0, 1.1, 0]} size={[2, 2.2, 2]} color="#c4a574" />
      <BlockMesh position={[0, 0.7, 1.04]} size={[0.5, 1.1, 0.12]} color="#5a3d24" />
      <BlockMesh position={[-1.02, 1.35, 0.2]} size={[0.12, 0.5, 0.5]} color="#7ec8e3" />
      <BlockMesh position={[1.02, 1.35, 0.2]} size={[0.12, 0.5, 0.5]} color="#7ec8e3" />
      <BlockMesh position={[0, 2.45, 0]} size={[2.4, 0.5, 2.4]} color={plot.color} />
      <BlockMesh position={[0.7, 2.95, -0.55]} size={[0.4, 0.7, 0.4]} color="#6b4f32" />
      <CVStationMarker selected={selected} focused={focused} />
    </group>
  )
}
