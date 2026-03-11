"use client";

import React, { useEffect, useState, useMemo, useCallback } from "react";
import dynamic from "next/dynamic";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine, ISourceOptions, Container } from "@tsparticles/engine";

// Dynamically import Particles to avoid SSR issues
const Particles = dynamic(() => import("@tsparticles/react").then((mod) => mod.Particles), {
  ssr: false,
  loading: () => null,
});

const ParticlesContainer: React.FC = React.memo(() => {
  const [init, setInit] = useState(false);

  // Initialize the engine once on mount
  useEffect(() => {
    let cancelled = false;
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      if (!cancelled) setInit(true);
    });
    return () => { cancelled = true; };
  }, []);

  // Stable callback for loaded event (prevents re-render)
  const particlesLoaded = useCallback(async (container?: Container) => {
    // no-op, but required stable ref
  }, []);

  // Memoizing options prevents unnecessary re-renders and re-initialization
  // IMPORTANT: Speed, density, and colors are EXACTLY preserved from original
  const options: ISourceOptions = useMemo(() => ({
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
        density: {
          enable: true,
          area: 800
        },
      },
      opacity: {
        value: 0.7,
      },
      shape: { type: "circle" },
      size: {
        value: { min: 1.5, max: 4 },
      },
      rotate: {
        value: 0,
        random: true,
        direction: "random",
        animation: { enable: true, speed: 2.5, sync: false },
      },
    },
    detectRetina: true,
  }), []);

  if (!init) return null;

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ contain: "strict" }}>
      <Particles
        id="tsparticles"
        className="w-full h-full"
        options={options}
        particlesLoaded={particlesLoaded}
      />
    </div>
  );
});

ParticlesContainer.displayName = "ParticlesContainer";

export default ParticlesContainer;