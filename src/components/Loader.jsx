import React, { useEffect } from "react";
import { ImageBlock } from "./";
import { motion } from "framer-motion";

const variants = {
  show: {
    transition: {
      staggerChildren: 0.7,
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
          <img
            src={process.env.PUBLIC_URL + `/images/image-2.jpg`}
            alt="random alr"
          />
        </motion.div>
        <ImageBlock id="image-1" />
        <ImageBlock id="image-3" />
        <ImageBlock id="image-4" />
        <ImageBlock id="image-5" />
      </motion.div>
    </div>
  );
};

export default Loader;
