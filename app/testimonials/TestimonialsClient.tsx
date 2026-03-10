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
        <div className="relative min-h-screen xl:h-screen bg-primary/30 flex xl:items-center xl:justify-center overflow-x-hidden xl:overflow-hidden scrollbar-hide pt-[110px] pb-32 md:pt-28 xl:pt-0 xl:pb-0">
            {/* Visual Accents (Tucked away in corners as per previous request) */}
            <div className="absolute -bottom-2 -right-2 opacity-40 select-none pointer-events-none z-10 scale-95 origin-bottom-right">
                <Circles />
            </div>
            <div className="absolute -bottom-8 left-0 opacity-30 select-none pointer-events-none z-10 scale-90 origin-bottom-left">
                <Bulb />
            </div>

            <div className="container mx-auto min-h-full flex flex-col xl:justify-center px-4 xl:px-0 relative z-20">

                {/* Updated Header: "Clients" and "Reviews" focus */}
                <motion.div
                    variants={fadeIn("down", 0.2)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="mb-8 xl:mb-6 text-center xl:text-left"
                >
                    <h2 className="text-[28px] md:text-5xl xl:text-6xl font-extrabold tracking-tight mb-2 uppercase">
                        Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-accent">Reviews</span>
                    </h2>
                    <p className="max-w-[550px] text-[13px] md:text-base text-gray-400 font-light mx-auto xl:mx-0">
                        Honest feedback from the people I've built digital products for.
                        Every review is a story of collaboration and success.
                    </p>
                </motion.div>

                {/* Dashboard Grid - Level Alignment */}
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-y-16 xl:gap-x-12 items-center w-full mx-auto">

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
                            {/* Deep glass container for the new slider design */}
                            <div className="bg-[#1a1433]/70 backdrop-blur-3xl border border-white/10 rounded-[30px] p-6 md:p-10 shadow-[0_30px_80px_rgba(0,0,0,0.5)] relative min-h-[320px] md:min-h-[450px] w-full">
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
