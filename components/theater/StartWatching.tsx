import Image from "next/image";
import { Freehand } from "next/font/google";

const freehand = Freehand({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-freehand",
  display: "swap",
  preload: true,
});

const StartWatching = () => {
  return (
    <section className="w-full py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <Image
          src="/assets/images/theater/ss.webp"
          alt="Start Watching with Theater AI - Stop Scrolling and Discover Personal Movie Recommendations"
          width={1920}
          height={1080}
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default StartWatching;
