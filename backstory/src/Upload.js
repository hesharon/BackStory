import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import styles from "./Upload.module.css";

function Upload() {
  return (
    <div className={styles.container}>
      <h2>Upload Photo</h2>
      <div>
        <Dropzone></Dropzone>
      </div>
    </div>
  );
}

function Dropzone() {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  );
}

export default Upload;
