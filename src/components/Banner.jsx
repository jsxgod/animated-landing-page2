import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const variants = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letter_variants = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const Banner = ({ loading }) => {
  const [playAnimation, setPlayAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPlayAnimation(true);
    }, 2500);
  }, []);

  return (
    <>
      <motion.div variants={variants} className="banner">
        <TopRow title={"brand"} />
        <CenterRow title={"experience"} animationFlag={playAnimation} />
        <BottomRow title={"studio"} />
      </motion.div>
      <div>
        {!loading && (
          <motion.div className="transition-image final">
            <motion.img
              src={process.env.PUBLIC_URL + `/images/image-2.jpg`}
              alt="studio-2.jpg"
              layoutId="main-image"
              transition={{
                ease: [0.6, 0.01, -0.05, 0.9],
                duration: 1.6,
              }}
            />
          </motion.div>
        )}
      </div>
    </>
  );
};

const AnimatedLetters = ({ title, disabled }) => (
  <motion.span
    className="row-title"
    variants={disabled ? null : variants}
    initial="initial"
    animate="animate"
  >
    {[...title].map((letter) => (
      <motion.span className="row-letter" variants={letter_variants}>
        {letter}
      </motion.span>
    ))}
  </motion.span>
);

const TopRow = ({ title }) => {
  return (
    <div className="banner-row">
      <div className="row-col">
        <AnimatedLetters title={title} />
      </div>
      <motion.div
        className="row-col"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 0.4,
        }}
      >
        <span className="row-message">
          We are specialised in settin up the foundation of your brand and
          setting you up for success.
        </span>
      </motion.div>
    </div>
  );
};

const CenterRow = ({ title, animationFlag }) => {
  return (
    <div className={`banner-row animation ${animationFlag && "animate"}`}>
      <div className="animation-inner">
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} disabled />
      </div>
    </div>
  );
};

const BottomRow = ({ title }) => {
  return (
    <div className="banner-row center">
      <motion.div
        className="scroll"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          ease: [0.6, 0.01, -0.05, 0.95],
          duration: 1,
          delay: 1,
        }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 1.8,
          }}
        >
          scroll
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 1.9,
          }}
        >
          down
        </motion.span>
      </motion.div>
      <AnimatedLetters title={title} />
    </div>
  );
};

export default Banner;
