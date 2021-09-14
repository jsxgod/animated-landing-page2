import React from "react";
import { motion } from "framer-motion";

const Menu = ({ opened }) => {
  const variants = {
    hide: {
      width: "0px",
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
      },
    },
    show: {
      width: "100vw",
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
      },
    },
  };

  const menu_item_variants = {
    hide: {
      opacity: 0,
      y: "0",
      transition: {
        ease: "easeInOut",
        duration: 0.4,
      },
    },
    show: {
      opacity: 1,
      y: "0",
      transition: {
        ease: "easeInOut",
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="hamburger-menu"
      variants={variants}
      animate={opened ? "show" : "hide"}
    >
      {console.log(opened)}
      <div className="menu-inner">
        <nav className="menu-nav">
          <li>
            <motion.a
              href="/design"
              variants={menu_item_variants}
              animate={opened ? "show" : "hide"}
              transition={{
                delay: 0.2,
              }}
            >
              Design
            </motion.a>
          </li>
          <li>
            <motion.a
              href="/strategy"
              variants={menu_item_variants}
              animate={opened ? "show" : "hide"}
              transition={{
                delay: 0.15,
              }}
            >
              Strategy
            </motion.a>
          </li>
          <li>
            <motion.a
              href="/cases"
              variants={menu_item_variants}
              animate={opened ? "show" : "hide"}
              transition={{
                delay: 0.1,
              }}
            >
              Cases
            </motion.a>
          </li>
          <li>
            <motion.a
              href="/about"
              variants={menu_item_variants}
              animate={opened ? "show" : "hide"}
              transition={{
                delay: 0.05,
              }}
            >
              About
            </motion.a>
          </li>
          <li>
            <motion.a
              href="/why"
              variants={menu_item_variants}
              animate={opened ? "show" : "hide"}
            >
              Why work with us?
            </motion.a>
          </li>
        </nav>
      </div>
    </motion.div>
  );
};

export default Menu;
