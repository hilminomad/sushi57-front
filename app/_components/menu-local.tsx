"use client"

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { menuData, Category, Dish } from "@/menu";
import DottedButton from "@/components/main-button";

export function Menu({ id }: { id?: string }) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [imageLoading, setImageLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState<Record<string | number, boolean>>({});

  useEffect(() => {
    const transformedCategories: Category[] = menuData.map(category => ({
      ...category,
      dishes: category.dishes.map(dish => ({
        ...dish,
        imageUrl: dish.image.url,
        imageAlt: dish.image.name
      }))
    }));

    setCategories(transformedCategories);
    
    if (transformedCategories.length > 0) {
      setSelectedCategory(transformedCategories[0]);
    }
  }, []);

  const handleImageLoad = (dishId: string | number) => {
    setLoadedImages(prev => ({ ...prev, [dishId]: true }));
  };

  return (
    <section id={id} className="md:pb-12 pb-4 md:mt-0 mt-[50vh] min-h-screen px-4 sm:px-6 lg:px-8 bg-black-primary">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 translate-y-[-40px] relative z-50 flex flex-col items-center ">
          <h2 className="md:text-4xl text-2xl text-center font-bold md:text-black-primary text-white-primary [text-shadow:0_0px_10px_rgba(0,0,0,0.8)]">Notre Menu</h2>
          <p className="md:text-xl text-center text-white-secondary md:max-w-[500px]">
            Sushis & Makis Frais, Woks Savoureux, Poke Bowls Gourmands, Plats Traditionnels Asiatiques (Riz cantonais, Saté, Nems), Soupes et Entrées
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Categories */}
          <div className="w-full md:w-1/4">
            <div className="">
              <div className="space-y-2 flex md:flex-col md:overflow-hidden overflow-scroll py-2">
                {categories.map((category) => (
                  <motion.button
                    key={category.id}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedCategory(category)}
                    className={`
                      md:w-full uppercase text-left px-4 md:py-3 py-0 rounded-lg transition-colors text-lg
                      whitespace-nowrap
                      ${selectedCategory?.id === category.id
                        ? "bg-primary text-black-primary"
                        : "bg-black-primary text-white-secondary hover:bg-black-secondary"
                      }
                    `}
                  >
                    {category.name}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Dishes */}
          <div className="w-full md:w-3/4">
            {selectedCategory ? (
              <>
                <h3 className="text-3xl font-bold text-primary-light mb-6 uppercase">- {selectedCategory.name} {selectedCategory.notes}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:border-x-2 md:p-4">
                  {selectedCategory.dishes.map((dish, index) => (
                    <motion.div
                      key={dish.id}
                      whileHover={{ y: -5 }}
                      className="overflow-hidden mb-8"
                    >
                      <div className="flex gap-4">
                        <div className="w-full rounded-4xl md:w-1/3 h-32 relative">
                          {/* Image with loader and lazy loading */}
                          <div className={`absolute inset-0 bg-gray-700 rounded-2xl transition-opacity duration-300 ${loadedImages[dish.id] ? 'opacity-0' : 'opacity-100'}`}>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="animate-pulse flex space-x-4">
                                <div className="rounded-full bg-gray-600 h-4 w-4"></div>
                              </div>
                            </div>
                          </div>
                          {dish.image.url && <Image
                            src={dish.image.url }
                            alt={dish.image.name || dish.name}
                            fill
                            loading="lazy"
                            className="object-cover rounded-2xl"
                            onLoadingComplete={() => handleImageLoad(dish.id)}
                          />}
                          
                        </div>
                        <div className="w-full flex flex-col justify-between md:w-2/3">
                          <div className="">
                            <h4 className="text-xl font-bold text-white-primary uppercase">{dish.name}</h4>
                            <p className="text-white-secondary text-sm lowercase">{dish.ingredients}</p>
                          </div>
                          <p className="text-2xl text-primary-dark font-semibold">{dish.price} Dhs</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">Sélectionnez une catégorie pour voir les plats</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}