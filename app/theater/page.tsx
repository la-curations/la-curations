import Header from "@/components/theater/Header";
import Hero from "@/components/theater/Hero";
import { Metadata } from "next";

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
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl py-12 sm:py-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Coming Soon!
            </h2>
            <p className="mt-4 text-gray-500">
              We are working hard to bring you Theater, an AI-powered smarter
              streaming experience. Stay tuned for updates!
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
