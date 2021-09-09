import React from "react";
import { useState, useEffect } from "react";

const Banner = () => {
  const [playAnimation, setPlayAnimation] = useState(false);

  useEffect(() => {
    setPlayAnimation(true);
  }, []);

  return (
    <div className="banner">
      <TopRow title={"brand"} />
      <CenterRow title={"experience"} animationFlag={playAnimation} />
      <BottomRow title={"studio"} />
    </div>
  );
};

const AnimatedLetters = ({ title }) => (
  <span className="row-title">
    {[...title].map((letter) => (
      <span className="row-letter">{letter}</span>
    ))}
  </span>
);

const TopRow = ({ title }) => {
  return (
    <div className="banner-row">
      <div className="row-col">
        <AnimatedLetters title={title} />
      </div>
      <div className="row-col">
        <span className="row-message">
          We are specialised in settin up the foundation of your brand and
          setting you up for success.
        </span>
      </div>
    </div>
  );
};

const CenterRow = ({ title, animationFlag }) => {
  return (
    <div className={`banner-row animation ${animationFlag && "animate"}`}>
      <div className="animation-inner">
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} />
      </div>
    </div>
  );
};

const BottomRow = ({ title }) => {
  return (
    <div className="banner-row center">
      <div className="scroll">
        <span>scroll</span>
        <span>down</span>
      </div>
      <AnimatedLetters title={title} />
    </div>
  );
};

export default Banner;
