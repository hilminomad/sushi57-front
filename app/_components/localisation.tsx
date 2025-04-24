"use client"

import DottedButton from '@/components/main-button';
import RestaurantMap from '@/components/map';
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
          <a href="https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2F212719300261%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAadexxJiOfPc-CPQowJ2GlgEheyx669IFkinAOD6snzGSaNlTXFYXb91i-oy0A_aem_-mAdS9Ph9pUjm3o86m1Ibw&e=AT3fAIb9ewNEmAMKzeCgxvgagwKepfBEOERy39Dt2jGlwzDbX2yjJILabe678LYQ0Rtszips9jhBc1kB-ADveBg8TwXucxrKA9YXhQ">
            <DottedButton label="Réserver" />
          </a>
        </div>
        <div className=" md:w-1/2 w-full ">
          <RestaurantMap 
            location={restaurantLocation}
            infoWindowContent="We're located in the heart of the city. Open daily from 11AM to 10PM."
            markerLabel="Sushi57"
          />
        </div>
        {/* Other contact information */}
      </div>
  
    </div>);
    
};