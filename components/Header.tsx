"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const HeaderLogo: React.FC = () => {
  return (
    <header className="absolute z-30 w-full px-4 md:px-16 xl:px-0 xl:h-[90px] flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-1 md:gap-y-6 py-4 md:py-8">

          {/* Logo / Animated Name */}
          <Link href="/" aria-label="Home" className="group">
            <motion.h1
              className="text-[26px] md:text-3xl font-bold select-none tracking-tight cursor-pointer"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              {/* "Usman" - Starts Orange, turns Gray on hover */}
              <span className="text-red-500 group-hover:text-gray-300 transition-all duration-500">
                Usman
              </span>

              {/* "Ali" - Starts Gray, turns Orange on hover */}
              <span className="font-light text-gray-300 ml-2 group-hover:text-red-500 transition-all duration-500">
                Ali
              </span>

              {/* The Dot - Stays Red but pulses on hover */}
              <span className="text-red-500 group-hover:animate-ping ml-1">.</span>
            </motion.h1>
          </Link>

          {/* Professional Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center lg:items-end gap-y-1"
          >
            <div className="flex items-center gap-x-3">
              <div className="h-[1px] w-8 bg-orange-500/50 hidden lg:block"></div>
              <p className="text-[10px] md:text-[11px] uppercase tracking-[3px] text-white/50 font-medium">
                Full Stack Developer
              </p>
            </div>
            {/* Sub-text using your professional email from the info provided */}
            <p className="text-[10px] text-white/20 font-light hidden lg:block tracking-wider">
              usman.ali.dev@outlook.com
            </p>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default HeaderLogo;