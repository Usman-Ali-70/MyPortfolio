"use client";

import React from "react";
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// TypeScript interface for service items
interface ServiceItem {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

// Service data
const serviceData: ServiceItem[] = [
  {
    Icon: RxCrop,
    title: "Branding",
    description: "Creative and strategic brand identity design for your business.",
  },
  {
    Icon: RxPencil2,
    title: "UI/UX Design",
    description: "Designing modern, user-friendly interfaces with seamless experience.",
  },
  {
    Icon: RxDesktop,
    title: "Web Development",
    description: "Building responsive, dynamic web applications using MERN stack.",
  },
  {
    Icon: RxReader,
    title: "Content Creation",
    description: "Professional web copy and engaging digital content writing.",
  },
  {
    Icon: RxRocket,
    title: "SEO Optimization",
    description: "Improving visibility and performance with modern SEO techniques.",
  },
];

const ServiceSlider: React.FC = () => {
  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 15 },
        640: { slidesPerView: 3, spaceBetween: 15 },
      }}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      freeMode
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            {/* Icon */}
            <div className="text-4xl text-accent mb-4">
              <item.Icon aria-hidden />
            </div>

            {/* Title & Description */}
            <div className="mb-8">
              <div className="mb-2 text-lg font-semibold">{item.title}</div>
              <p className="max-w-[350px] leading-normal text-white/70">
                {item.description}
              </p>
            </div>

            {/* Arrow */}
            <div className="text-3xl">
              <RxArrowTopRight
                className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                aria-hidden
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
