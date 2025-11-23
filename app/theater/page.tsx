import Hero from "@/components/theater/Hero";
import PersonalizedCinemaCompanion from "@/components/theater/PersonalizedCinemaCompanion";
import AIFeatures from "@/components/theater/AIFeatures";
import AndMore from "@/components/theater/AndMore";
import MyFilters from "@/components/theater/MyFilters";
import MySpace from "@/components/theater/MySpace";
import MultiDeviceExperience from "@/components/theater/MultiDeviceExperience";
import ExperienceTheaterNow from "@/components/theater/ExperienceTheaterNow";
import Footer from "@/components/theater/Footer";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Theater",
  description: "AI-powered Smarter Streaming.",
  icons: {
    icon: "/theater64.png",
    apple: "/theater64.png",
    shortcut: "/theater64.png",
  },
  openGraph: {
    title: "Theater",
    description: "AI-powered Smarter Streaming.",
    url: "https://lacurations.com/theater",
    images: [
      {
        url: "https://lacurations.com/images/theater-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Theater - AI-powered Smarter Streaming",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Theater",
    description: "AI-powered Smarter Streaming.",
    images: ["https://lacurations.com/images/theater-twitter-image.jpg"],
  },

  viewport: "width=device-width, initial-scale=1",
  robots: {
    index: true,
    follow: true,
  },
};

export default function Theater() {
  return (
    <>
      <Image
        src="/theater64.png"
        alt="Personalized Cinema Companion"
        width={70}
        height={70}
        className="w-[50px] h-[50px] xl:w-[70px] xl:h-[70px] object-contain absolute top-8 left-8 z-10"
      />
      <main className="relative overflow-x-hidden bg-[#000013]">
        <Hero />
        <PersonalizedCinemaCompanion />
        <AIFeatures />
        <AndMore />
        <MyFilters />
        {/* <MySpace /> */}
        <MultiDeviceExperience />
        <ExperienceTheaterNow />
        <Footer />
        <div className="bg-gradient-to-b from-transparent to-[#260030c1] absolute bottom-0 w-screen h-[400px] z-0"></div>
      </main>
    </>
  );
}
