/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * IMPORTANT: Loading glTF models into a Three.js scene is a lot of work.
 * Before we can configure or animate our model’s meshes, we need to iterate through
 * each part of our model’s meshes and save them separately.
 *
 * But luckily there is an app that turns gltf or glb files into jsx components
 * For this model, visit https://gltf.pmnd.rs/
 * And get the code. And then add the rest of the things.
 * YOU DON'T HAVE TO WRITE EVERYTHING FROM SCRATCH
 */

import { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { AnimationAction } from "three";
 

interface FoxProps {
  currentAnimation: string;
  position: [number, number, number];
  scale: [number, number, number];
  rotation: [number, number, number];
}

// 3D Model from: https://sketchfab.com/3d-models/fox-f372c04de44640fbb6a4f9e4e5845c78
export function Fox({ currentAnimation, ...props }: FoxProps) {
  const group = useRef<any>();
  const { scene, animations } = useGLTF("./3d/fox.glb");
  const { actions } = useAnimations(animations, group);

  // This effect will run whenever the currentAnimation prop changes
  useEffect(() => {
    Object.values(actions).forEach((action) => {
      if (action !== null) {
        action.stop();
      }
    });

    if (actions[currentAnimation] !== null) {
        actions[currentAnimation]?.play() as AnimationAction;
    }
  }, [actions, currentAnimation]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={scene} />
      </group>
    </group>
  );
}

useGLTF.preload("./3d/fox.glb");
