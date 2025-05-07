// src/data/header-dishes.ts
export interface Dish {
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

export const headerDishesData: Dish[] = [
  {
    id: 1,
    name: "Wok fruits de mer",
    price: 70,
    ingredients: "",
    header_dish: true,
    image: {
      url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746317624/wok_seafood_npe2ub.png", // Add your image URL here
      alternativeText: "wok seafood",
      formats: {
        thumbnail: {
          url: "" // Add thumbnail URL if available
        }
      }
    }
  },
  {
    id: 2,
    name: "Assortissement California",
    price: 129,
    ingredients: "saumon frais, wakami, ananas, radis rouge, surimi",
    header_dish: true,
    image: {
      url: "https://res.cloudinary.com/dvvsyxugn/image/upload/v1746317088/assortissement_i560ld.png", // Add your image URL here
      alternativeText: "Poke bowl with fresh salmon",
      formats: {
        thumbnail: {
          url: "" // Add thumbnail URL if available
        }
      }
    }
  },
  {
    id: 3,
    name: "Rizza saumon",
    price: 60,
    ingredients: "saumon, avocat, crab, tobiko",
    header_dish: true,
    image: {
      url: "", // Add your image URL here
      alternativeText: "Salmon sushi pizza",
      formats: {
        thumbnail: {
          url: "" // Add thumbnail URL if available
        }
      }
    }
  }
];

// Utility function to match your Strapi fetching pattern
export async function getHeaderDishes(): Promise<Dish[]> {
  // In a real app, this would fetch from Strapi
  // Here we're just returning our local data
  return headerDishesData;
}