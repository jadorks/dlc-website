import About from "@/components/About";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Governance from "@/components/Governance";
import Hero from "@/components/Hero";
import Roadmap from "@/components/Roadmap";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Hero />
      <About />
      <Governance />
      <Features />
      <Roadmap />
      <Footer/>
    </div>
  );
}
