/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

interface PlaneProps {
  isRotating: boolean;
  position: [number, number, number];
  scale: [number, number, number];
  rotation: [number, number, number];
}

export const Plane = ({isRotating, ...props}: PlaneProps) => {
  const ref = useRef<any>();
  const {scene, animations} = useGLTF("./3d/plane.glb");
  const {actions} = useAnimations(animations, ref);

  useEffect(() => {
    if(isRotating) {
        actions['Take 001']?.play();
    
    } else {
        actions['Take 001']?.stop();
      
    }
  }, [actions, isRotating]);
  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};
