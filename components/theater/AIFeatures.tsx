import React from "react";
import Image from "next/image";
import theaterAI from "../../public/assets/images/theater/TheaterAI.png";

const AIFeatures = () => {
  return (
    <section className="relative w-full py-20 lg:py-32 px-4 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="relative mb-4 flex items-center justify-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#AA4EFF] to-[#FF5E87] opacity-20 font-black text-7xl lg:text-[150px] z-0 relative">
              AI Features
            </span>
            <Image
              src="/assets/images/theater/mesh.png"
              alt="Mesh"
              width={800}
              height={500}
              className="w-120 h-auto object-contain absolute z-1"
            />
            <span className="absolute bg-clip-text text-transparent text-3xl lg:text-6xl bg-gradient-to-r from-[#AA4EFF] to-[#FF5E87] z-2">
              with
            </span>
          </h2>
          <div className="relative flex gap-2 items-center justify-center self-center border-2 border-[#ff5ef4] rounded-3xl p-2 bg-[#000000] -mt-7 lg:-mt-11">
            <span className="w-5 h-5 rounded-2xl bg-gradient-to-r from-[#AA4EFF] to-[#FF5E87]"></span>
            <span className="w-3 h-3 rounded-2xl bg-white opacity-30"></span>
            <span className="w-3 h-3 rounded-2xl bg-white opacity-30"></span>
            <span className="w-3 h-3 rounded-2xl bg-white opacity-30"></span>
            <span className="w-3 h-3 rounded-2xl bg-white opacity-30"></span>
            <span className="w-3 h-3 rounded-2xl bg-white opacity-30"></span>
          </div>
          <p className="text-2xl lg:text-4xl font-extrabold mt-2 bg-clip-text text-transparent bg-gradient-to-b from-[#ffffff18] to-white">
            My Next Watch
          </p>
        </div>

        <div className="max-w-4xl mx-auto mt-10 lg:mt-30">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-0">
            <Image
              src="/assets/images/theater/AI1.png"
              alt="Personalized Cinema Companion"
              width={300}
              height={300}
              className="max-w-[80%] mx-auto object-contain relative z-10"
            />

            <p className="text-lg text-center lg:text-left lg:text-2xl text-[#665996] leading-relaxed">
              What is your{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#AA4EFF] to-[#FF5E87] font-semibold">
                cinema taste
              </span>
              ? Don't tell us. Theater AI will find and you will get the
              recommendations of your taste.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFeatures;
