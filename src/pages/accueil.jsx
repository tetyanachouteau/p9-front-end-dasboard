import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./accueil.module.css";

function Accueil({ data }) {
    // Extraction des données de la propriété "data"
    //const { name, id } = data;
  
    return (

        
        <div className={styles.profilContainer}>
            <h1>SportSee Start</h1>
            <h2>Dashboard</h2>
            <Link to={"/dashboard/12"} className={styles.dashboardButton} >
            Profil de Karl ID12 <h2>Toto</h2>
            </Link>
            <Link to={"/dashboard/18"} className={styles.dashboardButton} >
            <p>Profil de Césilia ID18 <h2>Titi</h2></p>
            </Link>

            <h2>Profil</h2>
            <Link to={"/profile/12"} className={styles.dashboardButton} >
            Profil de Karl ID12 <h2>Toto</h2>
            </Link>
            <Link to={"/profile/18"} className={styles.dashboardButton} >
            <p>Profil de Césilia ID18 <h2>Titi</h2></p>
            </Link>
        </div>
    );
}

export default Accueil;
