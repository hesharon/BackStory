import React, { useState, useEffect } from 'react';
import styles from './Collections.module.css';
import Collection from '../collection/Collection';
import AddCard from '../upload/AddCard';
import New from '../collections/New';
import Modal from '@mui/material/Modal';
import { useAuth0 } from '@auth0/auth0-react';
import CollectionView from '../CollectionView/CollectionView';

function Collections() {
  const [collections, setCollections] = useState([]);
  const [showCollections, setShowCollections] = useState(true);
  const [images, setImages] = useState([]);
  const [newCollectionModalOpen, setNewCollectionModalOpen] = useState(false);
  const [collectionId, setCollectionId] = useState(null);
  const { user } = useAuth0();

  const BACKEND_URL =
    process.env.NODE_ENV === 'production'
      ? 'https://backstory-backend.onrender.com'
      : 'http://localhost:8000';

  useEffect(() => {
    fetch(`${BACKEND_URL}/users/${user.email}/collections`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => setCollections(data))
      .catch(console.error);
  }, []);

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
                name={collection.title}
                collectionId={collection._id}
                onSelect={() => {
                  setShowCollections(false);
                  setImages(collection.photos);
                  setCollectionId(collection._id);
                }}
              />
            ))}
          </div>
        </div>
      ) : (
        <>
          <button
            className={styles['back-to-collections']}
            onClick={() => setShowCollections(true)}
          >
            Back to collections
          </button>
          <CollectionView images={images} collectionId={collectionId} />
        </>
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
