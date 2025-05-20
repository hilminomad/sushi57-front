
import { ContactPage } from "../_components/localisation";
import { Menu } from "../_components/menu-local";
import ShuffleHero from "./_components/hero";import type { Metadata } from 'next';
import { TextParallaxContentExample } from "./_components/parallax-section";

export const metadata: Metadata = {
  title: "Restaurant Khouribga | Sushi57 – Livraison de Sushi Frais à Khouribga",
  description: "Commandez les meilleurs sushis à Khouribga! Livraison rapide, menus variés et produits frais. Découvrez notre restaurant japonais dès maintenant.",
  alternates: {
    canonical: "https://sushi57.ma/restaurant-khouribga",
  },
  openGraph: {
    title: "Restaurant Khouribga | Sushi57 – Livraison de Sushi Frais",
    description: "Découvrez notre restaurant japonais à Khouribga. Sushis frais, livraison rapide et menus gourmands.",
    url: "https://sushi57.ma/restaurant-khouribga",
    siteName: "Sushi57",
    images: [
      {
        url: "https://sushi57.ma/images/restaurant-khouribga.jpg", // Replace with actual OG image
        width: 1200,
        height: 630,
        alt: "Restaurant Sushi57 à Khouribga",
      },
    ],
    locale: "fr_MA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Restaurant Khouribga | Sushi57 – Livraison de Sushi Frais",
    description: "Commandez les meilleurs sushis à Khouribga!",
    images: ["https://sushi57.ma/images/restaurant-khouribga.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Restaurant() {
  return(
    <>
      <ShuffleHero/>
      <div className="w-full h-32 bg-white"></div>
      <TextParallaxContentExample/>
      <div className="w-full h-32 bg-white"></div>
      <Menu id="menu"/>
      <ContactPage id="location"/>
    </>
  )
  
}