import Hero from "@/components/theater/Hero";
import PersonalizedCinemaCompanion from "@/components/theater/PersonalizedCinemaCompanion";
import AIFeatures from "@/components/theater/AIFeatures";
import StartWatching from "@/components/theater/StartWatching";
import MoreFeatures from "@/components/theater/MoreFeatures";
import MultiDeviceExperience from "@/components/theater/MultiDeviceExperience";
import ExperienceTheaterNow from "@/components/theater/ExperienceTheaterNow";
import Footer from "@/components/theater/Footer";
import { Metadata, Viewport } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Theater | AI Movie & TV Tracker | Stop Scrolling, Start Watching",
  description:
    "Theater by LA Curations: AI-powered personal cinema companion. Feature-rich cinema diary, advanced search mode, personalized streaming recommendations, and poster lab. Ad-free, private, and smart.",
  keywords: [
    "Theater",
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
    canonical: "https://lacurations.co.in/theater",
  },
  authors: [{ name: "LA Curations" }],
  icons: {
    icon: "/assets/images/theater/theater64.png",
    apple: "/assets/images/theater/theater64.png",
    shortcut: "/assets/images/theater/theater64.png",
  },
  openGraph: {
    title: "Theater App",
    description:
      "The Ultimate AI-Powered ad-free Movie & TV Tracker. Experience the next level of streaming with Theater App. AI-curated content just for you.",
    url: "https://lacurations.co.in/theater",
    images: [
      {
        url: "https://lacurations.co.in/assets/images/theater/theater-og-image.png",
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
    operatingSystem: "Android (Mobile, Tablet, TV), iOS",
    applicationCategory: "EntertainmentApplication",
    applicationSubCategory: "Movie & TV Tracker",
    featureList:
      "AI Search Mode, Personalized Recommendations (My Next Watch), Cinema Chat, Theater AI Insights, Watchlist Analytics, AI Content Comparison, Advanced Dynamic Filters, Cinema Diary & History Tracker, Personal Cinematic HQ, Release Notifications, Poster Lab Social Sharing",
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
    url: "https://lacurations.co.in",
    sameAs: [
      "https://instagram.com/leoantony2002",
      "https://linkedin.com/in/leo-antony",
      "https://www.facebook.com/leoantony2002",
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
        item: "https://lacurations.co.in/theater",
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
        src="/assets/images/theater/theater64.png"
        alt="Personalized Cinema Companion"
        width={70}
        height={70}
        className="w-[50px] h-[50px] xl:w-[70px] xl:h-[70px] object-contain absolute top-8 left-8 z-10"
        priority
      />
      <main className="relative overflow-x-hidden bg-[#000013]">
        <Hero />
        <StartWatching />
        <div className="sr-only">
          <h2>Start Watching your next favorite movie</h2>
          <p>
            Stop scrolling and let Theater AI find the perfect content for you
            based on your unique taste and mood.
          </p>
        </div>
        <PersonalizedCinemaCompanion />
        <AIFeatures />
        <MoreFeatures />
        <MultiDeviceExperience />
        <ExperienceTheaterNow />
        <Footer />
        <div className="bg-linear-to-b from-transparent to-[#260030c1] absolute bottom-0 w-screen h-[400px] z-0"></div>
      </main>
    </>
  );
}
