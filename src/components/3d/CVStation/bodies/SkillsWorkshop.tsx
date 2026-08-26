import {BlockMesh} from '../BlockMesh'

type SkillsWorkshopProps = {
  accent: string
}

/**
 * Open-front workshop: cutaway facade, peaked roof, forge glow inside.
 */
export function SkillsWorkshop({accent}: SkillsWorkshopProps) {
  const wood = '#8b5a2b'
  const woodDark = '#6b4420'
  const slate = '#5c6370'
  const stone = '#9aa0a8'
  const leaf = '#4f8c36'

  return (
    <group>
      {/* Stone patio / floor */}
      <BlockMesh position={[0, 0.08, 0.15]} size={[2.4, 0.16, 2.2]} color={stone} />
      {/* Back + side walls (no front wall) */}
      <BlockMesh position={[0, 0.95, -0.85]} size={[2.2, 1.7, 0.18]} color={woodDark} />
      <BlockMesh position={[-1.05, 0.95, 0]} size={[0.18, 1.7, 1.7]} color={wood} />
      <BlockMesh position={[1.05, 0.95, 0]} size={[0.18, 1.7, 1.7]} color={wood} />
      {/* Corner posts */}
      <BlockMesh position={[-1.05, 0.95, 0.85]} size={[0.22, 1.9, 0.22]} color={woodDark} />
      <BlockMesh position={[1.05, 0.95, 0.85]} size={[0.22, 1.9, 0.22]} color={woodDark} />
      <BlockMesh position={[-1.05, 0.95, -0.85]} size={[0.22, 1.9, 0.22]} color={woodDark} />
      <BlockMesh position={[1.05, 0.95, -0.85]} size={[0.22, 1.9, 0.22]} color={woodDark} />
      {/* Stepped A-frame roof */}
      <BlockMesh position={[0, 1.95, 0]} size={[2.5, 0.22, 2.15]} color={slate} />
      <BlockMesh position={[0, 2.25, 0]} size={[2.0, 0.22, 2.15]} color={slate} />
      <BlockMesh position={[0, 2.55, 0]} size={[1.45, 0.22, 2.15]} color={slate} />
      <BlockMesh position={[0, 2.85, 0]} size={[0.9, 0.22, 2.15]} color={slate} />
      <BlockMesh position={[0, 3.1, 0]} size={[0.4, 0.2, 2.15]} color={accent} />
      {/* Wood eaves */}
      <BlockMesh position={[0, 1.88, 1.05]} size={[2.55, 0.12, 0.18]} color={wood} />
      <BlockMesh position={[0, 1.88, -1.05]} size={[2.55, 0.12, 0.18]} color={wood} />
      {/* Interior workbench (L-shape along back + right) */}
      <BlockMesh position={[0, 0.45, -0.55]} size={[1.7, 0.7, 0.4]} color={wood} />
      <BlockMesh position={[0.55, 0.45, -0.15]} size={[0.4, 0.7, 0.85]} color={woodDark} />
      {/* Forge / furnace with warm glow */}
      <BlockMesh position={[-0.15, 0.85, -0.55]} size={[0.55, 0.55, 0.45]} color="#3a4450" />
      <BlockMesh
        position={[-0.15, 0.95, -0.35]}
        size={[0.35, 0.28, 0.12]}
        color="#ff6a1a"
        emissive="#ff4a00"
      />
      <BlockMesh
        position={[-0.15, 0.85, -0.28]}
        size={[0.22, 0.18, 0.1]}
        color="#ffd080"
        emissive="#ffaa33"
      />
      {/* Anvil on workbench */}
      <BlockMesh position={[0.5, 0.9, -0.5]} size={[0.35, 0.2, 0.22]} color="#4a5564" />
      <BlockMesh position={[0.55, 1.05, -0.5]} size={[0.45, 0.12, 0.18]} color="#2a3038" />
      {/* Tool rack silhouettes on back wall */}
      <BlockMesh position={[-0.7, 1.35, -0.74]} size={[0.08, 0.45, 0.06]} color="#6a727c" />
      <BlockMesh position={[-0.55, 1.45, -0.74]} size={[0.28, 0.08, 0.06]} color="#6a727c" />
      <BlockMesh position={[-0.2, 1.4, -0.74]} size={[0.08, 0.4, 0.06]} color="#8a9099" />
      <BlockMesh position={[0.15, 1.35, -0.74]} size={[0.06, 0.5, 0.06]} color="#6a727c" />
      <BlockMesh position={[0.35, 1.45, -0.74]} size={[0.22, 0.08, 0.06]} color="#8a9099" />
      <BlockMesh position={[0.65, 1.4, -0.74]} size={[0.1, 0.35, 0.06]} color="#6a727c" />
      {/* Shelf cubbies */}
      <BlockMesh position={[0.7, 1.35, -0.55]} size={[0.45, 0.12, 0.3]} color={wood} />
      <BlockMesh position={[0.55, 1.5, -0.55]} size={[0.12, 0.18, 0.12]} color="#c0392b" />
      <BlockMesh position={[0.8, 1.5, -0.55]} size={[0.12, 0.18, 0.12]} color="#2f6fb5" />
      {/* Front crates / chests */}
      <BlockMesh position={[-0.85, 0.28, 1.15]} size={[0.45, 0.45, 0.4]} color={woodDark} />
      <BlockMesh position={[-0.35, 0.22, 1.2]} size={[0.4, 0.35, 0.35]} color={wood} />
      <BlockMesh position={[0.85, 0.28, 1.15]} size={[0.5, 0.45, 0.4]} color={woodDark} />
      <BlockMesh position={[0.85, 0.55, 1.15]} size={[0.35, 0.12, 0.25]} color="#8a9099" />
      {/* Vines on posts */}
      <BlockMesh position={[-1.15, 1.4, 0.85]} size={[0.18, 0.9, 0.18]} color={leaf} />
      <BlockMesh position={[1.15, 1.55, 0.7]} size={[0.18, 0.7, 0.18]} color={leaf} />
      <BlockMesh position={[-0.9, 1.9, 0.95]} size={[0.35, 0.18, 0.18]} color={leaf} />
    </group>
  )
}
