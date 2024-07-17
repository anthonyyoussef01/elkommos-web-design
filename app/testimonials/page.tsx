import clsx from 'clsx';
import Image from 'next/image'
import React, {ComponentPropsWithoutRef} from "react";
import {cn} from "@/lib/utils";
import styles from "@/app/pricing/pricing.module.css";
import {Dropdown, Tab, Tabs, Trigger, TriggerWrapper} from "@/components/ui/dropdown-bar";
import {OurServices} from "@/app/(home)/components/our-services";
import {Technologies} from "@/app/(home)/components/technologies";
import {Services} from "@/app/(home)/components/services";
import MyDropdown from "@/components/my-dropdown";


interface Testimonial {
    content: string
    author: {
        name: string
        role: string
        image: string
    }
}

const testimonials: Testimonial[][] = [
    [
        {
            content:
                'The website Anthony created for our bakery has transformed our business. We saw a 50% increase in online orders within three months!',
            author: {
                name: 'Emily Johnson',
                role: 'Owner, Sweet Treats Bakery',
                image: "https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
            },
        },
        {
            content:
                'Anthony\'s expertise in e-commerce setup helped us double our sales. The advanced SEO and marketing strategies were game-changers.',
            author: {
                name: 'Amy Hahn',
                role: 'CEO, Two Threads Boutique.',
                image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
        },
    ],
    [
        {
            content:
                'Anthony\'s attention to detail and dedication made our website launch smooth and successful. Highly recommend his services!',
            author: {
                name: 'Michael Harris',
                role: 'Founder, GreenLeaf Marketing',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            },
        },
        {
            content:
                'Anthony\'s expertise in web development and SEO has been instrumental in driving traffic and sales to our online store. Highly recommend!',
            author: {
                name: 'Erin Powlowski',
                role: 'COO at TechSparks Co.',
                image: 'https://images.unsplash.com/photo-1719581863356-f5f455386066?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
        },
    ],
    [
        {
            content:
                "Our new website is fantastic! Anthony took the time to understand our needs and delivered a product that truly represents our brand.",
            author: {
                name: 'Sarah Youssef',
                role: 'Founder of West Inc',
                image: 'https://images.unsplash.com/photo-1654404886281-3853c55e028d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
        },
        {
            content:
                'Our website\'s new design has received rave reviews from customers. Anthony\'s work exceeded our expectations in every way.',
            author: {
                name: 'Emily Wright',
                role: 'Project Manager, UrbanTech',
                image: 'https://images.unsplash.com/photo-1597182471331-544f2888fdd5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8',
            },
        },
    ],
]

export default function FUITestimonialWithGrid() {
    return (
        <div
            className={cn('flex flex-col w-full items-center p-1', styles.fancyOverlay)}
        >
            <MyDropdown/>

            <section
                id="testimonials"
                aria-label="What our customers are saying"
                className=" relative bg-transpaarent mt-6 z-1 bg-page-gradient"
            >
                <div
                    className={clsx("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8")}
                >
                    <div className="mx-auto max-w-2xl md:text-center">
                        <h2 className="text-black dark:text-white text-4xl sm:max-w-none md:text-6xl !leading-tight">
                            <span
                                className='bg-gradient-to-br from-red-400 via-red-300 to-red-700 bg-clip-text text-transparent'>
                                Loved
                            </span> by businesses worldwide.
                        </h2>
                        <p className="text-black dark:text-white mt-6 md:text-xl lg:text-center">
                            Our software is so simple that people can’t help but fall in love
                            with it. Simplicity is easy when you just skip tons of
                            mission-critical features.
                        </p>
                    </div>
                    <ul
                        role="list"
                        className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
                    >
                        {testimonials.map((column, columnIndex) => (
                            <li key={columnIndex}>
                                <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                                    {column.map((testimonial, testimonialIndex) => (
                                        <li key={testimonialIndex}>
                                            <figure
                                                className="relative rounded-2xl bg-transparent transform-gpu [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#8686f01f_inset] p-6 shadow-xl ">
                                                <blockquote className="relative">
                                                    <p className="text-lg tracking-tight text-black dark:text-gray-100">
                                                        {testimonial.content}
                                                    </p>
                                                </blockquote>
                                                <figcaption
                                                    className="relative mt-6 flex items-center justify-between border-t border-slate-100/10 pt-6">
                                                    <div>
                                                        <div
                                                            className="font-display text-base text-black dark:text-gray-100">
                                                            {testimonial.author.name}
                                                        </div>
                                                        <div className="mt-1 text-sm text-slate-500">
                                                            {testimonial.author.role}
                                                        </div>
                                                    </div>
                                                    <div className="overflow-hidden rounded-full bg-slate-50">
                                                        <Image
                                                            className="h-14 w-14 object-cover"
                                                            src={testimonial.author.image}
                                                            alt=""
                                                            width={150}
                                                            height={150}
                                                        />
                                                    </div>
                                                </figcaption>
                                            </figure>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    )
}
