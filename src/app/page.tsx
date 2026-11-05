
import Services from "@/components/home/Services";
import Team from "@/components/home/Team";
// import Process from "@/components/home/Process";
import ContactCTA from "@/components/home/ContactCTA";
import Hero from "@/components/home/hero/Hero";
import ExpertiseStrip from "@/components/home/ExpertiseStrip";
import About from "@/components/home/about/About";

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-[#faf9f6] text-[#17151d]">
      <Hero />
      <ExpertiseStrip />
      <Services />
      {/* <Projects /> */}
      <About />
      <Team />
      {/* <Process /> */}
      <ContactCTA />
    </main>
  );
}