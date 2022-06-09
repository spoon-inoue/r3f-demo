import { OrbitControls, Stats } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { FC } from 'react'
import { Boxes } from './Boxes'
import { Floor } from './Floor'
import { Lights } from './Lights'

export const TCanvas: FC = () => {
  return (
    <Canvas
      camera={{
        position: [0, 3, 5],
        fov: 50,
        aspect: window.innerWidth / window.innerHeight,
        near: 0.1,
        far: 2000
      }}
      dpr={window.devicePixelRatio}
      shadows>
      {/* options */}
      <color attach="background" args={['#000']} />
      <OrbitControls />
      {/* objects */}
      <Lights />
      <Boxes />
      <Floor />
      {/* helper */}
      <Stats />
      <axesHelper />
    </Canvas>
  )
}
