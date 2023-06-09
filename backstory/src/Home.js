import Tabs from "./Tabs";
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile'
import styles from "./Home.module.css";

function Home() {
  return (
    <div>
      <Navbar />
        <Profile profileImg={"https://media.gq.com/photos/5ba143d4fc6c6260e811638b/1:1/w_1333,h_1333,c_limit/Toad-Alternatives-GQ-2018-091818.jpg"} bio="Already for a mushroom!" name="Toad"/>
        <Tabs/>
    </div>
  );
}

export default Home;
