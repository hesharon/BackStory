import AddIcon from "@mui/icons-material/Add";
import styles from "./AddCard.module.css";

function AddCard() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <AddIcon fontSize="large" />
      </div>
    </div>
  );
}

export default AddCard;
