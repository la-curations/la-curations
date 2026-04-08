import Image from "next/image";

const MyWatchlists = () => {
  return (
    <section className="relative w-full py-20 lg:py-32 px-4 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left lg:order-2">
            <h2 className="text-4xl bg-clip-text text-transparent bg-linear-to-r from-[#8e27ee] to-[#FF5E87] font-black">
              Watchlists & Collections
            </h2>
            <p className="text-lg lg:text-2xl mb-6 text-[#ffffff] opacity-70">
              Curated just like playlists
            </p>
            <p className="text-lg lg:text-xl text-white/40 leading-relaxed">
              Create multiple named watchlists for different moods or occasions.
              Easily manage collections like your favorite series or film
              franchises in an intuitive organized view.
            </p>
          </div>
          <Image
            src="/assets/images/theater/Watchlists.webp"
            alt="My Watchlists - Management playlists"
            width={400}
            height={400}
            className="max-w-[80%] mx-auto object-contain relative z-10 lg:order-1"
          />
        </div>
      </div>
    </section>
  );
};

export default MyWatchlists;
