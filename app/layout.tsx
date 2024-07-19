import type { Metadata } from "next";
import { Exo } from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "next-themes";
import {NextFont} from "next/dist/compiled/@next/font";
import {ReactNode} from "react";
import { Analytics } from "@vercel/analytics/react";

const exo: NextFont = Exo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EY Web Design",
  description: "Generated by create next app",
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
    </html>
  );
}
