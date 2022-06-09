import { Plane } from '@react-three/drei'
import { FC } from 'react'

export const Floor: FC = () => {
  return (
    <Plane args={[50, 50]} position-y={-1.5} rotation-x={-Math.PI / 2} receiveShadow>
      <meshStandardMaterial />
    </Plane>
  )
}
