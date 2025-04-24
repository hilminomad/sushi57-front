import Image from "next/image";
import { Hero } from "./_components/hero";
import {ContactPage} from "./_components/localisation";
import Restaurant from "./_components/restaurant";
import { Menu } from "./_components/menu";
import TrippyScroll from "@/components/ui/trippy-section";



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
