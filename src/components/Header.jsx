import styles from "./Header.module.css"
import Navigation from './Navigation';
import React from 'react';

function Header() {

    return (
        <header className={styles.header}>
            <img src="/LOGO.png" alt="Logo SportSee"></img>
            <Navigation />
        </header>
    );
}


export default Header;