"use client";

import Image from "next/image";
import React, { useState } from "react";
import Toast from "../ui/Toast";
import { Mail, Check, X } from "lucide-react";
import { joinWaitlist } from "@/app/actions/waitlist";

const ExperienceTheaterNow = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const trackInterest = (platform: string) => {
    // Show visual feedback
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);

    // Track in analytics
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "generate_lead", {
        event_category: "engagement",
        event_label: `Interest in ${platform}`,
        value: 1,
      });
    }
  };

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const result = await joinWaitlist(email, "ios");

      if (result.success) {
        setStatus("success");
        setSuccessMessage(result.message || "You're on the iOS waitlist!");
        setEmail("");

        // Analytics
        if (typeof window !== "undefined" && (window as any).gtag) {
          (window as any).gtag("event", "waitlist_signup", {
            event_category: "engagement",
            event_label: "Waitlist iOS Modal",
            value: 1,
          });
        }

        // Close modal after success after a delay
        setTimeout(() => {
          setIsModalOpen(false);
          setStatus("idle");
        }, 3000);
      } else {
        setStatus("error");
        setErrorMessage(result.error || "Failed to join waitlist.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Connection error. Please try again.");
    }
  };

  return (
    <section className="relative w-screen py-20 lg:py-32 px-4 lg:px-8 overflow-hidden">
      {/* Reusable Toast Notification */}
      <Toast
        isVisible={showNotification}
        message="Launching soon! Thanks for showing interest."
      />

      {/* Glass Waitlist Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300 cursor-pointer"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-lg bg-[#0a0a1a]/80 backdrop-blur-2xl border-2 border-white/10 rounded-[32px] p-8 md:p-10 shadow-2xl animate-in zoom-in-95 duration-300 cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {status === "success" ? (
              <div className="text-center py-8 animate-in slide-in-from-bottom-4 duration-500">
                <div className="bg-[#39ff14]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#39ff14]/20">
                  <Check className="w-10 h-10 text-[#39ff14]" />
                </div>
                <h3 className="text-3xl font-black text-white mb-4">
                  You&apos;re in!
                </h3>
                <p className="text-white/60 text-lg leading-relaxed">
                  {successMessage}
                </p>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h3 className="text-3xl font-black text-white mb-2">
                    iOS{" "}
                    <span className="bg-clip-text text-transparent bg-linear-to-r from-[#8aabff] to-[#f863da] not-italic">
                      Waitlist
                    </span>
                  </h3>
                  <p className="text-white/50">
                    Be the first to experience the Theater on iPhone.
                  </p>
                </div>

                <form
                  onSubmit={handleWaitlistSubmit}
                  className="flex flex-col gap-4"
                >
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-focus-within:text-[#8aabff] transition-colors" />
                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={status === "loading"}
                      className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-[#8aabff]/30 focus:bg-white/10 transition-all text-base"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-red-400 text-xs font-medium italic">
                      {errorMessage}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="h-14 bg-linear-to-r from-[#7054ff] to-[#f863da] rounded-full text-white font-bold text-base hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-[#8aabff]/20 flex items-center justify-center disabled:opacity-50"
                  >
                    {status === "loading" ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      "Join the Waitlist"
                    )}
                  </button>
                </form>

                <p className="mt-8 text-center text-white/20 text-[10px] font-medium tracking-[0.2em]">
                  Zero Data Collection • Pure Cinematic Bliss
                </p>
              </>
            )}
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto text-center">
        <div className="relative">
          <div className="h-[80] w-[50%] bg-gradient-to-r from-[#000013] to-transparent absolute -left-10 z-10"></div>

          <h2 className="text-4xl lg:text-6xl xl:text-7xl font-black text-white mb-12">
            Experience the{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8aabff] to-[#f863da]">
              Theater
            </span>{" "}
            now
          </h2>
          <div className="h-full w-[30%] bg-gradient-to-r from-transparent to-[#000013] absolute top-0 -right-20 z-10"></div>
        </div>

        <div className="flex items-center justify-center gap-8">
          {/* Google Play Store */}
          <a
            href="https://play.google.com/store/apps/details?id=com.lacurations.theater&hl=en_IN"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => trackInterest("Google Play")}
            aria-label="Pre-register for Theater App on Google Play Store"
          >
            <Image
              src="/assets/images/theater/Play.png"
              alt="Pre-register for Theater App on Google Play Store"
              width={250}
              height={70}
              className="w-[150px] h-[50px] lg:w-[250px] lg:h-[70px] object-contain relative z-10"
            />
          </a>

          <span className="w-[1px] h-20 lg:h-30 bg-gradient-to-b from-transparent via-[#f863da] to-transparent"></span>

          <div className="flex flex-col items-center gap-2">
            <div
              className="flex flex-col items-start italic text-white/60 font-light text-sm lg:text-xl cursor-default transition-colors"
              onClick={() => trackInterest("iOS")}
            >
              <span>Soon on iOS</span>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-1 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full text-[12px] lg:text-sm font-bold text-white transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTheaterNow;
