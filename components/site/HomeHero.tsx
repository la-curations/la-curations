import Link from "next/link";

const HomeHero = () => {
  return (
    <section id="home" className="relative overflow-hidden min-h-screen flex items-center pt-20 md:pt-24 scroll-mt-28">
      {/* Background accents */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,_#9500ff40,_transparent)] blur-2xl" />
        <div className="absolute -bottom-32 right-10 h-[380px] w-[380px] rounded-full bg-[radial-gradient(closest-side,_#ff00ae30,_transparent)] blur-2xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.02))]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/80 anim-fade-in delay-100">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-[#c34df1]" />
            New launch: Theater
          </div>

          <h1 className="mt-4 font-black text-3xl md:text-5xl leading-tight anim-fade-in-up delay-200">
            <span className="bg-gradient-to-r from-[#9500ffe5] to-[#ff00aeed] text-transparent bg-clip-text">
              Beautifully crafted to enhance everyday experiences.
            </span>
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-300 max-w-2xl mx-auto anim-fade-in-up delay-300">
            Apps curated by LA Curations
          </p>

          {/* CTAs */}
          <div className="mt-8 flex items-center justify-center gap-3 anim-fade-in-up delay-400">
            <Link
              href="/theater"
              className="inline-flex items-center gap-2 rounded-xl bg-white text-[#0b0019] px-5 py-2.5 text-sm font-semibold hover:bg-white/90 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path d="M4.5 5.25A.75.75 0 0 1 5.25 4.5h13.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-1.28.53l-3.97-3.97H5.25a.75.75 0 0 1-.75-.75V5.25Z" />
              </svg>
              Explore Theater
            </Link>
            <a
              href="#apps"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-2.5 text-sm font-semibold text-white/90 hover:bg-white/5 transition"
            >
              View all apps
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 12a.75.75 0 0 1 .75-.75h11.69l-3.22-3.22a.75.75 0 1 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06l3.22-3.22H5.25A.75.75 0 0 1 4.5 12Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>

          {/* Subtle stats */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-xs text-gray-400 anim-fade-in-up delay-500">
            <span className="px-2 py-1">Fast, tasteful design</span>
            <span>|</span>
            <span className="px-2 py-1">AI-native experiences</span>
            <span>|</span>
            <span className="px-2 py-1">Privacy-minded</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
