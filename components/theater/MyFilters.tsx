import Image from "next/image";

const MyFilters = () => {
  return (
    <section className="relative w-full py-2 lg:py-3 px-4 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Image
            src="/assets/images/theater/F1.webp"
            alt="My Filters - Save your own filters"
            width={400}
            height={400}
            className="max-w-[80%] mx-auto object-contain relative z-10"
          />
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h2 className="text-4xl bg-clip-text text-transparent bg-linear-to-r from-[#8e27ee] to-[#FF5E87] font-black">
              My Filters
            </h2>
            <p className="text-lg lg:text-2xl mb-6 text-[#fa5eff] opacity-70">
              Customize your own screen
            </p>
            <p className="text-lg lg:text-xl text-white/70 leading-relaxed">
              Save your own filters and customize a whole screen with your saved
              filters in the My Filters screen
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyFilters;
