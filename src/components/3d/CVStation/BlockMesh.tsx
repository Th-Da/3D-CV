type BlockMeshProps = {
  position: [number, number, number]
  size: [number, number, number]
  color: string
  emissive?: string
}

export function BlockMesh({
  position,
  size,
  color,
  emissive = '#000000',
}: BlockMeshProps) {
  return (
    <mesh position={position} castShadow receiveShadow>
      <boxGeometry args={size} />
      <meshStandardMaterial
        color={color}
        emissive={emissive}
        roughness={0.92}
      />
    </mesh>
  )
}
