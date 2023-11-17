import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./accueil.module.css";

function Accueil({ data }) {
    // Extraction des données de la propriété "data"
    //const { name, id } = data;
  
    return (

        
        <div className={styles.profilContainer}>
            <h1>SportSee Start</h1>

            <Link to={"/dashboard/"} className={styles.dashboardButton} >
            Profil de Karl ID12 <h2>Toto</h2>
            </Link>

            <Link to={"/dashboard/"} className={styles.profilContainer} >
            Profil de Césilia ID18 <h2>Titi</h2>
            </Link>
            
        </div>
    );
}

export default Accueil;
