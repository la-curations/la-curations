"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  BookOpen,
  Tv,
  Film,
  Sparkles,
  Layers,
  Bookmark,
  Calendar,
  Share2,
  ShieldCheck,
  Sliders,
  CheckCircle2,
  ChevronRight,
  ArrowLeft,
  Smartphone,
  Play,
  Radio,
  RotateCcw,
  Cloud,
  Users,
  Key,
  ExternalLink,
  Info,
  HelpCircle,
  X,
} from "lucide-react";

interface SectionItem {
  id: string;
  title: string;
  icon: React.ReactNode;
}

const chapters: { id: string; title: string; items: SectionItem[] }[] = [
  {
    id: "philosophy",
    title: "1. Philosophy & Setup",
    items: [
      {
        id: "zero-backend",
        title: "Zero-Account Privacy Model",
        icon: <ShieldCheck className="w-4 h-4 text-white/60" />,
      },
      {
        id: "first-run",
        title: "First-Run & Personalization",
        icon: <Sliders className="w-4 h-4 text-white/60" />,
      },
      {
        id: "dns-fallback",
        title: "DNS Fallback & Resilience",
        icon: <Radio className="w-4 h-4 text-white/60" />,
      },
    ],
  },
  {
    id: "tracker",
    title: "2. Cinema Tracker & Library",
    items: [
      {
        id: "discovery-home",
        title: "Home Hub & Continue Watching",
        icon: <Layers className="w-4 h-4 text-white/60" />,
      },
      {
        id: "my-filters",
        title: "Precision Engine: My Filters",
        icon: <Sliders className="w-4 h-4 text-white/60" />,
      },
      {
        id: "cinema-diary",
        title: "The Cinema Diary (Logging & Progress)",
        icon: <Bookmark className="w-4 h-4 text-white/60" />,
      },
      {
        id: "cinema-wrapped",
        title: "Cinema Wrapped & Social Recaps",
        icon: <Sparkles className="w-4 h-4 text-white/60" />,
      },
      {
        id: "poster-lab",
        title: "Poster Lab (Studio Visualizer)",
        icon: <Film className="w-4 h-4 text-white/60" />,
      },
      {
        id: "release-calendar",
        title: "Release Calendar & Reminders",
        icon: <Calendar className="w-4 h-4 text-white/60" />,
      },
    ],
  },
  {
    id: "free-reels",
    title: "3. Free Movies & Reels",
    items: [
      {
        id: "free-movies",
        title: "Curated Free Movie Catalog",
        icon: <Play className="w-4 h-4 text-white/60" />,
      },
      {
        id: "reels-feed",
        title: "The Vertical Cinematic Reels Feed",
        icon: <Film className="w-4 h-4 text-white/60" />,
      },
    ],
  },
  {
    id: "live-tv",
    title: "4. Live Television & IPTV",
    items: [
      {
        id: "vertical-surfing",
        title: "Vertical Channel Surfing",
        icon: <Tv className="w-4 h-4 text-white/60" />,
      },
      {
        id: "rotary-dial",
        title: "The Tactile Rotary TV Dial",
        icon: <Radio className="w-4 h-4 text-white/60" />,
      },
      {
        id: "m3u-epg",
        title: "Playlists (M3U) & TV Guide (EPG)",
        icon: <Layers className="w-4 h-4 text-white/60" />,
      },
      {
        id: "player-gestures",
        title: "Player Gestures, Aspect & PiP",
        icon: <Smartphone className="w-4 h-4 text-white/60" />,
      },
    ],
  },
  {
    id: "ai-engine",
    title: "5. Cinema AI Intelligence",
    items: [
      {
        id: "groq-setup",
        title: "Groq API Setup",
        icon: <Key className="w-4 h-4 text-white/60" />,
      },
      {
        id: "semantic-search",
        title: "Semantic Plot Search",
        icon: <Search className="w-4 h-4 text-white/60" />,
      },
      {
        id: "cinema-chat",
        title: "Conversational Cinema Chat",
        icon: <Sparkles className="w-4 h-4 text-white/60" />,
      },
      {
        id: "next-watch",
        title: "Context-Aware 'Next Watch'",
        icon: <CheckCircle2 className="w-4 h-4 text-white/60" />,
      },
    ],
  },
  {
    id: "cloud-sync",
    title: "6. Sync, Friends & Data Portability",
    items: [
      {
        id: "google-drive-sync",
        title: "Private Google Drive Delta Sync",
        icon: <Cloud className="w-4 h-4 text-white/60" />,
      },
      {
        id: "friends-network",
        title: "Friends Taste Compatibility",
        icon: <Users className="w-4 h-4 text-white/60" />,
      },
      {
        id: "trakt-scrobbler",
        title: "Two-Way Trakt.tv Integration",
        icon: <RotateCcw className="w-4 h-4 text-white/60" />,
      },
      {
        id: "csv-export-import",
        title: "Letterboxd & CSV Portability",
        icon: <Share2 className="w-4 h-4 text-white/60" />,
      },
    ],
  },
  {
    id: "hardware-widgets",
    title: "7. Widgets & Hardware Integration",
    items: [
      {
        id: "glance-widgets",
        title: "Android Home Screen Widgets",
        icon: <Smartphone className="w-4 h-4 text-white/60" />,
      },
      {
        id: "device-adaptability",
        title: "Foldable & Tablet Optimization",
        icon: <Layers className="w-4 h-4 text-white/60" />,
      },
    ],
  },
  {
    id: "reference",
    title: "8. Reference & FAQ",
    items: [
      {
        id: "gesture-cheatsheet",
        title: "Complete Gesture Cheatsheet",
        icon: <BookOpen className="w-4 h-4 text-white/60" />,
      },
      {
        id: "troubleshooting",
        title: "Troubleshooting & Diagnostics",
        icon: <HelpCircle className="w-4 h-4 text-white/60" />,
      },
    ],
  },
];

