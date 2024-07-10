"use client";
import React from "react";
import Image from "next/image";
import {HeroParallax} from "@/components/ui/hero-parallax";
import {Dropdown, Tab, Tabs, Trigger, TriggerWrapper} from "@/components/ui/dropdown-menu";
import {OurServices} from "@/app/(home)/components/our-services";
import {Components} from "@/app/(home)/components/components";
import {Services} from "@/app/(home)/components/services";
import Footer from "@/app/(home)/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-1 overflow-x-hidden">
      <Dropdown>
        <TriggerWrapper>
          <Trigger>Our Services</Trigger>
          <Trigger>Components</Trigger>
          <Trigger>Services & Information</Trigger>
        </TriggerWrapper>
        <Tabs>
          <Tab>
            <OurServices />
          </Tab>
          <Tab>
            <Components />
          </Tab>
          <Tab>
            <Services />
          </Tab>
        </Tabs>
      </Dropdown>

      <HeroParallax products={products} />

      <Footer />
    </main>
  );
}

const products = [
  {
    title: "The Key of Life Scouting Group",
    link: "https://TheKeyOfLifeScoutingGroup.com",
    thumbnail:
        "/tkol.png",
  },
  {
    title: "Personal Portfolio",
    link: "https://elkommos.me",
    thumbnail:
        "/anthony_portfolio.png",
  },
  {
    title: "Resume Site",
    link: "https://lily-resume.vercel.app",
    thumbnail:
        "/lily_resume.png",
  },
  {
    title: "Esos",
    link: "https://esoscopts.com",
    thumbnail:
        "/esos.png",
  },
  {
    title: "Mahzuzah",
    link: "https://mahzuzah.com",
    thumbnail:
        "/mahzuzah.png",
  },
  {
    title: "Stony Point Pancake Factory",
    link: "https://stonypointpancakefactory.com",
    thumbnail:
        "/pancake_factory.png",
  },
  {
    title: "KingFut",
    link: "https://kingfut.com/author/anthonyyoussef01",
    thumbnail:
        "/kingfut.png",
  },

  {
    title: "SMSANJ Church",
    link: "https://smsanj.org",
    thumbnail:
        "/smsanj.png",
  },
  {
    title: "VMSP Church",
    link: "https://vmspchurch.org",
    thumbnail:
        "/vmsp.png",
  },
  {
    title: "Anthony Portfolio",
    link: "https://elkommos.me",
    thumbnail:
        "/anthony_light_portfolio.png",
  },
];
