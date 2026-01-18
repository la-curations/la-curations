import type { Metadata } from "next";
import { Geologica } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geologica = Geologica({
  subsets: ["latin"],
  variable: "--font-geologica",
  display: "swap",
});

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
    "Movie Tracker",
    "TV Show Tracker",
    "AI Streaming Guide",
    "No ads movie app",
  ],
  authors: [{ name: "LA Curations" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo64.png", type: "image/png", sizes: "64x64" },
      { url: "/logo512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/logo512.png", sizes: "512x512", type: "image/png" }],
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
    site: "@lacurations",
    creator: "@lacurations",
    images: ["https://lacurations.vercel.app/assets/images/LA/la-og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geologica.className} antialiased no-scrollbar`}>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-CKWE24ND5M`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CKWE24ND5M', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
