import axios from 'axios';

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

const api = axios.create({
  baseURL: `${STRAPI_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface Dish {
  id: number;
  
    name: string;
    price: number;
    ingredients: string;
    header_dish: boolean;
    image: {
      
          url: string;
          formats?: {
            thumbnail?: {
              url: string;
            };
            small?: {
              url: string;
            
        };
      };
    };
    category: {
      data: {
        id: number;
        
          name: string;
        
      };
    
  };
}

export interface Category {
  id: number;
    name: string;
    dishes:  Dish[];
    
  
}

// Get all header dishes (featured dishes)
export const getHeaderDishes = async (): Promise<Dish[]> => {
  try {
    const response = await api.get('/dishes?filters[header_dish][$eq]=true&populate=*');
    return response.data.data;
  } catch (error) {
    console.error('Error fetching header dishes:', error);
    return [];
  }
};

// Get all categories with their dishes
export const getCategoriesWithDishes = async (): Promise<Category[]> => {
  try {
    const response = await api.get('/categories?populate[dishes][populate]=*');
    return response.data.data;
  } catch (error) {
    console.error('Error fetching categories with dishes:', error);
    return [];
  }
};

// Get a single dish by ID
export const getDishById = async (id: number): Promise<Dish | null> => {
  try {
    const response = await api.get(`/dishes/${id}?populate=*`);
    return response.data.data;
  } catch (error) {
    console.error(`Error fetching dish with id ${id}:`, error);
    return null;
  }
};

// Get dishes by category ID
export const getDishesByCategoryId = async (categoryId: number): Promise<Dish[]> => {
  try {
    const response = await api.get(`/dishes?filters[category][id][$eq]=${categoryId}&populate=*`);
    return response.data.data;
  } catch (error) {
    console.error(`Error fetching dishes for category ${categoryId}:`, error);
    return [];
  }
};