import React, { useCallback, useEffect, useState } from "react";

import TextField from "@mui/material/TextField";
import { editPhoto } from "../../actions/photos";
import styles from "./Upload.module.css";
import { useDispatch } from 'react-redux'
import { useDropzone } from "react-dropzone";

function EditModal({imageSrc, closeModal}) {
  const [files, setFiles] = useState([]);
  const [caption, setCaption] = useState("");
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    {/* Will need to change hard-coded imageSrc when we have a blob storage and db setup to store the images*/}
    dispatch(editPhoto({imageSrc: imageSrc, caption: caption}));
    closeModal()
  }
  
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
        style={{ marginTop: "20px" }}
        onChange={(event) => setCaption(event.target.value)}
      />
      <div className={styles.buttonWrapper}>
        <button variant="outlined" onClick={() => handleButtonClick()}>Upload</button>
      </div>
    </div>
  );
}

export default EditModal
