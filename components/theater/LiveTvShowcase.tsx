import React from "react";
import { Tv, Radio, Sliders, Play, Zap, ListVideo, Layers } from "lucide-react";

const LiveTvShowcase = () => {
  const highlights = [
    {
      icon: Zap,
      title: "Next-Gen Channel Surfing",
      description:
        "Swipe vertically to zap between channels instantly with a tactile, smooth TV channel dial designed for pure flow.",
      gradient: "from-[#8aabff] to-[#607afb]",
    },
    {
      icon: Radio,
      title: "Live IPTV Streaming",
      description:
        "Stream your favorite live broadcasts with ultra-low latency, instant aspect ratio switching, and adaptive HLS playback.",
      gradient: "from-[#8aabff] to-[#607afb]",
    },
    {
      icon: ListVideo,
      title: "Custom Playlists & Favorites",
      description:
        "Import your own M3U IPTV playlists, curate custom favorite lists, and filter by regional or language categories with zero fuss.",
      gradient: "from-[#8aabff] to-[#607afb]",
    },
  ];

  return (
    <section className="relative w-full py-24 lg:py-36 px-4 lg:px-8 bg-[#000013] overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-gradient-to-br from-[#306bff]/20 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[500px] h-[500px] bg-gradient-to-tl from-[#f863da]/15 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
            Television, Reimagined for the{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#AA4EFF] to-[#FF5E87]">
              Modern Screen
            </span>
          </h2>
          <p className="mt-6 text-sm lg:text-lg text-white/60 font-light leading-relaxed">
            Stream live IPTV channels with instant vertical surfing, a responsive interactive TV dial, and an immersive landscape player.
          </p>
        </div>

        {/* Visual Showcase: TV Screen Mockup + Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Interactive Player UI Mockup */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl p-1 bg-gradient-to-b from-white/20 via-white/5 to-transparent shadow-2xl backdrop-blur-xl">
              <div className="relative rounded-[22px] bg-[#070814] overflow-hidden border border-white/10 aspect-[16/10] flex flex-col justify-between p-6 sm:p-8">
                {/* Mock Stream Background Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0b0c1e] via-[#10142f] to-[#1c1436] opacity-90" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(138,171,255,0.15),transparent_60%)]" />

                {/* Player Top Bar */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/15 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      <span className="text-xs font-semibold tracking-wider text-white">LIVE</span>
                    </div>
                    <span className="text-xs text-white/70 font-medium hidden sm:inline-block">
                      Sports One HD • 1080p 60fps
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[11px] text-white/80 font-medium border border-white/10">
                      16:9 Fit
                    </div>
                  </div>
                </div>

                {/* Player Center: Subtle Watermark / Brand */}
                <div className="relative z-10 flex items-center justify-center my-auto">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg shadow-black/40">
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 text-white fill-white ml-1 opacity-90" />
                  </div>
                </div>

                {/* Player Bottom: Interactive Channel Dial Preview */}
                <div className="relative z-10">
                  <div className="max-w-md mx-auto rounded-2xl bg-black/50 backdrop-blur-md border border-white/15 p-3 flex items-center justify-between shadow-2xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#306bff] to-[#f863da] flex items-center justify-center font-bold text-xs text-white shadow-md">
                        S1
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white tracking-wide">
                          World Championship Live
                        </p>
                        <p className="text-[10px] text-white/50">Channel 04 • General Sports</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 text-[10px] text-white/80 font-semibold border border-white/10">
                      <Layers className="w-3 h-3 text-[#8aabff]" />
                      <span>Dial Active</span>
                    </div>
                  </div>
                  <p className="text-center text-[11px] text-white/40 mt-3 font-light tracking-wide">
                    ↑ Swipe up or down to surf channels instantly
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights List */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {highlights.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="group relative p-6 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-white/15 backdrop-blur-md transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} p-0.5 shrink-0 flex items-center justify-center shadow-lg shadow-black/30`}
                    >
                      <div className="w-full h-full bg-[#070814]/80 rounded-[10px] flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-[#8aabff] transition-colors">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-white/60 font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveTvShowcase;
