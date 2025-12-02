import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

const HomeHero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center bg-white"
    >
      {/* Logo in top left */}
      <div className="absolute top-8 left-8 md:top-12 md:left-12 z-10">
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
      </div>

      {/* Main content container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center">
          <div className="relative">
            {/* Centered text */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl text-center font-black text-[#96999d] tracking-tight">
              CURATED FOR YOU
            </h1>

            {/* Gradient overlays for the "emerging from nowhere" effect */}
            {/* Top gradient */}
            <div className="absolute inset-x-0 -top-20 h-32 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>

            {/* Left gradient */}
            <div className="absolute inset-y-0 -left-5 w-42 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
            <div className="absolute inset-y-0 -right-5 w-42 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

            {/* Bottom gradient */}
            <div className="absolute inset-x-0 bottom-0 lg:bottom-2 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
          </div>
        </div>
        <h2
          className={`text-2xl md:text-3xl lg:text-4xl text-center font-semibold text-[#000000] tracking-tight mt-10 ${playfair.className}`}
        >
          Clean. Restraint. Finesse.
        </h2>
      </div>

      {/* Hero image on the right side */}
      <div className="absolute right-0 bottom-0 lg:top-0 w-1/2 md:w-2/5 flex items-center justify-end z-10">
        <div className="relative w-full h-[60%] flex items-center justify-end">
          <Image
            src="/hero.png"
            alt="Hero"
            width={800}
            height={800}
            className="object-contain h-full w-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
