import styles from './Profile.module.css'
import { useSelector } from 'react-redux'

const Profile = () => {
    const { username, bio, profileImg } = useSelector(state => state.user)

    return (<div className={styles.profile}>
        <img src={profileImg} alt="Profile"/>
        <h3>{username}</h3>
        <div>{bio}</div>
        <button>Follow</button>
    </div>)
}

export default Profile