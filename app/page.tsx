"use client";

import { motion } from "framer-motion";
import ParticlesContainer from "@/components/ParticlesContainer";
import ProjectsBtn from "@/components/ProjectsBtn";
import Avatar from "@/components/Avatar";
import { fadeIn } from "@/variants";

const Home = () => {
  return (
    <div className="relative bg-primary/60 h-screen w-full overflow-hidden flex flex-col xl:flex-row">

      {/* Backgrounds */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          role="img"
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0 opacity-50"
          aria-hidden="true"
        />
        <ParticlesContainer />
      </div>

      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 absolute inset-0 z-10 pointer-events-none" />

      {/* Main Content Area - Split cleanly into two halves on mobile, two sides on desktop */}

      {/* 1. Text Half */}
      <div className="w-full xl:w-1/2 h-[50%] xl:h-full relative z-20 flex flex-col justify-start xl:justify-center items-center xl:items-start text-center xl:text-left pt-28 sm:pt-36 xl:pt-40 px-4 sm:px-10 xl:pl-[10%] content-start">

        {/* Premium Background Glow Effect behind text */}
        <div className="absolute top-[30%] left-[-10%] xl:left-[5%] w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-accent/20 rounded-full blur-[120px] pointer-events-none z-0" />

        <motion.h1
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-[36px] sm:text-[42px] md:text-6xl xl:text-[72px] font-bold leading-[1.1] mb-4 xl:mb-6 relative z-10 tracking-tight"
        >
          Transforming Ideas <br /> Into{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-accent">Digital Reality.</span>
        </motion.h1>

        <motion.p
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-6 xl:mb-12 text-[14px] md:text-base xl:text-lg text-gray-300 leading-relaxed font-light relative z-10"
        >
          I’m <span className="text-orange-500 font-semibold">Usman Ali</span>, a
          Full Stack Developer specializing in modern architectures. From engineering robust ERP dashboards to deploying scalable e-commerce platforms, I build secure, high-performance web applications that drive real business results.
        </motion.p>

        <motion.div
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex justify-center xl:justify-start w-full relative z-30"
        >
          <ProjectsBtn />
        </motion.div>
      </div>

      {/* 2. Avatar Half - Exact placement classes preserved to stay put during scroll/resize */}
      <div className="w-full xl:w-1/2 h-full absolute bottom-0 xl:relative z-0 flex justify-center xl:justify-end items-end pb-0 pointer-events-none">
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full max-w-[280px] sm:max-w-[340px] md:max-w-[440px] xl:max-w-[550px] 2xl:max-w-[650px] absolute bottom-0 md:bottom-2 xl:bottom-0 -translate-x-1/2 xl:translate-x-0 xl:left-auto xl:right-[5%] 2xl:right-[10%] drop-shadow-2xl transition-all duration-300 z-0 opacity-40 xl:opacity-100"
        >
          <Avatar />
        </motion.div>
      </div>

    </div>
  );
};

export default Home;