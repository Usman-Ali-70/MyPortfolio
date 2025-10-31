"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const HeaderLogo: React.FC = () => {
  return (
    <header className="absolute z-30 w-full px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* Logo / Animated Name */}
          <Link href="/" aria-label="Home">
            <motion.h1
              className="text-3xl font-bold text-white select-none"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="text-orange-500">Usman</span>{" "}
              <span className="font-light text-gray-300">Ali</span>
              <span className="text-red-500">.</span>
            </motion.h1>
          </Link>

          {/* Optional: Social links placeholder */}
          <div className="flex gap-4">
            {/* Replace with your Socials component */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderLogo;
