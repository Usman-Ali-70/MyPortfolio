import { Variants } from "framer-motion";

type Direction = "up" | "down" | "left" | "right";

// Premium, fluid animation curve
const premiumCurve = [0.22, 1, 0.36, 1] as const;

export const fadeIn = (direction: Direction, delay: number): Variants => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1, // Adjusted for premium feel
        delay,
        ease: premiumCurve,
      },
    },
  };
};
