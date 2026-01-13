"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import theaterAI from "../../public/assets/images/theater/TheaterAI.webp";
import { Freehand } from "next/font/google";
import { ChevronLeft, ChevronRight } from "lucide-react";

const freehand = Freehand({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-freehand",
  display: "swap",
  preload: true,
});

const carouselItems = [
  {
    image: "/assets/images/theater/AI1.webp",
    title: "AI Search Mode",
    description:
      "Search with partial title, story you remember, or whatever. Get the Best Match and more.",
  },
  {
    image: "/assets/images/theater/AI2.webp",
    title: "My Next Watch",
    description: (
      <>
        What is your{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#AA4EFF] to-[#FF5E87] font-semibold">
          cinema taste
        </span>
        ? Don't tell us. Theater AI will find and you will get the
        recommendations of your taste.
      </>
    ),
  },
  {
    image: "/assets/images/theater/AI3.webp",
    title: "Watchlist Insights",
    description:
      "Get insights from all the watchlists in the app, find the hidden gems, discover the pattern and more.",
  },
  {
    image: "/assets/images/theater/AI4.webp",
    title: "AI Compare",
    description:
      "Compare all movies or series in your watchlists and get the Best Match and the reasons why.",
  },
];

const AIFeatures = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setActiveIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleIndicatorClick = (index: number) => {
    setActiveIndex(index);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  return (
    <section className="relative w-full py-20 lg:py-32 px-4 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="relative mb-4 flex items-center justify-center">
            <span
              className="bg-clip-text text-transparent bg-gradient-to-r from-[#AA4EFF] to-[#FF5E87] opacity-20 font-black text-[55px] lg:text-[150px] z-0 relative"
              aria-hidden="true"
            >
              AI Features
            </span>
            <Image
              src="/assets/images/theater/mesh.webp"
              alt="Mesh"
              width={800}
              height={500}
              className="w-120 h-auto object-contain absolute z-1"
            />
            <span
              className={`${freehand.className} absolute bg-clip-text text-transparent text-3xl lg:text-6xl bg-gradient-to-r from-[#AA4EFF] to-[#FF5E87] z-2`}
            >
              with
            </span>
          </h2>
          <div className="relative z-2 flex gap-2 items-center justify-center self-center border-2 border-[#ff5ef4] rounded-3xl p-2 bg-[#000000] -mt-7 lg:-mt-11">
            {carouselItems.map((_, index) => (
              <span
                key={index}
                onClick={() => handleIndicatorClick(index)}
                className={`rounded-2xl cursor-pointer transition-all duration-300 ${
                  index === activeIndex
                    ? "w-5 h-5 bg-gradient-to-r from-[#AA4EFF] to-[#FF5E87]"
                    : "w-3 h-3 bg-white opacity-30"
                }`}
              ></span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-0 w-24 lg:w-50 h-full bg-gradient-to-r from-[#000013] to-transparent z-2"></div>
          <div className="absolute right-0 w-24 lg:w-50 h-full bg-gradient-to-l from-[#000013] to-transparent z-2"></div>
          {/* Navigation buttons for large screens - positioned on sides */}
          <button
            onClick={handlePrev}
            className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-20 p-3 rounded-full bg-[#ffffff1d] border-[#ffffff16] border hover:opacity-80 transition-opacity"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={handleNext}
            className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-20 p-3 rounded-full bg-[#ffffff1d] border-[#ffffff16] border hover:opacity-80 transition-opacity"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <div
            className="mx-auto mt-10 lg:mt-30 relative overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {carouselItems.map((item, index) => (
                <div
                  key={index}
                  className="min-w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-0"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={300}
                    height={300}
                    className="max-w-[80%] mx-auto object-contain relative z-10"
                  />

                  <div className="max-w-[80%] mx-auto">
                    <p className="text-2xl lg:text-4xl text-center lg:text-left font-extrabold mt-2 bg-clip-text text-transparent bg-gradient-to-l from-[#ffffff18] to-white">
                      {item.title}
                    </p>
                    <p className="text-lg text-center lg:text-left lg:text-2xl text-[#a5a1d2] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons for small screens - positioned below */}
          <div className="flex lg:hidden gap-4 justify-center mt-8">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-[#ffffff1d] border-[#ffffff16] border hover:opacity-80 transition-opacity"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-[#ffffff1d] border-[#ffffff16] border hover:opacity-80 transition-opacity"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFeatures;
