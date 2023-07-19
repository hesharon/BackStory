import React, { useCallback, useEffect, useState } from "react";

import TextField from "@mui/material/TextField";
import { fetchPhotoIds } from "../../slices/photos";
import styles from "./Upload.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from 'react-redux'
import { useDropzone } from "react-dropzone";

function Upload({closeModal}) {
  const [files, setFiles] = useState([]);
  const [caption, setCaption] = useState("");
  const dispatch = useDispatch();
  const { user } = useAuth0()

  const handleButtonClick = () => {
    const formData = new FormData()
    formData.append('file', files[0])
    formData.append('caption', caption)
    formData.append('email', user.email)

    fetch('/photos', {
      method: 'POST',
      body: formData
    }).then(() => dispatch(fetchPhotoIds(user.email)))
    .catch(console.error)
    closeModal()
  }
  
  return (
    <div className={styles.container}>
      <h2>Upload Photo</h2>
      <Dropzone setFiles={setFiles} files={files}/>
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

// Example code adapted from https://react-dropzone.js.org
function Dropzone({setFiles, files}) {
  const onDrop = useCallback((acceptedFiles) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const style = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "#eeeeee",
    borderStyle: "dashed",
    backgroundColor: "#fafafa",
    color: "#bdbdbd",
    outline: "none",
    transition: "border .24s ease-in-out",
  };

  const previewContainer = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  };

  const thumb = {
    display: "inline-flex",
    justifyContent: "center",
    borderRadius: 2,
    border: "1px solid #eaeaea",
    marginBottom: 8,
    marginRight: 8,
    width: 250,
    height: 250,
    padding: 4,
    boxSizing: "border-box",
  };

  const thumbInner = {
    display: "flex",
    minWidth: 0,
    overflow: "hidden",
  };

  const img = {
    display: "block",
    width: "auto",
    height: "100%",
  };

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          alt="preview"
          src={file.preview}
          style={img}
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <>
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
      <div style={previewContainer}>{thumbs}</div>
    </>
  );
}

export default Upload;
