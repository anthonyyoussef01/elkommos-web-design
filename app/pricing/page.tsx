'use client';
import React, {ReactNode, useState} from 'react';
import {cn} from '@/lib/utils';
import styles from './pricing.module.css';

import {RadioGroup, RadioGroupItem} from '@/components/ui/radio-group';
import {Label} from '@/components/ui/label';
import {Button} from '@/components/ui/button';
import {Dropdown, Tab, Tabs, Trigger, TriggerWrapper} from "@/components/ui/dropdown-bar";
import {OurServices} from "@/app/(home)/components/our-services";
import {Technologies} from "@/app/(home)/components/technologies";
import {Services} from "@/app/(home)/components/services";
import MyDropdown from "@/components/my-dropdown";
import {Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger} from "@/components/ui/animated-modal";
import {motion} from 'framer-motion';
import Image from 'next/image';
import ContactRequestModal from "@/app/pricing/components/contact-request-modal";

export interface PricingTierFrequency {
    id: string;
    value: string;
    label: string;
    priceSuffix: string;
}

export interface PricingTier {
    name: string;
    id: string;
    href: string;
    discountPrice: string | Record<string, string>;
    price: string | Record<string, string>;
    description: string | ReactNode;
    features: string[];
    renderFeatures?: string[];
    featured?: boolean;
    highlighted?: boolean;
    cta: string;
    soldOut?: boolean;
}

const frequencies: PricingTierFrequency[] = [
    {id: '1', value: '1', label: 'One-time fee', priceSuffix: ''},
    {id: '2', value: '2', label: 'Monthly', priceSuffix: '/month'},
    {id: '3', value: '3', label: 'Annually', priceSuffix: '/year'},
];

const tiers: PricingTier[] = [
    {
        name: 'Starter Package',
        id: '0',
        href: '/subscribe',
        price: {'1': '$999 - 4,999', '2': '$45 - 89', '3': '$459 - 899'},
        discountPrice: {'1': '', '2': '', '3': ''},
        description: `Perfect for small websites (up to 5 pages`,
        features: [
            `Professional design and setup`,
            `1 year of hosting, bug fixing, and maintenance`,
            `Basic SEO optimization`,
            `Mobile-responsive design`,
            `Contact form integration`,
            `Basic analytics setup`,
        ],
        featured: false,
        highlighted: false,
        soldOut: false,
        cta: `Sign up`,
    },
    {
        name: 'Business Package',
        id: '1',
        href: '/subscribe',
        price: {'1': '$4,999+', '2': '$89 - 169', '3': '$899 - 1,699'},
        discountPrice: {'1': '', '2': '', '3': ''},
        description: `Ideal for bigger websites and e-commerce.`,
        features: [
            `Everything in the Starter Package`,
            `E-commerce setup with Shopify (or preferred platform)`,
            `Product listings and management`,
            `Payment gateway integration`,
            `Advanced SEO optimization`,
            `Marketing tools setup (email campaigns, social media integration)`,
            `Enhanced security measures`,
            `Ongoing support and maintenance`,
        ],
        featured: false,
        highlighted: true,
        soldOut: false,
        cta: `Get started`,
    },
    {
        name: 'Custom Package',
        id: '2',
        href: '/contact-us',
        price: {'1': '$39k+', '2': '$499+', '3': '4,999+'},
        discountPrice: {'1': '', '2': '', '3': ''},
        description: `For fully custom websites coded from scratch using your preferred stack.`,
        features: [
            `Everything in the Business Package`,
            `Custom code development (React, Sass, Tailwind, Angular, Next.js, etc.)`,
            `Unique design tailored to your brand`,
            `Custom functionalities and features`,
            `Advanced integrations with third-party services`,
            `Scalable architecture`,
            `Priority support and maintenance`,
        ],
        featured: false,
        highlighted: false,
        soldOut: false,
        cta: `Contact Us`,
    },
];

const CheckIcon = ({className}: { className?: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={cn('w-6 h-6', className)}
        >
            <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clipRule="evenodd"
            />
        </svg>
    );
};

