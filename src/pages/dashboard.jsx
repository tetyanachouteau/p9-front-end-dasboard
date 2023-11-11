// Dashboard.jsx
import React from 'react';
import MesuresDashboard from '../components/MesuresDashboard';
import HeaderDashboard from '../components/HeaderDashboard';
import Poids1 from '../components/Poids1';
import Radar2 from '../components/Radar2';
import Objectifs3 from '../components/Objectifs3';
import KPI4 from '../components/KPI4';
import styles from './dashboard.module.css';

function Dashboard() {
    return (
        <div className={styles['dashboard-container']}>
            <HeaderDashboard />
            <div className={styles['dashboard-middle']}>
                <div className={styles['group-left']}>
                    <div className={styles['poids-container']}>
                        <Poids1 className={styles['poids1']} />    
                    </div>
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
                    <MesuresDashboard />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
