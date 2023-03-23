import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className="flex gap-8">
          <Link href={'/'}>Whitepaper</Link>
          <a href="">Chart</a>
          <a href="">Buy</a>
        </div>
        <div className="flex gap-8">
          <a href="">Github</a>
          <a href="">Staking</a>
          <a href="">Explorer</a>
          <a href="">Faucet</a>
        </div>
        <div className="flex gap-8">
          <a href="">Telegram</a>
          <a href="">Twitter</a>
          <a href="">Discord</a>
        </div>
      </div>
    </div>
  );
}
