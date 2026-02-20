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
      <div className="min-h-screen w-full flex flex-col bg-[#fafafa] font-['Inter',sans-serif]">
        <Navbar />
        <main className="flex-1">
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