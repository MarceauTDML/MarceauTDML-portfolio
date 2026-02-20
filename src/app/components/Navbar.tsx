import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  const navLinks = [
    { label: "A propos", href: "#about" },
    { label: "Projets", href: "#projects" },
    { label: "Méthode", href: "#method" },
    { label: "Tarifs", href: "#pricing" },
  ];

  return (
    <header role="banner" className="sticky top-0 z-50 bg-[#fafafa] dark:bg-background w-full font-['Inter',sans-serif] border-b border-[rgba(0,0,0,0.06)] dark:border-border transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between px-6 md:px-10 lg:px-16 py-5">
        
        <a 
          href="https://marceautdml.com" 
          aria-label="Accueil Marceau TDML"
          className="font-semibold text-[22px] text-foreground tracking-[-0.48px] shrink-0 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-[#667eea] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-background"
        >
          Marceau TDML
        </a>

        <nav aria-label="Menu principal" className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-medium text-[16px] text-foreground/80 tracking-[-0.08px] hover:text-[#667eea] transition-colors rounded-md px-2 py-1 outline-none focus-visible:ring-2 focus-visible:ring-[#667eea]"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className="bg-[#667eea] text-white font-medium text-[16px] tracking-[-0.08px] px-4 py-2.5 rounded-xl hover:bg-[#5a6fd6] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#667eea] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-background"
          >
            Me contacter
          </a>

          <button
            onClick={toggleTheme}
            className="p-2 text-foreground/80 hover:text-[#667eea] transition-colors rounded-md outline-none focus-visible:ring-2 focus-visible:ring-[#667eea]"
            aria-label={isDark ? "Activer le mode clair" : "Activer le mode sombre"}
          >
            {isDark ? <Sun size={20} aria-hidden="true" /> : <Moon size={20} aria-hidden="true" />}
          </button>
        </nav>

        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 text-foreground rounded-md outline-none focus-visible:ring-2 focus-visible:ring-[#667eea]"
            aria-label={isDark ? "Activer le mode clair" : "Activer le mode sombre"}
          >
            {isDark ? <Sun size={20} aria-hidden="true" /> : <Moon size={20} aria-hidden="true" />}
          </button>

          <button
            className="p-2 text-foreground rounded-md outline-none focus-visible:ring-2 focus-visible:ring-[#667eea]"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav 
          id="mobile-menu"
          aria-label="Menu principal mobile"
          className="md:hidden bg-[#fafafa] dark:bg-background border-t border-[rgba(0,0,0,0.1)] dark:border-border px-6 py-4 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-medium text-[16px] text-foreground tracking-[-0.08px] py-2 hover:text-[#667eea] transition-colors rounded-md outline-none focus-visible:ring-2 focus-visible:ring-[#667eea] px-2"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-[#667eea] text-white font-medium text-[16px] tracking-[-0.08px] px-4 py-3 rounded-xl text-center hover:bg-[#5a6fd6] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#667eea] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-background"
            onClick={() => setIsOpen(false)}
          >
            Me contacter
          </a>
        </nav>
      )}
    </header>
  );
}