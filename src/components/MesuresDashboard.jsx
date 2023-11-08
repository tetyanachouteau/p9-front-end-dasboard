import React from 'react';
import styles from './MesuresDashboard.module.css';

function Mesures() {
    return (
        <div className={styles.container}>
            <div className={styles.measure}>
                <img src="/images/fat-icon.png" alt="Calories" />
                <div className={styles.value}>1930kCal</div>
                <div className={styles.label}>Calories</div>
            </div>
            <div className={styles.measure}>
                <img src="/images/carb-icon.png" alt="Proteines" />
                <div className={styles.value}>155g</div>
                <div className={styles.label}>Proteines</div>
            </div>
            <div className={styles.measure}>
                <img src="/images/calories-icon.png" alt="Glucides" />
                <div className={styles.value}>290g</div>
                <div className={styles.label}>Glucides</div>
            </div>
            <div className={styles.measure}>
                <img src="/images/protein-icon.png" alt="Lipides" />
                <div className={styles.value}>50g</div>
                <div className={styles.label}>Lipides</div>
            </div>
        </div>
    );
}

export default Mesures;
