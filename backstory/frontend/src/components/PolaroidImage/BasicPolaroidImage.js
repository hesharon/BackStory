import "./BasicPolaroidImage.css";

import React from "react";

const BasicPolaroidImage = ({
  id,
  imageURL,
  caption,
  isFlipped,
  onFlip,
  deletePhoto,
  editPhoto,
}) => {
  return (
    <div className={`polaroid ${isFlipped ? "flipped" : ""}`}>
      <div className="polaroid-inner">
        <div className="polaroid-front">
          <img src={imageURL} alt="Polaroid" onClick={onFlip} />
        </div>
        <div className="polaroid-back" onClick={onFlip}>
          <div className="caption">{caption}</div>
        </div>
      </div>
    </div>
  );
};

export default BasicPolaroidImage;
