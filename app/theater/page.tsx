import Hero from "@/components/theater/Hero";
import { Metadata } from "next";
import Features from "@/components/theater/Features";
import CTA from "@/components/theater/CTA";

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
      <main className="overflow-x-hidden">
        <Hero />
        <Features />
        <CTA />
      </main>
    </>
  );
}
