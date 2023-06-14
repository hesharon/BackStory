import React, { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./Upload.module.css";

function Upload() {
  return (
    <div className={styles.container}>
      <h2>Upload Photo</h2>
      <Dropzone></Dropzone>
      <TextField
        id="outlined-basic"
        label="Something to remind you about this moment"
        variant="outlined"
        multiline
        rows={2}
        fullWidth
        style={{ marginTop: "20px" }}
      />
      <div className={styles.buttonWrapper}>
        <Button variant="outlined">Upload</Button>
      </div>
    </div>
  );
}

// Example code adapted from https://react-dropzone.js.org
function Dropzone() {
  const [files, setFiles] = useState([]);

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
