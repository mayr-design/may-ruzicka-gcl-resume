export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-black text-white py-24 sm:py-32 z-30 relative flex flex-col items-center justify-center space-y-28 sm:space-y-36"
    >

      {/* ── GOOGLE TAP SUB-BLOCK ── */}
      <div className="max-w-5xl w-full mx-auto px-6 sm:px-12 md:px-16 text-center">

        <div className="mb-14 sm:mb-20 max-w-xl mx-auto w-full select-none">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-[50px] sm:text-6xl md:text-7xl gs-bold leading-[0.9] text-white text-center">
              Google
            </h2>
            <div className="grid grid-cols-3 items-center w-full mt-0 sm:mt-0.5">
              <div className="text-right pr-6 sm:pr-8 md:pr-10">
                <span className="gs-bold text-[30px] sm:text-3xl md:text-4xl text-neutral-400">How</span>
              </div>
              <div className="text-center">
                <span className="text-[50px] sm:text-6xl md:text-7xl gs-bold leading-[0.9] text-white">Tap</span>
              </div>
              <div className="text-left pl-6 sm:pl-8 md:pl-10">
                <span className="gs-bold text-[30px] sm:text-3xl md:text-4xl text-neutral-400">works</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-6 lg:gap-8 items-start">

          {/* Step 1: Detect */}
          <div className="flex flex-col items-start text-left space-y-6 group w-full">
            <div className="w-full aspect-[3/4] bg-[#f4f3f0] rounded-[1.25rem] overflow-hidden shadow-2xl relative border border-white/5 transition-transform duration-500 group-hover:scale-[1.02] p-4 flex flex-col justify-between">
              <div className="scale-[0.82] sm:scale-[0.88] md:scale-[0.90] lg:scale-100 overflow-visible w-full h-full flex flex-col justify-between relative">
                <div className="absolute inset-0 w-full h-full opacity-95 rounded-2xl overflow-hidden shadow-inner">
                  <svg viewBox="0 0 300 400" className="absolute inset-0 w-full h-full" style={{ backgroundColor: "#f4f3f0" }}>
                    <path d="M -10,-10 L 115,-10 L 115,100 L -10,135 Z" fill="#e2f0d9" />
                    <path d="M 130,-10 L 310,-10 L 310,120 L 130,85 Z" fill="#fdf4e8" />
                    <path d="M -10,150 L 115,115 L 115,225 L -10,225 Z" fill="#e8eaed" />
                    <path d="M 105,140 L 205,130 L 205,245 L 105,245 Z" fill="#fdf4e8" />
                    <path d="M 115,155 L 195,147 L 195,215 L 115,215 Z" fill="#00704a" />
                    <text x="155" y="180" fill="#ffffff" fontFamily="'Product Sans', 'Google Sans', sans-serif" fontWeight="700" fontSize="8.5" textAnchor="middle" className="select-none pointer-events-none">whole foods</text>
                    <text x="155" y="190" fill="#ffffff" fontFamily="'Product Sans', 'Google Sans', sans-serif" fontWeight="500" fontSize="5.5" textAnchor="middle" opacity="0.8" className="select-none pointer-events-none">MARKET</text>
                    <path d="M 215,130 L 310,145 L 310,245 L 215,245 Z" fill="#e8eaed" />
                    <path d="M -10,305 C 60,285 140,335 310,295 L 310,410 L -10,410 Z" fill="#e3f2fd" />
                    <path d="M 130,255 L 210,255 L 210,285 L 130,285 Z" fill="#e8eaed" />
                  </svg>
                </div>
                <div className="absolute right-4 top-4 bg-white rounded-lg p-1 shadow flex flex-col gap-1 scale-90 z-20 border border-neutral-100/80">
                  <button className="w-5 h-5 bg-neutral-50 hover:bg-neutral-100 rounded flex items-center justify-center text-xs text-neutral-800 gs-bold select-none">+</button>
                  <button className="w-5 h-5 bg-neutral-50 hover:bg-neutral-100 rounded flex items-center justify-center text-xs text-neutral-800 gs-bold select-none">-</button>
                </div>
                <div className="absolute top-[45%] left-[51.6%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
                  <div className="absolute w-8 h-8 bg-blue-500/30 rounded-full animate-[pulse-gps_2s_infinite_ease-out]"></div>
                  <div className="w-2.5 h-2.5 bg-blue-600 rounded-full border-2 border-white shadow"></div>
                </div>
                <div className="bg-white rounded-2xl p-3 shadow-md border border-neutral-100/85 w-full flex items-center gap-2.5 z-10 absolute bottom-0 left-0 animate-[detect-card-slide_5s_infinite_cubic-bezier(0.25,1,0.5,1)]">
                  <div className="w-8 h-8 rounded-full bg-[#00704a] flex items-center justify-center text-white gs-bold text-[10px]">wf</div>
                  <div className="flex-1 min-w-0 text-left">
                    <div className="text-[11px] sm:text-[12px] gs-bold text-neutral-900 text-left leading-tight">Whole Foods Market</div>
                    <div className="text-[9px] text-neutral-400 gs-regular flex items-center gap-1 mt-0.5">
                      <span className="text-amber-400">★★★★☆</span> 4.2 · Grocery
                    </div>
                    <div className="flex gap-1 mt-1.5">
                      <span className="bg-blue-50 text-blue-600 text-[8px] px-1.5 py-0.5 rounded gs-bold">🛒 Grocery</span>
                      <span className="bg-green-50 text-green-600 text-[8px] px-1.5 py-0.5 rounded gs-bold">✓ Category detected</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4 px-4">
              <h3 className="text-2xl gs-bold text-white tracking-tight">1. Detect</h3>
              <p className="gs-medium text-white/70 text-[18px] leading-snug">
                Google Tap identifies the store you&apos;re at and the purchase category in real time.
              </p>
            </div>
          </div>

          {/* Step 2: Select */}
          <div className="flex flex-col items-start text-left space-y-6 group w-full">
            <div className="w-full aspect-[3/4] bg-[#f8f9fa] rounded-[1.25rem] overflow-hidden shadow-2xl relative border border-white/5 transition-transform duration-500 group-hover:scale-[1.02] p-4 flex flex-col justify-between items-center">
              <div className="flex-1 flex items-center justify-center scale-[0.82] sm:scale-[0.88] md:scale-[0.90] lg:scale-[0.98] overflow-visible py-4 h-[180px] w-full">
                <div className="s2-stack">
                  <div className="s2-card s2-c3">
                    <div className="s2-chip"></div>
                    <div className="s2-cn">Chase Sapphire</div>
                    <div className="s2-cp">1x groceries</div>
                  </div>
                  <div className="s2-card s2-c2">
                    <div className="s2-chip"></div>
                    <div className="s2-cn">Citi Double Cash</div>
                    <div className="s2-cp">2x groceries</div>
                  </div>
                  <div className="s2-card s2-c1">
                    <div className="s2-badge">Best ✓</div>
                    <div className="s2-chip"></div>
                    <div className="s2-cn">Amex Gold Card</div>
                    <div className="s2-cp">4x points on groceries</div>
                  </div>
                </div>
              </div>
              <div className="bg-[#e8f0fe] text-[#1a73e8] text-[9.5px] gs-bold px-4 py-1.5 rounded-full mt-2 border border-[#d2e3fc] shadow-sm mb-1 z-10">
                💳 Best card surfaced automatically
              </div>
            </div>
            <div className="space-y-4 px-4">
              <h3 className="text-2xl gs-bold text-white tracking-tight">2. Select</h3>
              <p className="gs-medium text-white/70 text-[18px] leading-snug">
                Your cards are scanned instantly. The one that earns the most for that category moves to the front.
              </p>
            </div>
          </div>

          {/* Step 3: Earn */}
          <div className="flex flex-col items-start text-left space-y-6 group w-full">
            <div className="w-full aspect-[3/4] bg-[#f8f9fa] rounded-[1.25rem] overflow-hidden shadow-2xl relative border border-white/5 transition-transform duration-500 group-hover:scale-[1.02] p-4 flex flex-col justify-between items-center">
              <div className="flex-1 flex items-center justify-center scale-[0.82] sm:scale-[0.88] md:scale-[0.90] lg:scale-[0.98] overflow-visible py-4 h-[180px] w-full">
                <div className="scene">
                  <div className="phone">
                    <div className="gw-label">Google Wallet</div>
                    <div className="phone-card">
                      <div className="chip"></div>
                      <div className="card-dots">
                        <div className="dot"></div><div className="dot"></div><div className="dot"></div><div className="dot"></div>
                      </div>
                    </div>
                  </div>
                  <div className="ripples">
                    <div className="ripple-arc"></div><div className="ripple-arc"></div><div className="ripple-arc"></div>
                  </div>
                  <div className="terminal">
                    <div className="terminal-screen">
                      <div className="terminal-amount">$24.50</div>
                      <div className="terminal-store">Whole Foods</div>
                    </div>
                    <div className="terminal-nfc">
                      <div className="nfc-arc"></div><div className="nfc-arc"></div><div className="nfc-arc"></div>
                    </div>
                    <div className="keypad">
                      <div className="key"></div><div className="key"></div><div className="key"></div>
                      <div className="key"></div><div className="key"></div><div className="key"></div>
                      <div className="key"></div><div className="key"></div><div className="key"></div>
                      <div className="key"></div><div className="key"></div><div className="key"></div>
                    </div>
                  </div>
                  <div className="success">
                    <svg viewBox="0 0 18 18" fill="none" width="18" height="18">
                      <path d="M3.5 9L7.5 13L14.5 5.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="bg-[#e6f4ea] text-[#34A853] text-[9.5px] gs-bold px-4 py-1.5 rounded-full border border-[#ceead6] shadow-sm mb-1 z-10 animate-[earn-pill_2.4s_infinite_ease-in-out]">
                ✓ +4x points earned
              </div>
            </div>
            <div className="space-y-4 px-4">
              <h3 className="text-2xl gs-bold text-white tracking-tight">3. Earn</h3>
              <p className="gs-medium text-white/70 text-[18px] leading-snug">
                Google Pay automatically taps with the best card. Points land. No thinking required.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ── HOW MAY RUZICKA WORKS SUB-BLOCK ── */}
      <div className="max-w-5xl w-full mx-auto px-6 sm:px-12 md:px-16 text-center">

        <div className="mb-14 sm:mb-20 max-w-xl mx-auto w-full select-none">
          <div className="flex flex-col items-center justify-center">
            <div className="grid grid-cols-3 items-center w-full mb-0 sm:mb-0.5">
              <div className="text-right pr-6 sm:pr-8 md:pr-10">
                <span className="gs-bold text-[30px] sm:text-3xl md:text-4xl text-neutral-400">How</span>
              </div>
              <div className="text-center">
                <span className="text-[50px] sm:text-6xl md:text-7xl gs-bold leading-[0.9] text-[#4285F4]">May</span>
              </div>
              <div className="text-left pl-6 sm:pl-8 md:pl-10">
                <span className="gs-bold text-[30px] sm:text-3xl md:text-4xl text-neutral-400">works</span>
              </div>
            </div>
            <h2 className="text-[50px] sm:text-6xl md:text-7xl gs-bold leading-[0.9] text-[#4285F4] text-center">
              Ruzicka
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-6 lg:gap-8 items-start">

          {/* Step 1 */}
          <div className="flex flex-col items-start text-left space-y-6 group w-full">
            <div className="w-full aspect-[4/3] rounded-[1.25rem] overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              <img src="/detect.gif" alt="Interactive Netflix presentation deck" className="w-full h-full object-cover" />
            </div>
            <p className="gs-regular text-neutral-400 text-[11px] leading-snug px-1 select-none">
              Vibe coded an interactive presentation deck for Netflix
            </p>
            <div className="space-y-4 px-1">
              <h3 className="text-2xl gs-bold text-white tracking-tight">1. Detect</h3>
              <p className="gs-medium text-white/70 text-[18px] leading-snug">
                I look for the unexpected path to the expected output. Every deliverable is a creative opportunity.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-start text-left space-y-6 group w-full">
            <div className="w-full aspect-[4/3] rounded-[1.25rem] overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              <img src="/select.gif" alt="Self-produced Doritos spot" className="w-full h-full object-cover" />
            </div>
            <p className="gs-regular text-neutral-400 text-[11px] leading-snug px-1 select-none">
              Self produced, directed, and scored Doritos spot
            </p>
            <div className="space-y-4 px-1">
              <h3 className="text-2xl gs-bold text-white tracking-tight">2. Select</h3>
              <p className="gs-medium text-white/70 text-[18px] leading-snug">
                I reach for whatever the idea needs: designing, producing, building, directing.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-start text-left space-y-6 group w-full">
            <div className="w-full aspect-[4/3] rounded-[1.25rem] overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              <img src="/earn.png" alt="Fast Company press coverage" className="w-full h-full object-cover object-top" />
            </div>
            <p className="gs-regular text-neutral-400 text-[11px] leading-snug px-1 select-none">
              Fast Company coverage of Check Lyft campaign which earned 467 million impressions
            </p>
            <div className="space-y-4 px-1">
              <h3 className="text-2xl gs-bold text-white tracking-tight">3. Earn</h3>
              <p className="gs-medium text-white/70 text-[18px] leading-snug">
                I make work that earns attention — in the press, in culture, in the feed.
              </p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}