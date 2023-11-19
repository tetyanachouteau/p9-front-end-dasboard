// Dashboard.jsx
import React from 'react';
import Mesure from '../components/Mesure';
import HeaderDashboard from '../components/HeaderDashboard';
import Activity from '../components/Activity';
import Radar2 from '../components/Radar2';
import Objectifs3 from '../components/Objectifs3';
import KPI4 from '../components/KPI4';
import styles from './dashboard.module.css';
import { useParams } from 'react-router-dom';

import { USER_MAIN_DATA } from '../data/data'

function Dashboard() {
    let { id } = useParams();

    var mainData = USER_MAIN_DATA.filter(el => el.id === Number.parseInt(id))[0]
    console.log(mainData)

    return (
        <div className={styles['dashboard-container']}>
            <HeaderDashboard name={mainData.userInfos.firstName} />
            <div className={styles['dashboard-middle']}>
                <div className={styles['group-left']}>
                    <Activity className={styles['activity']} />
                    <div className={styles['group-bottom']}>
                        <div className={styles['objectifs-container']}>
                            <Objectifs3 className={styles['objectifs3']} />
                        </div>
                        <div className={styles['radar-container']}>
                            <Radar2 className={styles['radar2']} />
                        </div>
                        <div className={styles['kpi-container']}>
                            <KPI4 className={styles['kpi4']} />
                        </div>
                    </div>
                </div>


                <div className={styles['dashboard-right']}>
                    <Mesure icon="fat-icon.png" value="1930kCal" label="Calories" />
                    <Mesure icon="carbs-icon.png" value="155g" label="Proteines" />
                    <Mesure icon="calories-icon.png" value="290g" label="Glucides" />
                    <Mesure icon="protein-icon.png" value="50g" label="Lipides" />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
