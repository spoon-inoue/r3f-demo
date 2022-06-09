import { FC } from 'react'

export const Lights: FC = () => {
  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight position={[3, 5, 3]} castShadow shadow-mapSize={[2048, 2048]} />
    </>
  )
}
