import Image from "next/image";
import {Dropdown, Tab, Tabs, Trigger, TriggerWrapper} from "@/components/ui/dropdown-menu";
import {OurServices} from "@/app/(home)/components/our-services";
import {Technologies} from "@/app/(home)/components/technologies";
import {Services} from "@/app/(home)/components/services";
import React from "react";

const myDropdown = () => {
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
        </Dropdown>
    )
}

export default myDropdown;