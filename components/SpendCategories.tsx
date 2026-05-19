"use client";

import { useEffect, useRef, useState } from "react";

function VideoModal({ src, onClose }: { src: string; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center" onClick={onClose}>
      <div className="relative w-full max-w-4xl mx-4" onClick={(e) => e.stopPropagation()}>
        <video src={src} autoPlay controls className="w-full rounded-2xl" style={{ maxHeight: "80vh" }} />
        <button onClick={onClose} className="absolute -top-10 right-0 text-white/70 hover:text-white text-sm gs-medium">✕ Close</button>
      </div>
    </div>
  );
}

const campaigns = [
  {
    id: "rideshare", label: "Rideshare & Transit", color: "#ec4cb0",
    darkBg: "#1e131c", mainGif: "/lyft-main.gif",
    insight: "I tap into the uncomfortable truths surrounding human behavior",
    longCopy: "Most people have both Uber and Lyft and they're not loyal to either one. Instead of fighting that, we just said it out loud. What started as an honest insight turned into a campaign with 135 OOH placements across the nation and 467 million impressions, surpassing planned performance by 37%. I also led the case study production because the work isn't done until the story of the work is told creatively.",
    viz1: { type: "gif", src: "/lyft-ooh.gif" },
    viz2: { type: "png", src: "/lyft-ooh.png" },
  },
  {
    id: "food", label: "Food & Beverage", color: "#f07c3e",
    darkBg: "#151516", mainGif: "/doritos-main.gif",
    insight: "I tap into every role the idea needs and fill them myself",
    longCopy: "We had five friends, a mandate to use Doritos' pre-approved music, and a deadline. So we flipped the beats into an original song, turned our apartments into a set, and made a Super Bowl ad from scratch. I directed, art directed, styled, produced, and sang on it. Variety Magazine noticed. So did AdWeek and Ad Age. We didn't win, but we made the top 25 out of thousands of entries worldwide.",
    viz1: { type: "png", src: "/doritos-press.png" },
    viz2: { type: "mp4", src: "/doritos-video.mp4" },
  },
  {
    id: "entertainment", label: "Entertainment", color: "#93ced7",
    darkBg: "#0d1117", mainGif: "/okgo-main.gif",
    insight: "I make complex things look simple by tapping into visual storytelling",
    longCopy: "Legendary band 'OK Go' got a Best Music Video Grammy nomination for \"Love\" — a one-take video shot in a Budapest train station using robots, mirrors, and precise choreography. My job was to build a site that communicated how they pulled it off in a way that's visually engaging enough to hold a voter's attention from the first scroll to the last.",
    viz1: { type: "gif", src: "/okgo-info.gif", link: "https://okgo.net/fyc/" },
    viz2: { type: "gif", src: "/okgo-nav.gif", link: "https://okgo.net/fyc/" },
  },
  {
    id: "app-subscriptions", label: "App Subscriptions", color: "#3d70f5",
    darkBg: "#0f1520", mainGif: "/fbdating-main.gif",
    insight: "I tap into that sweet spot between product truth and human truth",
    longCopy: "Dating apps made an entire generation feel both emotionally and financially drained. Facebook Dating is free, but that's why nobody believes it could actually be good. So we didn't try to convince anyone, we just met them where they already were, acknowledged the exhaustion, and let the product truth speak for itself. Sometimes the most powerful thing a campaign can do is make people feel heard.",
    viz1: { type: "png", src: "/fbdating-ooh.png" },
    viz2: { type: "mp4", src: "/fbdating-video.mp4" },
  },
  {
    id: "streaming", label: "Streaming Services", color: "#53b967",
    darkBg: "#0a1a0f", mainGif: "/spotify-main.gif",
    insight: "I tap into the space between what exists and what should, and solve it with technology",
    longCopy: "Gen Z cares deeply about causes but rarely has the money to back it up. Play It Forward removed that friction entirely by being a Spotify feature that turns streams into donations, connecting listeners to artists and the causes they share. You don't change your behavior. You just listen. The technology does the rest.",
    viz1: { type: "gif", src: "/spotify-info.gif" },
    viz2: { type: "png", src: "/spotify-app.png" },
  },
];

