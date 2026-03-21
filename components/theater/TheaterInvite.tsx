"use client";

import Image from "next/image";
import React from "react";
import { Waterfall } from "next/font/google";

const waterFall = Waterfall({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-waterfall",
  display: "swap",
  preload: true,
});

const TheaterInvite = () => {
  return (
    <div
      className={`relative min-h-screen bg-[#00000a] text-white flex flex-col items-center justify-center overflow-hidden ${waterFall.variable} font-sans`}
    >
      {/* Subtle Mesh Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <Image
          src="/assets/images/theater/mesh.webp"
          alt=""
          fill
          className="object-cover scale-110"
        />
      </div>

      <div className="z-10 flex flex-col items-center gap-10 max-w-lg w-full px-6 text-center">
        {/* Title Section */}
        <div className="flex flex-col items-center">
          <p
            className={`${waterFall.className} text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#8aabff] to-[#f863da] mb-1`}
          >
            Get
          </p>
          <div className="relative w-[280px] lg:w-[400px]">
            <Image
              src="/assets/images/theater/theater-title.webp"
              alt="THEATER"
              width={400}
              height={100}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* Play Store CTA */}
        <div className="transition-transform hover:scale-105 active:scale-95 duration-200 cursor-pointer">
          <a
            href="https://play.google.com/store/apps/details?id=com.lacurations.theater"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/images/theater/Play.png"
              alt="Get it on Google Play"
              width={200}
              height={58}
              className="w-[180px] lg:w-[200px] h-auto"
            />
          </a>
        </div>
      </div>

      {/* Branded Footer */}
      <div className="absolute bottom-10 left-0 right-0 flex items-center justify-center">
        <Image
          src="/assets/images/theater/SplashSignature.png"
          alt="curated by LA"
          width={110}
          height={30}
        />
      </div>
    </div>
  );
};

export default TheaterInvite;
