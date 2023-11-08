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
                <aside className={styles.siderleft}>
                    <SiderLeft />
                </aside>
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
export default Layout;