"use client";
import React, {useEffect, useState} from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import BlurIn from "@/components/ui/blur-in";
import {useTheme} from "next-themes";

export const HeroParallax = ({
                                 products,
                             }: {
    products: {
        title: string;
        link: string;
        thumbnail: string;
    }[];
}) => {
    const firstRow = products.slice(0, 5);
    const secondRow = products.slice(5, 10);
    const thirdRow = products.slice(10, 15);
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    const translateX = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, 1000]),
        springConfig
    );
    const translateXReverse = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, -1000]),
        springConfig
    );
    const rotateX = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [15, 0]),
        springConfig
    );
    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
        springConfig
    );
    const rotateZ = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [20, 0]),
        springConfig
    );
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
        springConfig
    );
    return (
        <div
            ref={ref}
            className="h-auto md:h-[250vh] py-0 md:py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
        >
            <Header />
            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                }}
                className="hidden md:block"
            >
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
                    {firstRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row  mb-20 space-x-20 ">
                    {secondRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateXReverse}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
                    {thirdRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.title}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export const Header = () => {
    const { theme, resolvedTheme } = useTheme();
    const [iconSrc, setIconSrc] = useState('/logo_light.svg');
    useEffect(() => {
        // Use resolvedTheme for checking as it accounts for system preferences
        const currentTheme = theme === 'system' ? resolvedTheme : theme;
        setIconSrc(currentTheme === 'dark' ? '/logo_dark.svg' : '/logo_light.svg');
    }, [theme, resolvedTheme]);

    return (
        <div className="max-w-7xl relative mx-auto py-5 md:py-10 px-4 w-full  left-0 top-0 z-10">
            <Image
                className={"h-56 w-56 object-cover rounded-full mb-2 dark:bg-black bg-white"}
                src={iconSrc}
                alt="EY Development Services"
                width={150}
                height={150}
            />
            <BlurIn
                word="The EY"
                className="text-2xl md:text-7xl font-bold dark:text-white"
            />
            <BlurIn
                word="development studio"
                className="text-2xl md:text-7xl font-bold dark:text-white"
            />
            <BlurIn
                word="
                We build beautiful and functional websites and apps that capture your brand and drive results.
                Whether you're a startup, a growing e-commerce business, or an established organization,
                we'll craft a digital experience that's tailored to your unique needs.
                "
                className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200"
            />
        </div>
    );
};

export const ProductCard = ({
                                product,
                                translate,
                            }: {
    product: {
        title: string;
        link: string;
        thumbnail: string;
    };
    translate: MotionValue<number>;
}) => {
    return (
        <motion.div
            style={{
                x: translate,
            }}
            whileHover={{
                y: -20,
            }}
            key={product.title}
            className="group/product h-80 w-[30rem] relative flex-shrink-0"
        >
            <Link
                href={product.link}
                className="block group-hover/product:shadow-2xl "
            >
                <Image
                    src={product.thumbnail}
                    height="600"
                    width="900"
                    className="object-cover object-left-top absolute h-full w-full inset-0"
                    alt={product.title}
                />
            </Link>
            <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
            <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
                {product.title}
            </h2>
        </motion.div>
    );
};
