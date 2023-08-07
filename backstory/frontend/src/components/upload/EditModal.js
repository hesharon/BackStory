import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TextField from '@mui/material/TextField';
import { fetchUser } from '../../slices/user';
import styles from './Upload.module.css';

function EditModal({ photoId, closeModal }) {
  const BACKEND_URL =
    process.env.NODE_ENV === 'production'
      ? 'https://backstory-backend.onrender.com'
      : 'http://localhost:8000';

  const [caption, setCaption] = useState('');
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    fetch(`${BACKEND_URL}/users/${user.email}/photos/${photoId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ caption }),
    })
      .then(() => dispatch(fetchUser(user.email)))
      .then(() => closeModal())
      .catch(console.error);
  };

  return (
    <div className={styles.container}>
      <h2>Enter new Text</h2>
      <TextField
        id="outlined-basic"
        label="Something to remind you about this moment"
        variant="outlined"
        multiline
        rows={2}
        fullWidth
        style={{ marginTop: '20px' }}
        onChange={(event) => setCaption(event.target.value)}
      />
      <div className={styles.buttonWrapper}>
        <button variant="outlined" onClick={() => handleButtonClick()}>
          Upload
        </button>
      </div>
    </div>
  );
}

export default EditModal;
