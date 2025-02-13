
'use client'
import { motion } from 'framer-motion'
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { LaptopModel } from "./components/laptop";
import Image from "next/image";
import * as THREE from "three";
import { useScroll } from 'framer-motion';
import Scene from './components/Scene';
const NewHero = () => {

    return (
        <div className="max-h-[100dvh] h-full overflow-hidden">
            <div className="w-full h-[1000px] relative">
                <div className="absolute z-[2] top-[-50px] left-0 right-0">
                    <h1 className="font-main [line-height:80px] sm:text-[60px] text-[35px] sm:tracking-normal tracking-tight md:text-[80px] text-center">
                        <span className="flex md:[line-height:80px] [line-height:60px] sm:flex-row justify-center items-center sm:gap-2 flex-col sm:mb-[-70px] mb-[-100px]">Building the <span className="font-bebas relative gradient-text md:text-[80px] text-[80px]">
                            Future
                            <Image src={'/assets/splash.png'} className="absolute top-[50%] translate-y-[-50%] px-4 left-[50%] translate-x-[-50%] right-0 bottom-0 z-[1]" alt="" height={200} width={200} />
                        </span></span><br />of Digital Experiences
                    </h1>
                </div>
                <Canvas className="relative drop-shadow-lg z-[2] mt-[200px] h-full"
                    camera={{ position: [0, 0, 5], fov: 50 }} // Moves to front & lower level
                    style={{ background: "none" }}
                    gl={{ alpha: true }}>
                    <Scene />
                </Canvas>

            </div>
            <Image src={'/assets/bghero.png'} className="absolute left-0 bottom-0 right-0 w-full top-0 md:h-auto h-full object-cover" alt="" width={3000} height={3000} />
            <div className="absolute top-0 left-0 bottom-0 right-0 bg-gradient-to-t from-black to-transparent"></div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <Image src={'/assets/ribbon.png'} className="absolute left-0 bottom-0 right-0 md:object-contain object-cover sm:h-auto h-[50%] w-full" alt="" width={2000} height={3000} />
            </motion.div>
        </div>
    )
}

export default NewHero