'use client'
import React from 'react'
import {motion} from 'framer-motion'
import SlideupText from '../ui/SlideUpText'
const Pricings = () => {
    return (
        <div id='Pricings' className='w-full bg-zinc-950'>
            <div className='screen'>
                <div className='flex flex-col items-center'>
                    <span className='bg-white/20 text-[16px] px-3 py-1 rounded-sm mt-[80px]'>Pricings</span>
                    {/* <h3 className='md:text-[45px] font-extrabold title text-[38px]'>Our Pricings</h3> */}
                    <SlideupText text='Our-Pricings' className='md:text-[45px] font-extrabold title text-[38px]' />
                    <p className='text-[13px] text-zinc-500 mt-0 mb-6 max-w-[700px] text-center'>We have three plans below. You can get started with any of these! </p>
                </div>
                <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.3,stiffness:1}} className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 px-6 gap-3 w-full mb-[100px] items-center'>
                    <div className='bg-black/50 px-6 py-3 rounded-2xl'>
                        <h4 className='text-[35px] font-semibold title m-0 p-0'>Web Development</h4>
                        <p className='text-[20px] m-0 p-0 text-zinc-700'>For Small business</p>
                        <h1><span className='text-[40px] title font-extrabold'>15k - 20k</span><span className='text-zinc-500'>/4 year</span></h1>
                        <div className='px-2 mt-3 mb-4 text-zinc-200'>
                            Responsive static Webpages<br />
                            1 Year Support<br />
                            SEO Management<br />
                            No APis<br />
                            domain not included<br />
                        </div>
                        <button className='w-full rounded-full mt-1 mb-2 hover:bg-zinc-950 transition-all bg-white/20 text-white px-6 py-4 text-center'>Contact Now</button>
                    </div>
                    <div className='bg-violet-500/50 px-6 py-6 rounded-2xl'>
                        <h4 className='text-[30px] font-bold title m-0 p-0'>Web Application</h4>
                        <p className='text-[18px] m-0 p-0 text-zinc-200'>For large business</p>
                        <h1><span className='text-[40px] title font-extrabold'>25k - 50k</span><span className='text-zinc-500'>for 4 years</span></h1>
                        <div className='px-2 mt-3 mb-4 text-zinc-200'>
                            Powerful Responsive dynamic Webpages<br />
                            lifetime Support<br />
                            Better SEO Management<br />
                            Content Management Dashboards<br />
                            APis<br />
                            Domain included<br />
                        </div>
                        <button className='w-full rounded-full mt-1 mb-2 hover:bg-zinc-950 transition-all bg-white/20 text-white px-6 py-4 text-center'>Contact Now</button>
                    </div>
                    <div className='bg-black/50 px-6 py-3 rounded-2xl'>
                        <h4 className='text-[35px] font-extrabold title m-0 p-0'>App Development</h4>
                        <p className='text-[20px] m-0 p-0 text-zinc-700'>For Every business</p>
                        <h1><span className='text-[40px] title font-extrabold'>15k - 25k</span><span className='text-zinc-500'>for 4 year</span></h1>
                        <div className='px-2 mt-3 mb-4 text-zinc-200'>
                            Attractive Apps<br />
                            for Both Android & iOs<br />
                            4 year support<br />
                            APis included<br />
                            domain not included<br />
                        </div>
                        <button className='w-full rounded-full mt-1 mb-2 hover:bg-zinc-950 transition-all bg-white/20 text-white px-6 py-4 text-center'>Contact Now</button>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Pricings