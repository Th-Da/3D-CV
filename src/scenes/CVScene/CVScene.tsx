export function CVScene() {
    return (
        <>
            <color attach="background" args={["#d7e3f4"]}/>
            <ambientLight intensity={1.1}/>
            <directionalLight position={[6, 10, 5]} intensity={1.4}/>

            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
                <planeGeometry args={[18, 18]}/>
                <meshStandardMaterial color="#8bcf7a"/>
            </mesh>
        </>
    )
}
