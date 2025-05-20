"use client"

import { motion } from "framer-motion";
import Image from "next/image";

import { useEffect, useRef, useState } from "react";


interface SquareData {
  id: number;
  src: string;
}

const ShuffleHero = () => {
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="overscroll-none relative min-h-screen w-screen bg-black flex items-center justify-center z-100">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <Image
              src="/sushiicon.png" // Replace with your loading image
              width={100}
              height={100}
              alt="Loading..."
              className="mb-4"
            />
          </motion.div>
          <motion.p 
            className="text-primary italic text-2xl font-bold"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            CHARGEMENT...
          </motion.p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-full bg-black">
      <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center md:gap-12 gap-8  max-w-6xl mx-auto bg-black">
        <div>
        <motion.h1 
                  className="text-white font-bold text-center md:text-5xl text-2xl"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  Restaurant Sushi57 – Votre Spécialiste Sushi à Khouribga
                </motion.h1>
        </div>
        <ShuffleGrid />
      </section>
    </div>
    
  );
};

const shuffle = (array: SquareData[]) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData: SquareData[] = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1747044624/WhatsApp_Image_2025-05-08_at_15.53.34_d43d70d3_fltdrx.jpg",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1747044602/WhatsApp_Image_2025-05-07_at_23.27.03_e35fdd8c_m0llcf.jpg",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1747044569/WhatsApp_Image_2025-05-07_at_23.46.45_0492d4af_j0hpxb.jpg",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1747044545/1_u1o7va.jpg",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1747044445/WhatsApp_Image_2025-05-08_at_20.08.45_e8a62807_h0qfex.jpg",
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1747044293/WhatsApp_Image_2025-05-08_at_16.38.44_fd9d9f73_krwgar.jpg",
  },
  {
    id: 7,
    src: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1747044331/WhatsApp_Image_2025-05-07_at_23.27.04_6b3e552d_gi6dwl.jpg",
  },
  {
    id: 8,
    src: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1747044234/WhatsApp_Image_2025-05-08_at_16.12.21_a82f2e52_vpphuu.jpg",
  },
  {
    id: 9,
    src: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1747044195/WhatsApp_Image_2025-05-08_at_16.58.23_5e016246_ghqlhr.jpg",
  },
  {
    id: 10,
    src: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1747044221/WhatsApp_Image_2025-05-08_at_20.05.50_4529f98c_avl2jx.jpg",
  },
  {
    id: 11,
    src: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1747044627/WhatsApp_Image_2025-05-07_at_23.46.45_765bba73_fcq8zr.jpg",
  },
  {
    id: 12,
    src: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1747044510/WhatsApp_Image_2025-05-08_at_15.53.36_6c393208_a7nvqz.jpg",
  },
  {
    id: 13,
    src: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1747044329/WhatsApp_Image_2025-05-08_at_20.08.35_228828aa_gcl2g9.jpg",
  },
  {
    id: 14,
    src: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1747044243/WhatsApp_Image_2025-05-08_at_15.53.37_f58314fb_eiljsl.jpg",
  },
  {
    id: 15,
    src: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1747044265/WhatsApp_Image_2025-05-08_at_20.05.50_7d56a2b6_h5hhf8.jpg",
  },
  {
    id: 16,
    src: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1747044449/WhatsApp_Image_2025-05-07_at_23.46.44_0caf29b4_sbwtte.jpg",
  },
];

const generateSquares = () => {
  return shuffle([...squareData]).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 9000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;