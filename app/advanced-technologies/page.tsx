import {cn} from "@/lib/utils";
import styles from "@/app/pricing/pricing.module.css";
import MyDropdown from "@/components/my-dropdown";
import React from "react";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {LinkPreview} from "@/components/ui/link-preview";

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
                            Explore the advanced technologies and tools we use to build cutting-edge solutions for our clients.
                        </p>
                        <Accordion type="single" collapsible className="text-left md:text-xl">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Machine Learning & AI</AccordionTrigger>
                                <AccordionContent className="md:text-lg">
                                    <span className="font-bold">TensorFlow: </span>Expertise in building and training deep learning models.<br />
                                    <span className="font-bold">Keras: </span>Utilized for quick prototyping and building neural networks.<br />
                                    <span className="font-bold">PyTorch: </span>Experience with dynamic computation graphs and advanced research models.<br />
                                    <span className="font-bold">Scikit-learn: </span>Used for implementing various machine learning algorithms.<br />
                                    <span className="font-bold">OpenCV: </span>Proficient in computer vision tasks and image processing.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Data Analysis & Visualization</AccordionTrigger>
                                <AccordionContent className="md:text-lg">
                                    <span className="font-bold">Pandas: </span>Advanced data manipulation and analysis capabilities.<br />
                                    <span className="font-bold">NumPy: </span>Utilized for numerical computing and array operations.<br />
                                    <span className="font-bold">Matplotlib: </span>Experience in creating static, interactive, and animated visualizations.<br />
                                    <span className="font-bold">Seaborn: </span>Used for statistical data visualization.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Web Crawling & Indexing</AccordionTrigger>
                                <AccordionContent className="md:text-lg">
                                    <span className="font-bold">Scrapy: </span>Proficient in building and deploying web crawlers.<br />
                                    <span className="font-bold">Beautiful Soup: </span>Used for parsing HTML and XML documents.<br />
                                    <span className="font-bold">Selenium: </span>Expertise in automating web browsing tasks.<br />
                                    <span className="font-bold">Elasticsearch: </span>Experience in full-text search and analytics engine.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>Cloud & DevOps</AccordionTrigger>
                                <AccordionContent className="md:text-lg">
                                    <span className="font-bold">AWS: </span>Knowledge of various AWS services including EC2, S3, and Lambda.<br />
                                    <span className="font-bold">Docker: </span>Skilled in containerization and creating scalable applications.<br />
                                    <span className="font-bold">Kubernetes: </span>Experience with container orchestration and microservices architecture.<br />
                                    <span className="font-bold">Jenkins: </span>Used for continuous integration and continuous deployment (CI/CD).
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-5">
                                <AccordionTrigger>Advanced Development Tools</AccordionTrigger>
                                <AccordionContent className="md:text-lg">
                                    <span className="font-bold">Jupyter Notebooks: </span>Utilized for interactive computing and data analysis.<br />
                                    <span className="font-bold">Anaconda: </span>Experience with managing Python packages and environments.<br />
                                    <span className="font-bold">Git & GitHub: </span>Proficient in version control and collaborative development.<br />
                                    <span className="font-bold">Apache Spark: </span>Used for big data processing and analytics.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdvancedTechnologiesPage;