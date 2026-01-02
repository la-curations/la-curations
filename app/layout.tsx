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
    default: "LA Curations - Curated Apps & Software Reviews",
    template: "%s | LA Curations",
  },
  description:
    "Discover the best apps and software curated by LA Curations. Honest reviews and hand-picked recommendations for productivity and entertainment.",
  keywords: [
    "best apps",
    "software reviews",
    "curated apps",
    "productivity tools",
    "LA Curations",
  ],
  authors: [{ name: "LA Curations" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "LA Curations",
    description: "Apps curated by LA Curations",
    url: "https://lacurations.vercel.app",
    siteName: "LA Curations",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LA Curations",
    description: "Apps curated by LA Curations",
    creator: "@lacurations", // Placeholder, useful if you have a handle
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
