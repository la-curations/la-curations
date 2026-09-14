import React from "react";
import { Metadata } from "next";
import UserGuideClient from "@/components/theater/guide/UserGuideClient";

export const metadata: Metadata = {
  title: "Theater User Guide | Master the Privacy-First Cinema Ecosystem",
  description:
    "Official comprehensive user guide and documentation for Theater. Learn how to master the Cinema Tracker & Diary, AI Plot Search, Curated Free Cinema & Reels, and Live IPTV Television with the tactile channel dial.",
  keywords: [
    "Theater User Guide",
    "Theater Manual",
    "Theater App Documentation",
    "Theater IPTV Guide",
    "Theater Cinema Diary",
    "Theater AI Search",
    "How to use Theater",
    "Theater Groq setup",
    "Theater M3U guide",
  ],
  alternates: {
    canonical: "https://theater.lacurations.co.in/guide",
  },
  openGraph: {
    title: "Theater User Guide | Master the Privacy-First Cinema Ecosystem",
    description:
      "Official comprehensive user manual for Theater. Master the Cinema Diary, Live IPTV with tactile dial, Free Movies & Reels, and Groq AI intelligence.",
    url: "https://theater.lacurations.co.in/guide",
    images: [
      {
        url: "https://lacurations.co.in/assets/images/theater/theater-og-image.png",
        width: 1200,
        height: 630,
        alt: "Theater User Guide & Documentation",
      },
    ],
  },
};

export default function GuidePage() {
  return <UserGuideClient />;
}
