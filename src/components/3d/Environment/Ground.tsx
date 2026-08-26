import {
  BLOCK_HEIGHT,
  BLOCK_SIZE,
  GROUND_SURFACE_Y,
  groundTiles,
} from '../../../utils/sceneLayout'

export function Ground() {
  const blockY = GROUND_SURFACE_Y - BLOCK_HEIGHT / 2

  return (
    <group>
      {groundTiles.map((tile) => (
        <mesh key={tile.key} position={[tile.x, blockY, tile.z]} receiveShadow>
          <boxGeometry args={[BLOCK_SIZE, BLOCK_HEIGHT, BLOCK_SIZE]} />
          <meshStandardMaterial color={tile.color} roughness={0.95} />
        </mesh>
      ))}
    </group>
  )
}
