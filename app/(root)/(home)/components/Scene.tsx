'use client'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'
import { LaptopModel } from './laptop'
import { OrbitControls } from '@react-three/drei'
import { useScroll } from 'framer-motion'
import * as THREE from 'three'
const Scene = () => {
    const cameraRef = useRef<THREE.PerspectiveCamera>(null);
    const laptopRef = useRef<THREE.Group>(null);
    const { scrollYProgress } = useScroll();
    const progress = scrollYProgress.get(); // Get scroll percentage (0-1)
    useEffect(() => {
        if (cameraRef.current) {
            console.log("Camera initialized:", cameraRef.current);
        } else {
            console.warn("Camera ref is still null!");
        }
    }, []);

    useFrame(() => {
        // Move camera upwards as scroll progresses
        // if (cameraRef.current) {
        //     cameraRef.current.position.y = (progress*10) * 2; // Move up
        //     cameraRef.current.lookAt(0, (progress*10) * -4, 0); // Look down
        // }

        // // Sink the laptop into the ground
        // if (laptopRef.current) {
        //     laptopRef.current.position.y = -progress * 2; // Move down
        // }
    });
    return (
        <>
            <ambientLight intensity={1} />
            <directionalLight position={[5, 5, 5]} />
            <LaptopModel />
            <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} />
        </>
    )
}

export default Scene