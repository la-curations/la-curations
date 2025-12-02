import Image from "next/image";

const valueProps = [
  {
    key: "data",
    image: "/assets/images/LA/VP1.png",
    title: "Technology that minds its own business.",
    description:
      "Apps that never follow you around. Only essential data, always yours to keep or delete.",
  },
  {
    key: "noads",
    image: "/assets/images/LA/VP2.png",
    title: "Nothing interrupts your flow.",
    description:
      "No ads. No trackers. Just a quiet, uninterrupted experience designed around you.",
  },
  {
    key: "design",
    image: "/assets/images/LA/VP3.png",
    title: "Crafted for Delight",
    description:
      "Thoughtful, refined design that prioritizes clarity, speed, and calm. Apps that feel good to use.",
  },
];

const ValueProps = () => {
  return (
    <section
      id="philosophy"
      className="my-56 mb-32 lg:mb-96 bg-white text-black"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <div className="relative">
            <h2 className="text-4xl font-black tracking-tight">
              Crafted with care. Powered by trust.
            </h2>
            <div className="absolute inset-y-0 right-0 w-[50%] h-[calc(100%+20px)] bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
          </div>
          <p className="lg:text-md text-xs text-gray-500 font-light leading-tight mt-5 max-w-[80%] mx-auto">
            LA Curations believe in a different kind of internet. One where you
            aren't the product. LA Curations builds premium, privacy-focused
            products designed for peace of mind.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-12 max-w-6xl mx-auto">
          {valueProps.map((vp) => (
            <div
              key={vp.key}
              className="max-w-[80%] md:max-w-[40%] lg:max-w-[25%] flex flex-col items-center lg:items-start group"
            >
              <div className="mb-6 p-4 rounded-2xl bg-gray-100 group-hover:bg-black transition-colors duration-300">
                <Image
                  src={vp.image}
                  alt={vp.title}
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain group-hover:invert transition-all duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-center lg:text-start">
                {vp.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-center lg:text-start">
                {vp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
