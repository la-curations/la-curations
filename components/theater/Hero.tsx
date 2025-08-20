import React from "react";
import Image from "next/image";
import theaterTitle from "../../public/theater-title.png";

const Hero = () => {
  return (
    <section className="w-screen h-screen bg-[url('/theater-hero.png')] bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col gap-6 text-center items-center justify-center h-full">
        <p className="text-xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8aabff] to-[#f863da]">
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
        <h2 className="text-5xl lg:text-7xl font-black h-[100px] opacity-40 mt-20 bg-clip-text text-transparent bg-gradient-to-r from-[#306bff] to-[#ff16d0]">
          Coming Soon. Stay Tuned.
        </h2>
      </div>
    </section>
  );
};

export default Hero;
