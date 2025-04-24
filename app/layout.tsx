import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Restaurant Asiatique à Khouribga | Sushi Frais, Woks & Poke Bowls – SUSHI57",
  description: "Découvrez les meilleurs sushis et plats asiatiques à Khouribga ! Notre restaurant propose des woks savoureux, des poke bowls, des nems croustillants et plus encore. Commandez en ligne ou réservez une table dès maintenant !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > 
        <Navbar/>
        <div className="flex flex-col min-h-screen">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
