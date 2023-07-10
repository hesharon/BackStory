import React, { useState } from "react";
import styles from "./Collections.module.css";
import Collection from "../collection/Collection";
import { useSelector } from "react-redux";
import Gallery from "../gallery/Gallery";
import AddCard from "../upload/AddCard";
import New from "../collections/New";
import Modal from "@mui/material/Modal";

function Collections() {
  const collections = useSelector((state) => state.collections);
  const [showCollections, setShowCollections] = useState(true);
  const [images, setImages] = useState([]);
  const [newCollectionModalOpen, setNewCollectionModalOpen] = useState(false);

  const handleNewCollectionUploadModalOpen = () => {
    setNewCollectionModalOpen(true);
  };

  const handleNewCollectionModalClose = () => {
    setNewCollectionModalOpen(false);
  };

  return (
    <>
      {showCollections ? (
        <div className={styles.wrapper}>
          <div className={styles.grid}>
            <div onClick={handleNewCollectionUploadModalOpen}>
              <AddCard />
            </div>
            {collections.map((collection, index) => (
              <Collection
                key={index}
                name={collection.name}
                images={collection.images}
                onSelect={() => {
                  setShowCollections(false);
                  setImages(collection.images);
                }}
              />
            ))}
          </div>
        </div>
      ) : (
        <Gallery photos={images} />
      )}
      <Modal
        open={newCollectionModalOpen}
        onClose={handleNewCollectionModalClose}
      >
        <div className={styles.modal}>
          <New />
        </div>
      </Modal>
    </>
  );
}

export default Collections;
