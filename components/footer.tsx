"use client"

import { Facebook, Instagram, Linkedin } from "lucide-react"
import { motion } from 'framer-motion';
import Image from "next/image"
import Link from "next/link"

export const Footer = () => {
  return(
    <div className="w-full">

    
    <div className="w-full relative z-[100] bg-black-primary pt-8  ">
      <div className="w-full relative z-100 text-slate-300 p-4  grid md:grid-cols-3 grid-col-1 gap-4">
      <div className="h-full w-full flex gap-2 items-center justify-center">
      <Link href='/'>
        <motion.div
          animate={{ rotate: 360 }} // Rotate 360 degrees
          transition={{ 
            duration: 10, // Normal rotation speed (10 seconds for full rotation)
            ease: "linear", // Linear animation for smooth rotation
            repeat: Infinity, // Infinite rotation
          }}
          whileHover={{
            transition: { duration: 3 } // Faster rotation on hover (3 seconds for full rotation)
          }}
        >
          <Image height={50} width={120} alt='Footer logo' src='/logo.png' />
        </motion.div>
      </Link>
    </div>
        
        <div className="flex text-center   flex-col gap-2">
          <p className="text-white font-medium">Suivez-nous sur Instagram</p>
          <div className="p-3 w-full flex justify-center items-center gap-4">
          <Link href='https://www.instagram.com/su57hii/'>
            <Instagram/>
          </Link>
        </div>
        </div>
        <div className="flex md:text-end text-center  flex-col">
          <p className="text-slate-200 font-light transition-all hover:text-white">06 35 34 73 34</p>
          <p className="text-slate-200 font-light transition-all hover:text-white">info@sushi57.ma</p>
          <p className="text-slate-200 font-light transition-all hover:text-white">N'49 LOT ENNAKHIL RDC
KHOURIBGA 25000</p>
        </div>
      </div>
      <div className="w-full text-slate-300 bg-black-primary">
        <div className="w-full flex justify-center border-t-2 border-slate-300 py-4">
          <p className="xs">SUSHI57 &copy; 2025</p>
        </div>
      </div>
    </div>
    </div>
  )    
}