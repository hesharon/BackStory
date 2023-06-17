import React from 'react';
import './PolaroidImage.css';

const PolaroidImage = ({imageURL, caption, isFlipped, onFlip}) => {
    return (
        <div className={`polaroid ${isFlipped ? 'flipped' : ''}`} onClick={onFlip}>
            <div className="polaroid-inner">
                <div className="polaroid-front">
                    <img src={imageURL} alt="Polaroid" />
                </div>
                <div className="polaroid-back">
                    <div className="caption">{caption}</div>
                </div>
            </div>
        </div>
    );
}

export default PolaroidImage;
