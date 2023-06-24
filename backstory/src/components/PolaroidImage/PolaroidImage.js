import React from 'react';
import './PolaroidImage.css';
import { editPhoto } from '../../actions/photos';

const PolaroidImage = ({imageURL, caption, isFlipped, onFlip, deletePhoto, editPhoto}) => {
    return (
        <div className={`polaroid ${isFlipped ? 'flipped' : ''}`} onClick={onFlip}>
            <div className="polaroid-inner">
                <div className="polaroid-front">
                    <img src={imageURL} alt="Polaroid" />
                    <button onClick={() => {deletePhoto(imageURL);}}>Remove</button>
                </div>
                <div className="polaroid-back">
                    <div className="caption">{caption}</div>
                    <button onClick={() => {editPhoto(imageURL)}}>Edit</button>
                </div>
            </div>
        </div>
    );
}

export default PolaroidImage;
