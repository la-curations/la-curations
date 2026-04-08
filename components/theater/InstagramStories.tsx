import Image from "next/image";

const InstagramStories = () => {
  return (
    <section className="relative w-full py-20 lg:py-32 px-4 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Image
            src="/assets/images/theater/InstagramStories.png"
            alt="Instagram Stories - Share your favorite content"
            width={400}
            height={400}
            className="max-w-[80%] mx-auto object-contain relative z-10 lg:order-2"
          />
          <div className="text-center lg:text-left lg:order-1">
            <h2 className="text-4xl bg-clip-text text-transparent bg-linear-to-r from-[#8e27ee] to-[#FF5E87] font-black">
              Share the hype
            </h2>
            <p className="text-lg lg:text-2xl mb-6 text-[#ffffff] opacity-70">
              Aesthetically shareable
            </p>
            <p className="text-lg lg:text-xl text-white/40 leading-relaxed">
              Generate beautiful, high-fidelity posters of what you're watching.
              Ready to share on Instagram Stories with a single tap, including
              all the key info.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramStories;
