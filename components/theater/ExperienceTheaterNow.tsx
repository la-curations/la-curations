import Image from "next/image";
import React from "react";

const ExperienceTheaterNow = () => {
  return (
    <section className="relative w-full py-20 lg:py-32 px-4 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <div className="relative">
          <div className="h-[80] w-[50%] bg-gradient-to-r from-[#000013] to-transparent absolute -left-10 z-10"></div>

          <h2 className="text-4xl lg:text-6xl xl:text-7xl font-black text-white mb-12">
            Experience the{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8aabff] to-[#f863da]">
              Theater
            </span>{" "}
            now
          </h2>
          <div className="h-full w-[30%] bg-gradient-to-r from-transparent to-[#000013] absolute top-0 -right-20 z-10"></div>
        </div>

        <div className="flex items-center justify-center gap-8">
          {/* Google Play Store */}
          <div className="flex items-center gap-4">
            <Image
              src="/assets/images/theater/play.png"
              alt="Personalized Cinema Companion"
              width={100}
              height={100}
              className="w-[70px] h-[70px] lg:w-[100px] lg:h-[100px] object-contain relative z-10"
            />
          </div>

          <span className="w-[1px] h-20 lg:h-30 bg-gradient-to-b from-transparent via-[#f863da] to-transparent"></span>

          <p className="flex flex-col items-start italic text-white/30 font-light text-sm lg:text-xl">
            <span>Soon</span>
            <span>on ios</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTheaterNow;
