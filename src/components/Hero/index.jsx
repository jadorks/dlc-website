import styles from "./hero.module.css";

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Deep Learning Chain</h1>
        <div className={styles.subtitle}>
          <h2>
            A voice-automated, proof-of-authority,
            <br /> permisionless blockchain
          </h2>
          <img
            className={styles.hero_ellipse}
            src="/images/elements/hero-ellipse.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
