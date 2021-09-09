import React from "react";
import { Image } from "./";

const ImageBlock = ({ id }) => {
  return (
    <div className={`image-block ${id}`}>
      <Image
        src={process.env.PUBLIC_URL + `/images/${id}.webp`}
        fallback={process.env.PUBLIC_URL + `/images/${id}.jpg`}
        alt={id}
      />
    </div>
  );
};

export default ImageBlock;
