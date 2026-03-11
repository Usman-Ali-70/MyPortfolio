"use client";

import { motion } from "framer-motion";
import TestimonialSlider, { Testimonial } from "@/components/TestimonialSlider";
import { fadeIn } from "@/variants";
import ReviewForm from "@/components/ReviewForm";
import Bulb from "@/components/Bulb";
import Circles from "@/components/Circles";

interface TestimonialsClientProps {
    testimonials: Testimonial[];
}

const TestimonialsClient: React.FC<TestimonialsClientProps> = ({ testimonials }) => {
    const displayTestimonials = testimonials || [];

    return (
        <div className="relative h-full bg-primary/30 overflow-y-auto overflow-x-hidden scrollbar-hide overscroll-none pt-24 pb-28 xl:pt-0 xl:pb-0">

            {/* Decorative elements - fixed/sticky at bottom on all devices */}
            <div className="fixed bottom-[72px] xl:bottom-0 -right-8 xl:-right-16 opacity-40 xl:opacity-50 select-none pointer-events-none z-[15]">
                <Circles />
            </div>
            <div className="fixed bottom-[-20px] xl:bottom-[-70px] left-[-95px] xl:left-[-125px] opacity-30 xl:opacity-50 select-none pointer-events-none z-[15]">
                <Bulb />
            </div>


            <div className="container mx-auto flex flex-col xl:justify-center min-h-full px-4 xl:px-0 relative z-20 py-8 xl:py-16">

                {/* Header */}
                <motion.div
                    variants={fadeIn("down", 0.2)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="mb-8 xl:mb-6 text-center xl:text-left"
                >
                    <h2 className="text-[26px] md:text-5xl xl:text-6xl font-extrabold tracking-tight mb-2 uppercase">
                        Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-accent">Reviews</span>
                    </h2>
                    <p className="max-w-[550px] text-[13px] md:text-base text-gray-400 font-light mx-auto xl:mx-0">
                        Honest feedback from the people I&apos;ve built digital products for.
                        Every review is a story of collaboration and success.
                    </p>
                </motion.div>

                {/* Dashboard Grid */}
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-y-12 xl:gap-x-12 items-center w-full mx-auto">

                    {/* Left Column: Testimonial Showcase */}
                    <div className="col-span-12 xl:col-span-7">
                        <motion.div
                            variants={fadeIn("right", 0.4)}
                            initial="hidden"
                            animate="show"
                            className="w-full relative"
                        >
                            <div className="absolute -left-12 -top-12 text-[180px] text-white/5 pointer-events-none hidden xl:block select-none font-serif leading-none italic opacity-30">
                                &ldquo;
                            </div>
                            <div className="bg-[#1a1433]/70 backdrop-blur-xl border border-white/10 rounded-2xl xl:rounded-[30px] p-5 md:p-10 shadow-[0_30px_80px_rgba(0,0,0,0.5)] relative min-h-[280px] md:min-h-[450px] w-full">
                                <TestimonialSlider testimonials={displayTestimonials} />
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Review Interaction */}
                    <div className="col-span-12 xl:col-span-5 flex flex-col items-stretch self-start">
                        <div className="relative">
                            <ReviewForm />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TestimonialsClient;
