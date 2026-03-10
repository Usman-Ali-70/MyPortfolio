"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";
import { getIcon } from "@/lib/iconMapper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

export interface ServiceItem {
  icon?: string;
  title: string;
  description: string;
}

interface ServiceSliderProps {
  services: ServiceItem[];
}

const ServiceSlider: React.FC<ServiceSliderProps> = ({ services }) => {
  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 15 },
        640: { slidesPerView: 2, spaceBetween: 15 },
        1024: { slidesPerView: 3, spaceBetween: 20 },
      }}
      pagination={{ clickable: true }}
      navigation={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }}
      modules={[FreeMode, Pagination, Autoplay, Navigation]}
      freeMode={true}
      className="h-[300px] sm:h-[450px] service-slider"
    >
      {services.map((item, i) => {
        const Icon = getIcon(item.icon);
        return (
          <SwiperSlide key={i}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max min-h-[200px] sm:min-h-[280px] rounded-2xl border border-white/10 px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.25)] hover:border-accent/50 transition-all duration-300 relative overflow-hidden backdrop-blur-sm">

              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="text-4xl text-accent mb-4 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(241,48,36,0.5)]">
                <Icon aria-hidden="true" />
              </div>

              <div className="flex-1 mb-4 relative z-10">
                <div className="mb-2 text-lg font-bold text-white tracking-wide">
                  {item.title}
                </div>
                <p className="max-w-[350px] leading-relaxed text-white/60 text-[14px] md:text-base font-light">
                  {item.description}
                </p>
              </div>

              <div className="text-3xl relative z-10">
                <RxArrowTopRight
                  className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                  aria-hidden="true"
                />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;