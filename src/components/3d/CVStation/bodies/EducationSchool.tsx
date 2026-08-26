import {BlockMesh} from '../BlockMesh'

type EducationSchoolProps = {
  accent: string
}

/**
 * Minecraft-style school: red brick wings, central clock tower,
 * white portico, and a small yellow bus.
 */
export function EducationSchool({accent}: EducationSchoolProps) {
  const brick = '#b54a3a'
  const trim = '#f2eee6'
  const window = '#2f3b4a'

  return (
    <group scale={1.25}>
      {/* Side wings */}
      <BlockMesh position={[-1.05, 1.15, 0]} size={[1.15, 2.3, 1.7]} color={brick} />
      <BlockMesh position={[1.05, 1.15, 0]} size={[1.15, 2.3, 1.7]} color={brick} />
      {/* Central entrance tower (taller) */}
      <BlockMesh position={[0, 1.4, 0.1]} size={[1.05, 2.8, 1.55]} color={brick} />
      {/* Wing windows — lower + upper */}
      <BlockMesh position={[-1.35, 0.75, 0.88]} size={[0.28, 0.32, 0.08]} color={window} />
      <BlockMesh position={[-0.85, 0.75, 0.88]} size={[0.28, 0.32, 0.08]} color={window} />
      <BlockMesh position={[-1.35, 1.55, 0.88]} size={[0.28, 0.32, 0.08]} color={window} />
      <BlockMesh position={[-0.85, 1.55, 0.88]} size={[0.28, 0.32, 0.08]} color={window} />
      <BlockMesh position={[0.85, 0.75, 0.88]} size={[0.28, 0.32, 0.08]} color={window} />
      <BlockMesh position={[1.35, 0.75, 0.88]} size={[0.28, 0.32, 0.08]} color={window} />
      <BlockMesh position={[0.85, 1.55, 0.88]} size={[0.28, 0.32, 0.08]} color={window} />
      <BlockMesh position={[1.35, 1.55, 0.88]} size={[0.28, 0.32, 0.08]} color={window} />
      {/* White sills */}
      <BlockMesh position={[-1.1, 0.55, 0.9]} size={[0.9, 0.08, 0.1]} color={trim} />
      <BlockMesh position={[-1.1, 1.35, 0.9]} size={[0.9, 0.08, 0.1]} color={trim} />
      <BlockMesh position={[1.1, 0.55, 0.9]} size={[0.9, 0.08, 0.1]} color={trim} />
      <BlockMesh position={[1.1, 1.35, 0.9]} size={[0.9, 0.08, 0.1]} color={trim} />
      {/* Door */}
      <BlockMesh position={[0, 0.55, 0.9]} size={[0.45, 0.95, 0.1]} color="#5a3d24" />
      {/* Steps */}
      <BlockMesh position={[0, 0.12, 1.15]} size={[0.9, 0.24, 0.4]} color="#8a9099" />
      <BlockMesh position={[0, 0.28, 1.0]} size={[0.75, 0.16, 0.25]} color="#9aa0a8" />
      {/* Portico: 4 columns + canopy */}
      <BlockMesh position={[-0.45, 0.55, 1.25]} size={[0.12, 1.1, 0.12]} color={trim} />
      <BlockMesh position={[0.45, 0.55, 1.25]} size={[0.12, 1.1, 0.12]} color={trim} />
      <BlockMesh position={[-0.45, 0.55, 1.55]} size={[0.12, 1.1, 0.12]} color={trim} />
      <BlockMesh position={[0.45, 0.55, 1.55]} size={[0.12, 1.1, 0.12]} color={trim} />
      <BlockMesh position={[0, 1.15, 1.4]} size={[1.15, 0.14, 0.6]} color={trim} />
      {/* Wing roof parapets */}
      <BlockMesh position={[-1.05, 2.4, 0]} size={[1.3, 0.22, 1.9]} color={trim} />
      <BlockMesh position={[1.05, 2.4, 0]} size={[1.3, 0.22, 1.9]} color={trim} />
      {/* Central gable roof (stepped peak) */}
      <BlockMesh position={[0, 2.95, 0.1]} size={[1.2, 0.25, 1.75]} color={trim} />
      <BlockMesh position={[0, 3.25, 0.1]} size={[0.85, 0.25, 1.75]} color={trim} />
      <BlockMesh position={[0, 3.55, 0.1]} size={[0.5, 0.25, 1.75]} color={accent} />
      {/* Clock face */}
      <BlockMesh position={[0, 2.55, 0.9]} size={[0.55, 0.55, 0.1]} color={trim} />
      <BlockMesh position={[0, 2.55, 0.97]} size={[0.12, 0.12, 0.08]} color="#3a4450" />
      <BlockMesh position={[0.08, 2.62, 0.98]} size={[0.22, 0.06, 0.06]} color="#3a4450" />
      <BlockMesh position={[0, 2.68, 0.98]} size={[0.06, 0.2, 0.06]} color="#3a4450" />
      {/* School bus */}
      <BlockMesh position={[1.55, 0.4, 1.35]} size={[0.95, 0.55, 0.5]} color="#e6b422" />
      <BlockMesh position={[1.55, 0.72, 1.35]} size={[0.95, 0.12, 0.5]} color="#2a3038" />
      <BlockMesh position={[1.55, 0.5, 1.62]} size={[0.7, 0.22, 0.06]} color="#7ec8e3" />
      <BlockMesh position={[1.2, 0.12, 1.35]} size={[0.18, 0.18, 0.18]} color="#1a1a1a" />
      <BlockMesh position={[1.9, 0.12, 1.35]} size={[0.18, 0.18, 0.18]} color="#1a1a1a" />
    </group>
  )
}
