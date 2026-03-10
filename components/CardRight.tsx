"use client";

import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { fadeIn } from "@/variants";

const CardRight: React.FC = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.3)}
      initial="hidden"
      animate="show"
      exit="hidden"
      /* Smooth interactive lift on hover */
      whileHover={{ scale: 1.02, translateY: -5 }}
      className="relative group w-full max-w-[350px] p-[1px] rounded-2xl overflow-hidden bg-gradient-to-bl from-accent/30 to-transparent"
    >
      {/* Dynamic accent glow that activates on hover */}
      <div className="absolute inset-0 bg-gradient-to-l from-orange-500/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Main Glassmorphism Container */}
      <div className="relative bg-[#1a1433]/80 backdrop-blur-md p-6 rounded-[15px] flex flex-col gap-y-6">
        
        {/* Header Section */}
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-y-1">
            <h3 className="text-lg font-medium text-white group-hover:text-accent transition-colors duration-300">
              Project Impact
            </h3>
            <p className="text-xs text-white/40 uppercase tracking-widest">
              Live Statistics
            </p>
          </div>
          {/* Decorative pulse dot indicating "Live" */}
          <div className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-y-1">
            <div className="text-2xl font-bold text-white">
              <CountUp start={0} end={15} duration={3} />+
            </div>
            <div className="text-[10px] text-white/50 uppercase font-light tracking-wider">
              Apps Deployed
            </div>
          </div>
          <div className="flex flex-col gap-y-1">
            <div className="text-2xl font-bold text-white">
              <CountUp start={0} end={98} duration={3} />%
            </div>
            <div className="text-[10px] text-white/50 uppercase font-light tracking-wider">
              Client Satisfaction
            </div>
          </div>
        </div>

        {/* Progress Bar Detail */}
        <div className="flex flex-col gap-y-2 mt-2">
          <div className="flex justify-between text-[11px] text-white/60">
            <span>Development Efficiency</span>
            <span className="text-accent">High</span>
          </div>
          <div className="w-full h-[3px] bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "85%" }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="h-full bg-accent"
            />
          </div>
        </div>

        {/* Bottom Tag */}
        <div className="mt-2 flex items-center gap-x-2">
          <span className="px-2 py-1 rounded bg-white/5 text-[9px] text-white/40 border border-white/10">
            Full Stack
          </span>
          <span className="px-2 py-1 rounded bg-white/5 text-[9px] text-white/40 border border-white/10">
            Optimized
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default CardRight;