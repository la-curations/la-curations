import Image from "next/image";

const MySpace = () => {
  return (
    <section className="relative w-full py-20 lg:py-32 px-4 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left lg:order-2">
            <h2 className="text-4xl bg-clip-text text-transparent bg-linear-to-r from-[#8e27ee] to-[#FF5E87] font-black">
              My Space
            </h2>
            <p className="text-lg lg:text-2xl mb-6 text-[#ffffff] opacity-70">
              Your cinematic HQ
            </p>
            <p className="text-lg lg:text-xl text-white/40 leading-relaxed">
              Personalize everything from your region and spoken languages to
              your preferred OTT platforms. See popular and upcoming releases
              tailored specifically for you.
            </p>
          </div>
          <Image
            src="/assets/images/theater/F3.webp"
            alt="My Space - Personalization settings"
            width={400}
            height={400}
            className="max-w-[80%] mx-auto object-contain relative z-10 lg:order-1"
          />
        </div>
      </div>
    </section>
  );
};

export default MySpace;
