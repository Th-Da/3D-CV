import {BlockMesh} from '../BlockMesh'

/**
 * Classic Deutsche Post mailbox: yellow box on a post, slot, horn mark, plaque.
 */
export function ContactPost() {
  const yellow = '#ffe14a'
  const yellowDeep = '#f0c820'
  const black = '#1a1a1a'
  const white = '#f5f5f5'
  const metal = '#5c6370'

  return (
    <group scale={0.8}>
      {/* Post / mast */}
      <BlockMesh position={[0, 0.7, 0]} size={[0.22, 1.4, 0.22]} color={metal} />
      <BlockMesh position={[0, 0.12, 0]} size={[0.55, 0.18, 0.55]} color={metal} />
      {/* Yellow mailbox body */}
      <BlockMesh position={[0, 1.75, 0]} size={[1.15, 1.35, 0.75]} color={yellow} />
      <BlockMesh position={[0, 2.45, 0]} size={[1.2, 0.12, 0.8]} color={yellowDeep} />
      {/* Dual letter slots under top flap */}
      <BlockMesh position={[-0.25, 2.28, 0.28]} size={[0.4, 0.1, 0.2]} color={black} />
      <BlockMesh position={[0.25, 2.28, 0.28]} size={[0.4, 0.1, 0.2]} color={black} />
      {/* Slot flap */}
      <BlockMesh position={[0, 2.38, 0.35]} size={[1.0, 0.08, 0.18]} color={yellowDeep} />
      {/* White emptying-schedule plaque */}
      <BlockMesh position={[0, 1.35, 0.4]} size={[0.7, 0.45, 0.06]} color={white} />
      {/* Black post horn (blocky silhouette) */}
      <BlockMesh position={[0, 1.95, 0.4]} size={[0.55, 0.12, 0.06]} color={black} />
      {/* Side detail / lock cue */}
      <BlockMesh position={[0.58, 1.55, 0]} size={[0.08, 0.2, 0.15]} color={black} />
    </group>
  )
}
