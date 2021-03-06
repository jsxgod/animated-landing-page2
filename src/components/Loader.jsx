import React from "react";
import { motion } from "framer-motion";

const variants = {
  show: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const image_variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.83, 0, 0.17, 1],
      duration: 1.6,
    },
  },
};

const Loader = ({ setLoading }) => {
  return (
    <div className="loader">
      <motion.div
        className="loader-inner"
        variants={variants}
        initial="hidden"
        animate="show"
        exit="exit"
        onAnimationComplete={() => setLoading(false)}
      >
        <motion.div className="transition-image" variants={image_variants}>
          <motion.img
            src={process.env.PUBLIC_URL + `/images/image-2.jpg`}
            alt="random alr"
            layoutId="main-image"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Loader;
