import Image from "next/image";

const MyDiary = () => {
  return (
    <section className="relative w-full py-20 lg:py-32 px-4 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h2 className="text-4xl bg-clip-text text-transparent bg-linear-to-r from-[#8e27ee] to-[#FF5E87] font-black">
              My Diary
            </h2>
            <p className="text-lg lg:text-2xl mb-6 text-[#fa5eff] opacity-70">
              Cinema tracker
            </p>
            <p className="text-lg lg:text-xl text-white/70 leading-relaxed">
              Track your movie and TV show history and current watch progress.
            </p>
          </div>
          <Image
            src="/assets/images/theater/F2.webp"
            alt="My Diary - Track your movie and TV show history and current watch progress"
            width={400}
            height={400}
            className="max-w-[80%] mx-auto object-contain relative z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default MyDiary;
