import Button from '../button/Button'
import styles from './Profile.module.css'

const Profile = ({profileImg, name, bio}) => 
    <div className={styles.profile}>
        <img src={profileImg}/>
        <h3>{name}</h3>
        <div>{bio}</div>
        <Button content="Follow"/>
    </div>

export default Profile