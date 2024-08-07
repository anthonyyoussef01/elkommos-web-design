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
