import './Gallery.css';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AddCard from '../upload/AddCard';
import EditModal from '../upload/EditModal';
import Modal from '@mui/material/Modal';
import PolaroidImage from '../PolaroidImage/PolaroidImage';
import Upload from '../upload/Upload';
import { fetchUser } from '../../slices/user.js';
import { useAuth0 } from '@auth0/auth0-react';

function Gallery() {
  const BACKEND_URL =
    process.env.NODE_ENV === 'production'
      ? 'https://backstory-backend.onrender.com'
      : 'http://localhost:8000';

  const [flippedIndex, setFlippedIndex] = useState(null);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editPhotoId, setEditPhotoId] = useState('');
  const dispatch = useDispatch();
  const { user } = useAuth0();

  useEffect(() => {
    dispatch(fetchUser(user.email));
  }, [dispatch]);

  const photoIds = useSelector((state) => state.user.photos);

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex !== index ? index : null);
  };

  const handleDelete = (photoId) => {
    fetch(`${BACKEND_URL}/users/${user.email}/photos/${photoId}`, {
      method: 'DELETE',
    })
      .then(() => dispatch(fetchUser(user.email)))
      .catch(console.error);
  };

  const handleEdit = (photoId) => {
    setEditPhotoId(photoId);
    setEditModalOpen(true);
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
          {photoIds?.map((photo, index) => (
            <PolaroidImage
              id={photo._id}
              key={index}
              isFlipped={flippedIndex === index}
              onFlip={() => handleFlip(index)}
              imageURL={`${BACKEND_URL}/photos/${photo.photoId}/image`}
              caption={photo.caption}
              deletePhoto={handleDelete}
              editPhoto={handleEdit}
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
      <Modal open={editModalOpen} onClose={handleSetEditModalClose}>
        <div className="modal">
          <EditModal
            photoId={editPhotoId}
            closeModal={handleSetEditModalClose}
          />
        </div>
      </Modal>
    </>
  );
}

export default Gallery;
