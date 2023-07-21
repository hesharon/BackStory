import './PolaroidImage.css';

import React from 'react';

const PolaroidImage = ({ id, imageURL, caption, isFlipped, onFlip, deletePhoto, editPhoto }) => {
  return (
    <div className={`polaroid ${isFlipped ? 'flipped' : ''}`}>
      <div className="polaroid-inner">
        <div className="polaroid-front">
          <img src={imageURL} alt="Polaroid" onClick={onFlip} />
          <button onClick={() => deletePhoto(id)}>Remove</button>
        </div>
        <div className="polaroid-back" onClick={onFlip}>
          <div className="caption">{caption}</div>
          <button onClick={() => editPhoto(imageURL)}>Edit</button>
        </div>
      </div>
    </div>
  );
}

export default PolaroidImage;
