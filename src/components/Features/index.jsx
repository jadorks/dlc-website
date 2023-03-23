import Link from "next/link";
import styles from "./features.module.css";

export default function Features() {
  const features = [
    {
      image: "/images/features/feature1.png",
      title: "Voice Automation",
      description:
        "Deep Learning Chain utilizes voice-automation technology, which allows users to interact with the network using natural language. This technology is augmented by artificial intelligence (AI), which makes it easier for users to interact with the network and perform tasks such as creating transactions, checking balances, and more.",
      className: "lg:object-[32%]",
    },
    {
      image: "/images/features/feature2.png",
      title: "ChatGPT Integration",
      description:
        "Deep Learning Chain leverages OpenAI's ChatGPT to allow natural interaction with the blockchain. It augments Deep Learning Chain's voice automation and helps understand the commands that are issued by users.",
      className: "lg:object-[70%]",
    },
    {
      image: "/images/features/feature3.png",
      title: "Security",
      description:
        "Deep Learning Chain is designed to be highly secure. The Proof-of-Authority consensus mechanism ensures that only validators that are chosen by the network’s users are allowed to validate transactions. The network also utilizes advanced cryptography and other security measures to ensure that user data is safe and secure.",
      className: "lg:object-[70%]",
    },
    {
      image: "/images/features/feature4.png",
      title: "POA Consensus",
      description:
        "Deep Learning Chain uses a Proof-of-Authority consensus mechanism. Proof of Authority (PoA) is a consensus mechanism that is based on a set of predetermined “validators” who are responsible for validating blocks on the network. These validators are selected based on their reputation and trustworthiness, and they are required to adhere to certain criteria in order to be accepted as a validator.",
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
