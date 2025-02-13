'use client'
import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Group, LoopOnce } from "three";
import { useScroll } from "framer-motion";
import * as THREE from 'three'
import { useFrame } from "@react-three/fiber";
// interface GLTFResult {
//   scene: THREE.Object3D;
//   animations: THREE.AnimationClip[];
// }

export const LaptopModel: React.FC = () => {
  const group = useRef<Group>(null);
  const { scene, animations } = useGLTF("/assets/laptop1.glb");
  const { actions } = useAnimations(animations, group);
  const { scrollYProgress } = useScroll();
  const [animationComplete, setAnimationComplete] = useState(false);
  const animationRef = useRef<THREE.AnimationAction | null>(null);
  const [scale, setScale] = useState([1.5, 1.5, 1.5]); // Default scale for desktop

  // Resize model based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScale([5, 5, 5]); // Smaller scale for mobile
      } else {
        setScale([7, 7, 7]); // Normal scale for desktop
      }
    };

    handleResize(); // Set scale on mount
    window.addEventListener("resize", handleResize); // Update scale on resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    const animationName = Object.keys(actions)[0]; // Get first animation

    if (actions[animationName]) {
      animationRef.current = actions[animationName];
      const action = animationRef.current;
      if (action) {
        action.reset().play();
        action.clampWhenFinished = true;
        action.loop = THREE.LoopOnce;
        action.getMixer().addEventListener("finished", () => {
          setAnimationComplete(true); // Animation complete
        });
      }

    }
  }, [actions]);

  useFrame(() => {
    if (!animationComplete) return; // Wait until animation is complete

    const progress = scrollYProgress.get(); // Get scroll progress (0 to 1)

    if (group.current) {
      group.current.position.y = -progress * 4;
    }
    if (animationComplete) {
      if (animationRef.current) {
        animationRef.current.time = animationRef.current.getClip().duration * (1 - (progress * 8)); // Reverse animation on scroll up
      }
    }
  });
  return <primitive ref={group} object={scene} scale={scale} rotation={[0, Math.PI / 2, 0]} /> // Increase size
};
