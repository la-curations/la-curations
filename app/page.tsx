import ValueProps from "@/components/site/ValueProps";
import AppShowcase from "@/components/site/AppShowcase";
import Footer from "@/components/site/Footer";
import Founder from "@/components/site/Founder";
import Socials from "@/components/site/Socials";
import HomeHero from "@/components/site/HomeHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://lacurations.vercel.app"),
  title: {
    default: "LA Curations - Curated for you",
    template: "%s | LA Curations",
  },
  manifest: "/manifest.json",
  description:
    "LA Curations is an independent studio crafting premium, privacy-focused mobile apps. Experience ad-free apps like 'Theater' designed with a clean UI/UX and zero data collection.",
  keywords: [
    "LA Curations",
    "Theater App",
    "independent developer",
    "software studio",
    "premium apps",
    "Privacy focused apps",
    "Ad-free cinema guide",
    "productivity tools",
  ],
  alternates: {
    canonical: "https://lacurations.vercel.app",
  },
  authors: [{ name: "LA Curations" }],
  icons: {
    icon: [
      {
        url: "/logo64.png",
        sizes: "64x64 32x32 24x24 16x16",
        type: "image/png",
      },
      { url: "/logo512.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [
      {
        url: "/logo64.png",
        sizes: "64x64 32x32 24x24 16x16",
        type: "image/png",
      },
    ],
    shortcut: "/logo64.png",
  },
  openGraph: {
    title: "LA Curations",
    description:
      "Beautifully crafted, ad-free mobile experiences. No tracking, Just pure design.",
    url: "https://lacurations.vercel.app",
    siteName: "LA Curations",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://lacurations.vercel.app/assets/images/theater/la-og-image.png",
        width: 1200,
        height: 630,
        alt: "LA Curations Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LA Curations",
    description:
      "Beautifully crafted, ad-free mobile experiences. No tracking, Just pure design.",
    creator: "@lacurations",
    images: [
      "https://lacurations.vercel.app/assets/images/theater/la-og-image.png",
    ],
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "LA Curations",
    url: "https://lacurations.vercel.app",
    logo: "https://lacurations.vercel.app/logo.png",
    sameAs: [
      "https://x.com/lacurations",
      "https://instagram.com/lacurations",
      // "https://reddit.com/r/lacurations",
      // "https://youtube.com/@la_curations",
      // Add other social profiles here
    ],
    description:
      "Independent software studio acting as a portfolio for premium applications and digital products.",
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeHero />
      <ValueProps />
      <AppShowcase />
      <Founder />
      <Socials />
      <Footer />
    </main>
  );
}
