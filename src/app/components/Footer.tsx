import svgPaths from "../../imports/svg-hrs185whpn";

function InstagramIcon() {
  return (
    <a href="#" className="block size-[24px] hover:opacity-80 transition-opacity" aria-label="Instagram">
      <svg className="size-full" fill="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip_ig)">
          <path d={svgPaths.p3c382d72} fill="#FAFAFA" />
        </g>
        <defs>
          <clipPath id="clip_ig">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </a>
  );
}

function LinkedInIcon() {
  return (
    <a href="#" className="block size-[24px] hover:opacity-80 transition-opacity" aria-label="LinkedIn">
      <svg className="size-full" fill="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip_li)">
          <path
            clipRule="evenodd"
            d={svgPaths.p1fcf5070}
            fill="#FAFAFA"
            fillRule="evenodd"
          />
          <path d={svgPaths.pe7ea00} fill="#111827" />
          <path d={svgPaths.p1ab31680} fill="#111827" />
          <path d={svgPaths.p28c6df0} fill="#111827" />
        </g>
        <defs>
          <clipPath id="clip_li">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </a>
  );
}

export function Footer() {
  return (
    <footer
      id="footer"
      className="w-full bg-[#111827] font-['Inter',sans-serif]"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20">
        <div className="border-t border-[rgba(250,250,250,0.1)] pt-16 md:pt-20 flex flex-col lg:flex-row gap-12 lg:gap-28">
          {/* Left column */}
          <div className="flex-1 flex flex-col gap-12 md:gap-14">
            <div className="flex flex-col gap-2">
              <h5 className="font-semibold text-[22px] md:text-[24px] tracking-[-0.48px] leading-[1.45] text-[#fafafa]">
                Marceau TDML
              </h5>
              <p className="font-medium text-[16px] tracking-[-0.08px] leading-[1.45] text-[rgba(250,250,250,0.55)] max-w-[380px]">
                Votre site professionnel clé en main, simple, efficace et
                élégant.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <InstagramIcon />
              <LinkedInIcon />
            </div>
          </div>

          {/* Right columns */}
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-10 md:gap-10">
            {/* Contact */}
            <nav className="flex flex-col gap-2 min-w-[200px]">
              <h6 className="font-semibold text-[16px] tracking-[-0.08px] leading-[1.45] text-[#fafafa] pb-3">
                Contact
              </h6>
              <a
                href="mailto:marceautdml@gmail.com"
                className="font-medium text-[16px] tracking-[-0.08px] leading-[1.45] text-[rgba(250,250,250,0.55)] hover:text-[rgba(250,250,250,0.8)] transition-colors"
              >
                marceautdml@gmail.com
              </a>
              <p className="font-medium text-[16px] tracking-[-0.08px] leading-[1.45] text-[rgba(250,250,250,0.55)]">
                +33 6 25 15 33 33
              </p>
              <p className="font-medium text-[16px] tracking-[-0.08px] leading-[1.45] text-[rgba(250,250,250,0.55)]">
                Paris 5e arrondissement
              </p>
            </nav>

            {/* Legal */}
            <nav className="flex flex-col gap-2 min-w-[160px]">
              <h6 className="font-semibold text-[16px] tracking-[-0.08px] leading-[1.45] text-[#fafafa] pb-3">
                Légal
              </h6>
              <a
                href="#"
                className="font-medium text-[16px] tracking-[-0.08px] leading-[1.45] text-[rgba(250,250,250,0.55)] hover:text-[rgba(250,250,250,0.8)] transition-colors"
              >
                CGU
              </a>
              <a
                href="#"
                className="font-medium text-[16px] tracking-[-0.08px] leading-[1.45] text-[rgba(250,250,250,0.55)] hover:text-[rgba(250,250,250,0.8)] transition-colors"
              >
                CGV
              </a>
              <a
                href="#"
                className="font-medium text-[16px] tracking-[-0.08px] leading-[1.45] text-[rgba(250,250,250,0.55)] hover:text-[rgba(250,250,250,0.8)] transition-colors"
              >
                Mentions légales
              </a>
              <a
                href="#"
                className="font-medium text-[16px] tracking-[-0.08px] leading-[1.45] text-[rgba(250,250,250,0.55)] hover:text-[rgba(250,250,250,0.8)] transition-colors"
              >
                Confidentialité
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
