"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { fadeIn } from "@/variants";

const ContactPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const myForm = event.currentTarget;
      const formData = new FormData(myForm);

      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      alert("Thank you! I will get back to you as soon as possible.");
      myForm.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen bg-primary/30 overflow-hidden">
      <div className="container mx-auto h-full text-center xl:text-left flex items-center justify-center">
        {/* ===== Text & Form ===== */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* ===== Title ===== */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let’s <span className="text-accent">connect.</span>
          </motion.h2>

          {/* ===== Contact Form ===== */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            onSubmit={handleSubmit}
            autoComplete="off"
            data-netlify="true"
          >
            {/* Name & Email */}
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input"
                disabled={isLoading}
                required
                aria-label="Your name"
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                className="input"
                disabled={isLoading}
                required
                aria-label="Your email address"
              />
            </div>

            {/* Subject */}
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input"
              disabled={isLoading}
              required
              aria-label="Email subject"
            />

            {/* Message */}
            <textarea
              name="message"
              placeholder="Message..."
              className="textarea"
              disabled={isLoading}
              required
              aria-label="Your message"
              rows={5}
            />

            {/* Submit Button */}
            <button
              type="submit"
              className={`btn relative rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group ${
                isLoading ? "opacity-60 cursor-not-allowed" : ""
              }`}
              disabled={isLoading}
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                {isLoading ? "Sending..." : "Let's talk"}
              </span>

              <BsArrowRight
                className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                aria-hidden="true"
              />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;