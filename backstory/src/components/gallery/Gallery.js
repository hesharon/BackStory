import "./Gallery.css";

import React, { useState } from "react";

import AddCard from "../upload/AddCard";
import Modal from "@mui/material/Modal";
import PolaroidImage from '../polaroidImage/PolaroidImage';
import Upload from "../upload/Upload";

function Gallery({photos}) {
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex !== index ? index : null);
  };
  const handleSetUploadModalOpen = () => {
    setUploadModalOpen(true);
  };
  const handleSetUploadModalClose = () => {
    setUploadModalOpen(false);
  };

  return (
    <>
      <div className="wrapper">
        <div className="grid">
          <div onClick={handleSetUploadModalOpen}>
            <AddCard />
          </div>
          {photos.map((photo, index) => (
            <PolaroidImage
              key={index}
              isFlipped={flippedIndex === index}
              onFlip={() => handleFlip(index)}
              imageURL={photo.imageSrc}
              caption={photo.caption}
            />
          ))}
        </div>
      </div>
      <Modal open={uploadModalOpen} onClose={handleSetUploadModalClose}>
        <div className="modal">
          <Upload />
        </div>
      </Modal>
    </>
  );
}


export default Gallery;