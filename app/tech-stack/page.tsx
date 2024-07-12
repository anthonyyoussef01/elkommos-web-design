import {cn} from "@/lib/utils";
import styles from "@/app/pricing/pricing.module.css";
import MyDropdown from "@/components/my-dropdown";
import React from "react";
import IconCloud from "@/components/ui/icon-cloud";

const slugs: string[] = [
    "java",
    "csharp",
    "scala",
    "c",
    "cplusplus",
    "react",
    "nextdotjs",
    "angular",
    "spring",
    "javascript",
    "typescript",
    "racket",
    "r",
    "python",
    "nodedotjs",
    "nestjs",
    "express",
    "passport",
    "php",
    "html5",
    "css3",
    "tailwindcss",
    "bootstrap",
    "sass",
    "microsoftsqlserver",
    "mysql",
    "sqlite",
    "amazonaws",
    "postgresql",
    "firebase",
    "mongodb",
    "redis",
    "dart",
    "flutter",
    "android",
    "jest",
    "testinglibrary",
    "vercel",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "intellijidea",
    "webstorm",
    "vim",
    "sonarqube",
    "figma",
    "elasticsearch",
];

const TechStackPage = () => {
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
                            Tech Stack
                        </h1>
                        <p className="text-black dark:text-white mt-6 md:text-xl lg:text-center">
                            We use the latest technologies to build modern websites and applications.
                        </p>
                        <IconCloud iconSlugs={slugs} />

                        <p className="text-black dark:text-white mt-6 md:text-xl lg:text-center">
                            And many more...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TechStackPage;