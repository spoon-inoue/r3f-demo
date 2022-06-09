import { Box } from '@react-three/drei'
import { useFrame, ThreeEvent } from '@react-three/fiber'
import gsap from 'gsap'
import { FC, useRef } from 'react'

export const Boxes: FC = () => {
  const ref = useRef<THREE.Group>(null)

  useFrame(() => {
    ref.current!.rotation.y += 0.005
  })

  return (
    <group ref={ref}>
      <AnimationBox position={[1, 0.5, 0]} color="#459ad8" />
      <AnimationBox position={[-1, 0, 0]} color="#F75C2F" />
    </group>
  )
}

// ----------------------------------------------
type AnimationBoxProps = {
  position: [number, number, number]
  color: THREE.ColorRepresentation
}

const AnimationBox: FC<AnimationBoxProps> = ({ position, color }) => {
  const ref = useRef<THREE.Mesh>(null)

  useFrame(() => {
    ref.current!.rotation.x += 0.005 * position[0]
    ref.current!.rotation.y += 0.005 * position[1]
    ref.current!.rotation.z += 0.005 * position[2]
  })

  const handlePointerEnter = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation()
    gsap.to(ref.current!.scale, { x: 1.5, y: 1.5, z: 1.5, duration: 1, ease: 'elastic.out(1, 0.3)' })
  }

  const handlePointerLeave = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation()
    gsap.to(ref.current!.scale, { x: 1, y: 1, z: 1, duration: 1, ease: 'elastic.out(1, 0.3)' })
  }

  return (
    <Box
      ref={ref}
      args={[1, 1]}
      position={position}
      castShadow
      receiveShadow
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}>
      <meshLambertMaterial color={color} />
    </Box>
  )
}
