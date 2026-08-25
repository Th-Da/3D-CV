import {Canvas} from '@react-three/fiber'
import type {PropsWithChildren} from 'react'
import './SceneCanvas.css'

export function SceneCanvas({children}: PropsWithChildren) {
  return (
    <div className="scene-canvas-shell">
      <Canvas
        camera={{position: [8, 7, 8], fov: 65}}
        shadows
        dpr={[1, 2]}
      >
        {children}
      </Canvas>
    </div>
  )
}
