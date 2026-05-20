export default function WhyThis() {
  return (
    <section
      id="why-this"
      className="bg-white text-black z-30 relative shadow-[0_-10px_50px_rgba(0,0,0,0.04)] py-24 sm:py-32 flex items-center justify-center"
    >
      <div className="max-w-5xl w-full mx-auto px-6 sm:px-12 md:px-16 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-stretch">

        <div className="md:col-span-5 flex flex-col justify-between min-h-[220px] md:min-h-[400px] space-y-12 md:space-y-0">
          <div className="select-none w-full flex flex-col gap-3">
            <h2 className="text-[40px] sm:text-5xl lg:text-[4rem] leading-[1.05] gs-bold text-black tracking-tighter text-left">
              Why this?
            </h2>
            <h2 className="text-[40px] sm:text-5xl lg:text-[4rem] leading-[1.05] gs-bold text-[#4285F4] tracking-tighter text-left">
              Why me?
            </h2>
          </div>

          <div className="text-[13px] sm:text-[14px] leading-tight space-y-1 select-none text-left w-full">
            <div className="gs-regular text-neutral-500">
              Product: <span className="gs-regular text-neutral-800">Google Tap</span>
            </div>
            <div className="gs-regular text-[#4285F4]">
              Person: <span className="gs-medium text-[#4285F4]">May Ruzicka</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-7 text-[18px] md:text-[18px] leading-[1.5] text-neutral-600">
          <p className="gs-medium text-neutral-600">
            Every time you tap without thinking, you leave potential points on the table. You have the perfect credit card somewhere in your wallet. But at the register, in the moment, you just tap whatever&apos;s on top.
          </p>
          <p className="gs-medium text-[#4285F4]">
            Creativity works the same way. We all have the capacity for it, but without the right tools, experience, and ambition, we default to the easier solution instead of the creative one. The safer idea. The one that&apos;s already on top.
          </p>
          <p className="gs-medium text-neutral-600">
            So what if there was an application in your Google Wallet that seamlessly selects the best card for maximizing your return, right at the point of payment?
          </p>
          <p className="gs-medium text-[#4285F4]">
            Well, that would be like having a multi-disciplinary creative directly in Google Creative Labs that doesn&apos;t default to the easiest solution. One who directs, designs, builds, and thinks in systems, not safety, especially when it matters most.
          </p>
          <p className="gs-body-bold text-neutral-950 leading-[1.45]">
            So for my GCL5 application, I wanted to make my resume a landing page for a product that doesn&apos;t exist yet and a person you haven&apos;t met yet. Scroll down to tap in!
          </p>
        </div>

      </div>
    </section>
  );
}