const N = campaigns.length;
const CARD_W = 306;
const CARD_H = 189;
const PEEK = 52;
const STACK_H = CARD_H + (N - 1) * PEEK;
const DROP = 700;
const GAP = 20;
const MOBILE_BP = 900;

function stackY(i: number) { return i * PEEK; }
function ease(x: number) { return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2; }
function clamp(x: number) { return Math.max(0, Math.min(x, 1)); }

function CaseCard({ campaign, slot, onVideoClick }: {
  campaign: typeof campaigns[0]; slot: "insight" | "viz1" | "longCopy" | "viz2";
  onVideoClick: (src: string) => void;
}) {
  const s: React.CSSProperties = { width: `${CARD_W}px`, height: `${CARD_H}px`, borderRadius: "1.6rem", overflow: "hidden", position: "relative" };
  if (slot === "insight") return (
    <div style={{ ...s, background: "white", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px 22px" }}>
      <p style={{ fontFamily: "'Product Sans','Google Sans','Figtree',sans-serif", fontWeight: 600, fontSize: "22px", lineHeight: 1.25, color: "#111", textAlign: "center", letterSpacing: "-0.02em", margin: 0 }}>{campaign.insight}</p>
    </div>
  );
  if (slot === "longCopy") return (
    <div style={{ ...s, background: "rgba(20,20,22,0.97)", padding: "18px 22px", display: "flex", alignItems: "center" }}>
      <p style={{ fontFamily: "'Figtree',sans-serif", fontWeight: 300, fontSize: "13.5px", lineHeight: 1.25, color: "rgba(210,210,210,0.85)", letterSpacing: "-0.01em", textAlign: "center", margin: 0 }}>{campaign.longCopy}</p>
    </div>
  );
  const viz = slot === "viz1" ? campaign.viz1 : campaign.viz2;
  if (viz.type === "mp4") return (
    <div style={{ ...s, cursor: "pointer", background: "#000" }} onClick={() => onVideoClick(viz.src)}>
      <video src={viz.src} autoPlay muted loop playsInline style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      <div style={{ position: "absolute", bottom: 10, right: 12, background: "rgba(0,0,0,0.6)", borderRadius: "100px", padding: "4px 12px", fontSize: "10px", color: "white", fontFamily: "'Product Sans',sans-serif", fontWeight: 500 }}>▶ Watch full</div>
    </div>
  );
  if ("link" in viz && viz.link) return (
    <a href={viz.link} target="_blank" rel="noopener noreferrer" style={{ ...s, display: "block", cursor: "pointer" }}>
      <img src={viz.src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      <div style={{ position: "absolute", bottom: 10, right: 12, background: "rgba(0,0,0,0.6)", borderRadius: "100px", padding: "4px 12px", fontSize: "10px", color: "white", fontFamily: "'Product Sans',sans-serif", fontWeight: 500 }}>↗ Visit site</div>
    </a>
  );
  return <div style={{ ...s, background: "#111" }}><img src={viz.src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div>;
}

function DesktopFloat({ campaign, slot, progress, centerY, onVideoClick }: {
  campaign: typeof campaigns[0]; slot: "insight" | "viz1" | "longCopy" | "viz2";
  progress: number; centerY: number; onVideoClick: (src: string) => void;
}) {
  const pos = { insight: { x: 320, y: -150 }, viz1: { x: -340, y: -120 }, longCopy: { x: -320, y: 220 }, viz2: { x: 330, y: 180 } }[slot];
  return (
    <div style={{ position: "absolute", top: 0, left: 0, opacity: progress, transform: `translate(${pos.x * progress}px, ${centerY + pos.y * progress}px) scale(${0.8 + 0.2 * progress})`, zIndex: 10, pointerEvents: progress > 0.5 ? "auto" : "none" }}>
      <CaseCard campaign={campaign} slot={slot} onVideoClick={onVideoClick} />
    </div>
  );
}

export default function SpendCategories() {
  const sectionRef = useRef<HTMLElement>(null);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [tick, setTick] = useState(0);

  // All state in a single ref to avoid stale closures in RAF
  const r = useRef({
    // Per-card Y, opacity, flip — used for ALL cards on desktop AND for non-active cards on mobile
    cardYs:   campaigns.map((_, i) => stackY(i) + 600),
    cardOps:  campaigns.map(() => 0 as number),
    cardFlips: campaigns.map(() => 0 as number),
    // Desktop float progress
    floatProgress: 0,
    // Mobile-specific: case cards Y offsets relative to the active card's position
    // Each of 4 case cards has its own Y (they cascade below the active card)
    caseYs: [600, 600, 600, 600] as number[],
    caseOps: [0, 0, 0, 0] as number[],
    activeCampaign: -1,
    activeCenterY: 0,
    headerOpacity: 1,
    isMobile: false,
  });

  useEffect(() => {
    let rafId: number;

    function update() {
      const section = sectionRef.current;
      if (!section) { rafId = requestAnimationFrame(update); return; }

      const rect = section.getBoundingClientRect();
      const total = section.clientHeight - window.innerHeight;
      const sP = Math.max(0, Math.min(-rect.top / total, 1));

      const mobile = window.innerWidth < MOBILE_BP;
      const screenCenter = (STACK_H / 2) - (CARD_H / 2);

      const ENT_END   = 0.10;
      const HOLD_END  = 0.13;
      const CAMP_START = 0.13;
      const CAMP_END  = 0.92;

      const ys    = new Array(N).fill(0) as number[];
      const ops   = new Array(N).fill(1) as number[];
      const flips = new Array(N).fill(0) as number[];
      // Case card positions relative to the active card's Y (absolute within wrapper)
      const cYs  = [0, 0, 0, 0] as number[];
      const cOps = [0, 0, 0, 0] as number[];

      let fp = 0, active = -1, header = 1, activeCY = 0;

      if (sP < ENT_END) {
        header = 1;
        for (let i = 0; i < N; i++) {
          const s = (i / N) * ENT_END * 0.5, e = s + ENT_END * 0.75;
          const t = ease(clamp((sP - s) / (e - s)));
          ys[i] = stackY(i) + (1 - t) * 500; ops[i] = t; flips[i] = 0;
        }

      } else if (sP < HOLD_END) {
        header = 1;
        for (let i = 0; i < N; i++) { ys[i] = stackY(i); ops[i] = 1; flips[i] = 0; }

      } else if (sP < CAMP_END) {
        header = Math.max(0, 1 - (sP - HOLD_END) / 0.05);
        const localAll  = (sP - CAMP_START) / (CAMP_END - CAMP_START);
        const campIdx   = Math.min(Math.floor(localAll * N), N - 1);
        const campLocal = (localAll - campIdx / N) / (1 / N);
        active = campIdx;
        activeCY = screenCenter;

        // ── PHASE 0.00–0.15: pop out ──────────────────────────────────────────
        if (campLocal < 0.15) {
          const t = ease(campLocal / 0.15);
          fp = 0;
          for (let i = 0; i < N; i++) {
            if (i === campIdx) {
              ys[i] = stackY(campIdx) + t * (screenCenter - stackY(campIdx));
              ops[i] = 1; flips[i] = 0;
            } else {
              const st = clamp(t * 1.3 - Math.abs(i - campIdx) * 0.08);
              ys[i] = stackY(i) + ease(st) * DROP;
              ops[i] = Math.max(0, 1 - ease(st)); flips[i] = 0;
            }
          }
          for (let c = 0; c < 4; c++) { cYs[c] = screenCenter + 600; cOps[c] = 0; }

        // ── PHASE 0.15–0.28: flip ─────────────────────────────────────────────
        } else if (campLocal < 0.28) {
          const t = ease((campLocal - 0.15) / 0.13);
          fp = mobile ? 0 : t;
          // The ONE card flips — same card, same position
          ys[campIdx] = screenCenter; ops[campIdx] = 1; flips[campIdx] = t * 180;
          for (let i = 0; i < N; i++) {
            if (i !== campIdx) { ys[i] = stackY(i) + DROP; ops[i] = 0; flips[i] = 0; }
          }
          // Case cards start appearing below the active card on mobile
          if (mobile) {
            for (let c = 0; c < 4; c++) {
              const cT = clamp((t - c * 0.1) / 0.6);
              const targetY = screenCenter + (c + 1) * (CARD_H + GAP);
              cYs[c] = screenCenter + 600 - ease(cT) * (600 - (targetY - screenCenter));
              cOps[c] = ease(cT);
            }
          } else {
            for (let c = 0; c < 4; c++) { cYs[c] = 0; cOps[c] = 0; }
          }

        // ── PHASE 0.28–0.72: showcase ─────────────────────────────────────────
        } else if (campLocal < 0.80) {
          const showcaseT = (campLocal - 0.28) / 0.52;
          fp = mobile ? 0 : 1;
          ys[campIdx] = screenCenter; ops[campIdx] = 1; flips[campIdx] = 180;
          for (let i = 0; i < N; i++) {
            if (i !== campIdx) { ys[i] = stackY(i) + DROP; ops[i] = 0; flips[i] = 0; }
          }

          if (mobile) {
            // The active card AND all case cards scroll up together.
            // Think of it as a column: [mainCard, case0, case1, case2, case3]
            // At showcaseT=0: mainCard at screenCenter, case cards below
            // At showcaseT=1: case3 (viz2) at screenCenter → mainCard is screenCenter - 4*(CARD_H+GAP) above
            const totalScroll = 4 * (CARD_H + GAP);
            const scrolled = ease(showcaseT) * totalScroll;

            // Active card moves UP by scrolled amount
            ys[campIdx] = screenCenter - scrolled;

            // Each case card is at a fixed offset below the active card
            for (let c = 0; c < 4; c++) {
              cYs[c] = screenCenter + (c + 1) * (CARD_H + GAP) - scrolled;
              cOps[c] = 1;
            }
          } else {
            for (let c = 0; c < 4; c++) { cYs[c] = 0; cOps[c] = 0; }
          }

        // ── PHASE 0.72–0.85: collapse ─────────────────────────────────────────
        } else if (campLocal < 0.92) {
          const t = ease((campLocal - 0.80) / 0.12);
          fp = mobile ? 0 : (1 - t);

          if (mobile) {
            // Everything collapses back: active card moves back to screenCenter
            // Case cards converge on top of it
            const totalScroll = 4 * (CARD_H + GAP);
            const currentScroll = totalScroll; // was fully scrolled at end of showcase

            // Active card: from (screenCenter - totalScroll) back to screenCenter
            ys[campIdx] = (screenCenter - totalScroll) + ease(t) * totalScroll;
            ops[campIdx] = 1;
            // Flip back during collapse
            flips[campIdx] = (1 - t) * 180;

            // Case cards: converge onto active card position
            for (let c = 0; c < 4; c++) {
              const cEndPos = screenCenter + (c + 1) * (CARD_H + GAP) - totalScroll;
              // Move from their final showcase position to the active card's current position
              const activeCurrentY = (screenCenter - totalScroll) + ease(t) * totalScroll;
              cYs[c] = cEndPos + ease(t) * (activeCurrentY - cEndPos);
              cOps[c] = 1 - t;
            }
          } else {
            ys[campIdx] = screenCenter; ops[campIdx] = 1; flips[campIdx] = (1 - t) * 180;
          }
          for (let i = 0; i < N; i++) {
            if (i !== campIdx) { ys[i] = stackY(i) + DROP; ops[i] = 0; flips[i] = 0; }
          }

        // ── PHASE 0.85–1.00: stack returns ────────────────────────────────────
        } else {
          const t = ease((campLocal - 0.92) / 0.08);
          fp = 0;
          for (let c = 0; c < 4; c++) { cYs[c] = screenCenter; cOps[c] = 0; }

          for (let i = 0; i < N; i++) {
            if (i === campIdx) {
              ys[i] = screenCenter + t * (stackY(campIdx) - screenCenter);
              ops[i] = 1; flips[i] = 0;
            } else {
              const st = clamp(t * 1.3 - Math.abs(i - campIdx) * 0.08);
              ys[i] = stackY(i) + DROP - ease(st) * DROP;
              ops[i] = ease(st); flips[i] = 0;
            }
          }
        }

      } else {
        header = Math.max(0, 1 - (sP - HOLD_END) / 0.05);
        for (let i = 0; i < N; i++) { ys[i] = stackY(i); ops[i] = 1; flips[i] = 0; }
        for (let c = 0; c < 4; c++) { cYs[c] = 0; cOps[c] = 0; }
      }

      const rv = r.current;
      rv.cardYs = ys; rv.cardOps = ops; rv.cardFlips = flips;
      rv.floatProgress = fp; rv.activeCampaign = active;
      rv.activeCenterY = activeCY; rv.headerOpacity = header;
      rv.caseYs = cYs; rv.caseOps = cOps;
      rv.isMobile = mobile;

      setTick(t => t + 1);
      rafId = requestAnimationFrame(update);
    }

    rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const rv = r.current;
  const caseSlots: ("insight" | "viz1" | "longCopy" | "viz2")[] = ["insight", "viz1", "longCopy", "viz2"];

  return (
    <>
      {videoSrc && <VideoModal src={videoSrc} onClose={() => setVideoSrc(null)} />}

      <section
        id="spend-categories"
        ref={sectionRef}
        className="bg-black text-white relative z-30"
        style={{ height: `${N * 160 + 80}vh` }}
      >
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-black">

          <div className="absolute top-24 sm:top-32 max-w-2xl mx-auto w-full text-center z-10 px-6 select-none"
            style={{ 
              opacity: rv.headerOpacity, 
              transform: `translateY(${(1 - rv.headerOpacity) * -80}px)`,
              transition: "opacity 0.2s, transform 0.2s" 
            }}>
            <h2 className="text-[40px] sm:text-5xl md:text-6xl gs-bold leading-tight text-white">
              Maximize points on<br />these spend categories
            </h2>
          </div>

          <div className="relative z-20" style={{ width: `${CARD_W}px`, height: `${STACK_H}px` }}>

            {/* ── ALL STACK CARDS ── */}
            {campaigns.map((campaign, idx) => (
              <div key={campaign.id} style={{
                position: "absolute", width: `${CARD_W}px`, height: `${CARD_H}px`, top: 0, left: 0,
                transform: `translateY(${rv.cardYs[idx]}px)`,
                opacity: rv.cardOps[idx],
                zIndex: idx + 1,
                perspective: "1000px",
              }}>
                <div style={{
                  position: "relative", width: "100%", height: "100%",
                  transformStyle: "preserve-3d",
                  transform: `rotateY(${rv.cardFlips[idx]}deg)`,
                  borderRadius: "1.6rem",
                }}>
                  <div style={{
                    position: "absolute", inset: 0, backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden",
                    borderRadius: "1.6rem", background: campaign.color,
                    padding: "20px 24px", display: "flex", flexDirection: "column", justifyContent: "flex-start",
                  }}>
                    <span style={{ fontFamily: "'Product Sans','Google Sans',sans-serif", fontWeight: 600, fontSize: "20px", color: "#111", letterSpacing: "-0.018em" }}>{campaign.label}</span>
                  </div>
                  <div style={{
                    position: "absolute", inset: 0, backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(180deg)", borderRadius: "1.6rem", background: campaign.darkBg, overflow: "hidden",
                  }}>
                    <img src={campaign.mainGif} alt={campaign.label} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                </div>
              </div>
            ))}

            {/* ── MOBILE CASE CARDS (absolute, positioned below active card) ── */}
            {rv.activeCampaign >= 0 && rv.isMobile && caseSlots.map((slot, ci) => (
              <div key={slot} style={{
                position: "absolute", top: 0, left: 0,
                transform: `translateY(${rv.caseYs[ci]}px)`,
                opacity: rv.caseOps[ci],
                zIndex: 20,
                pointerEvents: rv.caseOps[ci] > 0.3 ? "auto" : "none",
              }}>
                <CaseCard campaign={campaigns[rv.activeCampaign]} slot={slot} onVideoClick={setVideoSrc} />
              </div>
            ))}

            {/* ── DESKTOP FLOATS ── */}
            {rv.activeCampaign >= 0 && !rv.isMobile && rv.floatProgress > 0 &&
              caseSlots.map(slot => (
                <DesktopFloat key={slot} campaign={campaigns[rv.activeCampaign]} slot={slot}
                  progress={rv.floatProgress} centerY={rv.activeCenterY} onVideoClick={setVideoSrc} />
              ))
            }

          </div>
        </div>
      </section>
    </>
  );
}