import React from "react";
import { Waterfall } from "next/font/google";

const waterfall = Waterfall({ weight: "400" });

const Founder = () => {
  return (
    <div className="my-56 mb-32 lg:mb-96 bg-white text-black">
      <div className="w-screen relative flex flex-col items-center justify-center">
        <p className="text-4xl md:text-6xl lg:text-[110px] font-black text-[#6767674a]">
          Handcrafted by One
        </p>
        <div className="absolute inset-x-0 -bottom-3 lg:h-64 md:h-32 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      </div>
      <div className="container mx-auto px-4">
        <div className="xl:-mt-12 lg:-mt-12 -mt-5 mb-20 text-center">
          <div className="relative">
            <h2 className="text-lg md:text-3xl xl:text-5xl mx-5 font-black tracking-tight mb-6">
              Independently made. Deliberately crafted.
            </h2>
          </div>
          <p className="max-w-[70%] lg:max-w-4xl mx-auto text-xs text-gray-500 font-light leading-relaxed lg:mt-10 mt-5">
            Built by one. Crafted with care. Designed for a more considered
            digital experience.
          </p>
        </div>
      </div>

      <p className="max-w-[80%] lg:max-w-4xl text-center font-semibold lg:text-2xl text-md mx-auto leading-relaxed mt-10">
        Every decision, every detail, and every line of code is made with care.
        Thank you for being part of this journey and for supporting independent
        creation
      </p>

      <div className="max-w-5xl flex flex-col items-center justify-center gap-2 mx-auto mt-20">
        <p
          className={`${waterfall.className} text-xl md:text-2xl lg:text-3xl text-center font-semibold text-[#000000] tracking-tight mt-10`}
        >
          Everything under LA Curations is imagined, designed, and built by
        </p>
        <h1 className="text-4xl md:text-5xl font-black">LEO ANTONY</h1>
        <p className="text-md text-gray-500 font-light leading-relaxed">
          Maker of LA Curations
        </p>
      </div>
    </div>
  );
};

export default Founder;
