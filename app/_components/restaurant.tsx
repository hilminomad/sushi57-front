"use client"

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function Restaurant() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Animation values
  const x = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0,1, 1]);
  const textShadow = useTransform(scrollYProgress, 
    [0, 0.5, 1], 
    [
      "0 0 0px rgba(0,0,0,0)", 
      "0 0 10px rgba(0,0,0,0.5)", 
      "0 0 20px rgba(0,0,0,0.8)"
    ]
  );

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Fixed Background Image */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/restaurant1.jpg" // Replace with your image path
          alt="Background"
          fill
          className="object-cover"
          style={{ objectPosition: 'right center' }}
          priority
        />
        <div className="absolute inset-0 bg-black/10"></div> {/* Overlay for better text visibility */}
      </div>

      {/* Animated Text */}
      <div className="h-full w-full flex items-center justify-center">
        <motion.h1 
          className="md:text-8xl text-4xl font-bold text-white text-center"
          style={{
            x,
            opacity,
            textShadow
          }}
        >
          Une Expérience Culinaire Asiatique Inoubliable
        </motion.h1>
      </div>
    </section>
  );
}