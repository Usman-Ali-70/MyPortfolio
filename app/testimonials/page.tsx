"use client";

import { motion } from "framer-motion";
import TestimonialSlider, { Testimonial } from "@/components/TestimonialSlider";
import { fadeIn } from "@/variants";

// Sample testimonials data
export const testimonialsData: Testimonial[] = [
  {
    name: "Ahmed Raza",
    position: "Founder & CEO",
    company: "Sheikh Jee Garments",
    message:
      "Working with Usman Ali was a great experience! He developed our full e-commerce website with top-notch quality and excellent speed. Communication was smooth and professional throughout.",
    image: "/t-avt-1.png",
  },
  {
    name: "Hina Tariq",
    position: "Project Manager",
    company: "Innovatechstar",
    message:
      "Usman is a talented full stack developer who understands both design and functionality. His ability to translate our ideas into an intuitive, modern interface was impressive.",
    image: "/t-avt-2.png",
  },
  {
    name: "Ali Nawaz",
    position: "IT Head",
    company: "Universal Aerospace Systems",
    message:
      "Usman improved our internal asset tracking system significantly. His technical understanding and proactive problem-solving made our operations faster and more efficient.",
    image: "/t-avt-3.png",
  },
  {
    name: "Zainab Khan",
    position: "Freelance Client",
    company: "Private Project",
    message:
      "I hired Usman for a personal portfolio website, and I’m extremely happy with the result. The site looks beautiful, performs smoothly, and was delivered on time!",
    // no image, will use default
  },
  {
    name: "Bilal Ahmed",
    position: "Startup Founder",
    company: "TechBridge PK",
    message:
      "Usman Ali has great command over Next.js and modern web stacks. He built our MVP in record time and added creative touches that made the product stand out.",
    // no image, will use default
  },
];

const TestimonialsPage = () => {
  return (
    <div className="h-screen bg-primary/30 flex items-center text-center overflow-hidden">
      <div className="container mx-auto h-full flex flex-col justify-center">
        {/* Title */}
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-8 xl:mb-0"
        >
          What <span className="text-accent">clients say</span>.
        </motion.h2>

        {/* Slider */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <TestimonialSlider testimonials={testimonialsData} />
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
