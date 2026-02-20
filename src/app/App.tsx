import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { Process } from "./components/Process";
import { Pricing } from "./components/Pricing";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-[#fafafa] font-['Inter',sans-serif]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Portfolio />
        <Process />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
