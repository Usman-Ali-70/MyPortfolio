"use client";

import { motion } from "framer-motion";
import ParticlesContainer from "@/components/ParticlesContainer";
import ProjectsBtn from "@/components/ProjectsBtn";
import Avatar from "@/components/Avatar";
import { fadeIn } from "@/variants";

const Home = () => {
  return (
    <div className="relative bg-primary/60 h-screen overflow-hidden">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto px-4">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 text-white font-bold"
          >
            Transforming Ideas <br /> Into{" "}
            <span className="text-accent text-orange-500">Digital Reality</span>
          </motion.h1>

          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-gray-300"
          >
            I’m <span className="text-orange-500 font-semibold">Usman Ali</span>, a
            Full Stack Developer passionate about building modern, scalable, and
            high-performance web applications with Next.js, React, and Node.js.
            I love transforming ideas into powerful digital realities.
          </motion.p>

          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>

          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      <div className="w-[1280px] h-full absolute right-0 bottom-0">
  <div
    role="img"
    className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0 opacity-50"
    aria-hidden="true"
  />

  <ParticlesContainer />

  <motion.div
  variants={fadeIn("up", 0.5)}
  initial="hidden"
  animate="show"
  exit="hidden"
  transition={{ duration: 1, ease: "easeInOut" }}
  className="absolute -bottom-24 lg:top-80 lg:right-[15%] w-full max-w-[300px] lg:max-w-[400px] xl:max-w-[570px]"
>
  <Avatar />
</motion.div>
</div>
    </div>
  );
};

export default Home;