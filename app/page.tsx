"use client";
import React from "react";
import Image from "next/image";
import {HeroParallax} from "@/components/ui/hero-parallax";
import {Dropdown, Tab, Tabs, Trigger, TriggerWrapper} from "@/components/ui/dropdown-menu";
import {OurServices} from "@/app/(home)/components/our-services";
import {Components} from "@/app/(home)/components/components";
import {Blog} from "@/app/(home)/components/blog";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-1 overflow-x-hidden z-10">
      <Dropdown>
        <TriggerWrapper>
          <Trigger>Our Services</Trigger>
          <Trigger>Components</Trigger>
          <Trigger>Blog</Trigger>
        </TriggerWrapper>
        <Tabs>
          <Tab>
            <OurServices />
          </Tab>
          <Tab>
            <Components />
          </Tab>
          <Tab>
            <Blog />
          </Tab>
        </Tabs>
      </Dropdown>

      <HeroParallax products={products} />
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
    link: "https://www.vmspchurch.org",
    thumbnail:
        "/vmsp.png",
  },
];
