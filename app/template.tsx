"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { usePathname } from "next/navigation";
import Transition from "@/components/Transition";

// Define a premium, fluid animation sequence
const pageVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    // Optional: add a tiny scale effect for depth -> scale: 0.98
  },
  enter: {
    opacity: 1,
    y: 0,
    // scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const // Custom decelerating curve for a native app feel
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1]
    }
  },
};

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    // mode="wait" ensures the exit animation finishes before the new page enters
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        className="h-full w-full"
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