import {cn} from "@/lib/utils";
import styles from "@/app/pricing/pricing.module.css";
import MyDropdown from "@/components/my-dropdown";
import React from "react";

const AdvancedTechnologiesPage = () => {
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
                            Advanced Technologies
                        </h1>
                        <p className="text-black dark:text-white mt-6 md:text-xl lg:text-center">

                        </p>

                        <p className="text-black dark:text-white mt-6 md:text-xl lg:text-center">
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdvancedTechnologiesPage;