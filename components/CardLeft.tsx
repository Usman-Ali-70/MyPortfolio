"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const CardLeft: React.FC = () => {
  return (
    <motion.div
      variants={fadeIn("right", 0.3)}
      initial="hidden"
      animate="show"
      exit="hidden"
      /* Hover scale and subtle tilt for a high-end interactive feel */
      whileHover={{ scale: 1.02, translateY: -5 }}
      className="relative group w-full max-w-[350px] p-[1px] rounded-2xl overflow-hidden bg-gradient-to-br from-white/20 to-transparent"
    >
      {/* Animated background glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Main Card Content */}
      <div className="relative bg-[#1a1433]/80 backdrop-blur-md p-6 rounded-[15px] flex flex-col gap-y-4">
        {/* Decorative Top Icon/Element */}
        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center border border-accent/20">
          <span className="text-accent text-xl font-bold">!</span>
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-y-2">
          <h3 className="text-xl font-semibold text-white group-hover:text-accent transition-colors duration-300">
            Featured Insight
          </h3>
          <p className="text-sm text-white/60 leading-relaxed">
            Specializing in high-performance architectures and seamless user 
            experiences across the full MERN stack.
          </p>
        </div>

        {/* Subtle Bottom Accent */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mt-2" />
        
        <div className="flex items-center gap-x-2 text-xs font-medium text-accent uppercase tracking-widest">
          Explore More <span>→</span>
        </div>
      </div>
    </motion.div>
  );
};

export default CardLeft;