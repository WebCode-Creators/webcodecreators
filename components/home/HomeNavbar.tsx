'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import StaggerHoverText from '../ui/StaggerHoverText'
import { SquareMenu, X } from 'lucide-react'
import { BiMenuAltRight } from "react-icons/bi";
import { cn } from '@/lib/utils'
import { HomeNavbarContext } from '../contexts/HomeNavBarContext'

const HomeNavbar = () => {
    const [menuopen, setmenuopen] = useState(false);
    const navbarctx = useContext(HomeNavbarContext);
    return (
        <div className={cn('w-full px-5 pt-4 top-0 fixed z-[99999] transition-all duration-500', navbarctx.light ? '' : 'sm:bg-transparent bg-black')}>
            <nav className='screen p-2 flex justify-between items-center'>
                <div className='flex items-center'>
                    <Image src={'/assets/webcode.png'} width={60} height={60} alt='' />
                </div>
                <div className="flex items-center">
                    <Link className='flex px-4 py-2 rounded-full bg-gradient-to-t from-primary font-main to-violet-800 hover:scale-105 transition-all shining-button overflow-hidden relative text-[17px]' href={'/'}>ENQUIRE NOW</Link>
                    <div onClick={() => {
                        setmenuopen(true)
                    }} className='menu p-2 sm:hidden flex'>
                        <BiMenuAltRight className={`text-${navbarctx.light ? '' : 'white'}`} size={40} />
                    </div>
                </div>
            </nav>
            <div className="topbar md:flex hidden fixed z-[999] bg-[#141414] border-[#262626] border-[0.02rem] p-1 rounded-full topbar">
                <div className="flex relative">
                    <Link className='font-maim font-regular z-[999]' href={'/'}>HOME</Link>
                    <Link className='font-main' href={'/'}>WORKS</Link>
                    <Link className='font-main' href={'/'}>ABOUT US</Link>
                    <Link className='font-main' href={'/'}>OUR TEAM</Link>
                    <Link className='font-main' href={'/'}>CONTACT</Link>
                    <div className="absolute top-0 left-0 bg-[#1F1F1F] w-[100px] h-full rounded-full z-[998]"></div>
                </div>
            </div>
        </div>
    )
}

export default HomeNavbar