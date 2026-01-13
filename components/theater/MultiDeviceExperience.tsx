import Image from "next/image";
import React from "react";

const MultiDeviceExperience = () => {
  return (
    <section className="relative w-full py-20 lg:py-32 px-4 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Image
            src="/assets/images/theater/platforms.webp"
            alt="Personalized Cinema Companion"
            width={500}
            height={400}
            className="max-w-[80%] mx-auto object-contain relative z-10"
          />

          <div className="text-center lg:text-left">
            <h2 className="text-3xl lg:text-5xl relative z-10 font-black text-white mb-6 flex flex-col items-center lg:items-start gap-2">
              <span>Get the</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#AA4EFF] to-[#FF5E87]">
                Theater Experience
              </span>
              <span>in multiple platforms</span>
            </h2>
            <div className="flex flex-col items-center justify-center mt-10">
              <p className="text-lg italic lg:text-xl text-white/60 mb-4">
                compatible on
              </p>
              <p className="text-2xl lg:text-3xl font-semibold flex items-center justify-around w-[70%]">
                <span className="bg-clip-text text-transparent font-medium bg-gradient-to-r from-[#AA4EFF] to-[#FF5E87]">
                  Mobile
                </span>
                <span className="w-[1px] h-10 bg-gradient-to-b from-transparent via-[#f863da] to-transparent"></span>
                <span className="bg-clip-text text-transparent font-medium bg-gradient-to-r from-[#AA4EFF] to-[#FF5E87]">
                  Tablet
                </span>
                <span className="w-[1px] h-10 bg-gradient-to-b from-transparent via-[#f863da] to-transparent"></span>
                <span className="bg-clip-text text-transparent font-medium bg-gradient-to-r from-[#AA4EFF] to-[#FF5E87]">
                  TV
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiDeviceExperience;
