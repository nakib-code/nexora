
import ExpertiseStrip from "@/components/home/ExpertiseStrip";
import Services from "@/components/home/Services";
import Projects from "@/components/home/Projects";
import Team from "@/components/home/Team";
import About from "@/components/home/About";
import Process from "@/components/home/Process";
import ContactCTA from "@/components/home/ContactCTA";
import Hero from "@/components/home/hero/Hero";

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-[#faf9f6] text-[#17151d]">
      <Hero />
      <ExpertiseStrip />
      <Services />
      <Projects />
      <Team />
      <About />
      <Process />
      <ContactCTA />
    </main>
  );
}