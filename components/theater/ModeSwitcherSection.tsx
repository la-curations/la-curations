"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import PersonalizedCinemaCompanion from "./PersonalizedCinemaCompanion";
import AIFeatures from "./AIFeatures";
import MoreFeatures from "./MoreFeatures";
import FreeMoviesShowcase from "./FreeMoviesShowcase";
import LiveTvShowcase from "./LiveTvShowcase";

type Mode = "theater" | "free" | "live";

interface SwitcherItem {
  key: Mode;
  label: string;
  image: string;
  width: number;
  height: number;
}

const modes: SwitcherItem[] = [
  {
    key: "theater",
    label: "Theater",
    image: "/assets/images/theater/theaterswitch.webp",
    width: 96,
    height: 32,
  },
  {
    key: "free",
    label: "Free",
    image: "/assets/images/theater/freeswitch.webp",
    width: 76,
    height: 26,
  },
  {
    key: "live",
    label: "Live",
    image: "/assets/images/theater/liveswitch.webp",
    width: 76,
    height: 26,
  },
];

const ModeSwitcherSection = () => {
  const [activeMode, setActiveMode] = useState<Mode>("theater");
  const switcherRef = useRef<HTMLDivElement>(null);

  const handleSelectMode = (nextMode: Mode) => {
    setActiveMode(nextMode);
    // Smoothly ensure the user is viewing the top of the mode content if scrolled past
    if (switcherRef.current) {
      const rect = switcherRef.current.getBoundingClientRect();
      if (rect.top < 0) {
        window.scrollTo({
          top: window.scrollY + rect.top - 10,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="relative w-full">
      {/* Sticky Docking Switcher Pill */}
      <div
        ref={switcherRef}
        className="sticky top-0 z-40 w-full py-4 transition-all"
      >
        <div className="max-w-2xl mx-auto px-4 flex flex-col items-center justify-center">
          {/* Main Capsule Track */}
          <div className="flex items-center justify-between p-1.5 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md shadow-2xl gap-1 sm:gap-3 w-full max-w-md">
            {modes.map((item) => {
              const isActive = activeMode === item.key;
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => handleSelectMode(item.key)}
                  className={`flex-1 py-2.5 px-3 sm:px-5 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${isActive
                    ? "bg-white/[0.12] border border-white/20 shadow-lg shadow-black/40 scale-[1.02]"
                    : "hover:bg-white/[0.04] opacity-50 hover:opacity-80"
                    }`}
                  aria-label={`Switch to ${item.label} mode`}
                >
                  <Image
                    src={item.image}
                    alt={item.label}
                    width={item.width}
                    height={item.height}
                    className="object-contain transition-opacity duration-300"
                    style={{
                      height: item.height,
                      width: "auto",
                      maxHeight: 28,
                      opacity: isActive ? 1 : 0.6,
                    }}
                    priority
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Dynamic Content Switching */}
      <div className="relative w-full">
        {activeMode === "theater" && (
          <div key="theater" className="transition-opacity duration-300">
            <PersonalizedCinemaCompanion />
            <AIFeatures />
            <MoreFeatures />
          </div>
        )}

        {activeMode === "free" && (
          <div key="free" className="transition-opacity duration-300">
            <FreeMoviesShowcase />
          </div>
        )}

        {activeMode === "live" && (
          <div key="live" className="transition-opacity duration-300">
            <LiveTvShowcase />
          </div>
        )}
      </div>
    </div>
  );
};

export default ModeSwitcherSection;
