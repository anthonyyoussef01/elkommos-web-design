'use client'

import Image from "next/image";
import {Dropdown, Tab, Tabs, Trigger, TriggerWrapper} from "@/components/ui/dropdown-bar";
import {Offerings} from "@/app/(home)/components/offerings";
import {Technologies} from "@/app/(home)/components/technologies";
import {Services} from "@/app/(home)/components/services";
import React, {useEffect, useState} from "react";
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
            <TriggerWrapper>
                <Trigger>What we do</Trigger>
                <Trigger>Technologies</Trigger>
                <Trigger>Services & Information</Trigger>
            </TriggerWrapper>
            <Tabs>
                <Tab>
                    <Offerings />
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
                    <button
                        className="mt-0.5 relative h-[1.1rem] w-[1.1rem] transform hover:-translate-y-1 transition duration-400 border-0 focus:outline-none"
                    >
                        <SunIcon
                            className="absolute w-full h-full rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                        />
                        <MoonIcon
                            className="absolute w-full h-full rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                        />
                        <span className="sr-only">Toggle theme</span>
                    </button>
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