
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
        <a href="https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2F212719300261%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAadexxJiOfPc-CPQowJ2GlgEheyx669IFkinAOD6snzGSaNlTXFYXb91i-oy0A_aem_-mAdS9Ph9pUjm3o86m1Ibw&e=AT3fAIb9ewNEmAMKzeCgxvgagwKepfBEOERy39Dt2jGlwzDbX2yjJILabe678LYQ0Rtszips9jhBc1kB-ADveBg8TwXucxrKA9YXhQ">
        <DottedButton label="Nous-contacter" />
        </a>
        
      </div>
      <MobileSidebar />
    </div>
  );
};