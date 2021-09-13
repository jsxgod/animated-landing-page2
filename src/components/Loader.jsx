import React, { useEffect } from "react";
import { ImageBlock } from "./";
import { motion } from "framer-motion";

const variants = {
  show: {
    transition: {
      staggerChildren: 0.5,
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
        <div className="transition-image">
          <img
            src={process.env.PUBLIC_URL + `/images/image-2.jpg`}
            alt="random alr"
          />
        </div>
        <ImageBlock id="image-1" />
        <ImageBlock id="image-3" />
        <ImageBlock id="image-4" />
        <ImageBlock id="image-5" />
      </motion.div>
    </div>
  );
};

export default Loader;
