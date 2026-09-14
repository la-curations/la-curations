import React from "react";
import { Film, Clapperboard, Sparkles, Flame, Play, Eye, Compass } from "lucide-react";

const FreeMoviesShowcase = () => {
  const cards = [
    {
      badge: "Full-Length Cinema",
      title: "Curated Free Movies",
      description:
        "Watch handcrafted, 100% legal full-length films across genres—action, indie drama, sci-fi, and timeless classics. No paywalls, no subscriptions.",
      icon: Film,
      accent: "from-[#b162ff] to-[#f863da]",
    },
    {
      badge: "Vertical Shorts",
      title: "Cinematic Reels Feed",
      description:
        "Swipe through a high-octane vertical feed of curated movie trailers, key highlights, and behind-the-scenes clips. Find your next watch in seconds.",
      icon: Clapperboard,
      accent: "from-[#b162ff] to-[#f863da]",
    },
    {
      badge: "Zero Friction",
      title: "Instant Play, Zero Ads",
      description:
        "No invasive pre-roll ads, no registration barriers, and no tracking scripts. Just tap and immerse yourself in pure cinema.",
      icon: Sparkles,
      accent: "from-[#b162ff] to-[#f863da]",
    },
  ];

  return (
    <section className="relative w-full py-24 lg:py-36 px-4 lg:px-8 bg-[#000013] overflow-hidden">
      {/* Ambient Radial Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(248,99,218,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
            Unlimited Streaming.{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#AA4EFF] to-[#FF5E87]">
              Zero Friction.
            </span>
          </h2>
          <p className="mt-6 text-sm text-white/60 font-light leading-relaxed">
            Experience free movies done right. Browse our catalog of full-length films or discover new gems through the fast-paced, immersive Cinematic Reels feed.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, idx) => {
            const IconComp = card.icon;
            return (
              <div
                key={idx}
                className="group relative p-8 rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/10 hover:border-white/20 backdrop-blur-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${card.accent} p-0.5 flex items-center justify-center shadow-lg shadow-black/40`}
                    >
                      <div className="w-full h-full bg-[#0a0a1a] rounded-[14px] flex items-center justify-center">
                        <IconComp className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-[#f863da] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-white/60 font-light leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reel Preview Strip Banner */}
        <div className="mt-12 rounded-3xl p-8 lg:p-12 bg-gradient-to-r from-white/[0.04] via-white/[0.02] to-white/[0.04] border border-white/10 backdrop-blur-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#f863da] to-[#8aabff] flex items-center justify-center shrink-0 shadow-lg shadow-[#f863da]/20">
              <Clapperboard className="w-7 h-7 text-white" />
            </div>
            <div>
              <h4 className="text-lg lg:text-xl font-bold text-white">
                Discover Through Cinematic Reels
              </h4>
              <p className="text-sm text-white/60 font-light mt-1">
                A seamless TikTok/Shorts-style feed dedicated exclusively to cinema previews and trailers.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="flex -space-x-2 overflow-hidden">
              <div className="inline-block h-8 w-8 rounded-full ring-2 ring-[#000013] bg-purple-600/80 flex items-center justify-center text-[10px] font-bold text-white">
                4K
              </div>
              <div className="inline-block h-8 w-8 rounded-full ring-2 ring-[#000013] bg-pink-600/80 flex items-center justify-center text-[10px] font-bold text-white">
                HD
              </div>
              <div className="inline-block h-8 w-8 rounded-full ring-2 ring-[#000013] bg-blue-600/80 flex items-center justify-center text-[10px] font-bold text-white">
                CC
              </div>
            </div>
            <span className="text-xs text-white/70 font-medium ml-2">
              Free Forever • 100% Legal
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeMoviesShowcase;
