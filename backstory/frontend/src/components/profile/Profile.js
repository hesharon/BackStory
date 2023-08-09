import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Profile.module.css";
import { updateUserBio } from "../../slices/user"; // Import your action creator for updating bio

const Profile = () => {
  const { email, username, bio, profileImg } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [editing, setEditing] = useState(false);
  const [newBio, setNewBio] = useState(bio);

  const handleBioChange = (e) => {
    setNewBio(e.target.value);
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    dispatch(updateUserBio({email, newBio}));
    setEditing(false);
  };

  return (
    <div className={styles.profile}>
      <img src={profileImg} alt="Profile" />
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
      <button>Follow</button>
      {editing
        ? <button onClick={handleSaveClick}>Save</button>
        : <button onClick={handleEditClick}>Edit</button>}
    </div>
  );
};

export default Profile;
