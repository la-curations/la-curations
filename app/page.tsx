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
  authors: [{ name: "LA Curations" }],
  icons: {
    icon: [
      { url: "/logo512.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/logo512.png", sizes: "512x512", type: "image/png" }],
    shortcut: "/logo512.png",
  },
  openGraph: {
    title: "LA Curations",
    description:
      "Beautifully crafted, ad-free mobile experiences. No tracking, just pure design.",
    url: "https://lacurations.vercel.app",
    siteName: "LA Curations",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo512.png",
        width: 512,
        height: 512,
        alt: "LA Curations Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LA Curations",
    description: "Curated for you",
    creator: "@la_curations", // Placeholder, useful if you have a handle
    images: ["/logo512.png"],
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
      "https://x.com/la_curations",
      "https://instagram.com/la_curations",
      "https://reddit.com/r/la_curations",
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
