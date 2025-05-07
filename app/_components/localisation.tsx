"use client"

import DottedButton from '@/components/main-button';
import RestaurantMap from '@/components/map';
import Image from 'next/image';
import React from 'react';


export function ContactPage({ id }: { id?: string })  {
  const restaurantLocation = {
    lat: 32.900884, lng:-6.910885, // Replace with your restaurant's latitude
  // Replace with your restaurant's longitude
  };

  return (
    <div id={id} className="bg-white-primary" >
      <div className="py-16 w-full px-4 flex gap-6 md:flex-row flex-col justify-between items-center ">
        <div className='md:w-1/2 w-full'>
          <h2 className="md:text-4xl text-2xl font-bold mb-6 ">Retrouvez-Nous au Cœur de Khouribga</h2>
          <a href="https://wa.me/212719300261">
            <DottedButton label="Réserver" />
          </a>
        </div>
        <div className="relative md:w-1/2 w-full min-h-96  ">
        <a href="https://maps.app.goo.gl/bYnje6nNjYvyi8cK6" className='cursor-pointer rounded-2xl'>
            <Image src='/map.png' style={{ objectFit: 'cover',objectPosition: 'left top' }}
  quality={100}
  priority fill alt='map'></Image>
          </a>
        </div>
        
        
        {/* Other contact information */}
      </div>
  
    </div>);
    
};