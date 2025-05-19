import React from 'react'
import { GiButterflyFlower } from "react-icons/gi";

const ScrollingText = () => {
  return (
    <div className='w-full md:flex hidden h-8 flex items-center justify-center'>
      <marquee className='hidden w-full  h-full justify-center items-center text-white bg-amber-400 md:flex'>Exiting  News we're launching our brand-new website on 18th October! Stay tuned for exclusive offers, updates, and a whole new experience.</marquee>
      <p className='md:hidden text-bases font-semibold'>We are not delevering in your Address</p>
    </div>
  )
}   

export default ScrollingText
