"use client"

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Image from "next/image";
import { headerDishesData, getHeaderDishes, Dish } from "@/header-dishes";
import DottedButton from "@/components/main-button";

export function Hero({ id }: { id?: string }) {
  const [selectedDish, setSelectedDish] = useState<{
    id: string;
    image: string;
    alt: string;
    prix: string;
    name: string;
  } | null>(null);
  
  const [headerDishes, setHeaderDishes] = useState<Dish[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowContent(true);
    }, 2000); // 2 seconds delay

    // Use local data instead of fetching
    const validDishes = headerDishesData.filter(dish => 
      dish.header_dish && dish.image?.url
    );

    setHeaderDishes(validDishes);
    
    if (validDishes.length > 0) {
      const firstDish = validDishes[0];
      setSelectedDish({
        id: firstDish.id.toString(),
        image: getDishImageUrl(firstDish),
        alt: firstDish.image?.alternativeText || firstDish.name,
        prix: firstDish.price?.toString() || "0",
        name: firstDish.name,
      });
    }

    return () => clearTimeout(timer);
  }, []);

  const getDishImageUrl = (dish: Dish): string => {
    if (!dish.image?.url) return '/plat1.png';
    return dish.image.url;
  };

  const handleDishClick = (dish: Dish) => {
    setSelectedDish({
      id: dish.id.toString(),
      image: getDishImageUrl(dish),
      alt: dish.image?.alternativeText || dish.name,
      prix: dish.price?.toString() || "0",
      name: dish.name
    });
  };

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
              src="/sushi-loading.png" // Replace with your loading image
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
    <AnimatePresence>
      {showContent && (
        <motion.div
          id={id}
          className="min-h-screen w-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <BackgroundGradientAnimation>
            <motion.div 
              className="flex md:flex-row flex-col h-screen gap-4 p-4 items-center justify-around relative z-10"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="md:w-1/2 w-full flex flex-col items-center gap-4">
                <motion.h1 
                  className="text-white font-bold text-center md:text-5xl text-2xl"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  Sushi & Cuisine Asiatique<br/>à Khouribga
                </motion.h1>
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <a href="https://wa.me/212719300261">
                    <DottedButton label="Passez VOTRE COMMANDE" />
                  </a>
                </motion.div>
              </div>
              
              <div className="w-1/2 flex flex-col items-center justify-center">
                {selectedDish && (
                  <div className="relative h-[380px] w-[380px]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={selectedDish.id}
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -100, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute"
                      > 
                        <div className="
                          absolute z-[100] top-0 right-0 
                          p-3 rounded-xl 
                          bg-gray-900/80           
                          backdrop-blur-sm          
                          border border-primary/20    
                          shadow-lg shadow-primary/30 
                        ">
                          <h3 className="font-bold uppercase text-white text-lg">  
                            {selectedDish.name}
                          </h3>
                          <h3 className="text-white/90 font-medium text-right">  
                            {selectedDish.prix} Dhs
                          </h3>
                        </div>
                        <Image
                          src={selectedDish.image}
                          width={320}
                          height={320}
                          alt={selectedDish.alt}
                          className="object-cover"
                          priority
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                )}
                <motion.div 
                  className="w-full flex justify-center gap-3"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  {headerDishes.length > 0 && headerDishes.map((dish) => (
                    <motion.div
                      key={dish.id}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleDishClick(dish)}
                      className={`cursor-pointer ${
                        selectedDish?.id === dish.id.toString()
                          ? "ring-2 ring-white rounded-md"
                          : ""
                      }`}
                    >
                      <Image
                        src={getDishImageUrl(dish) || "/plat1.png"}
                        height={80}
                        width={80}
                        alt={dish.image?.alternativeText || dish.name}
                        className="object-cover"
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </BackgroundGradientAnimation>
        </motion.div>
      )}
    </AnimatePresence>
  );
}