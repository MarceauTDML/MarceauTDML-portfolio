import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Portfolio } from "../components/Portfolio";
import { Process } from "../components/Process";
import { Pricing } from "../components/Pricing";
import { Contact } from "../components/Contact";

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Portfolio />
      <Process />
      <Pricing />
      <Contact />
    </>
  );
}