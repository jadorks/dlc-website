import Head from "next/head";
import { useEffect, useState, useRef } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import styles from "./layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Deep Learning Chain</title>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <meta
          content="A Voice-Automated, Proof-of-Authority, Permissionless Blockchain."
          name="description"
        />
        <meta content="Deep Learning Chain" property="og:title" />
        <meta
          content="A Voice-Automated, Proof-of-Authority, Permissionless Blockchain."
          property="og:description"
        />
        <meta content="/banner.png" property="og:image" />
        <meta content="Deep Learning Chain" property="twitter:title" />
        <meta
          content="A Voice-Automated, Proof-of-Authority, Permissionless Blockchain."
          property="twitter:description"
        />
        <meta content="/banner.png" property="twitter:image" />
        <meta property="og:type" content="website" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <video
        playsInline
        autoPlay
        muted
        loop
        preload="auto"
        poster="/poster.jpg"
        className={styles.bgVid}
      >
        <source src="/page_bg.mp4" type="video/mp4" />
        <source src="/page_bg.webm" type="video/webm" />
      </video>
      <div className={styles.wrapper}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
