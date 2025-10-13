"use client";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Placeholder for integration (Buttondown, ConvertKit, Mailchimp, etc.)
    // For now, show a simple success state.
    setSubmitted(true);
  }

  return (
    <section id="newsletter" className="py-12 lg:py-16 scroll-mt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
          <h2 className="font-black text-2xl md:text-3xl text-white">Stay in the loop</h2>
          <p className="mt-2 text-gray-400 max-w-2xl">
            Get product updates and new launches from LA Curations.
          </p>
          {!submitted ? (
            <form onSubmit={onSubmit} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-xl">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@domain.com"
                className="flex-1 rounded-xl bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-gray-500 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <button
                type="submit"
                className="rounded-xl bg-white text-[#0b0019] px-5 py-2.5 text-sm font-semibold hover:bg-white/90 transition"
              >
                Subscribe
              </button>
            </form>
          ) : (
            <p className="mt-6 text-sm text-green-400">Thanks! You'll hear from us soon.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
