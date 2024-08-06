import type { Metadata } from "next";
import { Exo } from "next/font/google";
import {ThemeProvider} from "next-themes";
import {NextFont} from "next/dist/compiled/@next/font";
import React, {ReactNode} from "react";
import { Analytics } from "@vercel/analytics/react";

const exo: NextFont = Exo({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "EY Tech Stack",
    description: "Elkommos Youssef Website and Application Development, also known as EY Web & App Dev or EY Web Design, is a leading provider of digital solutions in Rockland County, NY. We specialize in custom web design, mobile app development, system architecture, and product engineering. Our expertise extends to portraits, event and product photography, artificial intelligence, videography, and drone shots. Whether you need a responsive website, an advanced mobile application, or cutting-edge AI solutions, our team delivers high-quality, innovative results to meet your business needs.",
};
const keywords: string = "java,csharp,scala,c,cplusplus,react,nextdotjs,angular,spring,javascript,typescript,racket,r,python,nodedotjs,nestjs,express,passport,php,html5,css3,tailwindcss,bootstrap,sass,microsoftsqlserver,mysql,sqlite,amazonaws,postgresql,firebase,mongodb,redis,dart,flutter,android,jest,testinglibrary,vercel,docker,git,jira,github,gitlab,visualstudiocode,androidstudio,intellijidea,webstorm,vim,sonarqube,figma,elasticsearch";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <title>EY Tech Stack</title>
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
