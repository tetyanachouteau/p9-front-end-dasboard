// Dashboard.jsx
import React from 'react';
import Mesure from '../components/Mesure';
import HeaderDashboard from '../components/HeaderDashboard';
import Activity from '../components/Activity';
import Radar2 from '../components/Radar2';
import Objectifs3 from '../components/Objectifs3';
import KPI from '../components/KPI';
import styles from './dashboard.module.css';
import { useParams, Navigate } from 'react-router-dom';

import { USER_MAIN_DATA } from '../data/data'

function Dashboard() {
    let { id } = useParams();

    var mainData = USER_MAIN_DATA.filter(el => el.id === Number.parseInt(id))[0]
    console.log(mainData)
    if (mainData) {
        return (
            <div className={styles['dashboard-container']}>
                <HeaderDashboard name={mainData.userInfos.firstName} />
                <div className={styles['dashboard-middle']}>
                    <div className={styles['group-left']}>
                        <Activity />
                        <div className={styles['group-bottom']}>
                            <KPI />
                            <Objectifs3 className={styles['objectifs3']} />
                            <Radar2 className={styles['radar2']} />
                        </div>
                    </div>


                    <div className={styles['dashboard-right']}>
                        <Mesure icon="fat-icon.png" value={mainData.keyData.calorieCount + "kCal"} label="Calories" />
                        <Mesure icon="carbs-icon.png" value={mainData.keyData.proteinCount + "g"} label="Proteines" />
                        <Mesure icon="calories-icon.png" value={mainData.keyData.carbohydrateCount + "g"} label="Glucides" />
                        <Mesure icon="protein-icon.png" value={mainData.keyData.lipidCount + "g"} label="Lipides" />
                    </div>
                </div>
            </div>
        );
    } else {
        return <Navigate to="/erreur" />
    }
}
export default Dashboard;
