import styles from './Navbar.module.css'

const Navbar = () =>
    <header>
        <a className={styles.nav__title}>BackStory</a>
        <nav>
            <ul className={styles.nav__links}>
                <li><a>Login</a></li>
                <li><a>Sign out</a></li>
            </ul>
        </nav>
    </header>

export default Navbar