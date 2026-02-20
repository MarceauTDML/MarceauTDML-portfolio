import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

import { Home } from "./pages/Home";
import { Cgu } from "./pages/Cgu";
import { Cgv } from "./pages/Cgv";
import { MentionsLegales } from "./pages/MentionsLegales";
import { Confidentialite } from "./pages/Confidentialite";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:p-4 focus:bg-background focus:text-foreground focus:font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#667eea]"
      >
        Aller au contenu principal
      </a>
      
      <div className="min-h-screen w-full flex flex-col bg-background text-foreground font-['Inter',sans-serif] transition-colors duration-300">
        <Navbar />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cgu" element={<Cgu />} />
            <Route path="/cgv" element={<Cgv />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/confidentialite" element={<Confidentialite />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}