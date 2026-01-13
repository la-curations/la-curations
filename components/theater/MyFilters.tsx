import Image from "next/image";
import React from "react";

const MyFilters = () => {
  return (
    <section className="relative w-full py-20 lg:py-32 px-4 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Image
            src="/assets/images/theater/F1.webp"
            alt="Personalized Cinema Companion"
            width={400}
            height={400}
            className="max-w-[80%] mx-auto object-contain relative z-10"
          />
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h2 className="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#AA4EFF] to-[#FF5E87] font-black">
              My Filters
            </h2>
            <p className="text-lg lg:text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#AA4EFF] to-[#FF5E87] opacity-50">
              Customize your own screen
            </p>
            <p className="text-lg lg:text-xl text-white/70 leading-relaxed">
              Now you can save your own filters and customize a whole screen
              with your saved filters in the My Filters screen
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyFilters;
