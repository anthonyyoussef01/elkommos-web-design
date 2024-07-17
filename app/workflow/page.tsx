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
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

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

            <div className="w-full flex flex-col items-center mt-6">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center">
                    <div
                        className="w-full lg:w-auto mx-auto max-w-4xl lg:flex lg:flex-col lg:content-center text-center">
                        <h1 className="text-black dark:text-white text-4xl font-semibold sm:max-w-none md:text-6xl !leading-tight">
                            Workflow
                        </h1>
                    </div>
                </div>
                {/*<StickyScroll content={content} />*/}
                <Accordion type="single" collapsible className="w-10/12">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Initial Consultation</AccordionTrigger>
                        <AccordionContent>
                            We start with a detailed consultation to understand your business needs, goals, and vision for the website.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Proposal & Agreement</AccordionTrigger>
                        <AccordionContent>
                            Based on our discussion, we provide a detailed proposal outlining the project scope, timeline, and cost. Once agreed, we move forward with the project.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Design & Development</AccordionTrigger>
                        <AccordionContent>
                            We design and develop your website, ensuring it’s tailored to your brand and optimized for performance.
                            <br />
                            We will design anything from a{" "}
                            <LinkPreview url="https://lily-resume.vercel.app" className="font-bold">
                                small personal site
                            </LinkPreview>{" "}
                            to a{" "}
                            <LinkPreview url="https://www.mahzuzah.com/" className="font-bold">
                                large e-commerce store
                            </LinkPreview>
                            .
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>Review & Feedback</AccordionTrigger>
                        <AccordionContent>
                            We present the initial version of your website for your review. Your feedback is essential
                            to refine and perfect the site.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>Testing & Launch</AccordionTrigger>
                        <AccordionContent>
                            We rigorously test your website to ensure it’s fully functional and bug-free. Once approved,
                            we launch the website and monitor its performance.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger>Ongoing Support</AccordionTrigger>
                        <AccordionContent>
                            Post-launch, we provide continuous support and maintenance to ensure your website remains up-to-date and runs smoothly.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
}

export default WorkflowPage;