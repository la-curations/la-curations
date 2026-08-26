import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative w-full py-16 lg:py-20 px-4 lg:px-8 z-1">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-50">
          <Image
            src="/assets/images/theater/LA.webp"
            alt="Personalized Cinema Companion"
            width={100}
            height={400}
            className="object-contain relative z-10"
          />

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm lg:text-base text-white/60">
            <Link
              href="/privacy-policy"
              className="hover:text-white/80 transition-colors"
            >
              Privacy Policy
            </Link>
            <span>|</span>
            <a
              href="https://lacurations.co.in"
              className="hover:text-white/80 transition-colors"
            >
              LA Curations
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
