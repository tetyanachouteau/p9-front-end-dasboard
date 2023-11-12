
import React from 'react';
import styles from "./Poids1.module.css"

function Poids1() {

    return (
        <div className={styles.poids1}>
            <p>Activité quotidienne (Poids1)</p>
            <div>
            - Poids (kg)
            - Calories brûlées (kCal)
            </div>
        </div >
    );
}

export default Poids1;