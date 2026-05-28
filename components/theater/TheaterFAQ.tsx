"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Is Theater really free and ad-free?",
    answer: "Yes, absolutely. Because Theater is built on a serverless local architecture, there are zero centralized database or hosting costs to maintain. Theater passes this advantage directly to you: no ads, no hidden trackers, no subscription tiers, and no payments—ever.",
  },
  {
    question: "How does the serverless/no-backend architecture work?",
    answer: "Unlike standard movie trackers that upload your data to corporate servers, Theater runs entirely on your local device. It utilizes your device's secure local storage to log your diaries, watchlists, and custom filters, keeping your data strictly in your hands. For cloud backup and cross-device syncing, you can connect your own personal Google Drive to act as a secure, private cloud server.",
  },
  {
    question: "Why do I need to bring my own GROQ AI key?",
    answer: "Theater includes powerful AI capabilities such as AI Search Mode, Cinema Chat, and the Next Watch module. To prevent any middleman or corporate server from logging your AI queries, Theater connects directly from your device to the AI service. You simply plug in your own free GROQ API key.",
  },
  {
    question: "How does syncing work across devices without a server?",
    answer: "For seamless cross-device synchronization, Theater establishes direct secure pathways to your personal Google Drive account. Your Google Drive effectively acts as your own private cloud server, so your sync files stay encrypted and under your ownership.",
  },
  {
    question: "How do serverless socials work?",
    answer: "You can easily connect and compare cinematic journeys with friends. By sharing your Google Drive sync pathways directly, Theater maps and highlights shared watchlists and diary logs without passing any data through a centralized social network database.",
  },
  {
    question: "Which platforms are currently supported?",
    answer: "Theater has launched on Android with comprehensive, universal support for Mobile, Tablet, and TV interfaces. An iOS version is currently in development.",
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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8aabff] to-[#f863da]">
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
