import React from "react";
import { motion } from "framer-motion";

const Menu = ({ opened }) => {
  const variants = {
    show: {
      width: "100vw",
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
        staggerChildren: 0.1,
        delayChildren: 0.4,
      },
    },
    hide: {
      width: "0px",
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 0.8,
      },
    },
  };

  const menu_item_variants = {
    show: {
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
      },
    },
    hide: {
      opacity: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      className="hamburger-menu"
      variants={variants}
      animate={opened ? "show" : "hide"}
    >
      <div className="menu-inner">
        <nav className="menu-nav">
          <li>
            <motion.a href="/design" variants={menu_item_variants}>
              Design
            </motion.a>
          </li>
          <li>
            <motion.a href="/strategy" variants={menu_item_variants}>
              Strategy
            </motion.a>
          </li>
          <li>
            <motion.a href="/cases" variants={menu_item_variants}>
              Cases
            </motion.a>
          </li>
          <li>
            <motion.a href="/about" variants={menu_item_variants}>
              About
            </motion.a>
          </li>
          <li>
            <motion.a href="/why" variants={menu_item_variants}>
              Why work with us?
            </motion.a>
          </li>
        </nav>
      </div>
    </motion.div>
  );
};

export default Menu;
