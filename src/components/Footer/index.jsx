import Link from "next/link";
import styles from "./footer.module.css";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className="flex flex-col gap-2 lg:flex-row lg:gap-8">
          {router.pathname === "/" ? (
            <Link href={"/whitepaper"}>Whitepaper</Link>
          ) : (
            <Link href={"/"}>Home</Link>
          )}
          <a
            href="https://www.dextools.io/app/en/ether/pair-explorer/0x64b89fc798ed63e1df644505560956722cd610cb"
            target="_blank"
            rel="noreferrer noopener"
          >
            Chart
          </a>
          <a
            href="https://app.uniswap.org/#/swap?outputCurrency=0x056d97a9a9dda5a32492ac31467a3823f26f29f0"
            target="_blank"
            rel="noreferrer noopener"
          >
            Buy
          </a>
        </div>
        <div className="flex flex-col gap-2 lg:flex-row lg:gap-8">
          <a
            href="https://github.com/deeplearningchain"
            target="_blank"
            rel="noreferrer noopener"
          >
            Github
          </a>
          <a
            href="https://stake.deeplearningchain.io/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Staking
          </a>
          <a
            href="https://explorer-testnet.deeplearningchain.io/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Explorer
          </a>
          <a
            href="https://faucet.deeplearningchain.io/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Faucet
          </a>
        </div>
        <div className="flex flex-col gap-2 lg:flex-row lg:gap-8">
          <a
            href="https://t.me/deeplearningchain"
            target="_blank"
            rel="noreferrer noopener"
          >
            Telegram
          </a>
          <a
            href="https://twitter.com/DLChainAI"
            target="_blank"
            rel="noreferrer noopener"
          >
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
}
