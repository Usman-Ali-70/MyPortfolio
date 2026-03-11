"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { fadeIn } from "@/variants";

import { sendEmail } from "../actions/sendEmail";

const ContactPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setStatusMessage(null);

    try {
      const formData = new FormData(event.currentTarget);
      const result = await sendEmail(formData);

      if (result.success) {
        setStatusMessage("Success! Your message has been sent to Usman.");
        (event.target as HTMLFormElement).reset();
      } else {
        setStatusMessage(result.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatusMessage("Network error. Please try again later.");
    } finally {
      setIsLoading(false);
      setTimeout(() => setStatusMessage(null), 5000);
    }
  };

  return (
    <div className="h-full bg-primary/30 overflow-y-auto overflow-x-hidden scrollbar-hide overscroll-none pt-24 pb-28 xl:pt-0 xl:pb-0 flex items-start xl:items-center">
      <div className="container mx-auto text-center xl:text-left flex items-center justify-center px-4 md:px-0 py-8">
        {/* Text & Form */}
        <div className="flex flex-col w-full max-w-[700px]">

          {/* Title */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-[28px] md:text-5xl font-semibold text-center mb-8 md:mb-12"
          >
            Let&apos;s <span className="text-accent">connect.</span>
          </motion.h2>

          {/* Contact Form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-4 md:gap-6 w-full mx-auto"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            {/* Row 1: Name & Email */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-x-6 w-full">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input"
                disabled={isLoading}
                required
                aria-label="Your name"
                id="contact-name"
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                className="input"
                disabled={isLoading}
                required
                aria-label="Your email address"
                id="contact-email"
              />
            </div>

            {/* Row 2: Phone & Subject */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-x-6 w-full">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="input"
                disabled={isLoading}
                required
                aria-label="Your mobile number"
                id="contact-phone"
              />
              <input
                type="text"
                name="subject_topic"
                placeholder="Subject"
                className="input"
                disabled={isLoading}
                required
                aria-label="Email subject"
                id="contact-subject"
              />
            </div>

            {/* Message */}
            <textarea
              name="message"
              placeholder="Message..."
              className="textarea resize-none"
              disabled={isLoading}
              required
              aria-label="Your message"
              id="contact-message"
              rows={5}
            />

            {/* Status Message Display */}
            {statusMessage && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-sm ${statusMessage.includes("Success") ? "text-green-400" : "text-red-400"} text-center`}
              >
                {statusMessage}
              </motion.div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className={`btn relative rounded-full border border-white/50 max-w-[170px] px-8 py-3 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group mx-auto md:mx-0 ${isLoading ? "opacity-60 cursor-not-allowed" : ""
                }`}
              disabled={isLoading}
              id="contact-submit"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 font-medium">
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