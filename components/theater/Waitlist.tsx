"use client";

import React, { useState } from "react";
import { Check, Mail, Smartphone, Apple } from "lucide-react";
import { joinWaitlist } from "@/app/actions/waitlist";

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [platform, setPlatform] = useState<"android" | "ios">("android");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const result = await joinWaitlist(email, platform);

      if (result.success) {
        setStatus("success");
        setSuccessMessage(
          result.message ||
            `You're officially on the ${platform.toUpperCase()} waitlist. We'll ping you as soon as we're ready to launch.`,
        );
        setEmail("");
      } else {
        setStatus("error");
        setErrorMessage(result.error || "Failed to join waitlist.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Connection error. Please try again.");
    }

    // Track event
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "waitlist_signup", {
        event_category: "engagement",
        event_label: `Waitlist ${platform.toUpperCase()}`,
        value: 1,
      });
    }
  };

  return (
    <section
      id="waitlist"
      className="relative w-full py-24 px-4 lg:px-8 bg-transparent"
    >
      <div className="max-w-4xl mx-auto relative">
        <div className="backdrop-blur-3xl border-2 border-white/30 rounded-[32px] md:rounded-[48px] p-8 md:p-16 text-center">
          <div className="bg-linear-to-b from-[#00040d00] to-[#000013] -rotate-5 z-5 absolute -left-10 -right-10 -bottom-10 w-screen h-[700px]"></div>
          {/* Subtle animated border gradient */}
          <div className="absolute inset-0 bg-linear-to-br from-[#8aabff]/5 to-[#f863da]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

          <div className="relative z-10 flex flex-col items-center">
            {status === "success" ? (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 flex flex-col items-center">
                <Check className="w-30 h-30 text-[#ffffff39] mb-10" />
                <h3 className="text-3xl md:text-5xl font-black text-white mb-4">
                  Welcome aboard!
                </h3>
                <p className="text-white/60 text-lg max-w-md mx-auto leading-relaxed">
                  {successMessage}
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-8 text-white/40 hover:text-white transition-colors text-sm font-medium underline"
                >
                  Join with another email
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-[1.1]">
                  Join the{" "}
                  <span className="bg-clip-text text-transparent bg-linear-to-r from-[#8aabff] to-[#f863da]">
                    Waitlist
                  </span>
                </h2>
                <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                  Theater is redefining how you track cinema. Join the waitlist
                  for your preferred platform. No ads, just magic.
                </p>

                <div className="w-full max-w-md flex flex-col gap-2">
                  {/* Platform Switcher */}
                  <div className="grid grid-cols-2 gap-2 p-1 bg-[#fafafa0f] border-2 border-b-0 border-[#fafafa1e] rounded-full relative">
                    <button
                      type="button"
                      onClick={() => setPlatform("android")}
                      className={`relative z-10 py-3 rounded-full flex items-center justify-center gap-2 text-sm font-bold transition-all duration-300 ${
                        platform === "android"
                          ? "text-white"
                          : "text-white/40 hover:text-white/60"
                      }`}
                    >
                      <Smartphone className="w-4 h-4" />
                      Android
                    </button>
                    <button
                      type="button"
                      onClick={() => setPlatform("ios")}
                      className={`relative z-10 py-3 rounded-full flex items-center justify-center gap-2 text-sm font-bold transition-all duration-300 ${
                        platform === "ios"
                          ? "text-white"
                          : "text-white/40 hover:text-white/60"
                      }`}
                    >
                      <Apple className="w-4 h-4" />
                      iOS
                    </button>

                    {/* Sliding highlight */}
                    <div
                      className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-[#fafafa0f] border-2 border-b-0 border-[#fafafa1e] rounded-full transition-all duration-300 ease-out shadow-lg ${
                        platform === "android"
                          ? "left-1"
                          : "left-[calc(50%+1px)]"
                      }`}
                    />
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="w-full flex flex-col gap-3 relative"
                  >
                    <div className="flex-1 relative group">
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
                      <p className="text-red-400 text-xs text-left px-1 font-medium italic">
                        {errorMessage}
                      </p>
                    )}
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="h-14 px-8 bg-linear-to-r from-[#7054ff] to-[#ff4ddb] rounded-full text-white font-bold text-base hover:scale-[1.01] active:scale-[0.99] transition-all shadow-lg shadow-[#8aabff]/20 flex items-center justify-center no-wrap whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group w-max mx-auto"
                    >
                      {status === "loading" ? (
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <span className="flex items-center gap-2">
                          Join {platform === "ios" ? "iOS" : "Android"} Waitlist
                        </span>
                      )}
                    </button>
                  </form>
                </div>

                <p className="mt-8 text-white/30 text-[10px] font-medium tracking-[0.2em]">
                  Zero Data Collection • Pure Cinematic Bliss
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
