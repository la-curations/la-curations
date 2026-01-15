import React from "react";
import { Waterfall } from "next/font/google";

const waterfall = Waterfall({ weight: "400" });

const Founder = () => {
  return (
    <div className="my-32 lg:my-56 bg-white text-black">
      <div className="w-screen relative flex flex-col items-center justify-center">
        <p className="text-4xl md:text-6xl lg:text-[110px] font-black text-[#6767674a]">
          Handcrafted by One
        </p>
        <div className="absolute inset-x-0 -bottom-3 lg:h-64 md:h-32 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      </div>
      <div className="container mx-auto px-4">
        <div className="xl:-mt-12 lg:-mt-12 -mt-5 mb-20 text-center">
          <div className="relative">
            <h2 className="text-lg md:text-3xl xl:text-5xl mx-5 font-black tracking-tight mb-6">
              Independently made. Deliberately crafted.
            </h2>
          </div>
          <p className="max-w-[70%] lg:max-w-4xl mx-auto text-xs text-gray-600 font-light leading-relaxed mt-5">
            Built by one. Crafted with care. Designed for a more considered
            digital experience.
          </p>
        </div>
      </div>

      <p className="max-w-[80%] lg:max-w-4xl text-center font-semibold lg:text-2xl text-md mx-auto leading-relaxed mt-10">
        Every decision, every detail, and every line of code is made with care.
        Thank you for being part of this journey and for supporting.
      </p>

      <div className="max-w-5xl flex flex-col items-center justify-center gap-2 mx-auto mt-20">
        <p
          className={`${waterfall.className} text-xl md:text-2xl lg:text-3xl text-center font-semibold text-[#000000] tracking-tight mt-10`}
        >
          Everything under LA Curations is imagined, designed, and built by
        </p>
        <h1 className="text-4xl md:text-5xl font-black">LEO ANTONY</h1>
        <p className="text-md text-gray-600 font-light leading-relaxed">
          Maker of LA Curations
        </p>

        {/* Founder Socials */}
        <div className="flex items-center gap-4 mt-6">
          {/* Instagram */}
          <a
            href="https://instagram.com/leoantony2002"
            target="_blank"
            rel="noopener noreferrer"
            className="w-15 h-15 flex items-center justify-center bg-[#F3F4F6] rounded-full text-gray-600 hover:bg-black hover:text-white transition-all duration-300"
            aria-label="Leo Antony's Instagram"
          >
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
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/leo-antony"
            target="_blank"
            rel="noopener noreferrer"
            className="w-15 h-15 flex items-center justify-center bg-[#F3F4F6] rounded-full text-gray-600 hover:bg-black hover:text-white transition-all duration-300"
            aria-label="Leo Antony's LinkedIn"
          >
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
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>

          {/* Email */}
          <a
            href="mailto:leoantony20025@gmail.com"
            className="w-15 h-15 flex items-center justify-center bg-[#F3F4F6] rounded-full text-gray-600 hover:bg-black hover:text-white transition-all duration-300"
            aria-label="Email Leo Antony"
          >
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
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Founder;
