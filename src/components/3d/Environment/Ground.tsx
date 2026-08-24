import {
  BLOCK_HEIGHT,
  BLOCK_SIZE,
  GROUND_SURFACE_Y,
  groundTiles,
} from '../../../utils/sceneLayout'

const PLOT_RAISE = 0.06

export function Ground() {
  const blockY = GROUND_SURFACE_Y - BLOCK_HEIGHT / 2

  return (
    <group>
      {groundTiles.map((tile) => {
        const raised = tile.kind === 'plot'
        const height = raised ? BLOCK_HEIGHT + PLOT_RAISE : BLOCK_HEIGHT
        const y = raised ? blockY + PLOT_RAISE / 2 : blockY

        return (
          <mesh key={tile.key} position={[tile.x, y, tile.z]} receiveShadow castShadow={raised}>
            <boxGeometry args={[BLOCK_SIZE, height, BLOCK_SIZE]} />
            <meshStandardMaterial color={tile.color} roughness={0.95} />
          </mesh>
        )
      })}
    </group>
  )
}
