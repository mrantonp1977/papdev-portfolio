import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

const HeroExperience = () => {
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      <ambientLight intensity={0.2} color='#1a1a40' />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <OrbitControls />
      
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color='blue' />  
      </mesh>
    </Canvas>
  )
}

export default HeroExperience

