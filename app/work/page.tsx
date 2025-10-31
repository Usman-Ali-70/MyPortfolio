"use client";

import { motion } from "framer-motion";
import Bulb from "@/components/Bulb";
import Circles from "@/components/Circles";
import WorkSlider from "@/components/WorkSlider";
import { fadeIn } from "@/variants";

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  image?: string;
  link?: string;
}

export const projectsData: Project[] = [
  {
    title: "E-commerce Platform – Sheikh Jee Garments",
    description:
      "A full-featured online store built with Next.js and MongoDB for Sheikh Jee Garments. Integrated order tracking, product management, and responsive design for seamless shopping.",
    techStack: ["Next.js", "MongoDB", "Tailwind CSS", "Node.js"],
    link: "https://sheikhjeegarments.com",
  },
  {
    title: "Inventory Management System",
    description:
      "A desktop-style inventory app for local businesses to manage products, categories, and sales analytics — optimized for performance and ease of use.",
    techStack: ["Next.js", "SQLite", "TypeScript", "Better-SQLite3"],
  },
  {
    title: "School Management Platform",
    description:
      "A role-based platform for managing students, teachers, and administrative data. Designed with a focus on clean UI and efficient backend operations.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "Company Portfolio Website – Innovatechstar",
    description:
      "A modern company portfolio website highlighting services and projects. Built for Innovatechstar with dynamic content and responsive visuals.",
    techStack: ["Next.js", "Sanity CMS", "Tailwind CSS"],
    link: "https://innovatechstar.com",
  },
  {
    title: "Social Media Template UI",
    description:
      "A creative social media app UI prototype showcasing dynamic feed layouts, profiles, and messaging components.",
    techStack: ["React", "Framer Motion", "Tailwind CSS"],
  },
];

const WorkPage = () => {
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
              className="h2 xl:mt-12"
            >
              My <span className="text-accent">Work</span>.
            </motion.h2>

            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0 text-gray-300"
            >
              Here are some of the key projects I’ve built and contributed to —
              ranging from e-commerce platforms to management systems, each one
              crafted with performance, scalability, and elegant design in mind.
            </motion.p>
          </div>

          {/* Work Slider Section */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider projects={projectsData} />
          </motion.div>
        </div>
      </div>

      <Bulb />
    </div>
  );
};

export default WorkPage;