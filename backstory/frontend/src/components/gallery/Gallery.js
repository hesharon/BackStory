import "./Gallery.css";

import React, { useState } from "react";

import AddCard from "../upload/AddCard";
import EditModal from "../upload/EditModal";
import Modal from "@mui/material/Modal";
import PolaroidImage from '../polaroidImage/PolaroidImage';
import Upload from "../upload/Upload";
import { deletePhoto } from "../../actions/photos";
import { useDispatch } from 'react-redux'

function Gallery({photos}) {
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editSRC, setEditSRC] = useState("");
  const dispatch = useDispatch();

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex !== index ? index : null);
  };
  const handleDelete = (imageURL) => {
    dispatch(deletePhoto({imageURL: imageURL}));
  };
  const handleEdit = (imageURL) => {
    setEditSRC(imageURL);
    setEditModalOpen(true);
    //dispatch(editPhoto({imageURL: imageURL, caption: caption}));
  };
  const handleSetUploadModalOpen = () => {
    setUploadModalOpen(true);
  };
  const handleSetUploadModalClose = () => {
    setUploadModalOpen(false);
  };
  const handleSetEditModalOpen = () => {
    setEditModalOpen(true);
  };
  const handleSetEditModalClose = () => {
    setEditModalOpen(false);
  };

  return (
    <>
      <div className="wrapper">
        <div className="grid">
          <div onClick={handleSetUploadModalOpen}>
            <AddCard />
          </div>
          {photos?.map((photo, index) => (
            <PolaroidImage
              key={index}
              isFlipped={flippedIndex === index}
              onFlip={() => handleFlip(index)}
              imageURL={photo.imageSrc}
              caption={photo.caption}
              deletePhoto={handleDelete}
              editPhoto={handleEdit}
            />
          ))}
        </div>
      </div>
      <Modal open={uploadModalOpen} onClose={handleSetUploadModalClose}>
        <div className="modal">
          <Upload imageSrc={"https://cdn.wallpapersafari.com/50/4/wa7o0g.png"} closeModal={handleSetUploadModalClose}/>
        </div>
      </Modal>
      <Modal open={editModalOpen} onClose={handleSetEditModalClose}>
        <div className="modal">
          <EditModal imageSrc={editSRC} closeModal={handleSetEditModalClose}/>
        </div>
      </Modal>
    </>
  );
}


export default Gallery;