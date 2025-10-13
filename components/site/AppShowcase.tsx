import Image from "next/image";
import Link from "next/link";

const AppShowcase = () => {
  return (
    <section id="showcase" className="py-12 lg:py-16 scroll-mt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-black text-3xl md:text-4xl bg-gradient-to-r from-[#9500ffe5] to-[#ff00aeed] text-transparent bg-clip-text">
              Theater: Discover Content That Fits You.
            </h2>
            <p className="mt-4 text-gray-300 text-base md:text-lg">
              Tired of endless scrolling? Theater is the modern, intelligent
              cinema companion that uses the power of AI to connect you with the
              perfect movie or series every time.
            </p>
            <p className="mt-2 text-gray-400 text-sm md:text-base">
              Find what to watch, not just what's trending.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/theater"
                className="rounded-xl bg-white text-[#0b0019] px-5 py-2.5 text-sm font-semibold hover:bg-white/90 transition"
              >
                Open Theater
              </Link>
              <a
                href="#features"
                className="rounded-xl border border-white/10 px-5 py-2.5 text-sm font-semibold text-white/90 hover:bg-white/5 transition"
              >
                See features
              </a>
            </div>
          </div>

          {/* Visual */}
          <div>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-2">
              {/* If you add a demo video, place it under public/videos/theater-showcase.mp4 and swap the Image for a <video> element. */}
              {/* Example: <video src="/videos/theater-showcase.mp4" className="w-full rounded-2xl" autoPlay loop muted playsInline /> */}
              <Image
                src="/assets/images/theater/Detail.png"
                alt="Theater app showcase"
                width={1280}
                height={800}
                className="w-full rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
