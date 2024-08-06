import type { Metadata } from "next";
import { Exo } from "next/font/google";
import {ThemeProvider} from "next-themes";
import {NextFont} from "next/dist/compiled/@next/font";
import React, {ReactNode} from "react";
import { Analytics } from "@vercel/analytics/react";

const exo: NextFont = Exo({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "EY Pricing",
    description: "Explore the competitive pricing of EY Digital Innovations. We offer transparent and flexible pricing for web design, app development, system architecture, product engineering, photography, videography, and AI solutions. Serving Rockland County, Hudson Valley, NY, NJ, and beyond. Contact us for a custom quote today.",
};
const keywords: string = "Rockland, Rockland County, Hudson Valley, NY, New York, NJ, New Jersey, Westchester County, Orange County, Bergen County, Dutchess County, Ulster County, Putnam County, Sullivan County, Poughkeepsie, White Plains, Nyack, Pearl River, Spring Valley, New City, Nanuet, Suffern, Haverstraw, Tappan, Orangeburg, Congers, Monsey, Chestnut Ridge, Mahwah, Paramus, Ridgewood, Montvale, Ramsey, Clifton, Paterson, Hackensack, Teaneck, Englewood, Fort Lee, Palisades Park, Livingston, Hoboken, Jersey City, Newark, Yonkers, Bronx, Manhattan, Brooklyn, Queens, Staten Island, Long Island, Nassau County, Suffolk County";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head>
            <meta name="keywords" content={keywords}/>
        </head>
        <body className={exo.className}>
        <Analytics/>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
