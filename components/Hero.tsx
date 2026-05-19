"use client";

import { useEffect, useRef } from "react";

const MOBILE_BP = 950;
const PEEK = 44;
const CARD_W = 306;
const CARD_H = 189;

const mobileCardData = [
  { label: "May Ruzicka",           sub: "2026 GLC5", color: "#4285F4" },
  { label: "Visual Storyteller",    sub: "2026 GLC5", color: "#FE2C25" },
  { label: "Designer",              sub: "2026 GLC5", color: "#FFBB00" },
  { label: "Creative Technologist", sub: "2026 GLC5", color: "#34A853" },
  { label: "Art Director",          sub: "2026 GLC5", color: "#4285F4" },
];
const N = mobileCardData.length;

function ease(x: number) {
  return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
}
function clamp(x: number, a = 0, b = 1) {
  return Math.max(a, Math.min(b, x));
}
// Map a global progress range [start,end] to local 0→1
function phase(sP: number, start: number, end: number) {
  return ease(clamp((sP - start) / (end - start)));
}

export default function Hero() {
  const scrollTrackRef    = useRef<HTMLDivElement>(null);
  const bgGradientRef     = useRef<HTMLDivElement>(null);
  const bgWhiteRef        = useRef<HTMLDivElement>(null);
  const heroTextRef       = useRef<HTMLDivElement>(null);
  const scrollGuideRef    = useRef<HTMLDivElement>(null);
  const labelMayRef       = useRef<HTMLDivElement>(null);
  const labelArtRef       = useRef<HTMLDivElement>(null);

  // Desktop cards
  const deskArtRef   = useRef<HTMLDivElement>(null);
  const deskDesRef   = useRef<HTMLDivElement>(null);
  const deskTechRef  = useRef<HTMLDivElement>(null);
  const deskVisRef   = useRef<HTMLDivElement>(null);

  // Mobile card refs
  const mobileRefs = useRef<(HTMLDivElement | null)[]>([null, null, null, null, null]);
  const mobileWrapRef  = useRef<HTMLDivElement>(null);
  const desktopWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;

    function update() {
      const scrollTrack = scrollTrackRef.current;
      if (!scrollTrack) { rafId = requestAnimationFrame(update); return; }

      const rect  = scrollTrack.getBoundingClientRect();
      const total = scrollTrack.clientHeight - window.innerHeight;
      const sP    = Math.max(0, Math.min(-rect.top / total, 1));
      const mobile = window.innerWidth < MOBILE_BP;

      // Show/hide mobile vs desktop
      if (mobileWrapRef.current)  mobileWrapRef.current.style.display  = mobile ? "block" : "none";
      if (desktopWrapRef.current) {
        desktopWrapRef.current.style.display = mobile ? "none" : "block";
        desktopWrapRef.current.style.pointerEvents = mobile ? "none" : "auto";
      }

      // ── MOBILE SCROLL BUDGET ──────────────────────────────────────────────
      // 0.00–0.30  cards fan DOWN
      // 0.30–0.55  hold fanned
      // 0.55–0.75  cards collapse UP + fade out
      // 0.75–0.80  gap — everything clear
      // 0.80–1.00  bg gradient fades in + hero text appears

      if (mobile) {
        if (bgGradientRef.current) bgGradientRef.current.style.opacity = String(phase(sP, 0.80, 1.00));
        if (bgWhiteRef.current)    bgWhiteRef.current.style.opacity    = "1"; // stays white until gradient takes over
        if (scrollGuideRef.current) {
  scrollGuideRef.current.style.opacity = sP > 0.05 ? "0" : String(1 - sP * 20);
  scrollGuideRef.current.style.pointerEvents = sP > 0.05 ? "none" : "auto";
}

        // Hero text — only after cards fully gone
        if (heroTextRef.current) {
          const t = phase(sP, 0.82, 1.00);
          heroTextRef.current.style.opacity   = String(t);
          heroTextRef.current.style.transform = `translateY(${(1 - t) * 30}px) scale(${0.96 + t * 0.04})`;
        }

        // Mobile cards — stack grows downward, so shift wrapper UP by half the extra height to keep centered
        const mWrap = mobileWrapRef.current;
        for (let i = 0; i < N; i++) {
          const el = mobileRefs.current[i];
          if (!el) continue;

          let yOffset = 0;
          let op = i === 0 ? 1 : 0;
          let fanT = 0;

          if (sP < 0.30) {
            fanT = phase(sP, 0, 0.30);
            yOffset = i * PEEK * fanT;
            op = i === 0 ? 1 : fanT;
          } else if (sP < 0.55) {
            fanT = 1;
            yOffset = i * PEEK;
            op = 1;
          } else if (sP < 0.75) {
            const t = phase(sP, 0.55, 0.75);
            fanT = 1 - t;
            yOffset = i * PEEK * (1 - t);
            op = 1 - t;
          } else {
            op = 0;
            yOffset = 0;
            fanT = 0;
          }

          el.style.transform = `translateY(${yOffset}px)`;
          el.style.opacity   = String(op);

          // Shift wrapper up by half the current extra stack height so it stays centered
          if (i === 0 && mWrap) {
            const extraH = (N - 1) * PEEK * fanT;
            mWrap.style.transform = `translate(-50%, calc(-50% - ${extraH / 2}px))`;
          }
        }

      } else {
        // ── DESKTOP ─────────────────────────────────────────────────────────
        const eP = ease(sP);
        if (bgGradientRef.current) bgGradientRef.current.style.opacity = String(eP);
        if (bgWhiteRef.current)    bgWhiteRef.current.style.opacity    = String(1 - eP);
        if (scrollGuideRef.current) scrollGuideRef.current.style.opacity = sP > 0.05 ? "0" : String(1 - sP * 20);

        if (heroTextRef.current) {
          if (sP > 0.25) {
            const t = (sP - 0.25) / 0.75;
            heroTextRef.current.style.opacity   = String(t);
            heroTextRef.current.style.transform = `translateY(${(1 - t) * 30}px) scale(${0.96 + t * 0.04})`;
          } else {
            heroTextRef.current.style.opacity   = "0";
            heroTextRef.current.style.transform = "translateY(30px) scale(0.96)";
          }
        }

        if (labelMayRef.current) labelMayRef.current.style.opacity = String(1 - eP);
        if (labelArtRef.current) labelArtRef.current.style.opacity = String(eP);

        const w = window.innerWidth, h = window.innerHeight;
        const r  = Math.min(w < 1024 ? 470 : 530, w * 0.4);
        const rx = (r / w) * 100, ry = (r / h) * 100;

        function applyCard(el: HTMLDivElement | null, tx: number, ty: number, isAnchor: boolean) {
          if (!el) return;
          el.style.opacity   = isAnchor ? "1" : String(eP);
          el.style.transform = `translate(calc(-50% + ${tx * eP}vw), calc(-50% + ${ty * eP}vh))`;
          el.style.pointerEvents = isAnchor ? "auto" : "none";
        }

        applyCard(deskArtRef.current,  -rx * 0.62, -ry * 0.72, true);
        applyCard(deskDesRef.current,   rx * 0.75, -ry * 0.28, false);
        applyCard(deskTechRef.current, -rx * 0.72,  ry * 0.22, false);
        applyCard(deskVisRef.current,   rx * 0.52,  ry * 0.62, false);
      }

      rafId = requestAnimationFrame(update);
    }

    rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const stackH = CARD_H + (N - 1) * PEEK;

  return (
    <div ref={scrollTrackRef} id="scroll-track" className="h-[250vh] relative w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

        {/* Backgrounds */}
        <div ref={bgWhiteRef} className="absolute inset-0 bg-white z-0" />
        <div
          ref={bgGradientRef}
          className="absolute inset-0 opacity-0 z-0"
          style={{ background: "linear-gradient(to bottom, #FFFFFF 0%, #3A87FA 100%)" }}
        >
          <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center pointer-events-none">
            <div className="absolute w-[min(180vw,900px)] h-[min(180vw,900px)] lg:w-[min(1000px,85vw)] lg:h-[min(1000px,85vw)] rounded-full border-[130px] lg:border-[140px] border-white/65 blur-[70px] lg:blur-[60px] animate-[spin_30s_linear_infinite]" />
            <div className="absolute w-[min(170vw,840px)] h-[min(170vw,840px)] lg:w-[min(920px,80vw)] lg:h-[min(920px,80vw)] rounded-full border-[48px] lg:border-[48px] border-white/85 blur-[18px] lg:blur-[16px]" />
          </div>
        </div>

        {/* Hero text */}
        <div
          ref={heroTextRef}
          className="absolute z-30 text-center px-4 w-full max-w-4xl opacity-0 pointer-events-none"
          style={{ transform: "translateY(30px) scale(0.96)" }}
        >
          <h1 className="gs-semibold text-[6.5rem] md:text-8xl lg:text-[7rem] text-white leading-none">
            Tap In
          </h1>
          <p className="mt-4 max-w-3xl mx-auto" style={{fontSize: "30px", lineHeight: "1.15"}}>
            <span className="text-white gs-regular">with </span>
            <span className="text-white gs-bold">Google Wallet&apos;s newest</span>
            <span className="md:hidden"><br /></span>
            <span className="hidden md:inline"><br /></span>
            <span className="text-white gs-bold">feature</span>
            <span className="text-[#4285F4] gs-regular"> and </span>
            <span className="text-[#4285F4] gs-bold">Google Creative Lab&apos;s</span>
            <span className="md:hidden"><br /></span>
            <span className="hidden md:inline"><br /></span>
            <span className="text-[#4285F4] gs-bold">newest applicant</span>
          </p>
          <div className="mt-6 text-base sm:text-base gs-thin text-white/80">
            Google Tap &amp; May Ruzicka
          </div>
        </div>

        {/* ── MOBILE CARDS ── */}
        <div
          ref={mobileWrapRef}
          style={{
            position: "absolute",
            width: `${CARD_W}px`,
            height: `${CARD_H}px`,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            overflow: "visible",
            zIndex: 20,
            display: "none",
          }}
        >
          {[...mobileCardData].reverse().map((card, ri) => {
            const i = N - 1 - ri;
            return (
              <div
                key={card.label}
                ref={(el) => { mobileRefs.current[i] = el; }}
                onClick={i === 0 ? () => window.scrollBy({ top: window.innerHeight * 0.4, behavior: "smooth" }) : undefined}
                style={{
                  position: "absolute",
                  top: 0, left: 0,
                  width: `${CARD_W}px`,
                  height: `${CARD_H}px`,
                  borderRadius: "1.6rem",
                  background: card.color,
                  zIndex: N - i,
                  padding: "20px 24px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  gap: "4px",
                  opacity: i === 0 ? 1 : 0,
                  willChange: "transform, opacity",
                  cursor: i === 0 ? "pointer" : "default",
                }}
              >
                <div style={{ width: "40px", height: "26px", borderRadius: "6px", background: "rgba(255,255,255,0.25)", marginBottom: "8px" }} />
                <div style={{ fontFamily: "'Product Sans','Google Sans',sans-serif", fontWeight: 500, fontSize: "18px", color: "white", letterSpacing: "-0.018em", lineHeight: "1.2" }}>
                  {card.sub}
                </div>
                <div style={{ fontFamily: "'Product Sans','Google Sans',sans-serif", fontWeight: 500, fontSize: "18px", color: "white", letterSpacing: "-0.018em", lineHeight: "1.2" }}>
                  {card.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* ── DESKTOP CARDS ── */}
        <div
          ref={desktopWrapRef}
          className="absolute inset-0 flex items-center justify-center z-20"
          style={{ display: "none" }}
        >
          <div className="relative w-full h-full flex items-center justify-center">

            {[
              { ref: deskArtRef,  label: "May Ruzicka", isAnchor: true  },
              { ref: deskDesRef,  label: "Designer",    isAnchor: false },
              { ref: deskTechRef, label: "Creative Technologist", isAnchor: false },
              { ref: deskVisRef,  label: "Visual Storyteller",    isAnchor: false },
            ].map(({ ref, label, isAnchor }) => (
              <div
                key={label}
                ref={ref}
                onClick={isAnchor ? () => window.scrollBy({ top: window.innerHeight * 1.5, behavior: "smooth" }) : undefined}
                className="absolute w-[261px] h-[162px] sm:w-[306px] sm:h-[189px] rounded-[1.6rem] bg-[#4285F4] p-5 sm:p-6 flex flex-col justify-end gap-2.5 items-start pointer-events-auto"
                style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)", opacity: isAnchor ? 1 : 0, cursor: isAnchor ? "pointer" : "default" }}
              >
                <div className="w-10 h-7 sm:w-12 sm:h-8 rounded-md sm:rounded-lg bg-white/25" />
                <div className="text-left select-none flex flex-col gap-0.5 w-full">
                  <div className="gs-medium text-base sm:text-xl text-white leading-[1.05]">2026 GLC5</div>
                  {isAnchor ? (
                    <div className="relative h-5 sm:h-7 w-full overflow-hidden">
                      <div ref={labelMayRef} className="absolute inset-0 gs-medium text-sm sm:text-lg text-white leading-[1.05]">May Ruzicka</div>
                      <div ref={labelArtRef} className="absolute inset-0 gs-medium text-sm sm:text-lg text-white leading-[1.05] opacity-0">Art Director</div>
                    </div>
                  ) : (
                    <div className="gs-medium text-sm sm:text-lg text-white leading-[1.05]">{label}</div>
                  )}
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* Scroll guide */}
        <div
          ref={scrollGuideRef}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30 cursor-pointer select-none pointer-events-auto"
          onClick={() => window.scrollBy({ top: window.innerHeight * 0.5, behavior: "smooth" })}
        >
          <span className="text-[13px] gs-medium text-gray-500 uppercase tracking-wide">Scroll to begin</span>
          <svg className="w-7 h-7 text-gray-500 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>

      </div>
    </div>
  );
}