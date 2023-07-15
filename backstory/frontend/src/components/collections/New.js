import styles from "./New.module.css";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";

function New({ closeModal }) {
  const [title, setTitle] = useState("");

  function handleButtonClick() {
    // TODO: Add dispatch
    closeModal();
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>New Collection</h2>
      <TextField
        id="outlined-basic"
        label="Collection Name"
        variant="outlined"
        fullWidth
        style={{ marginTop: "20px" }}
        onChange={(event) => setTitle(event.target.value)}
      />
      <div className={styles.buttonWrapper}>
        <button variant="outlined" onClick={() => handleButtonClick()}>
          Upload
        </button>
      </div>
    </div>
  );
}

export default New;
