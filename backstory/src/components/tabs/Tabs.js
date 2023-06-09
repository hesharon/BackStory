import styles from "./Tabs.module.css";

function Tabs({ setActiveTab }) {
  console.log("yoyo")
  return (
    <div className={styles.grid}>
      <div
        onClick={() => setActiveTab('gallery')}
        className={styles.tab}
      >
        <h2>Gallery</h2>
      </div>

      <div
        onClick={() => setActiveTab('collections')}
        className={styles.tab}
      >
        <h2>Collections</h2>
      </div>
    </div>
  );
}

export default Tabs;
