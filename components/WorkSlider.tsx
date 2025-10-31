"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

// --- TypeScript Interfaces ---
interface WorkImage {
  title: string;
  path: string;
  link: string;
}

interface WorkSlide {
  images: WorkImage[];
}

// --- Work Slider Data (replace with your real projects later) ---
const workSlides: { slides: WorkSlide[] } = {
  slides: [
    {
      images: [
        {
          title: "E-commerce Web App",
          path: "/thumb1.jpg",
          link: "https://example.com",
        },
        {
          title: "Portfolio Website",
          path: "/thumb2.jpg",
          link: "https://example.com",
        },
        {
          title: "Inventory System",
          path: "/thumb3.jpg",
          link: "https://example.com",
        },
        {
          title: "Business Dashboard",
          path: "/thumb4.jpg",
          link: "https://example.com",
        },
      ],
    },
    {
      images: [
        {
          title: "CRM Application",
          path: "/thumb4.jpg",
          link: "https://example.com",
        },
        {
          title: "Landing Page",
          path: "/thumb1.jpg",
          link: "https://example.com",
        },
        {
          title: "Restaurant System",
          path: "/thumb2.jpg",
          link: "https://example.com",
        },
        {
          title: "Education Platform",
          path: "/thumb3.jpg",
          link: "https://example.com",
        },
      ],
    },
  ],
};

const WorkSlider: React.FC = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {slide.images.map((image, imageI) => (
              <div
                key={imageI}
                className="relative rounded-lg overflow-hidden flex items-center justify-center group"
              >
                {/* Image Container */}
                <div className="flex items-center justify-center relative overflow-hidden group">
                  {/* Image */}
                  <Image
                    src={image.path}
                    alt={image.title}
                    width={500}
                    height={300}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    priority
                    quality={100}
                  />

                  {/* Overlay Gradient */}
                  <div
                    className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"
                    aria-hidden
                  />

                  {/* Hover Title Section */}
                  <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 xl:group-hover:-translate-y-20 transition-all duration-300">
                    <Link
                      href={image.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center gap-x-2 text-[13px] tracking-[0.2em] text-white uppercase"
                      aria-label={`View live project: ${image.title}`}
                    >
                      <div className="delay-100">LIVE</div>
                      <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        PROJECT
                      </div>
                      <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        <BsArrowRight aria-hidden />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