const searchableItems = [
  { id: "zero-backend", title: "Zero-Account Privacy Model", chapter: "Philosophy & Setup", keywords: "privacy local realm database no sign up telemetry accounts" },
  { id: "first-run", title: "First-Run & Personalization", chapter: "Philosophy & Setup", keywords: "onboarding region language streaming ott providers setup" },
  { id: "dns-fallback", title: "DNS Fallback & Resilience", chapter: "Philosophy & Setup", keywords: "dns cloudflare doh doh network tmdb blocked recovery" },
  { id: "discovery-home", title: "Home Hub & Continue Watching", chapter: "Cinema Tracker & Library", keywords: "home feed hero billboard continue watching cinemadna episodes" },
  { id: "my-filters", title: "Precision Engine: My Filters", chapter: "Cinema Tracker & Library", keywords: "filters boolean genre ott decade year rating sliders presets" },
  { id: "cinema-diary", title: "The Cinema Diary (Logging & Progress)", chapter: "Cinema Tracker & Library", keywords: "diary logging progress watching completed dropped rewatch notes mood emojis ticket stubs" },
  { id: "cinema-wrapped", title: "Cinema Wrapped & Social Recaps", chapter: "Cinema Tracker & Library", keywords: "wrapped recaps monthly yearly stats story share instagram" },
  { id: "poster-lab", title: "Poster Lab (Studio Visualizer)", chapter: "Cinema Tracker & Library", keywords: "poster lab artwork wallpaper 9:16 high res export" },
  { id: "release-calendar", title: "Release Calendar & Reminders", chapter: "Cinema Tracker & Library", keywords: "calendar releases theatrical digital notifications reminders" },
  { id: "free-movies", title: "Curated Free Movie Catalog", chapter: "Free Movies & Reels", keywords: "free movies open public domain film noir sci-fi martial arts player" },
  { id: "reels-feed", title: "The Vertical Cinematic Reels Feed", chapter: "Free Movies & Reels", keywords: "reels shorts clips trailers vertical swipe myclips double tap" },
  { id: "vertical-surfing", title: "Vertical Channel Surfing", chapter: "Live Television & IPTV", keywords: "live tv surfing zapping vertical swipe hls channels" },
  { id: "rotary-dial", title: "The Tactile Rotary TV Dial", chapter: "Live Television & IPTV", keywords: "dial rotary channel knob haptic tuning tactile pill" },
  { id: "m3u-epg", title: "Playlists (M3U) & TV Guide (EPG)", chapter: "Live Television & IPTV", keywords: "m3u m3u8 playlists epg xmltv tv guide schedule favorites" },
  { id: "player-gestures", title: "Player Gestures, Aspect & PiP", chapter: "Live Television & IPTV", keywords: "player gestures brightness volume aspect ratio pip picture in picture landscape" },
  { id: "groq-setup", title: "Groq API Setup", chapter: "Cinema AI Intelligence", keywords: "groq api key byok llama 3 setup free ai settings" },
  { id: "semantic-search", title: "Semantic Plot Search", chapter: "Cinema AI Intelligence", keywords: "semantic search natural language plot prompt query description" },
  { id: "cinema-chat", title: "Conversational Cinema Chat", chapter: "Cinema AI Intelligence", keywords: "chat ai discussion film companion conversation recommendations" },
  { id: "next-watch", title: "Context-Aware 'Next Watch'", chapter: "Cinema AI Intelligence", keywords: "next watch recommendations mood time evening suggestions" },
  { id: "google-drive-sync", title: "Private Google Drive Delta Sync", chapter: "Sync, Friends & Data Portability", keywords: "sync google drive cloud delta backup restore" },
  { id: "friends-network", title: "Friends Taste Compatibility", chapter: "Sync, Friends & Data Portability", keywords: "friends share token taste compare friendcompare compatibility" },
  { id: "trakt-scrobbler", title: "Two-Way Trakt.tv Integration", chapter: "Sync, Friends & Data Portability", keywords: "trakt scrobble two way sync ratings history" },
  { id: "csv-export-import", title: "Letterboxd & CSV Portability", chapter: "Sync, Friends & Data Portability", keywords: "letterboxd csv import export migration data freedom" },
  { id: "glance-widgets", title: "Android Home Screen Widgets", chapter: "Widgets & Hardware Integration", keywords: "widgets glance android up next calendar quick navigation home screen" },
  { id: "device-adaptability", title: "Foldable & Tablet Optimization", chapter: "Widgets & Hardware Integration", keywords: "foldable tablet split screen dual screen posture" },
  { id: "gesture-cheatsheet", title: "Complete Gesture Cheatsheet", chapter: "Reference & FAQ", keywords: "gestures swipe tap long press double tap table cheatsheet" },
  { id: "troubleshooting", title: "Troubleshooting & Diagnostics", chapter: "Reference & FAQ", keywords: "troubleshooting faq questions stream offline dns posters" },
];

