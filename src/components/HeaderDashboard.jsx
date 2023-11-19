import styles from "./HeaderDashboard.module.css"
import React from 'react';

function HeaderDashboard({name}) {
    return (
        <div className={styles.headerdashboard}>
            <p className={styles.text}>Bonjour <span className={styles.red}>{name}</span></p>
            <p>Félicitation ! Vous avez explosé vos objectifs hier
                <span role="img" aria-label="coucou">👏</span>
            </p>
        </div>
    );
}

export default HeaderDashboard;