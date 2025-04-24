"use client"

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Image from "next/image";
import { getHeaderDishes } from "@/lib/strapi";
import DottedButton from "@/components/main-button";

interface Dish {
  id: number;
  name: string;
  price: number | null;
  ingredients: string;
  header_dish: boolean;
  image?: {
    url: string;
    alternativeText?: string | null;
    formats?: {
      thumbnail?: {
        url: string;
      };
    };
  };
}

export function Hero({ id }: { id?: string }) {
  const [selectedDish, setSelectedDish] = useState<{
    id: string;
    image: string;
    alt: string;
    prix: string;
    name: string;
  } | null>(null);
  
  const [headerDishes, setHeaderDishes] = useState<Dish[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeaderDishes = async () => {
      try {
        const response = await getHeaderDishes();
        console.log(response)
        
        // Transform the Strapi response to our Dish interface
        const dishes: Dish[] = response.map((item: any) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          ingredients: item.ingredients,
          header_dish: item.header_dish,
          image: item.image
            ? {
                url: item.image.url,
                alternativeText: item.image.alternativeText,
                formats: item.image.formats
              }
            : undefined
        }));

        // Filter for header_dish=true and has image
        const validDishes = dishes.filter(dish => 
          dish.header_dish && dish.image?.url
        );

        console.log(validDishes)

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
      } catch (error) {
        console.error("Error fetching header dishes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHeaderDishes();
  }, []);

  const getDishImageUrl = (dish: Dish): string => {
    if (!dish.image?.url) return '/plat1.png';
    return `${process.env.NEXT_PUBLIC_STRAPI_URL || ''}${dish.image.url}`;
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

  if (loading) {
    return (
      <div className=" overscroll-none relative min-h-screen w-screen  bg-black flex items-center justify-center z-100 x-0 y-0 ">
        <p className="text-primary italic  text-2xl font-bold">CHARGEMENT...</p>
      </div>
    );
  }

  /*if (!headerDishes.length) {
    return (
      <div className="min-h-screen w-screen flex items-center justify-center">
        <div className="text-white">No featured dishes available</div>
      </div>
    );
  }*/

  return (
    <div id={id} className="min-h-screen w-screen">
      <BackgroundGradientAnimation>
        <div className="flex md:flex-row flex-col h-screen gap-4 p-4 items-center justify-around relative z-10">
          <div className="md:w-1/2 w-full flex flex-col items-center gap-4">
            <h1 className=" text-white font-bold text-center md:text-5xl text-2xl">
            Sushi & Cuisine Asiatique<br/>à Khouribga
            </h1>
            <div>
              <a href="https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2F212719300261%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAadexxJiOfPc-CPQowJ2GlgEheyx669IFkinAOD6snzGSaNlTXFYXb91i-oy0A_aem_-mAdS9Ph9pUjm3o86m1Ibw&e=AT3fAIb9ewNEmAMKzeCgxvgagwKepfBEOERy39Dt2jGlwzDbX2yjJILabe678LYQ0Rtszips9jhBc1kB-ADveBg8TwXucxrKA9YXhQ">
                <DottedButton label="Passez VOTRE COMMANDE" />
              </a>
              
            </div>
            
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
                      {/* High-contrast white text */}
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
            <div className="w-full flex justify-center gap-3">
              { headerDishes.length > 0 && headerDishes.map((dish) => (
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
                    src={getDishImageUrl(dish) || "/plat1.png" }
                    height={80}
                    width={80}
                    alt={dish.image?.alternativeText || dish.name}
                  
                    className="object-cover"
                  />
                  
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </BackgroundGradientAnimation>
    </div>
  );
}