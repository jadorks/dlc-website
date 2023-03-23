import Link from "next/link";
import styles from "./governance.module.css";

export default function Governance() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.content__right}>
          <img
            className={styles.about_ellipse}
            src="/images/elements/governance-ellipse.svg"
            alt=""
          />
          <h2>A Governance Token for Community-Driven Decision Making</h2>
          <p>
            $DLC is the governance token for Deep Learning Chain and a
            fundraising tool for the development of in-house utility products.
          </p>
          <p className="break-words font-bold">
            CA:0×056D97A9A9dDA5A32492Ac31467A3823F26F29F0
          </p>
          <Link href="/whitepaper#governance" className="flex gap-4 items-center justify-center md:justify-start">
            <p>Learn More</p>
            <img src="/images/elements/btn.svg" alt="" />
          </Link>
        </div>
        <div className={styles.content__left}>
          <img src="/images/governance.png" alt="" />
        </div>
      </div>
      <img
        className={styles.governance__end_left}
        src="/images/elements/governance-end.png"
        alt=""
      />
            <img
        className={styles.governance__end_right}
        src="/images/elements/governance-end-right.png"
        alt=""
      />
    </div>
  );
}
