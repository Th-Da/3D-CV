import {BlockMesh} from '../BlockMesh'

type AboutHomeProps = {
  accent: string
}

/** Modern flat-roof house with terrace stairs and a small pool. */
export function AboutHome({accent}: AboutHomeProps) {
  const white = '#f4f1ea'
  const wood = '#a67c52'
  const glass = '#7ec8e3'
  const hedge = '#5a8231'
  const frame = '#3a3a3a'
  const patio = '#c8c8c8'

  return (
    <group scale={1.15}>
      {/* Ground floor body */}
      <BlockMesh position={[-0.15, 0.85, 0]} size={[1.9, 1.7, 1.7]} color={white} />
      {/* Wide front window + shutters */}
      <BlockMesh position={[-0.35, 0.95, 0.88]} size={[0.95, 0.7, 0.08]} color={glass} />
      <BlockMesh position={[-0.95, 0.95, 0.9]} size={[0.14, 0.85, 0.1]} color={wood} />
      <BlockMesh position={[0.25, 0.95, 0.9]} size={[0.14, 0.85, 0.1]} color={wood} />
      {/* Door */}
      <BlockMesh position={[0.65, 0.55, 0.88]} size={[0.4, 1.05, 0.1]} color={wood} />
      {/* Front patio */}
      <BlockMesh position={[0.55, 0.08, 1.2]} size={[0.7, 0.16, 0.55]} color={patio} />
      {/* Pool + rim + hedge */}
      <BlockMesh position={[-1.35, 0.12, 0.35]} size={[0.7, 0.2, 1.1]} color={white} />
      <BlockMesh
        position={[-1.35, 0.18, 0.35]}
        size={[0.5, 0.12, 0.9]}
        color={glass}
        emissive="#1a4a66"
      />
      <BlockMesh position={[-1.55, 0.28, 0.35]} size={[0.18, 0.35, 1.2]} color={hedge} />
      <BlockMesh position={[-1.15, 0.28, -0.3]} size={[0.7, 0.35, 0.18]} color={hedge} />
      {/* Side stairs up to terrace */}
      <BlockMesh position={[1.15, 0.35, 0.55]} size={[0.55, 0.2, 0.45]} color={wood} />
      <BlockMesh position={[1.15, 0.65, 0.25]} size={[0.55, 0.2, 0.45]} color={wood} />
      <BlockMesh position={[1.15, 0.95, -0.05]} size={[0.55, 0.2, 0.45]} color={wood} />
      <BlockMesh position={[1.15, 1.25, -0.35]} size={[0.55, 0.2, 0.45]} color={wood} />
      <BlockMesh position={[1.45, 0.85, 0.1]} size={[0.14, 1.5, 1.4]} color={white} />
      {/* Second floor volume (left) */}
      <BlockMesh position={[-0.35, 2.15, -0.1]} size={[1.5, 1.0, 1.4]} color={white} />
      <BlockMesh position={[-0.55, 2.15, 0.62]} size={[0.45, 0.75, 0.08]} color={glass} />
      <BlockMesh position={[-0.05, 2.15, 0.62]} size={[0.45, 0.75, 0.08]} color={glass} />
      <BlockMesh position={[-0.3, 2.15, 0.62]} size={[0.1, 0.85, 0.1]} color={frame} />
      {/* Terrace deck (right of upper volume) */}
      <BlockMesh position={[0.75, 1.75, 0.05]} size={[1.0, 0.12, 1.4]} color={wood} />
      {/* Glass railing */}
      <BlockMesh position={[0.75, 2.05, 0.72]} size={[0.95, 0.35, 0.06]} color={glass} />
      <BlockMesh position={[1.2, 2.05, 0.05]} size={[0.06, 0.35, 1.3]} color={glass} />
      {/* Potted plants on terrace */}
      <BlockMesh position={[0.45, 1.9, 0.35]} size={[0.18, 0.16, 0.18]} color={wood} />
      <BlockMesh position={[0.45, 2.1, 0.35]} size={[0.28, 0.28, 0.28]} color={hedge} />
      <BlockMesh position={[0.85, 1.9, 0.35]} size={[0.18, 0.16, 0.18]} color={wood} />
      <BlockMesh position={[0.85, 2.1, 0.35]} size={[0.28, 0.28, 0.28]} color={hedge} />
      {/* Flat roof rim + green roof */}
      <BlockMesh position={[-0.35, 2.75, -0.1]} size={[1.65, 0.18, 1.55]} color={white} />
      <BlockMesh position={[-0.35, 2.9, -0.1]} size={[1.4, 0.14, 1.3]} color={hedge} />
      <BlockMesh position={[-0.6, 3.05, 0.1]} size={[0.25, 0.2, 0.25]} color={hedge} />
      <BlockMesh position={[-0.1, 3.0, -0.25]} size={[0.2, 0.16, 0.2]} color={accent} />
    </group>
  )
}
