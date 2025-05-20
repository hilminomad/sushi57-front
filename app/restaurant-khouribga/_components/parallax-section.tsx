"use client";

import React, { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import DottedButton from "@/components/main-button";

interface TextParallaxContentProps {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: ReactNode;
}

interface StickyImageProps {
  imgUrl: string;
}

interface OverlayCopyProps {
  subheading: string;
  heading: string;
}

export const TextParallaxContentExample = () => {
  return (
    <div className="bg-white">
      <TextParallaxContent
        imgUrl="https://res.cloudinary.com/dvvsyxugn/image/upload/v1747734378/Restaurant_wajhaa.png"
        subheading="Authenticité"
        heading="L'Ambiance du Restaurant"
      >
        <ContentRestaurant />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://res.cloudinary.com/dvvsyxugn/image/upload/v1747733925/plats_lxrn0e.png"
        subheading="Saveurs"
        heading="Nos Plats Signature"
      >
        <ContentPlats />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://res.cloudinary.com/dvvsyxugn/image/upload/v1747733668/Online_xuxaye.png"
        subheading="Partage"
        heading="Vos Moments, Livrés"
      >
        <ContentDelivery />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children,
}: TextParallaxContentProps) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }: StickyImageProps) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }: OverlayCopyProps) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const ContentRestaurant = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
    Un voyage culinaire sans quitter Khouribga
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
      Découvrez un havre de tranquillité inspiré des izakayas de Tokyo. Notre espace, mélange de bois clair et de lumières douces, crée l'écrin parfait pour vos repas. Un décor où l'art culinaire rencontre l'harmonie.
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
      Plongez dans une atmosphère japonaise élégante au cœur de Khouribga. Notre restaurant allie modernité et tradition, avec un décor épuré et chaleureux, idéal pour des repas en famille ou entre amis. Détendez-vous dans un cadre raffiné où chaque détail est pensé pour votre confort.
      </p>
      <a href="https://wa.me/212635347334">
            <DottedButton label="Réserver une table" />
          </a>
    </div>
  </div>
);

const ContentPlats = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
    L’art du sushi à son apogée
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
      Découvrez des sushis frais préparés quotidiennement par nos chefs expérimentés. Nos plats, alliant poissons premium et ingrédients locaux, vous promettent une explosion de goûts. Essayez nos makis artisanaux ou notre saumon tataki – une invitation au voyage culinaire.
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
      Laissez-vous surprendre par nos sushis signature, sculptés avec des produits de saison. Chaque bouchée raconte l'expertise de nos chefs – du nigiri parfaitement vinaigré aux makis audacieux comme notre "Maki Khouribga" exclusif.
      </p>
      <a href="https://wa.me/212635347334">
            <DottedButton label="Passer une commande" />
          </a>
    </div>
  </div>
);

const ContentDelivery = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
    Vos sushis préférés en 45 minutes
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
      Commandez en ligne et recevez vos plats préférés en moins de 45 minutes ! Que ce soit pour un déjeuner au bureau ou un dîner improvisé, notre service de livraison couvre tout Khouribga. Fraîcheur garantie à votre porte.
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
      Nos livreurs apportent la fête directement chez vous. Des dizaines de clients partagent leurs instants Sushi57.
      </p>
      <a href="https://wa.me/212635347334">
            <DottedButton label="Passer une commande" />
          </a>
    </div>
  </div>
);