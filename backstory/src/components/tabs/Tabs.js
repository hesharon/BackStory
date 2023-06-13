import styles from "./Tabs.module.css";

function Tabs({ setActiveTab }) {
  console.log("yoyo");
  return (
    <div className={styles.grid}>
      <div className={styles.tab}>
        <h2 onClick={() => setActiveTab("gallery")}>Gallery</h2>
      </div>

      <div className={styles.tab}>
        <h2 onClick={() => setActiveTab("collections")}>Collections</h2>
      </div>
    </div>
  );
}

export default Tabs;
