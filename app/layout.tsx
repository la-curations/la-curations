import type { Metadata } from "next";
import { Geologica } from "next/font/google";
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
  description:
    "Independent software studio building premium apps for tailored experiences. LA Curations creates high-quality apps and software.",
  applicationName: "LA Curations",
  appleWebApp: {
    title: "LA Curations",
    statusBarStyle: "default",
    capable: true,
  },
  manifest: "/manifest.json",
  keywords: [
    "independent developer",
    "software studio",
    "premium apps",
    "Theater App",
    "LA Curations",
    "productivity tools",
  ],
  authors: [{ name: "LA Curations" }],
  icons: {
    icon: [
      { url: "/logo64.png", sizes: "64x64 32x32", type: "image/png" },
      { url: "/logo512.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/logo512.png", sizes: "512x512", type: "image/png" }],
    shortcut: "/logo512.png",
  },
  openGraph: {
    title: "LA Curations",
    description: "Curated for you",
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
    creator: "@lacurations",
    images: ["/logo512.png"],
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
        {children}
      </body>
    </html>
  );
}
