'use client';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { AnimatedHamburgerButton } from "./animated-hamburger-button";
import { Facebook, Instagram } from "lucide-react"
import Image from "next/image";
import DottedButton from './main-button';
//import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export const MobileSidebar = () => {
  const [open, setOpen] = useState(false);

  const handleLinkClick = (hash: string) => {
    setOpen(false);
    setTimeout(() => {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', hash);
      }
    }, 300);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <div className="md:hidden flex relative z-[999]">
          <AnimatedHamburgerButton />
        </div>
      </SheetTrigger>
      <SheetContent side="right" className="bg-white">
        {/* Add SheetTitle - visually hidden for accessibility */}
        
          <SheetTitle className='hidden'>Navigation Menu</SheetTitle>
          <div className='flex flex-col h-screen justify-between '>
            <div className="p-6">
              <Image
                height={100} 
                width={100} 
                alt="SUSHI75 logo" 
                src="/logo.png"
              />
            </div>
            <div className=" flex flex-col gap-6 p-6">
              <button 
                onClick={() => handleLinkClick('#menu')}
                className="text-lg font-medium hover:text-amber-500 text-left"
              >
                MENU
              </button>
              <button 
                onClick={() => handleLinkClick('#location')}
                className="text-lg font-medium hover:text-amber-500 text-left"
              >
                LOCALISATION
              </button>
            </div>
            <a className='p-6' href="https://wa.me/212635347334">
            <DottedButton label="Nous-contacter" />
            </a>
            <div className="flex text-center flex-col gap-2">
              <p className="text-black font-medium">Suivez-nous sur Instagram </p>
              <div className="p-3 w-full flex justify-center items-center gap-4">
                <a href="https://www.instagram.com/su57hii/">
                  <Instagram className="h-8 w-8 text-black"/>
                </a>
              </div>
            </div>
          </div>      
      </SheetContent>
    </Sheet>
  );
};