import {PLATFORM_SIZE} from '../../../utils/sceneLayout'

const PLINTH_SIZE = 20
const PLINTH_HEIGHT = 1.5
const RIM_THICKNESS = 0.35
const RIM_HEIGHT = 0

export function DioramaBase() {
  const rimY = RIM_HEIGHT / 2
  const rimOffset = PLINTH_SIZE / 2 - RIM_THICKNESS / 2
  const sideRimLength = PLINTH_SIZE - RIM_THICKNESS * 2

  return (
    <group>
      {/* Plinth: thick base block of the diorama, sitting below the ground plane */}
      <mesh position={[0, -PLINTH_HEIGHT / 2, 0]} receiveShadow>
        <boxGeometry args={[PLINTH_SIZE, PLINTH_HEIGHT, PLINTH_SIZE]} />
        <meshStandardMaterial color="#3a4048" roughness={0.85} />
      </mesh>

      {/* Platform: walkable top surface where the city and stations will sit */}
      <mesh position={[0, 0.02, 0]} receiveShadow>
        <boxGeometry args={[PLATFORM_SIZE, 0.04, PLATFORM_SIZE]} />
        <meshStandardMaterial color="#6b4f32" roughness={0.95} />
      </mesh>

      {/* Front rim (+Z): outer border strip along the plinth */}
      <mesh position={[0, rimY, rimOffset]} castShadow receiveShadow>
        <boxGeometry args={[PLINTH_SIZE, RIM_HEIGHT, RIM_THICKNESS]} />
        <meshStandardMaterial color="#2f343b" roughness={0.8} />
      </mesh>
      {/* Back rim (−Z): outer border strip along the plinth */}
      <mesh position={[0, rimY, -rimOffset]} castShadow receiveShadow>
        <boxGeometry args={[PLINTH_SIZE, RIM_HEIGHT, RIM_THICKNESS]} />
        <meshStandardMaterial color="#2f343b" roughness={0.8} />
      </mesh>
      {/* Right rim (+X): side border strip, shortened to avoid overlapping corners */}
      <mesh position={[rimOffset, rimY, 0]} castShadow receiveShadow>
        <boxGeometry args={[RIM_THICKNESS, RIM_HEIGHT, sideRimLength]} />
        <meshStandardMaterial color="#2f343b" roughness={0.8} />
      </mesh>
      {/* Left rim (−X): side border strip, shortened to avoid overlapping corners */}
      <mesh position={[-rimOffset, rimY, 0]} castShadow receiveShadow>
        <boxGeometry args={[RIM_THICKNESS, RIM_HEIGHT, sideRimLength]} />
        <meshStandardMaterial color="#2f343b" roughness={0.8} />
      </mesh>
    </group>
  )
}
