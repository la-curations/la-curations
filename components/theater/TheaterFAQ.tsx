"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What does Theater offer?",
    answer: "Theater is an all-in-one entertainment app combining three major experiences into a single, distraction-free interface: Cinema Intelligence (AI plot search, discovery, and personal watch diaries), Free Cinema (curated full-length movies and vertical cinematic reels), and Live TV (IPTV television streaming with channel dial navigation).",
  },
  {
    question: "How does Live TV work?",
    answer: "Theater Live is a lightweight, high-performance IPTV streaming player. You can import your own M3U playlists or explore public broadcasts. It features tactile vertical channel surfing, an interactive TV channel dial, aspect ratio controls, and landscape full-screen mode.",
  },
  {
    question: "Are the Free movies legal and truly free?",
    answer: "Yes, 100%. All full-length films and cinematic reels in Theater are legally licensed and curated from public domain sources and authorized streaming providers. There are no paywalls, hidden fees, or subscriptions.",
  },
  {
    question: "Is Theater really ad-free and privacy-focused?",
    answer: "Yes, completely. Theater requires zero accounts or logins, employs zero advertising or tracking SDKs, and never collects or sells your viewing data. Everything stays on your local device and private personal cloud.",
  },
  {
    question: "How does the serverless/no-backend architecture work?",
    answer: "Unlike standard streaming and tracking platforms that harvest your profile on centralized corporate databases, Theater runs locally on your device. For cloud backup and cross-device sync, it communicates directly with your personal Google Drive or Trakt account.",
  },
  {
    question: "Which languages are supported?",
    answer: "Theater is globally accessible and fully localized across 17 languages: English, Spanish, French, German, Portuguese, Russian, Turkish, Vietnamese, Indonesian, Japanese, Korean, Chinese, Latin, Hindi, Tamil, Malayalam, and Telugu.",
  },
  {
    question: "Which platforms are currently supported?",
    answer: "Theater is available on Android with universal, fluid optimization for smartphones, foldable devices, tablets, and Android TV. An iOS version is currently in active development.",
  },
];

const TheaterFAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative w-screen py-20 lg:py-32 px-4 lg:px-8 overflow-hidden bg-[#000013]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tight">
            Frequently Asked{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#AA4EFF] to-[#FF5E87]">
              Questions
            </span>
          </h2>
          <p className="mt-4 text-white/50 text-base lg:text-lg max-w-xl mx-auto font-light">
            Everything you need to know about Theater's serverless, privacy-first cinema tracker.
          </p>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className="bg-[#0a0a1a]/40 backdrop-blur-md border border-white/5 hover:border-white/10 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 lg:py-6 flex items-center justify-between text-left gap-4 hover:bg-white/[0.02] transition-colors cursor-pointer"
                >
                  <span className="font-bold text-white text-base lg:text-lg">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-white/40 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#f863da]" : ""
                      }`}
                  />
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-[500px] border-t border-white/5" : "max-h-0"
                    }`}
                >
                  <p className="p-6 text-white/60 text-sm lg:text-base leading-relaxed font-light">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TheaterFAQ;
