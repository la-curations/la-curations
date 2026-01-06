import React from "react";
import Image from "next/image";

const PersonalizedCinemaCompanion = () => {
  return (
    <section className="relative w-full py-20 lg:py-32 px-4 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-50 items-center justify-center">
          {/* Left side - Mobile phones stack */}
          <div className="relative w-full max-w-md">
            <Image
              src="/assets/images/theater/mesh.png"
              alt="Mesh"
              width={500}
              height={500}
              className="w-full h-auto object-contain absolute -top-[30%] z-0"
            />
            <Image
              src="/assets/images/theater/pcc.png"
              alt="Personalized Cinema Companion"
              width={500}
              height={500}
              className="w-[80%] lg:w-full h-auto object-contain relative z-10 mx-auto"
            />
          </div>

          {/* Right side - Text content */}
          <div className="relative text-center lg:text-left">
            <Image
              src="/assets/images/theater/mesh.png"
              alt="Mesh"
              width={800}
              height={500}
              className="w-full h-auto object-contain absolute -top-[90%] -left-[50%] z-0 opacity-70"
            />
            <h2 className="text-4xl relative z-10 lg:text-6xl xl:text-7xl font-black text-white mb-6 flex flex-col items-center lg:items-start gap-0.5 lg:gap-2">
              <span>Your</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#AA4EFF] to-[#FF5E87]">
                Personalized
              </span>
              <span>Cinema</span>
              <span>Companion</span>
            </h2>
            <div className="h-full w-full bg-gradient-to-r from-transparent to-[#000013] absolute top-0 right-0 z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalizedCinemaCompanion;
