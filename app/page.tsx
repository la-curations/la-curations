import ValueProps from "@/components/site/ValueProps";
import AppShowcase from "@/components/site/AppShowcase";
import Footer from "@/components/site/Footer";
import Founder from "@/components/site/Founder";
import Socials from "@/components/site/Socials";
import HomeHero from "@/components/site/HomeHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LA Curations - Curated for you",
  description:
    "We build and curate high-quality software for productivity and design. Explore the new release of Theater App.",
  keywords: [
    "LA Curations",
    "independent developer",
    "software studio",
    "Theater App",
    "premium software",
    "design tools",
  ],
  alternates: {
    canonical: "https://lacurations.vercel.app",
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
