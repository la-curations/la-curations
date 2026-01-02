import Hero from "@/components/theater/Hero";
import PersonalizedCinemaCompanion from "@/components/theater/PersonalizedCinemaCompanion";
import AIFeatures from "@/components/theater/AIFeatures";
import AndMore from "@/components/theater/AndMore";
import MyFilters from "@/components/theater/MyFilters";
import MultiDeviceExperience from "@/components/theater/MultiDeviceExperience";
import ExperienceTheaterNow from "@/components/theater/ExperienceTheaterNow";
import Footer from "@/components/theater/Footer";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Theater App - The Ultimate AI Movie & TV Tracker | LA Curations",
  description:
    "Theater App by LA Curations serves as your personalized cinema companion. AI-powered recommendations for smarter streaming on all your devices.",
  keywords: [
    "Theater App",
    "AI streaming",
    "movie recommendations",
    "smart streaming",
    "cinema companion",
    "LA Curations Theater",
    "movie tracker",
    "TV show tracker",
    "streaming guide",
    "personal watchlist",
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
    title: "Theater App - The Ultimate AI Movie & TV Tracker",
    description:
      "Experience the next level of streaming with Theater App. AI-curated content just for you.",
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
    title: "Theater App - The Ultimate AI Movie & TV Tracker",
    description: "Your personalized AI cinema companion.",
    images: [
      "https://lacurations.vercel.app/assets/images/theater/theater-og-image.png",
    ],
  },
  viewport: "width=device-width, initial-scale=1",
  robots: {
    index: true,
    follow: true,
  },
};

export default function Theater() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Theater",
    operatingSystem: "Web, iOS, Android",
    applicationCategory: "EntertainmentApplication",
    applicationSubCategory: "Movie & TV Tracker",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "AI-powered smarter streaming application acting as your personalized cinema companion.",
    featureList:
      "AI Recommendations, Cross-platform Sync, Watchlist Management",
    screenshot: "/assets/images/theater/theater-og-image.png",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "120",
    },
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
