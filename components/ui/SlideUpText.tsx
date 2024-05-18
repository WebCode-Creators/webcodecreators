'use client'
import React from 'react'
import {motion} from 'framer-motion'
import { cn } from '@/lib/utils'

const SlideupText = ({text,className}:{text:string,className:string}) => {
    const variants = {
        initial:{
            y:150,
        },
        animate:{
            y:0,
        },
    }
  return (
    <div className='overflow-hidden'>
        <motion.h2  style={{transformOrigin:'bottom left'}} className={cn("w-auto flex font-extrabold",className)} >
            {text.replaceAll('-','-').split('').map((letter,index)=>{
                return <motion.span 
                key={index}
                transition={{delay:0.05*index,duration:0.8}} 
                initial={{y:10}}
                viewport={{once:true}}
                whileInView={{y:0}}
                >{letter == '_' || letter == '-' ? <div className='w-[10px]'></div> : letter}</motion.span>
            })}
        </motion.h2>
    </div>
  )
}

export default SlideupText