import {DioramaBase} from '../../components/3d/Environment/DioramaBase'
import {Ground} from '../../components/3d/Environment/Ground'
import {SceneLighting} from '../../components/3d/Environment/SceneLighting'

export function CVScene() {
  return (
    <>
      <color attach="background" args={['#cfd8e6']} />
      <SceneLighting />
      <DioramaBase />
      <Ground />
    </>
  )
}
