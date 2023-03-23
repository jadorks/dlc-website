import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.content__left}>
          <Link href={"/"}>
            <img className="w-32" src="/images/dlc-logo.svg" alt="dlc-logo" />
          </Link>
        </div>
        <div className={styles.content__right}>
          <ul className={styles.nav_menu}>
            <li>
              <Link href={"/whitepaper"}>Whitepaper</Link>
            </li>
            <li>
              <a
                href="https://www.dextools.io/app/en/ether/pair-explorer/0x64b89fc798ed63e1df644505560956722cd610cb"
                target="_blank"
                rel="noreferrer noopener"
              >
                Chart
              </a>
            </li>
            <li>
              <a
                href="https://app.uniswap.org/#/swap?outputCurrency=0x056d97a9a9dda5a32492ac31467a3823f26f29f0"
                target="_blank"
                rel="noreferrer noopener"
              >
                Buy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
