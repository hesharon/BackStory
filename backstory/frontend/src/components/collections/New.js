import styles from "./New.module.css";
import TextField from "@mui/material/TextField";
import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";

function New({ closeModal }) {
  const [title, setTitle] = useState("");
  const { user } = useAuth0()

  function handleButtonClick() {
    fetch(`/users/${user.email}/collections`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },    
      body: JSON.stringify({ title: title }),
    })
    .catch(console.error)
    console.log(closeModal);
    if (typeof closeModal === "function") {
      closeModal();
    }    
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
