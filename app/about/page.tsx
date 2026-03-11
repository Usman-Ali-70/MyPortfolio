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
    <div className="relative h-full bg-primary/30 flex flex-col xl:flex-row xl:items-center text-center xl:text-left overflow-y-auto overflow-x-hidden scrollbar-hide overscroll-none">
      {/* Circles - fixed/sticky at bottom-right on all devices */}
      <div className="fixed bottom-[72px] xl:bottom-0 -right-8 xl:-right-16 opacity-40 xl:opacity-50 select-none pointer-events-none z-[15]">
        <Circles />
      </div>

      {/* Half Avatar - sticky above nav on mobile, fixed left-bottom on desktop */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="fixed bottom-[72px] xl:bottom-0 left-0 w-full max-w-[120px] sm:max-w-[160px] md:max-w-[200px] xl:max-w-[420px] 2xl:max-w-[500px] opacity-60 xl:opacity-100 z-[15] pointer-events-none"
      >
        <HalfAvatar />
      </motion.div>

      <div className="container mx-auto flex flex-col xl:flex-row items-center gap-x-6 px-4 py-8 xl:py-0 relative z-[20] pt-24 pb-28 xl:pt-0 xl:pb-0">

        <div className="flex-1 flex flex-col w-full xl:w-auto mt-2 xl:mt-0 pb-8 xl:pb-0">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-[26px] leading-[1.2] md:text-4xl xl:text-5xl font-semibold mb-2 xl:mb-4 px-2 xl:px-0"
          >
            Delivering <span className="text-accent">high-performance</span> web solutions.
          </motion.h2>

          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 text-[13px] md:text-sm xl:text-base text-gray-300 leading-relaxed px-2 xl:px-0"
          >
            I&apos;m <span className="text-orange-500 font-medium">Usman Ali</span>, a Full Stack Developer experienced in building scalable applications. From engineering ERP dashboards to deploying robust architectures, I focus on creating responsive and user-centric digital experiences.
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

        {/* Right Info Tabs */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] min-h-max xl:h-[480px] pb-8 xl:pb-0"
        >
          {/* Tabs */}
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 overflow-x-auto whitespace-nowrap scrollbar-hide w-full justify-center xl:justify-start">
            {aboutData.map((item, itemI) => (
              <button
                key={itemI}
                onClick={() => setIndex(itemI)}
                className={`cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 transition-all duration-300 ${index === itemI
                  ? "text-accent after:w-full after:bg-accent"
                  : "text-white/70 hover:text-white/90"
                  }`}
                aria-pressed={index === itemI}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Dynamic Info */}
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start xl:overflow-y-auto pr-2 custom-scrollbar">
            {aboutData[index].info.map((item, itemI) => (
              <motion.div
                key={`${index}-${itemI}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: itemI * 0.05, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
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
                      <motion.div
                        key={skillI}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: (itemI * 0.05) + (skillI * 0.02), duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="flex items-center gap-x-2 bg-white/10 hover:bg-white/15 px-2 py-1 rounded text-[11px] md:text-xs text-white transition-colors duration-200"
                      >
                        {skill.Icon && <skill.Icon className="text-accent" />}
                        <span>{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;