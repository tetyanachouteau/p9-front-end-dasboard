import styles from "./HeaderDashboard.module.css"
//import Navigation from './Navigation';
import React from 'react';

function Header() {

    return (
        <header className={styles.header}>
            Bonjour Thomas
            Félicitation ! Vous avez explosé vos objectifs hier <span role="img" aria-label="coucou">👏</span>
        </header>


    );
}


export default Header;