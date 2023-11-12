import React from 'react';
import styles from './Mesure.module.css';

function Mesures({icon, value, label}) {
    return (
        <div className={styles.measure}>
            <img src={"/images/"+icon} alt={label} />
            <div className={styles.grouptext}>
            <div className={styles.value}>{value}</div>
            <div className={styles.label}>{label}</div>
            </div>
        </div>
    );
}

export default Mesures;
