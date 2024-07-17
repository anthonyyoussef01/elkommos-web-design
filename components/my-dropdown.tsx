'use client'

import Image from "next/image";
import {Dropdown, Tab, Tabs, Trigger, TriggerWrapper} from "@/components/ui/dropdown-bar";
import {OurServices} from "@/app/(home)/components/our-services";
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
    const { setTheme, theme, resolvedTheme } = useTheme();
    const [iconSrc, setIconSrc] = useState('/logo_light.svg');
    useEffect(() => {
        // Use resolvedTheme for checking as it accounts for system preferences
        const currentTheme = theme === 'system' ? resolvedTheme : theme;
        setIconSrc(currentTheme === 'dark' ? '/logo_dark.svg' : '/logo_light.svg');
    }, [theme, resolvedTheme]);

    return (
        <Dropdown>
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