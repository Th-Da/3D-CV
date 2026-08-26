import {BlockMesh} from '../BlockMesh'

type ProjectsStudioProps = {
  accent: string
}

/**
 * Open-front loft atelier: high ceiling, north glass, easel and canvases inside.
 */
export function ProjectsStudio({accent}: ProjectsStudioProps) {
  const brick = '#b08a6a'
  const concrete = '#9aa0a8'
  const wood = '#8b5a2b'
  const floor = '#6b6f76'
  const glass = '#a8d4e8'
  const canvas = '#f2eee6'
  const paintA = '#c46a2d'
  const paintB = '#2f6fb5'
  const paintC = '#c9a227'

  return (
    <group>
      {/* Industrial floor slab */}
      <BlockMesh position={[0, 0.08, 0.1]} size={[2.5, 0.16, 2.3]} color={floor} />
      {/* Tall back + side walls (no front wall) */}
      <BlockMesh position={[0, 1.4, -0.95]} size={[2.4, 2.8, 0.2]} color={brick} />
      <BlockMesh position={[-1.15, 1.4, 0]} size={[0.2, 2.8, 1.9]} color={concrete} />
      <BlockMesh position={[1.15, 1.4, 0]} size={[0.2, 2.8, 1.9]} color={concrete} />
      {/* Tall corner posts */}
      <BlockMesh position={[-1.15, 1.45, 0.95]} size={[0.24, 2.9, 0.24]} color={wood} />
      <BlockMesh position={[1.15, 1.45, 0.95]} size={[0.24, 2.9, 0.24]} color={wood} />
      <BlockMesh position={[-1.15, 1.45, -0.95]} size={[0.24, 2.9, 0.24]} color={wood} />
      <BlockMesh position={[1.15, 1.45, -0.95]} size={[0.24, 2.9, 0.24]} color={wood} />
      {/* Large north glass on back wall */}
      <BlockMesh position={[-0.45, 1.7, -0.84]} size={[0.85, 1.6, 0.08]} color={glass} />
      <BlockMesh position={[0.5, 1.7, -0.84]} size={[0.85, 1.6, 0.08]} color={glass} />
      <BlockMesh position={[0, 1.7, -0.84]} size={[0.1, 1.7, 0.1]} color={wood} />
      <BlockMesh position={[0, 2.55, -0.84]} size={[1.9, 0.1, 0.1]} color={wood} />
      {/* Flat loft roof + accent edge */}
      <BlockMesh position={[0, 2.95, 0]} size={[2.6, 0.22, 2.3]} color={concrete} />
      <BlockMesh position={[0, 3.15, 0]} size={[2.7, 0.16, 2.4]} color={accent} />
      {/* Clerestory strip for high light */}
      <BlockMesh position={[0, 2.7, 0.95]} size={[2.0, 0.35, 0.1]} color={glass} />
      {/* Work table */}
      <BlockMesh position={[0.55, 0.45, -0.25]} size={[0.9, 0.7, 0.55]} color={wood} />
      <BlockMesh position={[0.55, 0.85, -0.25]} size={[1.0, 0.1, 0.65]} color="#6b4420" />
      {/* Paint pots on table */}
      <BlockMesh position={[0.35, 1.0, -0.15]} size={[0.14, 0.18, 0.14]} color={paintA} />
      <BlockMesh position={[0.55, 1.0, -0.15]} size={[0.14, 0.18, 0.14]} color={paintB} />
      <BlockMesh position={[0.75, 1.0, -0.15]} size={[0.14, 0.18, 0.14]} color={paintC} />
      {/* Easel with canvas (facing open front) */}
      <BlockMesh position={[-0.45, 0.7, 0.35]} size={[0.1, 1.2, 0.1]} color={wood} />
      <BlockMesh position={[-0.25, 0.7, 0.35]} size={[0.1, 1.2, 0.1]} color={wood} />
      <BlockMesh position={[-0.35, 1.25, 0.35]} size={[0.55, 0.1, 0.1]} color={wood} />
      <BlockMesh position={[-0.35, 0.95, 0.48]} size={[0.7, 0.9, 0.08]} color={canvas} />
      {/* Painting on easel */}
      <BlockMesh position={[-0.5, 1.05, 0.53]} size={[0.22, 0.22, 0.04]} color={paintB} />
      <BlockMesh position={[-0.25, 0.9, 0.53]} size={[0.28, 0.18, 0.04]} color={paintA} />
      <BlockMesh position={[-0.35, 1.15, 0.53]} size={[0.18, 0.14, 0.04]} color={paintC} />
      {/* Finished canvases leaning on back wall */}
      <BlockMesh position={[-0.85, 0.85, -0.7]} size={[0.5, 0.85, 0.08]} color={canvas} />
      <BlockMesh position={[-0.85, 1.0, -0.66]} size={[0.28, 0.28, 0.04]} color={accent} />
      <BlockMesh position={[-0.7, 0.75, -0.66]} size={[0.18, 0.22, 0.04]} color={paintA} />
      <BlockMesh position={[0.15, 0.95, -0.7]} size={[0.55, 1.0, 0.08]} color={canvas} />
      <BlockMesh position={[0.05, 1.15, -0.66]} size={[0.25, 0.35, 0.04]} color={paintB} />
      <BlockMesh position={[0.3, 0.85, -0.66]} size={[0.22, 0.22, 0.04]} color={paintC} />
      {/* Small storage crates at front */}
      <BlockMesh position={[0.95, 0.25, 1.05]} size={[0.4, 0.4, 0.35]} color={wood} />
      <BlockMesh position={[-0.95, 0.22, 1.05]} size={[0.35, 0.35, 0.3]} color="#6b4420" />
    </group>
  )
}
