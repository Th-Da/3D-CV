import {BlockMesh} from './BlockMesh'

type CVStationMarkerProps = {
  selected: boolean
  focused: boolean
}

export function CVStationMarker({selected, focused}: CVStationMarkerProps) {
  const active = selected || focused

  return (
    <group position={[0, 3.35, 0]}>
      <BlockMesh
        position={[0, 0, 0]}
        size={[0.28, 0.28, 0.28]}
        color={selected ? '#fff4b0' : focused ? '#ffe066' : '#f2e6a0'}
        emissive={active ? '#c9a227' : '#000000'}
      />
    </group>
  )
}
