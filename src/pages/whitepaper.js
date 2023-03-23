import { useState } from "react";
import Accordion from "@/components/Accordion";
import Hero from "@/components/Hero";
import Head from "next/head";

export default function Whitepaper() {
  const features = [
    {
      title: "Proof-of-Authority Consensus Mechanism",
      content:
        "Deep Learning Chain uses a Proof-of-Authority consensus mechanism. Proof of Authority (PoA) is a consensus mechanism that is based on a set of predetermined “validators” who are responsible for validating blocks on the network. These validators are selected based on their reputation and trustworthiness, and they are required to adhere to certain criteria in order to be accepted as a validator. The validators are incentivized to act honestly, as they are rewarded for producing valid blocks and punished for producing invalid blocks. The validators are also required to maintain the integrity of the network by preventing malicious actors from attacking the network. The main advantage of PoA is that it is much more energy efficient than PoW, as it does not require miners to expend energy in order to generate blocks. Furthermore, PoA is more secure than PoS, as it is not vulnerable to the same range of attack vectors that can be used to attack PoS networks. authorities are chosen by the network's users and are incentivized to act honestly. Proof of authority is better than Ethereum's previous proof of work and current proof of stake because it offers a more efficient and cost-effective way of running a blockchain. It is faster and more secure since all validators must agree before new blocks are created. Additionally, since the validators are chosen, it is less prone to malicious attacks since the validators must have a good reputation in order to be chosen.",
    },
    {
      title: "Voice Automation",
      content:
        "Deep Learning Chain utilizes voice-automation technology, which allows users to interact with the network using natural language. This technology is augmented by artificial intelligence (AI), which makes it easier for users to interact with the network and perform tasks such as creating transactions, checking balances, and more. This technology will be an extension that also allows users to interact and navigate with decentralized finance (DeFi) protocols as well as blockchains. It can be used to perform a wide range of tasks, such as creating and managing smart contracts, exchanging digital assets, making payments, and tracking data. The voice extension works by using natural language processing (NLP) to understand and interact with users. This means that users can simply say commands to the voice extension, which will then execute them. For example, a user can say 'Create a smart contract' and the voice extension will do just that. Additionally, the voice extension can be used to track data related to blockchain transactions and DeFi protocols. This is especially useful for users who want to stay up to date with the latest trends and news in the industry. With the voice extension, users can easily access information about different DeFi protocols and blockchain transactions, allowing them to make informed decisions about their investments.",
    },
    {
      title: "ChatGPT Integration",
      content:
        "ChatGPT’s openai is a powerful artificial intelligence (AI) platform that was designed to enable the development of AI-driven applications. The platform is augmented by a deep learning network and has the ability to learn from its environment and adapt to new situations. ChatGPT's openAI technology can be used to improve the security of a blockchain by providing an additional layer of protection against malicious actors. It can be used to detect suspicious activity on the blockchain and alert the network to potential malicious activities. Additionally, it can be used to identify and authenticate users, further protecting the network from fraudulent activities. OpenAI technology can also be leveraged to detect and prevent double-spending, as well as improve the scalability of the blockchain by increasing transaction speed and reducing transaction fees. Finally, openAI can be used to provide more accurate data analysis, allowing developers to create better applications and services on top of the blockchain. For this blockchain, ChatGPT’s openai will be used to identify validators and to ensure that they are acting in accordance with the network’s rules.",
    },
    {
      title: "Security",
      content:
        "Deep Learning Chain is designed to be highly secure. The Proof-of-Authority consensus mechanism ensures that only validators that are chosen by the network’s users are allowed to validate transactions. The network also utilizes advanced cryptography and other security measures to ensure that user data is safe and secure.",
    },
    {
      title: "Scalability",
      content:
        "Deep Learning Chain is designed to be highly scalable. It utilizes sharding, which allows the network to process more transactions in parallel, and state channels, which allow for off-chain transactions that are not stored on the blockchain. These features allow the network to scale to accommodate more users and transactions.",
    },
    {
      title: "Permissionless Decentralized Technology",
      content:
        "The permissionless decentralized technology of a Layer 2 blockchain allows users to interact with the blockchain without requiring permission from a central authority. This technology provides users with the ability to access the blockchain, create new transactions and submit data in a secure and private manner. Additionally, it eliminates the need for a trusted third-party, which is often a requirement in traditional blockchain networks.",
    },
    {
      title: "Other Features",
      content:
        "In addition to the features mentioned above, Deep Learning Chain also has other features that make it unique. It has a built-in decentralized exchange and a decentralized governance system. It also has an API that allows developers to build applications on top of the blockchain.",
    },
  ];

  const [activeKey, setActiveKey] = useState(-1);

  return (
    <>
      <Head>
        <title>$DLC | Whitepaper</title>
      </Head>
      <Hero />
      <div className="mx-auto max-w-5xl">
        <div className="pt-16 pb-32 px-8">
          <div>
            <h2 className="font-alien_encounters_solid text-[36px] text-center pb-2">
              Abstract
            </h2>
            <p className="text-center font-poppins text-[17px] text-[#A09FAF]">
              This whitepaper introduces Deep Learning Chain, a Layer 2
              blockchain platform that is EVM Compatible and is augmented by
              voice automation and artificial intelligence. Deep Learning Chain
              has a Proof-of-Authority consensus mechanism, and it is
              permissionless, meaning anyone can create a new account or
              transaction on the network. The paper will discuss how Deep
              Learning Chain is different from Ethereum and how it can be used
              in various applications. The paper will explain the consensus
              mechanism, voice-automation features, and other features of Deep
              Learning Chain. It will also discuss the security, scalability,
              and other aspects of the platform.
            </p>
          </div>
        </div>
        <div className="pb-32 px-8">
          <div>
            <h2 className="font-alien_encounters_solid text-[36px] text-center pb-2">
              Introduction
            </h2>
            <p className="text-center font-poppins text-[17px] text-[#A09FAF]">
              Blockchain technology has been used to solve many of the world’s
              most complex problems. It has enabled the development of
              distributed applications (dApps), smart contracts, and
              decentralized exchanges. However, existing blockchains are limited
              in their scalability, security, and user experience. Deep Learning
              Chain is a Layer 2 blockchain platform that is EVM Compatible and
              is augmented by voice automation and artificial intelligence. Deep
              Learning Chain has a Proof-of-Authority consensus mechanism, and
              it is permissionless, meaning anyone can create a new account or
              transaction on the network. It is designed to solve many of the
              scalability, security, and user experience issues that exist in
              existing blockchains. Deep Learning Chain also has some unique
              features such as voice automation, which allows users to interact
              with the network using natural language.
            </p>
          </div>
        </div>
        <div className="pb-32 px-8">
          <div>
            <h2 className="font-alien_encounters_solid text-[36px] text-center pb-2">
              What is $DLC?
            </h2>
            <p className="text-center font-poppins text-[17px] text-[#A09FAF]">
              $DLC is the governance token for Deep Learning Chain and a
              fundraising tool for the development of in-house utility products.
            </p>
          </div>
        </div>
        <div className="pb-32 px-8">
          <div>
            <h2 className="font-alien_encounters_solid text-[36px] text-center pb-2">
              What is Deep Learning Chain?
            </h2>
            <p className="text-center font-poppins text-[17px] text-[#A09FAF]">
              Deep Learning Chain is a Layer 2 blockchain platform that is a EVM
              Compatible and is augmented by voice automation and artificial
              intelligence. It has a Proof-of-Authority consensus mechanism, and
              it is permissionless, meaning anyone can create a new account or
              transaction on the network. Deep Learning Chain is designed to be
              highly scalable, secure, and user-friendly.
            </p>
          </div>
        </div>
        <div className="pb-32 px-8">
          <div>
            <h2 className="font-alien_encounters_solid text-[36px] text-center pb-2">
              Features
            </h2>
            {features.map((feature, index) => (
              <Accordion
                key={index}
                title={feature.title}
                content={feature.content}
                index={index}
                activeKey={activeKey}
                setActiveKey={setActiveKey}
              />
            ))}
          </div>
        </div>
        <div className="pb-32 px-8">
          <div>
            <h2 className="font-alien_encounters_solid text-[36px] text-center pb-2">
              Tokenomics
            </h2>
            <ul className="flex flex-col gap-4 text-center font-poppins text-[17px] text-[#A09FAF]">
              <li>
                <span className="font-bold">Total Supply:</span> 21,000,000
              </li>
              <li>
                <span className="font-bold">Liquidity:</span> 3,150,000
              </li>
              <li>
                <span className="font-bold">Exchange/Chain Reserves:</span>{" "}
                11,650,000
              </li>
              <li>
                <span className="font-bold">Presale:</span> 4,672,500
              </li>
              <li>
                <span className="font-bold">Team Allocation:</span> 1,527,500
              </li>
              <li>
                <span className="font-bold">Taxes:</span> 4/4
              </li>
              <li>
                <span className="font-bold">Max Wallet:</span> 2%
              </li>
            </ul>
          </div>
        </div>
        <div className="pb-32 px-8">
          <div>
            <h2 className="font-alien_encounters_solid text-[36px] text-center pb-2">
              AIRDROP
            </h2>
            <p className="text-center font-poppins text-[17px] text-[#A09FAF]">
              Early adopters of the Deep Learning Chain (DLC) governance token
              will receive a free airdrop of $DC coins once the Deep Learning
              Chain blockchain is released. This is similar to Ethereum as the
              native token for the ETH network. Those who hold DLC without
              selling any tokens until the time of the holder snapshot will be
              entitled to a 10% bonus on their DC airdrop. The snapshot will be
              taken just before the launch of the mainnet. Any wallet that holds
              DLC and has a recorded sale transaction will see a 40% deduction
              from the amount of DC tokens they receive in their airdrop.
            </p>
          </div>
        </div>
        <div className="pb-32 px-8">
          <div>
            <h2 className="font-alien_encounters_solid text-[36px] text-center pb-2">
              CONCLUSION
            </h2>
            <p className="text-center font-poppins text-[17px] text-[#A09FAF]">
              Deep Learning Chain is a Layer 2 blockchain platform that is EVM
              Compatible and is augmented by voice automation and artificial
              intelligence. It has a Proof-of-Authority consensus mechanism, and
              it is permissionless, meaning anyone can create a new account or
              transaction on the network. Deep Learning Chain is designed to be
              highly scalable, secure, and user-friendly. It has a built-in
              decentralized exchange, a decentralized governance system, and an
              API that allows developers to build applications on top of the
              blockchain. Deep Learning Chain is a revolutionary platform that
              has the potential to revolutionize the way people interact with
              blockchain technology.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
