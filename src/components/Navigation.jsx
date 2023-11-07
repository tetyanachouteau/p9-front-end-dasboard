import styles from "./Navigation.module.css"
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <div className={styles.navigation}>
            <ul>
                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? styles.activeLink : "")}>
                        Accueil
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? styles.activeLink : "")}>
                        Profil
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? styles.activeLink : "")}>
                        Réglages
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? styles.activeLink : "")}>
                        Communauté
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;
