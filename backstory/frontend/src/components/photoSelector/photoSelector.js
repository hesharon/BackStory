import "./photoSelector.css";

import React, { useState, useEffect } from "react";
import BasicPolaroidImage from "../BasicPolaroidImage/BasicPolaroidImage";

function PhotoSelector({ photos, collection, onSave }) {
  const [selectedPhotos, setSelectedPhotos] = useState(new Set(collection));
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex !== index ? index : null);
  };

  useEffect(() => {
    setSelectedPhotos(new Set(collection));
  }, [collection]);

  const handlePhotoToggle = (photo) => {
    const newSelectedPhotos = new Set(selectedPhotos);
    if (newSelectedPhotos.has(photo._id)) {
      newSelectedPhotos.delete(photo._id);
    } else {
      newSelectedPhotos.add(photo._id);
    }
    setSelectedPhotos(newSelectedPhotos);

    console.log(selectedPhotos)
  };

  const handleSave = () => {
    onSave(Array.from(selectedPhotos));
  };

  return (
    <div className="wrapper">
      <div className="grid">
        {photos?.map((photo, index) => (
          <div key={index}>
            <BasicPolaroidImage
              id={photo._id}
              isFlipped={flippedIndex === index}
              onFlip={() => handleFlip(index)}
              imageURL={`/photos/${photo.photoId}/image`}
              caption={photo.caption}
            />
            <input
              type="checkbox"
              className="simple-checkbox"
              checked={selectedPhotos.has(photo._id)} // Ensure you are checking the correct attribute
              onChange={() => handlePhotoToggle(photo)}
            />
          </div>
        ))}
      </div>
      <button onClick={handleSave}>Save</button>
    </div>
  );  
}

export default PhotoSelector;
