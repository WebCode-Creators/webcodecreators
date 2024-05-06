'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import StaggerHoverText from '../ui/StaggerHoverText'
import { SquareMenu, X } from 'lucide-react'
import { BiMenuAltRight } from "react-icons/bi";
import { cn } from '@/lib/utils'

const HomeNavbar = () => {
    const [menuopen, setmenuopen] = useState(false)
    return (
        <div className='w-full px-5 pt-4 fixed z-[99999]'>
            <nav className='screen p-2 flex justify-between items-center'>
                <div className='flex items-center gap-4'>
                    <Image src={'/assets/logo.png'} width={50} height={50} alt='' />
                    <h2 className='font-bold text-[18px]'>WebCodeCreators</h2>
                </div>
                <div onClick={()=>{
                    setmenuopen(true)
                }} className='menu p-2 md:hidden block'>
                    <BiMenuAltRight size={30} />
                </div>
                <div className={cn('md:relative fixed md:right-0 top-0 bottom-0 md:flex flex md:items-center items-end gap-10 md:flex-row flex-col md:justify-end justify-start md:bg-transparent bg-black md:px-0 md:py-0 py-10 transition-all px-[30px] md:text-[16px] text-[24px] md:max-w-[600px] w-full max-w-[350px] ',menuopen ? 'right-0' : 'right-[-350px]')}>
                    <div className='md:flex-row md:flex hidden flex-col items-center gap-10 '>
                        <StaggerHoverText link='/' text='Home' />
                        <StaggerHoverText link='/' text='Our-Works' />
                        <StaggerHoverText link='/' text='Contact' />
                    </div>
                    <div onClick={()=>{
                        setmenuopen(false)
                    }} className='md:flex-row md:hidden cursor-pointer flex flex-col items-end gap-4 '>
                        <div className='flex items-center mb-5 mt-4 gap-2 text-muted'>
                            Close <X className='' size={30} />
                        </div>
                        <Link href={'/'}>Home</Link>
                        <Link href={'/'}>Our Works</Link>
                        <Link href={'/'}>Contact</Link>
                    </div>
                    <Link className='flex px-4 py-3 rounded-full bg-gradient-to-t from-primary to-violet-800 hover:scale-105 transition-all shining-button overflow-hidden relative ' href={'/'}>Enquire Now</Link>
                </div>
            </nav>
        </div>
    )
}

export default HomeNavbar