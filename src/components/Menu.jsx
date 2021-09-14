import React from "react";
import { motion } from "framer-motion";

const Menu = ({ opened }) => {
  const variants = {
    hide: {
      width: "0px",
    },
    show: {
      width: "100vw",
    },
  };
  return (
    <motion.div
      className="hamburger-menu"
      variants={variants}
      animate={opened ? "show" : "hide"}
      transition={{
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
      }}
    >
      <div className="menu-inner">
        <nav className="menu-nav">
          <li>
            <a href="/design">Design</a>
          </li>
          <li>
            <a href="/strategy">Strategy</a>
          </li>
          <li>
            <a href="/cases">Cases</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/why">Why work with us?</a>
          </li>
        </nav>
      </div>
    </motion.div>
  );
};

export default Menu;