export default function UserGuideClient() {
  const [activeSection, setActiveSection] = useState("zero-backend");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Filter search results
  const filteredSearchResults = searchQuery.trim()
    ? searchableItems.filter((item) => {
      const q = searchQuery.toLowerCase();
      return (
        item.title.toLowerCase().includes(q) ||
        item.chapter.toLowerCase().includes(q) ||
        item.keywords.toLowerCase().includes(q)
      );
    })
    : [];

  // Close search popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Scroll spy for active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    const allSections = document.querySelectorAll("section[id]");
    allSections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setIsSearchOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#000013] text-white selection:bg-[#FF5E87]/30 selection:text-white">
      {/* Top Header with Gradient & Neat Glass Search Input */}
      <div className="sticky top-0 z-50 w-full backdrop-blur-xl border-b border-white/10 px-4 sm:px-6 lg:px-8 py-3 transition-all bg-[#000013]/90">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 sm:gap-6">
          {/* Brand Logo & Back */}
          <Link
            href="/"
            className="flex items-center gap-2.5 text-white/80 hover:text-white transition-colors group shrink-0"
          >
            <Image
              src="/assets/images/theater/theater64.png"
              alt="Theater Logo"
              width={28}
              height={28}
              className="w-7 h-7 object-contain"
            />
          </Link>

          {/* Neat Glass Search Input with Real-Time Results Popover */}
          <div ref={searchContainerRef} className="relative flex-1 max-w-xl">
            <div className="relative flex items-center w-full px-4 py-2 rounded-full bg-white/[0.06] hover:bg-white/[0.09] focus-within:bg-white/[0.12] border border-white/15 focus-within:border-[#FF5E87]/60 shadow-[0_4px_25px_rgba(0,0,0,0.5)] backdrop-blur-2xl transition-all duration-300">
              <Search className="w-4 h-4 text-white/40 mr-2.5 shrink-0" />
              <input
                type="text"
                placeholder="Search guide (IPTV, Diary, Groq, Widgets, M3U)..."
                value={searchQuery}
                onFocus={() => setIsSearchOpen(true)}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsSearchOpen(true);
                }}
                className="w-full bg-transparent text-xs sm:text-sm text-white placeholder-white/40 outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setIsSearchOpen(false);
                  }}
                  className="p-1 text-white/40 hover:text-white transition-colors ml-1"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Instant Search Results Dropdown */}
            {isSearchOpen && searchQuery.trim().length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 p-2 rounded-2xl bg-[#000013]/95 border border-white/15 backdrop-blur-2xl shadow-2xl z-50 max-h-80 overflow-y-auto space-y-1">
                {filteredSearchResults.length > 0 ? (
                  filteredSearchResults.map((result) => (
                    <button
                      key={result.id}
                      type="button"
                      onClick={() => {
                        scrollTo(result.id);
                        setSearchQuery("");
                        setIsSearchOpen(false);
                      }}
                      className="w-full p-2.5 rounded-xl hover:bg-white/10 text-left transition-colors flex items-center justify-between group cursor-pointer"
                    >
                      <div>
                        <p className="text-xs font-semibold text-white group-hover:text-[#FF5E87] transition-colors">
                          {result.title}
                        </p>
                        <p className="text-[10px] text-white/50">{result.chapter}</p>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-white/40 group-hover:text-white transition-colors" />
                    </button>
                  ))
                ) : (
                  <div className="p-4 text-center text-xs text-white/50">
                    No results found for &ldquo;{searchQuery}&rdquo;
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href="https://play.google.com/store/apps/details?id=com.lacurations.theater&hl=en_IN"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#AA4EFF] to-[#FF5E87] hover:opacity-95 transition-all shadow-md hover:shadow-[0_0_20px_rgba(255,94,135,0.3)] inline-flex items-center gap-1.5"
            >
              <span>Get App</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Welcome Section: Full-width above the 2-column layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6 border-b border-white/10">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-5">
            Experience cinema with{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#AA4EFF] to-[#FF5E87]">
              finesse.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed">
            Welcome to the official user guide for <strong>Theater</strong>. Whether you are building an episode-accurate Cinema Diary, streaming curated legal films, surfing live IPTV with the tactile rotary dial, or querying Groq AI, this guide walks you through every feature.
          </p>
        </div>

        {/* 3 Div Section with 3-5 Word Subtext */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10">
          <div
            onClick={() => scrollTo("discovery-home")}
            className="group p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-white/25 transition-all cursor-pointer shadow-lg flex flex-col items-center text-center gap-2.5"
          >
            <div className="h-8 flex items-center justify-center">
              <Image
                src="/assets/images/theater/theaterswitch.webp"
                alt="Cinema Tracker"
                width={96}
                height={30}
                className="object-contain h-7 w-auto group-hover:scale-105 transition-transform"
              />
            </div>
            <p className="text-xs text-white/60">
              Diary, filters & AI discovery
            </p>
          </div>

          <div
            onClick={() => scrollTo("free-movies")}
            className="group p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-white/25 transition-all cursor-pointer shadow-lg flex flex-col items-center text-center gap-2.5"
          >
            <div className="h-8 flex items-center justify-center">
              <Image
                src="/assets/images/theater/freeswitch.webp"
                alt="Free Movies & Reels"
                width={76}
                height={26}
                className="object-contain h-6 w-auto group-hover:scale-105 transition-transform"
              />
            </div>
            <p className="text-xs text-white/60">
              Curated cinema & vertical reels
            </p>
          </div>

          <div
            onClick={() => scrollTo("vertical-surfing")}
            className="group p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-white/25 transition-all cursor-pointer shadow-lg flex flex-col items-center text-center gap-2.5"
          >
            <div className="h-8 flex items-center justify-center">
              <Image
                src="/assets/images/theater/liveswitch.webp"
                alt="Live Television & IPTV"
                width={76}
                height={26}
                className="object-contain h-6 w-auto group-hover:scale-105 transition-transform"
              />
            </div>
            <p className="text-xs text-white/60">
              Live IPTV
            </p>
          </div>
        </div>
      </div>

      {/* Main Layout Container: Desktop has pinned sticky sidebar, mobile scrolls past nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Left Navigation Panel: stays fixed in view on desktop; on mobile, sits in document flow to scroll past */}
          <aside className="w-full lg:w-72 lg:shrink-0 lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] lg:overflow-y-auto no-scrollbar pt-6 pb-6 lg:py-8 border-b lg:border-b-0 lg:border-r border-white/10">
            <div className="space-y-6 pr-0 lg:pr-3">
              {chapters.map((chapter) => (
                <div key={chapter.id} className="space-y-1.5">
                  <h2 className="text-xs font-semibold text-white/40 px-2.5">
                    {chapter.title}
                  </h2>
                  <div className="space-y-0.5">
                    {chapter.items.map((item) => {
                      const isActive = activeSection === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => scrollTo(item.id)}
                          className={`
                            w-full flex items-center justify-between gap-2.5 px-2.5 py-1.5 rounded-xl text-xs font-medium transition-all text-left group cursor-pointer
                            ${isActive
                              ? "bg-white/10 border border-white/15 text-white font-semibold shadow-sm"
                              : "text-white/60 hover:text-white hover:bg-white/5 border border-transparent"
                            }
                          `}
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="shrink-0 text-white/70 group-hover:text-white">
                              {item.icon}
                            </span>
                            <span className="truncate">{item.title}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 mt-4">
                <div className="flex items-center gap-2 text-xs font-medium text-white/80 mb-1">
                  <HelpCircle className="w-4 h-4 text-[#FF5E87]" />
                  <span>Need personal assistance?</span>
                </div>
                <p className="text-[11px] text-white/50 leading-relaxed mb-2">
                  Reach out directly to the studio team for inquiries.
                </p>
                <a
                  href="mailto:leoantony20025@gmail.com"
                  className="text-[11px] text-[#FF5E87] hover:underline flex items-center gap-1 font-medium"
                >
                  <span>Contact Developer</span>
                  <ChevronRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </aside>

          {/* Right Content Area: scrolls in view */}
          <main className="flex-1 min-w-0 py-6 lg:py-8 space-y-16 pb-24">
            {/* ================================================================= */}
            {/* CHAPTER 1: PHILOSOPHY & SETUP */}
            {/* ================================================================= */}
            <div className="space-y-12">
              <div className="border-b border-white/10 pb-4">
                <span className="text-xs font-medium text-[#FF5E87]">
                  Chapter 1
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold mt-1 text-white">
                  Philosophy & Initial Setup
                </h2>
              </div>

              {/* Section: Zero Backend */}
              <section id="zero-backend" className="space-y-5 scroll-mt-24">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/80">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    The Zero-Account Privacy Model
                  </h3>
                </div>

                <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                  Unlike traditional streaming and tracking apps that hoard your personal watch history on central servers and sell your taste profile to advertising brokers, <strong>Theater is 100% local-first</strong>.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                    <h4 className="font-semibold text-white text-sm mb-1">
                      No Sign-ups or Logins
                    </h4>
                    <p className="text-xs text-white/50 leading-relaxed">
                      Launch the app and begin tracking or streaming instantly. No email address, password, or verification code required.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                    <h4 className="font-semibold text-white text-sm mb-1">
                      Zero Telemetry
                    </h4>
                    <p className="text-xs text-white/50 leading-relaxed">
                      No advertising scripts, no analytics trackers, and no background profiling. Your device never reports your viewing habits.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                    <h4 className="font-semibold text-white text-sm mb-1">
                      Local Realm Database
                    </h4>
                    <p className="text-xs text-white/50 leading-relaxed">
                      Every rating, diary note, and custom filter lives directly inside your phone’s high-speed embedded Realm object store.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex gap-3 text-xs text-white/80 leading-relaxed">
                  <Info className="w-4 h-4 shrink-0 text-white/60 mt-0.5" />
                  <div>
                    <strong>Cross-Device Sync Guarantee:</strong> When you want to synchronize between multiple devices (like your phone and tablet), Theater connects directly to your own personal Google Drive via private encrypted delta bundles. No middleman server ever exists.
                  </div>
                </div>
              </section>

              {/* Section: First Run */}
              <section id="first-run" className="space-y-5 scroll-mt-24">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/80">
                    <Sliders className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    First-Run Wizard & Personalization
                  </h3>
                </div>

                <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                  When you first launch Theater, the onboarding wizard guides you through three quick configuration steps tailored to your country and streaming habits:
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="w-6 h-6 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-xs font-bold shrink-0 text-white">
                      1
                    </span>
                    <div>
                      <h4 className="font-semibold text-sm text-white">
                        Region & Theatrical Country Selection
                      </h4>
                      <p className="text-xs text-white/60 mt-1">
                        Select your country (or let Theater auto-detect your location). This aligns theatrical premiere dates, box-office schedules, and age ratings (e.g., PG-13, R, U/A, 18).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="w-6 h-6 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-xs font-bold shrink-0 text-white">
                      2
                    </span>
                    <div>
                      <h4 className="font-semibold text-sm text-white">
                        Language Preferences (17 Global Languages)
                      </h4>
                      <p className="text-xs text-white/60 mt-1">
                        Choose your interface and content metadata language. Supported languages include English, Spanish, French, German, Portuguese, Russian, Turkish, Vietnamese, Indonesian, Japanese, Korean, Chinese, Latin, Hindi, Tamil, Malayalam, and Telugu.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="w-6 h-6 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-xs font-bold shrink-0 text-white">
                      3
                    </span>
                    <div>
                      <h4 className="font-semibold text-sm text-white">
                        Subscribed Streaming Services (OTT Platforms)
                      </h4>
                      <p className="text-xs text-white/60 mt-1">
                        Select the streaming providers you subscribe to (Netflix, Max, Prime Video, Disney+, Apple TV+, Criterion Channel, Mubi, etc.). Theater creates dedicated &quot;Available On Your OTTs&quot; rails across the entire app so you only see what you can actually watch.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section: DNS Fallback */}
              <section id="dns-fallback" className="space-y-4 scroll-mt-24">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/80">
                    <Radio className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    DNS Fallback & Network Resilience
                  </h3>
                </div>
                <p className="text-white/70 leading-relaxed text-sm">
                  In certain regions or on restrictive Wi-Fi networks, internet service providers occasionally block media database registries (such as TMDB). Theater incorporates an autonomous <strong>DNS over HTTPS (DoH)</strong> recovery fallback using Cloudflare and Google secure endpoints. If your network fails to resolve catalog images or titles, Theater automatically routes requests through secure encrypted tunnels to guarantee uninterrupted discovery.
                </p>
              </section>
            </div>

            {/* ================================================================= */}
            {/* CHAPTER 2: CINEMA TRACKER & LIBRARY */}
            {/* ================================================================= */}
            <div className="space-y-12">
              <div className="border-b border-white/10 pb-4">
                <span className="text-xs font-medium text-[#AA4EFF]">
                  Chapter 2
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold mt-1 text-white">
                  Cinema Tracker & Library Suite
                </h2>
              </div>

              {/* Section: Home Hub */}
              <section id="discovery-home" className="space-y-5 scroll-mt-24">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/80">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Home Hub & Continue Watching
                  </h3>
                </div>

                <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                  The Theater Home Hub is your command center for cinema discovery, intelligently combining curated banners, localized cinema, and your real-time watch progression:
                </p>

                <div className="space-y-4">
                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                    <div className="flex items-center gap-2 text-sm font-semibold text-white">
                      <span className="w-2 h-2 rounded-full bg-[#AA4EFF]" />
                      <span>Featured Hero Billboard</span>
                    </div>
                    <p className="text-xs text-white/60 leading-relaxed">
                      Showcases trending, critically acclaimed releases with high-resolution key art backdrops, official logo treatments, synopsis, age rating badges, runtime, and instant one-tap actions (Add to Watchlist, Log to Diary, or Watch Trailer).
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                    <div className="flex items-center gap-2 text-sm font-semibold text-white">
                      <span className="w-2 h-2 rounded-full bg-white/60" />
                      <span>Continue Watching Rail (Diary Linked)</span>
                    </div>
                    <p className="text-xs text-white/60 leading-relaxed">
                      Directly connected to your Diary. For TV series, it displays your exact current season and episode badge (e.g., <em>S2 · E4</em>) with a visual progress bar. Tap the <strong>+1 Episode</strong> chip to advance your progress by one episode without even opening the detail screen.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                    <div className="flex items-center gap-2 text-sm font-semibold text-white">
                      <span className="w-2 h-2 rounded-full bg-[#FF5E87]" />
                      <span>CinemaDNA Recommendations</span>
                    </div>
                    <p className="text-xs text-white/60 leading-relaxed">
                      A local AI algorithm computes recommendations based on your highest-rated diary entries, favorite directors, and frequently logged genres, completely isolated on your device.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section: My Filters */}
              <section id="my-filters" className="space-y-5 scroll-mt-24">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/80">
                    <Sliders className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Precision Discovery: My Filters
                  </h3>
                </div>

                <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                  Never suffer from decision paralysis again. The <strong>My Filters</strong> engine provides studio-grade multi-variable filtering that goes far beyond basic genre dropdowns:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                    <span className="text-xs font-medium text-white/50">
                      Boolean logic
                    </span>
                    <h4 className="text-sm font-semibold text-white">
                      Multi-Genre AND / OR Pairing
                    </h4>
                    <p className="text-xs text-white/50 leading-relaxed">
                      Find titles that must include both <em>Sci-Fi</em> AND <em>Mystery</em>, while explicitly excluding <em>Horror</em>.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                    <span className="text-xs font-medium text-white/50">
                      Availability engine
                    </span>
                    <h4 className="text-sm font-semibold text-white">
                      Cross-Platform OTT Filter
                    </h4>
                    <p className="text-xs text-white/50 leading-relaxed">
                      Filter titles currently streaming on Netflix OR Prime Video in your country, eliminating rent/buy paywalls.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                    <span className="text-xs font-medium text-white/50">
                      Decade and year sliders
                    </span>
                    <h4 className="text-sm font-semibold text-white">
                      Temporal Range Boundaries
                    </h4>
                    <p className="text-xs text-white/50 leading-relaxed">
                      Pinpoint cinema from exact decades (e.g., 1970–1979) or specific historical release years.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                    <span className="text-xs font-medium text-white/50">
                      Quality threshold
                    </span>
                    <h4 className="text-sm font-semibold text-white">
                      Rating & Vote Count Thresholds
                    </h4>
                    <p className="text-xs text-white/50 leading-relaxed">
                      Set a minimum score (e.g., &ge; 7.8) with at least 500 votes to eliminate low-sample anomalies.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-white/80 leading-relaxed">
                  <strong>Save as Custom Presets:</strong> Once you craft the perfect query (e.g., <em>&quot;80s Cyberpunk on My OTTs &ge; 7.5&quot;</em>), save it with a single tap. Saved presets appear permanently on your Home and Curation screens as live updating carousels.
                </div>
              </section>

              {/* Section: Cinema Diary */}
              <section id="cinema-diary" className="space-y-6 scroll-mt-24">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/80">
                    <Bookmark className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      The Cinema Diary
                    </h3>
                    <p className="text-xs text-white/50">
                      The most comprehensive personal watch record in mobile cinema.
                    </p>
                  </div>
                </div>

                <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                  The Cinema Diary is Theater&apos;s crowning jewel—a meticulously crafted logging subsystem designed for true cinephiles who demand precision, emotion, and aesthetic memories.
                </p>

                {/* Interactive Diary Feature Card */}
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-6">
                  {/* Statuses */}
                  <div>
                    <h4 className="text-xs font-semibold text-white/60 mb-3">
                      1. The Four-State Lifecycle
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                        <span className="text-xs font-semibold text-white">Watching</span>
                        <p className="text-[10px] text-white/50 mt-0.5">Active progress %</p>
                      </div>
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                        <span className="text-xs font-semibold text-white">Completed</span>
                        <p className="text-[10px] text-white/50 mt-0.5">Finished & logged</p>
                      </div>
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                        <span className="text-xs font-semibold text-white">Dropped</span>
                        <p className="text-[10px] text-white/50 mt-0.5">Abandoned with note</p>
                      </div>
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                        <span className="text-xs font-semibold text-white">Plan to Watch</span>
                        <p className="text-[10px] text-white/50 mt-0.5">Priority queue</p>
                      </div>
                    </div>
                  </div>

                  {/* TV Progression */}
                  <div>
                    <h4 className="text-xs font-semibold text-white/60 mb-2">
                      2. TV Series Progression
                    </h4>
                    <p className="text-xs text-white/70 leading-relaxed">
                      For episodic television, Theater tracks your exact position using an intuitive season/episode dial. You can mark entire seasons as watched with one gesture, increment single episodes, or record notes specific to individual episodes (e.g., <em>&quot;Season 3 Episode 8: Incredible cliffhanger!&quot;</em>).
                    </p>
                  </div>

                  {/* Emotional Mood Emojis */}
                  <div>
                    <h4 className="text-xs font-semibold text-white/60 mb-2">
                      3. Emotional Mood Logging
                    </h4>
                    <p className="text-xs text-white/70 leading-relaxed mb-3">
                      Cinema is an emotional medium. Theater allows you to attach an emotional mood badge to every viewing session:
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80">😭 Heartbroken</span>
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80">🤯 Mindblown</span>
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80">🍿 Entertained</span>
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80">😱 Terrified</span>
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80">😴 Bored</span>
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80">🧠 Thoughtful</span>
                    </div>
                  </div>

                  {/* Ticket Stub & Venue */}
                  <div>
                    <h4 className="text-xs font-semibold text-white/60 mb-2">
                      4. Venue Tagging & Ticket Stubs
                    </h4>
                    <p className="text-xs text-white/70 leading-relaxed">
                      Did you watch at home or in a cinema? Tag the physical movie theater (e.g., <em>IMAX Lincoln Square</em>) and snap or upload a photo of your ticket stub. Theater archives the image alongside your entry for nostalgic replay.
                    </p>
                  </div>

                  {/* Multi-session Rewatching */}
                  <div>
                    <h4 className="text-xs font-semibold text-white/60 mb-2">
                      5. Multi-Session Rewatch History
                    </h4>
                    <p className="text-xs text-white/70 leading-relaxed">
                      When you rewatch a favorite film or series, Theater doesn&apos;t overwrite your original watch date. It creates a new historical rewatch session with its own date stamp, progress counter, and rewatch notes.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section: Cinema Wrapped */}
              <section id="cinema-wrapped" className="space-y-4 scroll-mt-24">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/80">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Cinema Wrapped & Social Recaps
                  </h3>
                </div>
                <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                  Experience your personal film festival digest every month and year. Cinema Wrapped calculates:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                    <span className="text-xs text-white/50">Total Time</span>
                    <p className="font-bold text-white text-sm mt-0.5">Minutes & Hours</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                    <span className="text-xs text-white/50">Content Split</span>
                    <p className="font-bold text-white text-sm mt-0.5">Movies vs TV %</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                    <span className="text-xs text-white/50">Mood Graph</span>
                    <p className="font-bold text-white text-sm mt-0.5">Emotional Archetype</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                    <span className="text-xs text-white/50">Top Directors</span>
                    <p className="font-bold text-white text-sm mt-0.5">Auteur DNA</p>
                  </div>
                </div>
                <p className="text-xs text-white/60">
                  Tap <strong>Share to Story</strong> to export ready-to-post 9:16 vertical graphic cards designed for Instagram Stories, TikTok, and WhatsApp.
                </p>
              </section>

              {/* Section: Poster Lab */}
              <section id="poster-lab" className="space-y-4 scroll-mt-24">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/80">
                    <Film className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Poster Lab (Studio Visualizer)
                  </h3>
                </div>
                <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                  Poster Lab transforms any film or series in your library into studio-quality graphic art. Select from alternative international key art, textless posters, and backdrops. Customize badge overlays (IMDb, Rotten Tomatoes, TMDB), typography placement, aspect ratios, and color grading. Save directly to your device gallery or set as high-res phone wallpapers.
                </p>
              </section>

              {/* Section: Release Calendar */}
              <section id="release-calendar" className="space-y-4 scroll-mt-24">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/80">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Release Calendar & Reminders
                  </h3>
                </div>
                <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                  Track upcoming theatrical debuts and digital streaming drops with an interactive monthly timetable. Tap the bell icon on any upcoming title to set a scheduled notification reminder powered by your device&apos;s native alarm manager.
                </p>
              </section>
            </div>

            {/* ================================================================= */}
            {/* CHAPTER 3: FREE MOVIES & REELS */}
            {/* ================================================================= */}
            <div className="space-y-12">
              <div className="border-b border-white/10 pb-4">
                <span className="text-xs font-medium text-[#FF5E87]">
                  Chapter 3
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold mt-1 text-white">
                  Free Cinema & Reels Feed
                </h2>
              </div>

              {/* Section: Free Movies */}
              <section id="free-movies" className="space-y-5 scroll-mt-24">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/80">
                    <Play className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Curated Free Full-Length Cinema
                  </h3>
                </div>

                <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                  Switch the mode pill to <strong>Free</strong> to enter a curated universe of 100% legal, open-access, and public domain full-length movies.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                    <h4 className="font-semibold text-white text-sm mb-1">Golden Age Film Noir</h4>
                    <p className="text-xs text-white/50 leading-relaxed">
                      Remastered suspense and mystery masterpieces from legendary mid-century auteurs.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                    <h4 className="font-semibold text-white text-sm mb-1">Vintage Sci-Fi & Horror</h4>
                    <p className="text-xs text-white/50 leading-relaxed">
                      From George A. Romero classics to cult retro sci-fi space adventures.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                    <h4 className="font-semibold text-white text-sm mb-1">Martial Arts & Action</h4>
                    <p className="text-xs text-white/50 leading-relaxed">
                      Hand-to-hand choreography and classic international action cinema.
                    </p>
                  </div>
                </div>

                <p className="text-xs text-white/60">
                  All films stream in high definition with a custom playback controller that remembers your exact playback position, supports subtitle tracks, and lets you toggle playback speed (0.5x to 2.0x).
                </p>
              </section>

              {/* Section: Reels Feed */}
              <section id="reels-feed" className="space-y-5 scroll-mt-24">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/80">
                    <Film className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      The Cinematic Reels Feed
                    </h3>
                  </div>
                </div>

                <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                  When you want quick cinematic inspiration instead of committing to a two-hour film, enter the <strong>Reels Feed</strong>:
                </p>

                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex gap-3 text-xs text-white/80">
                    <span>📱</span>
                    <div>
                      <strong>Vertical Swipe Gestures:</strong> Swipe up or down to seamlessly glide between film trailers, iconic movie scenes, behind-the-scenes cinematography clips, and director breakdowns.
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex gap-3 text-xs text-white/80">
                    <span>❤️</span>
                    <div>
                      <strong>Double-Tap to Save:</strong> Double-tap any clip to bookmark it into your personal <code>MyClip</code> collection for future viewing.
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex gap-3 text-xs text-white/80">
                    <span>🎬</span>
                    <div>
                      <strong>Instant Detail Bridge:</strong> Tap the movie title tag on any reel to immediately jump to the full title detail screen in the Theater catalog to see cast, director, user ratings, and where to stream.
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* ================================================================= */}
            {/* CHAPTER 4: LIVE TV & IPTV */}
            {/* ================================================================= */}
            <div className="space-y-12">
              <div className="border-b border-white/10 pb-4">
                <span className="text-xs font-medium text-[#FF5E87]">
                  Chapter 4
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold mt-1 text-white">
                  Live Television & IPTV Engine
                </h2>
              </div>

              {/* Section: Vertical Surfing */}
              <section id="vertical-surfing" className="space-y-5 scroll-mt-24">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/80">
                    <Tv className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Instant Vertical Channel Surfing
                  </h3>
                </div>

                <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                  Forget slow, clunky set-top boxes with lagging guide menus. Theater Live brings IPTV into the tactile era with <strong>instant vertical channel surfing</strong>:
                </p>

                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                  <div className="flex items-center gap-2 text-sm font-semibold text-white">
                    <span>Zero-Lag Hardware Accelerated Switching</span>
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed">
                    While watching any live broadcast feed, simply swipe up or down across the video canvas. Theater instantly tunes into the next or previous channel in your active playlist, delivering the nostalgic speed of traditional analog television with modern digital HLS streaming.
                  </p>
                </div>
              </section>

              {/* Section: Rotary Dial */}
              <section id="rotary-dial" className="space-y-5 scroll-mt-24">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/80">
                    <Radio className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      The Tactile Rotary TV Channel Dial
                    </h3>
                  </div>
                </div>

                <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                  Theater Live introduces an exclusive signature UI element: the <strong>floating rotary TV Channel Dial pill</strong>.
                </p>

                <div className="p-6 rounded-2xl bg-gradient-to-b from-[#190022] to-transparent border border-white/10 space-y-4">
                  <div className="flex justify-center py-2">
                    <div className="px-6 py-2 rounded-full bg-white/10 border border-[#FF5E87]/40 text-sm font-mono tracking-widest text-[#FF5E87] shadow-[0_0_20px_rgba(255,94,135,0.2)]">
                      ( ( ( ( [ 0 4 2 ] ) ) ) )
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-white/70">
                    <div>
                      <strong className="text-white block mb-1">Rotary Drag Interaction:</strong>
                      Dragging the dial horizontally or in a subtle circular gesture rotates channel numbers sequentially with tactile haptic clicks on supported devices.
                    </div>
                    <div>
                      <strong className="text-white block mb-1">Tap to Open Channel Grid:</strong>
                      Tapping directly on the channel number pill instantly brings up the full searchable channel catalog with EPG metadata and category filters.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section: M3U & EPG */}
              <section id="m3u-epg" className="space-y-5 scroll-mt-24">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/80">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Playlists (M3U) & TV Guide (EPG)
                  </h3>
                </div>

                <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                  Theater Live provides full control over your IPTV source feeds:
                </p>

                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                    <h4 className="font-semibold text-sm text-white">Import Remote URLs or Local Files</h4>
                    <p className="text-xs text-white/50 leading-relaxed">
                      Add M3U or M3U8 playlist links. Theater automatically parses channel names, stream links, logos, resolution tags, and <code>group-title</code> categories (News, Sports, Cinema, Music, Kids, International).
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                    <h4 className="font-semibold text-sm text-white">XMLTV Electronic Program Guide (EPG)</h4>
                    <p className="text-xs text-white/50 leading-relaxed">
                      Attach an EPG XMLTV URL to any playlist. Theater links <code>tvg-id</code> attributes to display live broadcast schedules, real-time show progress bars, program descriptions, and upcoming broadcasts.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                    <h4 className="font-semibold text-sm text-white">Favorites & Custom Channel Lists</h4>
                    <p className="text-xs text-white/50 leading-relaxed">
                      Pin frequently watched channels with a single star tap. Create custom named favorite lists to quickly filter down thousand-channel playlists to your core favorites.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section: Player Gestures & PiP */}
              <section id="player-gestures" className="space-y-5 scroll-mt-24">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/80">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Player Gestures, Aspect Ratios & Picture-in-Picture
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                    <span className="font-semibold text-white">Left-Edge Vertical Drag</span>
                    <p className="text-white/60">Swiping vertically on the left side of the screen smoothly raises or lowers display brightness.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                    <span className="font-semibold text-white">Right-Edge Vertical Drag</span>
                    <p className="text-white/60">Swiping vertically on the right side of the screen adjusts playback audio volume without system popups.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                    <span className="font-semibold text-white">Double-Tap Screen</span>
                    <p className="text-white/60">Instantly toggles between portrait feed and immersive full-screen landscape orientation.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                    <span className="font-semibold text-white">Aspect Ratio Selector</span>
                    <p className="text-white/60">Cycle through <code>16:9</code>, <code>4:3</code>, <code>Fill (Stretch)</code>, and <code>Fit</code> to correct older broadcast aspect ratios.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex gap-3 text-xs text-white/80 leading-relaxed">
                  <Smartphone className="w-4 h-4 shrink-0 text-white/60 mt-0.5" />
                  <div>
                    <strong>Picture-in-Picture (PiP):</strong> Tap the floating PiP button (or swipe to your home screen with background playback enabled) to shrink live TV into a resizable floating window while navigating other apps.
                  </div>
                </div>
              </section>
            </div>

            {/* ================================================================= */}
            {/* CHAPTER 5: AI ENGINE */}
            {/* ================================================================= */}
            <div className="space-y-12">
              <div className="border-b border-white/10 pb-4">
                <span className="text-xs font-medium text-[#AA4EFF]">
                  Chapter 5
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold mt-1 text-white">
                  Cinema AI Intelligence (Groq LLM)
                </h2>
              </div>

              {/* Section: Groq Setup */}
              <section id="groq-setup" className="space-y-5 scroll-mt-24">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/80">
                    <Key className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Bring-Your-Own-Key (BYOK) Groq Setup
                    </h3>
                  </div>
                </div>

                <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                  To protect your privacy and ensure ultra-low latency without centralized rate limits, Theater utilizes the Groq Cloud SDK. Groq executes advanced open models (Llama 3.3 70B, Llama 3.1 8B, Mixtral) on custom LPUs at speeds exceeding 500 tokens per second.
                </p>

                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
                  <h4 className="text-xs font-semibold text-white/70">
                    How to configure your free Groq API key:
                  </h4>
                  <ol className="space-y-3 text-xs text-white/70 list-decimal list-inside">
                    <li>
                      Visit <a href="https://console.groq.com/keys" target="_blank" rel="noopener noreferrer" className="text-[#FF5E87] underline font-medium">console.groq.com/keys</a> and create a free developer account.
                    </li>
                    <li>
                      Click <strong>Create API Key</strong> and copy the generated key string (e.g., <code>gsk_...</code>).
                    </li>
                    <li>
                      In Theater, open <strong>My Space &rarr; AI Settings</strong>.
                    </li>
                    <li>
                      Paste your key into the <strong>Groq API Key</strong> input and tap <strong>Verify & Save</strong>.
                    </li>
                  </ol>
                  <div className="text-[11px] text-white/50 pt-2 border-t border-white/5">
                    <strong>Privacy Notice:</strong> Your API key is stored strictly inside your phone&apos;s encrypted keystore. It is never logged or transmitted to any server other than Groq&apos;s official API endpoint.
                  </div>
                </div>
              </section>

              {/* Section: Semantic Search */}
              <section id="semantic-search" className="space-y-4 scroll-mt-24">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/80">
                    <Search className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Semantic Natural Language Plot Search
                  </h3>
                </div>
                <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                  Have you ever tried searching for a movie whose title you completely forgot? With Semantic Search, you don&apos;t need exact titles or actor names:
                </p>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2 text-xs">
                  <span className="text-white font-semibold">Example Natural Queries:</span>
                  <ul className="space-y-1.5 text-white/70 list-disc list-inside">
                    <li><em>&quot;Atmospheric 90s sci-fi movie where a detective investigates simulated reality in a hotel&quot;</em> &rarr; Returns <strong>Dark City</strong> & <strong>The Thirteenth Floor</strong></li>
                    <li><em>&quot;Melancholic comedy about two lonely strangers in Tokyo with neon lighting&quot;</em> &rarr; Returns <strong>Lost in Translation</strong></li>
                    <li><em>&quot;Psychological chamber drama set entirely inside a submarine in deep water&quot;</em> &rarr; Returns <strong>Das Boot</strong> & <strong>Crimson Tide</strong></li>
                  </ul>
                </div>
              </section>

              {/* Section: Cinema Chat & Next Watch */}
              <section id="cinema-chat" className="space-y-4 scroll-mt-24">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/80">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Conversational Cinema Chat & Contextual &quot;Next Watch&quot;
                  </h3>
                </div>
                <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                  <strong>Cinema Chat</strong> is your resident conversational film historian. Discuss thematic motifs in Denis Villeneuve&apos;s filmography, request deep-cut Korean neo-noir recommendations, or ask for spoiler-free explanations of ambiguous endings. All suggested titles render as interactive cards that can be added to your Watchlist or Diary with a single tap.
                </p>
                <p className="text-xs text-white/60">
                  Tap <strong>My Next Watch</strong> on your Home screen for a zero-input recommendation that analyzes your past 5-star diary ratings, current time of evening, and subscribed OTT platforms.
                </p>
              </section>
            </div>

            {/* ================================================================= */}
            {/* CHAPTER 6: CLOUD SYNC & PORTABILITY */}
            {/* ================================================================= */}
            <div className="space-y-12">
              <div className="border-b border-white/10 pb-4">
                <span className="text-xs font-medium text-[#FF5E87]">
                  Chapter 6
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold mt-1 text-white">
                  Sync, Friends & Complete Data Freedom
                </h2>
              </div>

              {/* Section: Google Drive Sync */}
              <section id="google-drive-sync" className="space-y-5 scroll-mt-24">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/80">
                    <Cloud className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Private Google Drive Delta Synchronization
                  </h3>
                </div>

                <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                  Theater synchronizes your complete library without a central server by communicating directly with your private Google Drive:
                </p>

                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3 text-xs text-white/70">
                  <div className="flex items-center gap-2 text-sm font-semibold text-white">
                    <CheckCircle2 className="w-4 h-4 text-white/80" />
                    <span>How Delta Sync Works</span>
                  </div>
                  <p className="leading-relaxed">
                    Whenever you add a diary entry, rate a film, or create a watchlist, Theater records a local revision timestamp. During sync, it fetches your cloud bundle, compares record timestamps, resolves conflicts automatically (prioritizing the most recent edit), and uploads a compressed encrypted JSON delta package.
                  </p>
                </div>
              </section>

              {/* Section: Friends Network */}
              <section id="friends-network" className="space-y-5 scroll-mt-24">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/80">
                    <Users className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Friends Network & Taste Compatibility
                  </h3>
                </div>

                <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                  Connect with friends without corporate social networks, algorithms, or public profiles:
                </p>

                <div className="space-y-3 text-xs">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <strong className="text-white block mb-1">1. Share Your Private Token:</strong>
                    Navigate to <strong>My Space &rarr; Friends</strong> and tap <strong>Generate Share Token</strong>. This creates a read-only snapshot link backed by your Google Drive.
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <strong className="text-white block mb-1">2. Import Friend Profiles:</strong>
                    Paste your friend&apos;s share token to inspect their Diary entries, ratings, and custom watchlists.
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <strong className="text-white block mb-1">3. Taste Compatibility Score:</strong>
                    Theater&apos;s <code>FriendCompare</code> engine cross-references both watch histories, computing a shared percentage score of genre overlap, mutually loved films, and rating correlations.
                  </div>
                </div>
              </section>

              {/* Section: Trakt & CSV */}
              <section id="trakt-scrobbler" className="space-y-5 scroll-mt-24">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/80">
                    <RotateCcw className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Two-Way Trakt.tv Integration & Letterboxd CSV Portability
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                    <h4 className="font-semibold text-white text-sm">Trakt.tv Scrobbling</h4>
                    <p className="text-white/60 leading-relaxed">
                      Authenticate your Trakt account to automatically post watched scrobbles, sync ratings, and import Trakt watchlists directly into your Theater library.
                    </p>
                  </div>
                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                    <h4 className="font-semibold text-white text-sm">Letterboxd & CSV Migration</h4>
                    <p className="text-white/60 leading-relaxed">
                      Import your existing Letterboxd diary and ratings via standard CSV export with automatic TMDB title matching. Export your entire Theater database to CSV anytime with zero lock-in.
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* ================================================================= */}
            {/* CHAPTER 7: HARDWARE & WIDGETS */}
            {/* ================================================================= */}
            <div className="space-y-12">
              <div className="border-b border-white/10 pb-4">
                <span className="text-xs font-medium text-[#AA4EFF]">
                  Chapter 7
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold mt-1 text-white">
                  Android Widgets & Native Hardware
                </h2>
              </div>

              {/* Section: Glance Widgets */}
              <section id="glance-widgets" className="space-y-5 scroll-mt-24">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/80">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Android Glance Home Screen Widgets
                  </h3>
                </div>

                <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                  Theater ships with three native Android Glance home screen widgets backed by background workers:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-1">
                    <span className="font-semibold text-white">UpNextWidget</span>
                    <p className="text-white/60">
                      Shows your active TV show progress with quick +1 episode increments directly from your home screen.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-1">
                    <span className="font-semibold text-white">CalendarWidget</span>
                    <p className="text-white/60">
                      Displays upcoming cinema releases and digital streaming premieres scheduled for this week.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-1">
                    <span className="font-semibold text-white">QuickNavigationWidget</span>
                    <p className="text-white/60">
                      Floating mini-pill for one-tap shortcuts to Search, Cinema Diary, Live TV Dial, or Saved Filters.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section: Device Adaptability */}
              <section id="device-adaptability" className="space-y-4 scroll-mt-24">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/80">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Foldable & Tablet Optimization
                  </h3>
                </div>
                <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                  Theater adapts fluidly across all modern form factors. On foldable devices, Theater recognizes half-folded postures (tabletop posture) to display video playback on the top half and interactive controls, synopsis, and channel dials on the bottom half. On tablets, it utilizes multi-pane split layouts for navigation and library browsing.
                </p>
              </section>
            </div>

            {/* ================================================================= */}
            {/* CHAPTER 8: REFERENCE & CHEATSHEET */}
            {/* ================================================================= */}
            <div className="space-y-12">
              <div className="border-b border-white/10 pb-4">
                <span className="text-xs font-medium text-[#FF5E87]">
                  Chapter 8
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold mt-1 text-white">
                  Reference & Diagnostics
                </h2>
              </div>

              {/* Section: Gesture Cheatsheet */}
              <section id="gesture-cheatsheet" className="space-y-5 scroll-mt-24">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/80">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Master Gesture & Interaction Cheatsheet
                  </h3>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02]">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-white/5 border-b border-white/10 text-white/60 font-semibold">
                      <tr>
                        <th className="py-3 px-4">Screen / Area</th>
                        <th className="py-3 px-4">Gesture</th>
                        <th className="py-3 px-4">Action & Result</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-white/70">
                      <tr>
                        <td className="py-3 px-4 font-semibold text-white">Mode Switcher</td>
                        <td className="py-3 px-4 font-mono text-white/60">Tap pill</td>
                        <td className="py-3 px-4">Switches between Cinema Tracker, Free Movies, and Live TV</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-semibold text-white">Movie / TV Poster</td>
                        <td className="py-3 px-4 font-mono text-white/60">Long-press</td>
                        <td className="py-3 px-4">Opens quick action sheet (Add to Watchlist, Log Diary, Mark Finished)</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-semibold text-white">Continue Watching</td>
                        <td className="py-3 px-4 font-mono text-white/60">Tap +1 chip</td>
                        <td className="py-3 px-4">Advances television episode progress by 1 with date stamp</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-semibold text-white">Reels Feed</td>
                        <td className="py-3 px-4 font-mono text-white/60">Vertical swipe</td>
                        <td className="py-3 px-4">Smoothly transitions to next/previous cinematic trailer or clip</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-semibold text-white">Reels Feed</td>
                        <td className="py-3 px-4 font-mono text-white/60">Double-tap</td>
                        <td className="py-3 px-4">Bookmarks reel to your personal MyClip collection</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-semibold text-white">Live TV Player</td>
                        <td className="py-3 px-4 font-mono text-white/60">Vertical swipe</td>
                        <td className="py-3 px-4">Zaps channels up or down with zero-buffer switching</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-semibold text-white">Live TV Player</td>
                        <td className="py-3 px-4 font-mono text-white/60">Double-tap</td>
                        <td className="py-3 px-4">Toggles portrait feed and full-screen landscape player</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-semibold text-white">Live TV Player</td>
                        <td className="py-3 px-4 font-mono text-white/60">Left/Right edge drag</td>
                        <td className="py-3 px-4">Adjusts display brightness (left) and stream volume (right)</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-semibold text-white">TV Channel Dial</td>
                        <td className="py-3 px-4 font-mono text-white/60">Rotary drag</td>
                        <td className="py-3 px-4">Tactile haptic channel tuning with frequency counter</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section: Troubleshooting */}
              <section id="troubleshooting" className="space-y-5 scroll-mt-24">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/80">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Troubleshooting & Common Questions
                  </h3>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                    <h4 className="font-semibold text-white">
                      Why are certain movie posters not loading on my Wi-Fi?
                    </h4>
                    <p className="text-white/60 leading-relaxed">
                      Certain telecom providers block media CDN domains. Open <strong>My Space &rarr; App Settings &rarr; Network</strong> and toggle on <strong>DNS Fallback Mode</strong> to route traffic through secure encrypted Cloudflare DoH.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                    <h4 className="font-semibold text-white">
                      How do I fix a live stream that says &quot;Connection Failed&quot;?
                    </h4>
                    <p className="text-white/60 leading-relaxed">
                      Check if the stream URL in your M3U playlist uses HTTP instead of HTTPS. If your device enforces secure transport, enable <em>Allow Insecure Streams</em> in Live TV Settings, or test the stream link in a desktop player to verify the broadcast server is online.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                    <h4 className="font-semibold text-white">
                      How do I recover my data if I switch to a new phone?
                    </h4>
                    <p className="text-white/60 leading-relaxed">
                      Before switching phones, tap <strong>Sync Now</strong> in <strong>My Space &rarr; Cloud Sync</strong> to ensure your latest delta bundle is uploaded to your Google Drive. On your new phone, simply connect the same Google account and tap <strong>Restore from Drive</strong>.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
