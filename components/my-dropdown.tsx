'use client'

import Image from "next/image";
import {Dropdown, Tab, Tabs, Trigger, TriggerWrapper} from "@/components/ui/dropdown-bar";
import {OurServices} from "@/app/(home)/components/our-services";
import {Technologies} from "@/app/(home)/components/technologies";
import {Services} from "@/app/(home)/components/services";
import React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

const MyDropdown = () => {
    const { setTheme } = useTheme();

    return (
        <Dropdown>
            <a href={'/'} className={'rounded-full'}>
                <Image
                    className="h-10 w-10 object-cover rounded-full"
                    src={'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                    alt="EY Development Services"
                    width={150}
                    height={150}
                />
            </a>
            <TriggerWrapper>
                <Trigger>Our Services</Trigger>
                <Trigger>Technologies</Trigger>
                <Trigger>Services & Information</Trigger>
            </TriggerWrapper>
            <Tabs>
                <Tab>
                    <OurServices />
                </Tab>
                <Tab>
                    <Technologies />
                </Tab>
                <Tab>
                    <Services />
                </Tab>
            </Tabs>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setTheme("light")}>
                        Light
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("dark")}>
                        Dark
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("system")}>
                        System
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </Dropdown>
    )
}

export default MyDropdown;