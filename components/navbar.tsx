
import Image from 'next/image';
import DottedButton from './main-button';
import { ScrollLink } from './scroll-link';
import { MobileSidebar } from './sidebar';

export const Navbar = () => {
  return (
    <div className="p-4 relative w-full flex items-center justify-between gap-2 bg-black">
      <div>
        <Image
          height={100} 
          width={100} 
          alt="SUSHI75 logo" 
          src="/logo1.png"
        />
      </div>
      <div className="md:flex hidden gap-2 justify-center">
        <ScrollLink href="#menu">
          <p className="text-white hover:text-amber-500 transition-colors">MENU</p>
        </ScrollLink>
        <ScrollLink href="#location">
          <p className="text-white hover:text-amber-500 transition-colors">LOCALISATION</p>
        </ScrollLink>
      </div>
      <div className="md:flex hidden">
        <a href="https://wa.me/212635347334">
        <DottedButton label="Nous-contacter" />
        </a>
        
      </div>
      <MobileSidebar />
    </div>
  );
};