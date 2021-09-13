import React from "react";
import { Image } from "./";
import { motion } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.65, 0, 0.35, 1],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -100,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const ImageBlock = ({ id }) => {
  return (
    <motion.div className={`image-block ${id}`} variants={variants}>
      <Image
        src={process.env.PUBLIC_URL + `/images/${id}.webp`}
        fallback={process.env.PUBLIC_URL + `/images/${id}.jpg`}
        alt={id}
      />
    </motion.div>
  );
};

export default ImageBlock;
