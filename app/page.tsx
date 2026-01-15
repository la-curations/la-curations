import ValueProps from "@/components/site/ValueProps";
import AppShowcase from "@/components/site/AppShowcase";
import Footer from "@/components/site/Footer";
import Founder from "@/components/site/Founder";
import Socials from "@/components/site/Socials";
import HomeHero from "@/components/site/HomeHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://lacurations.vercel.app"),
  title: "LA Curations - Curated for you",
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
        url: "https://lacurations.vercel.app/assets/images/LA/la-og-image.png",
        width: 1200,
        height: 630,
        alt: "LA Curations - Independent App Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LA Curations",
    description:
      "Beautifully crafted, ad-free mobile experiences. No tracking, Just pure design.",
    site: "@lacurations",
    creator: "@lacurations",
    images: ["https://lacurations.vercel.app/assets/images/LA/la-og-image.png"],
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
      "https://threads.com/@lacurations",
      "https://facebook.com/lacurations",
    ],
    description:
      "Independent software studio building premium, privacy-focused applications like Theater. LA Curations crafts digital experiences with zero tracking and ad-free interfaces.",
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

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "LA Curations",
            url: "https://lacurations.vercel.app",
          }),
        }}
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
