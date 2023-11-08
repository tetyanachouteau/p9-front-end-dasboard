import React from 'react';
import Header from './Header';
import SiderLeft from './SiderLeft';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';

function Layout() {
    return (
        <div className={styles.layout}>
            <Header />
            <div className={styles.contentContainer}>
                <div className={styles.siderleft}>
                    <SiderLeft />
                </div>
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
export default Layout;