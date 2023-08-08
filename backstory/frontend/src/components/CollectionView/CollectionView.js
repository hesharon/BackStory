import './CollectionView.css';

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import AddCard from '../upload/AddCard';
import Modal from '@mui/material/Modal';
import Upload from '../upload/Upload';
import { useAuth0 } from '@auth0/auth0-react';
import PhotoSelector from '../photoSelector/photoSelector';
import BasicPolaroidImage from '../BasicPolaroidImage/BasicPolaroidImage';

function CollectionView({ images, collectionId }) {
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [displayPhotoSelector, setDisplayPhotoSelector] = useState(false);
  const [photos, setPhotos] = useState([]);
  const { user } = useAuth0();

  const BACKEND_URL =
    process.env.NODE_ENV === 'production'
      ? 'https://backstory-backend.onrender.com'
      : 'http://localhost:8000';

  useEffect(() => {
    fetch(
      `${BACKEND_URL}/users/${user.email}/collections/${collectionId}/photos`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then((res) => res.json())
      .then((photos) => setPhotos(photos))
      .catch(console.error);
  }, [collectionId]);

  const photoIds = useSelector((state) => state.user.photos);

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex !== index ? index : null);
  };
  const handleSetUploadModalClose = () => {
    setUploadModalOpen(false);
  };

  const handleSaveCollection = (selectedPhotoIds) => {
    const userEmail = user.email;
    const filteredPhotoIds = selectedPhotoIds.filter(
      (id) => id !== null && id !== undefined
    );

    fetch(`${BACKEND_URL}/users/${userEmail}/collections/${collectionId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ photos: filteredPhotoIds }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error: ' + response.statusText);
        }
      })
      .then((data) => {
        console.log('Collection updated: ', data);
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
  };

  return (
    <div>
      {displayPhotoSelector ? (
        <PhotoSelector
          photos={photoIds}
          collection={images ? images.map((image) => image._id) : []}
          onSave={handleSaveCollection}
        />
      ) : (
        <>
          <div className="wrapper">
            <div className="grid">
              <div
                onClick={() => setDisplayPhotoSelector(!displayPhotoSelector)}
              >
                <AddCard />
              </div>
              {photos &&
                photos?.map((photo, index) => (
                  <BasicPolaroidImage
                    id={photo._id}
                    key={index}
                    isFlipped={flippedIndex === index}
                    onFlip={() => handleFlip(index)}
                    imageURL={`${BACKEND_URL}/photos/${photo.photoId}/image`}
                    caption={photo.caption}
                  />
                ))}
            </div>
          </div>
          <Modal open={uploadModalOpen} onClose={handleSetUploadModalClose}>
            <div className="modal">
              <Upload
                imageSrc={'https://cdn.wallpapersafari.com/50/4/wa7o0g.png'}
                closeModal={handleSetUploadModalClose}
              />
            </div>
          </Modal>
        </>
      )}
    </div>
  );
}

export default CollectionView;
