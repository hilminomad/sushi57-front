import Image from "next/image";

import {ContactPage} from "./_components/localisation";
import Restaurant from "./_components/restaurant";
import { Menu } from "./_components/menu-local";
import TrippyScroll from "@/components/ui/trippy-section";
import { Hero } from "./_components/hero-local";



export default async function Home() {
  
  //const Dishes = getStrapiData("/api/dishes")
  
  return (
    <div>
      <Hero id="home"/>
      <TrippyScroll/>
      <Menu id="menu"/>
      <Restaurant/>
      <ContactPage id="location"/>
    </div>
  );
}
