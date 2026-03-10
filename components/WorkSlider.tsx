"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

// TypeScript interface
export interface Project {
  title: string;
  description: string;
  techStack: string[];
  image?: string;
  link?: string;
}

interface WorkSliderProps {
  projects: Project[];
}

const WorkSlider: React.FC<WorkSliderProps> = ({ projects }) => {
  // Group projects into chunks of 4 for the 2x2 grid
  const projectChunks = [];
  for (let i = 0; i < projects.length; i += 4) {
    projectChunks.push(projects.slice(i, i + 4));
  }

  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[320px] sm:h-[480px]"
    >
      {projectChunks.map((chunk, chunkIdx) => (
        <SwiperSlide key={chunkIdx}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
            {chunk.map((project, projectIdx) => (
              <div
                key={projectIdx}
                className="relative rounded-xl overflow-hidden flex items-center justify-center group bg-black/40 border border-white/5"
              >
                {/* Image Container */}
                <div className="flex items-center justify-center relative overflow-hidden group w-full h-full aspect-video">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-1000 ease-premium group-hover:scale-110"
                      priority={chunkIdx === 0}
                      quality={85}
                    />
                  ) : (
                    /* Premium Mesh Gradient Fallback */
                    <div className="w-full h-full bg-gradient-to-br from-accent/20 via-[#1a1433] to-accent/10 flex flex-col items-center justify-center p-4 text-center transition-transform duration-700 group-hover:scale-105">
                      <div className="text-white/5 text-6xl sm:text-8xl font-black absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden uppercase">
                        {project.title.charAt(0)}
                      </div>

                      <h3 className="text-xs sm:text-base font-bold text-white relative z-10 mb-1">
                        {project.title}
                      </h3>

                      <div className="flex flex-wrap justify-center gap-1 sm:gap-2 relative z-10">
                        {project.techStack.slice(0, 3).map((tech, i) => (
                          <span key={i} className="text-[8px] sm:text-[10px] px-2 py-0.5 bg-accent/20 border border-accent/30 rounded-full text-white/80">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Overlay Gradient on Hover - Adjusted to match your accent theme */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-[#1a1433]/90 via-accent/40 to-[#1a1433]/90 opacity-0 group-hover:opacity-90 transition-all duration-700 ease-premium z-20"
                    aria-hidden="true"
                  />

                  {/* Hover Title Section */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-30 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-premium">
                    <div className="text-center px-4 mb-4 translate-y-10 group-hover:translate-y-0 transition-all duration-700 ease-premium">
                      <h4 className="text-white font-bold text-sm sm:text-lg mb-1">{project.title}</h4>
                      <p className="hidden sm:block text-white/70 text-[10px] md:text-xs line-clamp-2 max-w-[200px] mx-auto">
                        {project.description}
                      </p>
                    </div>

                    {project.link && (
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="flex items-center gap-x-2 text-[10px] sm:text-[12px] tracking-[0.2em] text-white uppercase bg-accent/80 hover:bg-accent px-4 py-2 rounded-full transition-all duration-500 ease-premium translate-y-10 group-hover:translate-y-0"
                      >
                        <span>Live Project</span>
                        <BsArrowRight className="text-lg" />
                      </Link>
                    )}
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