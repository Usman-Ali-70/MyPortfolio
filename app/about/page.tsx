"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaReact,
  FaWordpress,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiMysql } from "react-icons/si";

import Avatar from "@/components/Avatar";
import Circles from "@/components/Circles";
import { fadeIn } from "@/variants";

export interface AboutItem {
  title: string;
  stage?: string;
  icons?: React.ComponentType[];
}

export interface AboutSection {
  title: string;
  info: AboutItem[];
}

export const aboutData: AboutSection[] = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          FaHtml5,
          FaCss3,
          FaJs,
          FaReact,
          SiNextdotjs,
          FaNodeJs,
          SiTailwindcss,
          SiMongodb,
          SiMysql,
          FaWordpress,
        ],
      },
      {
        title: "Tools & Platforms",
        icons: [FaGithub],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Asset Sales & Repair Executive - Universal Aerospace Systems",
        stage: "July 2024 – Present",
      },
      {
        title: "Web Developer Intern - Innovatechstar",
        stage: "June 2023 – June 2024",
      },
      {
        title: "Freelance Full Stack Developer",
        stage: "2023 – Present",
      },
    ],
  },
  {
    title: "projects",
    info: [
      { title: "E-commerce Site", stage: "sheikhjeegarments.com" },
      { title: "Inventory Management System" },
      { title: "School Management Platform" },
      { title: "Social Media Template" },
    ],
  },
  {
    title: "education",
    info: [
      { title: "BS Computer Science - University of Gujrat", stage: "Expected 2027" },
      { title: "F.Sc. Pre-Engineering - Jinnah Public College", stage: "2023" },
      { title: "Matriculation - Jinnah Public School", stage: "2021" },
    ],
  },
];

const AboutPage = () => {
  const [index, setIndex] = useState<number>(0);

  return (
    <div className="relative h-screen bg-primary/30 flex items-center text-center xl:text-left overflow-hidden">
      <Circles />

      {/* Avatar */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[270px] xl:max-w-[570px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 px-4">
        {/* Left Text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 font-semibold"
          >
            Building <span className="text-accent">innovative</span> digital solutions with modern technologies.
          </motion.h2>

          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 text-gray-300 leading-relaxed"
          >
            I’m <span className="text-orange-500 font-medium">Usman Ali</span>, a passionate Full Stack Developer focused on crafting efficient, scalable, and visually engaging web applications using modern technologies like Next.js, React, and Node.js. With hands-on experience in building real-world solutions, I aim to bring ideas to life through elegant and maintainable code.
          </motion.p>

          {/* Counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* Experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={3} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of Experience
                </div>
              </div>

              {/* Clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={30} duration={3} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied Clients
                </div>
              </div>

              {/* Projects */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={15} duration={3} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Completed Projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Info Tabs */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          {/* Tabs */}
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                onClick={() => setIndex(itemI)}
                className={`cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 ${
                  index === itemI
                    ? "text-accent after:w-full after:bg-accent transition-all duration-300"
                    : "text-white/70"
                }`}
              >
                {item.title}
              </div>
            ))}
          </div>

          {/* Dynamic Info */}
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/70"
              >
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>

                {/* Safely render stage */}
                {item.stage && <div>{item.stage}</div>}

                {/* Icons */}
                <div className="flex gap-x-3 mt-1 md:mt-0">
                  {item.icons?.map((Icon, iconI) => (
                    <div key={iconI} className="text-2xl text-white">
                      <Icon />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
