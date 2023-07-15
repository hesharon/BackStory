import styles from './Navbar.module.css'
import { useAuth0 } from '@auth0/auth0-react'

const Navbar = () => {
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0()

    const handleLogin = async () => {
        await loginWithRedirect({
          appState: {
            returnTo: "/",
          },
        })
      }

      const handleSignUp = async () => {
        await loginWithRedirect({
          appState: {
            returnTo: "/",
          },
          authorizationParams: {
            screen_hint: "signup",
          },
        })
      }

      const handleLogout = () => {
        logout({
          logoutParams: {
            returnTo: window.location.origin,
          },
        })
      }

    return (
    <header>
        <a className={styles.nav__title}>BackStory</a>
        <nav>
            <ul className={styles.nav__links}>
                {isAuthenticated ? 
                <li onClick={() => handleLogout()}>Logout</li> : 
                <>
                    <li onClick={() => handleLogin()}>Login</li>
                    <li onClick={() => handleSignUp()}>Sign up</li>
                </>}
            </ul>
        </nav>
    </header>
    )
}

export default Navbar