import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Vérifie les préférences de l'utilisateur au chargement
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Fonction pour basculer d'un mode à l'autre
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
    <header className="sticky top-0 z-50 bg-[#fafafa] dark:bg-background w-full font-['Inter',sans-serif] border-b border-[rgba(0,0,0,0.06)] dark:border-border">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between px-6 md:px-10 lg:px-16 py-5">
        {/* Logo */}
        <a href="https://marceautdml.com" className="font-semibold text-[22px] text-foreground tracking-[-0.48px] shrink-0">
          Marceau TDML
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-medium text-[16px] text-foreground/80 tracking-[-0.08px] hover:text-[#667eea] transition-colors"
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

          <button
            onClick={toggleTheme}
            className="p-2 text-foreground/80 hover:text-[#667eea] transition-colors"
            aria-label="Basculer le thème"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Actions */}
        <div className="md:hidden flex items-center gap-3">
          {/* Bouton Dark Mode Mobile */}
          <button
            onClick={toggleTheme}
            className="p-2 text-foreground"
            aria-label="Basculer le thème"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Hamburger menu */}
          <button
            className="p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Ouvrir le menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden bg-[#fafafa] dark:bg-background border-t border-[rgba(0,0,0,0.1)] dark:border-border px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-medium text-[16px] text-foreground tracking-[-0.08px] py-2 hover:text-[#667eea] transition-colors"
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