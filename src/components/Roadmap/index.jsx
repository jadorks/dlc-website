import styles from "./roadmap.module.css";

export default function Roadmap() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.content__head}>
          <h3>Milestones</h3>
          <h2>Roadmap</h2>
        </div>
        <div className={styles.roadmap__wrapper}>
          <div className={styles.roadmap__item_container}>
            <div className={styles.roadmap__item}>
              <h4>Phase 1</h4>
              <div>
                <p>$DLC Launch on Uniswap</p>
                <p>2000 Telegram Members</p>
                <p>CoinGecko/ CMC Listings</p>
              </div>
            </div>
            <div className={styles.roadmap__item}>
              <h4>Phase 2</h4>
              <div>
                <p>Release Deep Learning Chain Testnet</p>
                <p>ContractChecker Blockchain Audit</p>
                <p>$DLC Github Made Public</p>
                <p>Blockchain Explorer</p>
              </div>
            </div>
            <div className={styles.roadmap__item}>
              <h4>Phase 3</h4>
              <div>
                <p>Deep Learning Chain Mainnet Live</p>
                <p>DC Airdrop for DLC Holders</p>
                <p>Native DLC Dex Trading goes live</p>
                <p>Bridge Release</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
