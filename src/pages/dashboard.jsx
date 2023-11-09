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
            <div className={styles['dashboard-top']}>
                <HeaderDashboard />
            </div>
            <div className={styles['dashboard-middle']}>
                <div className={styles['group-left']}>
                    <Poids1 />
                    <Objectifs3 />
                    <Radar2 />
                    <KPI4 />
                </div>
                <div className={styles['dashboard-right']}>
                    <MesuresDashboard />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
