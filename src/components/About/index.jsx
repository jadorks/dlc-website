import styles from "./about.module.css";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function About() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const textVariant = {
    visible: {
      opacity: 1,
      y: 0,
    },
    hidden: { opacity: 0, y: -15 },
  };

  const imageVariant = {
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, ease: "easeIn" },
    }),
    hidden: { opacity: 0, y: 30 },
  };

  const linkVariant = {
    visible: {
      opacity: 1,
      transition: { ease: "easeIn" },
    },
    hidden: { opacity: 0 },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <div ref={ref} className={styles.container}>
      <div className={styles.content}>
        <motion.div
          custom={1}
          variants={imageVariant}
          initial="hidden"
          animate={control}
          className={styles.content__left}
        >
          <img src="/images/about.png" alt="" />
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          animate={control}
          className={styles.content__right}
        >
          <img
            className={styles.about_ellipse}
            src="/images/elements/about-ellipse.svg"
            alt=""
          />
          <motion.h2 variants={textVariant}>
            What is Deep Learning Chain?
          </motion.h2>
          <motion.p variants={textVariant}>
            Deep Learning Chain (DLC) is a Layer 2 blockchain platform that is
            EVM Compatible and is augmented by voice automation and artificial
            intelligence. It has a Proof-of-Authority consensus mechanism, and
            it is permissionless, meaning anyone can create a new account or
            transaction on the network.
          </motion.p>
          <motion.a
            variants={linkVariant}
            href="https://app.uniswap.org/#/swap?outputCurrency=0x056d97a9a9dda5a32492ac31467a3823f26f29f0"
            target="_blank"
            rel="noreferrer noopener"
            className="flex gap-4 items-center justify-center md:justify-start"
          >
            <p>Buy Token</p>
            <img src="/images/elements/btn.svg" alt="" />
          </motion.a>
        </motion.div>
      </div>
      <motion.img
        custom={2}
        variants={imageVariant}
        initial="hidden"
        animate={control}
        className={styles.about_end}
        src="/images/elements/about-end.png"
        alt=""
      />
    </div>
  );
}
