'use client'
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import { HomeNavbarContext } from '@/components/contexts/HomeNavBarContext'
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient'
import Image from 'next/image'

import Link from 'next/link'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import OurWorks from '@/components/home/OurWorks'
import { BiPhoneCall } from 'react-icons/bi'
import Pricings from '@/components/home/Pricings'

const HomePage = () => {
    const [section1Ref, section1InView] = useInView({ threshold: 0.1 });
    const [lighmode, setlighmode] = useState(false);
    const navbarctx = useContext(HomeNavbarContext);
    const ref = useRef(null);
    const ref2 = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"],
    });
    const [hookedYPostion, setHookedYPosition] = React.useState(0);
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setHookedYPosition(latest);
    })
    useEffect(() => {
        if (section1InView) {
            setlighmode(false)
        } else {
            setlighmode(true);
        }
        navbarctx.togglelight(lighmode)
    }, [])
    useEffect(() => {
        if (section1InView) {
            setlighmode(false)
        } else {
            setlighmode(true);
        }
        navbarctx.togglelight(lighmode)
    }, [section1InView]);
    return (
        <>
            <div ref={section1Ref} className='w-full relative z-[2]'>
                <BackgroundGradientAnimation className="min-h-[100vh] h-max w-full overflow-x-hidden bg-white/90 flex flex-col items-center justify-between relative" >
                    <motion.div className="flex z-[3] flex-col items-center justify-center h-full mt-[9rem]">
                        <motion.h2 initial={{ opacity: 0, y: 20 }} transition={{ duration: 0.4, stiffness: 1 }} animate={{ opacity: 1, y: 0 }} className="md:text-[45px] text-[40px] max-w-[800px] text-center font-extrabold title-animated ">
                            <span className='md:text-[45px] text-[25px]'>Crafting Digital Excellence through</span> <br />WebCodeCreators</motion.h2>
                        <p className="text-primary font-medium">Where Vision Meets Innovation</p>
                        <div className="flex gap-3 mt-5">
                            <Link className='flex px-4 py-3 rounded-full text-muted border-[0.02rem] border-muted hover:scale-105 transition-all shining-button overflow-hidden relative ' href={'/#OurWorks'}>Our Works</Link>
                            <Link className='flex px-4 py-3 rounded-full bg-gradient-to-t from-primary to-violet-800 hover:scale-105 transition-all shining-button overflow-hidden relative ' href={'/'}>Get a Quote</Link>
                        </div>
                        <Image src={'/assets/headerimg.png'} width={500} className="mt-6 object-top object-cover overflow-hidden" height={200} alt="" />
                    </motion.div>
                    <Image src={'/assets/bg-hero.png'} fill className='z-[1] blur-xl' alt='' />
                </BackgroundGradientAnimation>
            </div>
            <div ref={ref2} className="bg-background min-h-[100vh] w-full overflow-y-hidden overflow-x-hidden">
                <h3 className='title mx-auto text-[30px]  font-extrabold w-full text-center mt-[100px] px-4'>Our Digital Services</h3>
                <OurServices />
            </div>
            {/* // Works HEad */}

            <OurWorks />
            <div ref={ref2} className="bg-background relative h-[400px] w-full overflow-hidden">
                <div className='w-full rotate-45 mt-[-300px]'>
                    <div className='overflow-hidden mt-5'>
                        <motion.div style={{ marginLeft: `-${hookedYPostion * 600}px` }} className='flex flex-nowrap justify-center gap-5 items-center md:h-[240px] h-[150px] w-max'>
                            <Image className='workCard' src={'/assets/w2.png'} alt='' height={300} width={400} />
                            <Image className='workCard' src={'/assets/w1.png'} alt='' height={300} width={400} />
                            <Image className='workCard' src={'/assets/w3.png'} alt='' height={300} width={400} />
                            <Image className='workCard' src={'/assets/w4.png'} alt='' height={300} width={400} />
                            <Image className='workCard' src={'/assets/w5.png'} alt='' height={300} width={400} />
                        </motion.div>
                    </div>
                    <div className='overflow-hidden w-full'>
                        <motion.div style={{ x: `${(hookedYPostion * 600) - 900}px` }} className='flex flex-nowrap justify-center gap-5 items-center md:h-[240px] h-[150px] w-max'>
                            <Image className='workCard' src={'/assets/w6.png'} alt='' height={300} width={400} />
                            <Image className='workCard' src={'/assets/w7.png'} alt='' height={300} width={400} />
                            <Image className='workCard' src={'/assets/w8.png'} alt='' height={300} width={400} />
                            <Image className='workCard' src={'/assets/w9.png'} alt='' height={300} width={400} />
                            <Image className='workCard' src={'/assets/w10.png'} alt='' height={300} width={400} />
                        </motion.div>
                    </div>
                    <div className='overflow-hidden mt-5'>
                        <motion.div style={{ marginLeft: `-${hookedYPostion * 600}px` }} className='flex flex-nowrap justify-center gap-5 items-center md:h-[240px] h-[150px] w-max'>
                            <Image className='workCard' src={'/assets/w2.png'} alt='' height={300} width={400} />
                            <Image className='workCard' src={'/assets/w1.png'} alt='' height={300} width={400} />
                            <Image className='workCard' src={'/assets/w3.png'} alt='' height={300} width={400} />
                            <Image className='workCard' src={'/assets/w4.png'} alt='' height={300} width={400} />
                            <Image className='workCard' src={'/assets/w5.png'} alt='' height={300} width={400} />
                        </motion.div>
                    </div>
                    <div className='overflow-hidden w-full'>
                        <motion.div style={{ x: `${(hookedYPostion * 600) - 900}px` }} className='flex flex-nowrap justify-center gap-5 items-center md:h-[240px] h-[150px] w-max'>
                            <Image className='workCard' src={'/assets/w11.png'} alt='' height={300} width={400} />
                            <Image className='workCard' src={'/assets/w16.png'} alt='' height={300} width={400} />
                            <Image className='workCard' src={'/assets/w12.png'} alt='' height={300} width={400} />
                            <Image className='workCard' src={'/assets/w13.png'} alt='' height={300} width={400} />
                            <Image className='workCard' src={'/assets/w10.png'} alt='' height={300} width={400} />
                        </motion.div>
                    </div>
                </div>
                <div className='absolute top-0 bottom-0 flex flex-col justify-center items-center left-0 right-0 bg-black/95'>
                    <h3 className='title md:text-[50px] text-[30px] font-extrabold w-full text-center px-4'>Do you have any ideas?</h3>
                    <p className='text-[22px] text-zinc-400'>Turn them into mindblowing designs!</p>
                    <div className='flex gap-3 mt-5'>
                        <Link className='flex px-4 py-3 rounded-full bg-gradient-to-t from-primary to-violet-800 hover:scale-105 transition-all shining-button overflow-hidden relative ' href={'/'}>Get a Quote</Link>
                        <Link className='flex px-4 py-3 rounded-full bg-gradient-to-t from-green-500 to-green-400 hover:scale-105 transition-all shining-button overflow-hidden relative text-black gap-3 items-center' href={'/'}><BiPhoneCall /> Contact Us</Link>
                    </div>
                </div>
            </div>
            <Pricings />
            <div className='screen flex md:flex-row flex-col gap-5 items-center justify-between px-10 py-10 '>
                <h3 className='text-[15px] text-zinc-300'>&copy; WebCodeCreators all rights reserved</h3>
                <div className='flex gap-4 text-[14px] text-zinc-400'>
                    <Link href={'/'}>Terms & Conditions</Link>
                    <Link href={'/'}>Privacy Policy</Link>
                    <Link href={'/'}>About Us</Link>
                </div>
            </div>
        </>
    )
}
export const OurServices = () => {
    return <>
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, stiffness: 1 }} className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-w-[1440px] w-full mx-auto gap-5 px-6 mt-8'>
            <div className=' card rounded-xl flex justify-center flex-col items-center gap-3 p-3'>
                <Image src={'/assets/web-design.png'} alt="" className='mt-3' width={70} height={70} />
                <h2 className='text-[25px] text-violet-400'>Web Desiging</h2>
                <h2>Transform your vision into a stunning, user-friendly website. Our expert designers craft visually appealing and intuitive designs that captivate your audience and enhance user experience!</h2>
                <span className='circle1'></span>
                <span className='circle2'></span>
                <span className='circle3'></span>
                <Link href={'/'} className='border-[0.01rem] rounded-full hover:bg-zinc-50/10 ms-auto px-3 py-2 border-zinc-900 z-[1]'>read more..</Link>
            </div>
            <div className=' card rounded-xl justify-center flex flex-col items-center gap-3 px-6'>
                <Image src={'/assets/web-development.png'} alt="" className='mt-3' width={90} height={90} />
                <h2 className='text-[25px] text-violet-400'>FullStack Web Development</h2>
                <h2>End-to-end development solutions for both front-end and back-end, creating seamless, scalable, and efficient websites tailored to your needs</h2>
                <span className='circle1'></span>
                <span className='circle2'></span>
                <span className='circle3'></span>
                <Link href={'/'} className='border-[0.01rem] rounded-full hover:bg-zinc-50/10 ms-auto px-3 py-2 border-zinc-900 z-[1]'>read more..</Link>
            </div>
            <div className=' card rounded-xl justify-center flex flex-col items-center gap-3 p-3'>
                <Image src={'/assets/app-development.png'} alt="" className='mt-3' width={90} height={90} />
                <h2 className='text-[25px] text-violet-400'>App Development</h2>
                <h2>From concept to launch, we create intuitive and powerful mobile applications. Our team specializes in developing high-quality apps for both iOS and Android, tailored to meet your unique business needs.</h2>
                <span className='circle1'></span>
                <span className='circle2'></span>
                <span className='circle3'></span>
                <Link href={'/'} className='border-[0.01rem] rounded-full hover:bg-zinc-50/10 ms-auto px-3 py-2 border-zinc-900 z-[1]'>read more..</Link>
            </div>
            <div className='max-w-[590px] mx-auto px-6 w-full card rounded-xl justify-center flex flex-col items-center gap-3 p-23 md:col-span-3'>
                <Image src={'/assets/graphic-designer.png'} alt="" className='mt-3' width={90} height={90} />
                <h2 className='text-[25px] text-violet-400'>Graphic Desiging</h2>
                <h2>Enhance your brand{'\''}s visual identity with our creative graphic design solutions. From logos to marketing materials, we craft compelling visuals that captivate and engage your audience.</h2>
                <span className='circle1'></span>
                <span className='circle2'></span>
                <span className='circle3'></span>
                <Link href={'/'} className='border-[0.01rem] rounded-full hover:bg-zinc-50/10 ms-auto px-3 py-2 border-zinc-900 z-[1]'>read more..</Link>
            </div>
        </motion.div>

        {/* <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, stiffness: 1 }} className='w-full mx-auto  flex justify-center px-2'>
            
        </motion.div> */}
    </>
}
export default HomePage