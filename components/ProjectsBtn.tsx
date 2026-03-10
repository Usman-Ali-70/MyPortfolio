"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn: React.FC = () => {
  return (
    <div className="mx-auto xl:mx-0 relative z-30">
      <Link href="/work" aria-label="View my work">
        <motion.div
          /* Entry animation */
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
          }}
          /* Interactive hover effect */
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group cursor-pointer"
        >
          {/* Rotating Text Image */}
          <Image
            src="/rounded-text.png"
            alt="Circular text design"
            width={141}
            height={148}
            priority
            quality={85}
            /* animate-spin-slow should be defined in tailwind.config.js */
            className="animate-spin-slow w-full max-w-[141px] pointer-events-none select-none opacity-80 group-hover:opacity-100 transition-opacity duration-700"
            style={{ height: "auto" }}
          />

          {/* Icon with enhanced hover animation */}
          <HiArrowRight
            className="absolute text-4xl group-hover:translate-x-3 group-hover:text-accent transition-all duration-500 ease-premium"
            aria-hidden="true"
          />
        </motion.div>
      </Link>
    </div>
  );
};

export default ProjectsBtn;