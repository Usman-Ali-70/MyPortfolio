"use client";

import React from "react";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export interface Testimonial {
  name: string;
  position: string;
  company?: string;
  message: string;
  image?: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({ testimonials }) => {
  return (
    <Swiper
      navigation={true}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }}
      autoHeight={true}
      modules={[Navigation, Pagination, Autoplay]}
      className="testimonial-slider min-h-[320px] md:min-h-[400px] xl:h-[480px]"
      style={{
        // @ts-ignore
        "--swiper-navigation-color": "#F13024",
        "--swiper-pagination-color": "#F13024",
      }}
    >
      {testimonials.map((person, i) => (
        <SwiperSlide key={i}>
          <div className="flex flex-col h-full justify-center px-4 md:px-20 py-6 md:py-8">

            {/* 1. Minimalist Branding at the Top (Moved Upper) */}
            <div className="flex items-center gap-x-4 border-b border-white/10 pb-6 mb-6">
              {/* Small Avatar */}
              <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border border-white/20 shadow-lg">
                {person.image ? (
                  <Image
                    src={person.image}
                    fill
                    alt={person.name}
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-accent/20 flex items-center justify-center text-accent text-sm font-bold uppercase">
                    {person.name.charAt(0)}
                  </div>
                )}
              </div>

              {/* Text Info */}
              <div className="flex flex-col text-left">
                <span className="text-sm md:text-base font-bold text-white tracking-tight">
                  {person.name}
                </span>
                <span className="text-[10px] md:text-[11px] uppercase font-semibold tracking-[1.5px] text-accent/80 block mt-0.5">
                  {person.position}
                </span>
              </div>
            </div>

            {/* 2. Primary Content: The Message */}
            <div className="flex-1 group">
              <div className="mb-4 opacity-10">
                <FaQuoteLeft
                  className="text-3xl text-white mx-auto md:mx-0"
                  aria-hidden="true"
                />
              </div>
              <p className="text-[15px] md:text-lg lg:text-xl text-center md:text-left text-white/90 leading-relaxed font-light italic pr-6 group-hover:text-white transition-colors duration-500">
                &ldquo;{person.message}&rdquo;
              </p>
            </div>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;