import Link from "next/link";
import styles from "./footer.module.css";
import { useRouter } from "next/router";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Footer() {
  const router = useRouter();

  const container = {
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.05,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    }),
    hidden: { opacity: 0 },
  };

  const linkVariant = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
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
    <div ref={ref} className={styles.container}>
      <div className={styles.content}>
        <motion.div
          custom={0}
          variants={container}
          initial="hidden"
          animate={control}
          className="flex flex-col gap-2 lg:flex-row lg:gap-8"
        >
          {router.pathname === "/" ? (
            <Link href={"/whitepaper"}>
              <motion.div variants={linkVariant}>Whitepaper</motion.div>
            </Link>
          ) : (
            <Link href={"/"}>
              <motion.div variants={linkVariant}>Home</motion.div>
            </Link>
          )}
          <motion.a
            variants={linkVariant}
            href="https://www.dextools.io/app/en/ether/pair-explorer/0x64b89fc798ed63e1df644505560956722cd610cb"
            target="_blank"
            rel="noreferrer noopener"
          >
            Chart
          </motion.a>
          <motion.a
            variants={linkVariant}
            href="https://app.uniswap.org/#/swap?outputCurrency=0x056d97a9a9dda5a32492ac31467a3823f26f29f0"
            target="_blank"
            rel="noreferrer noopener"
          >
            Buy
          </motion.a>
        </motion.div>
        <motion.div
          custom={3}
          variants={container}
          initial="hidden"
          animate={control}
          className="flex flex-col gap-2 lg:flex-row lg:gap-8"
        >
          <motion.a
            href="https://github.com/deeplearningchain"
            target="_blank"
            rel="noreferrer noopener"
            variants={linkVariant}
          >
            Github
          </motion.a>
          <motion.a
            href="https://stake.deeplearningchain.io/"
            target="_blank"
            rel="noreferrer noopener"
            variants={linkVariant}
          >
            Staking
          </motion.a>
          <motion.a
            href="https://explorer-testnet.deeplearningchain.io/"
            target="_blank"
            rel="noreferrer noopener"
            variants={linkVariant}
          >
            Explorer
          </motion.a>
          <motion.a
            href="https://faucet.deeplearningchain.io/"
            target="_blank"
            rel="noreferrer noopener"
            variants={linkVariant}
          >
            Faucet
          </motion.a>
        </motion.div>
        <motion.div
          custom={7}
          variants={container}
          initial="hidden"
          animate={control}
          className="flex flex-col gap-2 lg:flex-row lg:gap-8"
        >
          <motion.a
            href="https://t.me/deeplearningchain"
            target="_blank"
            rel="noreferrer noopener"
            variants={linkVariant}
          >
            Telegram
          </motion.a>
          <motion.a
            href="https://twitter.com/DLChainAI"
            target="_blank"
            rel="noreferrer noopener"
            variants={linkVariant}
          >
            Twitter
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
