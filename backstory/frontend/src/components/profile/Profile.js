import styles from './Profile.module.css'

const Profile = ({profileImg, name, bio}) => 
    <div className={styles.profile}>
        <img src={profileImg} alt="Profile"/>
        <h3>{name}</h3>
        <div>{bio}</div>
        <button>Follow</button>
    </div>

export default Profile