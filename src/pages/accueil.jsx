import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import styles from "./accueil.module.css";

function Accueil({ data }) {
    // Extraction des données de la propriété "data"
    const { name, id } = data;
  
    return (
        <div className={styles.profilContainer}>
            <Header/>
            <h1>SportSee Start</h1>

            <Link to={"/dashboard/"+id} className={styles.profilContainer} >
            Profil de Karl ID12 <h2>{name}</h2>
            </Link>

            <Link to={"/dashboard/"+id} className={styles.profilContainer} >
            Profil de Césilia ID18 <h2>{name}</h2>
            </Link>
            
        </div>
    );
}

export default Accueil;
