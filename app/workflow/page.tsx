"use client";
import React from "react";
import {LinkPreview} from "@/components/ui/link-preview";
import {cn} from "@/lib/utils";
import styles from "@/app/pricing/pricing.module.css";
import {Dropdown, Tab, Tabs, Trigger, TriggerWrapper} from "@/components/ui/dropdown-menu";
import {OurServices} from "@/app/(home)/components/our-services";
import {Technologies} from "@/app/(home)/components/technologies";
import {Services} from "@/app/(home)/components/services";
import {StickyScroll} from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import MyDropdown from "@/components/my-dropdown";

const content = [
    {
        title: "Initial Consultation",
        description:
            "We start with a detailed consultation to understand your business needs, goals, and vision for the website",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                Initial Consultation
            </div>
        ),
    },
    {
        title: "Proposal & Agreement",
        description:
            "Based on our discussion, we provide a detailed proposal outlining the project scope, timeline, and cost. Once agreed, we move forward with the project.",
        content: (
            <div
                className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
                Proposal & Agreement
            </div>
        ),
    },
    {
        title: "Design & Development",
        description:
            "Our team of experts begins designing and developing your website, ensuring it’s tailored to your brand and optimized for performance.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/anthony_light_portfolio.png"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Review & Feedback",
        description:
            "We present the initial version of your website for your review. Your feedback is essential to refine and perfect the site.",
        content: (
            <div
                className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                Review & Feedback
            </div>
        ),
    },
    {
        title: "Testing & Launch",
        description:
            "We rigorously test your website to ensure it’s fully functional and bug-free. Once approved, we launch the website and monitor its performance.",
        content: (
            <div
                className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                Testing & Launch
            </div>
        ),
    },
    {
        title: "Ongoing Support",
        description:
            "Post-launch, we provide continuous support and maintenance to ensure your website remains up-to-date and runs smoothly.",
        content: (
            <div
                className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                Ongoing Support
            </div>
        ),
    },
];

function WorkflowPage(): React.JSX.Element {
    return (
        <div
            className={cn('flex flex-col w-full items-center p-1', styles.fancyOverlay)}
        >
            <MyDropdown />

            <StickyScroll content={content} />

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