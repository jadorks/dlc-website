import Link from "next/link";
import styles from "./features.module.css";

export default function Features() {
  const features = [
    {
      image: "/images/features/feature1.png",
      title: "Voice Automation",
      description:
        "This technology will be an extension that also allows users to interact and navigate with decentralized finance (DeFi) protocols as well as blockchains.",
      className: "lg:object-[32%]",
    },
    {
      image: "/images/features/feature2.png",
      title: "ChatGPT Integration",
      description:
        "This technology will be an extension that also allows users to interact and navigate with decentralized finance (DeFi) protocols as well as blockchains.",
      className: "lg:object-[70%]",
    },
    {
      image: "/images/features/feature3.png",
      title: "Security",
      description:
        "This technology will be an extension that also allows users to interact and navigate with decentralized finance (DeFi) protocols as well as blockchains.",
      className: "lg:object-[70%]",
    },
    {
      image: "/images/features/feature4.png",
      title: "POA Consensus",
      description:
        "This technology will be an extension that also allows users to interact and navigate with decentralized finance (DeFi) protocols as well as blockchains.",
      className: "lg:object-[100%]",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Explore our Features</h2>
        <div className={styles.features}>
          {features.map((item, index) => (
            <div className={styles.features__card} key={index}>
              <img src={item.image} className={item.className} alt="" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <Link href="/whitepaper#features" className="mt-10 flex justify-center gap-4 items-center">
            <p className="font-poppins text-16">Endless possibilities</p>
            <img src="/images/elements/btn-alt.svg" alt="" />
          </Link>
      </div>
    </div>
  );
}
