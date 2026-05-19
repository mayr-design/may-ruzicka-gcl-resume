"use client";

import { useEffect, useRef } from "react";

export default function Ecosystem() {
  const gradient = "linear-gradient(to right, #11BD61 0%, #DBD01F 33%, #FB4943 66%, #3A87FA 100%)";
  const dotColors = ["#76C740", "#EB8D31", "#9A689F"];
  const trackRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;
    function update() {
      const track = trackRef.current;
      const slider = sliderRef.current;
      if (!track || !slider) { rafId = requestAnimationFrame(update); return; }
      const rect = track.getBoundingClientRect();
      const total = track.clientHeight - window.innerHeight;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(scrolled / total, 1));
      // Total translateX distance = total width of cards minus one viewport width
      const totalWidth = slider.scrollWidth - window.innerWidth;
      slider.style.transform = `translateX(-${progress * totalWidth}px)`;
      rafId = requestAnimationFrame(update);
    }
    rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const columns = [
    {
      num: "01", logo: "/google_wallet_logo.png", logoAlt: "Google Wallet", logoWide: false,
      topText: <><span className="gs-bold text-neutral-900">Google Wallet</span> stores your cards</>,
      year: "2024", src: "/2024.gif", imgAlt: "Google Heat Maps",
      bottomText: <>For my first project at Miami Ad School, I concepted and designed <span className="gs-bold text-neutral-900">Google Heat Maps</span>. A new Google Maps feature that helps heat-vulnerable New Yorkers find the coolest routes on the hottest days.</>,
    },
    {
      num: "02", logo: "/google_maps_logo.png", logoAlt: "Google Maps", logoWide: false,
      topText: <><span className="gs-bold text-neutral-900">Google Maps</span> identifies the merchant</>,
      year: "2025", src: "/2025.gif", imgAlt: "Flow TV Showcase",
      bottomText: <>When SpecialGuestX hit 50 posts on <span className="gs-bold text-neutral-900">Google&apos;s Flow TV</span>, my boss asked for a presentation. I built a filterable website instead — organized by platform, content type, and account.</>,
    },
    {
      num: "03", logo: "/google_pay_logo.png", logoAlt: "Google Pay", logoWide: true,
      topText: <><span className="gs-bold text-neutral-900">Google Pay</span> completes the payment</>,
      year: "2026", src: "/2026.gif", imgAlt: "Lyft Local Tour",
      bottomText: <>I&apos;m currently leading a <span className="gs-bold text-neutral-900">Google Lighthouse</span> project called &apos;Lyft Local&apos; — a Lyft feature that turns every ride into a guided tour of the city.</>,
    },
  ];

  const CARD_W = 72; // vw per card

  return (
    <section
      id="ecosystem"
      className="bg-white text-black z-30 relative flex flex-col items-center justify-center border-t border-neutral-100"
    >

      {/* ── DESKTOP ── */}
      <div className="hidden md:flex flex-col items-center w-full py-24 sm:py-32">

        <div className="max-w-5xl w-full mx-auto px-6 sm:px-12 md:px-16 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl gs-bold leading-none text-neutral-900 text-center mb-16 sm:mb-24 select-none">
            Google Ecosystem<br />Integration
          </h2>
          <div className="grid grid-cols-3 gap-12 md:gap-16 items-start mb-10 select-none">
            {columns.map((col) => (
              <div key={col.num} className="flex flex-col items-center text-center space-y-4 px-4">
                <span className="text-neutral-400 text-sm gs-regular">{col.num}</span>
                <img src={col.logo} alt={col.logoAlt} className={`${col.logoWide ? "w-28" : "w-16"} h-16 object-contain`} />
                <p className="gs-medium text-neutral-600 text-[18px] leading-snug max-w-[200px] text-center">{col.topText}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="relative w-full h-12 my-12 select-none">
          <div className="absolute top-1/2 left-0 w-full h-[5px] -translate-y-1/2" style={{ background: gradient }} />
          <div className="max-w-5xl w-full mx-auto px-6 sm:px-12 md:px-16 h-full relative">
            <div className="absolute left-6 sm:left-12 md:left-16 top-0 h-full flex flex-col justify-between items-start text-[11px] text-neutral-400 tracking-tight z-20">
              <span>↑ Google Tap</span>
              <span>↓ May Ruzicka</span>
            </div>
            <div className="grid grid-cols-3 gap-12 md:gap-16 h-full w-full relative">
              {dotColors.map((color, i) => (
                <div key={i} className="flex items-center justify-center h-full">
                  <div className="w-[18px] h-[18px] rounded-full bg-white z-10" style={{ border: `4px solid ${color}` }} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl w-full mx-auto px-6 sm:px-12 md:px-16 text-center">
          <div className="grid grid-cols-3 gap-12 md:gap-16 items-start">
            {columns.map((col) => (
              <div key={col.year} className="flex flex-col items-center text-center space-y-6 group w-full">
                <span className="text-neutral-400 text-sm gs-regular select-none">{col.year}</span>
                <p className="gs-medium text-neutral-600 text-[18px] leading-snug select-none min-h-[95px] text-center">{col.bottomText}</p>
                <div className="w-full aspect-[4/3] rounded-[1.25rem] overflow-hidden border border-neutral-200 group-hover:border-neutral-300 transition-colors">
                  <img src={col.src} alt={col.imgAlt} className="w-full h-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── MOBILE — scroll-driven horizontal pan ── */}
      {/* Title sits in normal flow above the sticky track */}
      <div className="md:hidden px-6 text-center pt-24 pb-8 w-full">
        <h2 className="text-[40px] gs-bold leading-tight text-neutral-900 select-none">
          Google Ecosystem Integration
        </h2>
      </div>

      {/* Track is tall enough to give scroll room for all 3 cards */}
      <div
        ref={trackRef}
        className="md:hidden relative w-full"
        style={{ height: `calc(100vh * ${columns.length + 0.5})` }}
      >
        {/* Sticky viewport */}
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">

          {/* Slider — all cards in a row, translateX driven by scroll */}
          <div
            ref={sliderRef}
            className="flex will-change-transform"
            style={{
              width: `${columns.length * CARD_W + (100 - CARD_W)}vw`,
              paddingLeft: `${(100 - CARD_W) / 2}vw`,
              paddingRight: `${(100 - CARD_W) / 2}vw`,
              gap: "6vw",
            }}
          >
            {columns.map((col, idx) => (
              <div
                key={col.num}
                className="flex-none flex flex-col"
                style={{ width: `${CARD_W}vw` }}
              >
                {/* Top */}
                <div className="flex flex-col items-center text-center gap-3 pb-5">
                  <span className="text-neutral-400 text-sm gs-regular select-none">{col.num}</span>
                  <img src={col.logo} alt={col.logoAlt} className={`${col.logoWide ? "w-20" : "w-12"} h-12 object-contain`} />
                  <p className="gs-medium text-neutral-600 text-[16px] leading-snug text-center">{col.topText}</p>
                </div>

                {/* Connector row with continuous gradient line */}
                <div className="relative flex items-center justify-center" style={{ height: "52px" }}>
                  {idx === 0 && (
                    <div
                      className="absolute h-[5px] pointer-events-none"
                      style={{
                        background: gradient,
                        left: `calc(-${(100 - CARD_W) / 2}vw)`,
                        width: `${columns.length * CARD_W + (columns.length - 1) * 6 + (100 - CARD_W)}vw`,
                        top: "50%",
                        transform: "translateY(-50%)",
                      }}
                    />
                  )}
                  <div
                    className="w-[18px] h-[18px] rounded-full bg-white relative z-10 flex-shrink-0"
                    style={{ border: `4px solid ${dotColors[idx]}` }}
                  />
                </div>

                {/* Bottom */}
                <div className="flex flex-col items-center text-center gap-3 pt-5">
                  <span className="text-neutral-400 text-sm gs-regular select-none">{col.year}</span>
                  <p className="gs-medium text-neutral-600 text-[16px] leading-snug text-center">{col.bottomText}</p>
                  <div className="w-full aspect-[16/10] rounded-[1.25rem] overflow-hidden border border-neutral-200">
                    <img src={col.src} alt={col.imgAlt} className="w-full h-full object-cover" />
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Progress dots */}
          <div className="flex justify-center gap-1.5 mt-4 flex-shrink-0 pb-4">
            {columns.map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}