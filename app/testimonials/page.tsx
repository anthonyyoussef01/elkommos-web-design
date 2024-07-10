
import clsx from 'clsx';
import Image from 'next/image'
import React, {ComponentPropsWithoutRef} from "react";
import {cn} from "@/lib/utils";
import styles from "@/app/pricing/pricing.module.css";
import {Dropdown, Tab, Tabs, Trigger, TriggerWrapper} from "@/components/ui/dropdown-menu";
import {OurServices} from "@/app/(home)/components/our-services";
import {Components} from "@/app/(home)/components/components";
import {Services} from "@/app/(home)/components/services";


const testimonials = [
    [
        {
            content:
                'TaxPal is so easy to use I can’t help but wonder if it’s really doing the things the government expects me to do.',
            author: {
                name: 'Sheryl Berge',
                role: 'CEO at Lynch LLC',
                image: "https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
            },
        },
        {
            content:
                'I’m trying to get a hold of someone in support, I’m in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.',
            author: {
                name: 'Amy Hahn',
                role: 'Director at Velocity Industries',
                image: "https://images.unsplash.com/photo-1623605931891-d5b95ee98459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80",
            },
        },
    ],
    [
        {
            content:
                'The best part about TaxPal is every time I pay my employees, my bank balance doesn’t go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.',
            author: {
                name: 'Leland Kiehn',
                role: 'Founder of Kiehn and Sons',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            },
        },
        {
            content:
                'There are so many things I had to do with my old software that I just don’t do at all with TaxPal. Suspicious but I can’t say I don’t love it.',
            author: {
                name: 'Erin Powlowski',
                role: 'COO at Armstrong Inc',
                image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            },
        },
    ],
    [
        {
            content:
                'I used to have to remit tax to the EU and with TaxPal I somehow don’t have to do that anymore. Nervous to travel there now though.',
            author: {
                name: 'Peter Renolds',
                role: 'Founder of West Inc',
                image: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
            },
        },
        {
            content:
                'This is the fourth email I’ve sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.',
            author: {
                name: 'Amy Hahn',
                role: 'Director at Velocity Industries',
                image: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
            },
        },
    ],
]

export default function FUITestimonialWithGrid() {
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

            <section
                id="testimonials"
                aria-label="What our customers are saying"
                className=" relative bg-transpaarent py-20 sm:py-10 z-1 bg-page-gradient"
            >
                <Container>
                    <div className="mx-auto max-w-2xl md:text-center">
                        <h2 className="font-geist text-3xl tracking-tighter text-black dark:text-gray-100 sm:text-6xl">
                            <span className='bg-gradient-to-br from-indigo-400 via-indigo-300 to-indigo-700 bg-clip-text text-transparent'>
                                Loved
                            </span> by businesses worldwide.
                        </h2>
                        <p className="mt-4 text-lg tracking-tight text-black dark:text-gray-300 font-geist">
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
                                            <figure className="relative rounded-2xl bg-transparent transform-gpu [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#8686f01f_inset] p-6 shadow-xl ">
                                                <blockquote className="relative">
                                                    <p className="text-lg tracking-tight text-black dark:text-gray-100">
                                                        {testimonial.content}
                                                    </p>
                                                </blockquote>
                                                <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100/10 pt-6">
                                                    <div>
                                                        <div className="font-display text-base text-black dark:text-gray-100">
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
                                                            width={56}
                                                            height={56}
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
                </Container>
            </section>
        </div>
    )
}
export function Container({
                              className,
                              ...props
                          }: ComponentPropsWithoutRef<"div">) {
    return (
        <div
            className={clsx("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}
            {...props}
        />
    );
}
