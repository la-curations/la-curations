import Image from "next/image";

const HomeHero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center bg-white"
    >
      {/* Logo in top left */}
      <div className="absolute top-8 left-8 md:top-12 md:left-12 z-10">
        <Image
          src="/logo.png"
          alt="Logo"
          width={60}
          height={60}
          className="w-12 h-12 md:w-16 md:h-16"
        />
      </div>

      {/* Main content container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center">
          <div className="relative">
            {/* Centered text */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-[#D1D5DB] tracking-tight">
              CURATED
              <br />
              FOR YOU
            </h1>

            {/* Gradient overlays for the "emerging from nowhere" effect */}
            {/* Top gradient */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>

            {/* Left gradient */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>

            {/* Bottom gradient */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Hero image on the right side */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 md:w-2/5 flex items-center justify-end">
        <div className="relative w-full h-[80%] flex items-center justify-end">
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
