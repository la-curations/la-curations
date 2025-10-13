"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import la from "../../public/la-theater64.png";

const Header = () => {
  const links = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "showcase", label: "Theater" },
    ],
    []
  );

  const [active, setActive] = useState<string>(links[0].id);

  // Smooth scroll handler
  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  // Intersection Observer to highlight current section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) setActive(id);
          }
        });
      },
      {
        // Trigger when top of viewport reaches section top +/- offset
        root: null,
        rootMargin: "-40% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [links]);

  return (
    <header>
      <div className="lg:w-[80vw] w-[90vw] bg-[#ffffff18] h-[80px] bg-opacity-50 backdrop-blur-md flex items-center justify-between fixed lg:mt-10 mt-5 lg:mx-[10vw] mx-[5vw] rounded-full py-2 z-50">
        <Image
          src={la}
          alt="LA Curations"
          className="ml-7"
          width={40}
          height={40}
        />
        <nav className=" hidden md:flex items-center gap-4 text-sm">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className={`px-3 py-2 rounded-full transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${
                active === l.id
                  ? "bg-gradient-to-r from-[#6702f6] to-[#fa037f] text-transparent bg-clip-text font-semibold"
                  : "text-white/80 hover:bg-white/10"
              }`}
              aria-current={active === l.id ? "page" : undefined}
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="pr-5">
          <button
            onClick={() => scrollTo("newsletter")}
            className="bg-gradient-to-r from-[#6702f6] to-[#fa037f] text-white font-bold px-6 py-3 rounded-full text-xs cursor-pointer transition hover:opacity-90"
          >
            Contact
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
