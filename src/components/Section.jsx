import React from "react";

const Section = ({ title }) => {
  return (
    <div className="section">
      <div className="header">
        <p>{title}</p>
      </div>
      <div className="image-wrapper">
        <img
          src={process.env.PUBLIC_URL + `/images/${title}.jpg`}
          alt={`${title}.jpg`}
        />
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
