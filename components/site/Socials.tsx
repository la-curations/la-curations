"use client";

import React from "react";
import { Ruthie } from "next/font/google";

const ruthie = Ruthie({ weight: "400", subsets: ["latin"] });

const socialLinks = [
  {
    href: "https://instagram.com/lacurations",
    label: "Instagram",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    ),
  },
  {
    href: "https://facebook.com/lacurations",
    label: "Facebook",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
      </svg>
    ),
  },
  {
    href: "https://x.com/lacurations",
    label: "X (Twitter)",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
      </svg>
    ),
  },
  {
    href: "mailto:la.curations@gmail.com",
    label: "Email",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    ),
  },
];

const Socials = () => {
  const trackSocialClick = (platform: string) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "click", {
        event_category: "social",
        event_label: `LA Curations ${platform} Click`,
        value: 1,
      });
    }
  };

  return (
    <section className="pb-32 lg:pb-56 bg-white flex flex-col items-center justify-center overflow-hidden">
      <div className="relative flex items-center justify-center mb-2">
        {/* Background Text */}
        <h2 className="text-[56px] text-center md:text-[96px] lg:text-[128px] font-black text-[#F3F4F6]">
          STAY TUNED
        </h2>
        <div className="absolute inset-x-0 bottom-0 h-16 md:h-24 lg:h-32 bg-linear-to-t from-white to-transparent pointer-events-none"></div>

        {/* Foreground Script Text */}
        <p
          className={`${ruthie.className} absolute mt-5 text-3xl md:text-5xl text-black font-normal tracking-wide`}
        >
          Step into the Curations
        </p>
      </div>

      {/* Social Icons */}
      <div className="flex items-center gap-6 md:gap-8">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("mailto") ? undefined : "_blank"}
            rel={
              link.href.startsWith("mailto") ? undefined : "noopener noreferrer"
            }
            className="w-12 h-12 md:w-18 md:h-18 flex items-center justify-center bg-[#F3F4F6] rounded-2xl text-gray-600 hover:bg-black hover:text-white transition-all duration-300"
            aria-label={link.label}
            onClick={() => trackSocialClick(link.label)}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Socials;
