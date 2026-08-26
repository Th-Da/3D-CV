import {Canvas} from '@react-three/fiber'
import type {PropsWithChildren} from 'react'
import './SceneCanvas.css'

export function SceneCanvas({children}: PropsWithChildren) {
  return (
    <div className="scene-canvas-shell">
      <Canvas
        camera={{position: [6.9, 3.3, 3.9], fov: 65}}
        shadows
        dpr={[1, 2]}
      >
        {children}
      </Canvas>
    </div>
  )
}
