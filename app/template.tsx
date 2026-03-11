"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { usePathname } from "next/navigation";
import Transition from "@/components/Transition";

// Premium, fluid animation sequence
const pageVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const
    }
  },
  exit: {
    opacity: 0,
    y: -15,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1]
    }
  },
};

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        className="h-full w-full overflow-hidden"
        variants={pageVariants}
        initial="hidden"
        animate="enter"
        exit="exit"
      >
        {/* Page transition overlay wipe effect */}
        <Transition />

        {/* Actual Page content */}
        {children}
      </motion.div>
    </AnimatePresence>
  );
}