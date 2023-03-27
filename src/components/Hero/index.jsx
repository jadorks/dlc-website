import styles from "./hero.module.css";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Navbar from "../Navbar";

export default function Hero() {
  const textVariant = {
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i*0.1, ease: "easeIn" },
    }),
    hidden: { opacity: 0, y: 15 },
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <div ref={ref} className={styles.section}>
      <Navbar/>
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.h1 custom={1} variants={textVariant} initial="hidden" animate={control}>
            Deep Learning Chain
          </motion.h1>
          <div className={styles.subtitle}>
            <motion.h2 custom={2} variants={textVariant} initial="hidden" animate={control}>
              A voice-automated, proof-of-authority,
              <br /> permisionless blockchain
            </motion.h2>
            <img
              className={styles.hero_ellipse}
              src="/images/elements/hero-ellipse.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
