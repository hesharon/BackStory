import React, { useState, useEffect } from "react";
import styles from "./Collections.module.css";
import Collection from "../collection/Collection";
import AddCard from "../upload/AddCard";
import New from "../collections/New";
import Modal from "@mui/material/Modal";
import { useAuth0 } from "@auth0/auth0-react";
import CollectionView from "../collection/CollectionView";

function Collections() {
  const [collections, setCollections] = useState([]);
  const [showCollections, setShowCollections] = useState(true);
  const [images, setImages] = useState([]);
  const [newCollectionModalOpen, setNewCollectionModalOpen] = useState(false);
  const [collectionId, setCollectionId] = useState(null)
  const { user } = useAuth0();

  useEffect(() => {
    fetch(`/users/${user.email}/collections`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(response => response.json())
    .then(data => setCollections(data))
    .catch(console.error);
  }, []);

  const handleNewCollectionUploadModalOpen = () => {
    setNewCollectionModalOpen(true);
  };

  const handleNewCollectionModalClose = () => {
    setNewCollectionModalOpen(false);
  };

  console.log('collections', collections)

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
                name={collection.title}
                collectionId={collection._id}
                onSelect={() => {
                  setShowCollections(false);
                  setImages(collection.photos);
                  setCollectionId(collection._id)
                }}
              />
            ))}
          </div>
        </div>
      ) : (
        <CollectionView images={images} collectionId={collectionId} />
      )}
      <Modal
        open={newCollectionModalOpen}
        onClose={handleNewCollectionModalClose}
      >
        <div className={styles.modal}>
          <New closeModal={handleNewCollectionModalClose} />
        </div>
      </Modal>
    </>
  );
}

export default Collections;
