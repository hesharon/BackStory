import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile'
import styles from "./Home.module.css";

function Home() {
  return (
    <div>
      <Navbar />
        <Profile profileImg={"https://media.gq.com/photos/5ba143d4fc6c6260e811638b/1:1/w_1333,h_1333,c_limit/Toad-Alternatives-GQ-2018-091818.jpg"} bio="Already for a mushroom!" name="Toad"/>
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
    </div>
  );
}

export default Home;
