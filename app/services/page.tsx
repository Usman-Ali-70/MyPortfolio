"use client";

import { motion } from "framer-motion";
import Bulb from "@/components/Bulb";
import Circles from "@/components/Circles";
import ServiceSlider from "@/components/ServiceSlider";
import { fadeIn } from "@/variants";

export const serviceData = [
  {
    title: "Full Stack Web Development",
    description:
      "Building responsive, scalable, and high-performance web applications using modern technologies like Next.js, React, and Node.js. I specialize in creating seamless user experiences integrated with powerful backends.",
  },
  {
    title: "UI / UX Design",
    description:
      "Designing visually engaging and intuitive interfaces with a focus on user experience, accessibility, and smooth interaction flows. I create clean, responsive layouts that enhance product usability.",
  },
  {
    title: "Database & API Integration",
    description:
      "Integrating secure RESTful APIs and databases (MongoDB, MySQL, Sanity) to ensure efficient data management, real-time updates, and optimized performance for large-scale applications.",
  },
  {
    title: "Website Optimization",
    description:
      "Improving site performance, SEO, and Core Web Vitals. I use caching, compression, and optimized rendering to deliver lightning-fast load times across devices.",
  },
  {
    title: "Freelance & Consulting",
    description:
      "Helping businesses transform ideas into digital products through strategic consulting, technical architecture, and hands-on development.",
  },
];

const ServicesPage = () => {
  return (
    <div className="relative h-screen bg-primary/30 flex items-center overflow-hidden">
      <Circles />

      <div className="container mx-auto h-full flex items-center">
        <div className="flex flex-col xl:flex-row gap-x-8 w-full">
          {/* Text Section */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              My <span className="text-accent">Services</span>
            </motion.h2>

            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0 text-gray-300"
            >
              I offer full-stack development and UI/UX services to help
              businesses scale and succeed in the digital world — from concept
              to deployment, I build modern, performant, and user-friendly
              solutions.
            </motion.p>
          </div>

          {/* Service Slider Section */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <ServiceSlider services={serviceData} />
          </motion.div>
        </div>
      </div>

      <Bulb />
    </div>
  );
};

export default ServicesPage;