export function Hero() {
  return (
    <section
      className="w-full font-['Inter',sans-serif]"
      style={{
        backgroundImage:
          "linear-gradient(116.434deg, rgb(102, 126, 234) 0%, rgb(118, 75, 162) 99.943%)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28 lg:py-32 flex flex-col items-center gap-10 md:gap-12">
        {/* Content */}
        <div className="flex flex-col gap-6 items-center text-center max-w-[960px]">
          <h1 className="font-bold text-[32px] sm:text-[42px] md:text-[52px] lg:text-[64px] leading-[1.1] tracking-[-1.28px] text-[#fafafa]">
            Attirez plus de clients avec un site web moderne et performant
          </h1>
          <p className="font-medium text-[18px] md:text-[22px] lg:text-[24px] leading-[1.4] tracking-[-0.12px] text-[rgba(250,250,250,0.8)]">
            Sans frais cachés, sans surprise.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#pricing"
            className="bg-[#fafafa] text-[#667eea] font-bold text-[16px] md:text-[18px] tracking-[-0.09px] px-5 py-3 rounded-xl hover:bg-white transition-colors text-center whitespace-nowrap"
          >
            Découvrir mon offre à 800€
          </a>
          <a
            href="#projects"
            className="relative text-[#fafafa] font-medium text-[16px] md:text-[18px] tracking-[-0.09px] px-5 py-3 rounded-xl border-2 border-[#fafafa] hover:bg-white/10 transition-colors text-center whitespace-nowrap"
          >
            Voir mes réalisations
          </a>
        </div>
      </div>
    </section>
  );
}
