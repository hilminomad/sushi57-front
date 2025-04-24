"use client"

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { getCategoriesWithDishes, Dish as ApiDish, Category as ApiCategory } from "@/lib/strapi";
import DottedButton from "@/components/main-button";

interface Dish {
  id: number;
  name: string;
  price: number;
  ingredients: string;
  imageUrl: string;
  imageAlt?: string;
}

interface Category {
  id: number;
  name: string;
  dishes: Dish[];
}

export function Menu({ id }: { id?: string }) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiCategories = await getCategoriesWithDishes();
        
        const transformedCategories: Category[] = apiCategories.map((apiCategory: ApiCategory) => {
          const dishes: Dish[] = apiCategory.dishes.map((apiDish: ApiDish) => ({
            id: apiDish.id,
            name: apiDish.name,
            price: apiDish.price,
            ingredients: apiDish.ingredients,
            imageUrl: `${process.env.NEXT_PUBLIC_STRAPI_URL || ''}${apiDish.image.url}`,
            imageAlt: apiDish.name
          }));
          
          return {
            id: apiCategory.id,
            name: apiCategory.name,
            dishes
          };
        });

        setCategories(transformedCategories);
        
        if (transformedCategories.length > 0) {
          setSelectedCategory(transformedCategories[0]);
        }
      } catch (error) {
        console.error("Error fetching menu data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="py-20 flex items-center justify-center">
        <p className="text-primary italic text-2xl font-bold">CHARGEMENT...</p>
      </div>
    );
  }

  return (
    <section id={id} className="md:pb-12 pb-4 md:mt-0 mt-[50vh] min-h-screen px-4 sm:px-6 lg:px-8 bg-black-primary">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 translate-y-[-40px]   relative z-50 flex flex-col items-center ">
          <h2 className="md:text-4xl text-2xl text-center font-bold md:text-black-primary text-white-primary [text-shadow:0_0px_10px_rgba(0,0,0,0.8)]">Notre Menu</h2>
          <p className=" md:text-xl  text-center  text-white-secondary md:max-w-[500px]">
            Sushis & Makis Frais, Woks Savoureux, Poke Bowls Gourmands, Plats Traditionnels Asiatiques (Riz cantonais, Saté, Nems), Soupes et Entrées
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Categories - 1/3 width on desktop, full width on mobile */}
          <div className="w-full md:w-1/4">
            <div className=" ">
              <div className="space-y-2 flex md:flex-col md:overflow-hidden overflow-scroll py-2">
                {categories.map((category) => (
                  <motion.button
                  key={category.id}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`
                    md:w-full text-left px-4 md:py-3 py-0 rounded-lg transition-colors text-lg
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

          {/* Dishes - 2/3 width on desktop, full width on mobile */}
          <div className="w-full md:w-3/4">
            {selectedCategory ? (
              <>
                <h3 className="text-3xl font-bold text-primary-light mb-6">- {selectedCategory.name}</h3>
                
                {/* Dishes grid - 2 columns on medium, 1 column on small */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:border-x-2 md:p-4 ">
                  {selectedCategory.dishes.map((dish) => (
                    <motion.div
                      key={dish.id}
                      whileHover={{ y: -5 }}
                      className=" overflow-hidden mb-8"
                    >
                      <div className="flex gap-4">
                        <div className="w-full rounded-4xl md:w-1/3 h-32 relative">
                          <Image
                            src={dish.imageUrl}
                            alt={dish.imageAlt || dish.name}
                            fill
                            className="object-cover rounded-2xl"
                          />
                        </div>
                        <div className="w-full flex flex-col justify-between md:w-2/3 ">
                          <div className="">
                            <h4 className="text-xl font-bold text-white-primary">{dish.name}</h4>
                            <p className="  text-white-secondary text-sm">{dish.ingredients}</p>
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