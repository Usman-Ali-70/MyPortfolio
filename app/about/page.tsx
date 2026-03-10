"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiTypescript,
  SiPrisma,
  SiSupabase,
  SiExpress,
  SiFramer,
  SiDotnet,
  SiCplusplus,
  SiSqlite,
  SiVercel,
} from "react-icons/si";

import { TbBrandCSharp } from "react-icons/tb";

import Circles from "@/components/Circles";
import { fadeIn } from "@/variants";
import HalfAvatar from "@/components/HalfAvatar";

export interface SkillItem {
  name: string;
  Icon?: React.ComponentType<{ className?: string }>;
}

export interface AboutItem {
  title: string;
  stage?: string;
  skills?: SkillItem[];
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
        title: "Frontend",
        skills: [
          { name: "React.js", Icon: FaReact },
          { name: "Next.js", Icon: SiNextdotjs },
          { name: "TypeScript", Icon: SiTypescript },
          { name: "JavaScript", Icon: FaJs },
          { name: "HTML5", Icon: FaHtml5 },
          { name: "CSS3", Icon: FaCss3 },
          { name: "Tailwind CSS", Icon: SiTailwindcss },
          { name: "Framer Motion", Icon: SiFramer },
          { name: "shadcn/ui" },
          { name: "TanStack Query" },
        ],
      },
      {
        title: "Backend & APIs",
        skills: [
          { name: "Node.js", Icon: FaNodeJs },
          { name: "Express.js", Icon: SiExpress },
          { name: "C#", Icon: TbBrandCSharp },
          { name: ".NET", Icon: SiDotnet },
          { name: "C++", Icon: SiCplusplus },
          { name: "REST APIs" },
          { name: "Auth & Middleware" },
        ],
      },
      {
        title: "Databases & BaaS",
        skills: [
          { name: "MongoDB", Icon: SiMongodb },
          { name: "MySQL", Icon: SiMysql },
          { name: "SQLite", Icon: SiSqlite },
          { name: "Prisma", Icon: SiPrisma },
          { name: "Supabase", Icon: SiSupabase },
          { name: "Sanity" },
        ],
      },
      {
        title: "Cloud & Deployment",
        skills: [
          { name: "Vercel", Icon: SiVercel },
          { name: "Git", Icon: FaGitAlt },
          { name: "GitHub", Icon: FaGithub },
          { name: "VPS Hosting" },
          { name: "Server Setup" },
        ],
      },
      {
        title: "Concepts",
        skills: [
          { name: "MERN Stack" },
          { name: "ERP Dashboards" },
          { name: "RBAC" },
          { name: "API Security" },
          { name: "SEO Optimization" },
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Asset Sales & Repair Executive - Universal Aerospace Systems",
        stage: "Dec 2024 – Oct 2025",
      },
      {
        title: "Web Developer Intern - Innovatechstar",
        stage: "Jun 2023 – Jan 2024",
      },
      {
        title: "Freelance Full Stack Developer",
        stage: "Jan 2023 – Present",
      },
    ],
  },
  {
    title: "projects",
    info: [
      { title: "SkyStar POS", stage: "Point of Sale & Inventory Tracking" },
      { title: "Sheikh Jee Garments", stage: "E-commerce" },
      { title: "School Management Platform", stage: "ERP-style Platform" },
      { title: "Innovatechstar Portfolio", stage: "Corporate Presence" },
      { title: "Blood Donation Bank", stage: "Web Application" },
      { title: "Client Portfolio Project", stage: "Custom Web Presence" },
    ],
  },
  {
    title: "education",
    info: [
      { title: "BS Computer Science - University of Gujrat", stage: "Expected Jun 2027" },
      { title: "F.Sc. Pre-Engineering - Jinnah Public College", stage: "Jul 2023" },
      { title: "Matriculation (CS) - Jinnah Public School", stage: "Aug 2021" },
    ],
  },
];

const AboutPage = () => {
  const [index, setIndex] = useState<number>(0);

  return (
    <div className="relative min-h-screen xl:h-screen bg-primary/30 flex items-center text-center xl:text-left pt-24 pb-32 xl:pt-0 xl:pb-0 overflow-x-hidden">
      <Circles />

      {/* Avatar (Left side fixed, half hidden on left bound) - EXACTLY AS ORIGINAL */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="flex fixed bottom-[80px] xl:bottom-0 left-0 w-full max-w-[150px] sm:max-w-[250px] md:max-w-[350px] xl:max-w-[570px] opacity-100 transition-all duration-500 z-[60] pointer-events-none"
      >
        <HalfAvatar />
      </motion.div>

      <div className="container mx-auto min-h-full flex flex-col xl:flex-row items-center gap-x-6 px-4 py-8 xl:py-0 relative z-[70]">

        <div className="flex-1 flex flex-col w-full xl:w-auto mt-2 xl:mt-0 pb-8 xl:pb-0">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-[28px] leading-[1.2] md:text-4xl xl:text-5xl font-semibold mb-2 xl:mb-4 px-2 xl:px-0"
          >
            Delivering <span className="text-accent">high-performance</span> web solutions.
          </motion.h2>

          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 text-[13px] md:text-sm xl:text-base text-gray-300 leading-relaxed px-2 xl:px-0"
          >
            I’m <span className="text-orange-500 font-medium">Usman Ali</span>, a Full Stack Developer experienced in building scalable applications. From engineering ERP dashboards to deploying robust architectures, I focus on creating responsive and user-centric digital experiences.
          </motion.p>

          {/* Counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="flex md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-[22px] md:text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={3} />
                </div>
                <div className="text-[11px] md:text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years Experience
                </div>
              </div>

              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-[22px] md:text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={30} duration={3} />
                </div>
                <div className="text-[11px] md:text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied Clients
                </div>
              </div>

              <div className="relative flex-1">
                <div className="text-[22px] md:text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={15} duration={3} />
                </div>
                <div className="text-[11px] md:text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Completed Projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Info Tabs - Class exactly matches your original setup */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] min-h-max xl:h-[480px] pb-24 xl:pb-0"
        >
          {/* Tabs */}
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 overflow-x-auto whitespace-nowrap scrollbar-hide w-full justify-center xl:justify-start">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                onClick={() => setIndex(itemI)}
                className={`cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 ${index === itemI
                  ? "text-accent after:w-full after:bg-accent transition-all duration-300"
                  : "text-white/70"
                  }`}
              >
                {item.title}
              </div>
            ))}
          </div>

          {/* Dynamic Info - Added overflow-y-auto so the new larger skills list fits without breaking the original layout size */}
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start xl:overflow-y-auto pr-2 custom-scrollbar">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex flex-col w-full text-center xl:text-left text-white/70"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-x-2 w-full justify-center xl:justify-start">
                  <div className="font-light mb-1 md:mb-0">{item.title}</div>
                  {item.stage && (
                    <>
                      <div className="hidden md:flex">-</div>
                      <div>{item.stage}</div>
                    </>
                  )}
                </div>

                {/* Skill Pills Rendering */}
                {item.skills && (
                  <div className="flex flex-wrap gap-2 mt-2 justify-center xl:justify-start w-full">
                    {item.skills.map((skill, skillI) => (
                      <div
                        key={skillI}
                        className="flex items-center gap-x-2 bg-white/10 px-2 py-1 rounded text-[11px] md:text-xs text-white"
                      >
                        {skill.Icon && <skill.Icon className="text-accent" />}
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div >
  );
};

export default AboutPage;