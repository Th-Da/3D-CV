import {BlockMesh} from './BlockMesh'

type CVStationMarkerProps = {
  selected: boolean
}

export function CVStationMarker({selected}: CVStationMarkerProps) {
  return (
    <group position={[0, 3.35, 0]}>
      <BlockMesh
        position={[0, 0, 0]}
        size={[0.28, 0.28, 0.28]}
        color={selected ? '#fff4b0' : '#f2e6a0'}
        emissive={selected ? '#c9a227' : '#000000'}
      />
    </group>
  )
}
