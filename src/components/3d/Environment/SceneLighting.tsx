export function SceneLighting() {
  return (
    <>
      <ambientLight intensity={0.55} color="#e8eef8" />
      <directionalLight
        position={[8, 14, 6]}
        intensity={1.35}
        color="#fff3e0"
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={40}
        shadow-camera-left={-14}
        shadow-camera-right={14}
        shadow-camera-top={14}
        shadow-camera-bottom={-14}
      />
      <directionalLight
        position={[-7, 5, -5]}
        intensity={0.28}
        color="#9bb6e3"
      />
    </>
  )
}
