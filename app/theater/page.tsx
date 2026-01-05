import Hero from "@/components/theater/Hero";
import PersonalizedCinemaCompanion from "@/components/theater/PersonalizedCinemaCompanion";
import AIFeatures from "@/components/theater/AIFeatures";
import AndMore from "@/components/theater/AndMore";
import MyFilters from "@/components/theater/MyFilters";
import MultiDeviceExperience from "@/components/theater/MultiDeviceExperience";
import ExperienceTheaterNow from "@/components/theater/ExperienceTheaterNow";
import Footer from "@/components/theater/Footer";
import { Metadata, Viewport } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Theater",
  description:
    "Theater App by LA Curations serves as your personalized cinema companion. AI-powered recommendations for smarter streaming on all your devices.",
  keywords: [
    "Theater by LA Curations",
    "Theater App",
    "AI curated streaming",
    "AI recommendations",
    "LA Curations Theater",
    "movie tracker",
    "TV show tracker",
    "streaming guide",
    "personal watchlist",
    "smart streaming",
    "cinema companion",
    "Ad-free app",
    "privacy-focused app",
    "premium app",
  ],
  alternates: {
    canonical: "https://lacurations.vercel.app/theater",
  },
  icons: {
    icon: "/assets/images/theater/theater64.png",
    apple: "/assets/images/theater/theater64.png",
    shortcut: "/assets/images/theater/theater64.png",
  },
  openGraph: {
    title: "Theater App",
    description:
      "The Ultimate AI-Powered ad-free Movie & TV Tracker. Experience the next level of streaming with Theater App. AI-curated content just for you.",
    url: "https://lacurations.vercel.app/theater",
    images: [
      {
        url: "https://lacurations.vercel.app/assets/images/theater/theater-og-image.png",
        width: 1200,
        height: 630,
        alt: "Theater App - AI-Powered Smarter Streaming",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Theater App",
    description:
      "The Ultimate AI-Powered ad-free Movie & TV Tracker. Experience the next level of streaming with Theater App. AI-curated content just for you.",
    images: [
      "https://lacurations.vercel.app/assets/images/theater/theater-og-image.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function Theater() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Theater",
    operatingSystem: "Web, iOS, Android",
    applicationCategory: "EntertainmentApplication",
    applicationSubCategory: "Movie & TV Tracker",
    description:
      "No ads. No tracking. No data collection. Enjoy the next level of streaming with Theater App. AI-curated content just for you.",
    featureList:
      "AI Recommendations, Cross-platform Sync, Watchlist Management",
    screenshot: "/assets/images/theater/theater-og-image.png",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Image
        src="/assets/images/theater/theater64.png"
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
