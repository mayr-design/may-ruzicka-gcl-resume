export default function Footer() {
  return (
    <section className="bg-black text-white relative z-30 flex flex-col items-center overflow-hidden" style={{ minHeight: "100vh" }}>
      <div className="flex-1 w-full max-w-4xl mx-auto px-6 sm:px-12 md:px-16 flex flex-col items-center justify-center text-center py-32 sm:py-40">

        <h2 className="text-[40px] sm:text-5xl md:text-6xl lg:text-[4rem] gs-bold tracking-tight text-white mb-12 max-w-3xl mx-auto" style={{ lineHeight: 1.2 }}>
          If you&apos;re looking for someone who can&apos;t stop thinking in Google, even when thinking about themselves —{" "}
          <span className="sm:hidden"><br /></span><span className="text-[#3A87FA]">Tap me in.</span>
        </h2>

        <p className="gs-medium text-white/40 text-[15px] sm:text-[17px] mb-10 select-none">
          Thank you!
        </p>

        <a
          href="https://www.mayruzicka.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-[#3A87FA] hover:bg-[#2563eb] text-white gs-medium text-[16px] sm:text-[17px] px-12 py-4 rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-500/20"
        >
          Learn more
        </a>

      </div>

      {/* Anchored to bottom */}
      <div className="w-full pb-10 flex flex-col items-center gap-2 select-none">
        <p className="text-[13px] sm:text-[14px] gs-medium text-white/30 tracking-wide">
          Resume for Google Creative Lab Five
        </p>
        <a
          href="mailto:mayruzicka@gmail.com"
          className="text-[13px] sm:text-[14px] gs-medium text-white/30 hover:text-white/60 transition-colors duration-300"
        >
          mayruzicka@gmail.com
        </a>
      </div>

    </section>
  );
}