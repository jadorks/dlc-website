import About from "@/components/About";
import Features from "@/components/Features";
import Governance from "@/components/Governance";
import Hero from "@/components/Hero";
import Roadmap from "@/components/Roadmap";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Governance />
      <Features />
      <Roadmap />
    </>
  );
}
