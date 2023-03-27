import Link from "next/link";
import styles from "./governance.module.css";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Governance() {
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
    <div className={styles.container}>
      <div ref={ref} className={styles.content}>
        <motion.div
          variants={container}
          initial="hidden"
          animate={control}
          className={styles.content__right}
        >
          <motion.h2 variants={textVariant}>
            A Governance Token for Community-Driven Decision Making
          </motion.h2>
          <motion.p variants={textVariant}>
            $DLC is the governance token for Deep Learning Chain and a
            fundraising tool for the development of in-house utility products.
          </motion.p>
          <motion.p variants={textVariant} className="break-words font-bold">
            CA:0×056D97A9A9dDA5A32492Ac31467A3823F26F29F0
          </motion.p>
          <Link href="/whitepaper#governance">
            <motion.div
              variants={linkVariant}
              className="flex gap-4 items-center justify-center md:justify-start"
            >
              <p>Learn More</p>
              <img src="/images/elements/btn.svg" alt="" />
            </motion.div>
          </Link>
        </motion.div>
        <motion.div
          custom={1}
          variants={imageVariant}
          initial="hidden"
          animate={control}
          className={styles.content__left}
        >
          <img src="/images/governance.png" alt="" />
        </motion.div>
      </div>
      <motion.img
        custom={3}
        variants={imageVariant}
        initial="hidden"
        animate={control}
        className={styles.governance__end_left}
        src="/images/elements/governance-end.png"
        alt=""
      />
      <motion.img
        custom={2}
        variants={imageVariant}
        initial="hidden"
        animate={control}
        className={styles.governance__end_right}
        src="/images/elements/governance-end-right.png"
        alt=""
      />
    </div>
  );
}
