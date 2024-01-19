// Dashboard.jsx

// Import des bibliothèques et composants nécessaires depuis React et d'autres fichiers
import React, { useEffect, useState } from 'react';
import Mesure from '../components/Mesure';
import HeaderDashboard from '../components/HeaderDashboard';
import Activity from '../components/Activity';
import Objectif from '../components/Objectif';
import Radar from '../components/Radar';
import KPI from '../components/KPI';
import styles from './dashboard.module.css';
import { useParams, useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';

// Import de la fonction getProfil depuis le fichier de services profilRequest
import getProfil from '../services/profilRequest';

// Déclaration du composant Dashboard
function Dashboard() {
    // Récupération de l'ID depuis les paramètres d'URL à l'aide de useParams
    let { id } = useParams();

    // Initialisation de la fonction de navigation pour rediriger l'utilisateur
    const navigate = useNavigate();

    // Initialisation du state pour stocker les données du profil
    const [profil, setProfil] = useState(null);

    // Effet useEffect pour récupérer les données du profil lors du chargement du composant
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Appel à la fonction getProfil pour obtenir les données du profil en fonction de l'ID
                const profilData = await getProfil(id);

                // Mise à jour du state avec les données du profil récupérées
                setProfil(profilData);
            } catch (erreur) {
                // En cas d'erreur, redirection vers la page d'erreur
                navigate("/erreur");
            }
        }

        // Appel de la fonction fetchData
        fetchData();
    }, [id, navigate]); // Dépendance à l'ID pour que l'effet se déclenche à chaque changement d'ID

    // Vérification si les données du profil existent
    if (profil) {
        // Affichage du composant Dashboard avec les données du profil
        return (
            <div className={styles['dashboard-container']}>
                <HeaderDashboard name={profil.firstName} />
                <div className={styles['dashboard-middle']}>
                    <div className={styles['group-left']}>
                        {/* Section gauche du tableau de bord */}
                        <Activity activity={profil.activities} />
                        {/* Composant Activity affichant les données d'activité du profil */}
                        <div className={styles['group-bottom']}>
                            <KPI sessions={profil.averageSessions} />
                            {/* Composant KPI affichant les sessions moyennes du profil */}
                            <Radar perf={profil.perfomances} />
                            {/* Composant Radar affichant les performances du profil */}
                            {/* Le score est soit dans todayScore soit dans score */}
                            <Objectif score={profil.score} />
                            {/* Composant Objectif affichant le score du profil */}
                        </div>
                    </div>


                    <div className={styles['dashboard-right']}>
                        <Mesure icon="fat-icon.png" value={profil.calorie + "kCal"} label="Calories" />
                        <Mesure icon="carbs-icon.png" value={profil.proteine + "g"} label="Proteines" />
                        <Mesure icon="calories-icon.png" value={profil.glucide + "g"} label="Glucides" />
                        <Mesure icon="protein-icon.png" value={profil.lipide + "g"} label="Lipides" />
                    </div>
                </div>
            </div>
        );
    } else {
        // Redirection vers la page d'erreur si les données du profil n'existent pas encore
        return <Navigation to="/erreur" />
    }
}

// Export du composant Dashboard par défaut
export default Dashboard;
