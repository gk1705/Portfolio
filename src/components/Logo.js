import Link from 'next/link'
import React from 'react'
import {motion} from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
        <MotionLink href="/"
        className='w-16 h-16 bg-dark text-light flex items-center justify-center
        rounded-full text-2xl font-bold border border-solid border-transparent dark:border-light
        '
        whileHover={{ 
            backgroundColor:["#121212", "rgba(51,33,47,1)","rgba(206,101,127,1)","rgba(67,193,199,1)","rgba(98,120,170,1)", "#121212"],
            transition:{duration:1.5, repeat: Infinity}
        }}
        >GK</MotionLink>
    </div>
  )
}

export default Logo