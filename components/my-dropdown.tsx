'use client'

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

const MyDropdown = () => {
    const { setTheme } = useTheme();

    return (
        <Dropdown>
            <a href="/">
                <div className="relative">
                    <button
                        className="relative h-[1.1rem] w-[1.1rem] transform hover:translate-y-[-0.25rem] transition-transform duration-300 border-0 focus:outline-none align-middle"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 48 48"
                             className="absolute w-full h-full">
                            <path
                                d="M 23.951172 4 A 1.50015 1.50015 0 0 0 23.072266 4.3222656 L 8.859375 15.519531 C 7.0554772 16.941163 6 19.113506 6 21.410156 L 6 40.5 C 6 41.863594 7.1364058 43 8.5 43 L 18.5 43 C 19.863594 43 21 41.863594 21 40.5 L 21 30.5 C 21 30.204955 21.204955 30 21.5 30 L 26.5 30 C 26.795045 30 27 30.204955 27 30.5 L 27 40.5 C 27 41.863594 28.136406 43 29.5 43 L 39.5 43 C 40.863594 43 42 41.863594 42 40.5 L 42 21.410156 C 42 19.113506 40.944523 16.941163 39.140625 15.519531 L 24.927734 4.3222656 A 1.50015 1.50015 0 0 0 23.951172 4 z M 24 7.4101562 L 37.285156 17.876953 C 38.369258 18.731322 39 20.030807 39 21.410156 L 39 40 L 30 40 L 30 30.5 C 30 28.585045 28.414955 27 26.5 27 L 21.5 27 C 19.585045 27 18 28.585045 18 30.5 L 18 40 L 9 40 L 9 21.410156 C 9 20.030807 9.6307412 18.731322 10.714844 17.876953 L 24 7.4101562 z"></path>
                        </svg>
                    </button>
                </div>
            </a>
            <TriggerWrapper>
                <Trigger>What we do</Trigger>
                <Trigger>Technologies & Projects</Trigger>
                <Trigger>Services & Information</Trigger>
            </TriggerWrapper>
            <Tabs>
                <Tab>
                    <Offerings/>
                </Tab>
                <Tab>
                    <Technologies/>
                </Tab>
                <Tab>
                    <Services/>
                </Tab>
            </Tabs>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div className="relative">
                        <button
                            className="relative h-[1.1rem] w-[1.1rem] transform hover:translate-y-[-0.25rem] transition-transform duration-300 border-0 focus:outline-none align-middle"
                        >
                            <SunIcon
                                className="absolute w-full h-full rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                            />
                            <MoonIcon
                                className="absolute w-full h-full rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                            />
                            <span className="sr-only">Toggle theme</span>
                        </button>
                    </div>
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