"use client";
import React from "react";
import {LinkPreview} from "@/components/ui/link-preview";
import {cn} from "@/lib/utils";
import styles from "@/app/pricing/pricing.module.css";
import {Dropdown, Tab, Tabs, Trigger, TriggerWrapper} from "@/components/ui/dropdown-menu";
import {OurServices} from "@/app/(home)/components/our-services";
import {Components} from "@/app/(home)/components/components";
import {Services} from "@/app/(home)/components/services";

function WorkflowPage(): React.JSX.Element {
    return (
        <div
            className={cn('flex flex-col w-full items-center', styles.fancyOverlay)}
        >
            <Dropdown>
                <TriggerWrapper>
                    <Trigger>Our Services</Trigger>
                    <Trigger>Components</Trigger>
                    <Trigger>Blog</Trigger>
                </TriggerWrapper>
                <Tabs>
                    <Tab>
                        <OurServices/>
                    </Tab>
                    <Tab>
                        <Components/>
                    </Tab>
                    <Tab>
                        <Services/>
                    </Tab>
                </Tabs>
            </Dropdown>

            <div className="flex justify-center items-center h-[40rem] flex-col px-4">
                <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
                    <LinkPreview url="https://tailwindcss.com" className="font-bold">
                        Tailwind CSS
                    </LinkPreview>{" "}
                    and{" "}
                    <LinkPreview url="https://framer.com/motion" className="font-bold">
                        Framer Motion
                    </LinkPreview>{" "}
                    are a great way to build modern websites.
                </p>
                <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto">
                    Visit{" "}
                    <LinkPreview
                        url="https://ui.aceternity.com"
                        className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                    >
                        Aceternity UI
                    </LinkPreview>{" "}
                    for amazing Tailwind and Framer Motion components.
                </p>
            </div>
        </div>
    );
}

export default WorkflowPage;