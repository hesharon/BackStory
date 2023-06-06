import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.grid}>
      <a
        href="./gallery.html"
        className={styles.tab}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>Gallery</h2>
      </a>

      <a
        href="./collections.html"
        className={styles.tab}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>Collections</h2>
      </a>
    </div>
  );
}

export default Home;
