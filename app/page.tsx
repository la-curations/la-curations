import ValueProps from "@/components/site/ValueProps";
import AppShowcase from "@/components/site/AppShowcase";
import Footer from "@/components/site/Footer";
import Founder from "@/components/site/Founder";
import Socials from "@/components/site/Socials";
import HomeHero from "@/components/site/HomeHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LA Curations - Top Curated Apps & Software Reviews",
  description:
    "We curate the best apps for productivity, design, and entertainment. Discover high-quality software recommendations from LA Curations.",
  keywords: [
    "LA Curations",
    "best productivity apps",
    "curated software",
    "app reviews",
    "design tools",
    "software recommendations",
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
      "https://twitter.com/lacurations",
      // Add other social profiles here
    ],
    description:
      "Curating the finest applications and software for productivity and creativity.",
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
