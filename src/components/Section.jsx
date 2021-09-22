import React from "react";
import { motion } from "framer-motion";

const Section = ({ title, reverse }) => {
  const wrapper = {
    animate: {},
  };
  const circle = {
    initial: {
      "border-radius": "100%",
      width: "100%",
    },
    animate: {
      "border-radius": "20%",
      width: "150%",
    },
  };
  return (
    <div className="section">
      <div className="header">
        <p>{title}</p>
      </div>
      <div className={`image-wrapper ${reverse ? "reverse" : ""}`}>
        <img
          src={process.env.PUBLIC_URL + `/images/${title}.jpg`}
          alt={`${title}.jpg`}
        />
        <motion.div
          className="info-wrapper"
          initial="initial"
          variants={wrapper}
          whileHover="animate"
        >
          <motion.div className="info-circle" variants={circle}></motion.div>
          <div className="info-header"></div>
          <div className="info-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
              turpis faucibus, efficitur dolor at, auctor nulla. Integer eu
              nulla mollis, auctor nibh ac, pretium mi. Praesent sapien tortor,
              lacinia non fermentum id, rhoncus vitae est. Curabitur et auctor
              turpis. Phasellus at est felis. Suspendisse et enim ac felis
              vehicula laoreet. Aliquam aliquet tortor at nibh commodo fringilla
              eget vel nisi. Donec varius mauris eget tincidunt pharetra.{" "}
            </p>
          </div>
        </motion.div>
        <div className="animated-footer">
          <span>{title}</span>
          <span>{title}</span>
          <span>{title}</span>
          <span>{title}</span>
          <span>{title}</span>
        </div>
      </div>
    </div>
  );
};

export default Section;
