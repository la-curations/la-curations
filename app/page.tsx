import ValueProps from "@/components/site/ValueProps";
import AppShowcase from "@/components/site/AppShowcase";
import Footer from "@/components/site/Footer";
import Founder from "@/components/site/Founder";
import Socials from "@/components/site/Socials";
import HomeHero from "@/components/site/HomeHero";
import FAQ from "@/components/site/FAQ";
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
    "Movie Tracker",
    "TV Show Tracker",
    "AI Streaming Guide",
    "No ads movie app",
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
  const faqs = [
    {
      q: "Is Theater free?",
      a: "Theater is a permanently free, ad-free experience. There are no trackers, no hidden fees, and no data collection—ever.",
    },
    {
      q: "Which platforms is the Theater App on?",
      a: "Theater is launching first on Android with universal support for Mobile, Tablet, and TV. An iOS version is currently in development.",
    },
    {
      q: "Is LA Curations a team or individual?",
      a: "LA Curations is an independent studio founded by Leo Antony (Software Engineer), dedicated to crafting refined, privacy-first digital tools.",
    },
  ];

  const organizationJsonLd = {
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

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  const webSiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "LA Curations",
    url: "https://lacurations.vercel.app",
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
      />
      <HomeHero />
      <ValueProps />
      <AppShowcase />
      <Founder />
      <Socials />
      <FAQ />
      <Footer />
    </main>
  );
}
