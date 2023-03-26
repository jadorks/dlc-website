import Link from "next/link";
import styles from "./navbar.module.css";
import { Popover } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { useRouter } from "next/router";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Navbar() {
  const router = useRouter();

  const logoVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const linkVariant = {
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1 } }),
    hidden: { opacity: 0, y: 20 },
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <div ref={ref} className={styles.container}>
      <div className={styles.content}>
        <div className={styles.content__left}>
          <Link href={"/"}>
            <motion.img
              className="w-32"
              src="/images/dlc-logo.svg"
              alt="dlc-logo"
              variants={logoVariant}
              initial="hidden"
              animate={control}
            />
          </Link>
        </div>
        <div className={styles.content__right}>
          <ul className={styles.nav_menu}>
            {router.pathname === "/" ? (
              <motion.li
                custom={0}
                variants={linkVariant}
                initial="hidden"
                animate={control}
              >
                <Link href={"/whitepaper"}>Whitepaper</Link>
              </motion.li>
            ) : (
              <motion.li
                custom={0}
                variants={linkVariant}
                initial="hidden"
                animate={control}
              >
                <Link href={"/"}>Home</Link>
              </motion.li>
            )}

            <motion.li
              custom={1}
              variants={linkVariant}
              initial="hidden"
              animate={control}
            >
              <a
                href="https://www.dextools.io/app/en/ether/pair-explorer/0x64b89fc798ed63e1df644505560956722cd610cb"
                target="_blank"
                rel="noreferrer noopener"
              >
                Chart
              </a>
            </motion.li>
            <motion.li
              custom={2}
              variants={linkVariant}
              initial="hidden"
              animate={control}
            >
              <a
                href="https://app.uniswap.org/#/swap?outputCurrency=0x056d97a9a9dda5a32492ac31467a3823f26f29f0"
                target="_blank"
                rel="noreferrer noopener"
              >
                Buy
              </a>
            </motion.li>
          </ul>
        </div>
        <Popover className={styles.mobile__menu}>
          {({ open }) => (
            <>
              {" "}
              <Popover.Button
                className={`${
                  open ? "" : "text-opacity-90"
                } text-white group px-3 py-2 rounded-md inline-flex items-center outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                <Bars3Icon
                  className={`${open ? "" : "text-opacity-100"}
                  h-8 w-8 text-white transition duration-150 ease-in-out group-hover:text-opacity-80`}
                  aria-hidden="true"
                />
              </Popover.Button>
              <Popover.Panel className="absolute z-10 w-screen px-4 mt-3 left-0 right-0 bg-[#0B0C1B]">
                <div className="overflow-hidden shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-4 bg-transparent p-4">
                    <div className="flex text-white flex-col gap-4 items-center font-poppins uppercase">
                      <Link href={"/whitepaper"}>Whitepaper</Link>
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
                  </div>
                </div>
              </Popover.Panel>
            </>
          )}
        </Popover>
      </div>
    </div>
  );
}
