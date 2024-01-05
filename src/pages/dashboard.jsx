// Dashboard.jsx
import React from 'react';
import Mesure from '../components/Mesure';
import HeaderDashboard from '../components/HeaderDashboard';
import Activity from '../components/Activity';
import Objectif from '../components/Objectif';
import Radar from '../components/Radar';
import KPI from '../components/KPI';
import styles from './dashboard.module.css';
import { useParams, Navigate } from 'react-router-dom';

//export default)
import getProfil from '../services/profilRequest'
//getPr()
function Dashboard() {
    let { id } = useParams();
    const profil = getProfil(id);
    console.log(profil);
//profilmodel ou tout est dans une class profil.lastname... main disparé mais profil non
    if (profil) {
        return (
            <div className={styles['dashboard-container']}>
                <HeaderDashboard name={profil.firstName} />
                <div className={styles['dashboard-middle']}>
                    <div className={styles['group-left']}>
                        <Activity />
                        <div className={styles['group-bottom']}>
                            <KPI />
                            <Radar />
                            {/* Le score est soit dans todayScore soit dans score */}
                            <Objectif score={profil.score} />
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
        return <Navigate to="/erreur" />
    }
}
export default Dashboard;
