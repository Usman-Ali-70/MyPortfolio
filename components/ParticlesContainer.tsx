"use client";

import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

const ParticlesContainer: React.FC = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 w-full h-full pointer-events-none"
      options={{
        background: { color: { value: "" } },
        fpsLimit: 60,
        fullScreen: { enable: false },
        smooth: true,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            resize: { enable: true },
          },
          modes: {
            repulse: { distance: 150, duration: 0.7, speed: 1 },
          },
        },
        particles: {
          color: { value: ["#e68e2e", "#ff6b35", "#f7931e"] },
          links: {
            color: "#ffd700",
            distance: 180,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.2,
            direction: "none",
            random: false,
            straight: false,
            outModes: { default: "bounce" },
          },
          number: {
            value: 300,
            density: { enable: true, area: 1200 },
          },
          opacity: {
            value: 0.7,
            random: true,
            anim: { enable: true, speed: 0.8, opacity_min: 0.3, sync: false },
          },
          shape: { type: "circle" },
          size: {
            value: { min: 1.5, max: 4 },
            random: true,
          },
          rotate: {
            value: 0,
            random: true,
            direction: "random",
            animation: { enable: true, speed: 2.5, sync: false },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesContainer;