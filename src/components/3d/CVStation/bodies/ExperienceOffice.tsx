import {BlockMesh} from '../BlockMesh'

type ExperienceOfficeProps = {
  accent: string
}

/**
 * Modern office: glass volume, vertical core, light frame hood,
 * lobby, and side cantilever — gray palette.
 */
export function ExperienceOffice({accent}: ExperienceOfficeProps) {
  const frame = '#dfe4ea'
  const core = '#6d7788'
  const slab = '#a8b0bc'
  const glass = '#7ec8e3'
  const dark = '#3a4450'
  const mid = '#8a93a1'

  return (
    <group>
      {/* Tall vertical core pillar */}
      <BlockMesh position={[0.35, 2.4, 0.15]} size={[0.85, 4.8, 1.1]} color={core} />
      {/* Horizontal grooves on core */}
      <BlockMesh position={[0.35, 1.2, 0.72]} size={[0.75, 0.08, 0.08]} color={dark} />
      <BlockMesh position={[0.35, 2.0, 0.72]} size={[0.75, 0.08, 0.08]} color={dark} />
      <BlockMesh position={[0.35, 2.8, 0.72]} size={[0.75, 0.08, 0.08]} color={dark} />
      <BlockMesh position={[0.35, 3.6, 0.72]} size={[0.75, 0.08, 0.08]} color={dark} />
      <BlockMesh position={[0.35, 4.4, 0.72]} size={[0.75, 0.08, 0.08]} color={dark} />
      {/* Dark panels near top of core */}
      <BlockMesh position={[0.2, 4.55, 0.72]} size={[0.28, 0.28, 0.08]} color={dark} />
      <BlockMesh position={[0.55, 4.55, 0.72]} size={[0.28, 0.28, 0.08]} color={dark} />
      <BlockMesh position={[0.2, 4.2, 0.72]} size={[0.28, 0.28, 0.08]} color={dark} />
      <BlockMesh position={[0.55, 4.2, 0.72]} size={[0.28, 0.28, 0.08]} color={dark} />
      {/* Main glass volume (left of core) */}
      <BlockMesh position={[-0.7, 2.0, 0]} size={[1.4, 3.6, 1.5]} color={glass} />
      {/* Floor slabs inside glass */}
      <BlockMesh position={[-0.7, 1.1, 0]} size={[1.35, 0.1, 1.45]} color={slab} />
      <BlockMesh position={[-0.7, 2.2, 0]} size={[1.35, 0.1, 1.45]} color={slab} />
      <BlockMesh position={[-0.7, 3.3, 0]} size={[1.35, 0.1, 1.45]} color={slab} />
      {/* Glass volume right / behind core */}
      <BlockMesh position={[0.95, 2.0, -0.15]} size={[0.9, 3.2, 1.2]} color={glass} />
      <BlockMesh position={[0.95, 1.5, -0.15]} size={[0.85, 0.1, 1.15]} color={slab} />
      <BlockMesh position={[0.95, 2.6, -0.15]} size={[0.85, 0.1, 1.15]} color={slab} />
      {/* Light L-frame / hood (left + top) */}
      <BlockMesh position={[-1.35, 2.15, 0]} size={[0.28, 3.9, 1.7]} color={frame} />
      <BlockMesh position={[-0.35, 4.35, 0]} size={[2.4, 0.28, 1.75]} color={frame} />
      <BlockMesh position={[-0.35, 4.35, 0.85]} size={[2.4, 0.28, 0.2]} color={frame} />
      {/* Entrance lobby at base of core */}
      <BlockMesh position={[0.35, 0.55, 0.95]} size={[1.1, 1.1, 0.7]} color={mid} />
      <BlockMesh position={[0.35, 0.55, 1.32]} size={[0.85, 0.75, 0.08]} color={glass} />
      <BlockMesh position={[0.35, 1.15, 0.95]} size={[1.2, 0.12, 0.8]} color={slab} />
      <BlockMesh position={[0.35, 0.25, 1.35]} size={[0.55, 0.2, 0.25]} color={dark} />
      {/* Cantilevered side box (mid-right) */}
      <BlockMesh position={[1.35, 2.35, 0.35]} size={[0.9, 0.85, 0.85]} color={core} />
      <BlockMesh position={[1.35, 2.35, 0.8]} size={[0.7, 0.55, 0.08]} color={glass} />
      {/* Roof slab under hood */}
      <BlockMesh position={[-0.2, 3.95, 0]} size={[2.0, 0.14, 1.55]} color={slab} />
      {/* Accent strip on crown */}
      <BlockMesh position={[-0.35, 4.55, 0]} size={[2.45, 0.1, 1.8]} color={accent} />
    </group>
  )
}
