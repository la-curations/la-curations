import React from "react";
import Image from "next/image";
import { Freehand } from "next/font/google";

const freehand = Freehand({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-freehand",
  display: "swap",
  preload: true,
});

interface Feature {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  alt: string;
}

const features: Feature[] = [
  {
    title: "My Filters",
    subtitle: "Stop endless searching",
    description:
      "Use advanced filters including content type, genres (with ALL|ANY logic), cast, crew, and OTT availability. Save your settings to instantly personalize your experience. Customize a whole screen with your saved filters.",
    image: "/assets/images/theater/F1.webp",
    alt: "My Filters - Save your own filters",
  },
  {
    title: "My Diary",
    subtitle: "Track your cinema journey",
    description:
      "Track your movie and TV show history and current watch progress with personal notes, ratings and emotional emojis.",
    image: "/assets/images/theater/F2.webp",
    alt: "My Diary - Track your movie and TV show history and current watch progress",
  },
  {
    title: "My Calendar",
    subtitle: "Never miss a premiere",
    description:
      "Schedule released movies or get notified for upcoming ones. Manage your cinematic timeline with precision and get timely notifications sent directly to your device.",
    image: "/assets/images/theater/F4.webp",
    alt: "My Calendar - Release notifications and schedule",
  },
  {
    title: "Poster Lab",
    subtitle: "Share the hype",
    description:
      "Generate beautiful, high-fidelity posters of what you're watching. Ready to share on Instagram Stories with a single tap, including all the key info.",
    image: "/assets/images/theater/F5.webp",
    alt: "Poster Lab - Create and share beautiful cinematic posters on social media",
  },
  {
    title: "My Space",
    subtitle: "Your cinematic HQ",
    description:
      "Personalize everything from your region and spoken languages to your preferred OTT platforms. See popular and upcoming releases tailored specifically for you.",
    image: "/assets/images/theater/F3.webp",
    alt: "My Space - Personalization settings",
  },
];

const MoreFeatures = () => {
  return (
    <section className="w-full bg-[#000013]">
      {/* "And more..." Transition */}
      <div className="w-full py-12 lg:py-16 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <div className="relative">
            <h2 className="relative text-4xl lg:text-6xl xl:text-7xl font-black text-white text-center">
              and more...
            </h2>
            <div className="h-full w-[90%] bg-linear-to-r from-transparent to-[#000013] absolute top-0 -right-10 z-10"></div>
          </div>
        </div>
      </div>

      {/* Individual Features */}
      {features.map((feature, index) => (
        <div
          key={index}
          className="relative w-full py-20 lg:py-32 px-4 lg:px-8 overflow-hidden"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              {/* Image Column - First on mobile, alternates on desktop */}
              <div
                className={`relative z-10 order-1 ${
                  index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <Image
                  src={feature.image}
                  alt={feature.alt || feature.title}
                  width={400}
                  height={400}
                  className="max-w-[70%] lg:max-w-[60%] mx-auto object-contain"
                />
              </div>

              {/* Text Column - Second on mobile, alternates on desktop */}
              <div
                className={`text-center flex flex-col items-center justify-center order-2 ${
                  index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                {/* Overlapped Title - Inside the Column */}
                <div className="relative flex items-center justify-center w-full min-h-[100px] lg:min-h-[180px]">
                  <h2 className="relative flex items-center justify-center">
                    <span
                      className="bg-clip-text text-transparent bg-linear-to-r from-[#AA4EFF] to-[#FF5E87] opacity-20 font-black text-[55px] lg:text-[70px] z-0 relative whitespace-nowrap"
                      aria-hidden="true"
                    >
                      {feature.title}
                    </span>
                    <Image
                      src="/assets/images/theater/mesh.webp"
                      alt=""
                      aria-hidden="true"
                      width={200}
                      height={200}
                      className="w-100 h-auto object-contain absolute z-1 opacity-70"
                    />
                    <span
                      className={`${freehand.className} absolute bg-clip-text text-transparent text-xl lg:text-3xl bg-linear-to-r from-[#AA4EFF] to-[#FF5E87] z-2 whitespace-nowrap leading-relaxed`}
                    >
                      {feature.subtitle}
                    </span>
                  </h2>
                </div>

                <p className="text-sm lg:text-xl text-white/40 max-w-xl mx-auto">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default MoreFeatures;
