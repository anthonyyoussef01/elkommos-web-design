import type { Metadata } from "next";
import { Exo } from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "next-themes";
import {NextFont} from "next/dist/compiled/@next/font";
import {ReactNode} from "react";
import { Analytics } from "@vercel/analytics/react";
import {GoogleAnalytics} from "@next/third-parties/google";

const exo: NextFont = Exo({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "EY Web & App Development",
    description: "EY Web & App Development uses cutting-edge technologies like React, Next.js, Angular, Spring, Nest.js, Express, Passport, HTML5, CSS3, Tailwind CSS, Bootstrap, Sass, Microsoft SQL Server, MySQL, SQLite, Amazon AWS, PostgreSQL, Firebase, MongoDB, Redis, Dart, Flutter, Android, Jest, Testing Library, Vercel, Docker, Git, Jira, GitHub, GitLab, Visual Studio Code, Android Studio, IntelliJ IDEA, WebStorm, Vim, SonarQube, Figma, and many more to deliver high-quality, innovative results to meet your business needs.",
    openGraph: {
        title: "EY Web & App Development | EY Digital Solutions",
        siteName: "EY Web & App Development | EY Digital Innovations",
        description: "EY Web & App Development: web design, app development, system architecture, AI, photography, videography, and drone shots. Rockland County, NY.",
        url: "https://elkommos.com",
        type: "website",
        images: [
            {
                url: "https://elkommos.com/banner.png",
                width: 3456,
                height: 1728,
                alt: "EY Digital Solutions",
                secureUrl: "https://elkommos.com/banner.png",
            },
            // {
            //     url: "https://elkommos.com/logo.png",
            //     width: 512,
            //     height: 512,
            //     alt: "EY Digital Innovations",
            //     secureUrl: "https://elkommos.com/logo.png",
            // }
        ],
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
      {/*Google tag (gtag.js)*/}
      <GoogleAnalytics gaId="G-G4LJH7RLRJ" />
    </html>
  );
}
