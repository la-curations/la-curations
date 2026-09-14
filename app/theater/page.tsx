import Hero from "@/components/theater/Hero";
import StartWatching from "@/components/theater/StartWatching";
import ModeSwitcherSection from "@/components/theater/ModeSwitcherSection";
import MultiDeviceExperience from "@/components/theater/MultiDeviceExperience";
import ExperienceTheaterNow from "@/components/theater/ExperienceTheaterNow";
import TheaterFAQ from "@/components/theater/TheaterFAQ";
import Socials from "@/components/theater/Socials";
import Footer from "@/components/theater/Footer";
import { Metadata, Viewport } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Theater | AI Movie & TV Tracker | Free Movies & Live TV | Available Now on Google Play",
  description:
    "Theater by LA Curations: The privacy-first entertainment SuperApp. Stream live IPTV channels with instant TV dial surfing, watch curated free full-length movies and vertical reels, and track your cinema journey with AI discovery and private diaries. 100% ad-free and available in 17 languages.",
  keywords: [
    "Theater",
    "Theater SuperApp",
    "Theater by LA Curations",
    "Theater App",
    "Live TV App",
    "IPTV Player",
    "Free Movies Streaming",
    "Cinema Reels",
    "AI movie tracker",
    "TV show tracker",
    "privacy-focused streaming",
    "ad-free cinema app",
    "Trakt sync",
    "Google Drive movie diary",
    "no ads movie app",
    "streaming guide",
    "personal watchlist",
    "smart streaming",
    "cinema companion",
    "Ad-free app",
    "privacy-focused app",
    "premium app",
    "AI curated streaming",
    "AI recommendations",
    "LA Curations Theater",
    "movie tracker",

  ],
  alternates: {
    canonical: "https://theater.lacurations.co.in",
  },
  authors: [{ name: "LA Curations" }],
  icons: {
    icon: "/assets/images/theater/theater64.png",
    apple: "/assets/images/theater/theater64.png",
    shortcut: "/assets/images/theater/theater64.png",
  },
  openGraph: {
    title: "Theater | AI Movie & TV Tracker | Free Movies & Live TV",
    description:
      "All-in-one cinema ecosystem: Live IPTV streaming with TV dial zapping, curated free movies & vertical reels, and AI-powered watch tracking. No accounts, no ads, zero tracking.",
    url: "https://theater.lacurations.co.in",
    images: [
      {
        url: "https://lacurations.co.in/assets/images/theater/theater-og-image.png",
        width: 1200,
        height: 630,
        alt: "Theater | AI Movie & TV Tracker | Free Movies & Live TV",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Theater | AI Movie & TV Tracker | Free Movies & Live TV",
    description:
      "All-in-one cinema ecosystem: Live IPTV streaming, curated free movies & reels, and AI-powered watch tracking. No accounts, no ads, zero tracking.",
    site: "@lacurations",
    creator: "@lacurations",
    images: [
      "https://lacurations.co.in/assets/images/theater/theater-og-image.png",
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
    operatingSystem: "Android (Mobile, Tablet, TV)",
    applicationCategory: "EntertainmentApplication",
    applicationSubCategory: "Entertainment",
    featureList:
      "AI Search Mode, Personalized Recommendations (My Next Watch), Cinema Chat, Theater AI Insights, Watchlist Analytics, AI Content Comparison, Advanced Dynamic Filters, Cinema Diary & History Tracker, Personal Cinematic HQ, Release Notifications, Poster Lab Social Sharing, Live IPTV Streaming, Interactive TV Channel Dial, Curated Free Full-Length Movies, Cinematic Reels Video Feed",
    screenshot:
      "https://lacurations.co.in/assets/images/theater/theater-og-image.png",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    genre: "Entertainment",
    installUrl:
      "https://play.google.com/store/apps/details?id=com.lacurations.theater&hl=en_IN",
    sameAs: [
      "https://play.google.com/store/apps/details?id=com.lacurations.theater&hl=en_IN",
    ],
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "LA Curations",
    url: "https://lacurations.co.in",
    logo: "https://lacurations.co.in/logo.png",
    sameAs: [
      "https://x.com/lacurations",
      "https://instagram.com/lacurations",
      "https://threads.com/@lacurations",
      "https://facebook.com/lacurations",
    ],
    description:
      "An independent software studio building premium, privacy-focused applications like Theater. LA Curations crafts digital experiences with zero tracking and ad-free interfaces.",
    foundingDate: "2026",
    founder: {
      "@type": "Person",
      name: "Leo Antony",
      jobTitle: "Software Engineer",
      url: "https://linkedin.com/in/leo-antony",
      sameAs: [
        "https://instagram.com/leoantony2002",
        "https://linkedin.com/in/leo-antony",
        "https://www.facebook.com/leoantony2002",
        "mailto:leoantony20025@gmail.com",
      ],
    },
  };

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Leo Antony",
    jobTitle: "Software Engineer",
    description: "Software Engineer and Founder of LA Curations.",
    url: "https://linkedin.com/in/leo-antony",
    sameAs: [
      "https://instagram.com/leoantony2002",
      "https://linkedin.com/in/leo-antony",
      "https://www.facebook.com/leoantony2002",
      "mailto:leoantony20025@gmail.com",
    ],
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://lacurations.co.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Theater",
        item: "https://theater.lacurations.co.in",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      {/* Identity Verification Links (Hidden but visible to crawlers) */}
      <link rel="me" href="https://linkedin.com/in/leo-antony" />
      <link rel="me" href="https://instagram.com/leoantony2002" />
      <Image
        src="/assets/images/theater/theater512.png"
        alt="Theater: Your Personal Cinema Companion"
        width={70}
        height={70}
        className="w-[50px] h-[50px] xl:w-[70px] xl:h-[70px] object-contain absolute top-8 left-8 z-10"
        priority
      />
      <main className="relative overflow-x-clip bg-[#000013]">
        <Hero />
        <StartWatching />
        <div className="sr-only">
          <h2>Start Watching your next favorite movie</h2>
          <p>
            Stop scrolling and let Theater AI find the perfect content for you
            based on your unique taste and mood.
          </p>
        </div>
        <ModeSwitcherSection />
        <MultiDeviceExperience />
        <TheaterFAQ />
        <ExperienceTheaterNow />
        <Socials />
        <Footer />
        <div className="bg-linear-to-b from-transparent to-[#260030c1] absolute bottom-0 w-screen h-[400px] z-0"></div>
      </main>
    </>
  );
}
