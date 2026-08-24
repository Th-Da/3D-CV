import {
  districtPlots,
  GROUND_SURFACE_Y,
  roads,
  sidewalkWidth,
  type GroundRect,
} from '../../../utils/sceneLayout'

function RaisedRect({
  rect,
  y,
  height,
  color,
  roughness = 0.9,
}: {
  rect: GroundRect
  y: number
  height: number
  color: string
  roughness?: number
}) {
  return (
    <mesh position={[rect.position[0], y, rect.position[1]]} receiveShadow>
      <boxGeometry args={[rect.size[0], height, rect.size[1]]} />
      <meshStandardMaterial color={color} roughness={roughness} />
    </mesh>
  )
}

export function Ground() {
  return (
    <group>
      {roads.map((road, index) => {
        const isEastWest = road.size[0] > road.size[1]
        const marking: GroundRect = {
          position: road.position,
          size: isEastWest
            ? [road.size[0] * 0.92, 0.08]
            : [0.08, road.size[1] * 0.92],
        }

        return (
          <group key={`road-${index}`}>
            <RaisedRect
              rect={road}
              y={GROUND_SURFACE_Y}
              height={0.05}
              color="#4a4f57"
              roughness={0.95}
            />
            <RaisedRect
              rect={marking}
              y={GROUND_SURFACE_Y + 0.03}
              height={0.01}
              color="#d7dce4"
              roughness={0.6}
            />
          </group>
        )
      })}

      {districtPlots.map((plot) => {
        const inset = sidewalkWidth * 2
        const lawn: GroundRect = {
          position: plot.position,
          size: [plot.size[0] - inset, plot.size[1] - inset],
        }
        const footprint: GroundRect = {
          position: plot.position,
          size: plot.footprint,
        }

        return (
          <group key={plot.id}>
            <RaisedRect
              rect={plot}
              y={GROUND_SURFACE_Y}
              height={0.04}
              color="#c5c2b8"
              roughness={0.92}
            />
            <RaisedRect
              rect={lawn}
              y={GROUND_SURFACE_Y + 0.025}
              height={0.03}
              color="#8fbf78"
            />
            <RaisedRect
              rect={footprint}
              y={GROUND_SURFACE_Y + 0.05}
              height={0.04}
              color={plot.color}
            />
          </group>
        )
      })}
    </group>
  )
}
