import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.content__left}>
          <img src="/images/about.png" alt="" />
        </div>
        <div className={styles.content__right}>
            <img className={styles.about_ellipse} src="/images/elements/about-ellipse.svg" alt="" />
          <h2>What is Deep Learning Chain?</h2>
          <p>
            Deep Learning Chain (DLC) is a Layer 2 blockchain platform that is
            EVM Compatible and is augmented by voice automation and artificial
            intelligence. It has a Proof-of-Authority consensus mechanism, and
            it is permissionless, meaning anyone can create a new account or
            transaction on the network.
          </p>
          <a href="/" className="flex gap-4 items-center justify-center md:justify-start">
            <p>Buy Token</p>
            <img src="/images/elements/btn.svg" alt="" />
          </a>
        </div>
      </div>
      <img className={styles.about_end} src="/images/elements/about-end.png" alt="" />
    </div>
  );
}