export default function PricingPage() {
    const [frequency, setFrequency] = useState(frequencies[0]);
    const bannerText = 'Save 10% off all plans for a limited time';

    const images = [
        "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ];

    tiers.forEach(tier => {
        // Clone the original features list to avoid mutating the original array
        const updatedFeatures = [...tier.features];

        // Determine the index of the feature to replace
        const featureIndex = updatedFeatures.findIndex(feature => feature.includes("1 year of hosting, bug fixing, and maintenance"));

        // If the feature exists and the frequency is either monthly or annually, replace it
        if (featureIndex !== -1 && (frequency.value === '2' || frequency.value === '3')) {
            updatedFeatures[featureIndex] = "Forever* hosting, bug fixing, and maintenance";
        }

        // Update the tier's features list for rendering
        tier.renderFeatures = updatedFeatures;
    });

    return (
        <div
            className={cn('flex flex-col w-full items-center p-1', styles.fancyOverlay)}
        >
            <MyDropdown/>

            <div className="w-full flex flex-col items-center mt-6">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center">
                    <div
                        className="w-full lg:w-auto mx-auto max-w-4xl lg:flex lg:flex-col lg:content-center text-center">
                        <h1 className="text-black dark:text-white text-4xl font-semibold sm:max-w-none md:text-6xl !leading-tight">
                            Pricing
                        </h1>
                        <p className="text-black dark:text-white mt-6 md:text-xl lg:text-center">
                            We strive to provide the best service possible. That is why we provide unlimited revisions
                            before publishing any product and 1-year maintenance with any one-time purchase or forever*
                            maintenance with monthly and annual purchases.
                        </p>
                    </div>

                    {bannerText ? (
                        <div className="w-full lg:w-auto flex justify-center my-4">
                            <p className="w-full px-4 py-3 text-xs bg-red-100 text-black dark:bg-red-300/30 dark:text-white/80 rounded-xl">
                                {bannerText}
                            </p>
                        </div>
                    ) : null}

                    {frequencies.length > 1 ? (
                        <div className="mt-16 flex justify-center">
                            <RadioGroup
                                defaultValue={frequency.value}
                                onValueChange={(value: string) => {
                                    setFrequency(frequencies.find((f: PricingTierFrequency) => f.value === value)!);
                                }}
                                className="grid gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 bg-white dark:bg-black ring-1 ring-inset ring-gray-200/30 dark:ring-gray-800"
                                style={{
                                    gridTemplateColumns: `repeat(${frequencies.length}, minmax(0, 1fr))`,
                                }}
                            >
                                <Label className="sr-only">Payment frequency</Label>
                                {frequencies.map((option) => (
                                    <Label
                                        className={cn(
                                            frequency.value === option.value
                                                ? 'bg-red-500/90 text-white dark:bg-red-900/70 dark:text-white/70'
                                                : 'bg-transparent text-gray-500 hover:bg-red-500/10',
                                            'cursor-pointer rounded-full px-2.5 py-2 transition-all',
                                        )}
                                        key={option.value}
                                        htmlFor={option.value}
                                    >
                                        {option.label}

                                        <RadioGroupItem
                                            value={option.value}
                                            id={option.value}
                                            className="hidden"
                                        />
                                    </Label>
                                ))}
                            </RadioGroup>
                        </div>
                    ) : (
                        <div className="mt-12" aria-hidden="true"></div>
                    )}

                    <div
                        className={cn(
                            'isolate mx-auto mt-4 mb-8 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none',
                            tiers.length === 2 ? 'lg:grid-cols-2' : '',
                            tiers.length === 3 ? 'lg:grid-cols-3' : '',
                        )}
                    >
                        {tiers.map((tier: PricingTier) => (
                            <div
                                key={tier.id}
                                className={cn(
                                    tier.featured
                                        ? '!bg-gray-900 ring-gray-900 dark:!bg-gray-100 dark:ring-gray-100'
                                        : 'bg-white dark:bg-gray-900/80 ring-gray-300/70 dark:ring-gray-700',
                                    'max-w-xs ring-1 rounded-3xl p-8 xl:p-10',
                                    //tier.highlighted ? styles.fancyGlassContrast : '',
                                )}
                            >
                                <h3
                                    id={tier.id}
                                    className={cn(
                                        tier.featured ? 'text-white dark:text-black' : 'text-black dark:text-white',
                                        'text-2xl font-bold tracking-tight',
                                    )}
                                >
                                    {tier.name}
                                </h3>
                                <p
                                    className={cn(
                                        tier.featured
                                            ? 'text-gray-300 dark:text-gray-500'
                                            : 'text-gray-600 dark:text-gray-400',
                                        'mt-4 text-sm leading-6',
                                    )}
                                >
                                    {tier.description}
                                </p>
                                <p className="mt-6 flex items-baseline gap-x-1">
                  <span
                      className={cn(
                          tier.featured ? 'text-white dark:text-black' : 'text-black dark:text-white',
                          'text-4xl font-bold tracking-tight',
                          tier.discountPrice && typeof tier.discountPrice === 'object' ? tier.discountPrice[frequency.value] : tier.discountPrice
                              ? 'line-through'
                              : '',
                      )}
                  >
                    {typeof tier.price === 'string'
                        ? tier.price
                        : tier.price[frequency.value]}
                  </span>

                                    <span
                                        className={cn(
                                            tier.featured ? 'text-white dark:text-black' : 'text-black dark:text-white',
                                        )}
                                    >
                    {typeof tier.discountPrice === 'string'
                        ? tier.discountPrice
                        : tier.discountPrice[frequency.value]}
                  </span>

                                    {typeof tier.price !== 'string' ? (
                                        <span
                                            className={cn(
                                                tier.featured
                                                    ? 'text-gray-300 dark:text-gray-500'
                                                    : 'dark:text-gray-400 text-gray-600',
                                                'text-sm font-semibold leading-6',
                                            )}
                                        >
                      {frequency.priceSuffix}
                    </span>
                                    ) : null}
                                </p>
                                <div
                                    className={cn(
                                        'flex mt-6 shadow-sm',
                                        tier.soldOut ? 'pointer-events-none' : '',
                                    )}
                                >
                                    <ContactRequestModal tier={tier} frequency={frequency} />
                                </div>

                                <ul
                                    className={cn(
                                        tier.featured
                                            ? 'text-gray-300 dark:text-gray-500'
                                            : 'text-gray-700 dark:text-gray-400',
                                        'mt-8 space-y-3 text-sm leading-6 xl:mt-10',
                                    )}
                                >
                                    {tier.renderFeatures?.map((feature) => (
                                        <li key={feature} className="flex gap-x-3">
                                            <CheckIcon
                                                className={cn(
                                                    tier.featured ? 'text-white dark:text-black' : '',
                                                    tier.highlighted
                                                        ? 'text-red-500'
                                                        : 'text-gray-500',

                                                    'h-6 w-5 flex-none',
                                                )}
                                                aria-hidden="true"
                                            />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 mb-4 md:text-sm text-left">
                        * Forever maintenance is defined as long as the product is hosted with us. Moving to another
                        hosting provider will forfeit our maintenance services.
                    </p>
                </div>
            </div>
        </div>
    );
}
