import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "A propos", href: "#about" },
    { label: "Projets", href: "#projects" },
    { label: "Tarifs", href: "#pricing" },
    { label: "Méthode", href: "#method" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#fafafa] w-full font-['Inter',sans-serif] border-b border-[rgba(0,0,0,0.06)]">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between px-6 md:px-10 lg:px-16 py-5">
        {/* Logo */}
        <a href="#" className="font-semibold text-[22px] text-black tracking-[-0.48px] shrink-0">
          Marceau TDML
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-medium text-[16px] text-black tracking-[-0.08px] hover:text-[#667eea] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-[#667eea] text-white font-medium text-[16px] tracking-[-0.08px] px-4 py-2.5 rounded-xl hover:bg-[#5a6fd6] transition-colors"
          >
            Me contacter
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-black"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden bg-[#fafafa] border-t border-[rgba(0,0,0,0.1)] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-medium text-[16px] text-black tracking-[-0.08px] py-2 hover:text-[#667eea] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-[#667eea] text-white font-medium text-[16px] tracking-[-0.08px] px-4 py-3 rounded-xl text-center hover:bg-[#5a6fd6] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Me contacter
          </a>
        </nav>
      )}
    </header>
  );
}