/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

interface SkyProps {
    isRotating: boolean;
}

export const Sky = ({isRotating}: SkyProps) => {
    const sky = useGLTF('./3d/sky.glb')
    const skyRef = useRef<any>();

    useFrame((_, delta) => {
      if(isRotating) {
        skyRef.current.rotation.y += 0.25 * delta;
      }
    });

  return (
    <mesh ref={skyRef}>
        <primitive object={sky.scene} />
    </mesh>
  )
}
