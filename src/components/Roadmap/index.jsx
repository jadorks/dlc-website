import styles from "./roadmap.module.css";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Footer from "../Footer";

export default function Roadmap() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const container = {
    hidden: { x: "-100%"},
    visible: {
      x: 0,
      transition: {
        when: "beforeChildren",
        ease: "easeIn",
        delayChildren: 0.3,
      },
    },
  };

  const roadmapItem = {
    visible: {
      opacity: 1,
      y: 0,
    },
    hidden: { opacity: 0, y: -15 },
  };

  const mobileRoadmapItem = {
    visible: {
      opacity: 1,
    },
    hidden: { opacity: 1},
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <div ref={ref} className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.content__head}>
            <h3>Milestones</h3>
            <h2>Roadmap</h2>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            animate={control}
            className={styles.roadmap__wrapper}
          >
            <div className={styles.roadmap__item_container}>
              <motion.div variants={roadmapItem} className={styles.roadmap__item}>
                <h4>Phase 1</h4>
                <div>
                  <p>$DLC Launch on Uniswap</p>
                  <p>2000 Telegram Members</p>
                  <p>CoinGecko/ CMC Listings</p>
                </div>
              </motion.div>
              <motion.div variants={roadmapItem} className={styles.roadmap__item}>
                <h4>Phase 2</h4>
                <div>
                  <p>Release Deep Learning Chain Testnet</p>
                  <p>ContractChecker Blockchain Audit</p>
                  <p>$DLC Github Made Public</p>
                  <p>Blockchain Explorer</p>
                </div>
              </motion.div>
              <motion.div variants={roadmapItem} className={styles.roadmap__item}>
                <h4>Phase 3</h4>
                <div>
                  <p>Deep Learning Chain Mainnet Live</p>
                  <p>DC Airdrop for DLC Holders</p>
                  <p>Native DLC Dex Trading goes live</p>
                  <p>Bridge Release</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            animate={control}
            className={styles.mobile__roadmap}
          >
            <div className={styles.roadmap__item_container}>
              <motion.div variants={mobileRoadmapItem} className={styles.roadmap__item_mobile}>
                <h4>Phase 1</h4>
                <div>
                  <p>$DLC Launch on Uniswap</p>
                  <p>2000 Telegram Members</p>
                  <p>CoinGecko/ CMC Listings</p>
                </div>
              </motion.div>
              <motion.div variants={mobileRoadmapItem} className={styles.roadmap__item_mobile}>
                <h4>Phase 2</h4>
                <div>
                  <p>Release Deep Learning Chain Testnet</p>
                  <p>ContractChecker Blockchain Audit</p>
                  <p>$DLC Github Made Public</p>
                  <p>Blockchain Explorer</p>
                </div>
              </motion.div>
              <motion.div variants={mobileRoadmapItem} className={styles.roadmap__item_mobile}>
                <h4>Phase 3</h4>
                <div>
                  <p>Deep Learning Chain Mainnet Live</p>
                  <p>DC Airdrop for DLC Holders</p>
                  <p>Native DLC Dex Trading goes live</p>
                  <p>Bridge Release</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
