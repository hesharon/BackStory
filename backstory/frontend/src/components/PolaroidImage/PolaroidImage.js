import './PolaroidImage.css';
import React from 'react';
import { useRef } from 'react';
import { exportAsImage } from '../../exportAsImage';
import { ExportImage } from './ExportImage';

const PolaroidImage = ({
  id,
  imageURL,
  caption,
  isFlipped,
  onFlip,
  deletePhoto,
  editPhoto,
}) => {
  const exportRef = useRef();
  return (
    <div className={`polaroid ${isFlipped ? 'flipped' : ''}`}>
      <div className="polaroid-inner">
        <div className="polaroid-front">
          <img src={imageURL} alt="Polaroid" onClick={onFlip} />
          <div className="button-container">
            <button className="polaroid-button" onClick={() => deletePhoto(id)}>
              Remove
            </button>
            <button
              className="polaroid-button"
              onClick={() => {
                exportAsImage(exportRef.current, 'test');
              }}
            >
              Export
            </button>
          </div>
        </div>
        <div className="polaroid-back" onClick={onFlip}>
          <div className="caption">{caption}</div>
          <button onClick={() => editPhoto(id)}>Edit</button>
        </div>
      </div>
      <div className="export-container" id="export-container" ref={exportRef}>
        <ExportImage imageURL={imageURL} caption={caption}></ExportImage>
      </div>
    </div>
  );
};

export default PolaroidImage;
