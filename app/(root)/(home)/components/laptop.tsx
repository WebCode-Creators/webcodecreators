import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Group, LoopOnce } from "three";

// interface GLTFResult {
//   scene: THREE.Object3D;
//   animations: THREE.AnimationClip[];
// }

export const LaptopModel: React.FC = () => {
  const group = useRef<Group>(null);
  const { scene, animations } = useGLTF("/assets/laptop1.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const animationName = Object.keys(actions)[0]; // Get the first animation

    if (actions[animationName]) {
      const action = actions[animationName];
      action.setLoop(LoopOnce, 1); // Play only once
      action.clampWhenFinished = true; // Freeze at the last keyframe
      action.play();
    }
  }, [actions]);


  return <primitive ref={group} object={scene} scale={[7, 7, 7]} rotation={[0,Math.PI/2, 0]} /> // Increase size
};
