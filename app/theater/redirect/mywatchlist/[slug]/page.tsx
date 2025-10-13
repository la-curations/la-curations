"use client";

import React, { useCallback, useMemo, useState } from "react";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default function MyWatchlistRedirectPage({ params }: PageProps) {
  // Unwrap params Promise per Next.js migration (params is now a Promise)
  const { slug } = React.use(params);
  const decoded = useMemo(() => {
    try {
      // In case the slug is URL-encoded
      return decodeURIComponent(slug || "");
    } catch {
      return slug || "";
    }
  }, [slug]);

  const [copied, setCopied] = useState(false);

  const onCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(decoded);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy:", err);
      setCopied(false);
      alert("Copy failed. Please copy manually.");
    }
  }, [decoded]);

  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center px-6">
      <h1 className="font-black text-center lg:text-left lg:text-7xl text-5xl bg-gradient-to-b from-[#ffffff4b] to-[#0b00194b] text-transparent bg-clip-text">
        My Watchlist
      </h1>
      <div className="p-4 break-words font-mono text-sm lg:max-w-[40vw] max-w-[90vw]">
        {decoded || <span className="opacity-60">(empty)</span>}
      </div>
      <div className="mt-4 flex items-center gap-3">
        <button
          onClick={onCopy}
          className="bg-gradient-to-r from-[#6702f6] to-[#fa037f] text-white font-semibold px-4 py-2 rounded-md text-sm cursor-pointer"
        >
          {copied ? "Copied!" : "Copy Code"}
        </button>
      </div>
    </main>
  );
}
