"use client";
import React from "react";
import Image from "next/image";
import {HeroParallax} from "@/components/ui/hero-parallax";
import {Dropdown, Tab, Tabs, Trigger, TriggerWrapper} from "@/components/ui/dropdown-bar";
import {Offerings} from "@/app/(home)/components/offerings";
import {Technologies} from "@/app/(home)/components/technologies";
import {Services} from "@/app/(home)/components/services";
import Footer from "@/app/(home)/components/footer";
import {Icon} from "lucide-react";
import MyDropdown from "@/components/my-dropdown";
import { motion } from "framer-motion";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-1 overflow-x-hidden">
        <meta
            name="keywords"
            content="Elkommos Youssef Website and Application Development, web design, app development, system architecture, product engineering, portraits, event photography, product photography, artificial intelligence, videography, drone shots, Rockland, New York, New City, Hudson Valley, nj, new jersey"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="EY Web & App Development"/>
        <meta property="og:description"
              content="EY Web & App Development specializes in web design, app development, system architecture, product engineering, portraits, event and product photography, artificial intelligence (AI), videography, and drone shots. Based in Rockland County, NY."/>
        <meta property="og:url" content="https://elkommos.com"/>
        <meta property="og:type" content="website"/>
        <meta property="og:image" content="/logo.png"/>

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="EY Digital Innovations | Web & App Development"/>
        <meta name="twitter:description"
              content="EY Web & App Development specializes in web design, app development, system architecture, product engineering, portraits, event and product photography, artificial intelligence (AI), videography, and drone shots. Based in Rockland County, NY."/>
        <meta name="twitter:image" content="/logo.png"/>

        <MyDropdown/>

        <HeroParallax products={products}/>

        <Footer/>
      </main>
  );
}

const products = [
  {
    title: "The Key of Life Scouting Group",
    link: "https://TheKeyOfLifeScoutingGroup.com",
    thumbnail:
        "/tkol.webp",
  },
  {
    title: "Personal Portfolio",
    link: "https://anthony.elkommos.com",
    thumbnail:
        "/anthony_portfolio.webp",
  },
  {
    title: "Resume Site",
    link: "https://lily-resume.vercel.app",
    thumbnail:
        "/lily_resume.webp",
  },
  {
    title: "Qamous",
    link: "https://qamous.org",
    thumbnail:
        "/qamous.webp",
  },
  {
    title: "Imperial Edge",
    link: "https://imperial-edge.com",
    thumbnail:
        "/imperial-edge.webp",
  },
  {
    title: "Stony Point Pancake Factory",
    link: "https://stonypointpancakefactory.com",
    thumbnail:
        "/pancake_factory.webp",
  },
  {
    title: "KingFut",
    link: "https://kingfut.com/author/anthonyyoussef01",
    thumbnail:
        "/kingfut.webp",
  },

  {
    title: "SMSANJ Church",
    link: "https://smsanj.org",
    thumbnail:
        "/smsanj.webp",
  },
  {
    title: "VMSP Church",
    link: "https://vmspchurch.org",
    thumbnail:
        "/vmsp.webp",
  },
  {
    title: "Perspective Engineering & Consulting",
    link: "https://pec-mep.com",
    thumbnail:
        "/pec-mep.webp",
  },
  {
    title: "Anthony Portfolio",
    link: "https://anthony.elkommos.com",
    thumbnail:
        "/anthony_light_portfolio.webp",
  },
];
