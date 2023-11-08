import styles from "./HeaderDashboard.module.css"
//import Navigation from './Navigation';
import React from 'react';

function HeaderDashboard() {
    return (
        <headerdashboard className={styles.headerdashbo}>
            <div>Bonjour Thomas</div>
            <div>Félicitation ! Vous avez explosé vos objectifs hier
                <span role="img" aria-label="coucou">👏</span>
            </div>
        </headerdashboard>
    );
}

export default HeaderDashboard;