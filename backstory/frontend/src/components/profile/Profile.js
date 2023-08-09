import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Profile.module.css";
import { updateUserBio } from "../../slices/user"; // Import your action creator for updating bio
import { Button, Modal, TextField } from "@mui/material";

const Profile = () => {
  const { email, username, bio, profileImg } = useSelector((state) =>
    state.user
  );
  const dispatch = useDispatch();

  const [editing, setEditing] = useState(false);
  const [newBio, setNewBio] = useState(bio);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState(profileImg);

  const handleUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleUploadClick = () => {
    setUploadModalOpen(false);
  };

  const handleBioChange = (e) => {
    setNewBio(e.target.value);
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    dispatch(updateUserBio({ email, newBio, profileImg: imageUrl }));
    setEditing(false);
  };

  return (
    <div className={styles.profile}>
      <Modal
        open={uploadModalOpen}
        onClose={() => setUploadModalOpen(false)}
      >
        <div className={styles.uploadContainer}>
          <TextField
            label="Image URL"
            variant="outlined"
            value={imageUrl}
            onChange={handleUrlChange}
            fullWidth
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleUploadClick}
          >
            Apply
          </Button>
        </div>
      </Modal>
      <img
        src={profileImg}
        alt="Profile"
        onClick={editing ? () => setUploadModalOpen(true) : null}
      />
      <h3>{username}</h3>
      {editing
        ? (
          <textarea
            value={newBio}
            onChange={handleBioChange}
            rows="4"
            cols="50"
          />
        )
        : <div>{bio}</div>}
      {editing ? null : <button>Follow</button>}
      {editing
        ? (
          <>
            <button onClick={handleSaveClick}>Save</button>
            <button onClick={()=>setEditing(false)}>Cancel</button>
          </>
        )
        : <button onClick={handleEditClick}>Edit</button>}
    </div>
  );
};

export default Profile;
