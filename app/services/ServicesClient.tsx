"use client";

import { motion } from "framer-motion";

import Bulb from "@/components/Bulb";
import Circles from "@/components/Circles";
import ServiceSlider, { ServiceItem } from "@/components/ServiceSlider";
import { fadeIn } from "@/variants";
import Link from "next/link";

interface ServicesClientProps {
    services: ServiceItem[];
}

const ServicesClient: React.FC<ServicesClientProps> = ({ services }) => {
    const displayServices = services || [];
    return (
        <div className="relative h-full bg-primary/30 flex items-start xl:items-center overflow-y-auto overflow-x-hidden scrollbar-hide overscroll-none pt-24 pb-28 xl:pt-0 xl:pb-0">

            {/* Decorative elements - fixed/sticky at bottom on all devices */}
            <div className="fixed bottom-[72px] xl:bottom-0 -right-8 xl:-right-16 opacity-40 xl:opacity-50 select-none pointer-events-none z-[15]">
                <Circles />
            </div>
            <div className="fixed bottom-[-20px] xl:bottom-[-70px] left-[-95px] xl:left-[-125px] opacity-30 xl:opacity-50 select-none pointer-events-none z-[15]">
                <Bulb />
            </div>


            <div className="absolute top-[10%] left-[5%] w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px] pointer-events-none z-10" />

            <div className="container mx-auto flex items-center px-4 md:px-0 relative z-20">
                <div className="flex flex-col xl:flex-row gap-x-12 w-full items-center">

                    <div className="text-center flex xl:w-[35vw] flex-col lg:text-left mb-8 xl:mb-0 relative xl:-mt-8">

                        <div className="hidden xl:block absolute -left-8 top-12 h-[300px] w-[1px] bg-gradient-to-b from-transparent via-accent/30 to-transparent" />

                        <motion.h2
                            variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="text-[28px] md:text-5xl xl:text-6xl font-semibold mb-4 tracking-tight"
                        >
                            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-accent hover:from-accent hover:to-orange-400 transition-all duration-500 cursor-default">Services</span>
                        </motion.h2>

                        <motion.p
                            variants={fadeIn("up", 0.4)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="mb-6 max-w-[400px] mx-auto lg:mx-0 text-[13px] md:text-base xl:text-lg text-gray-300 leading-relaxed font-light"
                        >
                            From conceptualizing e-commerce architectures to deploying comprehensive ERP dashboards, I provide end-to-end development services. I focus on delivering scalable, secure, and visually engaging digital products tailored to business needs.
                        </motion.p>

                        <motion.div
                            variants={fadeIn("up", 0.5)}
                            initial="hidden"
                            animate="show"
                            className="hidden xl:flex"
                        >
                            <Link
                                href="/contact"
                                className="bg-white/5 border border-white/10 hover:border-accent hover:bg-accent/10 text-white/80 hover:text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-x-2"
                            >
                                Let&apos;s discuss your project
                                <span className="text-accent">→</span>
                            </Link>
                        </motion.div>
                    </div>

                    <motion.div
                        variants={fadeIn("down", 0.6)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="w-full xl:max-w-[65%] relative pb-12 xl:pb-0"
                    >
                        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-[400px] h-[400px] bg-gradient-conic from-accent/5 via-orange-400/5 to-accent/5 rounded-full blur-[80px] pointer-events-none" />

                        <ServiceSlider services={displayServices} />
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default ServicesClient;
