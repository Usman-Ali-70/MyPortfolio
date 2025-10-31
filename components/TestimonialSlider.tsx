"use client";

import React from "react";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// TypeScript interface for testimonials
export interface Testimonial {
  name: string;
  position: string;
  company?: string;
  message: string;
  image?: string; // optional, can be missing
}

// Props interface
interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({ testimonials }) => {
  const defaultAvatar = "/default-avatar.png"; // default image if none provided

  return (
    <Swiper
      navigation
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonials.map((person, i) => (
        <SwiperSlide key={i}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-6 sm:px-12 md:px-16">
            {/* avatar, name, position */}
            <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center">
                {/* avatar */}
                <div className="mb-2 mx-auto">
                  <Image
                    src={person.image || defaultAvatar}
                    width={100}
                    height={100}
                    alt={`${person.name} profile photo`}
                    className="rounded-full border border-white/20"
                    priority
                  />
                </div>

                {/* name */}
                <div className="text-lg font-semibold text-white">{person.name}</div>

                {/* position */}
                <div className="text-[12px] uppercase font-extralight tracking-widest text-white/70">
                  {person.position}
                </div>
              </div>
            </div>

            {/* quote & message */}
            <div className="flex-1 flex flex-col justify-center relative xl:pl-20 before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px]">
              {/* quote icon */}
              <div className="mb-4">
                <FaQuoteLeft
                  className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0"
                  aria-hidden
                />
              </div>

              {/* message */}
              <div className="xl:text-lg text-center md:text-left text-white/80 leading-relaxed">
                {person.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
