import React from "react";
import Image from "next/image";
import theaterTitle from "../../public/theater-title.png";
import { Waterfall } from "next/font/google";

const waterFall = Waterfall({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-waterfall",
  display: "swap",
  preload: true,
});

const Hero = () => {
  return (
    <section className="w-screen h-screen bg-[url('/theater-hero.png')] bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col gap-6 text-center items-center justify-center h-full">
        <p
          className={`${waterFall.className} text-4xl lg:text-6xl leading-[1.2] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8aabff] to-[#f863da]`}
        >
          Discover cinema like never before
        </p>
        <Image
          src={theaterTitle}
          alt="Theater Hero"
          className="object-contain w-[90%] lg:w-[50%]"
        />
        <p className="text-xl lg:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#306bff] to-[#ff16d0]">
          AI-Powered Smarter Streaming
        </p>
      </div>
    </section>
  );
};

export default Hero;
