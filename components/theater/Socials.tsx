"use client";

import React from "react";
import { Ruthie } from "next/font/google";

const ruthie = Ruthie({ weight: "400", subsets: ["latin"] });

const socialLinks = [
  {
    href: "https://instagram.com/theaterapp",
    label: "Instagram",
    fullLabel: "Follow Theater App on Instagram",
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
    href: "https://www.facebook.com/share/16hM88wteh/?mibextid=wwXIfr",
    label: "Facebook",
    fullLabel: "Follow Theater App on Facebook",
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
    fullLabel: "Follow LA Curations on X (Twitter)",
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
    href: "mailto:hello.lacurations@gmail.com",
    label: "Email",
    fullLabel: "Contact Theater App via Email",
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
        event_label: `Theater ${platform} Click`,
        value: 1,
      });
    }
  };

  return (
    <section
      aria-label="Theater Social Links"
      className="pb-32 lg:pb-56 bg-[#000013] flex flex-col items-center justify-center overflow-hidden relative z-10"
    >
      <div className="relative flex items-center justify-center mb-2">
        {/* Background Text - Subtle for Dark Mode */}
        <h2 className="text-[56px] text-center md:text-[96px] lg:text-[128px] font-black text-white/15 uppercase tracking-tighter">
          STAY TUNED
        </h2>
        <div className="absolute inset-x-0 bottom-0 h-16 md:h-24 lg:h-32 bg-linear-to-t from-[#000013] to-transparent pointer-events-none"></div>

        {/* Foreground Script Text */}
        <p
          className={`${ruthie.className} absolute mt-5 text-3xl md:text-5xl font-normal tracking-wide bg-clip-text text-transparent bg-linear-to-r from-[#8aabff] to-[#f863da]`}
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
              link.href.startsWith("mailto")
                ? undefined
                : "noopener noreferrer me"
            }
            className="w-12 h-12 md:w-18 md:h-18 flex items-center justify-center bg-white/5 text-white/60 hover:text-white rounded-2xl transition-all duration-300 border border-white/10 hover:border-white/50 shadow-lg shadow-black/20 relative group overflow-hidden"
            aria-label={link.fullLabel}
            onClick={() => trackSocialClick(link.label)}
          >
            <div className="absolute inset-0 bg-linear-to-br from-[#480ff3] to-[#ff35d7] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="sr-only">{link.fullLabel}</span>
            <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">
              {link.icon}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Socials;
