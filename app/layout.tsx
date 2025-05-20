import type { Metadata } from "next";
import Script from "next/script"; // Import Script for Google Analytics
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
      <head>
        {/* Add Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-H8VPVF4NBM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H8VPVF4NBM');
          `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}


