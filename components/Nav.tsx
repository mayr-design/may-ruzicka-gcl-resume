"use client";

import { useEffect, useState, useRef } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [showFade, setShowFade] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    setShowFade(!atEnd);
  };

  const links = [
    { id: "why-this",         label: "Why this" },
    { id: "how-it-works",     label: "How it works" },
    { id: "ecosystem",        label: "Google Integration" },
    { id: "spend-categories", label: "Spend categories" },
    { id: "top-rewards",      label: "Top rewards" },
    { id: "real-reviews",     label: "Real reviews" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-32px)] sm:w-auto max-w-[calc(100%-32px)]">
      <div
        className="relative rounded-full transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255,255,255,0.98)" : "rgba(255,255,255,0.93)",
          boxShadow: scrolled
            ? "0px 4px 20px rgba(0,0,0,0.13)"
            : "0px 2px 8px rgba(0,0,0,0.12)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        {/* Scrollable link row */}
        <div
          ref={scrollRef}
          onScroll={handleHScroll}
          className="flex items-center gap-0 overflow-x-auto px-3 py-1.5 rounded-full"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setActive(link.id)}
              className="transition-all duration-200 rounded-full px-4 py-1.5 whitespace-nowrap flex-shrink-0 hover:bg-black/[0.05]"
              style={{
                background: active === link.id ? "rgba(0,0,0,0.07)" : "transparent",
                color: active === link.id ? "#111" : "#666",
                fontFamily: "'Product Sans', 'Google Sans', 'Figtree', sans-serif",
                fontWeight: 500,
                fontSize: "11.5px",
                letterSpacing: "-0.018em",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right fade hint — only shows on mobile when more content exists */}
        {showFade && (
          <div
            className="absolute right-0 top-0 h-full w-12 rounded-r-full pointer-events-none sm:hidden"
            style={{
              background: "linear-gradient(to right, transparent, rgba(255,255,255,0.95))",
            }}
          />
        )}
      </div>
    </nav>
  );
}