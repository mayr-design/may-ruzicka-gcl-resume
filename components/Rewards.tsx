export default function Rewards() {
  const awards = [
    { count: "6X", label: "The Clio Awards" },
    { count: "4X", label: "The One Show Awards" },
    { count: "1X", label: "Cannes Lions Shortlist" },
    { count: "4X", label: "Indigo Design Awards" },
  ];

  const reviews = [
    {
      logo: "/adage.png", alt: "AdAge",
      quote: "\u201C24 Gen Zers to watch in marketing and advertising\u201D",
      author: "\u2014Gillian Follett", year: "2026",
      href: "https://adage.com/events-awards/gen-z-alpha-marketing/aa-who-to-watch-marketing-advertising-2026/",
    },
    {
      logo: "/variety.png", alt: "Variety",
      quote: "\u201CDoritos Gives Nod to 25 Semi-Finalists to Revive Super Bowl \u2018Crash\u2019 Commercial Contest\u201D",
      author: "\u2014Brian Steinberg", year: "2025",
      href: "https://variety.com/2025/tv/news/doritos-super-bowl-crash-commercials-2025-1236264065/",
    },
    {
      logo: "/ca.png", alt: "Communication Arts",
      quote: "\u201CThis has all the simple elegance of the best ideas.\u201D",
      author: "\u2014Sarah DiLeo", year: "2024",
      href: "https://www.commarts.com/project/37572/play-it-forward",
    },
  ];

  return (
    <section
      className="relative z-30 text-white overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #000000 0%, #1a1a2e 50%, #3A87FA 100%)" }}
    >

      {/* ── TOP REWARDS ── */}
      <div id="top-rewards" className="py-24 sm:py-32 flex flex-col items-center justify-center text-center">
        <div className="max-w-5xl w-full mx-auto px-6 sm:px-12 md:px-16">

          <h2 className="text-[40px] sm:text-5xl md:text-[3.5rem] gs-bold tracking-tight text-white mb-6 select-none">
            Top Rewards
          </h2>
          <p className="gs-medium text-white/50 text-[15px] sm:text-[17px] mb-10 sm:mb-16 select-none">
            Earned across 2 years of creative work
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-5">
            {awards.map((award) => (
              <div
                key={award.label}
                className="select-none w-full aspect-square flex flex-col items-center justify-center gap-2 sm:gap-3"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  backdropFilter: "blur(12px)",
                  borderRadius: "1.25rem",
                  padding: "24px",
                }}
              >
                <span
                  className="gs-bold text-white leading-none"
                  style={{ fontSize: "clamp(3rem, 6vw, 3.5rem)" }}
                >
                  {award.count}
                </span>
                {/*
                  Label: naturally wraps up to 2 lines.
                  minHeight = 2 lines at lineHeight 1.3 so all 4 always reserve same space.
                  Font size generous — let it wrap, never clamp.
                */}
                <p
                  className="gs-medium text-white/80 text-center"
                  style={{
                    fontSize: "clamp(18px, 1.6vw, 17px)",
                    lineHeight: "1.3",
                    minHeight: "2.6em",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0 4px",
                  }}
                >
                  {award.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── REAL REVIEWS ── */}
      <div id="real-reviews" className="py-24 sm:py-32 flex flex-col items-center justify-center text-center">
        <div className="max-w-5xl w-full mx-auto px-6 sm:px-12 md:px-16">

          <h2 className="text-[40px] sm:text-5xl md:text-[3.5rem] gs-bold tracking-tight text-white mb-6 select-none">
            Real Reviews
          </h2>
          <p className="gs-medium text-white/50 text-[15px] sm:text-[17px] mb-10 sm:mb-16 select-none">
            From people who weren&apos;t paid to say nice things
          </p>

          {/* Desktop lg+: 3-col grid */}
          <div className="hidden lg:grid grid-cols-3 gap-4 lg:gap-6">
            {reviews.map((review) => (
              <a
                key={review.alt}
                href={review.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full aspect-square transition-transform duration-300 hover:scale-[1.02] select-none flex flex-col items-center justify-between"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(12px)",
                  borderRadius: "1.6rem",
                  padding: "clamp(16px,2.5vw,28px) clamp(14px,2vw,24px)",
                  textDecoration: "none",
                  overflow: "hidden",
                }}
              >
                <img src={review.logo} alt={review.alt} style={{ height: "20px", objectFit: "contain", flexShrink: 0 }} />
                <div className="flex flex-col items-center gap-2" style={{ flexShrink: 0 }}>
                  <p className="gs-bold text-white text-center leading-snug" style={{ fontSize: "clamp(16px, 1.6vw, 18px)" }}>
                    {review.quote}
                  </p>
                  <p className="gs-regular text-white" style={{ fontSize: "clamp(11px, 0.9vw, 13px)" }}>
                    {review.author}
                  </p>
                </div>
                <p className="gs-regular text-white" style={{ fontSize: "clamp(14px, 1.2vw, 17px)", flexShrink: 0 }}>
                  {review.year}
                </p>
              </a>
            ))}
          </div>

          {/* Below lg: horizontal scroll with mask-image edge fade */}
          <div className="relative lg:hidden">
            <div
              className="flex gap-4 overflow-x-auto pb-4"
              style={{
                scrollSnapType: "x mandatory",
                WebkitOverflowScrolling: "touch",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                paddingLeft: "12vw",
                paddingRight: "12vw",
                maskImage: "linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%)",
              }}
            >
              {reviews.map((review) => (
                <a
                  key={review.alt}
                  href={review.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-none flex flex-col items-center justify-between select-none"
                  style={{
                    width: "76vw",
                    maxWidth: "320px",
                    aspectRatio: "1/1",
                    background: "rgba(255,255,255,0.08)",
                    backdropFilter: "blur(12px)",
                    borderRadius: "1.6rem",
                    padding: "24px 20px",
                    textDecoration: "none",
                    overflow: "hidden",
                    scrollSnapAlign: "center",
                  }}
                >
                  <img src={review.logo} alt={review.alt} style={{ height: "20px", objectFit: "contain", flexShrink: 0 }} />
                  <div className="flex flex-col items-center gap-2" style={{ flexShrink: 0 }}>
                    <p className="gs-bold text-white text-[22px] leading-snug text-center">
                      {review.quote}
                    </p>
                    <p className="gs-regular text-white text-[12px]">
                      {review.author}
                    </p>
                  </div>
                  <p className="gs-regular text-white text-[15px]" style={{ flexShrink: 0 }}>
                    {review.year}
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* Scroll dots */}
          <div className="flex lg:hidden justify-center gap-1.5 mt-5">
            {reviews.map((r) => (
              <div key={r.alt} className="w-1.5 h-1.5 rounded-full bg-white/40" />
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}