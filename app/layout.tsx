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
    "Independent software studio building premium apps for tailored experiences. LA Curations creates high-quality apps and softwares.",
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
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
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
    creator: "@lacurations", // Placeholder, useful if you have a handle
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
