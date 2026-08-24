import {Canvas} from '@react-three/fiber'
import type {PropsWithChildren} from 'react'

type SceneCanvasProps = PropsWithChildren

export function SceneCanvas({children}: SceneCanvasProps) {
    return (
        <Canvas
            camera={{position: [8, 7, 8], fov: 45}}
            shadows={false}
            dpr={[1, 2]}
        >
            {children}
        </Canvas>
    )
}
