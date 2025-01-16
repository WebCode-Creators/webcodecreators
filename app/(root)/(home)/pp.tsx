import { useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

export const Parallel = () => {
    const ref = useRef(null);
    const [size, setsize] = useState(0)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"],
    });
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        console.log(latest)
        setsize(latest)
    })
    const scale = size * 1; // Scale increases with motionValue
    const borderRadius = `${200 - size * 200}px`; // Decrease borderRadius
    const opacity = 1;
    return <main className="min-h-[50vh] sm:mt-[-120px]" ref={ref}>
        <Image style={{
            transform: `scale(${scale})`,
            borderRadius: borderRadius,
            opacity: opacity,
            transition: "transform 0.2s ease, border-radius 0.2s ease, opacity 0.2s ease", // Smooth transition for visual effects
        }} src={'/assets/mockup4.jpg'} className="w-full" width={4000} height={4000} alt={''} />
    </main>
}